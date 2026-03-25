interface Props {
  currentStep: number
  steps: string[]
}

export default function StepIndicator({ currentStep, steps }: Props) {
  return (
    <div className="flex items-center gap-0">
      {steps.map((label, i) => {
        const idx = i + 1
        const done = idx < currentStep
        const active = idx === currentStep
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  done
                    ? 'bg-primary text-white'
                    : active
                    ? 'border-2 border-primary text-neon-purple neon-glow-purple'
                    : 'border border-border text-muted-foreground'
                }`}
              >
                {done ? '✓' : idx}
              </div>
              <span
                className={`hidden text-[10px] font-medium sm:block ${
                  active ? 'text-neon-purple' : done ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mx-2 h-px w-12 sm:w-20 transition-all duration-300 ${
                  done ? 'bg-primary' : 'bg-border'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
