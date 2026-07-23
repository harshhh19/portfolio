import { createFileRoute, Link } from '@tanstack/react-router'
import { Card } from '../../components/primitives/Card'
import { SectionLabel } from '../../components/primitives/SectionLabel'

export const Route = createFileRoute('/admin/')({
  component: AdminIndex,
})

function AdminIndex() {
  return (
    <div className="animate-in fade-in duration-500">
      <SectionLabel number="00" label="DASHBOARD" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Link to="/admin/write" className="no-underline group">
          <Card className="h-full flex flex-col items-center justify-center p-8 text-center group-hover:border-accent-blue transition-colors">
            <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-accent-blue transition-colors">
              NEW TRANSMISSION
            </h3>
            <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
              Draft a new blog post
            </p>
          </Card>
        </Link>

        <Card className="h-full flex flex-col items-center justify-center p-8 text-center opacity-50">
          <h3 className="font-display text-2xl text-foreground mb-2">
            MANAGE MEDIA
          </h3>
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
            (Coming Soon)
          </p>
        </Card>
      </div>
    </div>
  )
}
