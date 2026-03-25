import { useState } from 'react'
import { Play, Pause } from 'lucide-react'

interface Voice {
  id: string
  name: string
  lang: string
  style: string
  desc: string
}

const VOICES: Voice[] = [
  { id: 'sofia', name: 'Sofia', lang: 'PT', style: 'Feminina Suave', desc: 'Voz calma e profissional' },
  { id: 'luna', name: 'Luna', lang: 'PT', style: 'Feminina Energética', desc: 'Perfeita para motivação' },
  { id: 'marcus', name: 'Marcus', lang: 'EN', style: 'Male Bold', desc: 'Strong and authoritative' },
  { id: 'elena', name: 'Elena', lang: 'ES', style: 'Emocional', desc: 'Cálida y expresiva' },
]

interface Props {
  selected: string
  onSelect: (id: string) => void
}

export default function VoicePicker({ selected, onSelect }: Props) {
  const [playing, setPlaying] = useState<string | null>(null)

  const togglePlay = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setPlaying(playing === id ? null : id)
  }

  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Narrador
      </p>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {VOICES.map((v) => (
          <button
            key={v.id}
            onClick={() => onSelect(v.id)}
            className={`card-glass shrink-0 w-40 rounded-xl p-3 text-left transition-all duration-200 ${
              selected === v.id
                ? 'border-primary/70 bg-primary/5 neon-glow-purple'
                : 'hover:border-primary/30'
            }`}
          >
            <div className="mb-2 flex items-center justify-between">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                style={{ background: 'linear-gradient(135deg, hsl(270 91% 65%), hsl(320 100% 58%))' }}
              >
                {v.name[0]}
              </div>
              <button
                onClick={(e) => togglePlay(v.id, e)}
                className={`flex h-6 w-6 items-center justify-center rounded-full transition-all ${
                  playing === v.id
                    ? 'bg-primary text-white'
                    : 'border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {playing === v.id ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              </button>
            </div>
            <p className={`text-xs font-bold ${selected === v.id ? 'text-neon-purple' : 'text-foreground'}`}>
              {v.name}
            </p>
            <p className="text-[10px] text-muted-foreground">{v.style}</p>
            <span className="mt-1 inline-block rounded-full border border-secondary/30 px-1.5 py-0.5 text-[9px] font-medium text-neon-cyan">
              {v.lang}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
