import type { ReactNode, MouseEventHandler } from 'react'
import { Link } from '@tanstack/react-router'

type CyberVariant = 'rust' | 'blue' | 'red'

interface CyberButtonProps {
  children: ReactNode
  variant?: CyberVariant
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantConfig: Record<CyberVariant, {
  borderColor: string
  hoverBg: string
  glowColor: string
  ledGlow: string
}> = {
  rust: {
    borderColor: 'oklch(58% 0.16 42)',
    hoverBg: 'oklch(58% 0.16 42)',
    glowColor: 'oklch(58% 0.16 42 / 0.4)',
    ledGlow: 'oklch(58% 0.16 42 / 0.6)',
  },
  blue: {
    borderColor: 'oklch(52% 0.24 265)',
    hoverBg: 'oklch(52% 0.24 265)',
    glowColor: 'oklch(52% 0.24 265 / 0.4)',
    ledGlow: 'oklch(52% 0.24 265 / 0.6)',
  },
  red: {
    borderColor: 'oklch(62% 0.24 27)',
    hoverBg: 'oklch(62% 0.24 27)',
    glowColor: 'oklch(62% 0.24 27 / 0.4)',
    ledGlow: 'oklch(62% 0.24 27 / 0.6)',
  },
}

export function CyberButton({
  children,
  variant = 'rust',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: CyberButtonProps) {
  const v = variantConfig[variant]

  const baseStyle: React.CSSProperties = {
    borderColor: v.borderColor,
    '--btn-hover-bg': v.hoverBg,
    '--btn-glow': v.glowColor,
    '--btn-led': v.ledGlow,
  } as React.CSSProperties

  const content = (
    <>
      {/* LED indicator dot */}
      <span
        aria-hidden="true"
        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-shadow duration-200"
        style={{
          background: v.borderColor,
          boxShadow: `0 0 4px ${v.ledGlow}`,
        }}
      />
      {/* Label */}
      <span className="relative z-20">{children}</span>
      {/* Hover fill overlay */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0 z-10 opacity-0
          group-hover:opacity-100
          transition-opacity duration-200
        "
        style={{
          background: v.hoverBg,
        }}
      />
    </>
  )

  const sharedClasses = `
    inline-flex items-center gap-2.5
    font-display text-xs uppercase tracking-widest
    px-5 py-2.5
    border bg-transparent text-foreground
    group-hover:text-background
    transition-all duration-200
    relative overflow-hidden
    group no-underline
    ${disabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}
    ${className}
  `

  if (href) {
    return (
      <Link to={href} className={sharedClasses} style={baseStyle}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={sharedClasses}
      style={baseStyle}
    >
      {content}
    </button>
  )
}
