import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { Folio, FolioMark } from "app/components/folio";
import { Ornament, Standfirst } from "app/components/ornament";

export const metadata = {
  title: "Essays",
  description:
    "Long-form essays and field reports on offensive security, exploit development, and tooling.",
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

export default function BlogPosts() {
  const allBlogs = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1,
  );

  return (
    <article>
      <Folio file="14" subject="Essays — selected" />

      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="label-accent">Essays &amp; field reports</span>
        <span className="label numerals-tab">{allBlogs.length} entries</span>
      </div>

      <h1 className="display text-[2.4rem] sm:text-[3.4rem] leading-[1.05] font-semibold tracking-tight balance text-[var(--ink)] fold fold-1">
        Long-form notes from{" "}
        <span className="italic font-normal text-[var(--accent)]">
          the working operator.
        </span>
      </h1>

      <Standfirst>
        Mostly offensive security; occasionally tooling; never the kind of
        post that could have been a tweet.
      </Standfirst>

      <Ornament />

      {/* Editorial contents */}
      <ul className="fold fold-2">
        {allBlogs.map((post, i) => {
          const num = ROMAN[i] ?? String(i + 1);
          return (
            <li
              key={post.slug}
              className="border-b border-dotted border-[var(--rule)] first:border-t"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-6 grid grid-cols-[40px_1fr_auto] sm:grid-cols-[56px_1fr_auto] gap-x-4 sm:gap-x-6 items-baseline"
              >
                <span className="display italic text-[var(--accent)] text-[1.2rem] sm:text-[1.4rem] leading-none">
                  {num}.
                </span>

                <div>
                  <h2 className="display text-[1.25rem] sm:text-[1.55rem] leading-tight font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors balance">
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
          );
        })}
      </ul>

      <FolioMark num="14" total="48" />
    </article>
  );
}
