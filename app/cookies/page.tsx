import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Polityka cookies",
  description:
    "Polityka cookies serwisu PØREBA Fotografia — informacje o plikach cookies, technologiach niezbędnych i zarządzaniu ustawieniami przeglądarki.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <div className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container className="max-w-3xl">
        <h1 className="text-display-3 font-light">Polityka cookies</h1>
        <p className="mt-4 text-sm text-stone">Ostatnia aktualizacja: 10 września 2026 r.</p>

        <div className="mt-10 flex flex-col gap-8 text-graphite">
          <p>
            Niniejsza polityka wyjaśnia, w jaki sposób serwis <strong>{site.name}</strong> korzysta z
            plików cookies i podobnych technologii oraz jakie możliwości zarządzania nimi ma
            użytkownik.
          </p>

          <section>
            <h2 className="font-serif text-xl text-ink">1. Czym są pliki cookies</h2>
            <p className="mt-2">
              Cookies to niewielkie informacje zapisywane w urządzeniu użytkownika podczas
              korzystania ze strony internetowej. Mogą służyć m.in. do zapewnienia prawidłowego
              działania serwisu, zapamiętywania ustawień, prowadzenia statystyk lub działań
              marketingowych.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">2. Jak serwis korzysta obecnie z cookies</h2>
            <p className="mt-2">
              Serwis <strong>{site.name}</strong> nie wykorzystuje obecnie Google Analytics, Meta
              Pixela ani innych narzędzi reklamowych lub analitycznych zapisujących opcjonalne pliki
              cookies w urządzeniu użytkownika.
            </p>
            <p className="mt-2">
              Kod serwisu nie zapisuje również własnych cookies służących do profilowania,
              remarketingu ani śledzenia zachowania użytkowników pomiędzy stronami.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">3. Technologie niezbędne</h2>
            <p className="mt-2">
              W związku z technicznym działaniem strony mogą być wykorzystywane rozwiązania
              niezbędne do prawidłowego wyświetlania serwisu, zapewnienia bezpieczeństwa,
              obsługi żądań użytkownika lub ochrony przed nadużyciami. Technologie, które są
              ściśle niezbędne do świadczenia usługi żądanej przez użytkownika, mogą być stosowane
              bez odrębnej zgody w zakresie dopuszczonym przez obowiązujące przepisy.
            </p>
            <p className="mt-2">
              Informacje techniczne przetwarzane po stronie serwera, takie jak adres IP czy logi
              połączeń, zostały opisane szerzej w{" "}
              <Link href="/polityka-prywatnosci" className="link-underline text-ink">
                polityce prywatności
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">4. Dlaczego strona nie wyświetla obecnie banera zgód</h2>
            <p className="mt-2">
              Ponieważ serwis nie korzysta obecnie z opcjonalnych cookies analitycznych,
              marketingowych ani profilujących, nie jest wyświetlany baner służący do wyrażania zgody
              na takie kategorie.
            </p>
            <p className="mt-2">
              Jeżeli w przyszłości zostaną wdrożone rozwiązania wymagające zgody — np. Google
              Analytics, Meta Pixel lub inne narzędzia reklamowe — zostaną one uruchomione dopiero
              po wdrożeniu odpowiedniego mechanizmu zarządzania zgodami, a niniejsza polityka zostanie
              zaktualizowana.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">5. Ustawienia przeglądarki</h2>
            <p className="mt-2">
              Użytkownik może samodzielnie kontrolować i usuwać pliki cookies za pomocą ustawień
              swojej przeglądarki internetowej. Możliwe jest m.in. blokowanie zapisywania cookies,
              usuwanie już zapisanych plików oraz ustawienie powiadomień o próbach ich zapisania.
            </p>
            <p className="mt-2">
              Ograniczenie działania cookies niezbędnych technicznie może w niektórych przypadkach
              wpłynąć na prawidłowe działanie części funkcji stron internetowych.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">6. Linki i serwisy zewnętrzne</h2>
            <p className="mt-2">
              Na stronie mogą znajdować się odnośniki do serwisów zewnętrznych, np. Instagrama.
              Po przejściu do zewnętrznego serwisu użytkownik podlega zasadom prywatności i cookies
              obowiązującym u jego operatora. {site.name} nie ma wpływu na pliki cookies zapisywane
              przez zewnętrzne serwisy po opuszczeniu tej strony.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">7. Zmiany polityki cookies</h2>
            <p className="mt-2">
              Polityka może być aktualizowana w przypadku zmian w sposobie działania serwisu,
              wdrożenia nowych narzędzi, zmian dostawców technologicznych lub zmian przepisów.
              Aktualna wersja jest zawsze publikowana na tej stronie wraz z datą ostatniej
              aktualizacji.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">8. Kontakt</h2>
            <p className="mt-2">
              Pytania dotyczące cookies i prywatności można kierować na adres:{" "}
              <a href={`mailto:${site.contact.email}`} className="link-underline text-ink">
                {site.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
