export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold tracking-widest uppercase mb-4"
      style={{ color: "var(--orange)" }}
    >
      {children}
    </p>
  );
}
