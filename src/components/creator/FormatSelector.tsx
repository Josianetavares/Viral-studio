interface Format {
  id: string
  label: string
  sublabel: string
  widthClass: string
  heightClass: string
}

const FORMATS: Format[] = [
  { id: '9:16', label: '9:16', sublabel: 'TikTok / Reels', widthClass: 'w-8', heightClass: 'h-14' },
  { id: '16:9', label: '16:9', sublabel: 'YouTube', widthClass: 'w-14', heightClass: 'h-8' },
  { id: '1:1', label: '1:1', sublabel: 'Instagram', widthClass: 'w-10', heightClass: 'h-10' },
  { id: '4:5', label: '4:5', sublabel: 'Feed', widthClass: 'w-9', heightClass: 'h-[2.8rem]' },
]

interface Props {
  selected: string
  onSelect: (id: string) => void
}

export default function FormatSelector({ selected, onSelect }: Props) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Formato
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {FORMATS.map((f) => (
          <button
            key={f.id}
            onClick={() => onSelect(f.id)}
            className={`card-glass flex flex-col items-center gap-2 rounded-xl p-3 transition-all duration-200 ${
              selected === f.id
                ? 'border-primary/70 neon-glow-purple bg-primary/5'
                : 'hover:border-primary/30'
            }`}
          >
            <div
              className={`${f.widthClass} ${f.heightClass} rounded border-2 ${
                selected === f.id ? 'border-primary bg-primary/20' : 'border-muted-foreground/30 bg-muted/20'
              } transition-all duration-200`}
            />
            <div className="text-center">
              <p className={`text-xs font-bold ${selected === f.id ? 'text-neon-purple' : 'text-foreground'}`}>
                {f.label}
              </p>
              <p className="text-[10px] text-muted-foreground">{f.sublabel}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export { FORMATS }
