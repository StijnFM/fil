import { NextResponse } from "next/server";
import { checkAdmin } from "@/lib/admin-auth";
import { getSubscribers, getSentNewsletters } from "@/lib/content";

export async function GET() {
  const denied = await checkAdmin();
  if (denied) return denied;

  const subscribers = await getSubscribers();
  const sent = await getSentNewsletters();

  return NextResponse.json({ subscribers, sent });
}
