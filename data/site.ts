export const site = {
  name: "Pøreba Fotografia",
  shortName: "Pøreba",
  legalName: "Pøreba Fotografia",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://porebafotografia.pl",
  description:
    "Fotografia portretowa, gastronomiczna, wnętrzarska, eventowa i biznesowa w Lublinie i całej Polsce. Content foto i wideo dla marek.",
  tagline: "Fotografia, która buduje wizerunek.",
  location: {
    city: "Lublin",
    region: "Lubelskie",
    country: "Polska",
    serviceArea: "Lublin i okolice, realizacje w całej Polsce",
  },
  contact: {
    email: "kontakt@porebafotografia.pl",
    instagram: {
      handle: "@marcin_poreba_fotograf_lublin",
      url: "https://www.instagram.com/marcin_poreba_fotograf_lublin/",
    },
  },
  nav: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Realizacje", href: "/realizacje" },
    { label: "Usługi", href: "/uslugi" },
    { label: "O mnie", href: "/o-mnie" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  seoKeywordsByCity: [
    "Fotograf Lublin",
    "Fotografia gastronomiczna Lublin",
    "Fotograf wnętrz Lublin",
    "Fotografia biznesowa Lublin",
    "Fotograf eventowy Lublin",
  ],
} as const;
