import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useContext } from 'react'
import { useServerFn } from '@tanstack/react-start'
import { SectionLabel } from '../../../components/primitives/SectionLabel'
import { DotMatrixText } from '../../../components/primitives/DotMatrixText'
import { MarkdownRenderer } from '../../../lib/markdown'
import { Github, ExternalLink } from 'lucide-react'
import { CyberEditor } from '../../../components/CyberEditor'
import { CyberButton } from '../../../components/primitives/CyberButton'
import { Card } from '../../../components/primitives/Card'
import { getProjectById, updateProject } from '../../../lib/db'
import { AdminContext } from '../../admin'

export const Route = createFileRoute('/admin/edit-project/$id')({
  loader: async ({ params }) => {
    try {
      const project = await getProjectById({ data: params.id })
      if (!project) throw new Error('Not found')
      return { project }
    } catch {
      throw new Error('Not found')
    }
  },
  component: EditProject,
})

function EditProject() {
  const { project } = Route.useLoaderData()
  
  const [title, setTitle] = useState(project.title)
  const [summary, setSummary] = useState(project.summary)
  const [tags, setTags] = useState(project.tags ? project.tags.join(', ') : '')
  const [github, setGithub] = useState(project.github || '')
  const [demo, setDemo] = useState(project.demo || '')
  const [content, setContent] = useState(project.content || '')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { previewMode } = useContext(AdminContext)

  const updateProjectFn = useServerFn(updateProject)

  const handlePublish = async () => {
    if (!title) return alert("Title is required")
    setLoading(true)
    try {
      await updateProjectFn({
        data: {
          id: project.id,
          title,
          summary,
          tags: tags.split(',').map(t => t.trim()).filter(Boolean),
          github,
          demo,
          content
        }
      })
      navigate({ to: '/projects' })
    } catch (err) {
      console.error(err)
      alert("Failed to save project")
      setLoading(false)
    }
  }

  if (previewMode) {
    const tagsArray = tags.split(',').map(t => t.trim()).filter(Boolean)
    return (
      <div className="animate-in fade-in duration-500 pb-20 max-w-4xl mx-auto space-y-16">
        <div>
          <SectionLabel number="PREVIEW" label="PROJECT CARD" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <Card className="flex flex-col h-full">
              <div className="mb-4 flex justify-between items-start">
                <h3 className="font-display text-xl text-foreground">{title || 'Untitled Project'}</h3>
                <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-1">
                  {project.date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                </span>
              </div>
              
              <p className="prose-cyber flex-grow mb-6">
                {summary || 'No summary provided.'}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {tagsArray.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-accent-rust border border-accent-rust/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {github && (
                  <CyberButton href={github} variant="blue" className="!py-1.5 !px-3">
                    SRC
                  </CyberButton>
                )}
                {demo && (
                  <CyberButton href={demo} variant="rust" className="!py-1.5 !px-3">
                    DEMO
                  </CyberButton>
                )}
              </div>
            </Card>
          </div>
        </div>

        <div>
          <SectionLabel number="PREVIEW" label="PROJECT PAGE" />
          
          <div className="mt-12">
          <DotMatrixText size="xl" as="h1" glow="blue" className="mb-4">
            {title || 'Untitled Project'}
          </DotMatrixText>

          <div className="flex flex-wrap gap-2 mb-8">
            {tagsArray.map((tag) => (
              <span key={tag} className="font-mono text-xs text-accent-rust border border-accent-rust/30 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-12">
            {github && (
              <CyberButton href={github} variant="blue" className="!py-2 !px-4">
                <Github size={16} className="mr-2 inline" /> SRC
              </CyberButton>
            )}
            {demo && (
              <CyberButton href={demo} variant="rust" className="!py-2 !px-4">
                <ExternalLink size={16} className="mr-2 inline" /> DEMO
              </CyberButton>
            )}
          </div>

          <div className="mt-8">
            <MarkdownRenderer content={content || summary || '*No content provided.*'} />
          </div>
        </div>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <SectionLabel number="02" label="EDIT PROJECT" />
      
      <div className="flex flex-col gap-8 mt-12 max-w-4xl">
        <div>
          <label className="font-mono text-xs text-accent-blue uppercase tracking-widest block mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-blue inline-block shadow-[0_0_8px_var(--color-accent-blue)]"></span>
            Title
          </label>
          <input 
            type="text" 
            value={title} 
            onChange={e => setTitle(e.target.value)}
            placeholder="Project Name..."
            className="w-full bg-foreground/[0.05] border border-foreground/20 border-l-[4px] border-l-accent-blue/50 text-foreground font-display text-2xl px-5 py-4 outline-none focus:border-foreground/40 focus:border-l-accent-blue focus:bg-accent-blue/10 transition-all placeholder:text-foreground/30 shadow-inner"
          />
        </div>

        <div>
          <label className="font-mono text-xs text-accent-blue uppercase tracking-widest block mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-blue inline-block shadow-[0_0_8px_var(--color-accent-blue)]"></span>
            Summary
          </label>
          <input 
            type="text" 
            value={summary} 
            onChange={e => setSummary(e.target.value)}
            placeholder="Brief summary..."
            className="w-full bg-foreground/[0.05] border border-foreground/20 border-l-[4px] border-l-accent-blue/50 text-foreground font-mono text-sm px-5 py-4 outline-none focus:border-foreground/40 focus:border-l-accent-blue focus:bg-accent-blue/10 transition-all placeholder:text-foreground/30 shadow-inner"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="font-mono text-xs text-accent-blue uppercase tracking-widest block mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-blue inline-block shadow-[0_0_8px_var(--color-accent-blue)]"></span>
              Tags (Comma Sep)
            </label>
            <input 
              type="text" 
              value={tags} 
              onChange={e => setTags(e.target.value)}
              placeholder="React, Hardware, PCB..."
              className="w-full bg-foreground/[0.05] border border-foreground/20 border-l-[4px] border-l-accent-blue/50 text-foreground font-mono text-sm px-5 py-4 outline-none focus:border-foreground/40 focus:border-l-accent-blue focus:bg-accent-blue/10 transition-all placeholder:text-foreground/30 shadow-inner"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-accent-blue uppercase tracking-widest block mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-blue inline-block shadow-[0_0_8px_var(--color-accent-blue)]"></span>
              GitHub URL
            </label>
            <input 
              type="text" 
              value={github} 
              onChange={e => setGithub(e.target.value)}
              placeholder="https://github.com/..."
              className="w-full bg-foreground/[0.05] border border-foreground/20 border-l-[4px] border-l-accent-blue/50 text-foreground font-mono text-sm px-5 py-4 outline-none focus:border-foreground/40 focus:border-l-accent-blue focus:bg-accent-blue/10 transition-all placeholder:text-foreground/30 shadow-inner"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-accent-blue uppercase tracking-widest block mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-blue inline-block shadow-[0_0_8px_var(--color-accent-blue)]"></span>
              Demo URL
            </label>
            <input 
              type="text" 
              value={demo} 
              onChange={e => setDemo(e.target.value)}
              placeholder="https://demo..."
              className="w-full bg-foreground/[0.05] border border-foreground/20 border-l-[4px] border-l-accent-blue/50 text-foreground font-mono text-sm px-5 py-4 outline-none focus:border-foreground/40 focus:border-l-accent-blue focus:bg-accent-blue/10 transition-all placeholder:text-foreground/30 shadow-inner"
            />
          </div>
        </div>

        <div>
          <label className="font-mono text-xs text-accent-blue uppercase tracking-widest block mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-blue inline-block shadow-[0_0_8px_var(--color-accent-blue)]"></span>
            Content
          </label>
          <CyberEditor 
            value={content} 
            onChange={setContent} 
          />
        </div>

        <div className="flex justify-end mt-4">
          <CyberButton onClick={handlePublish} variant="rust" className={loading ? 'opacity-50 pointer-events-none' : ''}>
            {loading ? 'SAVING...' : 'SAVE CHANGES'}
          </CyberButton>
        </div>
      </div>
    </div>
  )
}
