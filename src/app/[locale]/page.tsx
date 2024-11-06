import { VerticalSectionDivider } from "@/components/VerticalSectionDivider";
import { About } from "@/features/about/components/About";
import { Contacts } from "@/features/contacts/components/Contacts";
import { Hero } from "@/features/hero/components/Hero";
import { OurTeam } from "@/features/our-team/components/OurTeam";
import { Services } from "@/features/services/components/Services";
import { Technologies } from "@/features/technologies/components/Technologies";

export default async function Home() {
  return (
    <section className=" w-full h-full flex flex-col items-center gap-8">
      <Hero />
      <section className=" w-full h-full max-w-screen-xl flex flex-col items-center gap-8 pt-16 px-3">
        <Technologies />
        <VerticalSectionDivider />
        <About />
        <VerticalSectionDivider />
        <Services />
        <VerticalSectionDivider />
        <OurTeam />
        <VerticalSectionDivider />
        <Contacts />
      </section>
    </section>
  );
}
