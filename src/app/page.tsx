import { LenisWrapper } from "@/components/sites/resido/LenisWrapper";
import { Navbar } from "@/components/sites/resido/Navbar";
import { Hero } from "@/components/sites/resido/Hero";
import { Services } from "@/components/sites/resido/Services";
import { WhyChooseUs } from "@/components/sites/resido/WhyChooseUs";
import { LetsBuildTogether } from "@/components/sites/resido/LetsBuildTogether";
import { Footer } from "@/components/sites/resido/Footer";

export default function Home() {
  return (
    <LenisWrapper>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <LetsBuildTogether />
      </main>
      <Footer />
    </LenisWrapper>
  );
}
