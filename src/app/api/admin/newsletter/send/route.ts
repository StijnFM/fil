import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { checkAdmin } from "@/lib/admin-auth";
import { getSubscribers, saveSentNewsletter } from "@/lib/content";
import type { SentNewsletter } from "@/lib/content-types";

const SendSchema = z.object({
  subject: z.string().min(1, "Onderwerp is verplicht"),
  body: z.string().min(1, "Inhoud is verplicht"),
});

function buildEmailHtml(body: string, unsubscribeUrl: string): string {
  return `<!DOCTYPE html>
<html lang="nl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F6F1E8;font-family:Inter,system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F6F1E8;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid rgba(31,36,33,0.10);">
        <!-- Header -->
        <tr><td style="background:#214D3A;padding:28px 32px;">
          <span style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-size:20px;font-weight:700;color:#F6F1E8;letter-spacing:-0.01em;">Football is Life</span>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:32px;color:#1F2421;font-size:16px;line-height:1.6;">
          ${body.replace(/\n/g, "<br>")}
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:24px 32px;border-top:1px solid rgba(31,36,33,0.10);font-size:13px;color:#66706A;">
          <p style="margin:0 0 8px;">Stichting Football is Life - Nijmegen</p>
          <a href="${unsubscribeUrl}" style="color:#C96B2C;text-decoration:underline;">Uitschrijven</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const denied = await checkAdmin();
  if (denied) return denied;

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json(
      { error: "Resend API key niet geconfigureerd" },
      { status: 503 },
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige JSON" }, { status: 400 });
  }

  const result = SendSchema.safeParse(rawBody);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validatiefout", details: result.error.flatten() },
      { status: 400 },
    );
  }

  const { subject, body } = result.data;

  const subscribers = await getSubscribers();
  const active = subscribers.filter((s) => s.status === "active");

  if (active.length === 0) {
    return NextResponse.json(
      { error: "Geen actieve abonnees" },
      { status: 400 },
    );
  }

  const resend = new Resend(resendKey);
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://footballislife.nl";

  let sentCount = 0;

  for (const subscriber of active) {
    const unsubscribeUrl = `${baseUrl}/api/newsletter/unsubscribe?id=${subscriber.id}`;
    const html = buildEmailHtml(body, unsubscribeUrl);

    try {
      await resend.emails.send({
        from: "Football is Life <noreply@footballislife.nl>",
        to: subscriber.email,
        subject,
        html,
      });
      sentCount++;
    } catch (err) {
      console.error(
        `[newsletter/send] Fout bij verzenden naar ${subscriber.email}:`,
        err,
      );
    }
  }

  const newsletter: SentNewsletter = {
    id: crypto.randomUUID(),
    subject,
    body,
    sentAt: new Date().toISOString(),
    recipientCount: sentCount,
  };

  await saveSentNewsletter(newsletter);

  return NextResponse.json({ sent: sentCount });
}
