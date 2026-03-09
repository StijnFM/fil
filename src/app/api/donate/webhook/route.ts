import { NextRequest, NextResponse } from "next/server";

/**
 * Mollie webhook — called when payment status changes.
 * Verify the payment server-side (never trust redirect params).
 *
 * Env required: MOLLIE_API_KEY
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.formData();
    const paymentId = body.get("id");

    if (!paymentId || typeof paymentId !== "string") {
      return NextResponse.json({ error: "Missing payment ID" }, { status: 400 });
    }

    const apiKey = process.env.MOLLIE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ received: true });
    }

    const { createMollieClient } = await import("@mollie/api-client");
    const mollie = createMollieClient({ apiKey });

    const payment = await mollie.payments.get(paymentId);

    console.log(
      `[Donate webhook] ${paymentId} → ${payment.status}`,
      payment.metadata
    );

    if (payment.status === "paid") {
      // TODO: extend with any of the following:
      // - Send confirmation email (Resend)
      // - Write to database / CRM
      // - Update public donation counter
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[POST /api/donate/webhook]", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
