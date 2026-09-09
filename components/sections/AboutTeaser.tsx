import Image from "next/image";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";

export default function AboutTeaser() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/o-mnie/portret-autora.jpg"
            alt="Portret autora — Pøreba Fotografia"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="eyebrow mb-4">O mnie</p>
          <h2 className="text-display-2 font-light">
            Fotografia to dla mnie<br />precyzja i uwaga na szczegół.
          </h2>
          <p className="mt-6 max-w-lg text-stone">
            Od kilku lat współpracuję z restauracjami, hotelami, markami i osobami prywatnymi na
            terenie Lublina i całej Polski. Zależy mi na tym, aby każde zdjęcie miało konkretny cel —
            czy to sprzedaż pokoju hotelowego, budowanie zaufania do eksperta, czy zachęcenie do
            odwiedzenia restauracji.
          </p>
          <div className="mt-8">
            <Button href="/o-mnie" variant="secondary">
              Poznaj mnie bliżej
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
