import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[hsl(222_47%_5%/0.85)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg btn-neon flex-shrink-0">
              <Zap className="h-4 w-4 text-white" fill="white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              VIRAL STUDIO{' '}
              <span className="gradient-text-primary">PRO</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {[
              { label: 'Recursos', href: '#recursos' },
              { label: 'Preços', href: '#precos' },
              { label: 'Templates', href: '#templates' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              Entrar
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link to="/signup">
              <button className="btn-neon rounded-full px-5 py-2 text-sm font-semibold text-white">
                Começar Grátis
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-[hsl(222_47%_5%/0.98)] px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {[
              { label: 'Recursos', href: '#recursos' },
              { label: 'Preços', href: '#precos' },
              { label: 'Templates', href: '#templates' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Entrar
            </Link>
            <Link to="/signup">
              <button className="btn-neon mt-2 w-full rounded-full py-2.5 text-sm font-semibold text-white">
                Começar Grátis
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
