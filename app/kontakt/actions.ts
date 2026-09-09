"use server";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "projectType" | "message", string>>;
}

const PROJECT_TYPES = ["portret", "gastronomia", "wnetrza", "event", "biznes", "inne"] as const;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // --- Ochrona przed spamem: honeypot ---
  // Pole "website" jest ukryte w CSS przed użytkownikiem — wypełniają je tylko boty.
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot.length > 0) {
    // Udajemy sukces, żeby nie informować bota, że został wykryty.
    return { status: "success" };
  }

  // --- Ochrona przed spamem: minimalny czas wypełniania formularza ---
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
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Podaj imię i nazwisko.";
  if (!isValidEmail(email)) fieldErrors.email = "Podaj poprawny adres e-mail.";
  if (!PROJECT_TYPES.includes(projectType as (typeof PROJECT_TYPES)[number])) {
    fieldErrors.projectType = "Wybierz typ realizacji.";
  }
  if (message.length < 10) fieldErrors.message = "Wiadomość powinna mieć co najmniej 10 znaków.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors, message: "Popraw zaznaczone pola." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    // Integracja jeszcze nie skonfigurowana — patrz README.md, sekcja
    // "Jakie environment variables muszę ustawić". Nie blokujemy builda,
    // ale jasno informujemy o brakującej konfiguracji zamiast udawać wysyłkę.
    console.warn(
      "[kontakt] RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL nie są ustawione — wiadomość nie została wysłana."
    );
    return {
      status: "error",
      message:
        "Formularz nie jest jeszcze podłączony do skrzynki e-mail. Skonfiguruj zmienne środowiskowe opisane w README.md.",
    };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Formularz kontaktowy Pøreba <${from}>`,
      to,
      replyTo: email,
      subject: `Nowa wiadomość od ${name} — ${projectType}`,
      text: [
        `Imię i nazwisko: ${name}`,
        `Email: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        `Typ realizacji: ${projectType}`,
        "",
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

    return { status: "success", message: "Dziękuję za wiadomość! Odezwę się najszybciej, jak to możliwe." };
  } catch (err) {
    console.error("[kontakt] Nieoczekiwany błąd wysyłki:", err);
    return {
      status: "error",
      message: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na e-mail.",
    };
  }
}
