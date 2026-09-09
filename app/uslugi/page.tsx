import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Usługi",
  description:
    "Fotografia gastronomiczna, wnętrz i hoteli, portretowa, biznesowa, eventowa oraz content dla social media. Fotograf Lublin — wycena indywidualna.",
  path: "/uslugi",
});

export default function UslugiPage() {
  return (
    <div className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container>
        <SectionHeading
          eyebrow="Usługi"
          title="Oferta dopasowana do celu"
          description="Każda usługa wygląda inaczej w zależności od branży i odbiorcy — poniżej znajdziesz zakres i typowe zastosowania."
        />
      </Container>

      <div className="mt-20 flex flex-col">
        {services.map((service, idx) => (
          <section
            id={service.slug}
            key={service.slug}
            className="scroll-mt-28 border-t border-mist/40 py-16 first:border-t-0 sm:py-20"
          >
            <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <RevealOnScroll
                className={idx % 2 === 1 ? "lg:order-2 relative aspect-[4/5] overflow-hidden" : "relative aspect-[4/5] overflow-hidden"}
              >
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <span className="eyebrow text-stone">{String(idx + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 text-display-3 font-light">{service.title}</h2>
                <p className="mt-5 max-w-lg text-stone">{service.description}</p>
                <ul className="mt-6 flex flex-col gap-2 text-sm">
                  {service.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-center gap-3 text-graphite">
                      <span className="h-px w-4 bg-stone" aria-hidden />
                      {useCase}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/kontakt" variant="primary">
                    Zapytaj o wycenę
                  </Button>
                  <span className="text-sm text-stone">Wycena indywidualna</span>
                </div>
              </RevealOnScroll>
            </Container>
          </section>
        ))}
      </div>
    </div>
  );
}
