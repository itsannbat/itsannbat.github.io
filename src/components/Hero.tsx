import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';

const socials = [
  { href: 'https://github.com/itsannbat', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'mailto:ab@pechuk.com', label: 'Email', Icon: MailIcon },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center pt-16"
    >
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="mono-label mb-4">ab@pechuk.com</p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Ann B.
        </h1>
        <p className="mt-3 font-sans text-xl text-muted sm:text-2xl">
          Software Engineer
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-text/90">
          I build things, write about them, and occasionally point a camera at the
          world.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="group inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-accent"
            >
              <Icon className="text-muted group-hover:text-accent" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
