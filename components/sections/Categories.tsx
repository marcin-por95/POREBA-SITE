import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { categoryLabels, categoryOrder } from "@/types/project";

const categoryCovers: Record<string, string> = {
  portret: "/images/portret/portret-01.jpg",
  gastronomia: "/images/gastronomia/gastronomia-01.jpg",
  wnetrza: "/images/wnetrza/wnetrza-01.jpg",
  event: "/images/event/event-01.jpg",
  biznes: "/images/biznes/biznes-01.jpg",
  lifestyle: "/images/lifestyle/lifestyle-01.jpg",
};

export default function Categories() {
  return (
    <section className="bg-graphite py-24 text-bone sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Specjalizacje"
          title="Sześć obszarów, jedno spojrzenie"
          description="Każda kategoria to inny kontekst, ale ten sam sposób patrzenia na światło i kompozycję."
          className="[&_h2]:text-bone [&_p]:text-bone/70"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {categoryOrder.map((category, idx) => (
            <RevealOnScroll key={category} delay={idx * 0.06}>
              <Link
                href={`/portfolio/${category}`}
                className="group relative block aspect-square overflow-hidden"
              >
                <Image
                  src={categoryCovers[category] ?? "/images/lifestyle/lifestyle-01.jpg"}
                  alt={categoryLabels[category]}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/30 transition-colors duration-500 group-hover:bg-ink/10" />
                <span className="absolute bottom-4 left-4 font-serif text-lg sm:text-xl">
                  {categoryLabels[category]}
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
