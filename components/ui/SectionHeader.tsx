interface SectionHeaderProps {
  number: string
  label: string
  headline: string | React.ReactNode
  subtext?: string
  centered?: boolean
  dark?: boolean
}

export function SectionHeader({
  number,
  label,
  headline,
  subtext,
  centered = false,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}>
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-gold">
        {number} / {label}
      </p>
      <h2 className={`font-serif text-[clamp(32px,5vw,56px)] font-bold leading-[1.05] ${
        dark ? 'text-text-white' : 'text-text-dark'
      }`}>
        {headline}
      </h2>
      {subtext && (
        <p className={`mt-4 max-w-lg text-lg leading-relaxed ${
          centered ? 'mx-auto' : ''
        } ${dark ? 'text-text-white-muted' : 'text-text-mid'}`}>
          {subtext}
        </p>
      )}
    </div>
  )
}
