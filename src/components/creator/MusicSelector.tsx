import { Music, Music2, Wind, VolumeX } from 'lucide-react'

const MUSIC_STYLES = [
  { id: 'motivacional', label: 'Motivacional', icon: Music },
  { id: 'dramatica', label: 'Dramática', icon: Music2 },
  { id: 'suave', label: 'Suave', icon: Wind },
  { id: 'sem', label: 'Sem Música', icon: VolumeX },
]

interface Props {
  selected: string
  onSelect: (id: string) => void
}

export default function MusicSelector({ selected, onSelect }: Props) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Música de Fundo
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {MUSIC_STYLES.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`card-glass flex items-center gap-2 rounded-xl p-3 text-sm font-medium transition-all duration-200 ${
              selected === id
                ? 'border-primary/70 bg-primary/5 text-neon-purple neon-glow-purple'
                : 'text-muted-foreground hover:border-primary/30 hover:text-foreground'
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
