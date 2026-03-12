import { NextRequest, NextResponse } from "next/server";
import { saveDonation, getSubscribers, saveSubscribers } from "@/lib/content";
import type { Donation, Subscriber } from "@/lib/content-types";

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

    const meta = payment.metadata as {
      donorName?: string;
      donorEmail?: string;
      newsletter?: string;
    } | null;

    // Save donation to content store
    const donation: Donation = {
      id: paymentId,
      amount: payment.amount.value,
      currency: payment.amount.currency,
      status: payment.status as Donation["status"],
      name: meta?.donorName ?? null,
      email: meta?.donorEmail ?? null,
      newsletter: meta?.newsletter === "true",
      paidAt: payment.status === "paid" ? new Date().toISOString() : null,
      createdAt: new Date().toISOString(),
    };
    await saveDonation(donation);

    // If paid and opted into newsletter, auto-subscribe
    if (payment.status === "paid" && meta?.newsletter === "true" && meta?.donorEmail) {
      const subs = await getSubscribers();
      const existing = subs.find((s) => s.email === meta.donorEmail);
      if (!existing) {
        const newSub: Subscriber = {
          id: crypto.randomUUID(),
          email: meta.donorEmail,
          firstName: meta.donorName ?? null,
          status: "active",
          confirmToken: null,
          subscribedAt: new Date().toISOString(),
          confirmedAt: new Date().toISOString(),
        };
        subs.push(newSub);
        await saveSubscribers(subs);
      }
    }

    // Send thank-you email for paid donations
    if (payment.status === "paid" && meta?.donorEmail) {
      try {
        const { Resend } = await import("resend");
        const resendKey = process.env.RESEND_API_KEY;
        if (resendKey) {
          const resend = new Resend(resendKey);
          await resend.emails.send({
            from: "Football is Life <noreply@footballislife.nl>",
            to: meta.donorEmail,
            subject: "Bedankt voor je donatie!",
            html: thankYouEmail(
              meta.donorName ?? "Donateur",
              payment.amount.value
            ),
          });
        }
      } catch (emailErr) {
        console.error("[Donate webhook] Email failed:", emailErr);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[POST /api/donate/webhook]", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}

function thankYouEmail(name: string, amount: string): string {
  return `
<!DOCTYPE html>
<html lang="nl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F6F1E8;font-family:'Inter',system-ui,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:40px auto;background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid rgba(31,36,33,0.08)">
    <tr>
      <td style="background:#214D3A;padding:32px 28px;text-align:center">
        <p style="margin:0;font-size:22px;font-weight:800;color:rgba(246,241,232,0.95);letter-spacing:-0.02em">Football is Life</p>
        <p style="margin:6px 0 0;font-size:13px;font-style:italic;color:rgba(201,107,44,0.7)">Pass it on.</p>
      </td>
    </tr>
    <tr>
      <td style="padding:32px 28px">
        <p style="margin:0 0 8px;font-size:18px;font-weight:700;color:#1F2421">Bedankt, ${name}!</p>
        <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#66706A">
          Je donatie van <strong style="color:#214D3A">&euro; ${amount}</strong> is ontvangen.
          Dankzij jouw bijdrage kunnen we verder bouwen aan toekomstkansen voor jongeren in Mzuzu, Malawi.
        </p>
        <p style="margin:0;font-size:13px;line-height:1.6;color:#66706A;opacity:0.75">
          Als ANBI-erkende stichting is je donatie fiscaal aftrekbaar (RSIN 868370873).
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 28px 28px;text-align:center">
        <a href="https://fil.humanaize.nl/project" style="display:inline-block;padding:12px 28px;background:#C96B2C;color:#fff;font-size:14px;font-weight:600;text-decoration:none;border-radius:99px">
          Bekijk het project →
        </a>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
