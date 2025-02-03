import { hydrate, prerender as ssr } from "preact-iso";

import "./style.css";

export function App() {
  return (
    <div class="h-screen w-screen bg-primary text-white font-title flex">
      <img
        src="/photo.png"
        class="hover:scale-110 transition saturate-0 hover:saturate-100 hidden sm:block"
      />

      <div class=" m-6 w-full grid border-2 border-white outline-2 outline-white outline-offset-4">
        <div class="text-center pt-28">
          <h1 class="relative text-4xl sm:text-6xl font-bold text-white before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-secondary before:transition-all before:duration-300 before:ease-out hover:before:w-full hover:before:left-0">
            Valentin Lablanche
          </h1>

          <p class="text-xl sm:text-2xl mt-6">
            Chanteur - Comédien - Acteur voix
          </p>
        </div>

        <div class="text-center h-full place-self-center">
          <h4>Site en cours de création</h4>
        </div>

        <div class="flex justify-around flex-wrap gap-4 h-fit place-self-end w-full mb-8">
          <a
            href="tel:+33770995394"
            class="flex items-center gap-2 hover:text-secondary"
          >
            <img
              src="/public/phone.svg"
              height={32}
              width={32}
              class="bg-white p-1 rounded-md"
            />
            <span>+33 6 12 34 56 78</span>
          </a>

          <a
            href="mailto:vallabpro@gmail.com"
            class="flex items-center gap-2 hover:text-secondary"
          >
            <img
              src="/public/envelope.svg"
              height={32}
              width={32}
              class="bg-white p-1 rounded-md"
            />
            <span>vallabpro@gmail.com</span>
          </a>

          <a
            href="https://www.instagram.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 hover:text-secondary"
          >
            <img
              src="/public/instagram-fill.svg"
              height={32}
              width={32}
              class="bg-white p-1 rounded-md "
            />
            <span>@supervallab</span>
          </a>
        </div>
      </div>
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
