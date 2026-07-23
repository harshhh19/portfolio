import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useContext } from 'react'
import { useServerFn } from '@tanstack/react-start'
import { SectionLabel } from '../../components/primitives/SectionLabel'
import { CyberEditor } from '../../components/CyberEditor'
import { CyberButton } from '../../components/primitives/CyberButton'
import { DotMatrixText } from '../../components/primitives/DotMatrixText'
import { createPost } from '../../lib/db'
import { AdminContext } from '../admin'
import { MarkdownRenderer } from '../../lib/markdown'

export const Route = createFileRoute('/admin/write')({
  component: WritePost,
})

function WritePost() {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { previewMode } = useContext(AdminContext)
  
  const createPostFn = useServerFn(createPost)

  const handlePublish = async () => {
    if (!title) return alert("Title is required")
    setLoading(true)
    try {
      await createPostFn({ data: { title, summary, content } })
      navigate({ to: '/blog' })
    } catch (err) {
      console.error(err)
      alert("Failed to save post")
      setLoading(false)
    }
  }

  if (previewMode) {
    return (
      <article className="animate-in fade-in duration-500 pb-20 max-w-[65ch]">
        <header className="mb-12">
          <SectionLabel 
            number="LOG" 
            label="PREVIEW"
            className="mb-6"
          />
          <DotMatrixText size="xl" as="h1" glow="blue">
            {title || 'Untitled Transmission'}
          </DotMatrixText>
          <div className="mt-4 text-muted-foreground font-mono text-sm">
            {summary}
          </div>
        </header>
        
        <div className="w-full h-px bg-foreground/20 my-12" />
        
        <div className="mt-12 prose-cyber max-w-none">
          {content ? <MarkdownRenderer content={content} /> : <p className="text-muted-foreground italic font-mono">No content.</p>}
        </div>
      </article>
    )
  }

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <SectionLabel number="01" label="NEW POST" />
      
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
            placeholder="Enter transmission title..."
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
            {loading ? 'PUBLISHING...' : 'PUBLISH TRANSMISSION'}
          </CyberButton>
        </div>
      </div>
    </div>
  )
}
