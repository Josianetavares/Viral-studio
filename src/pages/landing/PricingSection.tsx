import { Check, Zap, Crown, Building2 } from 'lucide-react'

const plans = [
  {
    icon: Zap,
    name: 'Starter',
    price: 'Grátis',
    priceDetail: 'para sempre',
    description: 'Perfeito para começar e explorar a plataforma.',
    cta: 'Criar conta grátis',
    ctaStyle: 'btn-neon-outline',
    featured: false,
    badgeColor: 'bg-muted/50 text-muted-foreground border-border',
    iconColor: 'text-muted-foreground',
    features: [
      '5 vídeos por mês',
      '3 vozes disponíveis',
      'Formatos básicos (9:16)',
      'Geração por tema',
      'Legendas automáticas',
      'Exportação HD',
    ],
    missing: ['Analisador de referência', 'Templates premium', 'API access'],
  },
  {
    icon: Crown,
    name: 'Pro',
    price: 'R$97',
    priceDetail: '/mês',
    description: 'Para criadores sérios que querem escalar resultados.',
    cta: 'Começar Pro',
    ctaStyle: 'btn-neon',
    featured: true,
    badgeColor: 'bg-primary/10 text-primary border-primary/30',
    iconColor: 'text-primary',
    badge: 'Mais Popular',
    features: [
      '50 vídeos por mês',
      '15 vozes em 3 idiomas',
      'Todos os formatos',
      'Analisador de referência',
      'Templates premium',
      'Hashtags & títulos virais',
      'Suporte prioritário',
      'Exportação 4K',
    ],
    missing: [],
  },
  {
    icon: Building2,
    name: 'Studio',
    price: 'R$197',
    priceDetail: '/mês',
    description: 'Para agências e criadores de alto volume.',
    cta: 'Falar com vendas',
    ctaStyle: 'btn-neon-outline',
    featured: false,
    badgeColor: 'bg-accent/10 text-accent border-accent/30',
    iconColor: 'text-accent',
    features: [
      'Vídeos ilimitados',
      'Vozes customizadas',
      'Acesso à API',
      'Suporte prioritário 24/7',
      'White-label',
      'Dashboard de equipe',
      'Relatórios avançados',
      'Onboarding dedicado',
    ],
    missing: [],
  },
]

export default function PricingSection() {
  return (
    <section id="preços" className="relative overflow-hidden bg-muted/10 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Planos e Preços
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Planos para{' '}
            <span className="gradient-text-primary">cada criador</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Comece grátis e escale conforme seus resultados crescem.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
                  plan.featured
                    ? 'card-glass neon-glow-purple scale-[1.02] border-primary/40'
                    : 'border border-border/50 bg-card/50 hover:border-primary/20'
                }`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="btn-neon rounded-full px-4 py-1 text-xs font-bold text-white">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-7">
                  {/* Plan header */}
                  <div className="mb-6">
                    <div
                      className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold ${plan.badgeColor}`}
                    >
                      <Icon className={`h-3.5 w-3.5 ${plan.iconColor}`} />
                      {plan.name}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">{plan.priceDetail}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="mb-8 flex flex-1 flex-col gap-2.5">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feat}
                      </li>
                    ))}
                    {plan.missing?.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-muted-foreground/40 line-through">
                        <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-muted-foreground/20" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full rounded-full py-3 text-sm font-semibold transition-all duration-200 ${
                      plan.ctaStyle === 'btn-neon'
                        ? 'btn-neon text-white'
                        : 'btn-neon-outline'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Cancele a qualquer momento · Sem fidelidade · Suporte em português
        </p>
      </div>
    </section>
  )
}
