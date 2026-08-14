export function Header() {
  return (
    <header class="bg-primary text-white py-2">
      <nav class="flex px-4">
        <a href="/" class="container mx-4 px-2">
          <h1 class="text-3xl font-bold">Valentin Lablanche</h1>
          <p class="text-sm">Chanteur - Comédien - Acteur voix</p>
        </a>

        <div class="flex gap-6 items-center">
          <a href="/presentation" class="text-2xl">
            Présentation
          </a>
          <a href="/portfolio" class="text-2xl">
            Portfolio
          </a>
        </div>
      </nav>
    </header>
  );
}
