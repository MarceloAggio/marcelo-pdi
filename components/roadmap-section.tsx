"use client"

import { cn } from "@/lib/utils"

const roadmapSteps = [
  {
    role: "Desenvolvedor",
    period: "2023 - 2024",
    status: "completed",
    description: "Fundamentos de desenvolvimento e boas práticas",
  },
  {
    role: "Desenvolvedor Sr.",
    period: "2024 - 2025",
    status: "completed",
    description: "Liderança técnica e decisões de arquitetura",
  },
  {
    role: "Arquiteto Jr.",
    period: "2025 - 2026",
    status: "current",
    description: "Design de soluções e visão sistêmica",
  },
  {
    role: "Arquiteto de Soluções",
    period: "2026 - 2027",
    status: "upcoming",
    description: "Arquitetura enterprise e estratégia técnica",
  },
  {
    role: "Arquiteto Sr.",
    period: "2027+",
    status: "upcoming",
    description: "Liderança de arquitetura e inovação",
  },
]

export function RoadmapSection() {
  return (
    <section>
      <h2 className="text-sm text-muted-foreground font-mono mb-6">Roadmap de Carreira</h2>
      
      <div className="space-y-0">
        {roadmapSteps.map((step, index) => (
          <div key={step.role} className="relative flex gap-6 pb-8 last:pb-0">
            {/* Vertical line */}
            {index < roadmapSteps.length - 1 && (
              <div className="absolute left-[7px] top-4 bottom-0 w-px bg-border" />
            )}
            
            {/* Dot */}
            <div className={cn(
              "relative z-10 h-4 w-4 rounded-full border-2 mt-1 shrink-0",
              step.status === "completed" && "bg-foreground border-foreground",
              step.status === "current" && "bg-success border-success",
              step.status === "upcoming" && "bg-background border-muted-foreground"
            )} />
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className={cn(
                  "font-medium",
                  step.status === "current" && "text-success"
                )}>
                  {step.role}
                </h3>
                <span className="text-xs text-muted-foreground font-mono">
                  {step.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
