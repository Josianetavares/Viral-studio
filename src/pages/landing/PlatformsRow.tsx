const platforms = [
  'TikTok',
  'Instagram',
  'YouTube',
  'Kwai',
  'Facebook',
  'Pinterest',
  'Reels',
  'Shorts',
  'TikTok',
  'Instagram',
  'YouTube',
  'Kwai',
  'Facebook',
  'Pinterest',
  'Reels',
  'Shorts',
]

const platformColors: Record<string, string> = {
  TikTok: 'text-neon-cyan',
  Instagram: 'text-neon-pink',
  YouTube: 'text-red-400',
  Kwai: 'text-yellow-400',
  Facebook: 'text-blue-400',
  Pinterest: 'text-red-500',
  Reels: 'text-neon-pink',
  Shorts: 'text-red-400',
}

export default function PlatformsRow() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-muted/30 py-6">
      <div className="mb-3 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Publique em todas as plataformas
        </p>
      </div>

      {/* Marquee track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-12 whitespace-nowrap">
          {platforms.map((name, i) => (
            <div
              key={`a-${i}`}
              className="flex items-center gap-2"
            >
              <span
                className={`text-lg font-bold tracking-tight ${platformColors[name] ?? 'text-muted-foreground'}`}
              >
                {name}
              </span>
              <span className="text-muted-foreground/30">·</span>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="animate-marquee flex shrink-0 items-center gap-12 whitespace-nowrap" aria-hidden="true">
          {platforms.map((name, i) => (
            <div
              key={`b-${i}`}
              className="flex items-center gap-2"
            >
              <span
                className={`text-lg font-bold tracking-tight ${platformColors[name] ?? 'text-muted-foreground'}`}
              >
                {name}
              </span>
              <span className="text-muted-foreground/30">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
