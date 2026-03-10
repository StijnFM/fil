import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over ons — Football is Life",
  description:
    "Stichting Football is Life wordt bestuurd door een onbezoldigd bestuur van drie leden. ANBI-erkend, RSIN 868370873, gevestigd in Nijmegen.",
};

export default function OverOnsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
