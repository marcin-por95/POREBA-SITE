import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-32">
      <Container className="text-center">
        <p className="eyebrow text-stone">Błąd 404</p>
        <h1 className="mt-4 text-display-2 font-light italic">Ta strona nie istnieje.</h1>
        <p className="mx-auto mt-5 max-w-md text-stone">
          Strona, której szukasz, została przeniesiona lub nigdy nie istniała. Wróć do strony głównej
          lub przejdź do portfolio.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/">Strona główna</Button>
          <Button href="/portfolio" variant="secondary">
            Portfolio
          </Button>
        </div>
        <p className="mt-10 text-xs text-stone">
          <Link href="/kontakt" className="link-underline">
            Zgłoś problem
          </Link>
        </p>
      </Container>
    </div>
  );
}
