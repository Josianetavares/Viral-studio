import { Play, Download, Edit, Plus, Hash, MessageSquare, Share2 } from 'lucide-react'

interface Props {
  onNew: () => void
}

export default function ResultPanel({ onNew }: Props) {
  return (
    <div className="animate-fade-in space-y-6">
      {/* Success banner */}
      <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-sm font-medium text-emerald-400">Vídeo gerado com sucesso!</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Video player mock */}
        <div className="mx-auto w-full max-w-[220px]">
          <div
            className="relative overflow-hidden rounded-2xl neon-glow-purple"
            style={{ paddingBottom: '177.7%' }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(160deg, hsl(270 91% 15%), hsl(222 47% 8%), hsl(320 100% 12%))',
              }}
            />
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all hover:bg-white/20 neon-glow-purple">
                <Play className="h-6 w-6 fill-white text-white" />
              </button>
            </div>
            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-xs font-medium text-white/80">5 Hábitos que Mudaram Minha Vida</p>
              <div className="mt-1.5 h-0.5 w-full rounded-full bg-white/20">
                <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="space-y-4">
          {/* Title */}
          <div className="card-glass rounded-xl p-4">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Título</p>
            <p className="text-sm font-bold text-foreground">5 Hábitos que Mudaram Minha Vida</p>
          </div>

          {/* Caption */}
          <div className="card-glass rounded-xl p-4">
            <div className="mb-1 flex items-center gap-1.5">
              <MessageSquare className="h-3 w-3 text-neon-cyan" />
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Legenda</p>
            </div>
            <p className="text-xs leading-relaxed text-foreground/80">
              Esses 5 hábitos transformaram completamente minha rotina e resultados. O terceiro vai te surpreender!
              Salve para não esquecer!
            </p>
          </div>

          {/* Hashtags */}
          <div className="card-glass rounded-xl p-4">
            <div className="mb-2 flex items-center gap-1.5">
              <Hash className="h-3 w-3 text-neon-purple" />
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Hashtags</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['#motivação', '#viral', '#mindset', '#crescimentopessoal', '#hábitos', '#produtividade'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-neon-purple"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="card-glass rounded-xl p-4">
            <div className="mb-1 flex items-center gap-1.5">
              <Share2 className="h-3 w-3 text-neon-pink" />
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">CTA</p>
            </div>
            <p className="text-xs font-medium text-neon-pink">"Salve para não esquecer!"</p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        <button className="btn-neon flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white">
          <Download className="h-4 w-4" />
          Baixar Vídeo
        </button>
        <button className="btn-neon-outline flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold">
          <Edit className="h-4 w-4" />
          Editar
        </button>
        <button
          onClick={onNew}
          className="flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
        >
          <Plus className="h-4 w-4" />
          Novo Projeto
        </button>
      </div>
    </div>
  )
}
