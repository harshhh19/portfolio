import type { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`
        bg-background border border-foreground/12
        p-5 relative
        card-brackets
        ${hover ? 'transition-all duration-200 hover:border-foreground/25 hover:shadow-[0_2px_16px_-4px_oklch(18%_0.02_40/0.08)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
