import { useState, useCallback } from 'react'
import { Link } from '@tanstack/react-router'
import {
  Sparkles,
  FileText,
  Palette,
  Globe,
  Zap,
  Settings2,
} from 'lucide-react'
import DashboardLayout from '../components/layout/DashboardLayout'
import FormatSelector from '../components/creator/FormatSelector'
import DurationSelector from '../components/creator/DurationSelector'
import VisualStyleSelector from '../components/creator/VisualStyleSelector'
import VoicePicker from '../components/creator/VoicePicker'
import MusicSelector from '../components/creator/MusicSelector'
import ProcessingPanel from '../components/creator/ProcessingPanel'
import ResultPanel from '../components/creator/ResultPanel'

const NICHES = [
  'Motivação', 'Gospel', 'Humor', 'Vendas', 'Curiosidades',
  'Educação', 'Negócios', 'Lifestyle', 'Storytelling', 'Infantil',
]
const LANGUAGES = ['Português', 'English', 'Español']
const HOOK_STYLES = ['Pergunta', 'Dado Surpreendente', 'Afirmação Forte', 'Situação Identificável']

export default function VideoCreatorTheme() {
  const [theme, setTheme] = useState('')
  const [format, setFormat] = useState('9:16')
  const [duration, setDuration] = useState('60s')
  const [language, setLanguage] = useState('Português')
  const [proMode, setProMode] = useState(false)
  const [visualStyle, setVisualStyle] = useState('dinamico')
  const [voice, setVoice] = useState('sofia')
  const [music, setMusic] = useState('motivacional')
  const [energy, setEnergy] = useState(3)
  const [hookStyle, setHookStyle] = useState('Pergunta')
  const [processing, setProcessing] = useState(false)
  const [done, setDone] = useState(false)

  const handleGenerate = () => {
    if (!theme.trim()) return
    setProcessing(true)
  }

  const handleProcessingComplete = useCallback(() => {
    setProcessing(false)
    setDone(true)
  }, [])

  const handleReset = () => {
    setTheme('')
    setProcessing(false)
    setDone(false)
  }

  return (
    <DashboardLayout>
      <div className="relative min-h-full bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 py-8">

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold">
              <span className="gradient-text-cyber">Criador por Tema</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Digite uma ideia e a IA cria o roteiro + vídeo completo
            </p>
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
            <button className="flex items-center gap-1.5 rounded-lg bg-primary/15 px-4 py-2 text-sm font-semibold text-neon-purple">
              <Sparkles className="h-3.5 w-3.5" />
              Por Tema
            </button>
            <Link
              to="/dashboard/analyzer"
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Palette className="h-3.5 w-3.5" />
              Por Referência
            </Link>
          </div>

          {/* Processing */}
          {processing && <ProcessingPanel onComplete={handleProcessingComplete} />}

          {/* Result */}
          {done && <ResultPanel onNew={handleReset} />}

          {/* Main form */}
          {!processing && !done && (
            <div className="animate-fade-in space-y-6">
              {/* Theme input */}
              <div className="card-glass rounded-2xl p-6">
                <h2 className="mb-4 text-lg font-bold text-foreground">
                  O que você quer criar hoje?
                </h2>
                <input
                  type="text"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  placeholder="Digite um tema, produto ou ideia..."
                  className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary/60 focus:shadow-[0_0_0_3px_hsl(270_91%_65%/0.12)]"
                />

                {/* Niche pills */}
                <div className="mt-4">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Nichos Populares
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {NICHES.map((niche) => (
                      <button
                        key={niche}
                        onClick={() => setTheme(niche)}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 ${
                          theme === niche
                            ? 'border-primary/60 bg-primary/15 text-neon-purple'
                            : 'border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                        }`}
                      >
                        {niche}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Language */}
              <div className="card-glass rounded-2xl p-5">
                <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <Globe className="h-3 w-3" />
                  Idioma
                </p>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                        language === lang
                          ? 'btn-neon text-white'
                          : 'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format + Duration */}
              <div className="card-glass rounded-2xl p-5 space-y-5">
                <FormatSelector selected={format} onSelect={setFormat} />
                <DurationSelector selected={duration} onSelect={setDuration} />
              </div>

              {/* Mode toggle */}
              <div className="card-glass rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {proMode ? (
                      <Settings2 className="h-4 w-4 text-neon-purple" />
                    ) : (
                      <Zap className="h-4 w-4 text-neon-cyan" />
                    )}
                    <span className="text-sm font-semibold text-foreground">
                      {proMode ? 'Modo Profissional' : 'Modo Rápido'}
                    </span>
                  </div>
                  <button
                    onClick={() => setProMode(!proMode)}
                    className={`relative h-6 w-11 rounded-full transition-all duration-300 ${
                      proMode ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-300 ${
                        proMode ? 'left-5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {proMode
                    ? 'Controle total: estilo visual, narrador, música e gancho'
                    : 'Geração rápida com configurações otimizadas pela IA'}
                </p>
              </div>

              {/* Pro mode extras */}
              {proMode && (
                <div className="animate-fade-in card-glass rounded-2xl p-5 space-y-6">
                  <VisualStyleSelector selected={visualStyle} onSelect={setVisualStyle} />

                  {/* Energy */}
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Nível de Energia
                    </p>
                    <input
                      type="range"
                      min={1}
                      max={5}
                      value={energy}
                      onChange={(e) => setEnergy(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                      <span>Suave</span>
                      <span>Moderado</span>
                      <span>Alto</span>
                      <span>Intenso</span>
                      <span>Explosivo</span>
                    </div>
                  </div>

                  {/* Hook style */}
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Estilo de Gancho
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {HOOK_STYLES.map((hs) => (
                        <button
                          key={hs}
                          onClick={() => setHookStyle(hs)}
                          className={`rounded-xl px-3 py-2 text-xs font-medium transition-all ${
                            hookStyle === hs
                              ? 'border border-primary/60 bg-primary/15 text-neon-purple'
                              : 'border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                          }`}
                        >
                          {hs}
                        </button>
                      ))}
                    </div>
                  </div>

                  <VoicePicker selected={voice} onSelect={setVoice} />
                  <MusicSelector selected={music} onSelect={setMusic} />
                </div>
              )}

              {/* Generate */}
              <div className="space-y-3">
                <button
                  onClick={handleGenerate}
                  disabled={!theme.trim()}
                  className="btn-neon w-full rounded-xl py-4 text-base font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Sparkles className="mr-2 inline-block h-4 w-4" />
                  Gerar Vídeo com IA
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Usará <span className="font-bold text-neon-cyan">5 créditos</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
