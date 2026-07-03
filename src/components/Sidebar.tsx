import { profile } from '@/data/profile'
import {
  GraduationCap,
  Languages,
  Award,
  FileText,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof GraduationCap
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      data-print="flat"
      className="rounded-xl border border-border bg-surface/40 p-5"
    >
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
        <Icon className="h-4 w-4 text-primary" aria-hidden />
        {title}
      </h3>
      {children}
    </div>
  )
}

export function Sidebar() {
  return (
    <div className="space-y-4">
      <Card icon={Sparkles} title="Top Skills">
        <div className="flex flex-wrap gap-2">
          {profile.topSkills.map((s) => (
            <span
              key={s}
              className="rounded-md bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </Card>

      <Card icon={GraduationCap} title="Education">
        <ul className="space-y-4">
          {profile.education.map((e) => (
            <li key={e.institution}>
              <p className="text-sm font-medium text-foreground">
                {e.institution}
              </p>
              <p className="text-xs text-muted">{e.degree}</p>
              <p className="mt-0.5 font-mono text-xs text-muted-2">{e.period}</p>
            </li>
          ))}
        </ul>
      </Card>

      <Card icon={Languages} title="Languages">
        <ul className="space-y-2">
          {profile.languages.map((l) => (
            <li key={l.name} className="flex items-baseline justify-between gap-2">
              <span className="text-sm text-foreground">{l.name}</span>
              <span className="text-right text-xs text-muted-2">{l.level}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card icon={Award} title="Honors & Awards">
        <ul className="space-y-1.5">
          {profile.awards.map((a) => (
            <li key={a} className="text-sm text-muted">
              {a}
            </li>
          ))}
        </ul>
      </Card>

      <Card icon={FileText} title="Publications">
        <ul className="space-y-1.5">
          {profile.publications.map((p) =>
            p.url ? (
              <li key={p.title}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-start gap-1.5 text-sm text-muted transition-colors hover:text-primary"
                >
                  <span>{p.title}</span>
                  <ExternalLink
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-2 transition-colors group-hover:text-primary"
                    aria-hidden
                  />
                </a>
              </li>
            ) : (
              <li key={p.title} className="text-sm text-muted">
                {p.title}
              </li>
            ),
          )}
        </ul>
      </Card>
    </div>
  )
}
