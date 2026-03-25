import { MousePointer2, Settings2, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MousePointer2,
    title: 'Escolha o Modo',
    description:
      'Selecione como quer criar: a partir de um roteiro pronto, digitando apenas um tema ou analisando um vídeo de referência.',
    color: 'text-neon-purple',
    borderColor: 'border-primary/30',
    glowColor: 'neon-glow-purple',
    bgColor: 'bg-primary/10',
  },
  {
    number: '02',
    icon: Settings2,
    title: 'Configure',
    description:
      'Defina formato, idioma, voz, duração e estilo visual. Nossa IA adapta tudo para o nicho e plataforma escolhidos.',
    color: 'text-neon-cyan',
    borderColor: 'border-secondary/30',
    glowColor: 'neon-glow-cyan',
    bgColor: 'bg-secondary/10',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Gere e Publique',
    description:
      'Receba o vídeo finalizado, com narração, cenas, legendas, hashtags e legenda viral prontos para postar.',
    color: 'text-neon-pink',
    borderColor: 'border-accent/30',
    glowColor: 'neon-glow-pink',
    bgColor: 'bg-accent/10',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-24 lg:py-32">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-medium text-secondary">
            Como Funciona
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="gradient-text-cyber">3 passos</span> para viralizar
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Do zero ao vídeo publicado em menos de 5 minutos.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-8 lg:grid-cols-3">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[3.5rem] hidden h-px lg:block">
            <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40" />
          </div>

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step number + icon */}
                <div className="relative mb-6">
                  {/* Outer glow ring */}
                  <div
                    className={`absolute -inset-2 rounded-full ${step.bgColor} blur-md opacity-60`}
                  />
                  {/* Circle */}
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full border ${step.borderColor} ${step.bgColor} ${step.glowColor}`}
                  >
                    <Icon className={`h-7 w-7 ${step.color}`} />
                  </div>

                  {/* Step badge */}
                  <div
                    className={`absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full ${step.bgColor} border ${step.borderColor} text-[10px] font-bold ${step.color}`}
                  >
                    {idx + 1}
                  </div>
                </div>

                {/* Content card */}
                <div className="card-glass w-full rounded-2xl p-6">
                  <div className={`mb-1 text-xs font-bold tracking-widest ${step.color}`}>
                    PASSO {step.number}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
