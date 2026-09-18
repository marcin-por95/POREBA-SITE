import type { ProjectCategory } from "@/types/project";

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  seoSlug: string;
  title: string;
  seoTitle: string;
  category: ProjectCategory | "content";
  shortDescription: string;
  description: string;
  contextDescription: string;
  detailsTitle: string;
  detailsParagraphs: string[];
  metaDescription: string;
  useCases: string[];
  process: ServiceProcessStep[];
  faq: ServiceFaq[];
  image: { src: string; width: number; height: number; alt: string };
}

export const services: Service[] = [
  {
    slug: "gastronomia",
    seoSlug: "fotografia-gastronomiczna-lublin",
    title: "Fotografia gastronomiczna",
    seoTitle: "Fotografia gastronomiczna Lublin",
    category: "gastronomia",
    shortDescription:
      "Zdjęcia dań, wnętrza lokalu i atmosfery, które budują apetyt i rozpoznawalność marki.",
    description:
      "Sesje dla restauracji, kawiarni, hoteli i marek spożywczych. Pracuję zarówno w naturalnym świetle dnia, jak i ze światłem błyskowym, dopasowując styl do charakteru lokalu — od kameralnej kawiarni po restaurację fine dining.",
    contextDescription:
      "Przed sesją ustalamy, które dania i przestrzenie są najważniejsze oraz gdzie zdjęcia będą publikowane. Inaczej planuję kadr do menu, inaczej zdjęcie otwierające stronę restauracji, a jeszcze inaczej pionowy materiał do Instagrama. Dzięki temu podczas jednej realizacji można zbudować spójny bank zdjęć do kilku kanałów komunikacji.",
    detailsTitle: "Zdjęcia restauracji, które pracują w wielu kanałach",
    detailsParagraphs: [
      "Dobra fotografia gastronomiczna nie kończy się na pojedynczym zdjęciu talerza. W jednej sesji możemy połączyć fotografie dań, detali, baru, wnętrza lokalu oraz ujęcia pokazujące atmosferę miejsca. Taki zestaw sprawdza się na stronie internetowej, w wizytówce Google, w social media, materiałach reklamowych i przy aktualizacji menu.",
      "W przypadku restauracji z Lublina mogę zaplanować materiał tak, aby zachować spójny styl całej marki: podobne światło, temperaturę kolorystyczną i sposób kadrowania. Jeśli lokal regularnie zmienia kartę, możemy też opracować powtarzalny schemat kolejnych sesji, dzięki któremu nowe zdjęcia nie będą wyglądały jak przypadkowy dodatek do wcześniejszych materiałów.",
    ],
    metaDescription:
      "Fotografia gastronomiczna w Lublinie dla restauracji, hoteli, kawiarni i marek. Zdjęcia dań, menu, wnętrz oraz content do social media i reklam.",
    useCases: [
      "Menu i karty dań",
      "Social media i Google Business Profile",
      "Materiały reklamowe",
      "Strona internetowa lokalu",
    ],
    process: [
      {
        title: "Plan ujęć i dań",
        description:
          "Ustalamy listę potraw, wnętrz i detali oraz formaty potrzebne na stronę, do menu i social media.",
      },
      {
        title: "Sesja w lokalu",
        description:
          "Buduję światło i kompozycję na miejscu, pilnując spójności kolejnych dań oraz naturalnego charakteru restauracji.",
      },
      {
        title: "Selekcja i postprodukcja",
        description:
          "Opracowuję wybrane kadry tak, aby kolory jedzenia i wnętrza wyglądały atrakcyjnie, ale nadal wiarygodnie.",
      },
    ],
    faq: [
      {
        question: "Jak przygotować restaurację do sesji zdjęciowej?",
        answer:
          "Najlepiej wcześniej ustalić listę dań, kolejność ich wydawania oraz miejsca, w których będziemy fotografować. Pomagam uporządkować plan tak, aby kuchnia nie przygotowywała wszystkiego jednocześnie i żeby wykorzystać najlepsze światło w lokalu.",
      },
      {
        question: "Czy podczas jednej sesji można zrobić zdjęcia dań i wnętrza?",
        answer:
          "Tak. Zakres ustalamy przed realizacją i możemy połączyć fotografię menu z ujęciami wnętrza, baru, zespołu oraz detalami budującymi atmosferę marki.",
      },
      {
        question: "Czy zdjęcia mogą być przygotowane także do Instagrama i reklam?",
        answer:
          "Tak. Już na etapie planowania uwzględniam potrzebne proporcje i zastosowania, dzięki czemu część kadrów powstaje z myślą o pionowych publikacjach, a część o stronie internetowej i materiałach reklamowych.",
      },
      {
        question: "Czy realizujesz sesje gastronomiczne tylko w Lublinie?",
        answer:
          "Bazuję w Lublinie, ale pracuję również poza województwem lubelskim. Przy realizacjach wyjazdowych zakres i logistykę ustalam indywidualnie.",
      },
    ],
    image: {
      src: "/images/gastronomia/gastronomia-01.jpg",
      width: 1600,
      height: 2000,
      alt: "Fotografia gastronomiczna dla restauracji w Lublinie",
    },
  },
  {
    slug: "wnetrza-hotele",
    seoSlug: "fotografia-wnetrz-lublin",
    title: "Fotografia wnętrz i hoteli",
    seoTitle: "Fotografia wnętrz i hoteli Lublin",
    category: "wnetrza",
    shortDescription:
      "Architektura wnętrz, hotele i przestrzenie komercyjne pokazane w najlepszym świetle.",
    description:
      "Fotografuję wnętrza tak, aby oddać ich rzeczywisty charakter — proporcje, materiały, światło i funkcję przestrzeni. Realizuję sesje dla hoteli, apartamentów, restauracji, biur i lokali usługowych.",
    contextDescription:
      "Przed zdjęciami ustalamy, które pomieszczenia są kluczowe sprzedażowo i gdzie materiał będzie wykorzystany. Dla hotelu mogą to być pokoje, restauracja, SPA i strefy wspólne, a dla apartamentu lub inwestycji — układ wnętrza, detale wyposażenia i relacja pomiędzy pomieszczeniami.",
    detailsTitle: "Fotografia wnętrz pod stronę, Booking i materiały sprzedażowe",
    detailsParagraphs: [
      "W fotografii wnętrz ważne jest nie tylko szerokie pokazanie pomieszczenia. Potencjalny gość lub klient potrzebuje także detali, które pomagają zrozumieć standard, klimat i sposób korzystania z przestrzeni. Dlatego serię buduję od kadrów opisujących układ wnętrza do ujęć materiałów, światła i charakterystycznych elementów.",
      "Dla hoteli i obiektów noclegowych planuję zestaw zdjęć tak, aby można było wykorzystać go równolegle na stronie internetowej, portalach rezerwacyjnych oraz w komunikacji social media. Pilnuję naturalnej perspektywy i realistycznej kolorystyki, ponieważ zdjęcie powinno zachęcać do rezerwacji, ale nie tworzyć oczekiwań oderwanych od rzeczywistego wyglądu miejsca.",
    ],
    metaDescription:
      "Fotografia wnętrz w Lublinie dla hoteli, apartamentów, restauracji, biur i nieruchomości. Profesjonalne zdjęcia na Booking, Airbnb i strony internetowe.",
    useCases: [
      "Portale rezerwacyjne (Booking, Airbnb)",
      "Strony internetowe",
      "Materiały dla inwestorów",
      "Prasa i publikacje branżowe",
    ],
    process: [
      {
        title: "Lista przestrzeni",
        description:
          "Ustalamy priorytetowe pokoje, strefy wspólne i detale oraz kanały, do których mają trafić zdjęcia.",
      },
      {
        title: "Przygotowanie i zdjęcia",
        description:
          "Na miejscu korygujemy drobne elementy aranżacji, a następnie fotografuję przestrzeń z naturalną perspektywą i kontrolowanym światłem.",
      },
      {
        title: "Obróbka wnętrz",
        description:
          "Koryguję ekspozycję, balans bieli i geometrię, zachowując realny wygląd materiałów, kolorów i proporcji pomieszczeń.",
      },
    ],
    faq: [
      {
        question: "Jak przygotować hotel lub apartament do fotografowania?",
        answer:
          "Najważniejsze są porządek, kompletne wyposażenie i usunięcie przypadkowych elementów z kadrów. Przed realizacją można ustalić listę pomieszczeń oraz kolejność zdjęć, aby sprawnie wykorzystać światło dzienne.",
      },
      {
        question: "Czy zdjęcia nadają się na Booking i Airbnb?",
        answer:
          "Tak. Podczas sesji uwzględniam kadry pokazujące zarówno całe pomieszczenia, jak i najważniejsze udogodnienia. Materiał można wykorzystać na portalach rezerwacyjnych, stronie obiektu i w social media.",
      },
      {
        question: "Czy fotografujesz także restauracje i SPA w hotelu?",
        answer:
          "Tak. Sesję hotelową można rozszerzyć o gastronomię, strefę wellness, recepcję, części wspólne i detale, aby stworzyć jeden spójny zestaw zdjęć całego obiektu.",
      },
      {
        question: "Czy realizujesz fotografię wnętrz poza Lublinem?",
        answer:
          "Tak. Lublin jest moją bazą, ale realizuję projekty także w innych miastach. Przy większych zleceniach dojazd i harmonogram ustalam przed sesją.",
      },
    ],
    image: {
      src: "/images/wnetrza/wnetrza-01.jpg",
      width: 1600,
      height: 1600,
      alt: "Profesjonalna fotografia wnętrz hotelowych w Lublinie",
    },
  },
  {
    slug: "portret",
    seoSlug: "fotografia-portretowa-lublin",
    title: "Fotografia portretowa",
    seoTitle: "Fotografia portretowa Lublin",
    category: "portret",
    shortDescription:
      "Portrety indywidualne i firmowe, które budują wizerunek osobisty i marki.",
    description:
      "Realizuję sesje portretowe dla osób prywatnych, ekspertów, twórców i zespołów firmowych. Zależy mi na naturalności i charakterze — portret ma pokazywać osobę, a nie tylko dobrze wyglądać.",
    contextDescription:
      "Przed sesją ustalamy, jaki efekt ma osiągnąć zdjęcie: profesjonalny wizerunek eksperta, swobodniejszy personal branding, portret do LinkedIn czy materiał na stronę firmy. Na tej podstawie dobieramy miejsce, charakter światła, ubiór i sposób prowadzenia osoby przed aparatem.",
    detailsTitle: "Portret dopasowany do osoby i miejsca publikacji",
    detailsParagraphs: [
      "Nie zakładam jednego schematu dla każdej osoby. Innego języka wizualnego potrzebuje lekarz, prawnik lub menedżer, a innego twórca, właściciel restauracji czy osoba budująca markę osobistą. Celem jest zdjęcie profesjonalne, ale niewymuszone i zgodne z tym, jak chcesz być odbierany.",
      "Sesję możemy zrealizować w miejscu pracy, w wybranym wnętrzu lub plenerze. Jeśli zdjęcia mają trafić do kilku kanałów, planuję zarówno klasyczne kadry profilowe, jak i szersze ujęcia pozostawiające miejsce na tekst lub grafikę. Dzięki temu jedna sesja może dostarczyć materiału do strony, LinkedIn, publikacji prasowych i social media.",
    ],
    metaDescription:
      "Fotografia portretowa w Lublinie. Profesjonalne sesje wizerunkowe, personal branding, LinkedIn, portrety ekspertów i sesje indywidualne.",
    useCases: [
      "Portfolio osobiste i LinkedIn",
      "Strony eksperckie",
      "Materiały prasowe",
      "Personal branding",
    ],
    process: [
      {
        title: "Kierunek sesji",
        description:
          "Ustalamy zastosowanie zdjęć, styl, miejsce i zestawy ubrań, tak aby sesja była spójna z Twoim wizerunkiem.",
      },
      {
        title: "Prowadzenie podczas zdjęć",
        description:
          "Pomagam z ustawieniem sylwetki i mimiką, bez sztywnego pozowania i bez wymuszania nienaturalnych gestów.",
      },
      {
        title: "Naturalna obróbka",
        description:
          "Retuszuję z zachowaniem struktury skóry i cech twarzy, dbając przede wszystkim o światło, kolor i spójność serii.",
      },
    ],
    faq: [
      {
        question: "Nie umiem pozować — czy to problem?",
        answer:
          "Nie. Podczas sesji podpowiadam ustawienie sylwetki, dłoni i kierunek spojrzenia. Nie oczekuję od osoby fotografowanej znajomości pozowania.",
      },
      {
        question: "Gdzie można wykonać sesję portretową w Lublinie?",
        answer:
          "Miejsce dobieramy do celu zdjęć. Może to być Twoje biuro, hotel, wybrane wnętrze lub plener. Najważniejsze jest dopasowanie otoczenia do wizerunku, który chcesz zbudować.",
      },
      {
        question: "Czy wykonujesz portrety dla całych zespołów?",
        answer:
          "Tak. Przy większej liczbie osób ustalam spójny schemat światła i kadrowania, dzięki czemu portrety pracowników tworzą jednolity zestaw na stronie firmy.",
      },
      {
        question: "Czy retusz zmienia wygląd twarzy?",
        answer:
          "Stawiam na naturalną postprodukcję. Usuwam elementy tymczasowe i poprawiam światło czy kolor, ale nie chcę tworzyć efektu plastikowej skóry ani osoby, której klient nie rozpoznaje.",
      },
    ],
    image: {
      src: "/images/portret/portret-01.jpg",
      width: 1600,
      height: 2000,
      alt: "Profesjonalna fotografia portretowa w Lublinie",
    },
  },
  {
    slug: "biznes",
    seoSlug: "fotografia-biznesowa-lublin",
    title: "Fotografia biznesowa",
    seoTitle: "Fotografia biznesowa Lublin",
    category: "biznes",
    shortDescription:
      "Zdjęcia zespołów, biur i procesów pracy dla firm i marek.",
    description:
      "Fotografia biznesowa pokazuje firmę przez ludzi, przestrzeń i sposób pracy. Realizuję portrety pracowników, zdjęcia zespołowe oraz reportażowe ujęcia procesów do stron internetowych, materiałów rekrutacyjnych i komunikacji marki.",
    contextDescription:
      "Przed realizacją ustalamy, jakie podstrony i materiały trzeba wypełnić zdjęciami. Dzięki temu zamiast przypadkowej galerii powstaje zestaw odpowiadający konkretnym potrzebom: portrety, hero image na stronę, ujęcia biura, spotkań, obsługi klienta czy codziennej pracy zespołu.",
    detailsTitle: "Spójny bank zdjęć dla firmy zamiast przypadkowych stocków",
    detailsParagraphs: [
      "Własne fotografie pomagają pokazać rzeczywistych ludzi i prawdziwe miejsce pracy. To szczególnie ważne na stronach usług profesjonalnych, w employer brandingu i rekrutacji, gdzie odbiorca chce zobaczyć, z kim będzie współpracował i jak wygląda organizacja od środka.",
      "Sesję biznesową planuję tak, aby materiał był możliwie uniwersalny. Oprócz kadrów kluczowych dla strony można przygotować poziome i pionowe zdjęcia do LinkedIn, materiałów PR, prezentacji i social media. Przy większych zespołach dbam o powtarzalny sposób kadrowania portretów, dzięki czemu późniejsze dodawanie nowych osób nie rozbija wizualnej spójności.",
    ],
    metaDescription:
      "Fotografia biznesowa w Lublinie: portrety pracowników, zdjęcia zespołów, biur i procesów pracy. Profesjonalny content dla firm i marek.",
    useCases: [
      "Strony firmowe",
      "Materiały rekrutacyjne",
      "Raporty i prezentacje",
      "LinkedIn firmowy",
    ],
    process: [
      {
        title: "Brief komunikacyjny",
        description:
          "Ustalamy listę potrzebnych kadrów, liczbę osób, lokalizacje i sposób wykorzystania materiału.",
      },
      {
        title: "Realizacja w firmie",
        description:
          "Fotografuję portrety i sytuacje pracy w sposób, który możliwie mało zakłóca normalne funkcjonowanie zespołu.",
      },
      {
        title: "Spójna seria",
        description:
          "Selekcja i obróbka utrzymują wspólną kolorystykę oraz charakter, aby zdjęcia działały razem na stronie i w materiałach marki.",
      },
    ],
    faq: [
      {
        question: "Czy sesję biznesową można wykonać w naszej siedzibie?",
        answer:
          "Tak. To często najlepsze rozwiązanie, ponieważ oprócz portretów możemy od razu przygotować zdjęcia biura, zespołu i rzeczywistych procesów pracy.",
      },
      {
        question: "Czy można sfotografować większą liczbę pracowników jednego dnia?",
        answer:
          "Tak. Przy większym zespole przygotowuję powtarzalne stanowisko i harmonogram, aby kolejne osoby mogły przechodzić przez sesję sprawnie i otrzymać spójne portrety.",
      },
      {
        question: "Czy wykonujesz zdjęcia employer branding i rekrutacyjne?",
        answer:
          "Tak. Możemy zaplanować naturalne ujęcia zespołu, spotkań, biura i codziennej pracy, które firma wykorzysta w zakładce Kariera, ogłoszeniach oraz komunikacji w social media.",
      },
      {
        question: "Czy firma otrzymuje zdjęcia do różnych kanałów?",
        answer:
          "Zakres ustalamy przed sesją. Mogę zaplanować materiał pod stronę internetową, LinkedIn, prezentacje, publikacje PR oraz formaty wykorzystywane w social media.",
      },
    ],
    image: {
      src: "/images/biznes/biznes-01.jpg",
      width: 2000,
      height: 2500,
      alt: "Profesjonalna fotografia biznesowa w Lublinie",
    },
  },
  {
    slug: "event",
    seoSlug: "fotografia-eventowa-lublin",
    title: "Fotografia eventowa",
    seoTitle: "Fotograf eventowy Lublin",
    category: "event",
    shortDescription:
      "Relacje z konferencji, gal i wydarzeń firmowych — bez zakłócania ich przebiegu.",
    description:
      "Dokumentuję konferencje, gale, premiery, wydarzenia firmowe i spotkania branżowe. Skupiam się na kluczowych momentach, ludziach, detalach i atmosferze, pracując możliwie dyskretnie.",
    contextDescription:
      "Przed wydarzeniem ustalamy harmonogram, najważniejsze osoby, obowiązkowe ujęcia oraz sposób wykorzystania zdjęć. Dzięki temu podczas eventu wiadomo, które momenty mają pierwszeństwo — od przygotowania przestrzeni i powitania gości, przez wystąpienia i wręczenia nagród, po networking.",
    detailsTitle: "Fotorelacja, która pokazuje przebieg i atmosferę wydarzenia",
    detailsParagraphs: [
      "Dobry reportaż eventowy powinien być czytelny nawet dla osoby, która nie uczestniczyła w wydarzeniu. Dlatego materiał buduję jako historię: miejsce, identyfikacja wydarzenia, uczestnicy, prowadzący, kluczowe punkty programu, reakcje publiczności i mniej formalne momenty pomiędzy nimi.",
      "W przypadku wydarzeń firmowych zdjęcia często muszą szybko trafić do komunikacji. Już przed realizacją warto wskazać, czy priorytetem są social media, relacja prasowa, podsumowanie dla partnerów czy długoterminowe archiwum marki. Pozwala to dobrać kadry i kolejność pracy do realnych potrzeb organizatora.",
    ],
    metaDescription:
      "Fotograf eventowy Lublin. Profesjonalne fotorelacje z konferencji, gal, wydarzeń firmowych, premier i spotkań biznesowych.",
    useCases: [
      "Relacje w social media",
      "Materiały prasowe",
      "Archiwum firmowe",
      "Podsumowania dla partnerów",
    ],
    process: [
      {
        title: "Harmonogram i priorytety",
        description:
          "Poznaję plan wydarzenia, kluczowe osoby i momenty, których nie możemy przegapić.",
      },
      {
        title: "Reportaż na miejscu",
        description:
          "Pracuję dyskretnie, łącząc szerokie kadry przestrzeni z portretami, detalami i reakcjami uczestników.",
      },
      {
        title: "Selekcja materiału",
        description:
          "Buduję spójną historię wydarzenia i przygotowuję zdjęcia do publikacji w uzgodnionych kanałach.",
      },
    ],
    faq: [
      {
        question: "Jakie wydarzenia fotografujesz?",
        answer:
          "Realizuję przede wszystkim konferencje, gale, premiery, spotkania biznesowe, wydarzenia dla klientów i partnerów oraz wewnętrzne eventy firmowe.",
      },
      {
        question: "Czy przed eventem potrzebujesz harmonogramu?",
        answer:
          "Tak, nawet skrócony plan bardzo pomaga. Pozwala wcześniej zaznaczyć wystąpienia, wręczenia nagród, zdjęcia grupowe i inne momenty, które mają szczególne znaczenie dla organizatora.",
      },
      {
        question: "Czy można przygotować zdjęcia pod szybką publikację?",
        answer:
          "Taką potrzebę najlepiej ustalić przed wydarzeniem. Wtedy sposób selekcji i kolejność obróbki można dopasować do komunikacji prowadzonej w trakcie lub bezpośrednio po evencie.",
      },
      {
        question: "Czy pracujesz na wydarzeniach poza Lublinem?",
        answer:
          "Tak. Realizuję fotorelacje również poza Lublinem, a logistykę i zakres godzinowy ustalam indywidualnie z organizatorem.",
      },
    ],
    image: {
      src: "/images/event/event-01.jpg",
      width: 2000,
      height: 1500,
      alt: "Fotograf eventowy podczas wydarzenia w Lublinie",
    },
  },
  {
    slug: "content-social-media",
    seoSlug: "content-social-media-lublin",
    title: "Content dla social media",
    seoTitle: "Content social media Lublin — foto i wideo",
    category: "content",
    shortDescription:
      "Regularny content foto i wideo dopasowany do kalendarza publikacji marki.",
    description:
      "Tworzę pakiety zdjęć i krótkich form wideo dla marek, które potrzebują regularnego materiału do social media. Zamiast pojedynczych przypadkowych publikacji planujemy zestaw treści dopasowany do charakteru firmy i jej kalendarza komunikacji.",
    contextDescription:
      "Zakres może obejmować fotografie produktu lub usługi, ujęcia zespołu, wnętrza, detale, materiały lifestyle oraz krótkie pionowe wideo. Przed dniem zdjęciowym ustalamy listę tematów i formatów, dzięki czemu z jednej produkcji można przygotować materiał na kilka tygodni publikacji.",
    detailsTitle: "Regularny content zamiast tworzenia materiałów na ostatnią chwilę",
    detailsParagraphs: [
      "Stała komunikacja wizualna działa najlepiej, gdy zdjęcia i wideo powstają według jednego kierunku. Dlatego przy współpracy contentowej zwracam uwagę nie tylko na pojedynczy kadr, ale również na to, jak kolejne materiały wyglądają obok siebie na profilu i czy wspierają sposób, w jaki marka chce być odbierana.",
      "W Lublinie współpraca może być realizowana cyklicznie: przed każdym dniem zdjęciowym aktualizujemy listę tematów, promocji, nowych usług lub produktów. Pozwala to ograniczyć chaos produkcyjny i regularnie budować bibliotekę własnych materiałów bez ciągłego sięgania po zdjęcia stockowe.",
    ],
    metaDescription:
      "Profesjonalny content do social media w Lublinie. Zdjęcia, reels i krótkie wideo dla restauracji, hoteli, SPA, firm i lokalnych marek.",
    useCases: [
      "Instagram i TikTok",
      "Kalendarz treści",
      "Reels i krótkie wideo",
      "Spójność wizualna marki",
    ],
    process: [
      {
        title: "Plan contentu",
        description:
          "Ustalamy tematy, formaty, produkty lub usługi oraz liczbę materiałów potrzebnych na kolejny okres publikacji.",
      },
      {
        title: "Dzień zdjęciowy",
        description:
          "Realizuję serię zdjęć i ujęć wideo zgodnie z planem, dbając o różnorodność materiału i spójny styl.",
      },
      {
        title: "Materiały do publikacji",
        description:
          "Po selekcji i postprodukcji otrzymujesz uporządkowany zestaw treści gotowych do wykorzystania w ustalonych kanałach.",
      },
    ],
    faq: [
      {
        question: "Dla jakich firm tworzysz content do social media?",
        answer:
          "Najczęściej pracuję z restauracjami, hotelami, SPA, usługami lokalnymi i markami, które potrzebują regularnych zdjęć oraz krótkiego wideo do komunikacji.",
      },
      {
        question: "Czy można zaplanować kilka tygodni materiałów podczas jednego dnia zdjęciowego?",
        answer:
          "Tak. Właśnie dlatego przed produkcją przygotowujemy listę tematów i formatów. Im lepiej uporządkowany plan, tym więcej różnorodnych materiałów można stworzyć podczas jednej realizacji.",
      },
      {
        question: "Czy wykonujesz również pionowe wideo i reels?",
        answer:
          "Tak. Zakres współpracy może łączyć fotografie z krótkimi pionowymi formami wideo przygotowywanymi z myślą o Instagramie, TikToku i innych kanałach marki.",
      },
      {
        question: "Czy możliwa jest stała współpraca contentowa w Lublinie?",
        answer:
          "Tak. Przy regularnej współpracy możemy ustalić powtarzalny rytm produkcji i aktualizować listę tematów przed każdym kolejnym dniem zdjęciowym.",
      },
    ],
    image: {
      src: "/images/lifestyle/lifestyle-01.jpg",
      width: 1800,
      height: 2200,
      alt: "Tworzenie contentu do social media dla firm w Lublinie",
    },
  },
];

export function getServiceBySeoSlug(slug: string): Service | undefined {
  return services.find((service) => service.seoSlug === slug);
}
