import {
  ErrorBoundary,
  hydrate,
  LocationProvider,
  Route,
  Router,
  prerender as ssr,
} from "preact-iso";

import { Analytics } from "@vercel/analytics/react";

import { Accueil } from "./routes/accueil";
import { Presentation } from "./routes/presentation";
import { Portfolio } from "./routes/portfolio";

import "./style.css";

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={Accueil} />
          <Route path="/presentation" component={Presentation} />
          <Route path="/portfolio" component={Portfolio} />
        </Router>
        <Analytics />
      </ErrorBoundary>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
