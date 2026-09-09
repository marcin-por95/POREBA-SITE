import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { services, getServiceBySeoSlug } from "@/data/services";
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
  const portfolioHref = service.category === "content" ? "/portfolio/lifestyle" : `/portfolio/${service.category}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.seoTitle,
      description: service.metaDescription,
      url: serviceUrl,
      image: `${site.url}${service.image.src}`,
      provider: {
        "@id": `${site.url}/#business`,
      },
      areaServed: [
        { "@type": "City", name: site.location.city },
        { "@type": "Country", name: site.location.country },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: site.url },
        { "@type": "ListItem", position: 2, name: "Usługi", item: `${site.url}/uslugi` },
        { "@type": "ListItem", position: 3, name: service.seoTitle, item: serviceUrl },
      ],
    },
  ];

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
              <Button href={portfolioHref} variant="ghost">Zobacz portfolio →</Button>
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
          <p className="mt-5 leading-7 text-stone">
            Każdą sesję planuję pod konkretne miejsce publikacji: stronę internetową, Google Business Profile,
            social media, materiały reklamowe, portale rezerwacyjne albo komunikację firmową. Dzięki temu kadry
            powstają z myślą o ich realnym zastosowaniu, a nie tylko jako pojedyncze atrakcyjne zdjęcia.
          </p>
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

        <section className="mt-20 grid gap-8 border-t border-mist/40 pt-14 md:grid-cols-3">
          <div>
            <span className="eyebrow text-stone">01</span>
            <h3 className="mt-3 font-serif text-2xl">Brief i plan</h3>
            <p className="mt-3 text-stone">Ustalamy cel materiału, miejsce publikacji, liczbę ujęć oraz charakter marki.</p>
          </div>
          <div>
            <span className="eyebrow text-stone">02</span>
            <h3 className="mt-3 font-serif text-2xl">Sesja</h3>
            <p className="mt-3 text-stone">Realizuję zaplanowane kadry, dbając o światło, spójność i naturalny charakter materiału.</p>
          </div>
          <div>
            <span className="eyebrow text-stone">03</span>
            <h3 className="mt-3 font-serif text-2xl">Postprodukcja</h3>
            <p className="mt-3 text-stone">Selekcjonuję i obrabiam zdjęcia tak, aby były gotowe do publikacji w ustalonych kanałach.</p>
          </div>
        </section>

        <section className="mt-20 border-t border-mist/40 pt-14">
          <h2 className="text-display-3 font-light">Realizacje w Lublinie i całej Polsce</h2>
          <p className="mt-5 max-w-2xl text-stone">
            Bazuję w Lublinie, ale realizuję sesje również poza województwem lubelskim. Przy większych projektach
            zakres, harmonogram i dojazd ustalam indywidualnie przed realizacją.
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
