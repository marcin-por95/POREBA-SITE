import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { getAllProjectsSorted } from "@/data/projects";
import { categoryLabels } from "@/types/project";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Realizacje fotograficzne Lublin",
  description:
    "Wybrane realizacje fotograficzne PØREBA Fotografia: hotele, restauracje, sesje portretowe i eventy firmowe w Lublinie oraz całej Polsce.",
  path: "/realizacje",
});

export default function RealizacjePage() {
  const projects = getAllProjectsSorted();

  return (
    <div className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Realizacje"
          title="Realizacje fotograficzne — Lublin i cała Polska"
          description="Pełne historie wybranych współprac: hotele, restauracje, portrety i wydarzenia — od briefu, przez sesję, po gotowy materiał."
        />

        <div className="mt-16 flex flex-col divide-y divide-mist/40">
          {projects.map((project, idx) => (
            <RevealOnScroll key={project.slug} delay={idx * 0.05}>
              <Link
                href={`/realizacje/${project.slug}`}
                className="group grid items-center gap-6 py-10 sm:grid-cols-[1fr_1.4fr] sm:gap-10"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-graphite/10">
                  <Image
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    fill
                    sizes="(min-width: 640px) 40vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
                  />
                </div>
                <div>
                  <span className="eyebrow text-stone">
                    {categoryLabels[project.category]} · {project.location} · {project.year}
                  </span>
                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{project.title}</h2>
                  <p className="mt-4 max-w-lg text-stone">{project.description}</p>
                  <span className="mt-6 inline-block text-sm uppercase tracking-widest2 link-underline">
                    Zobacz realizację →
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </div>
  );
}
