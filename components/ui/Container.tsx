import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx("container-editorial", className)}>{children}</div>;
}
