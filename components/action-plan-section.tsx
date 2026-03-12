"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check, Circle } from "lucide-react"

const quarters = [
  {
    id: "q1",
    label: "Q1 2026",
    goals: [
      { text: "Finalizar AWS Solutions Architect", done: true },
      { text: "Liderar 2 projetos de arquitetura", done: true },
      { text: "Documentar padrões de design", done: false },
    ],
  },
  {
    id: "q2",
    label: "Q2 2026",
    goals: [
      { text: "Iniciar Kubernetes Administrator", done: false },
      { text: "Implementar observability stack", done: false },
      { text: "Mentoria para 2 desenvolvedores", done: false },
    ],
  },
  {
    id: "q3",
    label: "Q3 2026",
    goals: [
      { text: "TOGAF Foundation", done: false },
      { text: "Apresentar em tech talk interno", done: false },
      { text: "Contribuir para open source", done: false },
    ],
  },
  {
    id: "q4",
    label: "Q4 2026",
    goals: [
      { text: "Revisão de arquitetura enterprise", done: false },
      { text: "Publicar artigo técnico", done: false },
      { text: "Avaliação para promoção", done: false },
    ],
  },
]

export function ActionPlanSection() {
  const [activeQuarter, setActiveQuarter] = useState("q1")
  
  const currentQuarter = quarters.find(q => q.id === activeQuarter)
  const completedCount = currentQuarter?.goals.filter(g => g.done).length || 0
  const totalCount = currentQuarter?.goals.length || 0

  return (
    <section>
      <h2 className="text-sm text-muted-foreground font-mono mb-6">Plano de Ação</h2>
      
      {/* Quarter selector */}
      <div className="flex gap-2 mb-8">
        {quarters.map((quarter) => (
          <button
            key={quarter.id}
            onClick={() => setActiveQuarter(quarter.id)}
            className={cn(
              "px-4 py-2 text-sm rounded-md transition-colors",
              activeQuarter === quarter.id
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {quarter.label}
          </button>
        ))}
      </div>
      
      {/* Progress indicator */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-success transition-all duration-300"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
        <span className="text-sm text-muted-foreground font-mono">
          {completedCount}/{totalCount}
        </span>
      </div>
      
      {/* Goals */}
      <div className="space-y-3">
        {currentQuarter?.goals.map((goal, index) => (
          <div 
            key={index}
            className={cn(
              "flex items-center gap-3 p-4 rounded-lg border border-border transition-colors",
              goal.done && "bg-muted/50"
            )}
          >
            {goal.done ? (
              <Check className="h-4 w-4 text-success shrink-0" />
            ) : (
              <Circle className="h-4 w-4 text-muted-foreground shrink-0" />
            )}
            <span className={cn(
              "text-sm",
              goal.done && "text-muted-foreground line-through"
            )}>
              {goal.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
