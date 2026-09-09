import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Fotograf Lublin — kontakt i wycena",
  description:
    "Skontaktuj się z PØREBA Fotografia w sprawie sesji w Lublinie i całej Polsce — gastronomia, wnętrza, biznes, portret, event i content social media.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <div className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <div>
          <RevealOnScroll>
            <SectionHeading
              as="h1"
              eyebrow="Kontakt"
              title="Fotograf Lublin — kontakt i wycena sesji"
              description="Napisz kilka słów o tym, czego potrzebujesz — miejsce, przybliżony termin i zakres. Odpowiadam zwykle w ciągu 24 godzin."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="mt-12 flex flex-col gap-6 border-t border-mist/40 pt-8">
            <div>
              <p className="eyebrow text-stone">Email</p>
              <a href={`mailto:${site.contact.email}`} className="mt-1 block w-fit font-serif text-xl link-underline">
                {site.contact.email}
              </a>
            </div>
            <div>
              <p className="eyebrow text-stone">Instagram</p>
              <a
                href={site.contact.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block w-fit font-serif text-xl link-underline"
              >
                {site.contact.instagram.handle}
              </a>
            </div>
            <div>
              <p className="eyebrow text-stone">Lokalizacja</p>
              <p className="mt-1 font-serif text-xl">{site.location.city} / {site.location.country}</p>
              <p className="mt-1 text-sm text-stone">{site.location.serviceArea}</p>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.15}>
          <ContactForm />
        </RevealOnScroll>
      </Container>
    </div>
  );
}
