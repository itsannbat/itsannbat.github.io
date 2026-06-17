import SectionWrapper from './SectionWrapper';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: 'Ledger Engine',
    description:
      'A double-entry accounting core with idempotent transactions and an append-only audit log. Built to handle high write throughput without losing consistency.',
    tech: ['Go', 'PostgreSQL', 'gRPC'],
    github: '#',
    live: '#',
  },
  {
    title: 'Pixel Pipeline',
    description:
      'A self-hosted image processing service that generates responsive variants on the fly, with smart caching and an edge-friendly API.',
    tech: ['TypeScript', 'Node.js', 'Redis'],
    github: '#',
    live: '#',
  },
  {
    title: 'Notes Graph',
    description:
      'A local-first note-taking app that links ideas into a navigable knowledge graph, syncing peer-to-peer with conflict-free merges.',
    tech: ['React', 'CRDTs', 'IndexedDB'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <p className="mono-label mb-3">Work</p>
      <h2 className="mb-3 text-3xl font-bold sm:text-4xl">Projects</h2>
      <p className="mb-12 max-w-2xl text-lg text-muted">
        A few things I&apos;ve built recently &mdash; from infrastructure to
        interfaces.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-text/90">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-5 font-sans text-sm">
              <a
                href={project.github}
                className="text-muted hover:text-accent"
                target={project.github.startsWith('http') ? '_blank' : undefined}
                rel={project.github.startsWith('http') ? 'noreferrer' : undefined}
              >
                GitHub
              </a>
              <a
                href={project.live}
                className="text-muted hover:text-accent"
                target={project.live.startsWith('http') ? '_blank' : undefined}
                rel={project.live.startsWith('http') ? 'noreferrer' : undefined}
              >
                Live
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
