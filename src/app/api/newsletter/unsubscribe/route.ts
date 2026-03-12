import { NextRequest, NextResponse } from "next/server";
import { getSubscribers, saveSubscribers } from "@/lib/content";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");

  if (!email) {
    return new NextResponse(unsubscribePage("E-mailadres ontbreekt.", false), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const subscribers = await getSubscribers();
  const subscriber = subscribers.find(
    (s) => s.email.toLowerCase() === email.toLowerCase()
  );

  if (subscriber) {
    subscriber.status = "unsubscribed";
    await saveSubscribers(subscribers);
  }

  return new NextResponse(
    unsubscribePage("Je bent uitgeschreven van de nieuwsbrief.", true),
    {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    }
  );
}

function unsubscribePage(message: string, success: boolean): string {
  const iconColor = success ? "#214D3A" : "#C96B2C";
  const icon = success
    ? `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`
    : `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;

  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Uitgeschreven</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F6F1E8;
      font-family: 'Inter', Helvetica, Arial, sans-serif;
      color: #1F2421;
      padding: 24px;
    }
    .card {
      max-width: 440px;
      width: 100%;
      background: #FFFFFF;
      border-radius: 16px;
      padding: 48px 32px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(31,36,33,0.07);
    }
    .icon { margin-bottom: 20px; }
    h1 {
      font-family: 'Plus Jakarta Sans', 'Inter', Helvetica, sans-serif;
      font-size: 22px;
      font-weight: 700;
      margin: 0 0 12px;
      color: #1F2421;
    }
    p {
      font-size: 15px;
      line-height: 1.6;
      color: #66706A;
      margin: 0;
    }
    a {
      display: inline-block;
      margin-top: 24px;
      padding: 12px 28px;
      background: #214D3A;
      color: #F6F1E8;
      text-decoration: none;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 600;
      transition: opacity 200ms ease;
    }
    a:hover { opacity: 0.85; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">${icon}</div>
    <h1>${message}</h1>
    <p>We vinden het jammer je te zien gaan. Je kunt je altijd opnieuw aanmelden.</p>
    <a href="/">Terug naar de website</a>
  </div>
</body>
</html>`;
}
