import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAME = "fil-admin-session";

export async function checkAdmin(): Promise<NextResponse | null> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    return NextResponse.json(
      { error: "Admin niet geconfigureerd" },
      { status: 503 }
    );
  }

  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME)?.value;

  if (session !== password) {
    return NextResponse.json({ error: "Niet geautoriseerd" }, { status: 401 });
  }

  return null;
}

export async function isAdmin(): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;

  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value === password;
}
