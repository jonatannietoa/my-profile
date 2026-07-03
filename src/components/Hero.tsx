import { useEffect, useState } from 'react'
import { profile } from '@/data/profile'
import { ContactIcon } from './Icon'

/** Types out the terminal lines one character at a time. */
function useTypewriter(lines: string[]) {
  const [line, setLine] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    if (line >= lines.length) return
    const current = lines[line]
    if (text.length < current.length) {
      const t = setTimeout(() => setText(current.slice(0, text.length + 1)), 28)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLine((l) => l + 1)
      setText('')
    }, 900)
    return () => clearTimeout(t)
  }, [text, line, lines])

  return { line, text }
}

export function Hero() {
  const { line, text } = useTypewriter(profile.terminalLines)

  return (
    <header className="animate-fade-up">
      {/* terminal card */}
      <div
        data-print="hide"
        className="overflow-hidden rounded-xl border border-border bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur"
      >
        <div className="flex items-center gap-2 border-b border-border bg-surface-2/60 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-xs text-muted-2">
            jonatan@barcelona: ~/profile
          </span>
        </div>
        <div className="space-y-1.5 p-5 font-mono text-sm leading-relaxed sm:text-[15px]">
          {profile.terminalLines.map((full, i) => (
            <div key={i} className="flex gap-2">
              <span className="select-none text-primary">$</span>
              <span className="text-foreground/90">
                {i < line ? full : i === line ? text : ''}
                {i === line && (
                  <span className="ml-0.5 inline-block w-2 animate-blink bg-primary align-middle">
                    &nbsp;
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* identity */}
      <div className="mt-8">
        <p className="font-mono text-sm text-primary">
          &gt; whoami
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">
          {profile.headline}
        </p>
        <p className="mt-1 font-mono text-sm text-muted-2">
          {profile.location}
        </p>

        {/* contact row */}
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {profile.contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.icon === 'mail' || c.icon === 'map' ? undefined : '_blank'}
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
            >
              <ContactIcon
                name={c.icon}
                className="h-4 w-4 text-muted-2 transition-colors group-hover:text-primary"
              />
              {c.value}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
