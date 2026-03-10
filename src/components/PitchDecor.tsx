export function PitchDecor({
  opacity = 0.18,
  stroke = "white",
  stripes = true,
  id = "grass",
}: {
  opacity?: number;
  stroke?: string;
  stripes?: boolean;
  id?: string;
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 120 80"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {stripes && (
          <pattern id={id} x="0" y="0" width="10" height="80" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="10" height="80" fill="rgba(255,255,255,0.028)" />
            <rect x="5" y="0" width="5" height="80" fill="rgba(0,0,0,0.018)" />
          </pattern>
        )}
      </defs>
      {stripes && <rect width="120" height="80" fill={`url(#${id})`} />}
      <g stroke={stroke} strokeWidth="0.7" fill="none" style={{ opacity }}>
        <rect x="4" y="4" width="112" height="72" />
        <line x1="60" y1="4" x2="60" y2="76" />
        <circle cx="60" cy="40" r="10" />
        <circle cx="60" cy="40" r="1.1" fill={stroke} stroke="none" />
        <rect x="4" y="21" width="18" height="38" />
        <rect x="4" y="29" width="7" height="22" />
        <circle cx="16" cy="40" r="1.1" fill={stroke} stroke="none" />
        <path d="M 22 29 A 11 11 0 0 1 22 51" />
        <rect x="98" y="21" width="18" height="38" />
        <rect x="109" y="29" width="7" height="22" />
        <circle cx="104" cy="40" r="1.1" fill={stroke} stroke="none" />
        <path d="M 98 29 A 11 11 0 0 0 98 51" />
        <path d="M 7,4 A 3,3 0 0,1 4,7" />
        <path d="M 113,4 A 3,3 0 0,0 116,7" />
        <path d="M 4,73 A 3,3 0 0,0 7,76" />
        <path d="M 116,73 A 3,3 0 0,1 113,76" />
      </g>
    </svg>
  );
}
