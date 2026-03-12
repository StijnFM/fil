export interface Donation {
  id: string;
  amount: string;
  currency: string;
  status: "paid" | "pending" | "failed" | "expired";
  name: string | null;
  email: string | null;
  newsletter: boolean;
  paidAt: string | null;
  createdAt: string;
}

export interface Subscriber {
  id: string;
  email: string;
  firstName: string | null;
  status: "pending" | "active" | "unsubscribed";
  confirmToken: string | null;
  subscribedAt: string;
  confirmedAt: string | null;
}

export interface SentNewsletter {
  id: string;
  subject: string;
  body: string;
  sentAt: string;
  recipientCount: number;
}

export interface InstagramPost {
  id: string;
  caption: string | null;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  permalink: string;
  timestamp: string;
}

export interface InstagramTokens {
  accessToken: string;
  userId: string;
  expiresAt: string;
}
