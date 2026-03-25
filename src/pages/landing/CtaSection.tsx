import { Play, ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-accent/10 blur-[80px]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-sm font-medium text-primary animate-pulse-neon">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Comece agora — é grátis
        </div>

        {/* Headline */}
        <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Pronto para criar seu{' '}
          <span className="gradient-text-primary">primeiro vídeo viral?</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
          Junte-se a mais de 10 mil criadores que já usam IA para produzir conteúdo que viraliza. Sem cartão de crédito para começar.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="btn-neon flex items-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white">
            <Play className="h-5 w-5 fill-white" />
            Criar Vídeo Grátis Agora
          </button>
          <button className="flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground">
            Ver demonstração
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Trust note */}
        <p className="mt-8 text-sm text-muted-foreground">
          Sem cartão de crédito · Cancele quando quiser · Suporte em PT-BR
        </p>
      </div>
    </section>
  )
}
