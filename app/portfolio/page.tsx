import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioBrowser from "@/components/portfolio/PortfolioBrowser";
import { getPortfolioImages } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Portfolio fotograficzne: portret, gastronomia, wnętrza i hotele, event, biznes i lifestyle. Zobacz wybrane zdjęcia z realizacji w Lublinie i całej Polsce.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const images = getPortfolioImages();

  return (
    <div className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Wybrane fotografie"
          description="Portret, gastronomia, wnętrza, event, biznes i lifestyle — filtruj według kategorii."
        />
        <div className="mt-14">
          <Suspense fallback={<p className="text-stone">Ładowanie…</p>}>
            <PortfolioBrowser images={images} />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
