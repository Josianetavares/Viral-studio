import {
  Play,
  TrendingUp,
  CheckCircle2,
  Globe,
  Film,
  Star,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'

const stats = [
  { icon: Film, value: '10k+', label: 'Vídeos Criados' },
  { icon: CheckCircle2, value: '98%', label: 'Taxa de Aprovação' },
  { icon: TrendingUp, value: '50+', label: 'Nichos' },
  { icon: Globe, value: '3', label: 'Idiomas' },
]

function PhoneMockup() {
  return (
    <div className="animate-float relative mx-auto w-[200px]">
      {/* Glow backdrop */}
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-2xl" />

      {/* Phone shell */}
      <div className="relative rounded-[2rem] border border-white/10 bg-[hsl(222_40%_10%)] p-3 shadow-xl">
        {/* Notch */}
        <div className="mx-auto mb-2 h-4 w-16 rounded-full bg-[hsl(222_40%_6%)]" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-2xl bg-[hsl(222_47%_5%)] pb-[177%]">
          {/* Video BG gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-accent/10 to-secondary/20" />

          {/* Scanline effect */}
          <div className="absolute inset-0 scanline overflow-hidden" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md neon-glow-purple">
              <Play className="h-5 w-5 fill-white text-white" />
            </div>
          </div>

          {/* Video info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <div className="mb-1 flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-[10px] font-semibold text-yellow-400">VIRAL</span>
            </div>
            <p className="text-[9px] leading-tight text-white/80">
              5 erros que impedem seus resultados...
            </p>
            {/* Progress bar */}
            <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-accent" />
            </div>
          </div>

          {/* Like count badge */}
          <div className="absolute right-2 top-3 flex flex-col items-center gap-1">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <TrendingUp className="h-3 w-3 text-accent" />
            </div>
            <span className="text-[8px] font-bold text-white/70">2.4M</span>
          </div>
        </div>

        {/* Home indicator */}
        <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-white/20" />
      </div>

      {/* Floating badge */}
      <div className="absolute -right-4 -top-2 flex items-center gap-1 rounded-full bg-accent/20 px-2.5 py-1 text-[10px] font-semibold text-accent backdrop-blur-sm border border-accent/30">
        <TrendingUp className="h-2.5 w-2.5" />
        Viral
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Radial glow behind content */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-accent/8 blur-[80px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-secondary/8 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="animate-slide-up mb-6 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse-neon" />
              Powered by AI · Vídeos Virais em Minutos
            </div>

            {/* Headline */}
            <h1 className="animate-slide-up-delay-1 mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Crie Vídeos Virais que{' '}
              <span className="gradient-text-primary">Explodem</span>{' '}
              nas Redes Sociais
            </h1>

            {/* Subheadline */}
            <p className="animate-slide-up-delay-2 mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Transforme roteiros, ideias e referências em vídeos originais,
              profissionais e prontos para postar — com IA avançada.
            </p>

            {/* CTAs */}
            <div className="animate-slide-up-delay-3 flex flex-wrap gap-4">
              <Link to="/signup">
                <button className="btn-neon flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white">
                  <Play className="h-4 w-4 fill-white" />
                  Criar Vídeo Agora
                </button>
              </Link>
              <Link to="/dashboard/analyzer">
                <button className="flex items-center gap-2 rounded-full border border-secondary/50 px-7 py-3.5 text-base font-semibold text-neon-cyan transition-all duration-200 hover:border-secondary hover:bg-secondary/10 hover:shadow-[0_0_20px_hsl(195_100%_45%/0.3)]">
                  <TrendingUp className="h-4 w-4" />
                  Analisar Referência
                </button>
              </Link>
            </div>

            {/* Stats row */}
            <div className="animate-slide-up-delay-4 mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xl font-bold text-foreground">{value}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
