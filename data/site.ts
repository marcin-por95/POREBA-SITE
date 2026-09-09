export const site = {
  name: "PØREBA Fotografia",
  shortName: "PØREBA",
  legalName: "PØREBA Fotografia",
  owner: "Marcin Poręba",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://porebafotografia.pl").replace(/\/$/, ""),

  description:
    "Fotograf w Lublinie specjalizujący się w fotografii gastronomicznej, wnętrz i hoteli, biznesowej, portretowej oraz eventowej. Profesjonalny content foto i wideo dla firm i marek w Lublinie i całej Polsce.",

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
    "Fotografia hotelowa Lublin",
    "Fotograf portretowy Lublin",
  ],
} as const;
