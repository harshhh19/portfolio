import { createFileRoute, Outlet, useRouter } from '@tanstack/react-router'
import { createContext, useContext, useState } from 'react'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { Eye, Edit3 } from 'lucide-react'

export const AdminContext = createContext({
  previewMode: false,
  setPreviewMode: (v: boolean) => {}
})

export const Route = createFileRoute('/admin')({
  component: AdminLayout,
})

function AdminLayout() {
  const router = useRouter()
  const [previewMode, setPreviewMode] = useState(false)

  return (
    <AdminContext.Provider value={{ previewMode, setPreviewMode }}>
      <div className="flex flex-col min-h-screen pb-20">
        <header className="flex items-center justify-between py-4 border-b border-foreground/10 mb-8">
          <DotMatrixText size="md" glow="cyan">
            SYS_ADMIN
          </DotMatrixText>
          
          <div className="flex gap-2 bg-foreground/[0.05] p-1 border border-foreground/20 shadow-inner">
            <button 
              type="button" 
              onClick={() => setPreviewMode(false)} 
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${!previewMode ? 'bg-oled-green/20 text-oled-green shadow-[inset_2px_0_0_var(--color-oled-green)]' : 'text-muted-foreground hover:bg-foreground/10'}`}
            >
              <Edit3 size={14} /> Write
            </button>
            <button 
              type="button" 
              onClick={() => setPreviewMode(true)} 
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${previewMode ? 'bg-oled-green/20 text-oled-green shadow-[inset_2px_0_0_var(--color-oled-green)]' : 'text-muted-foreground hover:bg-foreground/10'}`}
            >
              <Eye size={14} /> Preview
            </button>
          </div>
        </header>

        <Outlet />
      </div>
    </AdminContext.Provider>
  )
}
