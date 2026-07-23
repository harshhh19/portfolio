import { Link, useLocation } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { DotMatrixText } from './primitives/DotMatrixText'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  
  const isDarkInitial = typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : true
  const [isDark, setIsDark] = useState(isDarkInitial)

  const toggleTheme = () => {
    const newIsDark = !isDark
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      document.cookie = "colorMode=dark; path=/; max-age=31536000"
    } else {
      document.documentElement.classList.remove('dark')
      document.cookie = "colorMode=light; path=/; max-age=31536000"
    }
    setIsDark(newIsDark)
  }

  return (
    <header className="relative flex items-center justify-between py-5 border-b border-dashed border-foreground/10 mb-10">
      {/* Monogram */}
      <Link to="/" className="no-underline">
        <DotMatrixText size="sm" glow="rust" as="span">
          H.S
        </DotMatrixText>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
        {NAV_LINKS.map((link) => {
          const isActive =
            link.to === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(link.to)

          return (
            <Link
              key={link.to}
              to={link.to}
              className={`
                font-mono text-[10px] uppercase tracking-[0.14em]
                px-2.5 py-1.5 no-underline transition-all duration-150
                ${isActive
                  ? 'text-accent-rust bg-accent-rust/[0.06]'
                  : 'text-muted-foreground hover:text-foreground hover:bg-foreground/[0.03]'
                }
              `}
            >
              {isActive ? `[ ${link.label} ]` : link.label}
            </Link>
          )
        })}
        <button
          onClick={toggleTheme}
          className="ml-4 font-mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1.5 transition-all duration-150 text-muted-foreground hover:text-foreground hover:bg-foreground/[0.03] cursor-pointer bg-transparent border-none"
        >
          [ {isDark ? 'LIGHT' : 'DARK'} MODE ]
        </button>
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="md:hidden p-2 text-foreground cursor-pointer"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          {mobileOpen ? (
            <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
          ) : (
            <>
              <rect x="2" y="4" width="14" height="1.5" rx="0.5" />
              <rect x="2" y="8.5" width="14" height="1.5" rx="0.5" />
              <rect x="2" y="13" width="14" height="1.5" rx="0.5" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav
          className="absolute top-full left-0 right-0 bg-background border-b border-dashed border-foreground/10 z-40 md:hidden"
          style={{ marginTop: '-1px' }}
        >
          <div className="flex flex-col py-3 px-4 gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.to)

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`
                    font-mono text-xs uppercase tracking-widest
                    py-2.5 px-2 no-underline transition-colors
                    ${isActive
                      ? 'text-accent-rust bg-accent-rust/[0.06]'
                      : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                  onClick={() => setMobileOpen(false)}
                >
                  {isActive ? `[ ${link.label} ]` : link.label}
                </Link>
              )
            })}
            <button
              onClick={() => {
                toggleTheme()
                setMobileOpen(false)
              }}
              className="font-mono text-xs uppercase tracking-widest py-2.5 px-2 transition-colors text-muted-foreground hover:text-foreground text-left bg-transparent border-none cursor-pointer"
            >
              [ {isDark ? 'LIGHT' : 'DARK'} MODE ]
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
