export function Accueil() {
  return (
    <div class="h-screen w-screen bg-primary text-white font-articulat flex">
      <img
        src="/photo.png"
        class="hover:scale-110 transition saturate-0 hover:saturate-100 hidden sm:block"
      />

      <main class=" m-6 w-full grid border-2 border-white outline-2 outline-white outline-offset-4">
        <div class="text-center pt-12 sm:pt-28">
          <h1 class="font-louvette relative text-4xl sm:text-6xl font-bold text-white before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-secondary before:transition-all before:duration-300 before:ease-out hover:before:w-full hover:before:left-0">
            Valentin Lablanche
          </h1>
          <p class="text-xl sm:text-2xl mt-6 font-tomarik">
            Chanteur - Comédien - Acteur voix
          </p>
        </div>

        <div class="text-center h-full place-self-center flex w-full justify-evenly items-center">
          <a
            href="/presentation"
            class="font-tomarik rounded-md border-white border gap-2 px-4 py-2 text-center hover:scale-110 transition"
          >
            Présentation
          </a>
          <a
            href="/portfolio"
            class="font-tomarik rounded-md border-white border gap-2 px-4 py-2 text-center hover:scale-110 transition"
          >
            Portfolio
          </a>
        </div>

        <p class="font-dalliance text-center place-self-center text-2xl">
          <span>CO</span>
          <span class="inline-block transform-[scale(-1,1)]">O</span>
          <span class="inline-block transform-[scale(-1,1)]">C</span>
        </p>

        <a
          href="https://drive.google.com/file/d/1W1MuF_mhwbICo9M9l_9A4mjaM2AmBdjK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="font-tomarik place-self-center rounded-md border-dance gap-2 px-4 py-2 text-center hover:scale-110 transition"
        >
          📄 Télécharger mon CV
        </a>

        <div class="grid [grid-template-columns:repeat(auto-fit,minmax(12rem,1fr))] gap-8 w-full h-fit place-self-end mb-8">
          <a
            href="tel:+33770995394"
            class="flex items-center justify-center gap-2 hover:text-secondary"
          >
            <img src="/phone.svg" class="h-8 w-8 bg-white p-1 rounded-md" />
            <span>07 70 99 53 94</span>
          </a>

          <a
            href="mailto:vallabpro@gmail.com"
            class="flex items-center justify-center gap-2 hover:text-secondary"
          >
            <img src="/envelope.svg" class="h-8 w-8 bg-white p-1 rounded-md" />
            <span>vallabpro@gmail.com</span>
          </a>

          <a
            href="https://www.instagram.com/supervallab"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 hover:text-secondary"
          >
            <img
              src="/instagram-fill.svg"
              class="h-8 w-8 bg-white p-1 rounded-md"
            />
            <span>@supervallab</span>
          </a>

          <a
            href="https://linktr.ee/vallab_"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 hover:text-secondary"
          >
            <img src="/linktree.svg" class="h-8 w-8 bg-white p-1 rounded-md" />
            <span>Linktree</span>
          </a>
        </div>
      </main>
    </div>
  );
}
