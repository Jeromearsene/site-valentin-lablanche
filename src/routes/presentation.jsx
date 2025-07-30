import { Layout } from "../components/layout";
import { APropos } from "../components/presentation/a-propos";
import { Competences } from "../components/presentation/competences";
import { Forces } from "../components/presentation/forces";
import { Techniques } from "../components/presentation/techniques";
import { Mic } from "lucide-react";
import { getResponsiveImage } from "../utils/image.utils";
import { SectionWithImage } from "../components/common/section-with-image";

export function Presentation() {
  return (
    <Layout>
      <div className="min-h-screen font-articulat">
        <section className="bg-gradient-to-b from-primary to-gray-800 text-custom-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Mic className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 font-tomarik">
              Comédien spécialisé dans la Voix
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Passionné par l'art vocal et l'interprétation, je mets ma voix au
              service de vos projets avec professionnalisme et créativité.
            </p>
          </div>
        </section>

        <SectionWithImage
          imageLeft={true}
          imageSrc={getResponsiveImage("photo-presentation-11")}
          imageAlt="Photo présentation - À propos"
          className="bg-white"
        >
          <APropos />
        </SectionWithImage>

        <SectionWithImage
          imageLeft={false}
          imageSrc={getResponsiveImage("photo-presentation-2")}
          imageAlt="Photo présentation - Forces"
          className="bg-gray-50"
        >
          <Forces />
        </SectionWithImage>

        <SectionWithImage
          imageLeft={true}
          imageSrc={getResponsiveImage("photo-presentation-6")}
          imageAlt="Photo présentation - Compétences"
          className="bg-white"
        >
          <Competences />
        </SectionWithImage>

        <SectionWithImage
          imageLeft={false}
          imageSrc={getResponsiveImage("photo-presentation-12")}
          imageAlt="Photo présentation - Techniques"
          className="bg-gray-50"
        >
          <Techniques />
        </SectionWithImage>

        {/* Call to Action */}
        {/* <section className="bg-primary py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-custom-white mb-4 font-tomarik">
              Prêt à collaborer ?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contactez-moi pour discuter de votre projet et découvrir comment
              ma voix peut le sublimer.
            </p>
            <button className="bg-secondary hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Me contacter
            </button>
          </div>
        </section> */}
      </div>
    </Layout>
  );
}
