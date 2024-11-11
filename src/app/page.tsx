import { Section } from "@/components/Section";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Header />

      <Section id="sites" className="text-4xl">
        <p>Secção criada via componente</p>
      </Section>


    </main >
  );
}