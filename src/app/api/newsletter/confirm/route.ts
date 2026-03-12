import { NextRequest, NextResponse } from "next/server";
import { getSubscribers, saveSubscribers } from "@/lib/content";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return new NextResponse("Token ontbreekt.", { status: 400 });
  }

  const subscribers = await getSubscribers();
  const subscriber = subscribers.find((s) => s.confirmToken === token);

  if (!subscriber) {
    return new NextResponse("Ongeldige of verlopen token.", { status: 404 });
  }

  subscriber.status = "active";
  subscriber.confirmedAt = new Date().toISOString();
  subscriber.confirmToken = null;

  await saveSubscribers(subscribers);

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3001";

  return NextResponse.redirect(`${baseUrl}/?newsletter=bevestigd`);
}
