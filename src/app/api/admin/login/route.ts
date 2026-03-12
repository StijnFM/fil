import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const LoginSchema = z.object({
  password: z.string().min(1, "Wachtwoord is verplicht"),
});

export async function POST(req: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return NextResponse.json(
      { error: "Admin niet geconfigureerd" },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige JSON" }, { status: 400 });
  }

  const result = LoginSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validatiefout", details: result.error.flatten() },
      { status: 400 },
    );
  }

  if (result.data.password !== adminPassword) {
    return NextResponse.json(
      { error: "Onjuist wachtwoord" },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("fil-admin-session", adminPassword, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
