import { Link } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';
import { ArrowRightIcon } from './icons';

interface Post {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
}

const posts: Post[] = [
  {
    slug: 'idempotency-keys',
    date: '2026-05-02',
    title: 'Idempotency keys are a love letter to your future self',
    excerpt:
      'Retries are inevitable. Here is how a small key turns terrifying duplicate writes into a non-event, and the edge cases nobody warns you about.',
  },
  {
    slug: 'reading-flamegraphs',
    date: '2026-03-18',
    title: 'Learning to actually read a flamegraph',
    excerpt:
      'Profilers give you a wall of color. After staring at enough of them, a few simple shapes started telling me exactly where the time was going.',
  },
  {
    slug: 'boring-code',
    date: '2026-01-27',
    title: 'In praise of boring code',
    excerpt:
      'The clever one-liner felt great to write and awful to debug six months later. A short argument for choosing the obvious solution on purpose.',
  },
];

export default function Blog() {
  return (
    <SectionWrapper id="blog">
      <p className="mono-label mb-3">Blog</p>
      <h2 className="mb-12 text-3xl font-bold sm:text-4xl">Writing</h2>

      <ul className="divide-y divide-border border-y border-border">
        {posts.map((post) => (
          <li key={post.slug} className="py-7">
            <article className="group">
              <p className="mb-2 font-mono text-xs text-muted">{post.date}</p>
              <h3 className="text-xl font-semibold">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-text group-hover:text-accent"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-text/80">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-3 inline-flex items-center gap-1.5 font-sans text-sm text-accent hover:gap-2.5 transition-all"
              >
                Read more
                <ArrowRightIcon />
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
