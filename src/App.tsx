import { profile } from "@/data/profile";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Section } from "@/components/Section";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Sidebar } from "@/components/Sidebar";
import { DownloadButton } from "@/components/DownloadButton";

export default function App() {
  return (
    <div className="min-h-dvh">
      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <Hero />

        <div className="mt-10">
          <Stats />
        </div>

        {/* About / Summary */}
        <Section index="01" title="About" id="about" className="mt-16">
          <div
            data-print="flat"
            className="rounded-xl border border-border bg-surface/40 p-6 leading-relaxed text-muted"
          >
            {profile.summary.split("\n\n").map((para, i) => (
              <p key={i} className={i > 0 ? "mt-4" : ""}>
                {para}
              </p>
            ))}
          </div>

          <div
            data-print="flat"
            className="mt-4 rounded-xl border border-border bg-surface/40 p-6"
          >
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="font-mono text-primary">&gt;</span>
              {profile.lookingFor.title}
            </h3>
            <ul className="space-y-2 leading-relaxed text-muted">
              {profile.lookingFor.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Skills */}
        <Section index="02" title="Tech Stack" id="skills" className="mt-16">
          <Skills />
        </Section>

        {/* Experience + Sidebar */}
        <Section
          index="03"
          title="Experience"
          id="experience"
          className="mt-16"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <Experience />
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <Sidebar />
            </aside>
          </div>
        </Section>

        <footer className="mt-20 border-t border-border pt-6 text-center font-mono text-xs text-muted-2">
          <p>
            $ built with React + Vite + Tailwind + Claude · deployed on Vercel
          </p>
          <p className="mt-1">
            © {2026} {profile.name}
          </p>
        </footer>
      </main>

      <DownloadButton />
    </div>
  );
}
