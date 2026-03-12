import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import type {
  Donation,
  Subscriber,
  SentNewsletter,
  InstagramPost,
  InstagramTokens,
} from "./content-types";
import type { LinkedInPost } from "./linkedin-types";

const CONTENT_DIR = path.join(process.cwd(), "content");

async function readJSON<T>(filePath: string): Promise<T> {
  try {
    const raw = await readFile(filePath, "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return [] as unknown as T;
  }
}

async function writeJSON(filePath: string, data: unknown): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// ── Donations ──
const DONATIONS_FILE = path.join(CONTENT_DIR, "donations/donations.json");

export async function getDonations(): Promise<Donation[]> {
  return readJSON<Donation[]>(DONATIONS_FILE);
}

export async function saveDonation(donation: Donation): Promise<void> {
  const all = await getDonations();
  const idx = all.findIndex((d) => d.id === donation.id);
  if (idx >= 0) all[idx] = donation;
  else all.push(donation);
  await writeJSON(DONATIONS_FILE, all);
}

// ── Newsletter subscribers ──
const SUBSCRIBERS_FILE = path.join(CONTENT_DIR, "newsletter/subscribers.json");

export async function getSubscribers(): Promise<Subscriber[]> {
  return readJSON<Subscriber[]>(SUBSCRIBERS_FILE);
}

export async function saveSubscribers(subs: Subscriber[]): Promise<void> {
  await writeJSON(SUBSCRIBERS_FILE, subs);
}

// ── Sent newsletters ──
const SENT_FILE = path.join(CONTENT_DIR, "newsletter/sent.json");

export async function getSentNewsletters(): Promise<SentNewsletter[]> {
  return readJSON<SentNewsletter[]>(SENT_FILE);
}

export async function saveSentNewsletter(nl: SentNewsletter): Promise<void> {
  const all = await getSentNewsletters();
  all.unshift(nl);
  await writeJSON(SENT_FILE, all);
}

// ── Instagram posts ──
const POSTS_FILE = path.join(CONTENT_DIR, "instagram/posts.json");

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  return readJSON<InstagramPost[]>(POSTS_FILE);
}

export async function saveInstagramPosts(posts: InstagramPost[]): Promise<void> {
  await writeJSON(POSTS_FILE, posts);
}

// ── Instagram tokens (private) ──
const TOKENS_FILE = path.join(CONTENT_DIR, "instagram/.tokens.json");

export async function getInstagramTokens(): Promise<InstagramTokens | null> {
  try {
    return await readJSON<InstagramTokens>(TOKENS_FILE);
  } catch {
    return null;
  }
}

export async function saveInstagramTokens(tokens: InstagramTokens): Promise<void> {
  await writeJSON(TOKENS_FILE, tokens);
}

// ── LinkedIn posts ──
const LINKEDIN_FILE = path.join(CONTENT_DIR, "linkedin/posts.json");

export async function getLinkedInPosts(): Promise<LinkedInPost[]> {
  return readJSON<LinkedInPost[]>(LINKEDIN_FILE);
}

export async function saveLinkedInPosts(posts: LinkedInPost[]): Promise<void> {
  await writeJSON(LINKEDIN_FILE, posts);
}
