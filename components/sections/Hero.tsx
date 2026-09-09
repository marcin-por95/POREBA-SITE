"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

const heroImages = [
  {
    src: "/images/hero/hero-01.jpg",
    alt: "Fotografia portretowa — Pøreba Fotografia",
  },
  {
    src: "/images/hero/hero-02.jpg",
    alt: "Fotografia gastronomiczna — Pøreba Fotografia",
  },
  {
    src: "/images/hero/hero-03.jpg",
    alt: "Fotografia wnętrz — Pøreba Fotografia",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">

      {/* =========================
          HERO IMAGES
      ========================== */}
      {heroImages.map((img, i) => (
        <motion.div
          key={img.src}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: active === i ? 1 : 0,
          }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          {/* =========================
              BACKGROUND
              Wypełnia cały ekran
          ========================== */}
          <motion.div
            className="absolute inset-0"
            animate={
              active === i && !shouldReduceMotion
                ? {
                    scale: [1.05, 1.08],
                  }
                : {
                    scale: 1.05,
                  }
            }
            transition={{
              duration: 5.5,
              ease: "linear",
            }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              aria-hidden="true"
              className="
                object-cover
                blur-lg
                brightness-[0.42]
                saturate-[0.8]
              "
            />
          </motion.div>

          {/* =========================
              MAIN IMAGE
              Oddalone zdjęcie
          ========================== */}
          <motion.div
            className="
              absolute
              inset-[3%]
              sm:inset-[4%]
              lg:inset-[5%]
              xl:inset-[6%]
            "
            animate={
              active === i && !shouldReduceMotion
                ? {
                    scale: [0.97, 1],
                  }
                : {
                    scale: 1,
                  }
            }
            transition={{
              duration: 5.5,
              ease: "linear",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="
                object-contain
                object-center
                lg:object-right
              "
            />
          </motion.div>
        </motion.div>
      ))}

      {/* =========================
          GRADIENT OD LEWEJ
          pod tekst
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-gradient-to-r
          from-ink/90
          via-ink/35
          to-transparent
        "
      />

      {/* =========================
          GRADIENT OD DOŁU
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-gradient-to-t
          from-ink/70
          via-transparent
          to-ink/20
        "
      />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="container-editorial relative z-10 pb-20 pt-40 sm:pb-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
        >
          <p className="eyebrow text-bone/70">
            Fotograf · Lublin i cała Polska
          </p>

          <h1 className="mt-5 font-serif text-display-1 font-light italic text-bone">
            PØREBA

            <span className="mt-1 block text-display-3 not-italic tracking-[0.2em]">
              FOTOGRAFIA
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-bone/80 sm:text-xl">
            Portret. Gastronomia. Wnętrza. Emocje — fotografia, która buduje
            wizerunek.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href="/portfolio"
              variant="primary"
              className="bg-bone text-ink hover:bg-mist"
            >
              Zobacz portfolio
            </Button>

            <Button
              href="/kontakt"
              variant="secondary"
              className="
                border-bone
                text-bone
                hover:bg-bone
                hover:text-ink
              "
            >
              Porozmawiajmy
            </Button>
          </div>
        </motion.div>
      </div>

      {/* =========================
          SLIDER INDICATORS
      ========================== */}
      <div className="absolute bottom-8 right-6 z-10 hidden gap-2 sm:flex">
        {heroImages.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Pokaż zdjęcie ${i + 1}`}
            onClick={() => setActive(i)}
            className={`
              h-1
              rounded-full
              transition-all
              duration-500

              ${
                active === i
                  ? "w-10 bg-bone"
                  : "w-8 bg-bone/30 hover:bg-bone/50"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}