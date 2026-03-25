import { useState, useCallback } from 'react'
import { Link } from '@tanstack/react-router'
import {
  Search,
  Link2,
  AlertTriangle,
  ChevronRight,
  TrendingUp,
  Sparkles,
  FileText,
  Palette,
  Globe,
  Zap,
  Clock,
  MessageSquare,
  Mic,
  Share2,
  Heart,
} from 'lucide-react'
import DashboardLayout from '../components/layout/DashboardLayout'
import FormatSelector from '../components/creator/FormatSelector'
import ProcessingPanel from '../components/creator/ProcessingPanel'
import ResultPanel from '../components/creator/ResultPanel'

const ANALYSIS_CHIPS = [
  { icon: Zap, label: 'Gancho Inicial', value: 'Pergunta impactante nos primeiros 2s', color: 'text-neon-purple' },
  { icon: Clock, label: 'Duração Média de Cena', value: '3.2 segundos', color: 'text-neon-cyan' },
  { icon: TrendingUp, label: 'Ritmo', value: 'Alto — cortes rápidos', color: 'text-neon-pink' },
  { icon: MessageSquare, label: 'Estilo de Legenda', value: 'Dinâmica com destaque colorido', color: 'text-neon-purple' },
  { icon: Mic, label: 'Tom da Narração', value: 'Motivacional e energético', color: 'text-neon-cyan' },
  { icon: Share2, label: 'CTA', value: 'Salvar + Compartilhar', color: 'text-neon-pink' },
  { icon: Heart, label: 'Emoção Transmitida', value: 'Inspiração + Urgência', color: 'text-neon-purple' },
  { icon: Sparkles, label: 'Elementos Virais', value: 'Música trending, transições rápidas, texto grande', color: 'text-neon-cyan' },
]

const STRATEGY_INSIGHTS = [
  {
    title: 'Força do Gancho',
    desc: 'O vídeo abre com uma pergunta que cria curiosidade imediata, forçando o usuário a continuar assistindo para descobrir a resposta.',
    score: 92,
    color: 'border-primary/50 bg-primary/5',
    badge: 'text-neon-purple',
  },
  {
    title: 'Ritmo de Edição',
    desc: 'Cortes a cada 2–4 segundos mantêm a atenção do espectador. Transições rápidas combinam com músicas trending da plataforma.',
    score: 88,
    color: 'border-secondary/50 bg-secondary/5',
    badge: 'text-neon-cyan',
  },
  {
    title: 'Posicionamento do CTA',
    desc: 'O call-to-action aparece nos últimos 3 segundos com texto grande e legível, maximizando saves e compartilhamentos.',
    score: 85,
    color: 'border-accent/50 bg-accent/5',
    badge: 'text-neon-pink',
  },
]

function detectPlatform(url: string): string | null {
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'YouTube'
  if (url.includes('tiktok.com')) return 'TikTok'
  if (url.includes('instagram.com')) return 'Instagram'
  return null
}

export default function ReferenceAnalyzer() {
  const [url, setUrl] = useState('')
  const [analyzed, setAnalyzed] = useState(false)
  const [format, setFormat] = useState('9:16')
  const [language, setLanguage] = useState('Português')
  const [generating, setGenerating] = useState(false)
  const [done, setDone] = useState(false)
  const [theme, setTheme] = useState('Hábitos que transformam resultados')

  const platform = detectPlatform(url)

  const handleAnalyze = () => {
    if (!url.trim()) return
    setAnalyzed(true)
  }

  const handleGenerate = () => {
    setGenerating(true)
  }

  const handleGeneratingComplete = useCallback(() => {
    setGenerating(false)
    setDone(true)
  }, [])

  const handleReset = () => {
    setUrl('')
    setAnalyzed(false)
    setGenerating(false)
    setDone(false)
  }

  return (
    <DashboardLayout>
      <div className="relative min-h-full bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 py-8">

          {/* Header */}
          <div className="mb-6 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl btn-neon">
              <Search className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <span className="gradient-text-cyber">Reference Analyzer</span>
              </h1>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Analise estratégias virais e crie versões originais melhoradas
              </p>
            </div>
          </div>

          {/* Mode tabs */}
          <div className="mb-6 flex gap-1 rounded-xl border border-border bg-muted/30 p-1">
            <Link
              to="/dashboard/create/script"
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <FileText className="h-3.5 w-3.5" />
              Por Roteiro
            </Link>
            <Link
              to="/dashboard/create/theme"
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Por Tema
            </Link>
            <button className="flex items-center gap-1.5 rounded-lg bg-primary/15 px-4 py-2 text-sm font-semibold text-neon-purple">
              <Palette className="h-3.5 w-3.5" />
              Por Referência
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/8 px-4 py-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <p className="text-xs leading-relaxed text-amber-300/90">
              <span className="font-bold text-amber-400">Aviso importante:</span> Este sistema analisa APENAS a estrutura estratégica do vídeo.
              Nenhum conteúdo original é copiado ou reproduzido. A IA cria conteúdo 100% original inspirado nas estratégias identificadas.
            </p>
          </div>

          {/* Processing */}
          {generating && <ProcessingPanel onComplete={handleGeneratingComplete} />}

          {/* Result */}
          {done && <ResultPanel onNew={handleReset} />}

          {!generating && !done && (
            <div className="animate-fade-in space-y-6">
              {/* URL input */}
              <div className="card-glass rounded-2xl p-6">
                <label className="mb-3 block text-sm font-semibold text-foreground">
                  Cole o link do vídeo público:
                </label>
                <div className="relative">
                  <Link2 className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full rounded-xl border border-border bg-muted/30 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary/60 focus:shadow-[0_0_0_3px_hsl(270_91%_65%/0.12)]"
                  />
                </div>

                {/* Platform badge */}
                {url && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Plataforma detectada:</span>
                    {platform ? (
                      <span className="rounded-full border border-secondary/40 bg-secondary/10 px-2.5 py-0.5 text-xs font-bold text-neon-cyan">
                        {platform}
                      </span>
                    ) : (
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                        Não identificado
                      </span>
                    )}
                  </div>
                )}

                <button
                  onClick={handleAnalyze}
                  disabled={!url.trim()}
                  className="btn-neon mt-4 flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Search className="h-4 w-4" />
                  Analisar Vídeo
                </button>
              </div>

              {/* Analysis result */}
              {analyzed && (
                <div className="animate-fade-in space-y-5">
                  {/* Analysis report */}
                  <div className="card-glass-cyan rounded-2xl p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-neon-cyan" />
                      <h2 className="text-sm font-bold text-foreground">Relatório de Análise Inteligente</h2>
                    </div>

                    <div className="mb-5 grid gap-3 sm:grid-cols-2">
                      {ANALYSIS_CHIPS.map(({ icon: Icon, label, value, color }) => (
                        <div key={label} className="rounded-xl bg-muted/30 p-3">
                          <div className="mb-1 flex items-center gap-1.5">
                            <Icon className={`h-3.5 w-3.5 ${color}`} />
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                              {label}
                            </p>
                          </div>
                          <p className="text-xs font-medium text-foreground">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Viral score */}
                    <div className="rounded-xl bg-muted/30 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="text-sm font-bold text-foreground">Potencial Viral</p>
                        <span className="text-lg font-bold text-emerald-400">87/100</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: '87%',
                            background: 'linear-gradient(90deg, hsl(142 70% 45%), hsl(142 70% 60%))',
                            boxShadow: '0 0 10px hsl(142 70% 50% / 0.5)',
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Strategy insights */}
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      O que torna este vídeo viral
                    </p>
                    <div className="space-y-3">
                      {STRATEGY_INSIGHTS.map((insight) => (
                        <div key={insight.title} className={`rounded-xl border p-4 ${insight.color}`}>
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className={`text-sm font-bold ${insight.badge}`}>{insight.title}</h3>
                              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                {insight.desc}
                              </p>
                            </div>
                            <div className="flex shrink-0 items-center gap-1">
                              <TrendingUp className={`h-3 w-3 ${insight.badge}`} />
                              <span className={`text-xs font-bold ${insight.badge}`}>{insight.score}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Generate original */}
                  <div className="card-glass rounded-2xl p-6">
                    <div className="mb-1 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-neon-pink" />
                      <h2 className="text-sm font-bold text-foreground">Criar Versão Original Inspirada</h2>
                    </div>
                    <p className="mb-4 text-xs text-muted-foreground">
                      Gere um novo vídeo com a mesma estratégia, sem copiar o conteúdo
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                          Tema do seu vídeo
                        </label>
                        <input
                          type="text"
                          value={theme}
                          onChange={(e) => setTheme(e.target.value)}
                          className="w-full rounded-xl border border-border bg-muted/30 px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary/60 focus:shadow-[0_0_0_3px_hsl(270_91%_65%/0.12)]"
                        />
                      </div>

                      {/* Language */}
                      <div>
                        <p className="mb-2 flex items-center gap-1 text-xs font-medium text-muted-foreground">
                          <Globe className="h-3 w-3" />
                          Idioma
                        </p>
                        <div className="flex gap-2">
                          {['Português', 'English', 'Español'].map((l) => (
                            <button
                              key={l}
                              onClick={() => setLanguage(l)}
                              className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                                language === l
                                  ? 'btn-neon text-white'
                                  : 'border border-border text-muted-foreground hover:border-primary/40'
                              }`}
                            >
                              {l}
                            </button>
                          ))}
                        </div>
                      </div>

                      <FormatSelector selected={format} onSelect={setFormat} />

                      <button
                        onClick={handleGenerate}
                        className="w-full rounded-xl py-3.5 text-sm font-bold text-white transition-all"
                        style={{
                          background: 'linear-gradient(135deg, hsl(320 100% 58%), hsl(270 91% 65%))',
                          boxShadow: '0 0 25px hsl(320 100% 58% / 0.4)',
                        }}
                      >
                        <Sparkles className="mr-2 inline-block h-4 w-4" />
                        Criar Vídeo Original
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
