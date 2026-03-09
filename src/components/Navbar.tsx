import Link from "next/link";

export function Navbar() {
  return (
    <>
      <style>{`
        .nav-link { color: var(--stone); transition: color 200ms ease; }
        .nav-link:hover { color: var(--charcoal); }
      `}</style>
      <nav
        className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-md"
        style={{ background: "var(--nav-bg)", borderColor: "var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-display font-bold tracking-tight text-base transition-opacity hover:opacity-70 duration-200"
            style={{ color: "var(--charcoal)", letterSpacing: "-0.01em" }}
          >
            Football is Life
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/over-ons" className="nav-link text-sm font-medium hidden sm:block">
              Over ons
            </Link>
            <Link href="/project" className="nav-link text-sm font-medium hidden sm:block">
              Project
            </Link>
            <Link
              href="/doneren"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-85"
              style={{ background: "var(--green)" }}
            >
              Doneren
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
