"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { PortfolioImage } from "@/data/projects";

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: PortfolioImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const isOpen = index !== null;
  const current = index !== null ? images[index] : null;

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <button
            aria-label="Zamknij podgląd"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 text-3xl leading-none text-bone/80 hover:text-bone"
          >
            ×
          </button>

          <button
            aria-label="Poprzednie zdjęcie"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 px-4 py-6 text-3xl text-bone/70 hover:text-bone sm:left-6"
          >
            ‹
          </button>
          <button
            aria-label="Następne zdjęcie"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 px-4 py-6 text-3xl text-bone/70 hover:text-bone sm:right-6"
          >
            ›
          </button>

          <motion.div
            key={current.src}
            className="relative mx-auto h-[80vh] w-[90vw] max-w-5xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </motion.div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest2 text-bone/50">
            {index !== null ? index + 1 : 0} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
