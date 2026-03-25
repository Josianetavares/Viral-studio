import {
  Clapperboard,
  Lightbulb,
  Search,
  Mic,
  Hash,
  LayoutTemplate,
} from 'lucide-react'

const features = [
  {
    icon: Clapperboard,
    title: 'Script to Video',
    description:
      'Cole um roteiro e receba um vídeo completo com narração, cenas e legendas automáticas.',
    color: 'text-neon-purple',
    border: 'border-primary/20',
    glow: 'hover:neon-glow-purple',
    badge: 'purple',
  },
  {
    icon: Lightbulb,
    title: 'Criação por Tema',
    description:
      'Digite apenas um tema ou ideia e a IA gera tudo: roteiro, gancho viral, narração e vídeo montado.',
    color: 'text-yellow-400',
    border: 'border-yellow-400/20',
    glow: 'hover:shadow-[0_0_20px_hsl(45_100%_60%/0.3)]',
    badge: 'yellow',
  },
  {
    icon: Search,
    title: 'Analisador de Referência',
    description:
      'Analise vídeos públicos como referência estratégica e gere uma versão original mais profissional.',
    color: 'text-neon-cyan',
    border: 'border-secondary/20',
    glow: 'hover:neon-glow-cyan',
    badge: 'cyan',
  },
  {
    icon: Mic,
    title: 'Biblioteca de Vozes',
    description:
      'Mais de 15 vozes em PT, EN e ES. Suave, energética, dramática, motivacional e muito mais.',
    color: 'text-neon-pink',
    border: 'border-accent/20',
    glow: 'hover:neon-glow-pink',
    badge: 'pink',
  },
  {
    icon: Hash,
    title: 'Auto Hashtags & Títulos',
    description:
      'Geração automática de título viral, legenda, hashtags, CTA e descrição otimizada para cada rede.',
    color: 'text-neon-cyan',
    border: 'border-secondary/20',
    glow: 'hover:neon-glow-cyan',
    badge: 'cyan',
  },
  {
    icon: LayoutTemplate,
    title: 'Templates por Nicho',
    description:
      'Biblioteca de templates prontos para gospel, motivacional, vendas, humor, curiosidades e mais.',
    color: 'text-neon-purple',
    border: 'border-primary/20',
    glow: 'hover:neon-glow-purple',
    badge: 'purple',
  },
]

const badgeColors: Record<string, string> = {
  purple: 'bg-primary/10 text-primary border-primary/20',
  yellow: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
  cyan: 'bg-secondary/10 text-secondary border-secondary/20',
  pink: 'bg-accent/10 text-accent border-accent/20',
}

export default function FeaturesSection() {
  return (
    <section id="recursos" className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Funcionalidades
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tudo que você precisa{' '}
            <span className="gradient-text-primary">para viralizar</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            De roteiro a publicação em minutos. Nossa IA cuida de cada detalhe para que seu conteúdo alcance o máximo potencial.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group card-glass rounded-2xl p-6 transition-all duration-300 ${feature.glow} cursor-default`}
              >
                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${badgeColors[feature.badge]} ${feature.border}`}
                >
                  <Icon className={`h-5 w-5 ${feature.color}`} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                {/* Hover line accent */}
                <div
                  className={`mt-5 h-px w-0 rounded-full bg-gradient-to-r from-primary/60 to-accent/40 transition-all duration-500 group-hover:w-full`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
