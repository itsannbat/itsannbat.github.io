import SectionWrapper from './SectionWrapper';

const painPoints = [
  { pain: 'Hidden half-truths & outright lies', cure: 'Live highlights & corrections with primary-source citations' },
  { pain: 'AI-generated stealth content', cure: 'Deep-scan detector flags synthetic text, images, audio, or video' },
  { pain: 'Missing context', cure: 'Additional statistics and neutral summaries right where you need them' },
];

const tech = ['Anthropic Claude', 'Letta AI', 'Svelte 5', 'TypeScript', 'TailwindCSS', 'WXT', 'Chrome MV3'];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <p className="mono-label mb-3">Work</p>
      <h2 className="mb-3 text-3xl font-bold sm:text-4xl">Projects</h2>
      <p className="mb-12 max-w-2xl text-lg text-muted">
        Things I&apos;ve built recently.
      </p>

      <article className="rounded-xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-accent">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Truely 🔎</h3>
            <p className="mono-label mt-1">Browser Extension · AI Agents · Misinformation Detection</p>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-4 py-2 font-sans text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            GitHub →
          </a>
        </div>

        <blockquote className="mt-6 border-l-2 border-accent pl-5 font-serif text-lg italic text-text/80">
          "When we abandon facts, we abandon freedom." — Timothy Snyder
        </blockquote>

        <p className="mt-6 leading-relaxed text-text/90">
          Truely is a plug-and-play browser extension that unleashes a fleet of AI agents the instant a page
          loads — fact-checking claims in real time, detecting synthetic content, and surfacing missing context
          directly alongside the text you&apos;re reading.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse font-sans text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-8 text-left font-semibold text-muted">Pain</th>
                <th className="pb-3 text-left font-semibold text-muted">Truely&apos;s Cure</th>
              </tr>
            </thead>
            <tbody>
              {painPoints.map(({ pain, cure }) => (
                <tr key={pain} className="border-b border-border/50">
                  <td className="py-3 pr-8 text-text/70">{pain}</td>
                  <td className="py-3 text-text/90">{cure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <p className="mono-label mb-4">Built with</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </article>
    </SectionWrapper>
  );
}
