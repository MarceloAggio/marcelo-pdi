"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: "1",
    title: "Migração para Microservices",
    type: "Arquitetura",
    description: "Redesenho de sistema monolítico para arquitetura de microservices com foco em escalabilidade.",
    technologies: ["Kubernetes", "gRPC", "Event Sourcing", "PostgreSQL"],
    learnings: [
      "Decomposição de domínios com DDD",
      "Estratégias de comunicação entre serviços",
      "Gestão de transações distribuídas",
    ],
    impact: "Redução de 60% no tempo de deploy",
  },
  {
    id: "2",
    title: "Plataforma de Eventos",
    type: "Event-Driven",
    description: "Arquitetura event-driven para processamento assíncrono de alta volumetria.",
    technologies: ["Kafka", "Apache Flink", "Redis", "AWS Lambda"],
    learnings: [
      "Patterns de event sourcing e CQRS",
      "Garantia de entrega e idempotência",
      "Monitoramento de fluxos de eventos",
    ],
    impact: "Processamento de 1M+ eventos/min",
  },
  {
    id: "3",
    title: "API Gateway Corporativo",
    type: "Integração",
    description: "Gateway centralizado para gestão de APIs internas e externas.",
    technologies: ["Kong", "OAuth 2.0", "OpenAPI", "Terraform"],
    learnings: [
      "Rate limiting e throttling",
      "Autenticação e autorização federada",
      "Versionamento de APIs",
    ],
    impact: "Centralização de 50+ APIs",
  },
]

export function ProjectsSection() {
  return (
    <section>
      <h2 className="text-sm text-muted-foreground font-mono mb-6">Projetos</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {projects.map((project) => (
          <AccordionItem key={project.id} value={project.id}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <span className="font-medium">{project.title}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                  {project.type}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Aprendizados</p>
                  <ul className="space-y-1">
                    {project.learnings.map((learning, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-muted-foreground/50 mt-1.5">-</span>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center gap-2 pt-2 text-sm">
                  <ExternalLink className="h-3 w-3" />
                  <span className="text-success">{project.impact}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
