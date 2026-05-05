import type { Metadata } from "next";
import Hero from "@/components/hero";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/footer";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = {
  title: "Website Development - Nexiler",
  description: "Custom website development services built with modern technologies like Next.js, React, and full-stack solutions that drive real business growth.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title={<>Website <span className="text-primary">Development</span></>}
        description="Custom websites built with modern technologies that don't just look good - they drive real business growth."
        announcementBanner={{ text: "Web Development", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Build Your <span className="text-primary">Digital Foundation</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-mono">
                Your website is your digital storefront. We build custom websites and web applications that don't just look stunning - they're engineered to convert visitors into customers, automate your workflows, and scale with your business.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1B] border border-white/10 shrink-0">
                    <img src="/icons/rocket.svg" alt="Rocket" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Next.js & React Expertise</h3>
                    <p className="text-muted-foreground font-mono">
                      We specialize in Next.js, React, and modern JavaScript frameworks to build fast, SEO-friendly, and scalable web applications.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1B] border border-white/10 shrink-0">
                    <img src="/icons/zap.svg" alt="Zap" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Full-Stack Solutions</h3>
                    <p className="text-muted-foreground font-mono">
                      From frontend UI/UX to backend APIs and databases, we handle the complete development stack for your project.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1B] border border-white/10 shrink-0">
                    <img src="/icons/zap.svg" alt="Zap" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">E-commerce & Dashboards</h3>
                    <p className="text-muted-foreground font-mono">
                      Custom e-commerce platforms, admin dashboards, and business management systems tailored to your specific needs.
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
                    <span className="text-muted-foreground font-mono">100% custom-built, no templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">SEO-optimized from day one</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Mobile-first responsive design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Ongoing support & maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Performance & security focused</span>
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
          badge="Website Development FAQ"
          heading="Common Questions About Website Development"
          description="Everything you need to know about our web development process, timeline, and deliverables."
          faqs={[
            {
              question: "How long does a typical website project take?",
              answer: "Most projects take 4-8 weeks from start to finish, depending on complexity. E-commerce and custom web apps may take 8-12 weeks."
            },
            {
              question: "Do you provide hosting and domain setup?",
              answer: "Yes! We handle domain registration, hosting setup, SSL certificates, and DNS configuration as part of our service."
            },
            {
              question: "Can you redesign my existing website?",
              answer: "Absolutely. We can rebuild your existing site with modern technologies while preserving your brand identity and improving performance."
            },
            {
              question: "Do you provide ongoing maintenance?",
              answer: "Yes, we offer maintenance packages that include security updates, performance monitoring, backups, and content updates."
            }
          ]}
        />
      </GridBackground>
      <Footer />
    </main>
  );
}
