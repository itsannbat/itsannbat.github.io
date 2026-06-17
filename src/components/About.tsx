import SectionWrapper from './SectionWrapper';

const skills = [
  'TypeScript',
  'React',
  'Node.js',
  'Go',
  'Python',
  'PostgreSQL',
  'Distributed Systems',
  'Cloud Infra',
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <p className="mono-label mb-3">About</p>
      <h2 className="mb-12 text-3xl font-bold sm:text-4xl">A little about me</h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-14">
        <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-border bg-surface md:max-w-[280px]">
          <span className="font-mono text-sm text-muted">Photo</span>
        </div>

        <div>
          <div className="space-y-5 text-lg leading-relaxed text-text/90">
            <p>
              I&apos;m a software engineer who enjoys the space where clean
              abstractions meet messy real-world systems. Most of my time goes
              into building reliable backends, thoughtful APIs, and the
              occasional front-end that doesn&apos;t fight the user.
            </p>
            <p>
              Lately I&apos;ve been deep in distributed systems &mdash; chasing
              down race conditions, tuning queues, and learning to love
              observability. I care about code that is boring in the best way:
              predictable, testable, and easy for the next person to read.
            </p>
            <p>
              When I step away from the keyboard, I&apos;m usually writing about
              what I&apos;ve learned or wandering somewhere with a camera,
              trying to frame the ordinary in a way that feels new.
            </p>
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center rounded-md border border-accent px-5 py-2.5 font-sans text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            Download CV
          </a>

          <div className="mt-10">
            <p className="mono-label mb-4">Skills &amp; Interests</p>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
