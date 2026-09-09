/**
 * Struktura danych zaprojektowana pod przyszłą migrację do Sanity CMS.
 * Pola 1:1 odpowiadają dokumentowi "project" w Sanity — patrz README.md,
 * sekcja "Podłączenie Sanity CMS w przyszłości".
 */

export type ProjectCategory =
  | "portret"
  | "gastronomia"
  | "wnetrza"
  | "event"
  | "biznes"
  | "lifestyle";

export interface GalleryImage {
  /** Ścieżka względem /public lub przyszły URL z Sanity CDN */
  src: string;
  /** Szerokość oryginału w px — wymagane dla next/image bez fill w niektórych układach */
  width: number;
  height: number;
  alt: string;
  /** Czy zdjęcie ma być większe w siatce editorial grid */
  featuredInGrid?: boolean;
}

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  client: string;
  location: string;
  year: number;
  description: string;
  coverImage: GalleryImage;
  gallery: GalleryImage[];
  featured: boolean;
  /** Kolejność wyświetlania — mniejsze wartości wyżej/wcześniej */
  order: number;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  portret: "Portret",
  gastronomia: "Gastronomia",
  wnetrza: "Wnętrza / Hotele",
  event: "Event",
  biznes: "Biznes",
  lifestyle: "Lifestyle",
};

export const categoryOrder: ProjectCategory[] = [
  "portret",
  "gastronomia",
  "wnetrza",
  "event",
  "biznes",
  "lifestyle",
];
