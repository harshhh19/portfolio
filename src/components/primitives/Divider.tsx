interface DividerProps {
  className?: string
}

export function Divider({ className = '' }: DividerProps) {
  return (
    <div className={`flex items-center gap-4 my-12 ${className}`}>
      {/* Left dashed line */}
      <div className="flex-1 border-t border-dashed border-foreground/20" />

      {/* Diode symbol */}
      <svg
        width="32"
        height="16"
        viewBox="0 0 32 16"
        className="text-accent-rust flex-shrink-0"
        aria-hidden="true"
      >
        {/* Triangle (anode) */}
        <polygon
          points="6,2 6,14 18,8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Bar (cathode) */}
        <line
          x1="18"
          y1="2"
          x2="18"
          y2="14"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Lead lines */}
        <line
          x1="0"
          y1="8"
          x2="6"
          y2="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="18"
          y1="8"
          x2="32"
          y2="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      {/* Right dashed line */}
      <div className="flex-1 border-t border-dashed border-foreground/20" />
    </div>
  )
}
