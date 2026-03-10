import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t pt-14 pb-8 px-4 sm:px-6"
      style={{ background: "var(--charcoal)", borderColor: "rgba(246,241,232,0.08)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top: brand + CTA */}
        <div
          className="grid md:grid-cols-[1fr_auto] gap-6 items-center pb-10 mb-10 border-b"
          style={{ borderColor: "rgba(246,241,232,0.08)" }}
        >
          <div>
            <p
              className="font-display font-extrabold text-2xl tracking-tight"
              style={{ color: "rgba(246,241,232,0.90)" }}
            >
              Football is Life
            </p>
            <p
              className="text-sm italic mt-1"
              style={{ color: "rgba(201,107,44,0.65)" }}
            >
              Pass it on.
            </p>
          </div>
          <Link
            href="/doneren"
            className="px-7 py-3 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-85"
            style={{ background: "var(--orange)" }}
          >
            Steun het project →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Info */}
          <div className="md:col-span-1">
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(246,241,232,0.40)" }}
            >
              Stichting Football is Life gebruikt voetbal als ingang naar
              coaching, life skills en ontwikkeling voor jongeren in Malawi.
            </p>
            <p
              className="text-xs mt-4"
              style={{ color: "rgba(246,241,232,0.22)" }}
            >
              ANBI-erkend · RSIN 868370873 · KvK Nijmegen
            </p>
          </div>

          {/* Project */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(246,241,232,0.28)" }}
            >
              Project
            </p>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { href: "/project", label: "Project Soweto" },
                { href: "/opleiding", label: "Trainer Coach 1" },
                { href: "/partners", label: "Partners in Malawi" },
                { href: "/malawi", label: "Over Malawi" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-75 transition-opacity"
                  style={{ color: "rgba(246,241,232,0.40)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Organisatie */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(246,241,232,0.28)" }}
            >
              Organisatie
            </p>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { href: "/over-ons", label: "Over ons" },
                { href: "/ambassadeurs", label: "Ambassadeurs" },
                { href: "/ons-verhaal", label: "Ons verhaal" },
                { href: "/in-de-media", label: "In de media" },
                { href: "/transparantie", label: "Transparantie & ANBI" },
                { href: "/meedoen", label: "Meedoen" },
                { href: "/doneren", label: "Doneren" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-75 transition-opacity"
                  style={{
                    color:
                      link.href === "/doneren"
                        ? "var(--orange)"
                        : "rgba(246,241,232,0.40)",
                    fontWeight: link.href === "/doneren" ? 600 : undefined,
                  }}
                >
                  {link.href === "/doneren" ? `${link.label} →` : link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(246,241,232,0.28)" }}
            >
              Contact
            </p>
            <address
              className="not-italic text-sm leading-relaxed mb-4"
              style={{ color: "rgba(246,241,232,0.45)" }}
            >
              Dobbelmannweg 128
              <br />
              6531 KZ Nijmegen
            </address>
            <a
              href="tel:+31639478488"
              className="block text-sm mb-1 hover:opacity-75 transition-opacity"
              style={{ color: "rgba(246,241,232,0.45)" }}
            >
              +31 6 39 47 84 88
            </a>
            <a
              href="mailto:info@footballislife.nl"
              className="block text-sm hover:opacity-75 transition-opacity"
              style={{ color: "rgba(246,241,232,0.45)" }}
            >
              info@footballislife.nl
            </a>

            <div className="mt-4">
              <p
                className="text-xs"
                style={{ color: "rgba(246,241,232,0.22)" }}
              >
                Bestuur (onbezoldigd)
              </p>
              <ul className="mt-1.5 space-y-1 text-xs" style={{ color: "rgba(246,241,232,0.35)" }}>
                <li>Paul van Zwam — Voorzitter</li>
                <li>Ivo Spanjersberg — Secretaris</li>
                <li>Mano Radema — Penningmeester</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ borderColor: "rgba(246,241,232,0.07)" }}
        >
          <p className="text-xs" style={{ color: "rgba(246,241,232,0.18)" }}>
            © {new Date().getFullYear()} Stichting Football is Life
          </p>
          <p className="text-xs" style={{ color: "rgba(246,241,232,0.14)" }}>
            Alle inkomsten gaan naar het project · ANBI-erkend
          </p>
        </div>
      </div>
    </footer>
  );
}
