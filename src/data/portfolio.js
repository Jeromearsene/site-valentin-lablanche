export const PORTFOLIO_CATEGORIES = {
  AUDIOBOOK: "livre audio",
  COMMERCIAL: "commercial",
};

export const PORTFOLIO = [
  {
    title: "Doublage livre audio",
    description:
      "Narration complète d'un roman de fiction contemporaine avec différentes voix de personnages. Travail sur l'intonation et le rythme pour maintenir l'engagement de l'auditeur.",
    media: null,
    date: new Date(2025, 0, 1),
    categories: [PORTFOLIO_CATEGORIES.AUDIOBOOK],
    customer: {
      name: "Musso",
    },
  },
  {
    title: "Publicité télévisée",
    description:
      "Voix off pour une campagne publicitaire nationale. Ton dynamique et engageant pour promouvoir un nouveau produit technologique.",
    media: "https://www.youtube.com/watch?v=zow8ttYadU4",
    date: new Date(2025, 3, 14),
    categories: [PORTFOLIO_CATEGORIES.COMMERCIAL],
    customer: {
      name: "SAS Video",
      logo: "image.webp",
      comment: "Très professionnel, merci !",
    },
  },
  {
    title: "Documentaire historique",
    description:
      "Narration d'un documentaire de 90 minutes sur l'histoire de France. Registre sérieux et informatif avec une diction claire.",
    media: "link_to_audio",
    date: new Date(2024, 11, 20),
    categories: [PORTFOLIO_CATEGORIES.AUDIOBOOK],
    customer: {
      name: "Productions Heritage",
      comment: "Excellente prestation, très satisfait du résultat final.",
    },
  },
  {
    title: "Spot radio",
    description:
      "Série de spots publicitaires radio pour une chaîne de magasins. Adaptation du ton selon les différents produits présentés.",
    media: "link_to_audio_2",
    date: new Date(2024, 10, 5),
    categories: [PORTFOLIO_CATEGORIES.COMMERCIAL],
    customer: {
      name: "Radio Plus",
      logo: "radio_logo.webp",
    },
  },
];
