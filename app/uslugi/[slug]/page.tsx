import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { services, getServiceBySeoSlug } from "@/data/services";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.seoSlug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySeoSlug(slug);

  if (!service) return {};

  return buildMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/uslugi/${service.seoSlug}`,
    image: service.image.src,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySeoSlug(slug);

  if (!service) notFound();

  const serviceUrl = `${site.url}/uslugi/${service.seoSlug}`;
  const portfolioHref =
    service.category === "content" ? "/portfolio/lifestyle" : `/portfolio/${service.category}`;
  const relatedProjects =
    service.category === "content"
      ? []
      : projects.filter((project) => project.category === service.category).slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: service.seoTitle,
        serviceType: service.title,
        description: service.metaDescription,
        url: serviceUrl,
        image: `${site.url}${service.image.src}`,
        provider: {
          "@id": `${site.url}/#business`,
        },
        areaServed: [
          { "@type": "City", name: site.location.city },
          { "@type": "AdministrativeArea", name: site.location.region },
          { "@type": "Country", name: site.location.country },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${serviceUrl}#faq`,
        mainEntity: service.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${serviceUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Strona główna", item: site.url },
          { "@type": "ListItem", position: 2, name: "Usługi", item: `${site.url}/uslugi` },
          { "@type": "ListItem", position: 3, name: service.seoTitle, item: serviceUrl },
        ],
      },
    ],
  };

  return (
    <article className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-stone">PØREBA Fotografia · Lublin</p>
            <h1 className="mt-4 text-display-2 font-light">{service.seoTitle}</h1>
            <p className="mt-6 max-w-xl text-lg text-stone">{service.shortDescription}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/kontakt">Zapytaj o wycenę</Button>
              <Button href={portfolioHref} variant="ghost">
                Zobacz portfolio →
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-graphite/10">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="mx-auto mt-24 max-w-3xl border-t border-mist/40 pt-14">
          <h2 className="text-display-3 font-light">Profesjonalna realizacja dopasowana do celu</h2>
          <p className="mt-6 text-lg leading-8 text-graphite">{service.description}</p>
          <p className="mt-5 leading-7 text-stone">{service.contextDescription}</p>
        </section>

        <section className="mt-20 border-t border-mist/40 pt-14">
          <p className="eyebrow text-stone">Zakres</p>
          <h2 className="mt-4 text-display-3 font-light">Co może obejmować współpraca</h2>
          <div className="mt-10 grid gap-px overflow-hidden bg-mist/40 sm:grid-cols-2 lg:grid-cols-4">
            {service.useCases.map((useCase) => (
              <div key={useCase} className="bg-bone p-7">
                <p>{useCase}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl border-t border-mist/40 pt-14">
          <h2 className="text-display-3 font-light">{service.detailsTitle}</h2>
          <div className="mt-6 flex flex-col gap-5 leading-7 text-stone">
            {service.detailsParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-mist/40 pt-14">
          <p className="eyebrow text-stone">Jak wygląda współpraca</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {service.process.map((step, index) => (
              <div key={step.title}>
                <span className="eyebrow text-stone">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 leading-7 text-stone">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="mt-20 border-t border-mist/40 pt-14">
            <p className="eyebrow text-stone">Realizacje</p>
            <h2 className="mt-4 text-display-3 font-light">Zobacz podobne projekty</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/realizacje/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-graphite/10">
                    <Image
                      src={project.coverImage.src}
                      alt={project.coverImage.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-widest2 text-stone">
                    {project.location} · {project.year}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{project.title}</h3>
                  <p className="mt-2 text-sm text-stone">Zobacz realizację →</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-20 border-t border-mist/40 pt-14">
          <h2 className="text-display-3 font-light">Fotograf w Lublinie i realizacje w całej Polsce</h2>
          <p className="mt-5 max-w-2xl leading-7 text-stone">
            Bazuję w Lublinie i tutaj realizuję większość lokalnych sesji, ale pracuję również poza województwem
            lubelskim. Przy projektach wyjazdowych zakres, harmonogram i dojazd ustalam indywidualnie przed realizacją.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={portfolioHref} className="link-underline text-sm uppercase tracking-widest2">
              Zobacz powiązane portfolio →
            </Link>
            <Link href="/realizacje" className="link-underline text-sm uppercase tracking-widest2">
              Zobacz pełne realizacje →
            </Link>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl border-t border-mist/40 pt-14">
          <p className="eyebrow text-stone">FAQ</p>
          <h2 className="mt-4 text-display-3 font-light">Najczęstsze pytania</h2>
          <div className="mt-8 divide-y divide-mist/40 border-y border-mist/40">
            {service.faq.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="cursor-pointer list-none pr-8 font-serif text-xl">
                  {item.question}
                  <span className="float-right text-stone transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-7 text-stone">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-mist/40 pt-16 text-center">
          <h2 className="font-serif text-4xl font-light">Masz projekt do sfotografowania?</h2>
          <p className="mx-auto mt-5 max-w-xl text-stone">
            Napisz kilka słów o miejscu, planowanym terminie i zakresie. Przygotuję indywidualną wycenę.
          </p>
          <div className="mt-8">
            <Button href="/kontakt">Porozmawiajmy</Button>
          </div>
        </section>
      </Container>
    </article>
  );
}
