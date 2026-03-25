import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Layers, ArrowRight, Users } from 'lucide-react'
import DashboardLayout from '../components/layout/DashboardLayout'

interface Template {
  id: string
  niche: string
  name: string
  desc: string
  usageCount: string
  format: string
  duration: string
  accentColor: string
  borderColor: string
  badgeColor: string
}

const TEMPLATES: Template[] = [
  // Motivação
  { id: 't1', niche: 'Motivação', name: 'Gancho do Impossível', desc: 'Comece com algo que parece impossível e mostre como é possível. Alta taxa de retenção.', usageCount: '3.2k', format: '9:16', duration: '60s', accentColor: 'bg-violet-500', borderColor: 'border-violet-500/40', badgeColor: 'bg-violet-500/15 text-violet-300 border-violet-500/30' },
  { id: 't2', niche: 'Motivação', name: 'Desafio de 30 Dias', desc: 'Convide a audiência para um desafio transformador. Gera engajamento massivo.', usageCount: '2.8k', format: '9:16', duration: '45s', accentColor: 'bg-purple-500', borderColor: 'border-purple-500/40', badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/30' },
  { id: 't3', niche: 'Motivação', name: 'Transformação Radical', desc: 'Antes e depois poderoso com narrativa emocional. Máxima identificação.', usageCount: '4.1k', format: '9:16', duration: '90s', accentColor: 'bg-fuchsia-500', borderColor: 'border-fuchsia-500/40', badgeColor: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30' },

  // Gospel
  { id: 't4', niche: 'Gospel', name: 'Versículo do Dia', desc: 'Versículo bíblico com contexto inspirador e aplicação prática para o dia a dia.', usageCount: '5.7k', format: '9:16', duration: '30s', accentColor: 'bg-amber-500', borderColor: 'border-amber-500/40', badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
  { id: 't5', niche: 'Gospel', name: 'Testemunho Poderoso', desc: 'Compartilhe uma história de transformação com fé. Altamente viral na comunidade.', usageCount: '3.9k', format: '16:9', duration: '90s', accentColor: 'bg-yellow-500', borderColor: 'border-yellow-500/40', badgeColor: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30' },
  { id: 't6', niche: 'Gospel', name: 'Louvor e Adoração', desc: 'Template visual para letras de louvor com fundo cinematográfico impactante.', usageCount: '2.4k', format: '9:16', duration: '60s', accentColor: 'bg-orange-500', borderColor: 'border-orange-500/40', badgeColor: 'bg-orange-500/15 text-orange-300 border-orange-500/30' },

  // Humor
  { id: 't7', niche: 'Humor', name: 'POV Engraçado', desc: 'Situação cômica do ponto de vista do personagem. Formato trending no TikTok.', usageCount: '8.3k', format: '9:16', duration: '30s', accentColor: 'bg-lime-500', borderColor: 'border-lime-500/40', badgeColor: 'bg-lime-500/15 text-lime-300 border-lime-500/30' },
  { id: 't8', niche: 'Humor', name: 'Situação Identificável', desc: 'Quem nunca? Situações do cotidiano que todo mundo já viveu. Máximo compartilhamento.', usageCount: '9.1k', format: '9:16', duration: '45s', accentColor: 'bg-green-500', borderColor: 'border-green-500/40', badgeColor: 'bg-green-500/15 text-green-300 border-green-500/30' },
  { id: 't9', niche: 'Humor', name: 'Fail Épico', desc: 'Momentos engraçados com reação exagerada. Altíssima taxa de compartilhamento.', usageCount: '6.7k', format: '9:16', duration: '30s', accentColor: 'bg-teal-500', borderColor: 'border-teal-500/40', badgeColor: 'bg-teal-500/15 text-teal-300 border-teal-500/30' },

  // Vendas
  { id: 't10', niche: 'Vendas', name: 'Problema → Solução', desc: 'Identifique a dor do cliente e apresente seu produto como a solução perfeita.', usageCount: '4.5k', format: '9:16', duration: '60s', accentColor: 'bg-red-500', borderColor: 'border-red-500/40', badgeColor: 'bg-red-500/15 text-red-300 border-red-500/30' },
  { id: 't11', niche: 'Vendas', name: 'Antes e Depois', desc: 'Mostre resultados reais com prova visual. Converte 3x mais que conteúdo genérico.', usageCount: '5.2k', format: '16:9', duration: '45s', accentColor: 'bg-rose-500', borderColor: 'border-rose-500/40', badgeColor: 'bg-rose-500/15 text-rose-300 border-rose-500/30' },
  { id: 't12', niche: 'Vendas', name: 'Social Proof Boom', desc: 'Depoimentos reais empilhados com edição dinâmica. Prova social irresistível.', usageCount: '3.8k', format: '9:16', duration: '60s', accentColor: 'bg-pink-500', borderColor: 'border-pink-500/40', badgeColor: 'bg-pink-500/15 text-pink-300 border-pink-500/30' },

  // Curiosidades
  { id: 't13', niche: 'Curiosidades', name: 'Fato Chocante', desc: 'Comece com um fato inacreditável. O espectador fica até o fim para confirmar.', usageCount: '7.4k', format: '9:16', duration: '45s', accentColor: 'bg-cyan-500', borderColor: 'border-cyan-500/40', badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' },
  { id: 't14', niche: 'Curiosidades', name: 'Você Sabia?', desc: 'Formato simples e direto ao ponto. Funciona em qualquer nicho de curiosidades.', usageCount: '6.1k', format: '9:16', duration: '30s', accentColor: 'bg-sky-500', borderColor: 'border-sky-500/40', badgeColor: 'bg-sky-500/15 text-sky-300 border-sky-500/30' },
  { id: 't15', niche: 'Educação', name: 'Tutorial Rápido', desc: 'Ensine algo útil em menos de 60 segundos. Alto salvamento e compartilhamento.', usageCount: '4.9k', format: '9:16', duration: '60s', accentColor: 'bg-indigo-500', borderColor: 'border-indigo-500/40', badgeColor: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' },
  { id: 't16', niche: 'Educação', name: 'Explicação Simples', desc: 'Conceitos complexos em linguagem acessível com visualizações claras.', usageCount: '3.3k', format: '16:9', duration: '90s', accentColor: 'bg-blue-500', borderColor: 'border-blue-500/40', badgeColor: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
  { id: 't17', niche: 'Negócios', name: 'Dica de Negócio', desc: 'Uma dica prática de negócios por vídeo. Posiciona como autoridade no nicho.', usageCount: '2.7k', format: '9:16', duration: '45s', accentColor: 'bg-emerald-500', borderColor: 'border-emerald-500/40', badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
  { id: 't18', niche: 'Lifestyle', name: 'Rotina Ideal', desc: 'Mostre hábitos e rotinas inspiradoras. Conteúdo aspiracional com alta retenção.', usageCount: '5.5k', format: '9:16', duration: '60s', accentColor: 'bg-violet-400', borderColor: 'border-violet-400/40', badgeColor: 'bg-violet-400/15 text-violet-200 border-violet-400/30' },
]

const NICHE_FILTERS = ['Todos', 'Motivação', 'Gospel', 'Humor', 'Vendas', 'Curiosidades', 'Educação', 'Negócios', 'Lifestyle', 'Storytelling', 'Infantil', 'Notícias']

export default function TemplatesPage() {
  const [activeNiche, setActiveNiche] = useState('Todos')

  const filtered = activeNiche === 'Todos'
    ? TEMPLATES
    : TEMPLATES.filter((t) => t.niche === activeNiche)

  return (
    <DashboardLayout>
      <div className="relative min-h-full bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative px-4 py-8 sm:px-6">

          {/* Header */}
          <div className="mb-6 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl btn-neon">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <span className="gradient-text-primary">Template Reactor</span>
              </h1>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Templates virais prontos para o seu nicho —{' '}
                <span className="text-neon-cyan font-medium">{TEMPLATES.length} templates disponíveis</span>
              </p>
            </div>
          </div>

          {/* Niche filter */}
          <div className="mb-6 overflow-x-auto pb-2">
            <div className="flex gap-2" style={{ width: 'max-content' }}>
              {NICHE_FILTERS.map((niche) => (
                <button
                  key={niche}
                  onClick={() => setActiveNiche(niche)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeNiche === niche
                      ? 'btn-neon text-white'
                      : 'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  {niche}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p className="mb-4 text-xs text-muted-foreground">
            <span className="font-bold text-foreground">{filtered.length}</span> templates encontrados
            {activeNiche !== 'Todos' && <span> em <span className="text-neon-purple">{activeNiche}</span></span>}
          </p>

          {/* Templates grid */}
          {filtered.length === 0 ? (
            <div className="card-glass rounded-2xl p-12 text-center">
              <Layers className="mx-auto mb-3 h-10 w-10 text-muted-foreground/40" />
              <p className="text-sm font-medium text-muted-foreground">
                Nenhum template neste nicho ainda
              </p>
              <p className="mt-1 text-xs text-muted-foreground/60">
                Em breve novos templates serão adicionados
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((template) => (
                <div
                  key={template.id}
                  className={`card-glass group rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40 ${template.borderColor}`}
                >
                  {/* Neon accent bar */}
                  <div className={`h-1 w-full ${template.accentColor}`} />

                  <div className="p-5">
                    {/* Niche badge */}
                    <div className="mb-3">
                      <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${template.badgeColor}`}>
                        {template.niche}
                      </span>
                    </div>

                    {/* Name + desc */}
                    <h3 className="mb-1.5 font-bold text-foreground">{template.name}</h3>
                    <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{template.desc}</p>

                    {/* Stats */}
                    <div className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>Criados com este template:</span>
                      <span className="font-bold text-foreground">{template.usageCount}</span>
                    </div>

                    {/* Tags */}
                    <div className="mb-4 flex gap-2">
                      <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                        {template.format}
                      </span>
                      <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                        {template.duration}
                      </span>
                    </div>

                    {/* CTA */}
                    <Link
                      to="/dashboard/create/theme"
                      className="btn-neon flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white transition-all"
                    >
                      Usar Template
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
