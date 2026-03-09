import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const DonateSchema = z.object({
  amount: z.number().min(1, "Minimaal € 1").max(10000, "Maximaal € 10.000"),
  name: z.string().min(1, "Naam verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
  newsletter: z.boolean(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, name, email, newsletter } = DonateSchema.parse(body);

    const apiKey = process.env.MOLLIE_API_KEY;

    // No Mollie key configured — fall back to original donation page
    if (!apiKey) {
      const fallbackUrl = new URL("https://football-is-life.nl/doneren/");
      return NextResponse.json({ checkoutUrl: fallbackUrl.toString() });
    }

    // Dynamic import keeps Mollie server-side only
    const { createMollieClient } = await import("@mollie/api-client");
    const mollie = createMollieClient({ apiKey });

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ??
      (req.headers.get("origin") || "http://localhost:3001");

    const redirectUrl = new URL("/doneren/bedankt", baseUrl);
    redirectUrl.searchParams.set("name", name);
    redirectUrl.searchParams.set("amount", String(amount));

    const webhookUrl = new URL("/api/donate/webhook", baseUrl);

    const payment = await mollie.payments.create({
      amount: {
        currency: "EUR",
        value: amount.toFixed(2),
      },
      description: `Donatie Football is Life — ${name}`,
      redirectUrl: redirectUrl.toString(),
      webhookUrl: webhookUrl.toString(),
      metadata: {
        donorName: name,
        donorEmail: email,
        newsletter: String(newsletter),
      },
    });

    const checkoutUrl = payment._links.checkout?.href;
    if (!checkoutUrl) {
      throw new Error("Mollie returned no checkout URL");
    }

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error("[POST /api/donate]", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ongeldige invoer. Controleer het formulier." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Betaling aanmaken mislukt. Probeer het opnieuw." },
      { status: 500 }
    );
  }
}
