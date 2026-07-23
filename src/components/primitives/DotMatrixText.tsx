import type { ReactNode } from 'react'

type DotMatrixSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type GlowColor = 'rust' | 'red' | 'blue' | 'cyan'

interface DotMatrixTextProps {
  children: ReactNode
  size?: DotMatrixSize
  glow?: GlowColor
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
  className?: string
}

const sizeMap: Record<DotMatrixSize, string> = {
  sm: 'text-xs leading-relaxed',
  md: 'text-base md:text-lg',
  lg: 'text-xl md:text-2xl',
  xl: 'text-2xl md:text-4xl',
  '2xl': 'text-4xl md:text-6xl lg:text-7xl',
}

const glowStyles: Record<GlowColor, { filter: string; color: string }> = {
  rust: {
    filter: 'drop-shadow(0 0 12px oklch(58% 0.16 42 / 0.5)) drop-shadow(0 0 4px oklch(58% 0.16 42 / 0.3))',
    color: 'oklch(58% 0.16 42)',
  },
  red: {
    filter: 'drop-shadow(0 0 12px oklch(62% 0.24 27 / 0.5)) drop-shadow(0 0 4px oklch(62% 0.24 27 / 0.3))',
    color: 'oklch(62% 0.24 27)',
  },
  blue: {
    filter: 'drop-shadow(0 0 12px oklch(52% 0.24 265 / 0.5)) drop-shadow(0 0 4px oklch(52% 0.24 265 / 0.3))',
    color: 'oklch(52% 0.24 265)',
  },
  cyan: {
    filter: 'drop-shadow(0 0 12px oklch(78% 0.15 195 / 0.5)) drop-shadow(0 0 4px oklch(78% 0.15 195 / 0.3))',
    color: 'oklch(78% 0.15 195)',
  },
}

export function DotMatrixText({
  children,
  size = 'md',
  glow,
  as: Tag = 'span',
  className = '',
}: DotMatrixTextProps) {
  const glowStyle = glow ? glowStyles[glow] : null

  return (
    <Tag
      className={`
        font-display uppercase tracking-wider
        ${sizeMap[size]}
        relative inline-block
        ${className}
      `}
      style={{
        ...(glowStyle ? { filter: glowStyle.filter } : {}),
      }}
    >
      {/* Dot-matrix overlay — tighter grid for more visible pixelation */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, transparent 35%, var(--color-background) 36%)',
          backgroundSize: '4px 4px',
          opacity: 0.5,
        }}
      />
      {/* Actual text */}
      <span className="relative z-10">{children}</span>
    </Tag>
  )
}
