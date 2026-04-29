import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";
import { Folio, FolioMark } from "app/components/folio";
import { Ornament } from "app/components/ornament";

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
      images: [
        {
          url: ogImage,
        },
      ],
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
      <Folio file="14" subject={`Essay — ${post.metadata.title}`} />

      <Link
        href="/blog"
        className="dlink label inline-block mb-4 text-[var(--ink-soft)]"
      >
        ← Return to contents
      </Link>

      {/* Article header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
          <span className="label-accent">An essay</span>
          <span className="label">·</span>
          <span className="label numerals-tab">
            {formatDate(post.metadata.publishedAt)}
          </span>
          {post.metadata.tags && (
            <>
              <span className="label">·</span>
              <span className="label">{post.metadata.tags}</span>
            </>
          )}
        </div>

        <h1 className="title display text-[2rem] sm:text-[3rem] leading-[1.06] font-semibold tracking-tight text-[var(--ink)] balance">
          {post.metadata.title}
        </h1>

        {post.metadata.summary && (
          <p className="standfirst max-w-prose mt-5">
            {post.metadata.summary}
          </p>
        )}

        <p className="mt-6 text-[14px] label flex items-center gap-3">
          <span>By</span>
          <span className="display italic text-[var(--ink)] tracking-normal normal-case text-[15px]">
            Umair Sabir
          </span>
          <span>·</span>
          <span>The MikiVirus Dossier</span>
        </p>

        <div className="rule-double mt-6" />
      </header>

      <article className="prose prose-quoteless dropcap">
        <CustomMDX source={post.content} />
      </article>

      <Ornament mark="❦" />

      <p className="text-[14px] italic text-[var(--ink-soft)] text-center max-w-prose mx-auto">
        ↦ If you'd like more like this,{" "}
        <Link href="/blog" className="dlink">
          return to the contents
        </Link>{" "}
        or subscribe to the{" "}
        <a href="/rss.xml" className="dlink">
          RSS feed
        </a>
        .
      </p>

      <FolioMark num="—" />
    </article>
  );
}
