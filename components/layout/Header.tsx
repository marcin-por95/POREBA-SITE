"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/utils";
import { site } from "@/data/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500 ease-editorial",
          transparent ? "bg-transparent" : "bg-bone/90 backdrop-blur-sm border-b border-mist/30"
        )}
      >
        <div className="container-editorial flex h-20 items-center justify-between">
          <Link
            href="/"
            className={cx(
              "font-serif text-lg tracking-[0.15em] transition-colors duration-500",
              transparent ? "text-bone" : "text-ink"
            )}
          >
            PØREBA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "link-underline text-sm uppercase tracking-widest2 transition-colors duration-500",
                  transparent ? "text-bone" : "text-ink"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.contact.instagram.url}
              target="_blank"
              rel="noreferrer"
              className={cx(
                "link-underline text-sm uppercase tracking-widest2 transition-colors duration-500",
                transparent ? "text-bone" : "text-ink"
              )}
            >
              Instagram
            </a>
          </nav>

          <button
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Otwórz menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className={cx("h-px w-6 transition-colors duration-500", transparent ? "bg-bone" : "bg-ink")} />
            <span className={cx("h-px w-6 transition-colors duration-500", transparent ? "bg-bone" : "bg-ink")} />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
