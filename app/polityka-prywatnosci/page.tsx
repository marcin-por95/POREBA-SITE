import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Polityka prywatności",
  description:
    "Polityka prywatności serwisu PØREBA Fotografia — informacje o przetwarzaniu danych osobowych, formularzu kontaktowym, wizerunku i prawach użytkowników.",
  path: "/polityka-prywatnosci",
});

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="pb-24 pt-36 sm:pb-32 sm:pt-44">
      <Container className="max-w-3xl">
        <h1 className="text-display-3 font-light">Polityka prywatności</h1>
        <p className="mt-4 text-sm text-stone">Ostatnia aktualizacja: 10 września 2026 r.</p>

        <div className="prose-content mt-10 flex flex-col gap-8 text-graphite">
          <p>
            Poniższa polityka wyjaśnia, w jaki sposób przetwarzane są dane osobowe osób korzystających
            z serwisu <strong>{site.url.replace(/^https?:\/\//, "")}</strong>, kontaktujących się przez
            formularz lub e-mail oraz osób, których wizerunek może być wykorzystywany w związku z
            realizacją usług fotograficznych i prezentacją portfolio.
          </p>

          <section>
            <h2 className="font-serif text-xl text-ink">1. Administrator danych</h2>
            <p className="mt-2">
              Administratorem danych osobowych jest <strong>{site.owner}</strong>, prowadzący serwis pod
              marką <strong>{site.name}</strong>.
            </p>
            <p className="mt-2">
              W sprawach dotyczących prywatności i danych osobowych można kontaktować się pod adresem:{" "}
              <a className="link-underline" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
              .
            </p>
            <p className="mt-2">Administrator nie wyznaczył inspektora ochrony danych.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">2. Jakie dane mogą być przetwarzane</h2>
            <p className="mt-2">W zależności od sposobu kontaktu mogą być przetwarzane w szczególności:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>imię i nazwisko,</li>
              <li>adres e-mail,</li>
              <li>numer telefonu, jeżeli zostanie podany,</li>
              <li>wybrany typ realizacji i informacje przekazane w wiadomości,</li>
              <li>dane zawarte w dalszej korespondencji związanej z wyceną lub realizacją zlecenia,</li>
              <li>
                dane techniczne związane z korzystaniem ze strony, takie jak adres IP, informacje o
                urządzeniu, przeglądarce oraz logi serwera,
              </li>
              <li>
                wizerunek utrwalony na fotografii lub materiale wideo, jeżeli pozwala na identyfikację
                osoby.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">3. Cele i podstawy prawne przetwarzania</h2>
            <p className="mt-2">Dane osobowe mogą być przetwarzane w następujących celach:</p>
            <ul className="mt-3 list-disc space-y-3 pl-5">
              <li>
                <strong>odpowiedź na zapytanie, przygotowanie wyceny i ustalenie warunków współpracy</strong>{" "}
                — na podstawie art. 6 ust. 1 lit. b RODO, gdy przetwarzanie jest niezbędne do podjęcia
                działań przed zawarciem umowy;
              </li>
              <li>
                <strong>prowadzenie bieżącej korespondencji i organizacja współpracy</strong> — na
                podstawie art. 6 ust. 1 lit. b RODO albo art. 6 ust. 1 lit. f RODO, czyli prawnie
                uzasadnionego interesu polegającego na sprawnej komunikacji;
              </li>
              <li>
                <strong>ustalenie, dochodzenie lub obrona przed roszczeniami</strong> — na podstawie art.
                6 ust. 1 lit. f RODO;
              </li>
              <li>
                <strong>zapewnienie bezpieczeństwa strony i ochrona przed nadużyciami lub spamem</strong>{" "}
                — na podstawie art. 6 ust. 1 lit. f RODO;
              </li>
              <li>
                <strong>publikacja fotografii lub materiałów zawierających wizerunek</strong> — wyłącznie
                wtedy, gdy istnieje odpowiednia podstawa prawna. Zależnie od sytuacji może nią być m.in.
                zgoda osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO), wykonanie uzgodnionej
                umowy lub prawnie uzasadniony interes, z uwzględnieniem przepisów dotyczących
                rozpowszechniania wizerunku.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">4. Formularz kontaktowy</h2>
            <p className="mt-2">
              Formularz kontaktowy służy do przesyłania zapytań dotyczących sesji, realizacji
              fotograficznych i innych usług oferowanych przez {site.name}. Podanie imienia i nazwiska,
              adresu e-mail, typu realizacji oraz treści wiadomości jest niezbędne do obsługi zapytania.
              Numer telefonu jest dobrowolny.
            </p>
            <p className="mt-2">
              Dane przesłane przez formularz nie są wykorzystywane do wysyłania newslettera ani
              automatycznych wiadomości marketingowych bez odrębnej podstawy prawnej.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">5. Fotografie i wizerunek</h2>
            <p className="mt-2">
              W ramach działalności fotograficznej mogą powstawać zdjęcia i materiały wideo, na których
              widoczne są osoby fizyczne. Jeżeli wizerunek pozwala zidentyfikować osobę, może stanowić
              daną osobową.
            </p>
            <p className="mt-2">
              Publikacja takich materiałów w portfolio, na stronie internetowej lub w kanałach social
              media odbywa się wyłącznie wtedy, gdy istnieje odpowiednia podstawa prawna oraz — gdy jest
              to wymagane — zezwolenie na rozpowszechnianie wizerunku. W przypadku osób małoletnich
              odpowiednie zgody lub zezwolenia są uzyskiwane od przedstawiciela ustawowego, jeśli jest
              to wymagane przepisami.
            </p>
            <p className="mt-2">
              Jeżeli podstawą przetwarzania wizerunku jest zgoda, można ją wycofać na przyszłość,
              kontaktując się pod adresem {site.contact.email}. Wycofanie zgody nie wpływa na zgodność z
              prawem przetwarzania dokonanego przed jej wycofaniem.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">6. Odbiorcy danych i dostawcy usług</h2>
            <p className="mt-2">
              Dane mogą być powierzane podmiotom technicznym wyłącznie w zakresie potrzebnym do
              działania serwisu i obsługi korespondencji. Obecnie należą do nich w szczególności:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Vercel Inc.</strong> — hosting i infrastruktura techniczna strony,
              </li>
              <li>
                <strong>Resend</strong> — obsługa wysyłki wiadomości z formularza kontaktowego,
              </li>
              <li>dostawcy poczty elektronicznej i innych usług IT używanych do obsługi korespondencji.</li>
            </ul>
            <p className="mt-2">
              Dane nie są sprzedawane. Mogą zostać udostępnione innym podmiotom tylko wtedy, gdy jest to
              niezbędne do wykonania usługi, wynika z przepisów prawa albo wymaga tego uprawniony organ.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">7. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
            <p className="mt-2">
              Niektórzy dostawcy infrastruktury, w tym Vercel i Resend, są podmiotami działającymi także
              w Stanach Zjednoczonych. W związku z korzystaniem z ich usług dane mogą być przetwarzane
              poza Europejskim Obszarem Gospodarczym.
            </p>
            <p className="mt-2">
              W takich przypadkach przekazywanie danych odbywa się z wykorzystaniem mechanizmów
              przewidzianych przez RODO, w szczególności decyzji stwierdzającej odpowiedni stopień
              ochrony w ramach EU-U.S. Data Privacy Framework lub standardowych klauzul umownych, jeśli
              są wymagane.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">8. Jak długo przechowywane są dane</h2>
            <ul className="mt-3 list-disc space-y-3 pl-5">
              <li>
                dane z zapytań, które nie zakończą się współpracą, są co do zasady przechowywane nie
                dłużej niż 12 miesięcy od zakończenia korespondencji, chyba że dalsze przechowywanie jest
                uzasadnione ochroną przed roszczeniami;
              </li>
              <li>
                dane związane z realizacją współpracy mogą być przechowywane przez czas jej trwania, a
                następnie przez okres niezbędny do rozliczenia współpracy, spełnienia obowiązków
                wynikających z prawa oraz do czasu upływu właściwych terminów przedawnienia roszczeń;
              </li>
              <li>
                dane przetwarzane na podstawie zgody są przechowywane do czasu jej wycofania, chyba że
                istnieje inna podstawa prawna dalszego przetwarzania;
              </li>
              <li>
                logi techniczne mogą być przechowywane przez okres wynikający z ustawień i zasad
                bezpieczeństwa dostawcy hostingu, nie dłużej niż jest to potrzebne do celów technicznych
                i bezpieczeństwa.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">9. Prawa osób, których dane dotyczą</h2>
            <p className="mt-2">Na zasadach określonych w RODO przysługuje prawo do:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>dostępu do swoich danych i otrzymania ich kopii,</li>
              <li>sprostowania danych,</li>
              <li>usunięcia danych, gdy zachodzą ku temu podstawy,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przenoszenia danych — w przypadkach przewidzianych przez RODO,</li>
              <li>
                wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,
              </li>
              <li>wycofania zgody w dowolnym momencie, jeżeli przetwarzanie odbywa się na jej podstawie.</li>
            </ul>
            <p className="mt-3">
              W celu realizacji swoich praw można napisać na {site.contact.email}. Przysługuje również
              prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">10. Dane techniczne, cookies i analityka</h2>
            <p className="mt-2">
              Podczas korzystania ze strony serwer może automatycznie zapisywać podstawowe informacje
              techniczne, w szczególności adres IP, datę i czas żądania, rodzaj urządzenia lub
              przeglądarki oraz informacje potrzebne do zapewnienia bezpieczeństwa i prawidłowego
              działania serwisu.
            </p>
            <p className="mt-2">
              Obecnie serwis nie korzysta z Google Analytics, Meta Pixel ani innych narzędzi służących
              do marketingowego profilowania użytkowników. Jeżeli w przyszłości zostaną wdrożone
              narzędzia analityczne lub marketingowe wymagające zgody, użytkownik otrzyma możliwość
              dokonania odpowiedniego wyboru, a niniejsza polityka zostanie zaktualizowana.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">11. Zautomatyzowane podejmowanie decyzji</h2>
            <p className="mt-2">
              Dane użytkowników nie są wykorzystywane do zautomatyzowanego podejmowania decyzji, które
              wywoływałyby wobec nich skutki prawne, ani do profilowania marketingowego.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink">12. Zmiany polityki prywatności</h2>
            <p className="mt-2">
              Polityka może być aktualizowana w przypadku zmiany sposobu działania strony, wdrożenia
              nowych usług lub narzędzi albo zmiany wymagań prawnych. Aktualna wersja jest zawsze
              dostępna pod adresem {site.url}/polityka-prywatnosci.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
