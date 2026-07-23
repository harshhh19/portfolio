import { createFileRoute, notFound, Link, useNavigate } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { getPostBySlug, deletePost } from '../../lib/db'
import { MarkdownRenderer } from '../../lib/markdown'
import { DotMatrixText } from '../../components/primitives/DotMatrixText'
import { SectionLabel } from '../../components/primitives/SectionLabel'
import { Divider } from '../../components/primitives/Divider'
import { CyberButton } from '../../components/primitives/CyberButton'

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    try {
      const post = await getPostBySlug({ data: params.slug })
      if (!post) throw notFound()
      return { post }
    } catch {
      throw notFound()
    }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post?.title} | Transmissions` },
    ]
  }),
  component: BlogPost,
})

function BlogPost() {
  const { post } = Route.useLoaderData()
  const navigate = useNavigate()
  const deletePostFn = useServerFn(deletePost)

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this transmission?')) {
      try {
        await deletePostFn({ data: post.slug })
        navigate({ to: '/blog' })
      } catch (err) {
        console.error(err)
        alert('Failed to delete transmission')
      }
    }
  }

  return (
    <article className="animate-in fade-in duration-500 pb-20 max-w-[65ch]">
      <div className="flex justify-between items-center mb-8">
        <Link to="/blog" className="font-mono text-xs text-muted-foreground hover:text-accent-blue uppercase tracking-widest no-underline inline-block">
          &larr; BACK TO TRANSMISSIONS
        </Link>
        {import.meta.env.DEV && (
          <div className="flex gap-4">
            <CyberButton href={`/admin/edit-post/${post.slug}`} variant="blue" className="!py-1 !px-3 !text-xs">
              EDIT
            </CyberButton>
            <CyberButton onClick={handleDelete} variant="rust" className="!py-1 !px-3 !text-xs">
              DELETE
            </CyberButton>
          </div>
        )}
      </div>
      
      <header className="mb-12">
        <SectionLabel 
          number="LOG" 
          label={new Date(post.created_at).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: '2-digit'
          })} 
          className="mb-6"
        />
        <DotMatrixText size="xl" as="h1" glow="blue">
          {post.title}
        </DotMatrixText>
      </header>
      
      <Divider />
      
      <div className="mt-12">
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  )
}
