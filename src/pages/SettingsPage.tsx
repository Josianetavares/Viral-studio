import { useState } from 'react'
import { Camera, Save, Zap, Check } from 'lucide-react'
import DashboardLayout from '../components/layout/DashboardLayout'

type TabId = 'perfil' | 'conta' | 'idioma' | 'notificacoes' | 'plano'

const tabs: { id: TabId; label: string }[] = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'conta', label: 'Conta' },
  { id: 'idioma', label: 'Idioma' },
  { id: 'notificacoes', label: 'Notificações' },
  { id: 'plano', label: 'Plano' },
]

const languages = [
  { code: 'pt', label: 'Português', region: 'Brasil', flag: '🇧🇷' },
  { code: 'en', label: 'English', region: 'United States', flag: '🇺🇸' },
  { code: 'es', label: 'Español', region: 'España', flag: '🇪🇸' },
]

const notifications = [
  { id: 'video_ready', label: 'Vídeo pronto', desc: 'Quando seu vídeo terminar de processar' },
  { id: 'credits_low', label: 'Créditos baixos', desc: 'Quando restar menos de 20 créditos' },
  { id: 'weekly_tips', label: 'Dicas semanais', desc: 'Receba dicas para melhorar seu conteúdo' },
  { id: 'product_updates', label: 'Atualizações do produto', desc: 'Novos recursos e melhorias' },
]

function PerfilTab() {
  return (
    <div className="space-y-6">
      {/* Avatar */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white"
            style={{
              background: 'linear-gradient(135deg, hsl(270 91% 65%), hsl(320 100% 58%))',
            }}
          >
            CR
          </div>
          <button
            className="absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: 'hsl(222 40% 12%)',
              border: '2px solid hsl(270 91% 65% / 0.6)',
              color: 'hsl(270 91% 72%)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'hsl(270 40% 16%)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'hsl(222 40% 12%)'
            }}
            title="Trocar foto"
          >
            <Camera className="w-3.5 h-3.5" />
          </button>
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'hsl(220 20% 85%)' }}>Criador Silva</p>
          <p className="text-xs" style={{ color: 'hsl(220 15% 50%)' }}>JPG, PNG ou GIF • Máx 2MB</p>
        </div>
      </div>

      {/* Fields */}
      <div className="grid gap-4">
        <SettingsField label="Nome completo" placeholder="Seu nome" defaultValue="Criador Silva" />
        <SettingsField label="E-mail" placeholder="seu@email.com" type="email" defaultValue="criador@viral.pro" />
        <div>
          <label className="block text-xs font-semibold mb-2" style={{ color: 'hsl(220 15% 60%)' }}>
            Bio
          </label>
          <textarea
            rows={3}
            placeholder="Fale um pouco sobre você..."
            defaultValue="Criador de conteúdo apaixonado por motivação e produtividade."
            className="w-full px-3.5 py-2.5 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
            style={{
              backgroundColor: 'hsl(222 35% 10%)',
              border: '1px solid hsl(270 30% 18%)',
              color: 'hsl(220 20% 85%)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'hsl(270 91% 65% / 0.7)'
              e.currentTarget.style.boxShadow = '0 0 0 3px hsl(270 91% 65% / 0.1)'
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'hsl(270 30% 18%)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          />
        </div>
      </div>

      <SaveButton />
    </div>
  )
}

function ContaTab() {
  return (
    <div className="space-y-6">
      <SettingsField label="E-mail de acesso" type="email" defaultValue="criador@viral.pro" />
      <div>
        <label className="block text-xs font-semibold mb-2" style={{ color: 'hsl(220 15% 60%)' }}>
          Nova senha
        </label>
        <SettingsField label="" placeholder="••••••••" type="password" />
      </div>

      <div
        className="rounded-xl p-4"
        style={{
          background: 'hsl(0 60% 12% / 0.4)',
          border: '1px solid hsl(0 60% 30% / 0.3)',
        }}
      >
        <p className="text-sm font-semibold mb-1" style={{ color: 'hsl(0 84% 65%)' }}>
          Zona de perigo
        </p>
        <p className="text-xs mb-3" style={{ color: 'hsl(220 15% 50%)' }}>
          Excluir sua conta é uma ação irreversível. Todos os seus dados serão apagados.
        </p>
        <button
          className="text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200"
          style={{
            background: 'hsl(0 60% 14%)',
            border: '1px solid hsl(0 60% 30% / 0.5)',
            color: 'hsl(0 84% 65%)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'hsl(0 60% 18%)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'hsl(0 60% 14%)'
          }}
        >
          Excluir conta
        </button>
      </div>

      <SaveButton label="Salvar alterações de conta" />
    </div>
  )
}

function IdiomaTab() {
  const [selected, setSelected] = useState('pt')

  return (
    <div className="space-y-4">
      <p className="text-sm" style={{ color: 'hsl(220 15% 52%)' }}>
        Selecione o idioma da interface do Viral Studio Pro.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {languages.map((lang) => {
          const isSelected = selected === lang.code
          return (
            <button
              key={lang.code}
              onClick={() => setSelected(lang.code)}
              className="relative flex flex-col items-center gap-3 p-5 rounded-xl text-center transition-all duration-200"
              style={{
                background: isSelected ? 'hsl(270 60% 14% / 0.7)' : 'hsl(222 35% 10%)',
                border: `1.5px solid ${isSelected ? 'hsl(270 91% 65%)' : 'hsl(270 30% 16%)'}`,
                boxShadow: isSelected ? '0 0 20px hsl(270 91% 65% / 0.2)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'hsl(270 91% 65% / 0.5)'
                  e.currentTarget.style.background = 'hsl(270 40% 12%)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'hsl(270 30% 16%)'
                  e.currentTarget.style.background = 'hsl(222 35% 10%)'
                }
              }}
            >
              {isSelected && (
                <span
                  className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, hsl(270 91% 65%), hsl(320 100% 58%))',
                  }}
                >
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
              )}
              <span className="text-3xl" role="img" aria-label={lang.label}>{lang.flag}</span>
              <div>
                <p className="text-sm font-semibold" style={{ color: isSelected ? 'hsl(270 91% 78%)' : 'hsl(220 20% 82%)' }}>
                  {lang.label}
                </p>
                <p className="text-xs" style={{ color: 'hsl(220 15% 48%)' }}>
                  {lang.region}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      <SaveButton label="Salvar idioma" />
    </div>
  )
}

function NotificacoesTab() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    video_ready: true,
    credits_low: true,
    weekly_tips: false,
    product_updates: true,
  })

  return (
    <div className="space-y-3">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className="flex items-center justify-between p-4 rounded-xl transition-colors duration-150"
          style={{
            background: 'hsl(222 35% 10%)',
            border: '1px solid hsl(270 30% 16%)',
          }}
        >
          <div>
            <p className="text-sm font-medium" style={{ color: 'hsl(220 20% 85%)' }}>
              {notif.label}
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'hsl(220 15% 48%)' }}>
              {notif.desc}
            </p>
          </div>
          <button
            onClick={() => setEnabled((prev) => ({ ...prev, [notif.id]: !prev[notif.id] }))}
            className="relative w-11 h-6 rounded-full transition-all duration-250 flex-shrink-0"
            style={{
              background: enabled[notif.id]
                ? 'linear-gradient(135deg, hsl(270 91% 65%), hsl(320 100% 58%))'
                : 'hsl(222 30% 18%)',
              boxShadow: enabled[notif.id] ? '0 0 12px hsl(270 91% 65% / 0.4)' : 'none',
            }}
            role="switch"
            aria-checked={enabled[notif.id]}
          >
            <span
              className="absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-250"
              style={{
                transform: enabled[notif.id] ? 'translateX(22px)' : 'translateX(4px)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
              }}
            />
          </button>
        </div>
      ))}

      <SaveButton label="Salvar preferências" />
    </div>
  )
}

function PlanoTab() {
  return (
    <div className="space-y-5">
      {/* Current plan */}
      <div
        className="rounded-xl p-5 relative overflow-hidden"
        style={{
          background: 'hsl(270 40% 11%)',
          border: '1px solid hsl(270 60% 32% / 0.5)',
          boxShadow: '0 0 30px hsl(270 91% 65% / 0.12)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% -10%, hsl(270 91% 65% / 0.1) 0%, transparent 70%)',
          }}
        />
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: 'hsl(220 15% 50%)' }}>
                Plano atual
              </p>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold gradient-text-primary">Viral Pro</h3>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded"
                  style={{
                    background: 'linear-gradient(135deg, hsl(270 91% 65%), hsl(320 100% 58%))',
                    color: 'white',
                    letterSpacing: '0.06em',
                  }}
                >
                  PRO
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold" style={{ color: 'hsl(220 20% 92%)' }}>R$47</p>
              <p className="text-xs" style={{ color: 'hsl(220 15% 50%)' }}>/mês</p>
            </div>
          </div>

          {/* Usage stats */}
          <div className="space-y-3">
            <UsageStat label="Créditos usados" current={98} max={250} color="purple" />
            <UsageStat label="Projetos" current={3} max={20} color="cyan" />
            <UsageStat label="Armazenamento" current={1.2} max={10} unit="GB" color="pink" />
          </div>

          <p className="text-xs mt-4" style={{ color: 'hsl(220 15% 45%)' }}>
            Próxima renovação em <span style={{ color: 'hsl(270 91% 72%)' }}>15 de Fevereiro, 2025</span>
          </p>
        </div>
      </div>

      {/* Upgrade card */}
      <div
        className="rounded-xl p-5"
        style={{
          background: 'hsl(195 40% 10% / 0.6)',
          border: '1px solid hsl(195 100% 45% / 0.35)',
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'hsl(195 60% 14%)' }}
          >
            <Zap className="w-5 h-5 text-neon-cyan" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold mb-1" style={{ color: 'hsl(220 20% 88%)' }}>
              Viral Ultra — 500 créditos/mês
            </h4>
            <p className="text-xs mb-3" style={{ color: 'hsl(220 15% 50%)' }}>
              Voz clonada, marca d'água removida, suporte prioritário e mais.
            </p>
            <button
              className="text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, hsl(195 100% 45%), hsl(270 91% 65%))',
                color: 'white',
                boxShadow: '0 0 15px hsl(195 100% 45% / 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px hsl(195 100% 45% / 0.5)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px hsl(195 100% 45% / 0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Fazer upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function UsageStat({ label, current, max, color, unit = '' }: {
  label: string
  current: number
  max: number
  color: 'purple' | 'cyan' | 'pink'
  unit?: string
}) {
  const percent = Math.min((current / max) * 100, 100)
  const barColors = {
    purple: 'linear-gradient(90deg, hsl(270 91% 65%), hsl(320 100% 58%))',
    cyan: 'linear-gradient(90deg, hsl(195 100% 45%), hsl(270 91% 65%))',
    pink: 'linear-gradient(90deg, hsl(320 100% 58%), hsl(270 91% 65%))',
  }
  const textColors = {
    purple: 'hsl(270 91% 72%)',
    cyan: 'hsl(195 100% 55%)',
    pink: 'hsl(320 100% 68%)',
  }

  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span style={{ color: 'hsl(220 15% 55%)' }}>{label}</span>
        <span style={{ color: textColors[color] }}>
          {current}{unit} / {max}{unit}
        </span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'hsl(222 30% 18%)' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${percent}%`, background: barColors[color] }}
        />
      </div>
    </div>
  )
}

function SettingsField({
  label,
  placeholder,
  type = 'text',
  defaultValue,
}: {
  label: string
  placeholder?: string
  type?: string
  defaultValue?: string
}) {
  return (
    <div>
      {label && (
        <label className="block text-xs font-semibold mb-2" style={{ color: 'hsl(220 15% 60%)' }}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full px-3.5 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
        style={{
          backgroundColor: 'hsl(222 35% 10%)',
          border: '1px solid hsl(270 30% 18%)',
          color: 'hsl(220 20% 85%)',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'hsl(270 91% 65% / 0.7)'
          e.currentTarget.style.boxShadow = '0 0 0 3px hsl(270 91% 65% / 0.1)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'hsl(270 30% 18%)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}

function SaveButton({ label = 'Salvar alterações' }: { label?: string }) {
  return (
    <div className="pt-2">
      <button
        className="btn-neon px-6 py-2.5 rounded-lg text-sm flex items-center gap-2"
      >
        <Save className="w-4 h-4" />
        {label}
      </button>
    </div>
  )
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('perfil')

  const tabContent: Record<TabId, React.ReactNode> = {
    perfil: <PerfilTab />,
    conta: <ContaTab />,
    idioma: <IdiomaTab />,
    notificacoes: <NotificacoesTab />,
    plano: <PlanoTab />,
  }

  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 max-w-3xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold mb-1" style={{ color: 'hsl(220 20% 92%)' }}>
            Configurações
          </h1>
          <p className="text-sm" style={{ color: 'hsl(220 15% 50%)' }}>
            Gerencie sua conta e preferências
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 p-1 rounded-xl mb-7 overflow-x-auto"
          style={{
            background: 'hsl(222 40% 9%)',
            border: '1px solid hsl(270 30% 14%)',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0"
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, hsl(270 91% 65% / 0.25), hsl(320 100% 58% / 0.15))'
                    : 'transparent',
                  color: isActive ? 'hsl(270 91% 78%)' : 'hsl(220 15% 52%)',
                  border: isActive ? '1px solid hsl(270 91% 65% / 0.35)' : '1px solid transparent',
                  boxShadow: isActive ? '0 0 12px hsl(270 91% 65% / 0.15)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'hsl(220 20% 75%)'
                    e.currentTarget.style.background = 'hsl(270 30% 12%)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'hsl(220 15% 52%)'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div
          className="rounded-xl p-6"
          style={{
            background: 'hsl(222 40% 9%)',
            border: '1px solid hsl(270 30% 16%)',
          }}
        >
          {tabContent[activeTab]}
        </div>
      </div>
    </DashboardLayout>
  )
}
