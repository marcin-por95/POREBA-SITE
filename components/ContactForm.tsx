"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { sendContactMessage, type ContactFormState } from "@/app/kontakt/actions";
import { cx } from "@/lib/utils";

const initialState: ContactFormState = { status: "idle" };

const projectTypes = [
  { value: "gastronomia", label: "Fotografia gastronomiczna" },
  { value: "wnetrza", label: "Wnętrza / hotel" },
  { value: "biznes", label: "Fotografia biznesowa" },
  { value: "portret", label: "Portret / wizerunek" },
  { value: "event", label: "Event" },
  { value: "content", label: "Content do social media" },
  { value: "inne", label: "Inny projekt" },
];

const inputClass =
  "min-h-[48px] w-full border-b border-mist bg-transparent py-3 text-base text-ink placeholder:text-stone/60 focus:border-ink focus:outline-none";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [startedAt] = useState(() => Date.now());

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-7" noValidate>
      <div>
        <p className="eyebrow text-stone">Zapytanie o realizację</p>
        <h2 className="mt-3 font-serif text-2xl font-light text-ink sm:text-3xl">
          Opowiedz mi krótko o projekcie
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone">
          Wystarczą podstawy. Jeśli znasz miejsce i termin, dopisz je poniżej — dzięki temu szybciej
          przygotuję konkretną odpowiedź.
        </p>
      </div>

      {/* Honeypot — ukryte przed użytkownikiem, wypełniane tylko przez boty */}
      <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Zostaw to pole puste</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-2 block text-stone">
            Imię i nazwisko <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            className={inputClass}
            placeholder="Jan Kowalski"
            aria-invalid={Boolean(state.fieldErrors?.name)}
            aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
          />
          {state.fieldErrors?.name && (
            <p id="name-error" className="mt-2 text-xs text-red-700">
              {state.fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="eyebrow mb-2 block text-stone">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            inputMode="email"
            className={inputClass}
            placeholder="jan@przyklad.pl"
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
          />
          {state.fieldErrors?.email && (
            <p id="email-error" className="mt-2 text-xs text-red-700">
              {state.fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="eyebrow mb-2 block text-stone">
            Telefon <span className="normal-case tracking-normal">(opcjonalnie)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            inputMode="tel"
            className={inputClass}
            placeholder="+48 000 000 000"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="eyebrow mb-2 block text-stone">
            Typ realizacji <span aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              required
              defaultValue=""
              className={cx(inputClass, "appearance-none pr-8")}
              aria-invalid={Boolean(state.fieldErrors?.projectType)}
              aria-describedby={state.fieldErrors?.projectType ? "projectType-error" : undefined}
            >
              <option value="" disabled>
                Wybierz usługę…
              </option>
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-sm text-stone"
            >
              ↓
            </span>
          </div>
          {state.fieldErrors?.projectType && (
            <p id="projectType-error" className="mt-2 text-xs text-red-700">
              {state.fieldErrors.projectType}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="location" className="eyebrow mb-2 block text-stone">
            Miejsce realizacji <span className="normal-case tracking-normal">(opcjonalnie)</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            maxLength={120}
            autoComplete="address-level2"
            className={inputClass}
            placeholder="np. Lublin / Warszawa"
          />
        </div>

        <div>
          <label htmlFor="preferredDate" className="eyebrow mb-2 block text-stone">
            Preferowany termin <span className="normal-case tracking-normal">(opcjonalnie)</span>
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="text"
            maxLength={80}
            className={inputClass}
            placeholder="np. 15–20 października"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow mb-2 block text-stone">
          Kilka słów o projekcie <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={6}
          className={cx(inputClass, "resize-y leading-relaxed")}
          placeholder="Co fotografujemy, gdzie zdjęcia będą wykorzystane i czego oczekujesz od realizacji?"
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={state.fieldErrors?.message ? "message-error" : "message-help"}
        />
        {state.fieldErrors?.message ? (
          <p id="message-error" className="mt-2 text-xs text-red-700">
            {state.fieldErrors.message}
          </p>
        ) : (
          <p id="message-help" className="mt-2 text-xs leading-relaxed text-stone">
            Nie potrzebujesz gotowego briefu — opis w 2–3 zdaniach wystarczy.
          </p>
        )}
      </div>

      {state.status === "success" && (
        <div role="status" className="border border-mist/60 bg-mist/20 px-5 py-4">
          <p className="font-serif text-xl text-ink">Wiadomość wysłana.</p>
          <p className="mt-1 text-sm leading-relaxed text-graphite">
            {state.message ?? "Dziękuję. Odezwę się możliwie szybko z kolejnym krokiem."}
          </p>
        </div>
      )}

      {state.status === "error" && !state.fieldErrors && (
        <div role="alert" className="border border-red-700/30 px-5 py-4">
          <p className="text-sm text-red-700">{state.message}</p>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-ink px-8 py-3.5 text-sm uppercase tracking-widest2 text-bone transition-colors duration-300 hover:bg-graphite disabled:pointer-events-none disabled:opacity-40 sm:w-auto"
        >
          {isPending ? "Wysyłanie…" : "Wyślij zapytanie"}
        </button>
        <p className="text-xs leading-relaxed text-stone">Zwykle odpowiadam w ciągu 24 godzin.</p>
      </div>

      <p className="max-w-xl text-xs leading-relaxed text-stone">
        Wysyłając formularz, przekazujesz dane w celu obsługi zapytania i przygotowania odpowiedzi lub
        wyceny. Szczegóły znajdziesz w{" "}
        <Link href="/polityka-prywatnosci" className="link-underline text-graphite">
          Polityce prywatności
        </Link>
        .
      </p>
    </form>
  );
}
