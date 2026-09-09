import { cx } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cx(align === "center" && "text-center mx-auto max-w-2xl", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-display-2 font-light">{title}</h2>
      {description && <p className="mt-5 max-w-xl text-stone text-base sm:text-lg">{description}</p>}
    </div>
  );
}
