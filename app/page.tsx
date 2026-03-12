import { Header } from "@/components/header"
import { SkillsSection } from "@/components/skills-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { ProjectsSection } from "@/components/projects-section"
import { ActionPlanSection } from "@/components/action-plan-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        <SkillsSection />
        <RoadmapSection />
        <ProjectsSection />
        <ActionPlanSection />
      </div>
      <footer className="border-t border-border py-8 mt-16">
        <p className="text-center text-muted-foreground text-sm">
          PDI - Arquitetura de Soluções
        </p>
      </footer>
    </main>
  )
}
