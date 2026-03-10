interface ImagePlaceholderProps {
  label: string;
  description?: string;
  aspect?: string;
  className?: string;
  dark?: boolean;
}

export function ImagePlaceholder({
  label,
  description,
  aspect = "3/2",
  className = "",
  dark = true,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        aspectRatio: aspect,
        background: dark
          ? "linear-gradient(145deg, #2D6B52 0%, #214D3A 40%, #183828 100%)"
          : "linear-gradient(145deg, #EFE7D5 0%, #E7D8BF 60%, #DDD0B8 100%)",
      }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0"
        style={{
          opacity: dark ? 0.05 : 0.04,
          backgroundImage: `radial-gradient(circle, ${dark ? "white" : "#1F2421"} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          style={{ opacity: dark ? 0.25 : 0.18 }}
        >
          <rect
            x="4"
            y="8"
            width="36"
            height="28"
            rx="3"
            stroke={dark ? "#F6F1E8" : "#1F2421"}
            strokeWidth="1.5"
          />
          <circle
            cx="15"
            cy="18"
            r="3.5"
            stroke={dark ? "#F6F1E8" : "#1F2421"}
            strokeWidth="1.5"
          />
          <path
            d="M4 30L14 22L24 28L32 23L40 30"
            stroke={dark ? "#F6F1E8" : "#1F2421"}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        <div className="text-center">
          <p
            className="font-display font-bold text-sm tracking-wide"
            style={{
              color: dark ? "rgba(246,241,232,0.40)" : "rgba(31,36,33,0.30)",
            }}
          >
            {label}
          </p>
          {description && (
            <p
              className="text-xs mt-1.5 max-w-[220px] leading-snug"
              style={{
                color: dark
                  ? "rgba(246,241,232,0.22)"
                  : "rgba(31,36,33,0.18)",
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
