import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/portfolio/GalleryGrid";
import { getPortfolioImages } from "@/data/projects";
import { categoryLabels, categoryOrder, type ProjectCategory } from "@/types/project";
import { buildMetadata } from "@/lib/metadata";

const categorySeo: Record<ProjectCategory, { title: string; description: string }> = {
  portret: {
    title: "Fotografia portretowa Lublin — portfolio",
    description: "Portfolio fotografii portretowej i wizerunkowej w Lublinie. Naturalne portrety, personal branding, LinkedIn i sesje indywidualne.",
  },
  gastronomia: {
    title: "Fotografia gastronomiczna Lublin — portfolio",
    description: "Portfolio fotografii gastronomicznej w Lublinie. Zdjęcia dań, restauracji, menu i materiałów do social media oraz kampanii reklamowych.",
  },
  wnetrza: {
    title: "Fotografia wnętrz Lublin — portfolio",
    description: "Portfolio fotografii wnętrz i hoteli w Lublinie. Zdjęcia hoteli, apartamentów, restauracji, biur i przestrzeni komercyjnych.",
  },
  event: {
    title: "Fotograf eventowy Lublin — portfolio",
    description: "Portfolio fotografii eventowej w Lublinie. Fotorelacje z konferencji, gal, wydarzeń firmowych i spotkań biznesowych.",
  },
  biznes: {
    title: "Fotografia biznesowa Lublin — portfolio",
    description: "Portfolio fotografii biznesowej w Lublinie. Portrety pracowników, zespoły, biura, procesy pracy i materiały employer branding.",
  },
  lifestyle: {
    title: "Fotografia lifestyle Lublin — portfolio",
    description: "Portfolio fotografii lifestyle i contentu dla marek w Lublinie. Zdjęcia do social media, kampanii i komunikacji wizerunkowej.",
  },
};

type PortfolioCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categoryOrder.map((category) => ({ category }));
}

export async function generateMetadata({ params }: PortfolioCategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  if (!categoryOrder.includes(category as ProjectCategory)) return {};

  const data = categorySeo[category as ProjectCategory];

  return buildMetadata({
    title: data.title,
    description: data.description,
    path: `/portfolio/${category}`,
  });
}

export default async function PortfolioCategoryPage({ params }: PortfolioCategoryPageProps) {
  const { category } = await params;

  if (!categoryOrder.includes(category as ProjectCategory)) notFound();

  const typedCategory = category as ProjectCategory;
  const data = categorySeo[typedCategory];
  const images = getPortfolioImages().filter((image) => image.category === typedCategory);

  return (
    <div className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container>
        <Link href="/portfolio" className="text-sm text-stone link-underline">
          ← Wszystkie fotografie
        </Link>

        <div className="mt-8">
          <SectionHeading
            as="h1"
            eyebrow={categoryLabels[typedCategory]}
            title={data.title.replace(" — portfolio", "")}
            description={data.description}
          />
        </div>

        <nav aria-label="Kategorie portfolio" className="mt-10 flex flex-wrap gap-3">
          {categoryOrder.map((item) => (
            <Link
              key={item}
              href={`/portfolio/${item}`}
              aria-current={item === typedCategory ? "page" : undefined}
              className={`border px-4 py-2 text-sm transition-colors ${
                item === typedCategory
                  ? "border-ink bg-ink text-bone"
                  : "border-mist hover:border-ink hover:bg-ink hover:text-bone"
              }`}
            >
              {categoryLabels[item]}
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
