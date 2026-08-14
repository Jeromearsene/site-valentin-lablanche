import { Music, AudioLines, Theater, Joystick } from "lucide-react";

export function Competences() {
  const competences = [
    {
      title: "Voix",
      icon: AudioLines,
      items: [
        "Livre audio (Oscar Fedal, 2025)",
        "Doublage (Octobre 2024)",
        "Narrateur et voix off dans une web série (2025)",
        "Voix institutionnelle",
        "Voix Pédagogique",
        "E-learning et cours de français",
      ],
    },
    {
      title: "Chant",
      icon: Music,
      items: [
        "Conservatoire (2022 - en cours)",
        'Chorale ("Nota bene", 2022 - en cours)',
        "Cover & compositions (Chaîne Youtube & réseaux sociaux, en cours)",
        "Scènes ouvertes & soliste lors de spectacles",
      ],
    },
    {
      title: "Interprétation scénique",
      icon: Theater,
      items: [
        "Soliste lors de spectacles",
        "Scènes ouvertes",
        "Spectacle de chansons françaises",
        'Prix de composition/interprétation (Festival "La bastide qui chante", Castillonnès 2012)',
        "Théâtre + théâtre d'impro (compagnie de théâtre)",
      ],
    },
    {
      title: "Animation",
      icon: Joystick,
      items: [
        "Soirée JDR comme MJ",
        "Présentateur et animateur de quiz et soirées jeux",
        "Live stream sur Twitch (Vallab) Émissions web",
      ],
    },
  ];

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
            const IconComponent = section.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3 font-tomarik">
                  <IconComponent className="w-6 h-6 text-secondary" />
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
