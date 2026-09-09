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
      alt: "Wnętrze Hotelu Alter w Lublinie",
    },
    gallery: [
      { src: "/images/projekty/hotel-alter-lublin/g-1.jpg", width: 1600, height: 2000, alt: "Pokój hotelowy Hotelu Alter w Lublinie" },
      { src: "/images/projekty/hotel-alter-lublin/g-2.jpg", width: 2000, height: 1500, alt: "Lobby Hotelu Alter w Lublinie", featuredInGrid: true },
      { src: "/images/projekty/hotel-alter-lublin/g-3.jpg", width: 1600, height: 1600, alt: "Detal wnętrza Hotelu Alter" },
      { src: "/images/projekty/hotel-alter-lublin/g-4.jpg", width: 2000, height: 2500, alt: "Łazienka w Hotelu Alter" },
      { src: "/images/projekty/hotel-alter-lublin/g-5.jpg", width: 2400, height: 1600, alt: "Restauracja hotelowa Hotelu Alter" },
      { src: "/images/projekty/hotel-alter-lublin/g-6.jpg", width: 1800, height: 2200, alt: "Korytarz Hotelu Alter" },
    ],
    featured: true,
    order: 1,
  },
  {
    title: "Restauracja Latarnia",
    slug: "restauracja-latarnia",
    category: "gastronomia",
    client: "Restauracja Latarnia",
    location: "Lublin",
    year: 2025,
    description:
      "Sesja gastronomiczna dla restauracji w Lublinie — dania z menu, wnętrze lokalu i portrety zespołu kuchni na potrzeby strony internetowej i social media.",
    coverImage: {
      src: "/images/projekty/restauracja-latarnia/cover.jpg",
      width: 2400,
      height: 1600,
      alt: "Danie z Restauracji Latarnia w Lublinie",
    },
    gallery: [
      { src: "/images/projekty/restauracja-latarnia/g-1.jpg", width: 1600, height: 2000, alt: "Danie główne w Restauracji Latarnia" },
      { src: "/images/projekty/restauracja-latarnia/g-2.jpg", width: 2000, height: 1500, alt: "Wnętrze Restauracji Latarnia w Lublinie", featuredInGrid: true },
      { src: "/images/projekty/restauracja-latarnia/g-3.jpg", width: 1600, height: 1600, alt: "Deser w Restauracji Latarnia" },
      { src: "/images/projekty/restauracja-latarnia/g-4.jpg", width: 2000, height: 2500, alt: "Szef kuchni podczas pracy w restauracji" },
      { src: "/images/projekty/restauracja-latarnia/g-5.jpg", width: 2400, height: 1600, alt: "Stół z daniami w Restauracji Latarnia" },
      { src: "/images/projekty/restauracja-latarnia/g-6.jpg", width: 1800, height: 2200, alt: "Bar Restauracji Latarnia" },
    ],
    featured: true,
    order: 2,
  },
  {
    title: "Marta — sesja portretowa",
    slug: "sesja-portretowa-marta",
    category: "portret",
    client: "Marta K.",
    location: "Lublin",
    year: 2024,
    description:
      "Sesja wizerunkowa dla ekspertki branży prawniczej w Lublinie — portrety na potrzeby strony internetowej kancelarii oraz profilu LinkedIn.",
    coverImage: {
      src: "/images/projekty/sesja-portretowa-marta/cover.jpg",
      width: 2400,
      height: 1600,
      alt: "Portret Marty K. podczas sesji w Lublinie",
    },
    gallery: [
      { src: "/images/projekty/sesja-portretowa-marta/g-1.jpg", width: 1600, height: 2000, alt: "Portret biznesowy Marty", featuredInGrid: true },
      { src: "/images/projekty/sesja-portretowa-marta/g-2.jpg", width: 2000, height: 1500, alt: "Portret Marty w biurze" },
      { src: "/images/projekty/sesja-portretowa-marta/g-3.jpg", width: 1600, height: 1600, alt: "Portret wizerunkowy — zbliżenie" },
      { src: "/images/projekty/sesja-portretowa-marta/g-4.jpg", width: 2000, height: 2500, alt: "Portret wizerunkowy — pełna sylwetka" },
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
      alt: "Gala firmowa w Lublinie — moment wręczenia nagrody",
    },
    gallery: [
      { src: "/images/projekty/gala-firmowa-orlen-lubelskie/g-1.jpg", width: 1600, height: 2000, alt: "Przemówienie na scenie podczas gali firmowej" },
      { src: "/images/projekty/gala-firmowa-orlen-lubelskie/g-2.jpg", width: 2000, height: 1500, alt: "Sala podczas gali firmowej w Lublinie", featuredInGrid: true },
      { src: "/images/projekty/gala-firmowa-orlen-lubelskie/g-3.jpg", width: 1600, height: 1600, alt: "Wręczenie nagrody podczas gali" },
      { src: "/images/projekty/gala-firmowa-orlen-lubelskie/g-4.jpg", width: 2000, height: 2500, alt: "Goście podczas wydarzenia firmowego" },
      { src: "/images/projekty/gala-firmowa-orlen-lubelskie/g-5.jpg", width: 2400, height: 1600, alt: "Networking po gali firmowej" },
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
  { category: "gastronomia", src: "/images/gastronomia/gastronomia-02.jpg", width: 2000, height: 1500, alt: "Fotografia dania restauracyjnego" },
  { category: "gastronomia", src: "/images/gastronomia/gastronomia-03.jpg", width: 1600, height: 1600, alt: "Fotografia deseru na talerzu" },
  { category: "gastronomia", src: "/images/gastronomia/gastronomia-04.jpg", width: 2000, height: 2500, alt: "Fotografia kawy w kawiarni" },
  { category: "gastronomia", src: "/images/gastronomia/gastronomia-05.jpg", width: 2400, height: 1600, alt: "Stół zastawiony do kolacji" },
  { category: "gastronomia", src: "/images/gastronomia/gastronomia-06.jpg", width: 1800, height: 2200, alt: "Detal dania podczas sesji gastronomicznej" },
  { category: "wnetrza", src: "/images/wnetrza/wnetrza-02.jpg", width: 2000, height: 1500, alt: "Fotografia wnętrza apartamentu" },
  { category: "wnetrza", src: "/images/wnetrza/wnetrza-03.jpg", width: 1600, height: 1600, alt: "Recepcja hotelowa" },
  { category: "wnetrza", src: "/images/wnetrza/wnetrza-04.jpg", width: 2000, height: 2500, alt: "Salon w stylu minimalistycznym" },
  { category: "wnetrza", src: "/images/wnetrza/wnetrza-05.jpg", width: 2400, height: 1600, alt: "Fotografia przestrzeni biurowej" },
  { category: "wnetrza", src: "/images/wnetrza/wnetrza-06.jpg", width: 1800, height: 2200, alt: "Fotografia wnętrza restauracji" },
  { category: "event", src: "/images/event/event-02.jpg", width: 2000, height: 1500, alt: "Fotorelacja z konferencji branżowej" },
  { category: "event", src: "/images/event/event-03.jpg", width: 1600, height: 1600, alt: "Panel dyskusyjny podczas konferencji" },
  { category: "event", src: "/images/event/event-04.jpg", width: 2000, height: 2500, alt: "Networking podczas wydarzenia firmowego" },
  { category: "event", src: "/images/event/event-05.jpg", width: 2400, height: 1600, alt: "Scena podczas prelekcji" },
  { category: "biznes", src: "/images/biznes/biznes-02.jpg", width: 2000, height: 1500, alt: "Zespół podczas pracy" },
  { category: "biznes", src: "/images/biznes/biznes-03.jpg", width: 1600, height: 1600, alt: "Spotkanie zespołu w biurze" },
  { category: "biznes", src: "/images/biznes/biznes-04.jpg", width: 2000, height: 2500, alt: "Portret biznesowy w biurze" },
  { category: "biznes", src: "/images/biznes/biznes-05.jpg", width: 2400, height: 1600, alt: "Przestrzeń coworkingowa" },
  { category: "lifestyle", src: "/images/lifestyle/lifestyle-02.jpg", width: 1600, height: 1600, alt: "Sesja lifestyle w plenerze" },
  { category: "lifestyle", src: "/images/lifestyle/lifestyle-03.jpg", width: 2000, height: 2500, alt: "Detal produktowy podczas sesji lifestyle" },
  { category: "lifestyle", src: "/images/lifestyle/lifestyle-04.jpg", width: 2400, height: 1600, alt: "Sesja lifestyle dla marki" },
  { category: "lifestyle", src: "/images/lifestyle/lifestyle-05.jpg", width: 1800, height: 2200, alt: "Sesja lifestyle we wnętrzu" },
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
