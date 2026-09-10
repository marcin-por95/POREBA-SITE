"use server";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "projectType" | "message", string>>;
}

const PROJECT_TYPES = ["portret", "gastronomia", "wnetrza", "event", "biznes", "content", "inne"] as const;

const PROJECT_LABELS: Record<(typeof PROJECT_TYPES)[number], string> = {
  portret: "Portret / wizerunek",
  gastronomia: "Fotografia gastronomiczna",
  wnetrza: "Wnętrza / hotel",
  event: "Event",
  biznes: "Fotografia biznesowa",
  content: "Content do social media",
  inne: "Inny projekt",
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot — pole niewidoczne dla użytkownika, często wypełniane przez boty.
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot.length > 0) {
    return { status: "success" };
  }

  // Minimalny czas wypełnienia ogranicza najprostszy automatyczny spam.
  const startedAt = Number(formData.get("startedAt") ?? 0);
  if (startedAt && Date.now() - startedAt < 2000) {
    return {
      status: "error",
      message: "Wystąpił błąd przy wysyłaniu wiadomości. Spróbuj ponownie za chwilę.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const preferredDate = String(formData.get("preferredDate") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (name.length < 2) fieldErrors.name = "Podaj imię i nazwisko.";
  if (name.length > 100) fieldErrors.name = "Imię i nazwisko jest zbyt długie.";

  if (!isValidEmail(email)) fieldErrors.email = "Podaj poprawny adres e-mail.";
  if (email.length > 200) fieldErrors.email = "Adres e-mail jest zbyt długi.";

  if (!PROJECT_TYPES.includes(projectType as (typeof PROJECT_TYPES)[number])) {
    fieldErrors.projectType = "Wybierz typ realizacji.";
  }

  if (message.length < 10) fieldErrors.message = "Wiadomość powinna mieć co najmniej 10 znaków.";
  if (message.length > 3000) fieldErrors.message = "Wiadomość jest zbyt długa.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors, message: "Popraw zaznaczone pola." };
  }

  // Limity po stronie serwera również dla pól opcjonalnych.
  if (phone.length > 40 || location.length > 120 || preferredDate.length > 80) {
    return {
      status: "error",
      message: "Jedno z pól jest zbyt długie. Skróć dane i spróbuj ponownie.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.warn(
      "[kontakt] RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL nie są ustawione — wiadomość nie została wysłana."
    );
    return {
      status: "error",
      message:
        "Formularz nie jest jeszcze podłączony do skrzynki e-mail. Skontaktuj się bezpośrednio przez e-mail.",
    };
  }

  const normalizedProjectType = projectType as (typeof PROJECT_TYPES)[number];
  const projectLabel = PROJECT_LABELS[normalizedProjectType];

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Formularz kontaktowy PØREBA <${from}>`,
      to,
      replyTo: email,
      subject: `Zapytanie: ${projectLabel} — ${name}`,
      text: [
        `Imię i nazwisko: ${name}`,
        `Email: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        `Typ realizacji: ${projectLabel}`,
        location ? `Miejsce realizacji: ${location}` : null,
        preferredDate ? `Preferowany termin: ${preferredDate}` : null,
        "",
        "Wiadomość:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("[kontakt] Błąd Resend:", error);
      return {
        status: "error",
        message: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na e-mail.",
      };
    }

    return {
      status: "success",
      message: "Dziękuję za zapytanie. Odezwę się możliwie szybko — zwykle w ciągu 24 godzin.",
    };
  } catch (err) {
    console.error("[kontakt] Nieoczekiwany błąd wysyłki:", err);
    return {
      status: "error",
      message: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na e-mail.",
    };
  }
}
