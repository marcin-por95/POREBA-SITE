import Link from "next/link";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist/40 bg-ink text-bone">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl tracking-wide">PØREBA</p>
          <p className="font-serif text-xl tracking-wide">FOTOGRAFIA</p>
          <p className="mt-4 text-sm text-bone/60">{site.location.serviceArea}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="eyebrow text-bone/40 mb-2">Nawigacja</p>
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="link-underline w-fit text-bone/80">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="eyebrow text-bone/40 mb-2">Kontakt</p>
          <a href={`mailto:${site.contact.email}`} className="link-underline w-fit text-bone/80">
            {site.contact.email}
          </a>
          <a
            href={site.contact.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="link-underline w-fit text-bone/80"
          >
            {site.contact.instagram.handle}
          </a>
          <span className="text-bone/60">{site.location.city} / {site.location.country}</span>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="eyebrow text-bone/40 mb-2">Informacje</p>
          <Link href="/polityka-prywatnosci" className="link-underline w-fit text-bone/80">
            Polityka prywatności
          </Link>
          <Link href="/cookies" className="link-underline w-fit text-bone/80">
            Cookies
          </Link>
        </div>
      </Container>

      <div className="border-t border-bone/10 py-6">
        <Container className="flex flex-col gap-2 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {site.legalName}. Wszelkie prawa zastrzeżone.</span>
          <span>Lublin, Polska</span>
        </Container>
      </div>
    </footer>
  );
}
