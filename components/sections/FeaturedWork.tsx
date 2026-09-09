import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { getFeaturedProjects } from "@/data/projects";
import { categoryLabels } from "@/types/project";

export default function FeaturedWork() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Wybrane realizacje" title="Ostatnie projekty" />
          <Button href="/realizacje" variant="ghost" className="px-0">
            Wszystkie realizacje →
          </Button>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featured.map((project, idx) => (
            <RevealOnScroll key={project.slug} delay={idx * 0.1}>
              <Link href={`/realizacje/${project.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
                  <Image
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="font-serif text-xl">{project.title}</h3>
                  <span className="eyebrow text-stone">{project.year}</span>
                </div>
                <p className="mt-1 text-sm text-stone">{categoryLabels[project.category]}</p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
