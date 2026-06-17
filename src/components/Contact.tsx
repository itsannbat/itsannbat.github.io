import SectionWrapper from './SectionWrapper';
import { GitHubIcon, LinkedInIcon } from './icons';

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <p className="mono-label mb-3">Contact</p>
      <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Get in touch</h2>

      <p className="max-w-xl text-lg leading-relaxed text-text/90">
        Have a project, a question, or just want to say hello? My inbox is always
        open.
      </p>

      <a
        href="mailto:ab@pechuk.com"
        className="mt-6 inline-block font-sans text-xl text-accent hover:underline"
      >
        ab@pechuk.com
      </a>

      <div className="mt-8 flex items-center gap-6">
        <a
          href="https://github.com/itsannbat"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-accent"
        >
          <GitHubIcon className="text-muted group-hover:text-accent" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-accent"
        >
          <LinkedInIcon className="text-muted group-hover:text-accent" />
          <span>LinkedIn</span>
        </a>
      </div>
    </SectionWrapper>
  );
}
