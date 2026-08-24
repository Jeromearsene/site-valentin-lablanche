export const PORTFOLIO_CATEGORIES = {
  PROJECT_TYPES: {
    AUDIOBOOK: "Livre audio",
    DOUBLAGE: "Doublage",
    COMMERCIAL: "Commerciale",
    INSTITUTIONNEL: "Institutionnelle",
    VOIXOFF: "Voix off",
    PERSO: "Réalisation personnelle",
    DEMO: "Bande Demo",
    JEUXVIDEO: "Jeux vidéo",
    SCENE: "Scène",
    LONGTERME: "Long terme"
  },
  VOCAL_STYLES: {
    JOUE: "Joué",
    NEUTRE: "Neutre",
    CHANTEE: "Chantée",
  },
};

export const PORTFOLIO = [
  {
    title: "Chorale - Requiem de mozart au festival de Toulouse",
    description:
      "Interprétation chorale avec le chœur toulousain Nota Bene au Théâtre de la Cité, pour le Requiem de Mozart alliant intensité et précision musicale.",
    media: "https://youtube.com/shorts/bKPUfDtJ5Wk",
    date: new Date(2025, 7, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE,
    ],
  },
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
  {
    title: "Voix off narrative – Vidéo Instagram",
    description:
      "Voix off grave et profonde pour une vidéo narrative au format court, inspirée des narrations feuilletonnantes à la Desperate Housewives et du timbre velouté de Benoît Allemane.",
    media: "https://youtu.be/XLtM7vhjOAI",
    date: new Date(2025, 6, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Audrey Lisador",
      comment:
        "Bienveillant, à l'écoute et une communication parfaite sur le projet ! Le résultat de son travail est à la hauteur de ce que j'attendais pour mes vidéos. Je recommande fortement, Encore un grand merci",
    },
  },
  {
    title: "Voix institutionnelle – Cadre légal d'un médicament",
    description:
      "Voix claire et posée pour une vidéo interne détaillant le cadre légal d'un médicament et ses indications, avec un ton neutre et précis au service d'une information rigoureuse.",
    media: "img/bright",
    date: new Date(2025, 7, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.INSTITUTIONNEL,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.NEUTRE,
    ],
    customer: {
      name: "BRIGHT",
      comment: null,
    },
  },
  {
    title: "Livre audio – Les Infidèles (Théo Mercier 2)",
    description:
      "Narration incarnée et rythmée pour la suite des enquêtes d'un policier racontant ses déboires, avec un travail sur les voix de personnages et le ton du récit pour maintenir l'engagement de l'auditeur.",
    media: "https://youtu.be/u9axnEupDH0",
    date: new Date(2025, 8, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.AUDIOBOOK,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Oscar Fedal",
      comment: null,
      logo: "oscar_fedal",
    },
  },
  {
    title: "Voix off – Habillage d'album",
    description:
      "Voix chaude et complice pour l'habillage d'un album, dans le registre assumé des voix off de comédies romantiques classiques, jouant du cliché avec un second degré maîtrisé.",
    media: "https://www.youtube.com/watch?v=CYMJzHEwwo0",
    date: new Date(2025, 8, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Adam Vercamer",
      comment: null,
    },
  },
  {
    title: "Voix off – Escape Game (Génie & Vizir)",
    description:
      "Double interprétation pour l'habillage sonore d'un escape game, entre un génie survolté et facétieux et un vizir grave et machiavélique, avec un jeu expressif au service de l'immersion des joueurs.",
    media: "https://youtu.be/NpwNcPp08-E",
    date: new Date(2025, 10, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Zone 15",
      comment: null,
    },
  },
  {
    title: "Jeu vidéo – PNJ de Faehnor Online",
    description:
      "Interprétation de deux PNJ de quête pour le jeu vidéo Faehnor Online, entre un corsaire jovial et haut en couleur et un chef de garde sous-marin blasé, avec un contraste de timbres au service de chaque personnage.",
    media: "https://youtu.be/6S4DXMVi7dA",
    date: new Date(2025, 10, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.JEUXVIDEO,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Faehnor Online",
      comment: null,
    },
  },
  {
    title: "Chorale – Čiurlionis, Projet Jura",
    description:
      "Interprétation en pupitre ténor autour des œuvres de Čiurlionis pour le Projet Jura, avec l'Ensemble Vocal Nota Bene dirigé par Delphine Armand et le CRR de Toulouse sous la direction de Rolandas Muleika, à la découverte d'un répertoire rare.",
    media: "img/nota_bene_jura",
    date: new Date(2025, 11, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE,
    ],
  },
  {
    title: "Chorale – Messa di Gloria de Puccini",
    description:
      "Interprétation en pupitre ténor de la Messa di Gloria de Puccini avec l'Ensemble Vocal Nota Bene et l'Orchestre de Chambre de Toulouse, sous la direction d'Edwin Crossley-Mercer, dans le cadre d'un concert de noel pour Castel Artes.",
    media: "img/nota_bene_messa_di_gloria",
    date: new Date(2025, 12, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE,
    ],
  },
  {
    title: "Voix off narrative – Publicité de livre",
    description:
      "Interprétation d'un personnage et création d'ambiance pour la publicité d'un livre, avec un traitement volontairement dégradé (micro bas de gamme, écho et réverbération) au service de l'immersion du spectateur.",
    media: "https://youtu.be/EKeZEihjGHE",
    date: new Date(2025, 12, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "thomasrecher",
      comment:
        "Excellente collaboration. Valentin est très à l’écoute, force de proposition et d’une grande justesse dans l’interprétation. Le travail est soigné, de qualité, et les ajustements sont compris et intégrés avec beaucoup de professionnalisme. Je recommande sans hésiter.",
    },
  },
  {
    title: "Voix off YouTube – Anecdotes Naruto",
    description:
      "Narration rythmée et complice pour une vidéo YouTube consacrée aux anecdotes autour de Naruto, avec un phrasé dynamique et des relances d'énergie pour capter l'attention du spectateur et la maintenir.",
    media: "https://www.youtube.com/watch?v=4BYRQRsV3cM",
    date: new Date(2026, 2, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Mélio",
      comment: 
      "Valentin a fait preuve d’un grand professionnalisme du début à la fin du projet. La qualité de la voix off était irréprochable et a parfaitement répondu à mes attentes. Je le recommande vivement à toute personne à la recherche d'une prestation de qualité !",
    },
  },
  {
    title: "Voix off & chant – Spectacle cosplay (Lucifer)",
    description:
      "Interprétation du personnage de Lucifer, entre jeu parlé et partie chantée, pour la bande son d'un spectacle de cosplay, avec un timbre théâtral au service de la présence scénique.",
    media: "https://youtu.be/pL94XeMt6Bs",
    date: new Date(2026, 2, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE,
    ],
    customer: {
      name: "Elea Jeannot",
      comment: null,
    },
  },
  {
    title: "Chorale – Gloria de Poulenc",
    description:
      "Interprétation en pupitre ténor du Gloria de Poulenc avec l'Ensemble Vocal Nota Bene et Les Conférences Vocales, accompagnés par l'orchestre Toulouse Pink Octopus, sous la direction de Jean-Guy Olive.",
    media: "img/nota_bene_gloria",
    date: new Date(2026, 3, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE,
    ],
  },
  {
    title: "Doublage – Personnage secondaire (dessin animé Spider-Man)",
    description:
      "Interprétation d'un personnage secondaire pour un dessin animé Spider-Man réalisé par Licarion. Projet actuellement en cours de production.",
    media: "img/licarion",
    date: new Date(2026, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Licarion",
      comment: 
      "Très bon comédien, efficace, arrive à s'adapter aux demandes spécifiques en terme de ton, rythme. Côté technique parfait, répond vite. Je recommande !",
    },
  },
  {
    title: "Voix personnage YouTube – Pokémon",
    description:
      "Interprétation d'un personnage secondaire de l'univers Pokémon pour une vidéo produite par Nionx sur YouTube, avec un jeu teinté d'humour (projet actuellement en cours de production).",
    media: "img/nionx",
    date: new Date(2026, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Nionx",
      comment: null,
    },
  },
  {
    title: "Chorale – Stabat Mater de Dvořák",
    description:
      "Interprétation en pupitre ténor du Stabat Mater de Dvořák à la Halle aux Grains, avec l'Ensemble Vocal Nota Bene et l'ensemble de chœur du Conservatoire de Toulouse, sous la direction de Christophe Millet.",
    media: "https://www.youtube.com/watch?v=YS_iGWai2-E",
    date: new Date(2026, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE,
    ],
  },
  {
    title: "Jeu vidéo – Voix de créature (mod Skyrim)",
    description:
      "Interprétation d'une voix de créature pour un mod dédié de Skyrim, traduit et produit par La Confrérie des Traducteurs, avec un travail de texture vocale au service de l'immersion dans l'univers du jeu.",
    media: "https://youtu.be/d03ygjI3s-g",
    date: new Date(2026, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.JEUXVIDEO,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "La Confrérie des Traducteurs",
      comment: "J'ai eu le plaisir de travailler avec Valentin sur un petit projet de doublage bénévole pour le jeu vidéo Skyrim et il a été réactif et force de proposition pour trouver une voix unique qui convenait au personnage ! Au plaisir de retravailler avec toi, merci beaucoup :)",
    },
  },
  {
    title: "Jeu vidéo – Nocturne For Cyl-hestia",
    description:
      "Interprétation d'un personnage pour le jeu Nocturne For Cyl-hestia, avec une voix grave et gutturale pour le chef de la garde, main droite du dictateur en place, au service d'une présence menaçante.",
    media: "https://youtu.be/DrVwwNk7JfQ",
    date: new Date(2026, 4, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.JEUXVIDEO,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Spore & Sorcery",
      comment: null,
    },
  },
  {
    title: "Chorale – A Painted Symphony (Clair Obscur : Expedition 33)",
    description:
      "Interprétation en pupitre ténor sur les dates de Toulouse et Carcassonne de la tournée A Painted Symphony, autour de Clair Obscur : Expedition 33, avec l'Ensemble Vocal Nota Bene et L'Orchestre Curieux dirigé par Daniel Sicard, aux côtés de Lorien Testard et Alice Duport-Percier, dans une production Bleu Citron et Sandfall Interactive.",
    media: "img/nota_bene_clair_obscur",
    date: new Date(2026, 5, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.PERSO,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE,
    ],
  },
  {
    title: "Publicité – Rodenstock",
    description:
      "Voix claire et posée pour la publicité d'un nouveau produit, avec une approche scientifique et pédagogique qui en explicite les bénéfices tout en installant un climat de confiance.",
    media: "https://youtu.be/C5oCeg9PXqg",
    date: new Date(2026, 5, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.COMMERCIAL,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.NEUTRE,
    ],
    customer: {
      name: "Rodenstock",
      comment:
        "Extremement satisfaite du professionnalisme et de la reactivite de Valentin. Il a retravaillé a plusieurs reprises pour que cela corresponde a nos attentes ! Je recommande",
    },
  },
  {
    title: "Voix éducative – Ville de Lacanau",
    description:
      "Interprétation d'un personnage au service d'un contenu éducatif pour la ville de Lacanau, avec un ton sympathique et complice qui donne envie d'écouter et rend le propos vulgarisé accessible à tous.",
    media: "img/baf",
    date: new Date(2026, 6, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.INSTITUTIONNEL,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "La BAF",
      comment:
        "Première fois que je travaille avec Valentin pour une voix off et je ne regrette pas. Il est très réactif, professionnel et c'est très agréable de travailler avec lui. Il comprend très vite ce que l'on veut et arrive à le retranscrire dans le ton de sa voix. C'était très important pour moi car il s'agissait de donner de la personnalité à un personnage motion design. J'espère avoir très vite de nouveaux projets à lui proposer. Un grand merci à toi Valentin.",
    },
  },
  {
    title: "Doublage – Hawkmon & Gennai (Digimon Kizuna)",
    description:
      "Doublage des personnages d'Hawkmon et de Gennai pour un fandub du film Digimon Kizuna, avec deux registres contrastés, l'un vif et compagnon, l'autre posé et mystérieux, pour une sortie prévue à l'automne 2026.",
    media: "https://www.youtube.com/watch?v=oVcXaSOrq1I",
    date: new Date(2026, 6, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.DOUBLAGE,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Digimon Project",
      comment: null,
    },
  },
  {
    title: "Voix institutionnelle – Ipsen",
    description:
      "Narration claire et pédagogique pour des vidéos institutionnelles Ipsen détaillant le fonctionnement de plusieurs process internes, avec un débit posé et structuré qui facilite la compréhension des équipes.",
    media: "https://youtube.com/watch?v=V6f4QrE8qWA&feature=youtu.be",
    date: new Date(2026, 7, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.INSTITUTIONNEL,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.NEUTRE,
    ],
    customer: {
      name: "Camille Farnier / Ipsen",
      comment:
        "Valentin a été super tout le long, force de proposition, disponible, arrangeant, il comprend vite et réajuste son jeu en fonction !",
    },
  },
  {
    title: "Vidéo inspirante – Foncia",
    description:
      "Voix chaleureuse et engageante pour une vidéo inspirante Foncia, avec un ton positif et fédérateur qui porte le message et donne de l'élan au récit.",
    media: "https://youtu.be/xDfVAsLi3Yo",
    date: new Date(2026, 7, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.COMMERCIAL,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.NEUTRE,
    ],
    customer: {
      name: "L'illuminerie / Foncia",
      comment:
        "Valentin a été très réactif tout au long du projet qui avait une deadline très serrée. Cela a été un vrai plaisir de travailler avec lui, je recommande sans hésiter !",
    },
  },
  {
    title: "Comédie musicale – Abysse Hotel",
    description:
      "Chanteur, danseur et comédien sur la comédie musicale Abysse Hotel à Toulouse, un spectacle mêlant jeu scénique, chorégraphies et chant, dont la première représentation est prévue fin novembre.",
    media: "img/abysse_hotel",
    date: new Date(2026, 1, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.SCENE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.LONGTERME,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.CHANTEE,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    social: "https://www.instagram.com/lesailesdelira",
  },
  {
    title: "Théâtre – Molière en milieu scolaire",
    description:
      "Comédien sur des adaptations de pièces de Molière à destination des écoles, collèges et lycées, avec un jeu vivant et accessible qui rend le répertoire classique attrayant pour le jeune public.",
    media: "img/mots_lierent",
    date: new Date(2026, 1, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.SCENE,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.LONGTERME,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
  },
  {
    title: "Voix off YouTube – Syrric Français",
    description:
      "Voix off, gestion et direction artistique pour la chaîne Syrric Français, avec une narration douce et posée sur de longues vidéos d'anecdotes autour du jeu vidéo, pensées pour accompagner l'endormissement des spectateurs.",
    media: "img/syrric",
    date: new Date(2026, 1, 0),
    categories: [
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.VOIXOFF,
      PORTFOLIO_CATEGORIES.PROJECT_TYPES.LONGTERME,
      PORTFOLIO_CATEGORIES.VOCAL_STYLES.JOUE,
    ],
    customer: {
      name: "Arcto",
      comment: null,
    },
  },
];