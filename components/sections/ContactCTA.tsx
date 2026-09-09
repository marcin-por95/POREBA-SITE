import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function ContactCTA() {
  return (
    <section className="bg-ink py-28 text-bone sm:py-36">
      <Container className="text-center">
        <RevealOnScroll>
          <p className="eyebrow text-bone/50">Współpraca</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-display-2 font-light italic">
            Masz projekt, który wymaga dobrego zdjęcia?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-bone/70">
            Napisz kilka słów o projekcie — odpowiadam zwykle w ciągu 24 godzin.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/kontakt" className="bg-bone text-ink hover:bg-mist">
              Porozmawiajmy
            </Button>
            <Button
              href={`mailto:${site.contact.email}`}
              variant="secondary"
              className="border-bone text-bone hover:bg-bone hover:text-ink"
            >
              {site.contact.email}
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
