import type { Metadata } from "next";
import Hero from "@/components/hero";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/footer";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = {
  title: "Social Media Management - Nexiler",
  description: "Grow your brand organically with social media strategies, content calendars, and engagement-driven campaigns.",
};

export default function SocialMediaPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title={<>Social <span className="text-primary">Media Management</span></>}
        description="Build a brand that people remember. We create content, manage communities, and drive organic growth."
        announcementBanner={{ text: "Social Growth", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Grow Your <span className="text-primary">Digital Presence</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-mono">
                We don't just post content - we build communities. Our social media strategies focus on authentic engagement, brand storytelling, and converting followers into customers.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1B] border border-white/10 shrink-0">
                    <img src="/icons/rocket.svg" alt="Rocket" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Content Strategy & Calendar</h3>
                    <p className="text-muted-foreground font-mono">
                      Consistent posting schedules, trending content, and platform-specific strategies for Instagram, LinkedIn, Facebook, and Twitter.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1B] border border-white/10 shrink-0">
                    <img src="/icons/target.svg" alt="Target" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Community Management</h3>
                    <p className="text-muted-foreground font-mono">
                      Active engagement with your audience, comment management, and building loyal communities around your brand.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1B] border border-white/10 shrink-0">
                    <img src="/icons/chart.svg" alt="Chart" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Analytics & Reporting</h3>
                    <p className="text-muted-foreground font-mono">
                      Detailed performance metrics, growth tracking, and actionable insights to improve your social ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card/60 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Why Social Media?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Build brand awareness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Drive website traffic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Generate qualified leads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Improve customer loyalty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Cost-effective marketing</span>
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
          badge="Social Media FAQ"
          heading="Common Questions About Social Media Management"
          description="Everything you need to know about our social media services and strategies."
          faqs={[
            {
              question: "Which platforms do you manage?",
              answer: "We manage all major platforms including Instagram, Facebook, LinkedIn, Twitter, TikTok, and YouTube. We tailor strategies for each platform's unique audience."
            },
            {
              question: "How often will you post?",
              answer: "Posting frequency depends on your package and platform. Typically, we post 3-7 times per week per platform with a strategic content calendar."
            },
            {
              question: "Do you create the content too?",
              answer: "Yes! We create all visual content, write captions, design graphics, and produce videos tailored to your brand voice and goals."
            },
            {
              question: "How do you measure success?",
              answer: "We track engagement rates, follower growth, website traffic from social, lead generation, and conversion rates with detailed monthly reports."
            }
          ]}
        />
      </GridBackground>
      <Footer />
    </main>
  );
}
