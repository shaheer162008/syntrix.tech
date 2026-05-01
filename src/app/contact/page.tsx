import type { Metadata } from "next";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { GridBackground } from "@/components/ui/grid-background";

export const metadata: Metadata = {
  title: "Contact Us - Nexiler",
  description: "Get in touch with Nexiler for web development, AI automation, and digital growth solutions.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title="Get in Touch"
        description="Ready to transform your digital presence? Let's discuss how we can help your business grow."
        announcementBanner={{ text: "Contact Us", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        <Contact />
        <Footer />
      </GridBackground>
    </main>
  );
}
