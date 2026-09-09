import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Polityka prywatności",
  description: "Polityka prywatności serwisu Pøreba Fotografia.",
  path: "/polityka-prywatnosci",
});

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container className="max-w-3xl">
        <h1 className="text-display-3 font-light">Polityka prywatności</h1>
        <p className="mt-4 text-sm text-stone">Ostatnia aktualizacja: [uzupełnić datę]</p>

        <div className="prose-content mt-10 flex flex-col gap-6 text-graphite">
          <p>
            <strong>To jest treść przykładowa (placeholder).</strong> Przed publikacją strony zastąp
            poniższe punkty właściwą treścią przygotowaną przez prawnika lub na podstawie oficjalnego
            wzoru dopasowanego do zakresu przetwarzanych danych.
          </p>

          <section>
            <h2 className="font-serif text-xl text-ink">1. Administrator danych</h2>
            <p className="mt-2">
              Administratorem danych osobowych zbieranych za pośrednictwem formularza kontaktowego jest{" "}
              {site.legalName}, kontakt: {site.contact.email}. [Uzupełnić o dane rejestrowe, jeśli
              dotyczy — NIP, adres siedziby.]
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">2. Zakres i cel przetwarzania danych</h2>
            <p className="mt-2">
              Dane podane w formularzu kontaktowym (imię i nazwisko, adres e-mail, telefon, treść
              wiadomości) przetwarzane są wyłącznie w celu odpowiedzi na zapytanie oraz przygotowania
              oferty. [Uzupełnić podstawę prawną przetwarzania zgodnie z RODO.]
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">3. Okres przechowywania danych</h2>
            <p className="mt-2">[Uzupełnić informację o okresie przechowywania korespondencji.]</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">4. Prawa użytkownika</h2>
            <p className="mt-2">
              [Uzupełnić informacje o prawie dostępu do danych, ich sprostowania, usunięcia,
              ograniczenia przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu, a także
              o prawie wniesienia skargi do Prezesa UODO.]
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">5. Podmioty przetwarzające</h2>
            <p className="mt-2">
              W celu obsługi formularza kontaktowego korzystamy z usługi Resend (wysyłka wiadomości
              e-mail) oraz hostingu Vercel. [Uzupełnić pełną listę podmiotów przetwarzających dane po
              podłączeniu analityki i CMS.]
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
