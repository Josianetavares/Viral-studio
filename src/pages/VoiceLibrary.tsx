import { useState } from 'react'
import { Mic2, Play, Pause } from 'lucide-react'
import DashboardLayout from '../components/layout/DashboardLayout'

interface Voice {
  id: string
  name: string
  initial: string
  lang: 'PT' | 'EN' | 'ES'
  styles: string[]
  desc: string
  color: string
}

const VOICES: Voice[] = [
  { id: 'sofia-pt', name: 'Sofia', initial: 'S', lang: 'PT', styles: ['Feminina', 'Suave'], desc: 'Voz calma, profissional e elegante. Ideal para conteúdo educativo.', color: 'from-violet-500 to-purple-600' },
  { id: 'luna-pt', name: 'Luna', initial: 'L', lang: 'PT', styles: ['Feminina', 'Energética'], desc: 'Dinâmica e motivacional. Perfeita para conteúdo de lifestyle.', color: 'from-pink-500 to-rose-600' },
  { id: 'ana-pt', name: 'Ana', initial: 'A', lang: 'PT', styles: ['Emocional', 'Feminina'], desc: 'Expressiva e emocional. Ótima para storytelling e testemunhos.', color: 'from-amber-500 to-orange-600' },
  { id: 'beatriz-pt', name: 'Beatriz', initial: 'B', lang: 'PT', styles: ['Feminina', 'Vendas'], desc: 'Persuasiva e confiante. Especializada em conteúdo de vendas.', color: 'from-emerald-500 to-teal-600' },
  { id: 'carlos-pt', name: 'Carlos', initial: 'C', lang: 'PT', styles: ['Masculina', 'Forte'], desc: 'Voz grave e autoritária. Transmite credibilidade e poder.', color: 'from-blue-500 to-indigo-600' },
  { id: 'rafael-pt', name: 'Rafael', initial: 'R', lang: 'PT', styles: ['Masculina', 'Storytelling'], desc: 'Narrativa cativante e envolvente para histórias longas.', color: 'from-cyan-500 to-sky-600' },
  { id: 'lucas-pt', name: 'Lucas', initial: 'L', lang: 'PT', styles: ['Masculina', 'Motivacional'], desc: 'Energético e inspirador. Ideal para conteúdo de motivação.', color: 'from-yellow-500 to-amber-600' },
  { id: 'maria-pt', name: 'Maria', initial: 'M', lang: 'PT', styles: ['Feminina', 'Viral'], desc: 'Otimizada para vídeos curtos e conteúdo viral nas redes.', color: 'from-fuchsia-500 to-purple-600' },
  { id: 'emma-en', name: 'Emma', initial: 'E', lang: 'EN', styles: ['Female', 'Smooth'], desc: 'Clear and professional. Perfect for educational content.', color: 'from-rose-400 to-pink-600' },
  { id: 'jake-en', name: 'Jake', initial: 'J', lang: 'EN', styles: ['Male', 'Bold'], desc: 'Deep and powerful voice for impactful content.', color: 'from-slate-500 to-gray-700' },
  { id: 'aria-en', name: 'Aria', initial: 'A', lang: 'EN', styles: ['Female', 'Dramatic'], desc: 'Dramatic and expressive. Great for storytelling content.', color: 'from-red-500 to-rose-700' },
  { id: 'alex-en', name: 'Alex', initial: 'A', lang: 'EN', styles: ['Energetic', 'Neutral'], desc: 'High energy voice, perfect for fast-paced content.', color: 'from-orange-500 to-red-600' },
  { id: 'sofia-es', name: 'Sofia', initial: 'S', lang: 'ES', styles: ['Femenina', 'Suave'], desc: 'Voz cálida y natural. Perfecta para contenido emotivo.', color: 'from-teal-500 to-cyan-600' },
  { id: 'diego-es', name: 'Diego', initial: 'D', lang: 'ES', styles: ['Masculino', 'Fuerte'], desc: 'Potente y carismático. Ideal para ventas y motivación.', color: 'from-indigo-500 to-blue-700' },
  { id: 'isabella-es', name: 'Isabella', initial: 'I', lang: 'ES', styles: ['Femenina', 'Emocional'], desc: 'Expresiva y dramática. Especializada en storytelling.', color: 'from-violet-400 to-fuchsia-600' },
]

const LANG_FILTERS = ['Todos', 'PT', 'EN', 'ES']
const STYLE_FILTERS = ['Todos', 'Feminina', 'Masculina', 'Motivacional', 'Dramática', 'Suave']

const SPEEDS = ['0.75x', '1x', '1.25x', '1.5x']

function AudioWaveform() {
  const heights = [3, 6, 10, 14, 10, 7, 12, 16, 10, 6, 9, 14, 8, 5, 11]
  return (
    <div className="flex items-end gap-0.5">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-primary"
          style={{
            height: `${h}px`,
            animation: `waveBar 0.8s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function VoiceLibrary() {
  const [langFilter, setLangFilter] = useState('Todos')
  const [styleFilter, setStyleFilter] = useState('Todos')
  const [playing, setPlaying] = useState<string | null>(null)
  const [speeds, setSpeeds] = useState<Record<string, string>>({})

  const filtered = VOICES.filter((v) => {
    const langMatch = langFilter === 'Todos' || v.lang === langFilter
    const styleMatch =
      styleFilter === 'Todos' ||
      v.styles.some((s) => s.toLowerCase().includes(styleFilter.toLowerCase()))
    return langMatch && styleMatch
  })

  const togglePlay = (id: string) => {
    setPlaying(playing === id ? null : id)
  }

  const setSpeed = (id: string, speed: string) => {
    setSpeeds((prev) => ({ ...prev, [id]: speed }))
  }

  return (
    <DashboardLayout>
      <style>{`
        @keyframes waveBar {
          from { transform: scaleY(0.4); }
          to { transform: scaleY(1); }
        }
      `}</style>

      <div className="relative min-h-full bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative px-4 py-8 sm:px-6">

          {/* Header */}
          <div className="mb-6 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl btn-neon">
              <Mic2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <span className="gradient-text-primary">Biblioteca de Vozes</span>
              </h1>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {VOICES.length} narradores disponíveis em 3 idiomas — ouça uma prévia antes de usar
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-4">
            {/* Language */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">Idioma:</span>
              <div className="flex gap-1.5">
                {LANG_FILTERS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLangFilter(l)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      langFilter === l
                        ? 'btn-neon text-white'
                        : 'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">Estilo:</span>
              <div className="flex flex-wrap gap-1.5">
                {STYLE_FILTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStyleFilter(s)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      styleFilter === s
                        ? 'border border-secondary/60 bg-secondary/15 text-neon-cyan'
                        : 'border border-border text-muted-foreground hover:border-secondary/30 hover:text-foreground'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Count */}
          <p className="mb-4 text-xs text-muted-foreground">
            Mostrando <span className="font-bold text-foreground">{filtered.length}</span> vozes
          </p>

          {/* Voice grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((voice) => {
              const isPlaying = playing === voice.id
              const speed = speeds[voice.id] || '1x'

              return (
                <div
                  key={voice.id}
                  className={`card-glass rounded-2xl p-5 transition-all duration-300 ${
                    isPlaying ? 'neon-glow-purple border-primary/60' : 'hover:border-primary/30'
                  }`}
                >
                  {/* Top row */}
                  <div className="mb-3 flex items-start gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${voice.color} text-sm font-bold text-white shadow-lg`}
                    >
                      {voice.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-foreground">{voice.name}</h3>
                        <span className="rounded-full border border-secondary/40 bg-secondary/10 px-1.5 py-0.5 text-[9px] font-bold text-neon-cyan">
                          {voice.lang}
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {voice.styles.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-primary/25 bg-primary/8 px-1.5 py-0.5 text-[9px] font-medium text-neon-purple"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{voice.desc}</p>

                  {/* Waveform (when playing) */}
                  {isPlaying && (
                    <div className="mb-3 flex h-5 items-end">
                      <AudioWaveform />
                    </div>
                  )}

                  {/* Controls */}
                  <div className="flex items-center gap-2">
                    {/* Play/Pause */}
                    <button
                      onClick={() => togglePlay(voice.id)}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                        isPlaying
                          ? 'btn-neon text-white neon-glow-purple'
                          : 'border border-primary/40 text-neon-purple hover:bg-primary/10'
                      }`}
                    >
                      {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    </button>

                    {/* Speed */}
                    <div className="flex gap-1">
                      {SPEEDS.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSpeed(voice.id, s)}
                          className={`rounded px-1.5 py-0.5 text-[9px] font-medium transition-all ${
                            speed === s
                              ? 'bg-primary/20 text-neon-purple'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>

                    {/* Use button */}
                    <button className="btn-neon-outline ml-auto rounded-lg px-3 py-1 text-xs font-semibold">
                      Usar
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
