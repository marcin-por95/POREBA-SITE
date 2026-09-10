"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { sendContactMessage, type ContactFormState } from "@/app/kontakt/actions";
import { cx } from "@/lib/utils";

const initialState: ContactFormState = { status: "idle" };

const projectTypes = [
  { value: "portret", label: "Portret" },
  { value: "gastronomia", label: "Gastronomia" },
  { value: "wnetrza", label: "Wnętrza / Hotel" },
  { value: "event", label: "Event" },
  { value: "biznes", label: "Biznes" },
  { value: "inne", label: "Inne" },
];

const inputClass =
  "w-full border-b border-mist bg-transparent py-3 text-ink placeholder:text-stone/60 focus:border-ink focus:outline-none";

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
    <form ref={formRef} action={formAction} className="flex flex-col gap-6" noValidate>
      {/* Honeypot — ukryte przed użytkownikiem, wypełniane tylko przez boty */}
      <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Zostaw to pole puste</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-2 block text-stone">
            Imię i nazwisko
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
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
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
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
            Telefon (opcjonalnie)
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+48 000 000 000" />
        </div>

        <div>
          <label htmlFor="projectType" className="eyebrow mb-2 block text-stone">
            Typ realizacji
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className={cx(inputClass, "appearance-none")}
            aria-invalid={Boolean(state.fieldErrors?.projectType)}
            aria-describedby={state.fieldErrors?.projectType ? "projectType-error" : undefined}
          >
            <option value="" disabled>
              Wybierz…
            </option>
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {state.fieldErrors?.projectType && (
            <p id="projectType-error" className="mt-2 text-xs text-red-700">
              {state.fieldErrors.projectType}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow mb-2 block text-stone">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          className={inputClass}
          placeholder="Kilka słów o projekcie — miejsce, termin, zakres…"
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
        />
        {state.fieldErrors?.message && (
          <p id="message-error" className="mt-2 text-xs text-red-700">
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-3.5 text-sm uppercase tracking-widest2 text-bone transition-colors duration-300 hover:bg-graphite disabled:opacity-40"
        >
          {isPending ? "Wysyłanie…" : "Wyślij wiadomość"}
        </button>

        <div aria-live="polite">
          {state.status === "success" && (
            <p className="text-sm text-graphite">{state.message}</p>
          )}
          {state.status === "error" && !state.fieldErrors && (
            <p className="text-sm text-red-700">{state.message}</p>
          )}
        </div>
      </div>

      <p className="max-w-xl text-xs leading-relaxed text-stone">
        Wysyłając formularz, przekazujesz dane w celu obsługi zapytania i przygotowania odpowiedzi lub
        wyceny. Szczegóły dotyczące przetwarzania danych znajdziesz w{" "}
        <Link href="/polityka-prywatnosci" className="link-underline text-graphite">
          Polityce prywatności
        </Link>
        .
      </p>
    </form>
  );
}
