"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu nawigacyjne"
          className="fixed inset-0 z-50 flex flex-col bg-ink text-bone md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="container-editorial flex items-center justify-between py-6">
            <span className="font-serif text-lg tracking-wide">PØREBA</span>
            <button
              onClick={onClose}
              aria-label="Zamknij menu"
              className="p-2 text-2xl leading-none"
            >
              ×
            </button>
          </div>
          <nav className="container-editorial mt-8 flex flex-1 flex-col gap-1">
            {site.nav.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * idx, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-bone/10 py-5 font-serif text-3xl"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="container-editorial mb-10 flex flex-col gap-3 text-sm text-bone/60">
            <a href={site.contact.instagram.url} target="_blank" rel="noreferrer" className="link-underline w-fit">
              Instagram
            </a>
            <a href={`mailto:${site.contact.email}`} className="link-underline w-fit">
              {site.contact.email}
            </a>
            <span>{site.location.city} / {site.location.country}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
