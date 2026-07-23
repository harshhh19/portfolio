export interface SkillCategory {
  title: string
  skills: string[]
}

export const SKILLS: SkillCategory[] = [
  {
    title: 'Hardware & Embedded',
    skills: ['C / C++', 'Rust', 'Verilog', 'FreeRTOS', 'PCB Design (KiCad)', 'ESP32 / STM32', 'Oscilloscope / Logic Analyzer'],
  },
  {
    title: 'Web & Systems',
    skills: ['TypeScript', 'React / Next.js / TanStack', 'Node.js / Go', 'PostgreSQL', 'Redis', 'Docker', 'Linux Admin'],
  },
  {
    title: 'Fabrication',
    skills: ['3D Modeling (Fusion 360)', 'FDM / Resin Printing', 'Laser Cutting', 'SMD Soldering'],
  }
]
