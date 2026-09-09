"use client";

import { cx } from "@/lib/utils";
import { categoryLabels, categoryOrder, type ProjectCategory } from "@/types/project";

export default function CategoryFilter({
  active,
  onChange,
}: {
  active: ProjectCategory | "wszystkie";
  onChange: (value: ProjectCategory | "wszystkie") => void;
}) {
  const options: (ProjectCategory | "wszystkie")[] = ["wszystkie", ...categoryOrder];

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3" role="tablist" aria-label="Filtruj portfolio wg kategorii">
      {options.map((option) => (
        <button
          key={option}
          role="tab"
          aria-selected={active === option}
          onClick={() => onChange(option)}
          className={cx(
            "eyebrow border-b pb-1 transition-colors duration-300",
            active === option ? "border-ink text-ink" : "border-transparent text-stone hover:text-ink"
          )}
        >
          {option === "wszystkie" ? "Wszystkie" : categoryLabels[option]}
        </button>
      ))}
    </div>
  );
}
