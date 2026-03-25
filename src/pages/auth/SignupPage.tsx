import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Zap, Mail, Lock, User, Eye, EyeOff, Check } from 'lucide-react'

const trustBadges = [
  { label: 'Grátis para começar', icon: '🎁' },
  { label: 'Sem cartão de crédito', icon: '💳' },
  { label: 'Cancele quando quiser', icon: '✌️' },
]

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-grid-pattern relative overflow-hidden"
      style={{ backgroundColor: 'hsl(222 47% 5%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 0%, hsl(195 100% 45% / 0.1) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 80% 80%, hsl(270 91% 65% / 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 70%, hsl(320 100% 58% / 0.07) 0%, transparent 60%)
          `,
        }}
      />

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center animate-neon-pulse"
              style={{
                background: 'linear-gradient(135deg, hsl(270 91% 65%), hsl(320 100% 58%))',
              }}
            >
              <Zap className="w-6 h-6 text-white" fill="white" />
            </div>
            <div className="text-left">
              <div
                className="text-xl font-bold tracking-widest gradient-text-primary"
                style={{ letterSpacing: '0.18em' }}
              >
                VIRAL
              </div>
              <div className="text-xs font-semibold tracking-[0.22em] text-neon-purple opacity-70">
                STUDIO PRO
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="card-glass p-8">
          <h1 className="text-2xl font-bold mb-1 text-center" style={{ color: 'hsl(220 20% 92%)' }}>
            Crie sua conta grátis
          </h1>
          <p className="text-sm text-center mb-7" style={{ color: 'hsl(220 15% 52%)' }}>
            Comece a criar vídeos virais hoje mesmo
          </p>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-xs font-semibold mb-2" style={{ color: 'hsl(220 15% 62%)' }}>
              Nome completo
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: 'hsl(195 100% 45% / 0.6)' }}
              />
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                style={{
                  backgroundColor: 'hsl(222 35% 10%)',
                  border: '1px solid hsl(270 30% 18%)',
                  color: 'hsl(220 20% 88%)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(195 100% 45% / 0.7)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px hsl(195 100% 45% / 0.1), 0 0 15px hsl(195 100% 45% / 0.08)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(270 30% 18%)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-xs font-semibold mb-2" style={{ color: 'hsl(220 15% 62%)' }}>
              E-mail
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: 'hsl(195 100% 45% / 0.6)' }}
              />
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                style={{
                  backgroundColor: 'hsl(222 35% 10%)',
                  border: '1px solid hsl(270 30% 18%)',
                  color: 'hsl(220 20% 88%)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(195 100% 45% / 0.7)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px hsl(195 100% 45% / 0.1), 0 0 15px hsl(195 100% 45% / 0.08)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(270 30% 18%)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-xs font-semibold mb-2" style={{ color: 'hsl(220 15% 62%)' }}>
              Senha
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: 'hsl(195 100% 45% / 0.6)' }}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Mínimo 8 caracteres"
                className="w-full pl-10 pr-10 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                style={{
                  backgroundColor: 'hsl(222 35% 10%)',
                  border: '1px solid hsl(270 30% 18%)',
                  color: 'hsl(220 20% 88%)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(195 100% 45% / 0.7)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px hsl(195 100% 45% / 0.1), 0 0 15px hsl(195 100% 45% / 0.08)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(270 30% 18%)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-150"
                style={{ color: 'hsl(220 15% 45%)' }}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="flex items-start gap-3 mb-6">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200"
              style={{
                border: agreed ? 'none' : '1.5px solid hsl(270 30% 30%)',
                background: agreed
                  ? 'linear-gradient(135deg, hsl(270 91% 65%), hsl(320 100% 58%))'
                  : 'hsl(222 35% 10%)',
                boxShadow: agreed ? '0 0 10px hsl(270 91% 65% / 0.4)' : 'none',
              }}
              aria-checked={agreed}
              role="checkbox"
            >
              {agreed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
            </button>
            <p className="text-xs leading-relaxed" style={{ color: 'hsl(220 15% 52%)' }}>
              Concordo com os{' '}
              <Link to="/terms" className="text-neon-purple hover:text-neon-pink transition-colors">
                Termos de Uso
              </Link>{' '}
              e{' '}
              <Link to="/privacy" className="text-neon-purple hover:text-neon-pink transition-colors">
                Política de Privacidade
              </Link>
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-neon w-full py-3 rounded-lg text-sm font-semibold"
          >
            Criar conta
          </button>

          {/* Sign in link */}
          <p className="text-center text-xs mt-5" style={{ color: 'hsl(220 15% 50%)' }}>
            Já tem conta?{' '}
            <Link
              to="/auth/login"
              className="font-semibold text-neon-purple hover:text-neon-pink transition-colors duration-150"
            >
              Entrar
            </Link>
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                background: 'hsl(222 40% 9% / 0.8)',
                border: '1px solid hsl(270 30% 16%)',
              }}
            >
              <span className="text-sm" role="img" aria-hidden="true">{badge.icon}</span>
              <span className="text-xs font-medium" style={{ color: 'hsl(220 15% 55%)' }}>
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
