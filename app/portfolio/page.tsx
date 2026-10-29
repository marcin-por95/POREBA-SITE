import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/portfolio/GalleryGrid";
import { getPortfolioImages } from "@/data/projects";
import { categoryLabels, categoryOrder } from "@/types/project";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio fotografa Lublin",
  description:
    "Portfolio fotografa z Lublina: fotografia gastronomiczna, wnętrz i hoteli, biznesowa, portretowa, eventowa i lifestyle. Zobacz wybrane realizacje.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const images = getPortfolioImages();

  return (
    <div className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Portfolio"
          title="Portfolio fotografa — Lublin"
          description="Gastronomia, wnętrza i hotele, biznes, portret, event i lifestyle — wybierz kategorię albo zobacz pełną galerię."
        />

        <nav aria-label="Kategorie portfolio" className="mt-10 flex flex-wrap gap-3">
          {categoryOrder.map((category) => (
            <Link
              key={category}
              href={`/portfolio/${category}`}
              className="border border-mist px-4 py-2 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-bone"
            >
              {categoryLabels[category]}
            </Link>
          ))}
        </nav>

        <div className="mt-14">
          <GalleryGrid images={images} />
        </div>
      </Container>
    </div>
  );
}
