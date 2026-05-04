import type { Metadata } from "next";
import { servicesMetadata } from "@/metadata";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Features from "@/components/features";
import { ServicesImportance } from "@/components/services/importance";
import Footer from "@/components/footer";
import { GridBackground } from "@/components/ui/grid-background";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden border-white/5">
      <Hero 
        title={<>Smart Services That Move Your <span className="text-primary">Business Forward.</span></>} 
        description="Web design, workflow automation, organic growth, and AI systems built around your goals, not generic templates."
        announcementBanner={{ text: "Fuel Your Growth", linkText: "", linkHref: "#" }}
      />
      <GridBackground className="border-t border-white/5">
        <Services hideViewAll={true} />
        <Features />
        <ServicesImportance />
        <ServicesFaq />
      </GridBackground>
      <Footer />
    </main>
  );
}
