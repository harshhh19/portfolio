interface TerminalCursorProps {
  className?: string
}

export function TerminalCursor({ className = '' }: TerminalCursorProps) {
  return (
    <span
      className={`inline-block font-terminal text-accent-rust ${className}`}
      style={{ animation: 'blink 1s step-end infinite' }}
      aria-hidden="true"
    >
      █
    </span>
  )
}
