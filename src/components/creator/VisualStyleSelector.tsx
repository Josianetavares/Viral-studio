import { Zap, Film, Minus, Flame } from 'lucide-react'

const STYLES = [
  { id: 'dinamico', label: 'Dinâmico', desc: 'Cortes rápidos e energia', icon: Zap, color: 'text-neon-purple' },
  { id: 'cinematografico', label: 'Cinematográfico', desc: 'Cinematic e épico', icon: Film, color: 'text-neon-cyan' },
  { id: 'minimalista', label: 'Minimalista', desc: 'Clean e sofisticado', icon: Minus, color: 'text-foreground' },
  { id: 'dramatico', label: 'Dramático', desc: 'Intenso e emocional', icon: Flame, color: 'text-neon-pink' },
]

interface Props {
  selected: string
  onSelect: (id: string) => void
}

export default function VisualStyleSelector({ selected, onSelect }: Props) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Estilo Visual
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {STYLES.map(({ id, label, desc, icon: Icon, color }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`card-glass flex flex-col items-start gap-2 rounded-xl p-3 text-left transition-all duration-200 ${
              selected === id
                ? 'border-primary/70 bg-primary/5 neon-glow-purple'
                : 'hover:border-primary/30'
            }`}
          >
            <Icon className={`h-5 w-5 ${selected === id ? 'text-neon-purple' : color}`} />
            <div>
              <p className={`text-xs font-bold ${selected === id ? 'text-neon-purple' : 'text-foreground'}`}>
                {label}
              </p>
              <p className="text-[10px] text-muted-foreground">{desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
