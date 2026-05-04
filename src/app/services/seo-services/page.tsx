import type { Metadata } from "next";
import Hero from "@/components/hero";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/footer";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = {
  title: "SEO Services - Nexiler",
  description: "Boost your organic visibility with technical SEO, content optimization, and data-driven strategies that drive qualified traffic.",
};

export default function SEOServicesPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title={<>SEO <span className="text-primary">Services</span></>}
        description="Rank higher, get found by customers, and drive qualified organic traffic that converts."
        announcementBanner={{ text: "SEO & Growth", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Get Found <span className="text-primary">Online</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-mono">
                SEO isn't just about keywords - it's about technical excellence, user experience, and building authority in your niche. We combine technical SEO, content strategy, and data-driven optimization.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/search.svg" alt="Search" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Technical SEO</h3>
                    <p className="text-muted-foreground font-mono">
                      Site speed optimization, mobile-first indexing, schema markup, and technical audits.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/pencil.svg" alt="Pencil" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Content Optimization</h3>
                    <p className="text-muted-foreground font-mono">
                      Keyword research, content strategy, on-page optimization, and competitive analysis.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/chart.svg" alt="Chart" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Link Building</h3>
                    <p className="text-muted-foreground font-mono">
                      Quality backlink acquisition, digital PR, and authority building in your industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card/60 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Why SEO?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">300% more traffic in 6 months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Higher conversion than paid ads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Long-term sustainable growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Build brand authority</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Outrank competitors</span>
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
          badge="SEO FAQ"
          heading="Common Questions About SEO Services"
          description="Everything you need to know about our SEO process, timeline, and deliverables."
          faqs={[
            {
              question: "How long until I see results?",
              answer: "SEO is a long-term strategy. You'll see initial improvements in 3-4 months, with significant results typically appearing in 6-12 months."
            },
            {
              question: "Do you guarantee first page rankings?",
              answer: "While we can't guarantee specific rankings (no one can ethically), we have a 95% success rate in improving our clients' organic visibility."
            },
            {
              question: "Do you provide monthly reports?",
              answer: "Yes! We provide detailed monthly reports showing rankings, traffic growth, conversions, and actionable insights."
            },
            {
              question: "Can you fix my existing SEO issues?",
              answer: "Absolutely. We perform comprehensive SEO audits and fix technical issues, content gaps, and authority problems."
            }
          ]}
        />
      </GridBackground>
      <Footer />
    </main>
  );
}
