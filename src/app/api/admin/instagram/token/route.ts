import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkAdmin } from "@/lib/admin-auth";
import { saveInstagramTokens } from "@/lib/content";

const TokenSchema = z.object({
  accessToken: z.string().min(1),
  userId: z.string().min(1),
});

const SIXTY_DAYS_MS = 60 * 24 * 60 * 60 * 1000;

export async function POST(req: NextRequest) {
  const denied = await checkAdmin();
  if (denied) return denied;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige JSON" }, { status: 400 });
  }

  const result = TokenSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validatiefout", details: result.error.flatten() },
      { status: 400 },
    );
  }

  const { accessToken, userId } = result.data;
  const expiresAt = new Date(Date.now() + SIXTY_DAYS_MS).toISOString();

  await saveInstagramTokens({ accessToken, userId, expiresAt });

  return NextResponse.json({ ok: true, expiresAt });
}
