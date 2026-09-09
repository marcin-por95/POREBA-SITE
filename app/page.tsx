import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Categories from "@/components/sections/Categories";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ServicesTeaser from "@/components/sections/ServicesTeaser";
import ContactCTA from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Fotograf Lublin — gastronomia, wnętrza, biznes i portret",
  description:
    "Fotograf w Lublinie: fotografia gastronomiczna, wnętrz i hoteli, biznesowa, portretowa oraz eventowa. Profesjonalne zdjęcia dla firm, restauracji i marek.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Categories />
      <AboutTeaser />
      <ServicesTeaser />
      <ContactCTA />
    </>
  );
}
