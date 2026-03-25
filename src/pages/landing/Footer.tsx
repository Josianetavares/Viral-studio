import { Zap, Twitter, Instagram, Youtube, Github } from 'lucide-react'

const footerLinks = {
  Produto: ['Recursos', 'Templates', 'Preços', 'Roadmap'],
  Empresa: ['Sobre nós', 'Blog', 'Carreiras', 'Imprensa'],
  Suporte: ['Central de Ajuda', 'Status', 'Contato', 'Comunidade'],
  Legal: ['Privacidade', 'Termos', 'Cookies', 'LGPD'],
}

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[hsl(222_47%_4%)]">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg btn-neon">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-bold text-foreground">
                VIRAL STUDIO <span className="gradient-text-primary">PRO</span>
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Crie vídeos virais com IA. Roteiro, voz, cenas e publicação — tudo em minutos.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Viral Studio Pro. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com{' '}
            <span className="text-neon-purple">♥</span>
            {' '}para criadores brasileiros
          </p>
        </div>
      </div>
    </footer>
  )
}
