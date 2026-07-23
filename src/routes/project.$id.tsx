import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { getProjectById, deleteProject } from '../lib/db'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { MarkdownRenderer } from '../lib/markdown'
import { ArrowLeft, Github, ExternalLink, Edit3, Trash2 } from 'lucide-react'
import { CyberButton } from '../components/primitives/CyberButton'

export const Route = createFileRoute('/project/$id')({
  loader: async ({ params }) => {
    const project = await getProjectById({ data: params.id })
    return { project }
  },
  component: ProjectDetail,
})

function ProjectDetail() {
  const { project } = Route.useLoaderData()
  const navigate = useNavigate()
  const deleteProjectFn = useServerFn(deleteProject)

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProjectFn({ data: id })
        navigate({ to: '/projects', replace: true })
      } catch (err) {
        console.error(err)
        alert('Failed to delete project')
      }
    }
  }

  return (
    <div className="animate-in fade-in duration-500 pb-20 max-w-4xl mx-auto">
      <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-oled-green transition-colors font-mono text-sm mb-12">
        <ArrowLeft size={16} /> BACK TO PROJECTS
      </Link>

      <DotMatrixText size="xl" as="h1" glow="blue" className="mb-4">
        {project.title}
      </DotMatrixText>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag: string) => (
          <span key={tag} className="font-mono text-xs text-accent-rust border border-accent-rust/30 px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mb-12">
        {project.github && (
          <CyberButton href={project.github} variant="blue" className="!p-2.5" title="Source Code">
            <Github size={18} className="inline" />
          </CyberButton>
        )}
        {project.demo && (
          <CyberButton href={project.demo} variant="rust" className="!p-2.5" title="Live Demo">
            <ExternalLink size={18} className="inline" />
          </CyberButton>
        )}
        
        <div className="ml-auto flex gap-2">
           <CyberButton href={`/admin/edit-project/${project.id}`} variant="blue" className="!p-2.5" title="Edit Project">
             <Edit3 size={18} className="inline" />
           </CyberButton>
           <CyberButton onClick={() => handleDelete(project.id)} variant="rust" className="!p-2.5" title="Delete Project">
             <Trash2 size={18} className="inline" />
           </CyberButton>
        </div>
      </div>

      <div className="mt-8">
        <MarkdownRenderer content={project.body || project.summary} />
      </div>
    </div>
  )
}
