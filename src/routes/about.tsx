import { createFileRoute } from '@tanstack/react-router'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { SectionLabel } from '../components/primitives/SectionLabel'
import { Divider } from '../components/primitives/Divider'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <DotMatrixText size="xl" as="h1" glow="rust" className="mb-12">
        ABOUT
      </DotMatrixText>

      <SectionLabel number="00" label="SYS_INFO" />
      
      <div className="prose-cyber max-w-2xl">
        <p>
          I am a multidisciplinary engineer bridging the gap between hardware and software. 
          My background in Electrical Engineering has given me a deep appreciation for the physical 
          reality of computing—electrons flowing through silicon, signals propagating across traces, 
          and the physical constraints that software often takes for granted.
        </p>
        
        <p>
          Currently, I'm exploring the intersection of modern web technologies and embedded systems.
          I believe the next wave of innovation lies in tightly coupled hardware-software ecosystems
          where the boundaries between physical devices and digital services disappear.
        </p>
        
        <Divider />
        
        <h3 className="font-display text-lg text-foreground mb-4">BACKGROUND</h3>
        <ul>
          <li>B.S. Electrical Engineering</li>
          <li>Embedded Systems Developer</li>
          <li>Full-Stack Web Architect</li>
        </ul>
      </div>
    </div>
  )
}
