import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photographs from competitions, conferences, and travel.",
};

export default function Photos() {
  return (
    <article>
      <section className="mb-10 fold fold-1">
        <p className="label-accent mb-3">Photos</p>
        <h1 className="display text-[2.4rem] sm:text-[3.2rem] leading-[1.05] font-semibold tracking-tight balance text-[var(--ink)]">
          A few moments
        </h1>
        <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[var(--ink-soft)] max-w-prose pretty">
          A small collection of photographs from competitions, conferences,
          and travel.
        </p>
      </section>

      <div className="fold fold-2">
        <ImageGrid
          coverImage={{
            src: "/photos/photo6.jpg",
            alt: "Hackmasters'24 — Istanbul",
          }}
          columns={3}
          images={[
            { src: "/photos/photo5.jpg", alt: "At the venue" },
            { src: "/photos/photo4.jpg", alt: "Competition floor" },
            { src: "/photos/photo3.jpg", alt: "Between rounds" },
          ]}
        />

        <div className="mt-12">
          <ImageGrid
            columns={3}
            images={[
              { src: "/photos/photo1.jpg", alt: "Travel" },
              { src: "/photos/photo2.jpg", alt: "Travel" },
              { src: "/photos/photo3.jpg", alt: "Travel" },
              { src: "/photos/photo4.jpg", alt: "Travel" },
              { src: "/photos/photo5.jpg", alt: "Travel" },
              { src: "/photos/photo6.jpg", alt: "Travel" },
            ]}
          />
        </div>
      </div>
    </article>
  );
}
