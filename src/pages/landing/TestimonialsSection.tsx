import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carla Mendes',
    role: 'Criadora de conteúdo · Gospel',
    avatar: 'CM',
    stars: 5,
    quote:
      'Em 3 dias usando o Viral Studio Pro, já tinha 4 vídeos com mais de 50 mil visualizações. A IA entende exatamente o tom do nicho gospel. Nunca produzi tanto em tão pouco tempo.',
    color: 'text-neon-purple',
    borderColor: 'border-primary/20',
  },
  {
    name: 'Rafael Torres',
    role: 'Agência de Marketing Digital',
    avatar: 'RT',
    stars: 5,
    quote:
      'Usamos para 12 clientes diferentes. A função de análise de referência é absurdamente boa — entrega um vídeo original melhor do que o original. Economizamos horas de produção por semana.',
    color: 'text-neon-cyan',
    borderColor: 'border-secondary/20',
  },
  {
    name: 'Juliana Alves',
    role: 'Infoprodutora · Motivacional',
    avatar: 'JA',
    stars: 5,
    quote:
      'A qualidade das vozes é incrível, parece um locutor profissional. Meu canal no YouTube cresceu 3x em dois meses. Recomendo para qualquer criador que quer resultados reais.',
    color: 'text-neon-pink',
    borderColor: 'border-accent/20',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
            Depoimentos
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Quem já usou{' '}
            <span className="gradient-text-primary">recomenda</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`group card-glass relative rounded-2xl p-7 transition-all duration-300 hover:scale-[1.01] ${t.borderColor}`}
            >
              {/* Quote icon */}
              <Quote className={`mb-4 h-8 w-8 ${t.color} opacity-60`} />

              {/* Stars */}
              <div className="mb-4 flex items-center gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${t.borderColor} bg-card text-sm font-bold ${t.color}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
