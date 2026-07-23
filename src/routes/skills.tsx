import { createFileRoute } from '@tanstack/react-router'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { SectionLabel } from '../components/primitives/SectionLabel'
import { SKILLS } from '../data/skills'

export const Route = createFileRoute('/skills')({
  component: Skills,
})

function Skills() {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <DotMatrixText size="xl" as="h1" glow="rust" className="mb-12">
        SKILLS
      </DotMatrixText>

      <SectionLabel number="02" label="TECHNICAL EXPERTISE" />

      <div className="space-y-12 mt-8">
        {SKILLS.map((category) => (
          <div key={category.title}>
            <h3 className="font-display text-lg text-accent-blue mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    font-mono text-sm px-4 py-2 
                    bg-foreground/5 border border-foreground/15
                    hover:border-accent-rust hover:text-accent-rust
                    transition-colors cursor-default
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
