import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Categories from "@/components/sections/Categories";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ServicesTeaser from "@/components/sections/ServicesTeaser";
import ContactCTA from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pøreba Fotografia — Fotograf Lublin | Portret, Gastronomia, Wnętrza",
  description:
    "Fotograf w Lublinie specjalizujący się w fotografii portretowej, gastronomicznej, wnętrzarskiej, eventowej i biznesowej. Zobacz portfolio i umów sesję.",
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
