import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";
import { Folio, FolioMark } from "../components/folio";
import { Standfirst, Ornament } from "../components/ornament";

export const metadata: Metadata = {
  title: "Plates",
  description: "Photographic plates: CTFs, conferences, and travel.",
};

export default function Photos() {
  return (
    <article>
      <Folio file="42" subject="Plates — photographic" />

      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="label-accent">Plates</span>
        <span className="label">A photographic appendix</span>
      </div>

      <h1 className="display text-[2.4rem] sm:text-[3.4rem] leading-[1.05] font-semibold tracking-tight balance text-[var(--ink)] fold fold-1">
        A photographic{" "}
        <span className="italic font-normal text-[var(--accent)]">
          appendix.
        </span>
      </h1>

      <Standfirst>
        Frames from competitions won, conferences attended, and a handful of
        cities the operator happened to be in when he was carrying a camera.
      </Standfirst>

      <Ornament />

      <figure className="fig mb-12 fold fold-2">
        <ImageGrid
          coverImage={{
            src: "/photos/photo6.jpg",
            alt: "Hackmasters'24 — winners' podium, Istanbul",
          }}
          columns={3}
          images={[
            { src: "/photos/photo5.jpg", alt: "Plate II — at the venue" },
            { src: "/photos/photo4.jpg", alt: "Plate III — competition floor" },
            { src: "/photos/photo3.jpg", alt: "Plate IV — between rounds" },
          ]}
        />
        <figcaption className="mt-3">
          <span className="fig-num">Plate I.</span>
          The winner's photograph. Hackmasters'24, Istanbul, MMXXIV.
        </figcaption>
      </figure>

      <Ornament mark="※" />

      <figure className="fig fold fold-3">
        <ImageGrid
          columns={3}
          images={[
            { src: "/photos/photo1.jpg", alt: "Plate V" },
            { src: "/photos/photo2.jpg", alt: "Plate VI" },
            { src: "/photos/photo3.jpg", alt: "Plate VII" },
            { src: "/photos/photo4.jpg", alt: "Plate VIII" },
            { src: "/photos/photo5.jpg", alt: "Plate IX" },
            { src: "/photos/photo6.jpg", alt: "Plate X" },
          ]}
        />
        <figcaption className="mt-3">
          <span className="fig-num">Plates II – X.</span>
          A miscellany of travel and event photography, in no particular
          order.
        </figcaption>
      </figure>

      <FolioMark num="42" total="48" />
    </article>
  );
}
