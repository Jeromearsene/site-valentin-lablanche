import { User, Mic, Music, Gamepad2 } from "lucide-react";

export function Competences() {
  const competences = [
    {
      title: "Interprétation scénique",
      items: [
        "Soliste lors de spectacles",
        "Scènes ouvertes",
        "Spectacle de chansons françaises",
        'Prix de composition/interprétation (Festival "La bastide qui chante", Castillonnès 2012)',
        "Théâtre + théâtre d'impro (compagnie de théâtre)",
      ],
    },
    {
      title: "Chant",
      items: [
        "Conservatoire (2022 - en cours)",
        'Chorale ("Nota bene", 2022 - en cours)',
        "Cover & compositions (Chaîne Youtube & réseaux sociaux, en cours)",
        "Scènes ouvertes & soliste lors de spectacles",
      ],
    },
    {
      title: "Doublage",
      items: [
        "Doublage voix off (Bubble Flat, 2019)",
        "Doublage bande rythmo (Chaîne Youtube & réseaux sociaux, en cours)",
        "Projets Fiverr Jeu vidéo",
      ],
    },
    {
      title: "Animation",
      items: [
        "Soirée JDR comme MJ",
        "Présentateur et animateur de quiz et soirées jeux",
        "Live stream sur Twitch (Vallab) Émissions web",
      ],
    },
  ];

  const getIcon = (title) => {
    const icons = {
      "Interprétation scénique": User,
      Chant: Music,
      Doublage: Mic,
      Animation: Gamepad2,
    };
    return icons[title] || User;
  };

  return (
    <section className="py-16 bg-custom-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-tomarik">
            Compétences
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {competences.map((section, index) => {
            const IconComponent = getIcon(section.title);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3 font-tomarik">
                  <IconComponent className="w-5 h-5 text-secondary" />
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
