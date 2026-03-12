import { Boxes } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-6">
          <Boxes className="h-6 w-6 text-muted-foreground" />
          <span className="text-sm text-muted-foreground font-mono">PDI 2026</span>
        </div>
        
        <h1 className="text-4xl font-semibold tracking-tight mb-4 text-balance">
          Arquitetura de Soluções
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Projetando sistemas escaláveis, resilientes e bem estruturados. 
          Transformando requisitos de negócio em soluções técnicas elegantes.
        </p>

        <div className="flex gap-8 mt-10 text-sm">
          <div>
            <p className="text-muted-foreground">Foco</p>
            <p className="font-medium mt-1">Cloud & Microservices</p>
          </div>
          <div>
            <p className="text-muted-foreground">Meta</p>
            <p className="font-medium mt-1">Arquiteto de Soluções Sr.</p>
          </div>
          <div>
            <p className="text-muted-foreground">Atualizado</p>
            <p className="font-medium mt-1">Mar 2026</p>
          </div>
        </div>
      </div>
    </header>
  )
}
