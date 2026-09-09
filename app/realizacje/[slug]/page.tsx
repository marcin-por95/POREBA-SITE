import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GalleryGrid from "@/components/portfolio/GalleryGrid";
import { getAdjacentProject, getProjectBySlug, projects } from "@/data/projects";
import { categoryLabels } from "@/types/project";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/realizacje/${project.slug}`,
    image: project.coverImage.src,
  });
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const next = getAdjacentProject(project.slug);
  const galleryImages = project.gallery.map((img) => ({ ...img, category: project.category }));

  return (
    <article className="pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-graphite">
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <Container className="mt-12">
        <RevealOnScroll>
          <span className="eyebrow text-stone">
            {categoryLabels[project.category]} · {project.location} · {project.year}
          </span>
          <h1 className="mt-4 text-display-2 font-light">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">{project.description}</p>
          <dl className="mt-8 grid max-w-md grid-cols-2 gap-6 border-t border-mist/40 pt-6 text-sm">
            <div>
              <dt className="eyebrow text-stone">Klient</dt>
              <dd className="mt-1">{project.client}</dd>
            </div>
            <div>
              <dt className="eyebrow text-stone">Lokalizacja</dt>
              <dd className="mt-1">{project.location}</dd>
            </div>
          </dl>
        </RevealOnScroll>

        <div className="mt-16">
          <GalleryGrid images={galleryImages} />
        </div>

        {next && (
          <div className="mt-24 border-t border-mist/40 pt-10 text-center">
            <p className="eyebrow text-stone">Następna realizacja</p>
            <Link href={`/realizacje/${next.slug}`} className="mt-4 inline-block font-serif text-3xl link-underline">
              {next.title} →
            </Link>
          </div>
        )}
      </Container>
    </article>
  );
}
