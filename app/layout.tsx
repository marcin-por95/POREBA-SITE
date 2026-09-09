import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Fotograf Lublin | Gastronomia, Wnętrza, Biznes — PØREBA",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.owner }],
  creator: site.owner,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Fotograf Lublin | Gastronomia, Wnętrza, Biznes — PØREBA",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "pl_PL",
    type: "website",
    images: [{ url: `${site.url}/images/og/og-cover.jpg`, width: 1200, height: 630, alt: `${site.name} — fotograf Lublin` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fotograf Lublin | Gastronomia, Wnętrza, Biznes — PØREBA",
    description: site.description,
    images: [`${site.url}/images/og/og-cover.jpg`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      email: site.contact.email,
      image: `${site.url}/images/og/og-cover.jpg`,
      description: site.description,
      founder: {
        "@type": "Person",
        name: site.owner,
      },
      areaServed: [
        {
          "@type": "City",
          name: site.location.city,
        },
        {
          "@type": "Country",
          name: site.location.country,
        },
      ],
      sameAs: [site.contact.instagram.url],
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#owner`,
      name: site.owner,
      jobTitle: "Fotograf",
      url: `${site.url}/o-mnie`,
      sameAs: [site.contact.instagram.url],
      worksFor: {
        "@id": `${site.url}/#business`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "pl-PL",
      publisher: {
        "@id": `${site.url}/#business`,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
        >
          Przejdź do treści
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
