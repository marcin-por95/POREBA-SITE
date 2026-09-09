import type { Project } from "@/types/project";

/**
 * Pojedyncze źródło prawdy dla portfolio i realizacji.
 * Strona /portfolio grupuje te dane po kategoriach.
 * Strona /realizacje i /realizacje/[slug] korzysta z tych samych obiektów.
 *
 * Aby dodać nową realizację: patrz README.md, sekcja "Jak dodawać nowe realizacje".
 */
export const projects: Project[] = [
  {
    title: "Hotel Alter — Lublin",
    slug: "hotel-alter-lublin",
    category: "wnetrza",
    client: "Hotel Alter",
    location: "Lublin",
    year: 2025,
    description:
      "Kompleksowa sesja wnętrz butikowego hotelu w centrum Lublina — pokoje, przestrzenie wspólne i restauracja hotelowa. Materiał wykorzystany na stronie internetowej hotelu oraz na portalach rezerwacyjnych.",
    coverImage: {
      src: "/images/projekty/hotel-alter-lublin/cover.jpg",
      width: 2400,
      height: 1600,
      alt: "Wnętrze hotelu Alter w Lublinie",
    },
    gallery: [
      { src: "/images/projekty/hotel-alter-lublin/g-1.jpg", width: 1600, height: 2000, alt: "Pokój hotelowy Alter" },
      { src: "/images/projekty/hotel-alter-lublin/g-2.jpg", width: 2000, height: 1500, alt: "Lobby hotelu Alter", featuredInGrid: true },
      { src: "/images/projekty/hotel-alter-lublin/g-3.jpg", width: 1600, height: 1600, alt: "Detal wnętrza hotelu" },
      { src: "/images/projekty/hotel-alter-lublin/g-4.jpg", width: 2000, height: 2500, alt: "Łazienka hotelowa" },
      { src: "/images/projekty/hotel-alter-lublin/g-5.jpg", width: 2400, height: 1600, alt: "Restauracja hotelowa" },
      { src: "/images/projekty/hotel-alter-lublin/g-6.jpg", width: 1800, height: 2200, alt: "Korytarz hotelu Alter" },
    ],
    featured: true,
    order: 1,
  },
  {
    title: "Restauracja Parmezan",
    slug: "restauracja-latarnia",
    category: "gastronomia",
    client: "Restauracja Latarnia",
    location: "Lublin",
    year: 2025,
    description:
      "Sesja gastronomiczna dla nowo otwartej restauracji — dania z menu degustacyjnego, wnętrze lokalu i portrety zespołu kuchni na potrzeby nowej strony internetowej i social media.",
    coverImage: {
      src: "/images/projekty/restauracja-latarnia/cover.jpg",
      width: 2400,
      height: 1600,
      alt: "Danie z restauracji Latarnia",
    },
    gallery: [
      { src: "/images/projekty/restauracja-latarnia/g-1.jpg", width: 1600, height: 2000, alt: "Danie główne" },
      { src: "/images/projekty/restauracja-latarnia/g-2.jpg", width: 2000, height: 1500, alt: "Wnętrze restauracji Latarnia", featuredInGrid: true },
      { src: "/images/projekty/restauracja-latarnia/g-3.jpg", width: 1600, height: 1600, alt: "Deser" },
      { src: "/images/projekty/restauracja-latarnia/g-4.jpg", width: 2000, height: 2500, alt: "Szef kuchni przy pracy" },
      { src: "/images/projekty/restauracja-latarnia/g-5.jpg", width: 2400, height: 1600, alt: "Stół zastawiony daniami" },
      { src: "/images/projekty/restauracja-latarnia/g-6.jpg", width: 1800, height: 2200, alt: "Bar restauracji" },
    ],
    featured: true,
    order: 2,
  },
  {
    title: "Martyna — sesja portretowa",
    slug: "sesja-portretowa-marta",
    category: "portret",
    client: "Marta K.",
    location: "Lublin",
    year: 2024,
    description:
      "Sesja wizerunkowa dla ekspertki branży prawniczej — portrety na potrzeby strony internetowej kancelarii oraz profilu LinkedIn.",
    coverImage: {
      src: "/images/projekty/sesja-portretowa-marta/cover.jpg",
      width: 2400,
      height: 1600,
      alt: "Portret Marty K.",
    },
    gallery: [
      { src: "/images/projekty/sesja-portretowa-marta/g-1.jpg", width: 1600, height: 2000, alt: "Portret studyjny", featuredInGrid: true },
      { src: "/images/projekty/sesja-portretowa-marta/g-2.jpg", width: 2000, height: 1500, alt: "Portret w biurze" },
      { src: "/images/projekty/sesja-portretowa-marta/g-3.jpg", width: 1600, height: 1600, alt: "Portret zbliżenie" },
      { src: "/images/projekty/sesja-portretowa-marta/g-4.jpg", width: 2000, height: 2500, alt: "Portret pełna sylwetka" },
    ],
    featured: true,
    order: 3,
  },
  {
    title: "Gala firmowa — Orlen Lubelskie",
    slug: "gala-firmowa-orlen-lubelskie",
    category: "event",
    client: "Grupa Orlen — oddział lubelski",
    location: "Lublin",
    year: 2024,
    description:
      "Fotorelacja z corocznej gali firmowej — przemówienia, wręczenie nagród oraz część networkingowa wydarzenia dla ok. 300 gości.",
    coverImage: {
      src: "/images/projekty/gala-firmowa-orlen-lubelskie/cover.jpg",
      width: 2400,
      height: 1600,
      alt: "Gala firmowa, moment wręczenia nagrody",
    },
    gallery: [
      { src: "/images/projekty/gala-firmowa-orlen-lubelskie/g-1.jpg", width: 1600, height: 2000, alt: "Przemówienie na scenie" },
      { src: "/images/projekty/gala-firmowa-orlen-lubelskie/g-2.jpg", width: 2000, height: 1500, alt: "Sala podczas gali", featuredInGrid: true },
      { src: "/images/projekty/gala-firmowa-orlen-lubelskie/g-3.jpg", width: 1600, height: 1600, alt: "Wręczenie nagrody" },
      { src: "/images/projekty/gala-firmowa-orlen-lubelskie/g-4.jpg", width: 2000, height: 2500, alt: "Goście gali" },
      { src: "/images/projekty/gala-firmowa-orlen-lubelskie/g-5.jpg", width: 2400, height: 1600, alt: "Networking po gali" },
    ],
    featured: false,
    order: 4,
  },
];

/** Dodatkowe, pojedyncze zdjęcia budujące pełną siatkę /portfolio (bez osobnej podstrony realizacji). */
export const portfolioExtras: { category: Project["category"]; src: string; width: number; height: number; alt: string }[] = [
  { category: "portret", src: "/images/portret/portret-02.jpg", width: 2000, height: 1500, alt: "Portret plenerowy" },
  { category: "portret", src: "/images/portret/portret-03.jpg", width: 1600, height: 1600, alt: "Portret czarno-biały" },
  { category: "portret", src: "/images/portret/portret-04.jpg", width: 2000, height: 2500, alt: "Portret w naturalnym świetle" },
  { category: "portret", src: "/images/portret/portret-05.jpg", width: 2400, height: 1600, alt: "Portret kreatywny" },
  { category: "portret", src: "/images/portret/portret-06.jpg", width: 1800, height: 2200, alt: "Portret wizerunkowy" },
  { category: "gastronomia", src: "/images/gastronomia/gastronomia-02.jpg", width: 2000, height: 1500, alt: "Danie kuchni polskiej" },
  { category: "gastronomia", src: "/images/gastronomia/gastronomia-03.jpg", width: 1600, height: 1600, alt: "Deser na talerzu" },
  { category: "gastronomia", src: "/images/gastronomia/gastronomia-04.jpg", width: 2000, height: 2500, alt: "Kawa w kawiarni" },
  { category: "gastronomia", src: "/images/gastronomia/gastronomia-05.jpg", width: 2400, height: 1600, alt: "Stół zastawiony do kolacji" },
  { category: "gastronomia", src: "/images/gastronomia/gastronomia-06.jpg", width: 1800, height: 2200, alt: "Detal dania" },
  { category: "wnetrza", src: "/images/wnetrza/wnetrza-02.jpg", width: 2000, height: 1500, alt: "Wnętrze apartamentu" },
  { category: "wnetrza", src: "/images/wnetrza/wnetrza-03.jpg", width: 1600, height: 1600, alt: "Recepcja hotelowa" },
  { category: "wnetrza", src: "/images/wnetrza/wnetrza-04.jpg", width: 2000, height: 2500, alt: "Salon w stylu minimalistycznym" },
  { category: "wnetrza", src: "/images/wnetrza/wnetrza-05.jpg", width: 2400, height: 1600, alt: "Przestrzeń biurowa" },
  { category: "wnetrza", src: "/images/wnetrza/wnetrza-06.jpg", width: 1800, height: 2200, alt: "Wnętrze restauracji" },
  { category: "event", src: "/images/event/event-02.jpg", width: 2000, height: 1500, alt: "Konferencja branżowa" },
  { category: "event", src: "/images/event/event-03.jpg", width: 1600, height: 1600, alt: "Panel dyskusyjny" },
  { category: "event", src: "/images/event/event-04.jpg", width: 2000, height: 2500, alt: "Networking eventowy" },
  { category: "event", src: "/images/event/event-05.jpg", width: 2400, height: 1600, alt: "Scena podczas prelekcji" },
  { category: "biznes", src: "/images/biznes/biznes-02.jpg", width: 2000, height: 1500, alt: "Zespół przy pracy" },
  { category: "biznes", src: "/images/biznes/biznes-03.jpg", width: 1600, height: 1600, alt: "Spotkanie zespołu" },
  { category: "biznes", src: "/images/biznes/biznes-04.jpg", width: 2000, height: 2500, alt: "Portret biznesowy w biurze" },
  { category: "biznes", src: "/images/biznes/biznes-05.jpg", width: 2400, height: 1600, alt: "Przestrzeń coworkingowa" },
  { category: "lifestyle", src: "/images/lifestyle/lifestyle-02.jpg", width: 1600, height: 1600, alt: "Sesja lifestyle w plenerze" },
  { category: "lifestyle", src: "/images/lifestyle/lifestyle-03.jpg", width: 2000, height: 2500, alt: "Detal produktowy" },
  { category: "lifestyle", src: "/images/lifestyle/lifestyle-04.jpg", width: 2400, height: 1600, alt: "Sesja stylizowana" },
  { category: "lifestyle", src: "/images/lifestyle/lifestyle-05.jpg", width: 1800, height: 2200, alt: "Sesja lifestyle wnętrzarska" },
];

export interface PortfolioImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  category: Project["category"];
  /** Link do pełnej realizacji, jeśli zdjęcie do niej należy */
  projectSlug?: string;
}

/** Pełna, płaska lista zdjęć zasilająca siatkę /portfolio, pogrupowana po kategorii przy renderze. */
export function getPortfolioImages(): PortfolioImage[] {
  const fromProjects: PortfolioImage[] = projects.flatMap((project) => [
    { ...project.coverImage, category: project.category, projectSlug: project.slug },
    ...project.gallery
      .filter((img) => img.featuredInGrid)
      .map((img) => ({ ...img, category: project.category, projectSlug: project.slug })),
  ]);

  const fromExtras: PortfolioImage[] = portfolioExtras.map((img) => ({ ...img }));

  return [...fromProjects, ...fromExtras];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return [...projects].filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getAllProjectsSorted(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getAdjacentProject(slug: string): Project | undefined {
  const sorted = getAllProjectsSorted();
  const idx = sorted.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return sorted[(idx + 1) % sorted.length];
}
