import {
  User,
  Mic,
  Music,
  Settings,
  Award,
  Users,
  Volume2,
} from "lucide-react";

export function Forces() {
  const forces = [
    { icon: Music, text: "Chant, voix de ténor/basse" },
    { icon: Volume2, text: "Voix graves, gutturales, posées, méchants" },
    { icon: Mic, text: "Doublage de dessins animés" },
    { icon: Award, text: "Sensibilité aux mots et la manière de les sublimer" },
  ];

  const atouts = [
    { icon: Settings, text: "Timbre modulable" },
    { icon: Users, text: "Logistique, outils et process" },
    { icon: Award, text: "Persévérant" },
    { icon: Users, text: "Travail en équipe" },
    { icon: User, text: "Conteur d'histoire" },
    { icon: Music, text: "Voix chantée" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Forces */}
          <div className="bg-primary text-custom-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 font-tomarik flex items-center gap-3">
              <Award className="w-6 h-6 text-secondary" />
              Forces
            </h3>
            <div className="space-y-4">
              {forces.map((force, index) => (
                <div key={index} className="flex items-start gap-3">
                  <force.icon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-custom-white">{force.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Atouts */}
          <div className="border-2 border-primary rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary font-tomarik flex items-center gap-3">
              <Settings className="w-6 h-6 text-secondary" />
              Atouts
            </h3>
            <div className="space-y-4">
              {atouts.map((atout, index) => (
                <div key={index} className="flex items-start gap-3">
                  <atout.icon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{atout.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
