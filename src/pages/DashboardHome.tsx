import { Link } from '@tanstack/react-router'
import {
  Clapperboard,
  Lightbulb,
  Search,
  Eye,
  Download,
  Trash2,
  TrendingUp,
  Coins,
  FolderOpen,
  CalendarDays,
  Flame,
  Heart,
  Dumbbell,
  BookOpen,
} from 'lucide-react'
import DashboardLayout from '../components/layout/DashboardLayout'

const quickActions = [
  {
    title: 'Criar por Roteiro',
    subtitle: 'Escreva seu roteiro e gere o vídeo automaticamente',
    icon: Clapperboard,
    href: '/dashboard/create?type=script',
    glow: 'purple' as const,
  },
  {
    title: 'Criar por Tema',
    subtitle: 'Informe o tema e deixamos o roteiro por conta',
    icon: Lightbulb,
    href: '/dashboard/create?type=theme',
    glow: 'cyan' as const,
  },
  {
    title: 'Analisar Referência',
    subtitle: 'Cole um link e analise os segredos do vídeo',
    icon: Search,
    href: '/dashboard/analyzer',
    glow: 'pink' as const,
  },
]

const glowStyles = {
  purple: {
    border: 'hsl(270 60% 35% / 0.5)',
    iconBg: 'linear-gradient(135deg, hsl(270 91% 65% / 0.2), hsl(270 91% 65% / 0.05))',
    iconColor: 'hsl(270 91% 72%)',
    glow: '0 0 30px hsl(270 91% 65% / 0.15)',
    hoverGlow: '0 0 40px hsl(270 91% 65% / 0.25)',
  },
  cyan: {
    border: 'hsl(195 100% 45% / 0.4)',
    iconBg: 'linear-gradient(135deg, hsl(195 100% 45% / 0.2), hsl(195 100% 45% / 0.05))',
    iconColor: 'hsl(195 100% 55%)',
    glow: '0 0 30px hsl(195 100% 45% / 0.15)',
    hoverGlow: '0 0 40px hsl(195 100% 45% / 0.25)',
  },
  pink: {
    border: 'hsl(320 100% 58% / 0.4)',
    iconBg: 'linear-gradient(135deg, hsl(320 100% 58% / 0.2), hsl(320 100% 58% / 0.05))',
    iconColor: 'hsl(320 100% 68%)',
    glow: '0 0 30px hsl(320 100% 58% / 0.15)',
    hoverGlow: '0 0 40px hsl(320 100% 58% / 0.25)',
  },
}

const stats = [
  { label: 'Vídeos Criados', value: '12', icon: TrendingUp, color: 'purple' as const },
  { label: 'Créditos Restantes', value: '152', icon: Coins, color: 'cyan' as const },
  { label: 'Projetos Ativos', value: '3', icon: FolderOpen, color: 'pink' as const },
  { label: 'Vídeos Esta Semana', value: '4', icon: CalendarDays, color: 'purple' as const },
]

const statColors = {
  purple: { text: 'hsl(270 91% 72%)', bg: 'hsl(270 60% 18% / 0.5)', border: 'hsl(270 60% 30% / 0.3)' },
  cyan: { text: 'hsl(195 100% 55%)', bg: 'hsl(195 60% 12% / 0.6)', border: 'hsl(195 100% 45% / 0.3)' },
  pink: { text: 'hsl(320 100% 68%)', bg: 'hsl(320 60% 14% / 0.5)', border: 'hsl(320 100% 58% / 0.3)' },
}

type ProjectStatus = 'Concluído' | 'Processando' | 'Rascunho'

const projects: {
  title: string
  format: string
  duration: string
  status: ProjectStatus
  date: string
}[] = [
  { title: 'Motivação para Segunda-feira', format: '9:16', duration: '60s', status: 'Concluído', date: '10/01' },
  { title: 'Dicas de Produtividade', format: '9:16', duration: '45s', status: 'Concluído', date: '09/01' },
  { title: 'Minimalismo na Prática', format: '1:1', duration: '30s', status: 'Processando', date: '08/01' },
  { title: 'Como Acordar Cedo', format: '9:16', duration: '60s', status: 'Rascunho', date: '07/01' },
  { title: 'Rotina Matinal Perfeita', format: '16:9', duration: '90s', status: 'Concluído', date: '06/01' },
]

const statusConfig: Record<ProjectStatus, { label: string; color: string; bg: string; border: string }> = {
  Concluído: { label: 'Concluído', color: 'hsl(140 70% 55%)', bg: 'hsl(140 60% 12% / 0.6)', border: 'hsl(140 70% 40% / 0.35)' },
  Processando: { label: 'Processando', color: 'hsl(45 100% 60%)', bg: 'hsl(45 80% 12% / 0.6)', border: 'hsl(45 100% 45% / 0.35)' },
  Rascunho: { label: 'Rascunho', color: 'hsl(220 15% 55%)', bg: 'hsl(220 20% 12% / 0.6)', border: 'hsl(220 20% 30% / 0.3)' },
}

const templates = [
  { niche: 'Motivação', icon: Flame, color: 'hsl(320 100% 68%)', bg: 'hsl(320 60% 14% / 0.5)', border: 'hsl(320 100% 58% / 0.35)', desc: 'Frases poderosas' },
  { niche: 'Lifestyle', icon: Heart, color: 'hsl(195 100% 55%)', bg: 'hsl(195 60% 12% / 0.5)', border: 'hsl(195 100% 45% / 0.35)', desc: 'Estilo de vida' },
  { niche: 'Fitness', icon: Dumbbell, color: 'hsl(270 91% 72%)', bg: 'hsl(270 60% 14% / 0.5)', border: 'hsl(270 91% 65% / 0.35)', desc: 'Saúde e treino' },
  { niche: 'Educação', icon: BookOpen, color: 'hsl(45 100% 62%)', bg: 'hsl(45 80% 12% / 0.5)', border: 'hsl(45 100% 45% / 0.35)', desc: 'Conteúdo educativo' },
]

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">

        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">
            <span style={{ color: 'hsl(220 20% 88%)' }}>Olá, Criador! </span>
            <span className="text-neon-pink">✦</span>
          </h1>
          <p className="text-sm" style={{ color: 'hsl(220 15% 52%)' }}>
            Crie seu próximo vídeo viral agora.
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '80ms' }}>
          {quickActions.map((action) => {
            const Icon = action.icon
            const style = glowStyles[action.glow]
            return (
              <Link
                key={action.href}
                to={action.href}
                className="card-glass flex flex-col gap-4 p-5 min-h-[140px] transition-all duration-250 group"
                style={{
                  borderColor: style.border,
                  boxShadow: style.glow,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = style.hoverGlow
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = style.glow
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: style.iconBg, border: `1px solid ${style.border}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: style.iconColor }} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: 'hsl(220 20% 88%)' }}>
                    {action.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'hsl(220 15% 50%)' }}>
                    {action.subtitle}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '160ms' }}>
          {stats.map((stat) => {
            const Icon = stat.icon
            const c = statColors[stat.color]
            return (
              <div
                key={stat.label}
                className="rounded-xl p-4 flex flex-col gap-2"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium" style={{ color: 'hsl(220 15% 52%)' }}>
                    {stat.label}
                  </p>
                  <Icon className="w-4 h-4" style={{ color: c.text, opacity: 0.7 }} />
                </div>
                <p className="text-2xl font-bold" style={{ color: c.text }}>
                  {stat.value}
                </p>
              </div>
            )
          })}
        </div>

        {/* Recent Projects */}
        <div className="animate-fade-in" style={{ animationDelay: '240ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold" style={{ color: 'hsl(220 20% 88%)' }}>
              Projetos Recentes
            </h2>
            <Link
              to="/dashboard/projects"
              className="text-xs font-medium text-neon-purple hover:text-neon-pink transition-colors"
            >
              Ver todos →
            </Link>
          </div>

          <div
            className="rounded-xl overflow-hidden"
            style={{
              background: 'hsl(222 40% 9%)',
              border: '1px solid hsl(270 30% 16%)',
            }}
          >
            {/* Table Header */}
            <div
              className="grid grid-cols-12 px-4 py-3 text-xs font-semibold border-b"
              style={{
                color: 'hsl(220 15% 45%)',
                borderColor: 'hsl(270 30% 14%)',
                background: 'hsl(222 47% 7%)',
              }}
            >
              <span className="col-span-4">Título</span>
              <span className="col-span-2 hidden sm:block">Formato</span>
              <span className="col-span-2 hidden sm:block">Duração</span>
              <span className="col-span-2">Status</span>
              <span className="col-span-1 hidden md:block">Data</span>
              <span className="col-span-1 md:col-span-1 text-right">Ações</span>
            </div>

            {/* Table Rows */}
            {projects.map((project, i) => {
              const s = statusConfig[project.status]
              return (
                <div
                  key={i}
                  className="grid grid-cols-12 px-4 py-3.5 text-sm items-center border-b transition-colors duration-150"
                  style={{
                    borderColor: 'hsl(270 30% 11%)',
                    borderBottomWidth: i === projects.length - 1 ? '0' : '1px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'hsl(270 30% 10% / 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <span
                    className="col-span-4 font-medium text-xs sm:text-sm truncate pr-2"
                    style={{ color: 'hsl(220 20% 82%)' }}
                  >
                    {project.title}
                  </span>
                  <span
                    className="col-span-2 hidden sm:block text-xs font-mono"
                    style={{ color: 'hsl(220 15% 50%)' }}
                  >
                    {project.format}
                  </span>
                  <span
                    className="col-span-2 hidden sm:block text-xs"
                    style={{ color: 'hsl(220 15% 50%)' }}
                  >
                    {project.duration}
                  </span>
                  <span className="col-span-2">
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold"
                      style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}
                    >
                      {s.label}
                    </span>
                  </span>
                  <span
                    className="col-span-1 hidden md:block text-xs"
                    style={{ color: 'hsl(220 15% 42%)' }}
                  >
                    {project.date}
                  </span>
                  <div className="col-span-2 md:col-span-1 flex items-center justify-end gap-1">
                    <button
                      className="w-7 h-7 flex items-center justify-center rounded-lg transition-all duration-150"
                      style={{ color: 'hsl(220 15% 45%)' }}
                      title="Preview"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'hsl(270 40% 16%)'
                        e.currentTarget.style.color = 'hsl(270 91% 72%)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'hsl(220 15% 45%)'
                      }}
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      className="w-7 h-7 flex items-center justify-center rounded-lg transition-all duration-150"
                      style={{ color: 'hsl(220 15% 45%)' }}
                      title="Download"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'hsl(195 40% 14%)'
                        e.currentTarget.style.color = 'hsl(195 100% 55%)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'hsl(220 15% 45%)'
                      }}
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    <button
                      className="w-7 h-7 flex items-center justify-center rounded-lg transition-all duration-150"
                      style={{ color: 'hsl(220 15% 45%)' }}
                      title="Excluir"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'hsl(0 60% 14%)'
                        e.currentTarget.style.color = 'hsl(0 84% 65%)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'hsl(220 15% 45%)'
                      }}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Suggested Templates */}
        <div className="animate-fade-in pb-2" style={{ animationDelay: '320ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold" style={{ color: 'hsl(220 20% 88%)' }}>
              Templates Sugeridos
            </h2>
            <Link
              to="/dashboard/templates"
              className="text-xs font-medium text-neon-cyan hover:text-neon-purple transition-colors"
            >
              Ver biblioteca →
            </Link>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
            {templates.map((tmpl) => {
              const Icon = tmpl.icon
              return (
                <button
                  key={tmpl.niche}
                  className="flex-shrink-0 flex flex-col gap-3 p-4 rounded-xl transition-all duration-200 text-left"
                  style={{
                    width: '160px',
                    background: tmpl.bg,
                    border: `1px solid ${tmpl.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = `0 8px 24px ${tmpl.border}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'hsl(222 47% 7% / 0.6)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: tmpl.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'hsl(220 20% 85%)' }}>
                      {tmpl.niche}
                    </p>
                    <p className="text-xs" style={{ color: 'hsl(220 15% 48%)' }}>
                      {tmpl.desc}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

      </div>
    </DashboardLayout>
  )
}
