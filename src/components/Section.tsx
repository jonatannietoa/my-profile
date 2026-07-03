import { cn } from '@/lib/utils'

/** A titled section with a monospace "index" marker, e.g. 01 · Experience */
export function Section({
  index,
  title,
  id,
  className,
  children,
}: {
  index: string
  title: string
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn('scroll-mt-24', className)}>
      <div className="mb-6 flex items-center gap-3">
        <span className="font-mono text-sm text-primary">{index}</span>
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {title}
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  )
}
