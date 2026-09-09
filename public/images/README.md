# Struktura /public/images

System nazewnictwa (placeholdery wygenerowane automatycznie — podmień na własne zdjęcia,
zachowując te same nazwy plików i proporcje, aby uniknąć zmian w kodzie):

```
public/images/
  hero/                 -> hero-01.jpg, hero-02.jpg, hero-03.jpg (sekwencja w Hero, 2400x1500)
  portret/              -> portret-01.jpg ... portret-06.jpg
  gastronomia/          -> gastronomia-01.jpg ... gastronomia-06.jpg
  wnetrza/              -> wnetrza-01.jpg ... wnetrza-06.jpg
  event/                -> event-01.jpg ... event-05.jpg
  biznes/               -> biznes-01.jpg ... biznes-05.jpg
  lifestyle/            -> lifestyle-01.jpg ... lifestyle-05.jpg
  o-mnie/               -> portret-autora.jpg (zdjęcie w sekcji O mnie)
  og/                   -> og-cover.jpg (1200x630 — obraz Open Graph / social share)
  projekty/<slug>/      -> cover.jpg + g-1.jpg ... g-6.jpg (galeria pojedynczej realizacji)
```

Każdy plik w `data/projects.ts` i `data/services.ts` odwołuje się do konkretnej ścieżki
oraz podaje `width`/`height` oryginału — to wymagane przez `next/image` do wyliczenia
proporcji bez przeskoku layoutu (CLS). Podmieniając zdjęcie na własne, zaktualizuj
też `width`/`height` w odpowiednim wpisie w `data/`, jeśli różnią się od placeholdera.

Zobacz też: README.md w głównym katalogu projektu, sekcja "Jak dodawać nowe zdjęcia"
oraz "Jak dodawać nowe realizacje".
