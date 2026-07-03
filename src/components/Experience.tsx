import { profile, type Role } from '@/data/profile'

function StackTags({ stack }: { stack: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {stack.map((t) => (
        <span
          key={t}
          className="rounded border border-border bg-surface-2/60 px-2 py-0.5 font-mono text-[11px] text-muted"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

function RoleBlock({ role }: { role: Role }) {
  return (
    <div className="relative pb-7 pl-6 last:pb-0">
      {/* timeline line + dot */}
      <span className="absolute left-0 top-1.5 h-full w-px bg-border" />
      <span className="absolute -left-[3px] top-1.5 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h4 className="font-semibold text-foreground">{role.title}</h4>
        <span className="font-mono text-xs text-muted-2">
          {role.period}
          {role.duration ? ` · ${role.duration}` : ''}
        </span>
      </div>
      {role.location && (
        <p className="mt-0.5 text-xs text-muted-2">{role.location}</p>
      )}
      <ul className="mt-2 space-y-1.5">
        {role.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      {role.stack && <StackTags stack={role.stack} />}
    </div>
  )
}

export function Experience() {
  return (
    <div className="space-y-8">
      {profile.experience.map((item) => (
        <article key={item.company} data-print="flat" className="rounded-xl border border-border bg-surface/40 p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-3">
            <h3 className="text-base font-semibold tracking-tight text-primary">
              {item.company}
            </h3>
            {item.companyMeta && (
              <span className="font-mono text-xs text-muted-2">
                {item.companyMeta}
              </span>
            )}
          </div>
          {item.roles.map((role, i) => (
            <RoleBlock key={i} role={role} />
          ))}
        </article>
      ))}
    </div>
  )
}
