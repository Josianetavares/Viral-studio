import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Zap, Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-grid-pattern relative overflow-hidden"
      style={{ backgroundColor: 'hsl(222 47% 5%)' }}
    >
      {/* Radial neon glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 0%, hsl(270 91% 65% / 0.12) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 80% 80%, hsl(320 100% 58% / 0.07) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 70%, hsl(195 100% 45% / 0.07) 0%, transparent 60%)
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
            Bem-vindo de volta
          </h1>
          <p className="text-sm text-center mb-7" style={{ color: 'hsl(220 15% 52%)' }}>
            Acesse sua conta e continue criando
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-xs font-semibold mb-2" style={{ color: 'hsl(220 15% 62%)' }}>
              E-mail
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: 'hsl(270 91% 65% / 0.6)' }}
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
                  e.currentTarget.style.borderColor = 'hsl(270 91% 65% / 0.7)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px hsl(270 91% 65% / 0.12), 0 0 15px hsl(270 91% 65% / 0.1)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(270 30% 18%)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-xs font-semibold mb-2" style={{ color: 'hsl(220 15% 62%)' }}>
              Senha
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: 'hsl(270 91% 65% / 0.6)' }}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                style={{
                  backgroundColor: 'hsl(222 35% 10%)',
                  border: '1px solid hsl(270 30% 18%)',
                  color: 'hsl(220 20% 88%)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(270 91% 65% / 0.7)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px hsl(270 91% 65% / 0.12), 0 0 15px hsl(270 91% 65% / 0.1)'
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

          {/* Forgot password */}
          <div className="flex justify-end mb-6">
            <Link
              to="/auth/forgot-password"
              className="text-xs font-medium transition-colors duration-150 text-neon-purple hover:text-neon-pink"
            >
              Esqueci minha senha
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-neon w-full py-3 rounded-lg text-sm font-semibold"
          >
            Entrar
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px" style={{ backgroundColor: 'hsl(270 30% 16%)' }} />
            <span className="text-xs" style={{ color: 'hsl(220 15% 40%)' }}>
              ou continue com
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'hsl(270 30% 16%)' }} />
          </div>

          {/* Google */}
          <button
            type="button"
            className="btn-neon-outline w-full py-2.5 rounded-lg text-sm flex items-center justify-center gap-2.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continuar com Google
          </button>

          {/* Sign up link */}
          <p className="text-center text-xs mt-6" style={{ color: 'hsl(220 15% 50%)' }}>
            Não tem conta?{' '}
            <Link
              to="/auth/signup"
              className="font-semibold text-neon-purple hover:text-neon-pink transition-colors duration-150"
            >
              Criar conta grátis
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
