"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const technicalSkills = [
  { name: "Cloud Architecture (AWS/Azure)", level: 75 },
  { name: "Microservices & APIs", level: 80 },
  { name: "Design Patterns", level: 70 },
  { name: "Kubernetes & Docker", level: 65 },
  { name: "Event-Driven Architecture", level: 60 },
  { name: "System Design", level: 70 },
]

const softSkills = [
  { name: "Comunicação Técnica", level: 75 },
  { name: "Documentação", level: 80 },
  { name: "Liderança Técnica", level: 60 },
  { name: "Stakeholder Management", level: 65 },
]

const certifications = [
  { name: "AWS Solutions Architect", status: "Em andamento" },
  { name: "Kubernetes Administrator", status: "Planejado" },
  { name: "TOGAF Foundation", status: "Planejado" },
]

export function SkillsSection() {
  return (
    <section>
      <h2 className="text-sm text-muted-foreground font-mono mb-6">Competências</h2>
      
      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="technical">Técnicas</TabsTrigger>
          <TabsTrigger value="soft">Comportamentais</TabsTrigger>
          <TabsTrigger value="certs">Certificações</TabsTrigger>
        </TabsList>
        
        <TabsContent value="technical" className="space-y-6">
          {technicalSkills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} />
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="soft" className="space-y-6">
          {softSkills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} />
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="certs" className="space-y-4">
          {certifications.map((cert) => (
            <div 
              key={cert.name} 
              className="flex items-center justify-between py-3 border-b border-border last:border-0"
            >
              <span className="text-sm">{cert.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                cert.status === "Em andamento" 
                  ? "bg-success/20 text-success" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {cert.status}
              </span>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  )
}
