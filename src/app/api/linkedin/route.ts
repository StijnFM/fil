import { NextResponse } from "next/server";
import { getLinkedInPosts } from "@/lib/content";

export async function GET() {
  const posts = await getLinkedInPosts();
  return NextResponse.json(posts);
}
