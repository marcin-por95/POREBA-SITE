import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesTeaser() {
  return (
    <section className="border-y border-mist/40 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Oferta" title="W czym mogę pomóc" />
          <Button href="/uslugi" variant="ghost" className="px-0">
            Pełna oferta →
          </Button>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden bg-mist/40 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, idx) => (
            <RevealOnScroll key={service.slug} delay={idx * 0.05} y={12}>
              <Link
                href={`/uslugi#${service.slug}`}
                className="group flex h-full flex-col justify-between bg-bone p-8 transition-colors duration-500 hover:bg-ink hover:text-bone"
              >
                <div>
                  <span className="eyebrow text-stone group-hover:text-bone/50">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-xl">{service.title}</h3>
                  <p className="mt-3 text-sm text-stone group-hover:text-bone/70">
                    {service.shortDescription}
                  </p>
                </div>
                <span className="mt-6 text-sm uppercase tracking-widest2">Dowiedz się więcej →</span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
