import type { ProjectCategory } from "@/types/project";

export interface Service {
  slug: string;
  seoSlug: string;
  title: string;
  seoTitle: string;
  category: ProjectCategory | "content";
  shortDescription: string;
  description: string;
  metaDescription: string;
  useCases: string[];
  image: { src: string; width: number; height: number; alt: string };
}

export const services: Service[] = [
  {
    slug: "gastronomia",
    seoSlug: "fotografia-gastronomiczna-lublin",
    title: "Fotografia gastronomiczna",
    seoTitle: "Fotografia gastronomiczna Lublin",
    category: "gastronomia",
    shortDescription:
      "Zdjęcia dań, wnętrza lokalu i atmosfery, które budują apetyt i rozpoznawalność marki.",
    description:
      "Sesje dla restauracji, kawiarni, hoteli i marek spożywczych. Pracuję zarówno w naturalnym świetle dnia, jak i w warunkach studyjnych, dopasowując styl do charakteru lokalu — od kameralnej kawiarni po restauracje fine dining.",
    metaDescription:
      "Fotografia gastronomiczna w Lublinie dla restauracji, hoteli, kawiarni i marek. Zdjęcia dań, menu, wnętrz oraz content do social media i reklam.",
    useCases: ["Menu i karty dań", "Social media i Google Business Profile", "Materiały reklamowe", "Strona internetowa lokalu"],
    image: { src: "/images/gastronomia/gastronomia-01.jpg", width: 1600, height: 2000, alt: "Fotografia gastronomiczna dla restauracji w Lublinie" },
  },
  {
    slug: "wnetrza-hotele",
    seoSlug: "fotografia-wnetrz-lublin",
    title: "Fotografia wnętrz i hoteli",
    seoTitle: "Fotografia wnętrz i hoteli Lublin",
    category: "wnetrza",
    shortDescription:
      "Architektura wnętrz, hotele i przestrzenie komercyjne pokazane w najlepszym świetle.",
    description:
      "Dokumentuję wnętrza tak, aby oddać ich rzeczywisty charakter — proporcje, materiały i światło. Sesje dla hoteli, apartamentów, biur i lokali usługowych, wykorzystywane w materiałach sprzedażowych oraz na portalach rezerwacyjnych.",
    metaDescription:
      "Fotografia wnętrz w Lublinie dla hoteli, apartamentów, restauracji, biur i nieruchomości. Profesjonalne zdjęcia na Booking, Airbnb i strony internetowe.",
    useCases: ["Portale rezerwacyjne (Booking, Airbnb)", "Strony internetowe", "Materiały dla inwestorów", "Prasa i publikacje branżowe"],
    image: { src: "/images/wnetrza/wnetrza-01.jpg", width: 1600, height: 1600, alt: "Profesjonalna fotografia wnętrz hotelowych w Lublinie" },
  },
  {
    slug: "portret",
    seoSlug: "fotografia-portretowa-lublin",
    title: "Fotografia portretowa",
    seoTitle: "Fotografia portretowa Lublin",
    category: "portret",
    shortDescription: "Portrety indywidualne i firmowe, które budują wizerunek osobisty i marki.",
    description:
      "Sesje portretowe dla osób prywatnych, ekspertów, twórców i zespołów firmowych. Zależy mi na naturalności i charakterze — portret ma pokazywać osobę, a nie tylko dobrze wyglądać.",
    metaDescription:
      "Fotografia portretowa w Lublinie. Profesjonalne sesje wizerunkowe, personal branding, LinkedIn, portrety ekspertów i sesje indywidualne.",
    useCases: ["Portfolio osobiste i LinkedIn", "Strony eksperckie", "Materiały prasowe", "Personal branding"],
    image: { src: "/images/portret/portret-01.jpg", width: 1600, height: 2000, alt: "Profesjonalna fotografia portretowa w Lublinie" },
  },
  {
    slug: "biznes",
    seoSlug: "fotografia-biznesowa-lublin",
    title: "Fotografia biznesowa",
    seoTitle: "Fotografia biznesowa Lublin",
    category: "biznes",
    shortDescription: "Zdjęcia zespołów, biur i procesów pracy dla firm i marek.",
    description:
      "Fotografia korporacyjna, która pokazuje firmę taką, jaka jest — ludzi, przestrzeń i sposób pracy. Wykorzystywana w materiałach rekrutacyjnych, na stronach internetowych i w komunikacji korporacyjnej.",
    metaDescription:
      "Fotografia biznesowa w Lublinie: portrety pracowników, zdjęcia zespołów, biur i procesów pracy. Profesjonalny content dla firm i marek.",
    useCases: ["Strony firmowe", "Materiały rekrutacyjne", "Raporty i prezentacje", "LinkedIn firmowy"],
    image: { src: "/images/biznes/biznes-01.jpg", width: 2000, height: 2500, alt: "Profesjonalna fotografia biznesowa w Lublinie" },
  },
  {
    slug: "event",
    seoSlug: "fotografia-eventowa-lublin",
    title: "Fotografia eventowa",
    seoTitle: "Fotograf eventowy Lublin",
    category: "event",
    shortDescription: "Relacje z konferencji, gal i wydarzeń firmowych — bez zakłócania ich przebiegu.",
    description:
      "Dokumentacja wydarzeń firmowych: konferencji, gal, premier produktowych i spotkań branżowych. Pracuję dyskretnie, dostarczam materiał gotowy do szybkiej publikacji.",
    metaDescription:
      "Fotograf eventowy Lublin. Profesjonalne fotorelacje z konferencji, gal, wydarzeń firmowych, premier i spotkań biznesowych.",
    useCases: ["Relacje w social media", "Materiały prasowe", "Archiwum firmowe", "Podsumowania dla partnerów"],
    image: { src: "/images/event/event-01.jpg", width: 2000, height: 1500, alt: "Fotograf eventowy podczas wydarzenia w Lublinie" },
  },
  {
    slug: "content-social-media",
    seoSlug: "content-social-media-lublin",
    title: "Content dla social media",
    seoTitle: "Content social media Lublin — foto i wideo",
    category: "content",
    shortDescription: "Regularny content foto i wideo dopasowany do kalendarza publikacji marki.",
    description:
      "Pakiety contentowe dla marek, które potrzebują stałego dopływu materiałów wizualnych — zdjęcia i krótkie formy wideo dopasowane do social media, spójne stylistycznie z resztą komunikacji marki.",
    metaDescription:
      "Profesjonalny content do social media w Lublinie. Zdjęcia, reels i krótkie wideo dla restauracji, hoteli, SPA, firm i lokalnych marek.",
    useCases: ["Instagram i TikTok", "Kalendarz treści", "Reels i krótkie wideo", "Spójność wizualna marki"],
    image: { src: "/images/lifestyle/lifestyle-01.jpg", width: 1800, height: 2200, alt: "Tworzenie contentu do social media dla firm w Lublinie" },
  },
];

export function getServiceBySeoSlug(slug: string): Service | undefined {
  return services.find((service) => service.seoSlug === slug);
}
