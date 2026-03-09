import Link from "next/link";

export function Navbar() {
  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 border-b border-glass-border backdrop-blur-md"
      style={{ background: "var(--nav-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-black text-foreground tracking-tight text-lg hover:text-amber transition-colors duration-200"
        >
          FOOTBALL IS LIFE
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/over-ons"
            className="text-foreground/50 text-sm font-medium hover:text-foreground transition-colors duration-200 hidden sm:block"
          >
            Over ons
          </Link>
          <Link
            href="/project"
            className="text-foreground/50 text-sm font-medium hover:text-foreground transition-colors duration-200 hidden sm:block"
          >
            Project
          </Link>
          <Link
            href="/doneren"
            className="px-5 py-2 rounded-full bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity"
          >
            DONEREN
          </Link>
        </div>
      </div>
    </nav>
  );
}
