import { createFileRoute } from '@tanstack/react-router'
import { DotMatrixText } from '../components/primitives/DotMatrixText'
import { SectionLabel } from '../components/primitives/SectionLabel'
import { CyberButton } from '../components/primitives/CyberButton'
import { Card } from '../components/primitives/Card'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <DotMatrixText size="xl" as="h1" glow="red" className="mb-12">
        CONTACT
      </DotMatrixText>

      <SectionLabel number="09" label="TRANSMISSION" />
      
      <div className="max-w-xl">
        <Card>
          <h2 className="font-display text-xl text-foreground mb-4">ESTABLISH CONNECTION</h2>
          <p className="prose-cyber mb-8">
            Looking for a collaborator on a hardware/software project? Want to discuss embedded systems, web architecture, or mechanical keyboards? Send a transmission.
          </p>
          
          <div className="flex flex-col gap-4">
            <CyberButton href="mailto:hello@example.com" variant="rust" className="w-fit">
              EMAIL // HELLO@EXAMPLE.COM
            </CyberButton>
            
            <CyberButton href="https://github.com" variant="blue" className="w-fit">
              GITHUB // OPEN_SOURCE
            </CyberButton>
            
            <CyberButton href="https://linkedin.com" variant="blue" className="w-fit">
              LINKEDIN // NETWORK
            </CyberButton>
          </div>
        </Card>
      </div>
    </div>
  )
}
