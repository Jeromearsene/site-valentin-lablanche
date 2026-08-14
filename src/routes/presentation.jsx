import { Layout } from "../components/layout";
import { APropos } from "../components/presentation/a-propos";
import { Atouts } from "../components/presentation/atouts";
import { Competences } from "../components/presentation/competences";
import { Forces } from "../components/presentation/forces";
import { Techniques } from "../components/presentation/techniques";

export function Presentation() {
  return (
    <Layout>
      <APropos />
      <Atouts />
      <Competences />
      <Forces />
      <Techniques />
    </Layout>
  );
}
