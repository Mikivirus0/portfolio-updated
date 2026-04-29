import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${metaData.baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <Link
        href="/blog"
        className="dlink label inline-block mb-4 text-[var(--ink-soft)]"
      >
        ← Back to blog
      </Link>

      {/* Article header */}
      <header className="mb-10 pb-6 border-b border-[var(--rule)]">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
          <span className="label numerals-tab text-[var(--ink-soft)]">
            {formatDate(post.metadata.publishedAt)}
          </span>
          {post.metadata.tags && (
            <>
              <span className="text-[var(--ink-faint)]">·</span>
              <span className="label">{post.metadata.tags}</span>
            </>
          )}
        </div>

        <h1 className="title display text-[2rem] sm:text-[2.8rem] leading-[1.08] font-semibold tracking-tight text-[var(--ink)] balance">
          {post.metadata.title}
        </h1>

        {post.metadata.summary && (
          <p className="standfirst max-w-prose mt-4">{post.metadata.summary}</p>
        )}

        <p className="mt-5 text-[13px] text-[var(--ink-soft)]">
          By Umair Sabir
        </p>
      </header>

      <article className="prose prose-quoteless dropcap">
        <CustomMDX source={post.content} />
      </article>

      <div className="mt-16 pt-6 border-t border-[var(--rule)]">
        <p className="text-[14px] text-[var(--ink-soft)] max-w-prose">
          For more posts like this, visit the{" "}
          <Link href="/blog" className="dlink">
            blog
          </Link>{" "}
          or subscribe to the{" "}
          <a href="/rss.xml" className="dlink">
            RSS feed
          </a>
          .
        </p>
      </div>
    </article>
  );
}
