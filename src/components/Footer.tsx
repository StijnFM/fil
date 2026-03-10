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
          <div className="md:col-span-2">
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

          {/* Bestuur */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(246,241,232,0.28)" }}
            >
              Bestuur
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(246,241,232,0.45)" }}>
              {[
                { name: "Paul van Zwam", role: "Voorzitter" },
                { name: "Ivo Spanjersberg", role: "Secretaris" },
                { name: "Mano Radema", role: "Penningmeester" },
              ].map((m) => (
                <li key={m.name}>
                  <span style={{ color: "rgba(246,241,232,0.70)" }}>{m.name}</span>
                  <span className="mx-1.5 opacity-30">—</span>
                  {m.role}
                </li>
              ))}
            </ul>
            <p
              className="text-xs mt-3"
              style={{ color: "rgba(246,241,232,0.20)" }}
            >
              Onbezoldigd bestuur
            </p>
          </div>

          {/* Links + contact */}
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
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/project"
                className="hover:opacity-75 transition-opacity"
                style={{ color: "rgba(246,241,232,0.40)" }}
              >
                Project Soweto
              </Link>
              <Link
                href="/over-ons"
                className="hover:opacity-75 transition-opacity"
                style={{ color: "rgba(246,241,232,0.40)" }}
              >
                Over ons
              </Link>
              <Link
                href="/doneren"
                className="font-semibold hover:opacity-75 transition-opacity"
                style={{ color: "var(--orange)" }}
              >
                Doneren →
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ borderColor: "rgba(246,241,232,0.07)" }}
        >
          <p className="text-xs" style={{ color: "rgba(246,241,232,0.18)" }}>
            © {new Date().getFullYear()} Football is Life
          </p>
          <p className="text-xs" style={{ color: "rgba(246,241,232,0.14)" }}>
            Alle inkomsten gaan naar het project
          </p>
        </div>
      </div>
    </footer>
  );
}
