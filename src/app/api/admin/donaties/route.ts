import { NextResponse } from "next/server";
import { checkAdmin } from "@/lib/admin-auth";
import { getDonations } from "@/lib/content";

export async function GET() {
  const denied = await checkAdmin();
  if (denied) return denied;

  const donations = await getDonations();

  // Sort by createdAt descending
  donations.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return NextResponse.json(donations);
}
