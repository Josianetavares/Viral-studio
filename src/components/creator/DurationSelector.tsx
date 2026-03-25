const DURATIONS = ['15s', '30s', '45s', '60s', '90s', '2min', 'Personalizado']

interface Props {
  selected: string
  onSelect: (d: string) => void
}

export default function DurationSelector({ selected, onSelect }: Props) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Duração
      </p>
      <div className="flex flex-wrap gap-2">
        {DURATIONS.map((d) => (
          <button
            key={d}
            onClick={() => onSelect(d)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              selected === d
                ? 'btn-neon text-white'
                : 'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
            }`}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  )
}

export { DURATIONS }
