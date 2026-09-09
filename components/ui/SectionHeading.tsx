import { cx } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const Heading = as;

  return (
    <div className={cx(align === "center" && "text-center mx-auto max-w-2xl", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Heading className="text-display-2 font-light">{title}</Heading>
      {description && <p className="mt-5 max-w-xl text-stone text-base sm:text-lg">{description}</p>}
    </div>
  );
}
