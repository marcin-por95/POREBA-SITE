"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import CategoryFilter from "./CategoryFilter";
import GalleryGrid from "./GalleryGrid";
import type { PortfolioImage } from "@/data/projects";
import { categoryOrder, type ProjectCategory } from "@/types/project";

export default function PortfolioBrowser({ images }: { images: PortfolioImage[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialCategory = (searchParams.get("kategoria") as ProjectCategory | null) ?? "wszystkie";
  const [active, setActive] = useState<ProjectCategory | "wszystkie">(
    categoryOrder.includes(initialCategory as ProjectCategory) ? (initialCategory as ProjectCategory) : "wszystkie"
  );

  useEffect(() => {
    const param = searchParams.get("kategoria") as ProjectCategory | null;
    if (param && categoryOrder.includes(param)) {
      setActive(param);
    }
  }, [searchParams]);

  const handleChange = (value: ProjectCategory | "wszystkie") => {
    setActive(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value === "wszystkie") {
      params.delete("kategoria");
    } else {
      params.set("kategoria", value);
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const filtered = useMemo(
    () => (active === "wszystkie" ? images : images.filter((img) => img.category === active)),
    [active, images]
  );

  return (
    <div>
      <CategoryFilter active={active} onChange={handleChange} />
      <div className="mt-10">
        <GalleryGrid images={filtered} />
      </div>
    </div>
  );
}
