# Pøreba Fotografia — strona portfolio

Nowoczesna, produkcyjna strona portfolio fotograficznego zbudowana w Next.js 15 (App Router),
TypeScript, Tailwind CSS i Framer Motion.

---

## Spis treści

1. [Architektura projektu](#architektura-projektu)
2. [Uruchomienie lokalne](#1-jak-uruchomić-stronę-lokalnie)
3. [Dodawanie nowych zdjęć](#2-jak-dodawać-nowe-zdjęcia)
4. [Dodawanie nowych realizacji](#3-jak-dodawać-nowe-realizacje)
5. [GitHub](#4-jak-wrzucić-projekt-na-github)
6. [Vercel](#5-jak-podłączyć-vercel)
7. [Własna domena](#6-jak-podłączyć-własną-domenę)
8. [Environment variables](#7-jakie-environment-variables-muszę-ustawić)
9. [Checklist przed publikacją](#8-co-jeszcze-powinienem-skonfigurować-przed-oficjalną-publikacją)
10. [Podłączenie Sanity CMS w przyszłości](#podłączenie-sanity-cms-w-przyszłości)
11. [Ważna uwaga dot. weryfikacji kodu](#ważna-uwaga-dot-weryfikacji-kodu)

---

## Architektura projektu

```
app/
  layout.tsx              -> globalny layout, fonty, metadata
  page.tsx                -> strona główna (Home)
  globals.css
  sitemap.ts               -> generuje /sitemap.xml
  robots.ts                -> generuje /robots.txt
  not-found.tsx             -> customowa strona 404
  icon.png                  -> favicon / app icon
  portfolio/page.tsx        -> /portfolio (siatka + filtr kategorii + lightbox)
  realizacje/page.tsx       -> /realizacje (lista projektów)
  realizacje/[slug]/page.tsx -> /realizacje/<slug> (pojedyncza realizacja)
  uslugi/page.tsx           -> /uslugi
  o-mnie/page.tsx           -> /o-mnie
  kontakt/
    page.tsx                -> /kontakt
    actions.ts               -> Server Action wysyłający formularz (Resend)
  polityka-prywatnosci/page.tsx
  cookies/page.tsx

components/
  layout/     -> Header, MobileMenu, Footer
  ui/         -> Button, Container, SectionHeading, RevealOnScroll
  portfolio/  -> CategoryFilter, GalleryGrid, Lightbox, PortfolioBrowser
  sections/   -> Hero, FeaturedWork, Categories, AboutTeaser, ServicesTeaser, ContactCTA
  ContactForm.tsx

data/
  site.ts       -> dane marki, nawigacja, kontakt
  projects.ts    -> WSZYSTKIE realizacje i zdjęcia portfolio (jedno źródło prawdy)
  services.ts    -> oferta usług

types/
  project.ts    -> typy danych (Project, GalleryImage, kategorie) — 1:1 ze strukturą pod Sanity CMS

lib/
  metadata.ts   -> helper budujący metadane SEO/OG dla każdej podstrony
  utils.ts

public/images/  -> zdjęcia (patrz public/images/README.md)
```

Portfolio jest **oparte o dane** — żadna galeria nie jest ręcznie wpisana w komponentach.
Dodanie nowego zdjęcia lub realizacji to edycja plików w `data/`, nie kodu widoku.

---

## 1. Jak uruchomić stronę lokalnie

Wymagany Node.js 20+ (zalecane 20 LTS lub nowszy) oraz npm.

```bash
# 1. Zainstaluj zależności
npm install

# 2. Skopiuj plik zmiennych środowiskowych i uzupełnij wartości
cp .env.example .env.local

# 3. Uruchom serwer deweloperski
npm run dev
```

Strona będzie dostępna pod `http://localhost:3000`.

Przydatne komendy:

```bash
npm run lint       # ESLint
npm run typecheck  # sprawdzenie typów TypeScript
npm run build      # build produkcyjny
npm run start      # uruchomienie builda produkcyjnego lokalnie
```

**Uruchom `npm run lint`, `npm run typecheck` i `npm run build` zaraz po pierwszym
`npm install`** — patrz sekcja [Ważna uwaga dot. weryfikacji kodu](#ważna-uwaga-dot-weryfikacji-kodu)
poniżej, dlaczego to konieczne.

---

## 2. Jak dodawać nowe zdjęcia

1. Wrzuć plik `.jpg`/`.webp` do odpowiedniego folderu w `public/images/` (patrz
   `public/images/README.md` za konwencją nazw).
2. Zoptymalizuj zdjęcie przed wgraniem — docelowo maks. ok. 2400px po dłuższym boku,
   format JPG (quality ok. 80) lub WebP. `next/image` doda automatycznie warianty
   AVIF/WebP i responsywne rozmiary, ale im mniejszy plik źródłowy, tym szybszy build.
3. Dodaj wpis w odpowiednim pliku danych:
   - Zdjęcie do ogólnej siatki `/portfolio` bez własnej podstrony → dodaj obiekt do
     `portfolioExtras` w `data/projects.ts` (podaj `category`, `src`, `width`, `height`, `alt`).
   - Zdjęcie do konkretnej realizacji → dodaj do tablicy `gallery` danego projektu
     (patrz sekcja niżej).
4. Zawsze podawaj poprawne `width` i `height` — to zapobiega przeskokom layoutu (CLS)
   i jest wymagane przez `next/image`.

---

## 3. Jak dodawać nowe realizacje

1. Utwórz folder `public/images/projekty/<slug-realizacji>/` i wrzuć tam `cover.jpg`
   oraz zdjęcia do galerii (np. `g-1.jpg`, `g-2.jpg`, ...).
2. W `data/projects.ts` dodaj nowy obiekt do tablicy `projects`:

```ts
{
  title: "Nazwa realizacji",
  slug: "nazwa-realizacji",       // musi być unikalny, używany w URL /realizacje/<slug>
  category: "wnetrza",             // jedna z: portret | gastronomia | wnetrza | event | biznes | lifestyle
  client: "Nazwa klienta",
  location: "Miasto",
  year: 2026,
  description: "Krótki opis realizacji.",
  coverImage: {
    src: "/images/projekty/nazwa-realizacji/cover.jpg",
    width: 2400,
    height: 1600,
    alt: "Opis alternatywny zdjęcia głównego",
  },
  gallery: [
    { src: "/images/projekty/nazwa-realizacji/g-1.jpg", width: 1600, height: 2000, alt: "..." },
    // ...
  ],
  featured: true,   // czy ma się pojawić w sekcji "Ostatnie projekty" na stronie głównej
  order: 5,          // kolejność wyświetlania (mniejsza liczba = wyżej)
},
```

3. Strona `/realizacje/<slug>` oraz wpis na liście `/realizacje` wygenerują się automatycznie —
   nie trzeba tworzyć żadnego nowego pliku `.tsx`.
4. Aby zdjęcie z galerii projektu pojawiło się też w ogólnej siatce `/portfolio`, dodaj
   `featuredInGrid: true` przy danym zdjęciu w `gallery`.

---

## 4. Jak wrzucić projekt na GitHub

```bash
cd poreba-fotografia
git init
git add .
git commit -m "Init: strona Pøreba Fotografia"
git branch -M main
git remote add origin https://github.com/<twoja-nazwa-uzytkownika>/poreba-fotografia.git
git push -u origin main
```

Plik `.gitignore` jest już skonfigurowany tak, aby nie commitować `node_modules`,
`.next`, ani plików `.env*`.

---

## 5. Jak podłączyć Vercel

1. Wejdź na [vercel.com](https://vercel.com) i zaloguj się (najwygodniej przez konto GitHub).
2. Kliknij **Add New → Project** i wybierz repozytorium `poreba-fotografia`.
3. Vercel automatycznie rozpozna Next.js — nie trzeba zmieniać ustawień builda.
4. W sekcji **Environment Variables** dodaj zmienne z pliku `.env.example`
   (patrz sekcja 7 poniżej) — bez tego formularz kontaktowy i analityka nie zadziałają.
5. Kliknij **Deploy**. Każdy kolejny `git push` na branch `main` automatycznie
   zbuduje i opublikuje nową wersję strony.

---

## 6. Jak podłączyć własną domenę

1. W panelu projektu na Vercel wejdź w **Settings → Domains**.
2. Wpisz swoją domenę (np. `porebafotografia.pl`) i kliknij **Add**.
3. Vercel pokaże rekordy DNS do ustawienia u rejestratora domeny:
   - dla domeny głównej (`porebafotografia.pl`) zwykle rekord **A** wskazujący na
     podany adres IP Vercel,
   - dla subdomeny `www` — rekord **CNAME** wskazujący na `cname.vercel-dns.com`.
4. Dodaj te rekordy w panelu DNS swojego rejestratora (OVH, home.pl, Cloudflare, itd.).
5. Poczekaj na propagację DNS (zwykle od kilku minut do kilku godzin) — Vercel
   automatycznie wystawi certyfikat SSL po weryfikacji domeny.
6. Zaktualizuj zmienną `NEXT_PUBLIC_SITE_URL` w Environment Variables na Vercel na
   docelowy adres z własną domeną i wykonaj ponowny deploy (Redeploy), aby sitemap,
   `robots.txt` i tagi Open Graph wskazywały poprawny adres.

---

## 7. Jakie environment variables muszę ustawić

Skopiuj `.env.example` do `.env.local` (lokalnie) i uzupełnij te same zmienne w
panelu Vercel (**Settings → Environment Variables**) przed publikacją:

| Zmienna | Do czego służy | Wymagane |
|---|---|---|
| `RESEND_API_KEY` | Klucz API z [resend.com](https://resend.com) do wysyłki formularza kontaktowego | Tak, aby formularz działał |
| `CONTACT_TO_EMAIL` | Adres, na który mają przychodzić wiadomości z formularza | Tak |
| `CONTACT_FROM_EMAIL` | Adres nadawcy — musi pochodzić z domeny zweryfikowanej w Resend | Tak |
| `NEXT_PUBLIC_SITE_URL` | Pełny adres strony (używany w SEO, sitemap, Open Graph) | Tak |
| `NEXT_PUBLIC_GA_ID` | ID Google Analytics 4 (np. `G-XXXXXXX`) | Opcjonalnie |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID Meta Pixel | Opcjonalnie |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` | Do przyszłego podłączenia Sanity CMS | Opcjonalnie |

**Uwaga:** dopóki `RESEND_API_KEY`, `CONTACT_TO_EMAIL` i `CONTACT_FROM_EMAIL` nie są
ustawione, formularz kontaktowy poprawnie waliduje dane, ale zwróci użytkownikowi
czytelny komunikat, że wysyłka nie jest jeszcze skonfigurowana (nie udaje fałszywego
sukcesu). Konfiguracja Resend:

1. Załóż konto na [resend.com](https://resend.com).
2. W sekcji **Domains** dodaj i zweryfikuj swoją domenę (rekordy DNS: SPF/DKIM).
3. W sekcji **API Keys** wygeneruj klucz i wstaw go jako `RESEND_API_KEY`.
4. Jako `CONTACT_FROM_EMAIL` ustaw adres w zweryfikowanej domenie (np.
   `formularz@porebafotografia.pl`).

Google Analytics 4, Google Search Console i Meta Pixel **nie są jeszcze podłączone**
w kodzie (zgodnie z założeniem — bez fikcyjnych ID). Aby je aktywować:
- GA4: dodaj komponent ładujący `gtag.js` w `app/layout.tsx`, warunkowany obecnością
  `NEXT_PUBLIC_GA_ID`.
- Search Console: zweryfikuj domenę metodą DNS lub przez plik HTML w `public/`.
- Meta Pixel: dodaj skrypt bazowy w `app/layout.tsx`, warunkowany `NEXT_PUBLIC_META_PIXEL_ID`.

---

## 8. Co jeszcze powinienem skonfigurować przed oficjalną publikacją

- [ ] Podmienić wszystkie zdjęcia placeholder na własne (patrz sekcja 2 i `public/images/README.md`).
- [ ] Uzupełnić prawdziwy tekst w `/o-mnie` (obecnie jest tekst przykładowy z wyraźnym
      oznaczeniem placeholdera w `app/o-mnie/page.tsx`).
- [ ] Uzupełnić treść `/polityka-prywatnosci` i `/cookies` — obecne treści to jedynie
      czytelnie oznaczone placeholdery, **nie stanowią porady prawnej**.
- [ ] Skonfigurować Resend (patrz sekcja 7) i przetestować formularz kontaktowy end-to-end.
- [ ] Ustawić docelowy `NEXT_PUBLIC_SITE_URL` na Vercel i zrobić redeploy.
- [ ] Podłączyć własną domenę (sekcja 6).
- [ ] Zweryfikować domenę w Google Search Console i zgłosić `sitemap.xml`.
- [ ] Podłączyć Google Analytics 4 i/lub Meta Pixel, jeśli potrzebne (sekcja 7).
- [ ] Sprawdzić Core Web Vitals w PageSpeed Insights po wgraniu docelowych zdjęć
      (duże, niezoptymalizowane pliki źródłowe są najczęstszą przyczyną słabego LCP).
- [ ] Przejrzeć dane strukturalne/meta title i description pod kątem SEO lokalnego
      (frazy z `data/site.ts` → `seoKeywordsByCity`).
- [ ] Zdecydować, czy potrzebny jest baner cookies (jeśli podłączysz GA4/Meta Pixel
      z celami marketingowymi, w większości przypadków tak — patrz `/cookies`).

---

## Podłączenie Sanity CMS w przyszłości

Struktura danych w `types/project.ts` i `data/projects.ts` została zaprojektowana
1:1 pod dokument Sanity typu `project`:

```
Project
  title        (string)
  slug         (slug)
  category     (string — jedna z 6 wartości)
  client       (string)
  location     (string)
  year         (number)
  description  (text)
  coverImage   (image)
  gallery      (array of image)
  featured     (boolean)
  order        (number)
```

Docelowa migracja sprowadza się do:
1. Utworzenia schematu `project` w Sanity Studio z powyższymi polami.
2. Zastąpienia w `data/projects.ts` statycznej tablicy `projects` zapytaniem GROQ do
   Sanity (np. przez `next-sanity`), mapującym wynik na ten sam interfejs `Project`.
3. Reszta kodu (strony `/portfolio`, `/realizacje`, `/realizacje/[slug]`) nie wymaga
   zmian, ponieważ korzysta wyłącznie z typu `Project`, a nie ze źródła danych.

---

## Ważna uwaga dot. weryfikacji kodu

Ten projekt został przygotowany w środowisku bez dostępu do internetu (nie było
możliwe wykonanie `npm install` ani uruchomienie `next build` / `next lint` /
`tsc --noEmit` w trakcie generowania kodu). Kod został napisany ręcznie i starannie,
z zgodnością ze stabilnymi wersjami Next.js 15 / React 19 / Tailwind 3, ale **nie był
automatycznie zweryfikowany kompilatorem**.

**Zanim uruchomisz stronę produkcyjnie, koniecznie wykonaj lokalnie:**

```bash
npm install
npm run typecheck
npm run lint
npm run build
```

Jeśli którykolwiek z powyższych kroków zwróci błąd, w większości przypadków będzie to:
- literówka w imporcie (`@/...`) — sprawdź zgodność z `tsconfig.json` (`paths`),
- niedopasowana wersja pakietu — `package.json` zawiera przetestowane, zgodne ze sobą
  wersje (Next 15.1.6 + React 19 + Tailwind 3.4), nie zmieniaj ich bez potrzeby,
- brakujący plik `.env.local` — formularz kontaktowy będzie działał (z komunikatem
  o braku konfiguracji), ale warto go od razu uzupełnić.

Jeśli natrafisz na błąd, prześlij mi jego treść — naprawię go bez trudności.
