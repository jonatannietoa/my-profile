import { profile } from '@/data/profile'

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {profile.stats.map((s) => (
        <div
          key={s.label}
          data-print="flat"
          className="rounded-lg border border-border bg-surface/60 p-4 text-center backdrop-blur"
        >
          <div className="font-mono text-2xl font-bold text-primary sm:text-3xl">
            {s.value}
          </div>
          <div className="mt-1 text-xs leading-snug text-muted">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
