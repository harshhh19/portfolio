import { useState, useRef, useEffect } from 'react'
import { Bold, Italic, Link as LinkIcon, Image as ImageIcon, FileText, Eye, Edit3 } from 'lucide-react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import LinkExtension from '@tiptap/extension-link'
import ImageExtension from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'

interface CyberEditorProps {
  value: string
  onChange: (val: string) => void
  placeholder?: string
  className?: string
}

const MOCK_FILES = [
  'schematic_v2.pdf',
  'firmware_dump.bin',
  'system_architecture.png',
  'meeting_notes.txt',
  'bom_rev4.csv'
]

export function CyberEditor({ value, onChange, placeholder = 'Initiate transmission...', className = '' }: CyberEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      LinkExtension.configure({
        openOnClick: false,
      }),
      ImageExtension,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'px-6 pt-6 pb-[30px] prose-cyber max-w-none min-h-[300px] outline-none',
      },
    },
  })

  // Update editor content if value changes externally (but prevent cursor jumping if focused)
  useEffect(() => {
    if (editor && value !== editor.getHTML() && !editor.isFocused) {
      editor.commands.setContent(value)
    }
  }, [value, editor])

  const openFilePicker = (accept: string, callback: (file: File) => void) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = accept
    input.onchange = (e: any) => {
      const file = e.target.files?.[0]
      if (file) callback(file)
    }
    input.click()
  }

  const handleToolbarClick = (action: string) => {
    if (!editor) return

    switch (action) {
      case 'bold':
        editor.chain().focus().toggleBold().run()
        break
      case 'italic':
        editor.chain().focus().toggleItalic().run()
        break
      case 'link': {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('Enter link URL:', previousUrl || 'https://')
        if (url === null) return
        if (url === '') {
          editor.chain().focus().extendMarkRange('link').unsetLink().run()
          return
        }
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        break
      }
      case 'image': {
        openFilePicker('image/*', (file) => {
          // For a real app, you would upload the file to a server here.
          // For now, we use a local object URL to display it immediately.
          const url = URL.createObjectURL(file)
          editor.chain().focus().setImage({ src: url }).run()
        })
        break
      }
      case 'file': {
        openFilePicker('*/*', (file) => {
          // Similarly, in a real app you'd upload this file first.
          const url = URL.createObjectURL(file)
          editor.chain().focus().setLink({ href: url }).insertContent(file.name).run()
        })
        break
      }
    }
  }

  return (
    <div className={`border border-foreground/20 border-l-[4px] border-l-accent-blue/50 bg-foreground/[0.05] flex flex-col focus-within:border-foreground/40 focus-within:border-l-accent-blue focus-within:bg-accent-blue/10 transition-all shadow-inner ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between border-b border-foreground/20 bg-transparent p-2 gap-2">
        <div className="flex gap-1">
          <button type="button" onMouseDown={e => e.preventDefault()} onClick={() => handleToolbarClick('bold')} className={`p-1.5 transition-colors rounded hover:bg-foreground/10 ${editor?.isActive('bold') ? 'text-oled-green bg-foreground/10' : 'text-muted-foreground hover:text-oled-green'}`} title="Bold"><Bold size={16} /></button>
          <button type="button" onMouseDown={e => e.preventDefault()} onClick={() => handleToolbarClick('italic')} className={`p-1.5 transition-colors rounded hover:bg-foreground/10 ${editor?.isActive('italic') ? 'text-oled-green bg-foreground/10' : 'text-muted-foreground hover:text-oled-green'}`} title="Italic"><Italic size={16} /></button>
          <div className="w-px h-5 bg-foreground/20 mx-1 self-center" />
          <button type="button" onMouseDown={e => e.preventDefault()} onClick={() => handleToolbarClick('link')} className={`p-1.5 transition-colors rounded hover:bg-foreground/10 ${editor?.isActive('link') ? 'text-oled-green bg-foreground/10' : 'text-muted-foreground hover:text-oled-green'}`} title="Insert Link"><LinkIcon size={16} /></button>
          <button type="button" onMouseDown={e => e.preventDefault()} onClick={() => handleToolbarClick('image')} className="p-1.5 text-muted-foreground hover:text-oled-green transition-colors rounded hover:bg-foreground/10" title="Insert Image"><ImageIcon size={16} /></button>
          <button type="button" onMouseDown={e => e.preventDefault()} onClick={() => handleToolbarClick('file')} className="p-1.5 text-muted-foreground hover:text-oled-green transition-colors rounded hover:bg-foreground/10" title="Insert File"><FileText size={16} /></button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="relative flex-1 min-h-[300px]">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
