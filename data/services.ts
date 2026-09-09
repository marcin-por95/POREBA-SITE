import type { ProjectCategory } from "@/types/project";

export interface Service {
  slug: string;
  title: string;
  category: ProjectCategory | "content";
  shortDescription: string;
  description: string;
  useCases: string[];
  image: { src: string; width: number; height: number; alt: string };
}

export const services: Service[] = [
  {
    slug: "gastronomia",
    title: "Fotografia gastronomiczna",
    category: "gastronomia",
    shortDescription:
      "Zdjęcia dań, wnętrza lokalu i atmosfery, które budują apetyt i rozpoznawalność marki.",
    description:
      "Sesje dla restauracji, kawiarni, hoteli i marek spożywczych. Pracuję zarówno w naturalnym świetle dnia, jak i w warunkach studyjnych, dopasowując styl do charakteru lokalu — od kameralnej kawiarni po restauracje fine dining.",
    useCases: ["Menu i karty dań", "Social media i Google Moja Firma", "Materiały reklamowe", "Strona internetowa lokalu"],
    image: { src: "/images/gastronomia/gastronomia-01.jpg", width: 1600, height: 2000, alt: "Zbliżenie na danie w restauracji" },
  },
  {
    slug: "wnetrza-hotele",
    title: "Fotografia wnętrz i hoteli",
    category: "wnetrza",
    shortDescription:
      "Architektura wnętrz, hotele i przestrzenie komercyjne pokazane w najlepszym świetle.",
    description:
      "Dokumentuję wnętrza tak, aby oddać ich rzeczywisty charakter — proporcje, materiały i światło. Sesje dla hoteli, apartamentów, biur i lokali usługowych, wykorzystywane w materiałach sprzedażowych oraz na portalach rezerwacyjnych.",
    useCases: ["Portale rezerwacyjne (Booking, Airbnb)", "Strony internetowe", "Materiały dla inwestorów", "Prasa i publikacje branżowe"],
    image: { src: "/images/wnetrza/wnetrza-01.jpg", width: 1600, height: 1600, alt: "Wnętrze hotelowe" },
  },
  {
    slug: "portret",
    title: "Fotografia portretowa",
    category: "portret",
    shortDescription: "Portrety indywidualne i firmowe, które budują wizerunek osobisty i marki.",
    description:
      "Sesje portretowe dla osób prywatnych, ekspertów, twórców i zespołów firmowych. Zależy mi na naturalności i charakterze — portret ma pokazywać osobę, a nie tylko dobrze wyglądać.",
    useCases: ["Portfolio osobiste i LinkedIn", "Strony eksperckie", "Materiały prasowe", "Personal branding"],
    image: { src: "/images/portret/portret-01.jpg", width: 1600, height: 2000, alt: "Portret studyjny" },
  },
  {
    slug: "biznes",
    title: "Fotografia biznesowa",
    category: "biznes",
    shortDescription: "Zdjęcia zespołów, biur i procesów pracy dla firm i marek.",
    description:
      "Fotografia korporacyjna, która pokazuje firmę taką, jaka jest — ludzi, przestrzeń i sposób pracy. Wykorzystywana w materiałach rekrutacyjnych, na stronach internetowych i w komunikacji korporacyjnej.",
    useCases: ["Strony firmowe", "Materiały rekrutacyjne", "Raporty i prezentacje", "LinkedIn firmowy"],
    image: { src: "/images/biznes/biznes-01.jpg", width: 2000, height: 2500, alt: "Sesja biznesowa w biurze" },
  },
  {
    slug: "event",
    title: "Eventy",
    category: "event",
    shortDescription: "Relacje z konferencji, gal i wydarzeń firmowych — bez zakłócania ich przebiegu.",
    description:
      "Dokumentacja wydarzeń firmowych: konferencji, gal, premier produktowych i spotkań branżowych. Pracuję dyskretnie, dostarczam materiał gotowy do szybkiej publikacji.",
    useCases: ["Relacje w social media", "Materiały prasowe", "Archiwum firmowe", "Podsumowania dla partnerów"],
    image: { src: "/images/event/event-01.jpg", width: 2000, height: 1500, alt: "Zdjęcie z gali firmowej" },
  },
  {
    slug: "content-social-media",
    title: "Content dla social media",
    category: "content",
    shortDescription: "Regularny content foto i wideo dopasowany do kalendarza publikacji marki.",
    description:
      "Pakiety contentowe dla marek, które potrzebują stałego dopływu materiałów wizualnych — zdjęcia i krótkie formy wideo dopasowane do social media, spójne stylistycznie z resztą komunikacji marki.",
    useCases: ["Instagram i TikTok", "Kalendarz treści", "Reels i krótkie wideo", "Spójność wizualna marki"],
    image: { src: "/images/lifestyle/lifestyle-01.jpg", width: 1800, height: 2200, alt: "Sesja lifestyle dla social media" },
  },
];
