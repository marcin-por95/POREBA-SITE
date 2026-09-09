import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";
interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}
interface LinkButtonProps extends BaseProps {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
}
interface ActionButtonProps extends BaseProps {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}
type ButtonProps = LinkButtonProps | ActionButtonProps;
const variants = {
  primary: "bg-ink text-bone hover:bg-graphite",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-bone",
  ghost: "text-ink hover:text-stone",
};
export default function Button(props: ButtonProps) {
  const base = cx(
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm uppercase tracking-widest2 transition-colors duration-300 ease-editorial disabled:opacity-40 disabled:pointer-events-none",
    variants[props.variant ?? "primary"],
    props.className
  );
  if (props.href) {
    return (
      <Link href={props.href} className={base}>
        {props.children}
      </Link>
    );
  }
  const { type = "button", onClick, disabled, children } = props as ActionButtonProps;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
