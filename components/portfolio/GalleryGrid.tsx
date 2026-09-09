"use client";

import { useState } from "react";
import Image from "next/image";
import type { PortfolioImage } from "@/data/projects";
import Lightbox from "./Lightbox";

export default function GalleryGrid({ images }: { images: PortfolioImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return <p className="py-20 text-center text-stone">Brak zdjęć w tej kategorii.</p>;
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3">
        {images.map((image, idx) => (
          <button
            key={`${image.src}-${idx}`}
            onClick={() => setActiveIndex(idx)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden bg-graphite/10 sm:mb-6"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
            aria-label={`Powiększ: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1100ms] ease-editorial group-hover:scale-[1.04]"
              placeholder="empty"
              loading={idx < 4 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
