"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

const heroImages = [
  {
    src: "/images/hero/hero-01.jpg",
    alt: "Fotografia portretowa — PØREBA Fotografia",
    position: "center 42%",
  },
  {
    src: "/images/hero/hero-02.jpg",
    alt: "Fotografia gastronomiczna — PØREBA Fotografia",
    position: "center center",
  },
  {
    src: "/images/hero/hero-03.jpg",
    alt: "Fotografia wnętrz — PØREBA Fotografia",
    position: "center center",
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
    <section className="hero-mobile-section relative flex h-[100svh] min-h-[620px] w-full items-end overflow-hidden bg-ink sm:min-h-[640px]">
      {heroImages.map((img, i) => (
        <motion.div
          key={img.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: active === i ? 1 : 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            animate={
              active === i && !shouldReduceMotion
                ? { scale: [1.05, 1.08] }
                : { scale: 1.05 }
            }
            transition={{ duration: 5.5, ease: "linear" }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="100vw"
              aria-hidden="true"
              loading="lazy"
              quality={45}
              className="object-cover blur-lg brightness-[0.42] saturate-[0.8]"
            />
          </motion.div>

          <div className="absolute inset-x-[3%] bottom-[2%] top-[5.25rem] overflow-hidden sm:inset-[4%] lg:bottom-[5%] lg:left-[56%] lg:right-[4%] lg:top-[5%] xl:bottom-[6%] xl:right-[5%] xl:top-[6%]">
            <motion.div
              className="absolute inset-0"
              animate={
                active === i && !shouldReduceMotion
                  ? { scale: [0.97, 1] }
                  : { scale: 1 }
              }
              transition={{ duration: 5.5, ease: "linear" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
                sizes="(max-width: 640px) 94vw, (max-width: 1024px) 92vw, 40vw"
                className="object-cover"
                style={{ objectPosition: img.position }}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}

      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-ink/95 via-ink/55 to-transparent sm:from-ink/90 sm:via-ink/35" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-ink/85 via-ink/10 to-ink/30 sm:from-ink/70 sm:via-transparent sm:to-ink/20" />

      <div className="hero-mobile-content container-editorial relative z-10 pb-[max(2rem,env(safe-area-inset-bottom))] pt-0 sm:pb-28 sm:pt-40">
        <motion.div
          className="max-w-[21rem] sm:max-w-none"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <p className="eyebrow hidden text-bone/70 sm:block">Fotograf · Lublin i cała Polska</p>

          <h1 className="mt-0 font-serif font-light text-bone sm:mt-5">
            <span
              className="hero-mobile-title-main block text-[clamp(2.65rem,12.5vw,3.25rem)] italic sm:text-display-1 sm:whitespace-nowrap"
              style={{ lineHeight: 1.02 }}
            >
              Fotograf Lublin
            </span>
            <span
              className="hero-mobile-title-brand mt-3 block whitespace-nowrap text-[clamp(1.05rem,4.8vw,1.35rem)] not-italic tracking-[0.14em] sm:mt-4 sm:text-display-3 sm:tracking-[0.2em]"
              style={{ lineHeight: 1.15 }}
            >
              PØREBA FOTOGRAFIA
            </span>
          </h1>

          <p className="hero-mobile-copy mt-5 max-w-[19rem] text-base leading-[1.55] text-bone/85 sm:mt-7 sm:max-w-lg sm:text-xl sm:leading-normal sm:text-bone/80">
            <span className="sm:hidden">
              Gastronomia · wnętrza · biznes · portret. Zdjęcia, które budują wizerunek.
            </span>
            <span className="hidden sm:inline">
              Fotografia gastronomiczna, wnętrz, hoteli, biznesowa i portretowa — materiały, które budują wizerunek.
            </span>
          </p>

          <div className="hero-mobile-actions mt-7 flex flex-nowrap gap-3 sm:mt-10 sm:flex-wrap sm:gap-4">
            <Button
              href="/portfolio"
              variant="primary"
              className="!px-5 !py-3 !text-xs !tracking-[0.16em] bg-bone text-ink hover:bg-mist sm:!px-7 sm:!py-3.5 sm:!text-sm sm:!tracking-widest2"
            >
              <span className="sm:hidden">Portfolio</span>
              <span className="hidden sm:inline">Zobacz portfolio</span>
            </Button>
            <Button
              href="/kontakt"
              variant="secondary"
              className="!px-5 !py-3 !text-xs !tracking-[0.16em] border-bone text-bone hover:bg-bone hover:text-ink sm:!px-7 sm:!py-3.5 sm:!text-sm sm:!tracking-widest2"
            >
              <span className="sm:hidden">Kontakt</span>
              <span className="hidden sm:inline">Porozmawiajmy</span>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden gap-2 sm:flex">
        {heroImages.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Pokaż zdjęcie ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              active === i ? "w-10 bg-bone" : "w-8 bg-bone/30 hover:bg-bone/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
