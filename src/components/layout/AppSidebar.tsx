import { Link, useLocation } from '@tanstack/react-router'
import {
  LayoutDashboard,
  FolderOpen,
  Video,
  Search,
  Mic,
  Layout,
  Hash,
  Settings,
  Zap,
} from 'lucide-react'

const navItems = [
  { label: 'Visão Geral', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'Meus Projetos', icon: FolderOpen, href: '/dashboard/projects' },
  { label: 'Criar Vídeo', icon: Video, href: '/dashboard/create/script', highlight: true },
  { label: 'Analisar Referência', icon: Search, href: '/dashboard/analyzer' },
  { label: 'Biblioteca de Vozes', icon: Mic, href: '/dashboard/voices' },
  { label: 'Templates', icon: Layout, href: '/dashboard/templates' },
  { label: 'Hashtags & Legendas', icon: Hash, href: '/dashboard/captions' },
]

export default function AppSidebar() {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (href: string) => {
    if (href === '/dashboard') return currentPath === '/dashboard'
    return currentPath.startsWith(href)
  }

  return (
    <aside
      className="flex flex-col h-full w-64 flex-shrink-0"
      style={{ backgroundColor: 'hsl(222 47% 7%)' }}
    >
      {/* Logo / Brand */}
      <div className="px-5 py-5 border-b" style={{ borderColor: 'hsl(270 30% 12%)' }}>
        <Link to="/dashboard" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 animate-neon-pulse"
            style={{
              background: 'linear-gradient(135deg, hsl(270 91% 65%), hsl(320 100% 58%))',
            }}
          >
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="text-base font-bold tracking-widest gradient-text-primary"
              style={{ letterSpacing: '0.15em' }}
            >
              VIRAL
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-neon-purple opacity-70">
              STUDIO PRO
            </span>
          </div>
        </Link>
      </div>

      {/* Credit Balance Widget */}
      <div className="px-4 py-3 border-b" style={{ borderColor: 'hsl(270 30% 12%)' }}>
        <div
          className="rounded-lg px-3 py-2.5"
          style={{
            background: 'hsl(270 40% 11%)',
            border: '1px solid hsl(270 60% 30% / 0.4)',
          }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium" style={{ color: 'hsl(220 15% 55%)' }}>
              Créditos
            </span>
            <span className="text-xs font-bold text-neon-purple">152</span>
          </div>
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: 'hsl(270 30% 18%)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: '61%',
                background: 'linear-gradient(90deg, hsl(270 91% 65%), hsl(320 100% 58%))',
              }}
            />
          </div>
          <p className="text-[10px] mt-1" style={{ color: 'hsl(220 15% 40%)' }}>
            152 de 250 créditos restantes
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <div className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)

            return (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative"
                style={{
                  color: active
                    ? 'hsl(270 91% 78%)'
                    : item.highlight
                      ? 'hsl(270 91% 72%)'
                      : 'hsl(220 15% 62%)',
                  background: active
                    ? 'hsl(270 60% 20% / 0.4)'
                    : item.highlight
                      ? 'hsl(270 40% 12%)'
                      : 'transparent',
                  borderLeft: active ? '2px solid hsl(270 91% 65%)' : '2px solid transparent',
                  boxShadow: active ? '0 0 20px hsl(270 91% 65% / 0.1)' : 'none',
                  paddingLeft: '11px',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = 'hsl(270 30% 13%)'
                    e.currentTarget.style.color = 'hsl(220 20% 85%)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = item.highlight ? 'hsl(270 40% 12%)' : 'transparent'
                    e.currentTarget.style.color = item.highlight
                      ? 'hsl(270 91% 72%)'
                      : 'hsl(220 15% 62%)'
                  }
                }}
              >
                {/* Highlight neon dot for Create */}
                {item.highlight && !active && (
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full animate-neon-pulse"
                    style={{ background: 'hsl(270 91% 65%)' }}
                  />
                )}
                <Icon
                  className="w-4 h-4 flex-shrink-0 transition-all duration-200"
                  style={{
                    color: active
                      ? 'hsl(270 91% 70%)'
                      : item.highlight
                        ? 'hsl(270 91% 65%)'
                        : 'inherit',
                    filter: active || item.highlight ? 'drop-shadow(0 0 6px hsl(270 91% 65% / 0.6))' : 'none',
                  }}
                />
                <span>{item.label}</span>

                {/* Active glow bar */}
                {active && (
                  <span
                    className="absolute inset-y-0 left-0 w-0.5 rounded-r-full"
                    style={{
                      background: 'hsl(270 91% 65%)',
                      boxShadow: '0 0 8px hsl(270 91% 65%)',
                    }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="border-t px-3 py-3" style={{ borderColor: 'hsl(270 30% 12%)' }}>
        {/* Settings link */}
        <Link
          to="/dashboard/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium mb-2 transition-all duration-200"
          style={{ color: 'hsl(220 15% 55%)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'hsl(270 30% 13%)'
            e.currentTarget.style.color = 'hsl(220 20% 82%)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'hsl(220 15% 55%)'
          }}
        >
          <Settings className="w-4 h-4" />
          <span>Configurações</span>
        </Link>

        {/* User card */}
        <div
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
          style={{ background: 'hsl(270 30% 11%)' }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, hsl(270 91% 65%), hsl(320 100% 58%))',
            }}
          >
            CR
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold truncate" style={{ color: 'hsl(220 20% 88%)' }}>
              Criador Silva
            </p>
            <p className="text-[10px] truncate" style={{ color: 'hsl(220 15% 50%)' }}>
              criador@viral.pro
            </p>
          </div>
          <span
            className="text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, hsl(270 91% 65%), hsl(320 100% 58%))',
              color: 'white',
              letterSpacing: '0.05em',
            }}
          >
            PRO
          </span>
        </div>
      </div>
    </aside>
  )
}
