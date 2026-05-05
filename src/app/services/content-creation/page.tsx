import type { Metadata } from "next";
import Hero from "@/components/hero";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/footer";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = {
  title: "Content Creation - Nexiler",
  description: "Engage your audience with professional content creation services including videos, graphics, copywriting, and brand storytelling.",
};

export default function ContentCreationPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title={<>Content <span className="text-primary">Creation</span></>}
        description="Stop struggling with content. We create videos, graphics, and copy that tells your brand story and converts visitors."
        announcementBanner={{ text: "Creative Services", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Tell Your <span className="text-primary">Brand Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-mono">
                Great content doesn't just look good - it connects with your audience and drives them to take action. We create content that aligns with your brand voice and business goals.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1B] border border-white/10 shrink-0">
                    <img src="/icons/rocket.svg" alt="Rocket" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Video Production</h3>
                    <p className="text-muted-foreground font-mono">
                      Professional video content for ads, social media, tutorials, and brand storytelling.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1B] border border-white/10 shrink-0">
                    <img src="/icons/rocket.svg" alt="Rocket" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Graphic Design</h3>
                    <p className="text-muted-foreground font-mono">
                      Custom graphics, infographics, social media visuals, and brand assets that stand out. 
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1B] border border-white/10 shrink-0">
                    <img src="/icons/palette.svg" alt="Palette" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Copywriting & SEO</h3>
                    <p className="text-muted-foreground font-mono">
                      Compelling website copy, blog posts, email campaigns, and ad copy that converts. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card/60 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Why Professional Content?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Build brand authority</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Increase engagement by 3x</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Save 15+ hours per week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Consistent brand voice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Higher conversion rates</span>
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
          badge="Content Creation FAQ"
          heading="Common Questions About Content Creation"
          description="Everything you need to know about our content creation process and deliverables."
          faqs={[
            {
              question: "What type of content do you create?",
              answer: "We create videos, graphics, blog posts, website copy, email campaigns, social media content, and complete brand kits."
            },
            {
              question: "How long does content production take?",
              answer: "Simple graphics take 2-3 days, videos take 1-2 weeks, and complete brand kits take 2-4 weeks depending on scope."
            },
            {
              question: "Do you provide content calendars?",
              answer: "Yes! We create monthly content calendars with strategic posting schedules tailored to your audience and goals."
            },
            {
              question: "Can you match our brand guidelines?",
              answer: "Absolutely. We work with your existing brand guidelines or help you create new ones for consistent brand representation."
            }
          ]}
        />
      </GridBackground>
      <Footer />
    </main>
  );
}
