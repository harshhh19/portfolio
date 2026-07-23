import { createFileRoute, Link } from '@tanstack/react-router'
import { getPosts } from '../../lib/db'
import { DotMatrixText } from '../../components/primitives/DotMatrixText'
import { SectionLabel } from '../../components/primitives/SectionLabel'
import { Card } from '../../components/primitives/Card'
import { CyberButton } from '../../components/primitives/CyberButton'
import { Plus } from 'lucide-react'

export const Route = createFileRoute('/blog/')({
  loader: () => getPosts(),
  component: BlogIndex,
})
function BlogIndex() {
  const data = Route.useLoaderData()
  const posts = Array.isArray(data) ? data : []

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <DotMatrixText size="xl" as="h1" glow="blue" className="mb-12">
        TRANSMISSIONS
      </DotMatrixText>

      <div className="flex items-center justify-between mt-8">
        <SectionLabel number="04" label="ENGINEERING LOGS" />
        {import.meta.env.DEV && (
          <CyberButton href="/admin/write" variant="rust" className="!p-2" title="New Post">
            <Plus size={18} />
          </CyberButton>
        )}
      </div>
      
      <div className="flex flex-col gap-6 mt-6">
        {posts.map((post: any) => (
          <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="no-underline group block">
            <Card className="group-hover:border-accent-blue transition-colors relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="pl-4">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                  {new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'short', day: '2-digit'
                  })}
                </span>
                
                <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-accent-blue transition-colors">
                  {post.title}
                </h2>
                
                <p className="prose-cyber mb-0 text-muted-foreground">
                  {post.summary}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
