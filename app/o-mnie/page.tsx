import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Marcin Poręba — fotograf Lublin",
  description:
    "Marcin Poręba — fotograf komercyjny z Lublina. Fotografia gastronomiczna, wnętrz i hoteli, biznesowa, portretowa oraz eventowa w całej Polsce.",
  path: "/o-mnie",
});

export default function OMniePage() {
  return (
    <div className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <RevealOnScroll className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-32">
          <Image
            src="/images/o-mnie/portret-autora.jpg"
            alt="Marcin Poręba — fotograf w Lublinie"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </RevealOnScroll>

        <div>
          <RevealOnScroll>
            <p className="eyebrow mb-4">O mnie</p>
            <h1 className="text-display-2 font-light">Marcin Poręba — fotograf z Lublina</h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="mt-8 flex flex-col gap-5 text-lg text-graphite">
            <p>
              Zajmuję się fotografią komercyjną w Lublinie i na terenie całej Polski. Pracuję głównie z restauracjami,
              hotelami, markami oraz osobami, które potrzebują profesjonalnego portretu do materiałów firmowych.
            </p>
            <p>
              Zanim zacznę sesję, staram się zrozumieć, do czego zdjęcia będą wykorzystane — inaczej fotografuje się
              danie na stronę internetową, a inaczej na potrzeby reklamy. Ten kontekst wpływa na światło, kompozycję
              i sposób pracy na miejscu.
            </p>
            <p>
              W pracy cenię prostotę i rzetelność — zarówno w komunikacji z klientem, jak i w samym podejściu do kadru.
              Zależy mi na zdjęciach, które pozostają aktualne i naturalne również długo po publikacji.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="mt-10 grid grid-cols-2 gap-6 border-t border-mist/40 pt-8 sm:grid-cols-3">
            {[
              ["Obszar działania", "Lublin i cała Polska"],
              ["Specjalizacje", "Gastronomia, wnętrza, biznes"],
              ["Współpraca", "Firmy i klienci indywidualni"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="eyebrow text-stone">{label}</p>
                <p className="mt-2 text-sm">{value}</p>
              </div>
            ))}
          </RevealOnScroll>

          <RevealOnScroll delay={0.25} className="mt-10">
            <Button href="/kontakt">Napisz do mnie</Button>
          </RevealOnScroll>
        </div>
      </Container>
    </div>
  );
}
