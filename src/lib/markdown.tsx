import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'

interface MarkdownRendererProps {
  content: string
}

const schema = {
  ...defaultSchema,
  protocols: {
    ...defaultSchema.protocols,
    src: [...(defaultSchema.protocols?.src || []), 'blob', 'data'],
    href: [...(defaultSchema.protocols?.href || []), 'blob', 'data'],
  },
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose-cyber">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}
        urlTransform={(value: string) => value}
        components={{
          // Override specific elements if needed
          img: ({ node, ...props }) => (
            <img {...props} className="rounded-sm border border-foreground/20 max-w-full my-4" />
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            if (inline) {
              return <code className="bg-muted px-1.5 py-0.5 rounded-sm" {...props}>{children}</code>
            }
            return (
              <pre className="bg-foreground text-oled-green p-4 overflow-x-auto rounded-sm border border-muted" {...props}>
                <code>{children}</code>
              </pre>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
