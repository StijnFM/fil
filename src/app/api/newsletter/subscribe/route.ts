import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";
import { Resend } from "resend";
import { getSubscribers, saveSubscribers } from "@/lib/content";
import type { Subscriber } from "@/lib/content-types";

const SubscribeSchema = z.object({
  email: z.string().email("Ongeldig e-mailadres"),
  firstName: z.string().optional(),
});

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function buildConfirmationEmail(confirmUrl: string, firstName?: string): string {
  const greeting = firstName ? `Hoi ${firstName},` : "Hoi,";

  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bevestig je aanmelding</title>
</head>
<body style="margin:0;padding:0;background:#F6F1E8;font-family:'Inter',Helvetica,Arial,sans-serif;color:#1F2421;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F6F1E8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:520px;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(31,36,33,0.07);">
          <!-- Header -->
          <tr>
            <td style="background:#214D3A;padding:28px 32px;text-align:center;">
              <p style="margin:0;font-family:'Plus Jakarta Sans','Inter',Helvetica,sans-serif;font-size:20px;font-weight:800;color:#F6F1E8;letter-spacing:-0.3px;">
                Football is Life
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 32px 24px;">
              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#1F2421;">
                ${greeting}
              </p>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#1F2421;">
                Bedankt voor je interesse in Football is Life! Klik op de knop hieronder om je aanmelding voor de nieuwsbrief te bevestigen.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 24px;">
                <tr>
                  <td align="center" style="background:#C96B2C;border-radius:999px;">
                    <a href="${confirmUrl}" target="_blank" style="display:inline-block;padding:14px 32px;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:15px;font-weight:600;color:#FFFFFF;text-decoration:none;">
                      Bevestig aanmelding
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 8px;font-size:13px;line-height:1.5;color:#66706A;">
                Of kopieer deze link in je browser:
              </p>
              <p style="margin:0 0 24px;font-size:12px;line-height:1.5;color:#66706A;word-break:break-all;">
                ${confirmUrl}
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;border-top:1px solid rgba(31,36,33,0.08);text-align:center;">
              <p style="margin:0;font-size:12px;color:#66706A;line-height:1.5;">
                Stichting Football is Life - Nijmegen
              </p>
              <p style="margin:4px 0 0;font-size:11px;color:rgba(102,112,106,0.6);">
                Je ontvangt deze mail omdat je je hebt aangemeld voor onze nieuwsbrief.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, firstName } = SubscribeSchema.parse(body);

    const subscribers = await getSubscribers();
    const existing = subscribers.find(
      (s) => s.email.toLowerCase() === email.toLowerCase()
    );

    // Already active subscriber
    if (existing && existing.status === "active") {
      return NextResponse.json(
        { message: "Je bent al aangemeld voor de nieuwsbrief." },
        { status: 200 }
      );
    }

    const confirmToken = crypto.randomUUID();
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ??
      (req.headers.get("origin") || "http://localhost:3001");
    const confirmUrl = `${baseUrl}/api/newsletter/confirm?token=${confirmToken}`;

    if (existing) {
      // Reactivate unsubscribed or pending subscriber
      existing.status = "pending";
      existing.confirmToken = confirmToken;
      existing.subscribedAt = new Date().toISOString();
      existing.confirmedAt = null;
      if (firstName) existing.firstName = firstName;
    } else {
      // New subscriber
      const subscriber: Subscriber = {
        id: crypto.randomUUID(),
        email: email.toLowerCase(),
        firstName: firstName ?? null,
        status: "pending",
        confirmToken,
        subscribedAt: new Date().toISOString(),
        confirmedAt: null,
      };
      subscribers.push(subscriber);
    }

    await saveSubscribers(subscribers);

    // Send confirmation email
    await getResend().emails.send({
      from: "Football is Life <noreply@footballislife.nl>",
      to: email,
      subject: "Bevestig je aanmelding voor de nieuwsbrief",
      html: buildConfirmationEmail(confirmUrl, firstName),
    });

    return NextResponse.json({
      message: "Check je inbox om je aanmelding te bevestigen.",
    });
  } catch (error) {
    console.error("[POST /api/newsletter/subscribe]", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Vul een geldig e-mailadres in." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
