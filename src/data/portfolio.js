export const PORTFOLIO_CATEGORIES = {
  PROJECT_TYPES: {
    AUDIOBOOK: "Livre audio",
    DOUBLAGE: "Doublage",
    COMMERCIAL: "Commerciale",
    INSTITUTIONNEL: "Institutionnelle",
    VOIXOFF: "Voix off",
    PERSO: "Réalisation personnelle",
    DEMO: "Bande Demo",
  },
  VOCAL_STYLES: {
    JOUE: "Joué",
    NEUTRE: "Neutre",
    CHANTEE: "Chantée",
  },
};

export const PORTFOLIO = [
  {
    title: "Nouvelle Audio - Fausse Note",
    description:
      "Narration complète d'une nouvelle Thriller/Polar avec différentes voix de personnages. Travail sur l'intonation et le rythme pour maintenir l'engagement de l'auditeur.",
    media: "https://youtu.be/3WqsV-ipWYs",
    date: new Date(2025, 5, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.AUDIOBOOK,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Oscar Fedal",
      comment: "Tu as fait un incroyable boulot c’est vraiment génial!",
      logo: "oscar_fedal",
    },
    social: "https://www.oscarfedal.com/",
  },
  {
    title: "Voix Off - Spectacle de Magie",
    description:
      "Voix de mafieux grave et menaçante, utilisée en mise en scène pour instaurer une tension dramatique et immersive",
    media: "https://www.youtube.com/watch?v=IJrLhpnXIYY",
    date: new Date(2025, 2, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Magic Air one",
      comment: "Professionnel et très réactif. N'hésitez pas !",
      logo: "AirOne",
    },
    social: "https://www.instagram.com/magicairone/",
  },
  {
    title: "Voix off - Concours Cosplay",
    description:
      "Interprétation d’un personnage de manga avec une voix expressive et fidèle, renforçant l’immersion et l’impact scénique lors d’une performance cosplay.",
    media: "https://youtu.be/ToS7eVyGDBs",
    date: new Date(2025, 2, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Takehana",
      comment:
        "Commande parfaite ! J’ai fais appel à lui pour le doublage d’une prestation de cosplay et tout s’est déroulé à merveille, il a été très professionnel et a réalisé exactement ce que je voulais ! Je recommande ++++ merci encore :)",
    },
  },
  {
    title: "Voix institutionnelle – CMV",
    description:
      "Voix posée et pédagogique pour un projet de vulgarisation grand public sur le cytomégalovirus, alliant clarté et accessibilité.",
    media: "https://www.youtube.com/watch?v=FXPCO6ueTcc",
    date: new Date(2025, 6, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.INSTITUTIONNEL,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.NEUTRE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
    ],
    customer: {
      name: "Béatrice",
      comment:
        "Si vous recherchez une voix claire, engageante et parfaitement maîtrisée, Valentin est un choix idéal. Merci encore pour cette collaboration réussie !",
      logo: "tuto_tour",
    },
  },
  {
    title: "Voix éducative – Parentalité",
    description:
      "Dialogue naturel et empathique entre deux parents, destiné à rassurer et normaliser les difficultés des premiers mois avec bébé dans une vidéo de soutien aux jeunes familles.",
    media: "https://www.youtube.com/watch?v=cYPTaL46yPQ",
    date: new Date(2025, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.INSTITUTIONNEL,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
    ],
    customer: {
      name: "Béatrice",
      comment:
        "J’ai eu l’opportunité de travailler avec Valentin pour une prestation de voix off, et je recommande vivement ses services. Son professionnalisme, sa réactivité et la qualité de son travail sont remarquables. Il sait s’adapter aux besoins spécifiques du projet tout en apportant une touche personnelle qui fait la différence.",
      logo: "tuto_tour",
    },
  },
  {
    title: "Publicité Colocation",
    description:
      "Voix enjouée et complice pour des spots promouvant la vie en colocation, mettant en avant convivialité et esprit de partage.",
    media: "https://www.youtube.com/watch?v=HPHsrTw0CUk",
    date: new Date(2017, 9, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.COMMERCIAL,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.NEUTRE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
    ],
    customer: {
      name: "BubbleFlat",
      comment:
        "Valentin est très professionnel et délivre un travail de qualité dans le temps imparti avec des prix attractifs. Je recommande fortement son profil !",
      logo: "bubble_flat",
    },
  },
  {
    title: "Cours de Français - Voix d'exemple et mise en situation",
    description:
      "Voix parlée et jouée pour des mises en situation vivantes dans un cours de français langue étrangère, facilitant l’apprentissage par le dialogue et le contexte.",
    media: "img/sprachheld",
    date: new Date(2025, 6, 0),
    categories: [
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
    ],
    customer: {
      name: "Sprachheld",
      comment:
        "Valentin is a great voice actor! Working with him is a pleasure from start to finish, and we couldn’t be happier with the results. Thank you, Valentin — we’re already looking forward to the next project together!",
    },
  },
  {
    title: "Vidéo Institutionnel D'entreprise",
    description:
      "Doublage d’un personnage caméléon dans une vidéo interne, avec une voix expressive et professionnelle pour transmettre les messages clés de façon engageante et ludique.",
    media: "https://www.youtube.com/watch?v=SiymRe4E9IU",
    date: new Date(2025, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.INSTITUTIONNEL,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Benoit",
      comment:
        "Une très belle rencontre ! Valentin est impressionnant et force de proposition. Je vous invite à jeter un œil à ce qu’il partage sur les réseaux : sa palette est incroyablement riche, tant dans les registres qu’il explore que dans les émotions qu’il parvient à transmettre. Je vous le recommande vivement !",
    },
  },
  {
    title: "Serious Game - Santé et jeunesse",
    description:
      "Interprétation vivante et accessible de jeunes personnages pour des mises en situation pédagogiques, visant à vulgariser des sujets de santé auprès des ados et jeunes adultes.",
    media: "https://www.youtube.com/watch?v=ecmWqhO049E",
    date: new Date(2025, 6, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.INSTITUTIONNEL,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Clemence",
      comment:
        "Valentin a été très professionnel et réactif pour un rendu de qualité qui répondait à mes besoins. Au top👌!",
    },
  },
  {
    title: "Serious Game - Cuisine et IA",
    description:
      "Voix dynamique et incarnée pour un serious game ludique mêlant cuisine et intelligence artificielle, conçu pour initier les joueurs au prompting de manière interactive.",
    media: "img/cuisine_et_IA",
    date: new Date(2025, 6, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Studio Media Group",
      comment: null,
    },
  },
  {
    title: "Performance Live - Chant & Guitare",
    description:
      "Interprétation vocale en scène ouverte, chant en live accompagné à la guitare, dans une ambiance chaleureuse et authentique face au public.",
    media: "https://youtu.be/dIxsDGHfMr8",
    date: new Date(2025, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
    ],
  },
  {
    title: "Redoublage – Spike & Jet (Cowboy Bebop)",
    description:
      "Interprétation fidèle des voix de Spike et Jet, basée uniquement sur l’écoute de la VO, avec un travail précis sur le rythme, les intentions et la complémentarité des deux personnages.",
    media: "https://youtu.be/zow8ttYadU4",
    date: new Date(2025, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
    ],
  },
  {
    title: "Redoublage – Maugrey Fol Œil (Harry Potter 4)",
    description:
      "Voix grave et rugueuse pour incarner l’intensité et la paranoïa du personnage, avec un travail d’interprétation fidèle à l’original pour restituer son charisme troublant.",
    media: "https://youtu.be/f2BbCAsUmYo",
    date: new Date(2024, 10, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
    ],
  },
  {
    title: "Redoublage – Le Grinch",
    description:
      "Voix exagérée et théâtrale pour incarner l’humour grinçant et les sautes d’humeur du Grinch, avec un jeu vocal riche en nuances pour servir l’esprit cartoon du personnage.",
    media: "https://youtu.be/w_xXz4n68xA",
    date: new Date(2024, 12, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
    ],
  },
  {
    title: "Redoublage – Génie d’Aladdin",
    description:
      "Interprétation haute en couleur du Génie, mêlant doublage expressif et performance chantée, pour recréer l’énergie et l’humour de ce personnage culte.",
    media: "https://youtu.be/5hmKAOyUphw?si=CG2nnr28q-KIPwJg&t=24",
    date: new Date(2024, 10, 0),
    categories: [
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
    ],
  },
  {
    title: "Redoublage – Spider-Man & Dr. Octopus (PS4)",
    description:
      "Interprétation intense et émotionnelle de la scène finale entre Peter Parker et Otto Octavius, mêlant tension dramatique et vulnérabilité pour restituer la force narrative du jeu.",
    media: "https://youtu.be/7EP30jHrbIY",
    date: new Date(2025, 1, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
    ],
  },
  {
    title: "Redoublage – Syndrome (Les Indestructibles)",
    description:
      "Voix arrogante et survoltée pour capturer l’excentricité et la mégalomanie de Syndrome, avec un jeu énergique fidèle au ton satirique du personnage.",
    media: "https://youtu.be/2PvQjGYAG7s",
    date: new Date(2025, 1, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
    ],
  },
  {
    title: "Bande Démo 2025 - Voix Gutturale",
    description:
      "Exploration d’un registre grave et intense, mettant en valeur une voix gutturale maîtrisée, utilisée pour créer tension, autorité et impact dramatique.",
    media: "https://youtu.be/MBo0clfnniU",
    date: new Date(2025, 4, 0),
    categories: [PORTFOLIO_CATEGORIES.PROJECT_TYPES.DEMO],
  },
  {
    title: "Bande Demo 2025 - Voix Claire",
    description:
      "Voix lumineuse et naturelle, adaptée à des registres variés : narration accessible, dialogue vivant, ton pédagogique ou publicitaire engageant.",
    media: "https://youtu.be/0u0IResVWOE",
    date: new Date(2025, 4, 0),
    categories: [PORTFOLIO_CATEGORIES.PROJECT_TYPES.DEMO],
  },
  {
    title: "Bande Demo 2025 - Voix Commerciale",
    description:
      "Voix dynamique et impactante, conçue pour capter l’attention et valoriser les messages publicitaires avec énergie, clarté et justesse de ton.",
    media: "https://youtu.be/IRvnIV3ac3A",
    date: new Date(2025, 4, 0),
    categories: [PORTFOLIO_CATEGORIES.PROJECT_TYPES.DEMO],
  },
  {
    title: "Conte audio – Enfants",
    description:
      "Réalisation complète d’une nouvelle audio pour enfants : narration expressive, habillage sonore et composition musicale originale pour une immersion douce et magique.",
    media: "https://youtu.be/pXrC6YA52Bw",
    date: new Date(2025, 5, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.AUDIOBOOK,
    ],
  },
  {
    title: "Performance Live - Chant",
    description:
      "Interprétation vocale en direct sur scène, alliant présence scénique, justesse et émotion pour créer une connexion authentique avec le public.",
    media: "https://youtu.be/Ipaq8KWxElc",
    date: new Date(2017, 7, 0),
    categories: [
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
    ],
  },
  {
    title: "Publicité Radio – Carrefour",
    description:
      "Voix enjouée et rythmée pour une publicité radio promotionnelle, mettant en valeur les offres Carrefour avec clarté et dynamisme.",
    media: "https://youtu.be/C50Fl81KsWY",
    date: new Date(2025, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.COMMERCIAL,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
  },
  {
    title: "Publicité Radio – Banque en ligne",
    description:
      "Voix moderne et rassurante pour une publicité radio, valorisant les services d’une e-bank avec un ton accessible, clair et professionnel.",
    media: "https://youtu.be/7FEkqs0W1so",
    date: new Date(2025, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.COMMERCIAL,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.NEUTRE,
    ],
  },
  {
    title: "Publicité Vidéo – Lot-et-Garonne",
    description:
      "Voix chaleureuse et dynamique pour une vidéo promotionnelle du Lot-et-Garonne, portée par le sourire et l’enthousiasme pour valoriser le territoire et son art de vivre.",
    media: "https://youtu.be/QsumzFuin0E",
    date: new Date(2025, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.COMMERCIAL,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.NEUTRE,
    ],
  },
];
