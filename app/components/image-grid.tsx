import React from "react";
import Image from "next/image";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
  }[];
  columns?: 2 | 3 | 4;
  coverImage?: {
    src: string;
    alt: string;
  };
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
  coverImage,
}) => {
  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  return (
    <section>
      {coverImage && (
        <div className="relative w-full aspect-[3/1] mb-8">
          <Image
            alt={coverImage.alt}
            src={coverImage.src}
            fill
            priority
            className="rounded-xl object-cover"
          />
        </div>
      )}

      <div className={`grid ${gridClass} gap-4`}>
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            {image.href ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={image.href}
                className="block w-full h-full"
              >
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority
                  className="rounded-lg object-cover"
                />
              </a>
            ) : (
              <Image
                alt={image.alt}
                src={image.src}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
