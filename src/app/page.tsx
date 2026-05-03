import HomeHero from "@/components/home-hero";
import Services from "@/components/services";
import Features from "@/components/features";
import AboutUs from "@/components/about-us";
import OurWork from "@/components/our-work";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { GridBackground } from "@/components/ui/grid-background";

export default function Home() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <HomeHero />
      <GridBackground>
        <Features />
        <Services />
        <AboutUs />
        <OurWork />
        <Testimonials />
        <Pricing />
        <CTA />
        <Footer />
      </GridBackground>
    </main>
  );
}
