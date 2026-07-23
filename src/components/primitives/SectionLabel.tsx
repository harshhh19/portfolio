interface SectionLabelProps {
  number: string
  label: string
  className?: string
}

export function SectionLabel({ number, label, className = '' }: SectionLabelProps) {
  return (
    <div
      className={`
        font-mono text-accent-rust uppercase tracking-widest text-xs
        flex items-center gap-2 mb-8
        ${className}
      `}
    >
      <span className="text-muted-foreground">[</span>
      <span>{number}</span>
      <span className="text-muted-foreground">//</span>
      <span>{label}</span>
      <span className="text-muted-foreground">]</span>
    </div>
  )
}
