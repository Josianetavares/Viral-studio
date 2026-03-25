import React, { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  Video,
  Wand2,
  FolderOpen,
  Layers,
  Mic2,
  Search,
  Zap,
  ChevronLeft,
  Menu,
  X,
  BarChart3,
  Settings,
  CreditCard,
} from 'lucide-react'

interface NavItem {
  icon: React.ElementType
  label: string
  href: string
  badge?: string
}

const navItems: NavItem[] = [
  { icon: Wand2, label: 'Por Roteiro', href: '/dashboard/create/script' },
  { icon: Layers, label: 'Por Tema', href: '/dashboard/create/theme' },
  { icon: Search, label: 'Analisador', href: '/dashboard/analyzer' },
  { icon: Mic2, label: 'Vozes', href: '/dashboard/voices' },
  { icon: FolderOpen, label: 'Meus Projetos', href: '/dashboard/projects' },
  { icon: Video, label: 'Templates', href: '/dashboard/templates' },
]

const bottomNav: NavItem[] = [
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: CreditCard, label: 'Créditos', href: '/dashboard/credits', badge: '42' },
  { icon: Settings, label: 'Configurações', href: '/dashboard/settings' },
]

interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className={`flex h-16 items-center border-b border-border px-4 ${collapsed ? 'justify-center' : 'gap-2'}`}>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg btn-neon">
          <Zap className="h-4 w-4 text-white" />
        </div>
        {!collapsed && (
          <span className="text-sm font-bold tracking-tight">
            VIRAL <span className="gradient-text-primary">PRO</span>
          </span>
        )}
      </div>

      {/* Main nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {!collapsed && (
          <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Criar
          </p>
        )}
        <div className="space-y-0.5">
          {navItems.map(({ icon: Icon, label, href, badge }) => {
            const active = currentPath === href
            return (
              <Link
                key={href}
                to={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  collapsed ? 'justify-center' : ''
                } ${
                  active
                    ? 'bg-primary/15 text-neon-purple neon-glow-purple'
                    : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${active ? 'text-neon-purple' : ''}`} />
                {!collapsed && (
                  <>
                    <span className="flex-1">{label}</span>
                    {badge && (
                      <span className="rounded-full bg-primary/20 px-1.5 py-0.5 text-[10px] font-bold text-neon-purple">
                        {badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Bottom nav */}
      <div className="border-t border-border px-2 py-3 space-y-0.5">
        {bottomNav.map(({ icon: Icon, label, href, badge }) => {
          const active = currentPath === href
          return (
            <Link
              key={href}
              to={href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                collapsed ? 'justify-center' : ''
              } ${
                active
                  ? 'bg-primary/15 text-neon-purple'
                  : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && (
                <>
                  <span className="flex-1">{label}</span>
                  {badge && (
                    <span className="rounded-full bg-secondary/20 px-1.5 py-0.5 text-[10px] font-bold text-neon-cyan">
                      {badge}
                    </span>
                  )}
                </>
              )}
            </Link>
          )
        })}

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-muted/60 hover:text-foreground md:flex"
        >
          <ChevronLeft className={`h-4 w-4 shrink-0 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} />
          {!collapsed && <span>Recolher</span>}
        </button>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop sidebar */}
      <aside
        className={`hidden flex-col border-r border-border bg-[hsl(222_47%_7%)] transition-all duration-300 md:flex ${
          collapsed ? 'w-16' : 'w-60'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-60 border-r border-border bg-[hsl(222_47%_7%)] transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="flex h-14 items-center gap-3 border-b border-border bg-[hsl(222_47%_7%)] px-4 md:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted/60 hover:text-foreground"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded btn-neon">
              <Zap className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm font-bold">
              VIRAL <span className="gradient-text-primary">PRO</span>
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
