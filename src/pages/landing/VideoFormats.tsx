import { MonitorPlay, Smartphone, Square, RectangleVertical } from 'lucide-react'

const formats = [
  {
    label: '9:16',
    platform: 'TikTok / Reels',
    icon: Smartphone,
    description: 'Vertical — Stories, Shorts, Reels',
    aspect: 'aspect-[9/16]',
    maxH: 'max-h-56',
    color: 'text-neon-cyan',
    borderColor: 'border-secondary/30',
    glowClass: 'neon-glow-cyan',
    gradFrom: 'from-secondary/20',
    gradTo: 'to-primary/10',
    badge: 'bg-secondary/10 text-secondary border-secondary/20',
  },
  {
    label: '16:9',
    platform: 'YouTube',
    icon: MonitorPlay,
    description: 'Horizontal — Vídeos longos, Vlogs',
    aspect: 'aspect-video',
    maxH: 'max-h-36',
    color: 'text-red-400',
    borderColor: 'border-red-400/30',
    glowClass: 'hover:shadow-[0_0_20px_hsl(0_84%_60%/0.3)]',
    gradFrom: 'from-red-500/20',
    gradTo: 'to-primary/10',
    badge: 'bg-red-500/10 text-red-400 border-red-400/20',
  },
  {
    label: '1:1',
    platform: 'Instagram Feed',
    icon: Square,
    description: 'Quadrado — Feed, carrossel',
    aspect: 'aspect-square',
    maxH: 'max-h-40',
    color: 'text-neon-pink',
    borderColor: 'border-accent/30',
    glowClass: 'neon-glow-pink',
    gradFrom: 'from-accent/20',
    gradTo: 'to-primary/10',
    badge: 'bg-accent/10 text-accent border-accent/20',
  },
  {
    label: '4:5',
    platform: 'Feed / Pinterest',
    icon: RectangleVertical,
    description: 'Retrato — Feed otimizado',
    aspect: 'aspect-[4/5]',
    maxH: 'max-h-48',
    color: 'text-neon-purple',
    borderColor: 'border-primary/30',
    glowClass: 'neon-glow-purple',
    gradFrom: 'from-primary/20',
    gradTo: 'to-accent/10',
    badge: 'bg-primary/10 text-primary border-primary/20',
  },
]

export default function VideoFormats() {
  return (
    <section id="templates" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
            Formatos
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Formatos para{' '}
            <span className="gradient-text-primary">todas as plataformas</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Gere no formato certo para cada rede social com um clique.
          </p>
        </div>

        {/* Format cards */}
        <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
          {formats.map((fmt) => {
            const Icon = fmt.icon
            return (
              <div
                key={fmt.label}
                className={`group flex flex-col items-center gap-4 rounded-2xl border ${fmt.borderColor} bg-card/50 p-5 transition-all duration-300 ${fmt.glowClass} cursor-default hover:bg-card/80`}
              >
                {/* Aspect ratio preview */}
                <div
                  className={`w-full ${fmt.maxH} overflow-hidden rounded-xl border ${fmt.borderColor} bg-gradient-to-br ${fmt.gradFrom} ${fmt.gradTo} ${fmt.aspect} relative flex items-center justify-center`}
                >
                  {/* Grid pattern inside */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                  {/* Platform icon */}
                  <div className="relative flex flex-col items-center gap-2">
                    <Icon className={`h-6 w-6 ${fmt.color}`} />
                    <span className={`text-lg font-bold ${fmt.color}`}>{fmt.label}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="w-full text-center">
                  <div
                    className={`mb-1 inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${fmt.badge}`}
                  >
                    {fmt.platform}
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">{fmt.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
