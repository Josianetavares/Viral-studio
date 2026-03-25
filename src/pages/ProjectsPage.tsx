import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  FolderOpen,
  Plus,
  Search,
  Eye,
  Download,
  Copy,
  Trash2,
  Play,
  Loader2,
  CheckCircle2,
  FileText,
} from 'lucide-react'
import DashboardLayout from '../components/layout/DashboardLayout'

interface Project {
  id: string
  title: string
  duration: string
  format: string
  platform: 'TikTok' | 'YouTube' | 'Instagram' | 'Reels'
  status: 'Concluído' | 'Processando' | 'Rascunho'
  date: string
  gradient: string
}

const PROJECTS: Project[] = [
  { id: '1', title: '5 Hábitos para Transformar sua Vida', duration: '60s', format: '9:16', platform: 'TikTok', status: 'Concluído', date: '2025-01-15', gradient: 'from-violet-900/80 to-purple-950/80' },
  { id: '2', title: 'Como Ganhar Dinheiro Online em 2025', duration: '90s', format: '16:9', platform: 'YouTube', status: 'Concluído', date: '2025-01-14', gradient: 'from-red-900/80 to-rose-950/80' },
  { id: '3', title: 'Motivação para Segunda-feira', duration: '30s', format: '9:16', platform: 'Instagram', status: 'Processando', date: '2025-01-14', gradient: 'from-pink-900/80 to-fuchsia-950/80' },
  { id: '4', title: 'Curiosidades sobre o Universo', duration: '45s', format: '9:16', platform: 'TikTok', status: 'Concluído', date: '2025-01-13', gradient: 'from-cyan-900/80 to-sky-950/80' },
  { id: '5', title: 'Receita de Bolo Fit', duration: '60s', format: '4:5', platform: 'Instagram', status: 'Rascunho', date: '2025-01-12', gradient: 'from-amber-900/80 to-orange-950/80' },
  { id: '6', title: 'História Bíblica: Davi e Golias', duration: '90s', format: '16:9', platform: 'YouTube', status: 'Concluído', date: '2025-01-11', gradient: 'from-indigo-900/80 to-blue-950/80' },
  { id: '7', title: 'Dicas de Vendas que Funcionam', duration: '30s', format: '9:16', platform: 'TikTok', status: 'Concluído', date: '2025-01-10', gradient: 'from-emerald-900/80 to-teal-950/80' },
  { id: '8', title: 'Rotina Matinal Produtiva', duration: '60s', format: '9:16', platform: 'Reels', status: 'Processando', date: '2025-01-10', gradient: 'from-yellow-900/80 to-amber-950/80' },
  { id: '9', title: 'Humor: Dia a Dia do Home Office', duration: '45s', format: '9:16', platform: 'TikTok', status: 'Rascunho', date: '2025-01-09', gradient: 'from-lime-900/80 to-green-950/80' },
  { id: '10', title: 'Empreendedorismo para Iniciantes', duration: '2min', format: '16:9', platform: 'YouTube', status: 'Concluído', date: '2025-01-08', gradient: 'from-sky-900/80 to-blue-950/80' },
]

const PLATFORM_COLORS: Record<string, string> = {
  TikTok: 'border-pink-500/40 bg-pink-500/10 text-pink-400',
  YouTube: 'border-red-500/40 bg-red-500/10 text-red-400',
  Instagram: 'border-purple-500/40 bg-purple-500/10 text-purple-400',
  Reels: 'border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-400',
}

const STATUS_CONFIG = {
  Concluído: { icon: CheckCircle2, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/8' },
  Processando: { icon: Loader2, color: 'text-amber-400 border-amber-500/30 bg-amber-500/8' },
  Rascunho: { icon: FileText, color: 'text-muted-foreground border-border bg-muted/30' },
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function ProjectsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('Todos')
  const [sort, setSort] = useState('Mais Recente')

  const filtered = PROJECTS.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'Todos' || p.status === statusFilter
    return matchSearch && matchStatus
  }).sort((a, b) => {
    if (sort === 'Mais Recente') return new Date(b.date).getTime() - new Date(a.date).getTime()
    if (sort === 'Mais Antigo') return new Date(a.date).getTime() - new Date(b.date).getTime()
    return a.title.localeCompare(b.title)
  })

  return (
    <DashboardLayout>
      <div className="relative min-h-full bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative px-4 py-8 sm:px-6">

          {/* Header */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl btn-neon">
                <FolderOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="gradient-text-primary">Meus Projetos</span>
                </h1>
                <p className="text-sm text-muted-foreground">{PROJECTS.length} vídeos no total</p>
              </div>
            </div>
            <Link
              to="/dashboard/create/script"
              className="btn-neon flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:block">Novo Vídeo</span>
            </Link>
          </div>

          {/* Filter bar */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-48">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar projetos..."
                className="w-full rounded-xl border border-border bg-muted/30 py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary/60"
              />
            </div>

            {/* Status filter */}
            <div className="flex gap-1.5">
              {['Todos', 'Concluído', 'Processando', 'Rascunho'].map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                    statusFilter === s
                      ? 'btn-neon text-white'
                      : 'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-border bg-muted/30 px-3 py-2 text-xs font-medium text-foreground outline-none transition-all focus:border-primary/60"
            >
              {['Mais Recente', 'Mais Antigo', 'A-Z'].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <p className="mb-4 text-xs text-muted-foreground">
            <span className="font-bold text-foreground">{filtered.length}</span> projetos encontrados
          </p>

          {/* Project grid */}
          {filtered.length === 0 ? (
            <div className="card-glass rounded-2xl p-12 text-center">
              <FolderOpen className="mx-auto mb-3 h-10 w-10 text-muted-foreground/40" />
              <p className="text-sm font-medium text-muted-foreground">Nenhum projeto encontrado</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.map((project) => {
                const { icon: StatusIcon, color: statusColor } = STATUS_CONFIG[project.status]
                return (
                  <div
                    key={project.id}
                    className="card-glass group rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-36 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20">
                          <Play className="h-4 w-4 fill-white text-white" />
                        </div>
                      </div>
                      {/* Platform badge */}
                      <div className="absolute left-3 top-3">
                        <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${PLATFORM_COLORS[project.platform]}`}>
                          {project.platform}
                        </span>
                      </div>
                      {/* Status */}
                      <div className="absolute right-3 top-3">
                        <span className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-bold ${statusColor}`}>
                          <StatusIcon className={`h-2.5 w-2.5 ${project.status === 'Processando' ? 'animate-spin' : ''}`} />
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="mb-2 font-bold text-foreground leading-snug line-clamp-2">
                        {project.title}
                      </h3>

                      <div className="mb-3 flex flex-wrap gap-1.5">
                        <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                          {project.duration}
                        </span>
                        <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                          {project.format}
                        </span>
                        <span className="text-[10px] text-muted-foreground ml-auto">
                          {formatDate(project.date)}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1.5">
                        {[
                          { icon: Eye, title: 'Visualizar' },
                          { icon: Download, title: 'Baixar' },
                          { icon: Copy, title: 'Duplicar' },
                        ].map(({ icon: Icon, title }) => (
                          <button
                            key={title}
                            title={title}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </button>
                        ))}
                        <button
                          title="Excluir"
                          className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg border border-destructive/30 text-destructive/60 transition-all hover:border-destructive hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
