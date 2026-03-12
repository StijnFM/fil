import { NextRequest, NextResponse } from "next/server";
import { checkAdmin } from "@/lib/admin-auth";
import { getLinkedInPosts, saveLinkedInPosts } from "@/lib/content";
import { z } from "zod";

const PostSchema = z.object({
  url: z.string().url(),
  content: z.string().min(1),
  author: z.string().min(1),
  date: z.string().min(1),
  imageUrl: z.string().url().nullable().optional(),
});

export async function GET() {
  const denied = await checkAdmin();
  if (denied) return denied;

  const posts = await getLinkedInPosts();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const denied = await checkAdmin();
  if (denied) return denied;

  const body = await req.json();
  const result = PostSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Ongeldige invoer" }, { status: 400 });
  }

  const posts = await getLinkedInPosts();
  posts.unshift({
    id: crypto.randomUUID(),
    ...result.data,
    imageUrl: result.data.imageUrl ?? null,
  });
  await saveLinkedInPosts(posts);

  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const denied = await checkAdmin();
  if (denied) return denied;

  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID verplicht" }, { status: 400 });

  const posts = await getLinkedInPosts();
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length === posts.length) {
    return NextResponse.json({ error: "Post niet gevonden" }, { status: 404 });
  }

  await saveLinkedInPosts(filtered);
  return NextResponse.json({ success: true });
}
