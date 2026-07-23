import { useState, useEffect } from 'react'

export function Footer() {
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((u) => u + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const hours = Math.floor(uptime / 3600)
  const minutes = Math.floor((uptime % 3600) / 60)
  const seconds = uptime % 60
  const uptimeStr = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ].join(':')

  return (
    <footer className="mt-16 py-6 border-t border-dashed border-foreground/15">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground tracking-wider uppercase">
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-accent-rust"
            style={{
              boxShadow: '0 0 4px oklch(58% 0.16 42 / 0.7)',
            }}
          />
          ONLINE
        </span>
        <span className="text-foreground/20">·</span>
        <span>UPTIME {uptimeStr}</span>
        <span className="text-foreground/20">·</span>
        <span>© {new Date().getFullYear()}</span>
        <span className="text-foreground/20">·</span>
        <span>v1.0.0</span>
      </div>
    </footer>
  )
}
