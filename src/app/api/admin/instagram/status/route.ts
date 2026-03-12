import { NextResponse } from "next/server";
import { checkAdmin } from "@/lib/admin-auth";
import { getInstagramTokens } from "@/lib/content";

export async function GET() {
  const denied = await checkAdmin();
  if (denied) return denied;

  const tokens = await getInstagramTokens();

  if (!tokens) {
    return NextResponse.json({ connected: false });
  }

  const expired = new Date(tokens.expiresAt).getTime() < Date.now();

  return NextResponse.json({
    connected: true,
    expiresAt: tokens.expiresAt,
    expired,
    userId: tokens.userId,
  });
}
