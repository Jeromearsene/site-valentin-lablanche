import { Settings } from "lucide-react";

export function Techniques() {
  const techniques = [
    { icon: Settings, text: "Création de bande rythmo (logiciel Cappela)" },
    { icon: Settings, text: "Montage (Première Pro)" },
    { icon: Settings, text: "Gestion de projet (Notion, Confluence, etc...)" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-tomarik">
            Techniques & Outils
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto" />
        </div>

        <div className="bg-gradient-to-r from-primary to-gray-800 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <technique.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-custom-white text-sm leading-relaxed">
                  {technique.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
