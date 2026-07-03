import { profile } from '@/data/profile'

export function Skills() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {profile.skillGroups.map((group) => (
        <div
          key={group.label}
          data-print="flat"
          className="rounded-xl border border-border bg-surface/40 p-5"
        >
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="font-mono text-primary">#</span>
            {group.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 text-xs text-muted transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
