import type { Metadata } from "next";
import Hero from "@/components/hero";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/footer";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = {
  title: "Full Brand Creation - Nexiler",
  description: "Stand out with a modern, cohesive brand identity and professional logo design that resonates with your audience.",
};

export default function FullBrandCreationPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title="Full Brand Creation"
        description="Build a memorable brand identity that connects with your audience and sets you apart from competitors."
        announcementBanner={{ text: "Branding", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Your <span className="text-primary">Brand Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-mono">
                Create a cohesive brand identity that tells your unique story. From logo design to brand guidelines, we craft every element to resonate with your target audience and build lasting connections.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/rocket.svg" alt="Rocket" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Logo Design</h3>
                    <p className="text-muted-foreground font-mono">
                      Custom logo designs that capture your brand essence and work across all media formats.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/document.svg" alt="Document" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Brand Guidelines</h3>
                    <p className="text-muted-foreground font-mono">
                      Comprehensive brand books with colors, typography, voice, and usage guidelines.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/image.svg" alt="Gallery" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Visual Assets</h3>
                    <p className="text-muted-foreground font-mono">
                      Complete set of visual assets including social media templates, business cards, and marketing materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card/60 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Why Choose Us?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">100% original designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Multiple concept iterations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Industry-specific expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Print & digital ready files</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Unlimited revisions</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>        
        
        <ServicesFaq 
          badge="Brand Creation FAQ"
          heading="Common Questions About Brand Creation"
          description="Everything you need to know about our branding process, deliverables, and timeline."
          faqs={[
            {
              question: "How long does a full brand creation take?",
              answer: "A complete brand identity package typically takes 4-6 weeks, including research, concept development, revisions, and final deliverables."
            },
            {
              question: "What do I receive in the brand package?",
              answer: "You receive logo files (AI, EPS, PNG, SVG), brand guidelines document, color palette, typography guide, and social media templates."
            },
            {
              question: "Can you rebrand an existing business?",
              answer: "Absolutely! We can evolve your existing brand with a refresh or create an entirely new identity while respecting your brand heritage."
            },
            {
              question: "Do you provide ongoing brand support?",
              answer: "Yes, we offer brand management services including seasonal campaigns, new product branding, and marketing material updates."
            }
          ]}
        />
      </GridBackground>
      <Footer />
    </main>
  );
}
