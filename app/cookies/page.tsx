import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Cookies",
  description: "Informacje o wykorzystaniu plików cookies w serwisie Pøreba Fotografia.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <div className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container className="max-w-3xl">
        <h1 className="text-display-3 font-light">Polityka cookies</h1>
        <p className="mt-4 text-sm text-stone">Ostatnia aktualizacja: [uzupełnić datę]</p>

        <div className="mt-10 flex flex-col gap-6 text-graphite">
          <p>
            <strong>To jest treść przykładowa (placeholder).</strong> Zastąp poniższe punkty właściwą
            treścią przed publikacją strony — szczególnie po podłączeniu Google Analytics i Meta
            Pixel.
          </p>

          <section>
            <h2 className="font-serif text-xl text-ink">1. Czym są pliki cookies</h2>
            <p className="mt-2">
              Cookies to niewielkie pliki tekstowe zapisywane na urządzeniu użytkownika, wykorzystywane
              m.in. do zapewnienia prawidłowego działania strony oraz — po wyrażeniu zgody — do celów
              analitycznych i marketingowych.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">2. Jakich cookies używamy</h2>
            <p className="mt-2">
              [Uzupełnić po podłączeniu Google Analytics 4 i Meta Pixel: nazwy plików cookies, ich cel
              i okres przechowywania.]
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">3. Zarządzanie zgodami</h2>
            <p className="mt-2">
              [Jeśli zostaną podłączone narzędzia analityczne lub marketingowe wymagające zgody
              użytkownika, należy tutaj opisać sposób zarządzania zgodami — np. baner cookies
              z możliwością akceptacji lub odrzucenia poszczególnych kategorii.]
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">4. Zmiana ustawień przeglądarki</h2>
            <p className="mt-2">
              Użytkownik może samodzielnie zarządzać plikami cookies poprzez ustawienia swojej
              przeglądarki internetowej, w tym zablokować lub usunąć pliki cookies.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
