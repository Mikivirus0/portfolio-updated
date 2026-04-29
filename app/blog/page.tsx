import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Technical writing on offensive security, exploit development, and tooling by Umair Sabir.",
};

export default function BlogPosts() {
  const allBlogs = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1,
  );

  return (
    <article>
      <section className="mb-10 fold fold-1">
        <p className="label-accent mb-3">Blog</p>
        <h1 className="display text-[2.4rem] sm:text-[3.2rem] leading-[1.05] font-semibold tracking-tight balance text-[var(--ink)]">
          Writing
        </h1>
        <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[var(--ink-soft)] max-w-prose pretty">
          Long-form, technical posts on offensive security, exploit
          development, Active Directory, methodology, and the tools I build
          along the way.
        </p>
      </section>

      <ul className="fold fold-2">
        {allBlogs.map((post) => (
          <li
            key={post.slug}
            className="border-b border-dotted border-[var(--rule)] first:border-t"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block py-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1 items-baseline"
            >
              <div>
                <h2 className="display text-[1.2rem] sm:text-[1.45rem] leading-tight font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors balance">
                  {post.metadata.title}
                </h2>
                {post.metadata.summary && (
                  <p className="text-[14.5px] text-[var(--ink-soft)] mt-1.5 leading-[1.65] max-w-prose pretty">
                    {post.metadata.summary}
                  </p>
                )}
                {post.metadata.tags && (
                  <p className="label text-[10.5px] mt-2 text-[var(--ink-faint)]">
                    {post.metadata.tags}
                  </p>
                )}
              </div>

              <div className="text-right shrink-0">
                <div className="display italic text-[var(--ink-soft)] numerals-tab text-[14px] sm:text-[15px]">
                  {formatDate(post.metadata.publishedAt)}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
