import type { SiteConfig } from "@shared/types";

/**
 * ====================================================
 *  CENTRAL CONFIG - Ändra här för att anpassa hemsidan
 * ====================================================
 *
 *  Byt ut bilder, logga, färger och texter nedan för
 *  att skräddarsy hemsidan till ditt företag.
 */
const siteConfig: SiteConfig = {
  brand: {
    name: "",
    logo: "",
    favicon: "/images/favicon.svg",
    primaryColor: "#111111",
    primaryColorDark: "#000000",
    accentColor: "#c9a84c",
  },

  hero: {
    title: "Professionell Bilrekond",
    subtitle:
      "Vi ger din bil den behandling den förtjänar. Från utvändig polish till komplett inre renovering.",
    backgroundImage: "/images/hero.jpg",
    ctaText: "Boka Nu",
  },

  services: [
    {
      id: "exterior",
      title: "Utvändig Tvätt & Polish",
      description:
        "Komplett utvändig behandling med handtvätt, lervård, polish och vaxning för en spegelblankt finish.",
      image: "/images/services/exterior.jpg",
      price: "Från 1 495 kr",
    },
    {
      id: "interior",
      title: "Invändig Rekond",
      description:
        "Djuprengöring av klädsel, mattor, instrumentpanel och alla ytor. Fräscht som nytt.",
      image: "/images/services/interior.jpg",
      price: "Från 1 995 kr",
    },
    {
      id: "complete",
      title: "Komplett Rekond",
      description:
        "Vår mest populära tjänst. Fullständig in- och utvändig rekonditionering av din bil.",
      image: "/images/services/complete.jpg",
      price: "Från 2 995 kr",
    },
    {
      id: "ceramic",
      title: "Keramisk Coating",
      description:
        "Långvarigt skydd med keramisk coating som ger ett djupt glans och skyddar lacken i flera år.",
      image: "/images/services/ceramic.jpg",
      price: "Från 4 995 kr",
    },
    {
      id: "detailing",
      title: "Detailing",
      description:
        "Premium detailing-tjänst för dig som vill ha det allra bästa. Varje yta behandlas noggrant.",
      image: "/images/services/detailing.jpg",
      price: "Från 3 495 kr",
    },
    {
      id: "paint-correction",
      title: "Lackrenovering",
      description:
        "Professionell lackrenovering som tar bort repor, oxidering och swirl marks.",
      image: "/images/services/paint.jpg",
      price: "Från 2 495 kr",
    },
  ],

  gallery: [
    {
      id: "1",
      before: "/images/gallery/before-1.jpg",
      after: "/images/gallery/after-1.jpg",
      caption: "Komplett rekond – BMW 3-serie",
    },
    {
      id: "2",
      before: "/images/gallery/before-2.jpg",
      after: "/images/gallery/after-2.jpg",
      caption: "Lackrenovering – Volvo XC60",
    },
    {
      id: "3",
      before: "/images/gallery/before-3.jpg",
      after: "/images/gallery/after-3.jpg",
      caption: "Invändig rekond – Mercedes C-klass",
    },
    {
      id: "4",
      before: "/images/gallery/before-4.jpg",
      after: "/images/gallery/after-4.jpg",
      caption: "Keramisk coating – Audi A4",
    },
  ],

  about: {
    title: "Om Oss",
    description:
      "Med över 10 års erfarenhet inom bilrekond levererar vi resultat i toppklass. Vi använder enbart premiumproduker och de senaste teknikerna för att ge din bil den bästa behandlingen möjligt. Vårt team av certifierade specialister brinner för bilar och detaljer.",
    image: "/images/about.jpg",
    features: [
      "Certifierade specialister",
      "Premiumproduker",
      "Nöjd-kund-garanti",
      "Hämta & lämna-tjänst",
    ],
  },

  contact: {
    address: "Industrivägen 12, 123 45 Stockholm",
    phone: "08-123 45 67",
    email: "info@premiumbildrekond.se",
    hours: [
      "Måndag–Fredag: 08:00–17:00",
      "Lördag: 09:00–14:00",
      "Söndag: Stängt",
    ],
  },

  footer: {
    text: "© 2025 Premium Bilrekond. Alla rättigheter förbehållna.",
    socials: [
      { platform: "Facebook", url: "https://facebook.com", icon: "facebook" },
      {
        platform: "Instagram",
        url: "https://instagram.com",
        icon: "instagram",
      },
    ],
  },

  seo: {
    defaultTitle: "Premium Bilrekond",
    titleTemplate: "%s | Premium Bilrekond",
    description:
      "Professionell bilrekond med certifierade specialister. Utvändig & invändig rekond, keramisk coating, detailing och lackrenovering.",
  },
};

export default siteConfig;
