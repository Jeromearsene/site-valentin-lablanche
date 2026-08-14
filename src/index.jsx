import { hydrate, prerender as ssr } from "preact-iso";

import "./style.css";
import { Header } from "./components/header";
import { Competences } from "./components/competences";
import { Atouts } from "./components/atouts";
import { APropos } from "./components/a-propos";
import { Techniques } from "./components/techniques";
import { Forces } from "./components/forces";

export function App() {
  return (
    <div class="min-h-screen bg-custom-white text-primary">
      <Header />

      <main className="bg-custom-white">
        <APropos />
        <Competences />
        <Atouts />
        <Techniques />
        <Forces />
      </main>
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
