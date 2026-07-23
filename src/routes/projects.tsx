import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { getProjects } from '../lib/db'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { SectionLabel } from '../components/primitives/SectionLabel'
import { Card } from '../components/primitives/Card'
import { CyberButton } from '../components/primitives/CyberButton'
import { Plus } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  loader: async () => {
    const projects = await getProjects()
    return { projects }
  },
  component: Projects,
})

function Projects() {
  const { projects } = Route.useLoaderData()
  const navigate = useNavigate()



  const handleCardClick = (e: React.MouseEvent, id: string) => {
    // Prevent navigation if clicking on a button or link
    if ((e.target as HTMLElement).closest('a, button')) return;
    navigate({ to: '/project/$id', params: { id } })
  }

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <DotMatrixText size="xl" as="h1" glow="blue" className="mb-12">
        PROJECTS
      </DotMatrixText>

      <div className="flex items-center justify-between mt-8">
        <SectionLabel number="03" label="HARDWARE & SOFTWARE" />
        {import.meta.env.DEV && (
          <CyberButton href="/admin/write-project" variant="blue" className="!p-2.5">
            <Plus size={18} />
          </CyberButton>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {projects.map((p) => (
          <Card key={p.id} className="flex flex-col h-full cursor-pointer hover:border-foreground/30 transition-colors" onClick={(e) => handleCardClick(e, p.id)}>
            <div className="mb-4 flex justify-between items-start">
              <h3 className="font-display text-xl text-foreground">{p.title}</h3>
              <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-1">
                {p.date}
              </span>
            </div>
            
            <p className="prose-cyber flex-grow mb-6">
              {p.summary}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((tag: string) => (
                <span key={tag} className="font-mono text-xs text-accent-rust border border-accent-rust/30 px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              {p.github && (
                <CyberButton href={p.github} variant="blue" className="!py-1.5 !px-3">
                  SRC
                </CyberButton>
              )}
              {p.demo && (
                <CyberButton href={p.demo} variant="rust" className="!py-1.5 !px-3">
                  DEMO
                </CyberButton>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
