"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="1" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="1" y="10" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="10" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    href: "/admin/donaties",
    label: "Donaties",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 16s-6.5-4.35-6.5-8.5A3.5 3.5 0 0 1 9 5a3.5 3.5 0 0 1 6.5 2.5C15.5 11.65 9 16 9 16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/admin/nieuwsbrief",
    label: "Nieuwsbrief",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 6l7 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/admin/instagram",
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="13.5" cy="4.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      {/* Mobile top bar */}
      <div
        className="lg:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between px-4 h-14 border-b backdrop-blur-md"
        style={{
          background: "rgba(31, 36, 33, 0.97)",
          borderColor: "rgba(246, 241, 232, 0.1)",
        }}
      >
        <span
          className="font-display font-bold text-sm"
          style={{ color: "var(--ivory)" }}
        >
          FIL Admin
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-9 h-9 flex items-center justify-center rounded-lg"
          style={{ color: "var(--ivory)" }}
          aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {mobileOpen ? (
              <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M2 4.5H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2 9H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2 13.5H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed top-14 inset-x-0 z-30 border-b"
          style={{
            background: "rgba(31, 36, 33, 0.98)",
            borderColor: "rgba(246, 241, 232, 0.1)",
          }}
        >
          <div className="py-2 px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: isActive(item.href) ? "var(--orange)" : "var(--ivory)",
                  background: isActive(item.href) ? "rgba(201, 107, 44, 0.12)" : "transparent",
                }}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full mt-1 transition-colors"
              style={{ color: "rgba(246, 241, 232, 0.6)" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6.5 16H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2.5M12 13l4-4-4-4M7 9h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Uitloggen
            </button>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 bottom-0 w-60 flex-col border-r z-40"
        style={{
          background: "var(--charcoal)",
          borderColor: "rgba(246, 241, 232, 0.08)",
        }}
      >
        {/* Branding */}
        <div className="px-6 pt-6 pb-4">
          <span
            className="font-display font-bold text-lg tracking-tight"
            style={{ color: "var(--ivory)" }}
          >
            Football is Life
          </span>
          <p
            className="text-xs mt-0.5"
            style={{ color: "rgba(246, 241, 232, 0.45)" }}
          >
            Admin panel
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-2 flex flex-col gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
              style={{
                color: isActive(item.href) ? "var(--orange)" : "var(--ivory)",
                background: isActive(item.href) ? "rgba(201, 107, 44, 0.12)" : "transparent",
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="px-3 pb-4">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
            style={{ color: "rgba(246, 241, 232, 0.5)" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15 9.5V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5M1 8l8-6 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Naar website
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full transition-colors"
            style={{ color: "rgba(246, 241, 232, 0.5)" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.5 16H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2.5M12 13l4-4-4-4M7 9h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Uitloggen
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-60 pt-14 lg:pt-0 min-h-screen">
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
}
