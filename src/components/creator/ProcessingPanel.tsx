import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'

const STEPS = [
  'Analisando roteiro...',
  'Gerando cenas...',
  'Sintetizando narração...',
  'Aplicando edição...',
  'Finalizando...',
]

interface Props {
  onComplete: () => void
}

export default function ProcessingPanel({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + 2
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        setStepIndex(Math.min(Math.floor((next / 100) * STEPS.length), STEPS.length - 1))
        return next
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="card-glass animate-fade-in rounded-2xl p-8 text-center">
      {/* Spinning icon */}
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl btn-neon">
        <Loader2 className="h-7 w-7 animate-spin text-white" />
      </div>

      <h3 className="mb-2 text-xl font-bold text-foreground">Criando seu vídeo...</h3>
      <p className="mb-8 text-sm text-muted-foreground">
        A IA está trabalhando na magia. Aguarde um momento.
      </p>

      {/* Progress bar */}
      <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, hsl(270 91% 65%), hsl(320 100% 58%))',
            boxShadow: '0 0 12px hsl(270 91% 65% / 0.5)',
          }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          {STEPS[stepIndex]}
        </span>
        <span className="font-bold text-neon-purple">{progress}%</span>
      </div>

      {/* Step list */}
      <div className="mt-6 space-y-2 text-left">
        {STEPS.map((step, i) => (
          <div
            key={step}
            className={`flex items-center gap-2 text-xs transition-all duration-300 ${
              i < stepIndex
                ? 'text-foreground'
                : i === stepIndex
                ? 'text-neon-purple'
                : 'text-muted-foreground/40'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                i < stepIndex ? 'bg-primary' : i === stepIndex ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'
              }`}
            />
            {step}
          </div>
        ))}
      </div>
    </div>
  )
}
