import SectionWrapper from './SectionWrapper';

const skills = [
  'TypeScript',
  'React',
  'Svelte',
  'Python',
  'Chrome Extensions',
  'AI Agents',
  'Anthropic Claude',
  'TailwindCSS',
  'Vite / WXT',
  'Distributed Systems',
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <p className="mono-label mb-3">About</p>
      <h2 className="mb-12 text-3xl font-bold sm:text-4xl">A little about me</h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-14">
        <img
          src="/ann.png"
          alt="Ann B."
          className="aspect-square w-full rounded-2xl object-cover object-top md:max-w-[280px]"
        />

        <div>
          <div className="space-y-5 text-lg leading-relaxed text-text/90">
            <p>
              I&apos;m a software engineer who gets excited about building things that
              actually matter. Lately that means AI-powered browser tooling, multi-agent
              systems, and the unglamorous-but-crucial work of making the internet a
              slightly more honest place.
            </p>
            <p>
              I care about the full stack &mdash; from architecting background service
              workers and DOM-parsing pipelines to designing interfaces that stay out of
              the user&apos;s way. Clean abstractions, careful API design, and code that
              the next person can read without a decoder ring.
            </p>
            <p>
              When I step away from the keyboard I&apos;m usually writing about what
              I&apos;ve learned, or somewhere outside with a camera, trying to frame the
              ordinary in a way that feels new.
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
