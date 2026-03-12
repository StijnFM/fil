import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkAdmin } from "@/lib/admin-auth";
import { getInstagramPosts, saveInstagramPosts } from "@/lib/content";
import type { InstagramPost } from "@/lib/content-types";

const PostSchema = z.object({
  id: z.string().min(1),
  caption: z.string().nullable(),
  mediaType: z.enum(["IMAGE", "VIDEO", "CAROUSEL_ALBUM"]),
  mediaUrl: z.string().url(),
  permalink: z.string().url(),
  timestamp: z.string(),
});

export async function GET() {
  const denied = await checkAdmin();
  if (denied) return denied;

  const posts = await getInstagramPosts();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const denied = await checkAdmin();
  if (denied) return denied;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige JSON" }, { status: 400 });
  }

  const result = PostSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validatiefout", details: result.error.flatten() },
      { status: 400 },
    );
  }

  const post: InstagramPost = result.data;
  const posts = await getInstagramPosts();

  const existing = posts.findIndex((p) => p.id === post.id);
  if (existing >= 0) {
    posts[existing] = post;
  } else {
    posts.push(post);
  }

  posts.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  );
  await saveInstagramPosts(posts);

  return NextResponse.json({ ok: true, post });
}

export async function DELETE(req: NextRequest) {
  const denied = await checkAdmin();
  if (denied) return denied;

  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id parameter vereist" }, { status: 400 });
  }

  const posts = await getInstagramPosts();
  const filtered = posts.filter((p) => p.id !== id);

  if (filtered.length === posts.length) {
    return NextResponse.json({ error: "Post niet gevonden" }, { status: 404 });
  }

  await saveInstagramPosts(filtered);
  return NextResponse.json({ ok: true, deleted: id });
}
