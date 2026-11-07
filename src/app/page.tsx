import { LenisWrapper } from "@/components/sites/resido/LenisWrapper";
import { Navbar } from "@/components/sites/resido/Navbar";
import { Hero } from "@/components/sites/resido/Hero";
import { TrustMarquee } from "@/components/sites/resido/TrustMarquee";
import { AboutBlock } from "@/components/sites/resido/AboutBlock";
import { ProjectsCarousel } from "@/components/sites/resido/ProjectsCarousel";
import { Services } from "@/components/sites/resido/Services";
import { WhyChooseUs } from "@/components/sites/resido/WhyChooseUs";
import { Testimonials } from "@/components/sites/resido/Testimonials";
import { WhyPartner } from "@/components/sites/resido/WhyPartner";
import { FAQ } from "@/components/sites/resido/FAQ";
import { ContactCTA } from "@/components/sites/resido/ContactCTA";
import { LetsBuildTogether } from "@/components/sites/resido/LetsBuildTogether";
import { Footer } from "@/components/sites/resido/Footer";

export default function Home() {
  return (
    <LenisWrapper>
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <AboutBlock />
        <ProjectsCarousel />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <WhyPartner />
        <FAQ />
        <ContactCTA />
        <LetsBuildTogether />
      </main>
      <Footer />
    </LenisWrapper>
  );
}
