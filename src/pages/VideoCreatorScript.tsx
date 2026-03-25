import { useState, useCallback } from 'react'
import { Link } from '@tanstack/react-router'
import { FileText, Palette, Sparkles, Lightbulb, ChevronRight, Globe } from 'lucide-react'
import DashboardLayout from '../components/layout/DashboardLayout'
import StepIndicator from '../components/creator/StepIndicator'
import FormatSelector from '../components/creator/FormatSelector'
import DurationSelector from '../components/creator/DurationSelector'
import VisualStyleSelector from '../components/creator/VisualStyleSelector'
import VoicePicker from '../components/creator/VoicePicker'
import MusicSelector from '../components/creator/MusicSelector'
import ProcessingPanel from '../components/creator/ProcessingPanel'
import ResultPanel from '../components/creator/ResultPanel'

const LANGUAGES = ['Português', 'English', 'Español']
const STEPS_LABELS = ['Roteiro', 'Configurações', 'Gerar']

const SAMPLE_HOOK =
  '"Você sabia que 95% das pessoas nunca alcançam seus objetivos por causa de 1 hábito invisível? Hoje eu vou te mostrar como mudar isso em 30 dias..."'

export default function VideoCreatorScript() {
  const [step, setStep] = useState(1)
  const [script, setScript] = useState('')
  const [showHook, setShowHook] = useState(false)
  const [format, setFormat] = useState('9:16')
  const [duration, setDuration] = useState('60s')
  const [language, setLanguage] = useState('Português')
  const [visualStyle, setVisualStyle] = useState('dinamico')
  const [energy, setEnergy] = useState(3)
  const [voice, setVoice] = useState('sofia')
  const [music, setMusic] = useState('motivacional')
  const [processing, setProcessing] = useState(false)
  const [done, setDone] = useState(false)

  const wordCount = script.trim() ? script.trim().split(/\s+/).length : 0

  const handleGenerate = () => {
    setProcessing(true)
  }

  const handleProcessingComplete = useCallback(() => {
    setProcessing(false)
    setDone(true)
  }, [])

  const handleReset = () => {
    setStep(1)
    setScript('')
    setProcessing(false)
    setDone(false)
  }

  return (
    <DashboardLayout>
      <div className="relative min-h-full bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 py-8">

          {/* Breadcrumb */}
          <div className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>Dashboard</span>
            <ChevronRight className="h-3 w-3" />
            <span>Criar</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neon-purple">Por Roteiro</span>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">
              <span className="gradient-text-primary">Script to Video</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Transforme seu roteiro em um vídeo viral profissional com IA
            </p>
          </div>

          {/* Mode selector tabs */}
          <div className="mb-6 flex gap-1 rounded-xl border border-border bg-muted/30 p-1">
            <button className="flex items-center gap-1.5 rounded-lg bg-primary/15 px-4 py-2 text-sm font-semibold text-neon-purple">
              <FileText className="h-3.5 w-3.5" />
              Por Roteiro
            </button>
            <Link
              to="/dashboard/create/theme"
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Por Tema
            </Link>
            <Link
              to="/dashboard/analyzer"
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Palette className="h-3.5 w-3.5" />
              Por Referência
            </Link>
          </div>

          {/* Step indicator */}
          {!processing && !done && (
            <div className="mb-8 flex justify-center">
              <StepIndicator currentStep={step} steps={STEPS_LABELS} />
            </div>
          )}

          {/* Processing state */}
          {processing && <ProcessingPanel onComplete={handleProcessingComplete} />}

          {/* Result state */}
          {done && <ResultPanel onNew={handleReset} />}

          {/* Step 1 */}
          {!processing && !done && step === 1 && (
            <div className="animate-fade-in space-y-4">
              <div className="card-glass rounded-2xl p-6">
                <div className="mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-neon-purple" />
                  <h2 className="text-sm font-semibold text-foreground">Seu Roteiro</h2>
                </div>
                <textarea
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  placeholder="Cole seu roteiro aqui... Escreva o conteúdo que será narrado no vídeo."
                  className="min-h-[200px] w-full resize-none rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary/60 focus:bg-muted/50 focus:shadow-[0_0_0_3px_hsl(270_91%_65%/0.12)]"
                />
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{wordCount} palavras</span>
                  <span className={wordCount > 300 ? 'text-neon-pink' : ''}>
                    {wordCount > 300 ? 'Roteiro longo — considere resumir' : 'Ideal: 50–300 palavras'}
                  </span>
                </div>
              </div>

              {/* Hook suggestion */}
              <button
                onClick={() => setShowHook(!showHook)}
                className="flex items-center gap-2 text-xs font-medium text-neon-cyan transition-colors hover:text-secondary/80"
              >
                <Lightbulb className="h-3.5 w-3.5" />
                {showHook ? 'Ocultar' : 'Ver'} Sugestão de Gancho Viral
              </button>

              {showHook && (
                <div className="animate-fade-in card-glass-cyan rounded-xl p-4">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-neon-cyan">
                    Gancho Sugerido
                  </p>
                  <p className="text-sm italic leading-relaxed text-foreground/80">{SAMPLE_HOOK}</p>
                  <button
                    onClick={() => setScript(SAMPLE_HOOK)}
                    className="mt-3 rounded-lg border border-secondary/30 px-3 py-1 text-xs font-medium text-neon-cyan transition-all hover:bg-secondary/10"
                  >
                    Usar este gancho
                  </button>
                </div>
              )}

              <button
                onClick={() => setStep(2)}
                disabled={!script.trim()}
                className="btn-neon flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:px-8"
              >
                Próximo
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Step 2 */}
          {!processing && !done && step === 2 && (
            <div className="animate-fade-in space-y-6">
              <div className="card-glass rounded-2xl p-6 space-y-6">
                <FormatSelector selected={format} onSelect={setFormat} />
                <DurationSelector selected={duration} onSelect={setDuration} />

                {/* Language */}
                <div>
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
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

                <VisualStyleSelector selected={visualStyle} onSelect={setVisualStyle} />

                {/* Energy slider */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Nível de Energia
                  </p>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min={1}
                      max={5}
                      value={energy}
                      onChange={(e) => setEnergy(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                      <span>Suave</span>
                      <span>Moderado</span>
                      <span>Alto</span>
                      <span>Intenso</span>
                      <span>Explosivo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
                >
                  Voltar
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="btn-neon flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-white"
                >
                  Próximo
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {!processing && !done && step === 3 && (
            <div className="animate-fade-in space-y-6">
              {/* Summary */}
              <div className="card-glass-cyan rounded-2xl p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neon-cyan">
                  Resumo do Projeto
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { label: 'Formato', value: format },
                    { label: 'Duração', value: duration },
                    { label: 'Idioma', value: language },
                    { label: 'Estilo', value: visualStyle },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-lg bg-muted/30 p-2.5">
                      <p className="text-[10px] text-muted-foreground">{label}</p>
                      <p className="mt-0.5 text-xs font-bold text-foreground capitalize">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-glass rounded-2xl p-6 space-y-6">
                <VoicePicker selected={voice} onSelect={setVoice} />
                <MusicSelector selected={music} onSelect={setMusic} />
              </div>

              {/* Generate button */}
              <div className="space-y-3">
                <button
                  onClick={handleGenerate}
                  className="btn-neon w-full rounded-xl py-4 text-base font-bold text-white sm:py-3 sm:text-sm"
                >
                  <Sparkles className="mr-2 inline-block h-4 w-4" />
                  Gerar Vídeo Agora
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Este vídeo usará{' '}
                  <span className="font-bold text-neon-cyan">5 créditos</span>
                </p>
              </div>

              <button
                onClick={() => setStep(2)}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                ← Voltar às configurações
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
