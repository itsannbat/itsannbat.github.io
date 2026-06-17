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
    slug: 'building-truely',
    date: '2026-06-10',
    title: 'Building a real-time fact-checker with multi-agent AI',
    excerpt:
      'How we built Truely: orchestrating a fleet of AI agents inside a Chrome extension, parsing messy DOM trees at page-load speed, and keeping the UX out of the way while the browser quietly checks whether what you\'re reading is true.',
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
