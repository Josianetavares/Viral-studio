import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Como funciona a análise de vídeo de referência?',
    answer:
      'Você cola o link de um vídeo público (TikTok, YouTube, Instagram, etc.) e nossa IA analisa a estrutura narrativa, ritmo, gancho, estilo visual e linguagem. Com base nisso, gera um vídeo original com a mesma estratégia, mas com conteúdo 100% novo.',
  },
  {
    question: 'O sistema copia conteúdo de terceiros?',
    answer:
      'Não. O sistema analisa apenas padrões e estratégias de conteúdo, nunca copiando imagens, áudio ou texto de vídeos de terceiros. Todo o conteúdo gerado é original, criado pela IA a partir das diretrizes que você definir.',
  },
  {
    question: 'Quais idiomas são suportados?',
    answer:
      'Atualmente suportamos Português (BR), Inglês (EUA/UK) e Espanhol (ES/LATAM). Para cada idioma, temos vozes localizadas com entonação e expressões naturais. Mais idiomas serão adicionados em breve.',
  },
  {
    question: 'Posso escolher o formato do vídeo?',
    answer:
      'Sim. Oferecemos os formatos 9:16 (TikTok, Reels, Shorts), 16:9 (YouTube, LinkedIn), 1:1 (Instagram Feed, X) e 4:5 (Feed otimizado, Pinterest). Você escolhe na hora de configurar o vídeo.',
  },
  {
    question: 'Quantos créditos são necessários por vídeo?',
    answer:
      'Cada vídeo consome 1 crédito, independente do formato ou duração. No plano Starter você recebe 5 créditos/mês, no Pro são 50 créditos e no Studio são ilimitados. Créditos extras podem ser comprados a R$9,90 cada.',
  },
  {
    question: 'O vídeo gerado é realmente original?',
    answer:
      'Sim. Cada vídeo é gerado do zero com IA generativa: narração sintetizada com a voz escolhida, cenas criadas especificamente para o seu roteiro e legendas únicas. Nunca reutilizamos elementos de outras gerações.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-muted/10 py-24 lg:py-32">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Perguntas Frequentes
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dúvidas{' '}
            <span className="gradient-text-primary">frequentes</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? 'card-glass border-primary/30'
                    : 'border-border/40 bg-card/30 hover:border-border/60'
                }`}
              >
                <button
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span
                    className={`text-base font-semibold leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-foreground' : 'text-foreground/80'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
