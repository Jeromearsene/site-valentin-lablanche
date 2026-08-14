import { MAIL, PHONE } from "../../constants/coordinates";
import {
  phoneInternationalization,
  prettyPhoneFormat,
} from "../../utils/phone.utils";

export function CallToAction() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-custom-white mb-4 font-tomarik">
          Prêt à collaborer ?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Contactez-moi pour discuter de votre projet et découvrir comment ma
          voix peut le sublimer.
        </p>
        <div class="flex text-white justify-between text-xl">
          <a
            href={`tel:${phoneInternationalization(PHONE)}`}
            class="flex items-center justify-center gap-2 hover:text-secondary transition-colors group"
          >
            <img
              src="/img/svg/phone.svg"
              class="h-8 w-8 bg-white invert p-1 rounded-md group-hover:scale-125 transition"
            />
            <span>{prettyPhoneFormat(PHONE)}</span>
          </a>

          <a
            href={`mailto:${MAIL}`}
            class="flex items-center justify-center gap-2 hover:text-secondary transition-colors group"
          >
            <img
              src="/img/svg/envelope.svg"
              class="h-8 w-8 bg-white invert p-1 rounded-md group-hover:scale-125 transition"
            />
            <span>{MAIL}</span>
          </a>

          <a
            href="https://calendly.com/vallabpro/30min"
            target="_blank"
            class="flex items-center justify-center gap-2 hover:text-secondary transition-colors group"
            rel="noreferrer"
          >
            <img
              src="/img/svg/calendar.svg"
              class="h-9 w-9 bg-white invert p-1 rounded-md group-hover:scale-125 transition"
            />
            <span>Réserver un créneau</span>
          </a>
        </div>
      </div>
    </section>
  );
}
