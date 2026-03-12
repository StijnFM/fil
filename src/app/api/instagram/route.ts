import { NextResponse } from "next/server";
import { getInstagramPosts } from "@/lib/content";

export async function GET() {
  const posts = await getInstagramPosts();
  return NextResponse.json(posts);
}
