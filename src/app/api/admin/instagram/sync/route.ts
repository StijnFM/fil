import { NextResponse } from "next/server";
import { checkAdmin } from "@/lib/admin-auth";
import {
  getInstagramPosts,
  saveInstagramPosts,
  getInstagramTokens,
  saveInstagramTokens,
} from "@/lib/content";
import type { InstagramPost } from "@/lib/content-types";

interface InstagramMediaItem {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  timestamp: string;
}

interface InstagramMediaResponse {
  data: InstagramMediaItem[];
  paging?: { cursors: { after: string }; next?: string };
}

interface InstagramRefreshResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export async function POST() {
  const denied = await checkAdmin();
  if (denied) return denied;

  const tokens = await getInstagramTokens();
  if (!tokens) {
    return NextResponse.json(
      { error: "Geen Instagram tokens geconfigureerd" },
      { status: 400 },
    );
  }

  let { accessToken } = tokens;
  const { userId, expiresAt } = tokens;

  // Auto-refresh if token expires within 7 days
  const expiresAtMs = new Date(expiresAt).getTime();
  const now = Date.now();

  if (expiresAtMs - now < SEVEN_DAYS_MS) {
    try {
      const refreshUrl = new URL("https://graph.instagram.com/refresh_access_token");
      refreshUrl.searchParams.set("grant_type", "ig_refresh_token");
      refreshUrl.searchParams.set("access_token", accessToken);

      const refreshRes = await fetch(refreshUrl.toString());
      if (!refreshRes.ok) {
        const err = await refreshRes.text();
        return NextResponse.json(
          { error: "Token vernieuwen mislukt", details: err },
          { status: 502 },
        );
      }

      const refreshData = (await refreshRes.json()) as InstagramRefreshResponse;
      accessToken = refreshData.access_token;

      const newExpiresAt = new Date(
        Date.now() + refreshData.expires_in * 1000,
      ).toISOString();

      await saveInstagramTokens({
        accessToken,
        userId,
        expiresAt: newExpiresAt,
      });
    } catch (err) {
      return NextResponse.json(
        {
          error: "Token vernieuwen mislukt",
          details: err instanceof Error ? err.message : String(err),
        },
        { status: 502 },
      );
    }
  }

  // Fetch posts from Instagram Graph API
  try {
    const fields = "id,caption,media_type,media_url,permalink,timestamp";
    const mediaUrl = new URL(`https://graph.instagram.com/${userId}/media`);
    mediaUrl.searchParams.set("fields", fields);
    mediaUrl.searchParams.set("access_token", accessToken);

    const mediaRes = await fetch(mediaUrl.toString());
    if (!mediaRes.ok) {
      const err = await mediaRes.text();
      return NextResponse.json(
        { error: "Instagram API fout", details: err },
        { status: 502 },
      );
    }

    const mediaData = (await mediaRes.json()) as InstagramMediaResponse;
    const fetched: InstagramPost[] = mediaData.data.map((item) => ({
      id: item.id,
      caption: item.caption ?? null,
      mediaType: item.media_type,
      mediaUrl: item.media_url,
      permalink: item.permalink,
      timestamp: item.timestamp,
    }));

    // Merge with existing posts (dedup by id)
    const existing = await getInstagramPosts();
    const existingMap = new Map(existing.map((p) => [p.id, p]));

    for (const post of fetched) {
      existingMap.set(post.id, post);
    }

    const merged = Array.from(existingMap.values()).sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    );

    await saveInstagramPosts(merged);

    return NextResponse.json({
      synced: fetched.length,
      total: merged.length,
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: "Sync mislukt",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
}
