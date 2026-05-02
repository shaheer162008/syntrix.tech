import type { Metadata } from "next";
import Hero from "@/components/hero";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/footer";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = {
  title: "Mobile App Development - Nexiler",
  description: "Native and cross-platform mobile apps for seamless iOS and Android experiences that engage users.",
};

export default function MobileAppDevPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title="Mobile App Development"
        description="Build native and cross-platform mobile apps that deliver seamless experiences on iOS and Android."
        announcementBanner={{ text: "Mobile Apps", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Apps That <span className="text-primary">Users Love</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-mono">
                Create mobile experiences that users can't put down. We build high-performance native and cross-platform apps with intuitive UI/UX that drive engagement and retention.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/mobile.svg" alt="Mobile" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Cross-Platform</h3>
                    <p className="text-muted-foreground font-mono">
                      React Native and Flutter apps that run seamlessly on both iOS and Android from a single codebase.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/pen-tool.svg" alt="Design" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
                    <p className="text-muted-foreground font-mono">
                      Beautiful, intuitive interfaces designed for mobile-first experiences and high user engagement.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/fast.svg" alt="Design" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Performance Optimized</h3>
                    <p className="text-muted-foreground font-mono">
                      Lightning-fast apps with smooth animations, offline capabilities, and minimal battery usage.
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
                    <span className="text-muted-foreground font-mono">Native & cross-platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">App Store & Play Store deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">API & backend integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Push notifications & analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Ongoing maintenance & updates</span>
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
          badge="Mobile App Development FAQ"
          heading="Common Questions About Mobile App Development"
          description="Everything you need to know about our mobile app development process, timeline, and costs."
          faqs={[
            {
              question: "How long does it take to build a mobile app?",
              answer: "A typical mobile app takes 8-16 weeks depending on complexity. Simple apps take 8-12 weeks, while feature-rich apps may take 12-20 weeks."
            },
            {
              question: "Do you publish the app to app stores?",
              answer: "Yes! We handle the entire submission process for both Apple App Store and Google Play Store, including compliance requirements."
            },
            {
              question: "Can you build both iOS and Android apps?",
              answer: "Yes, we specialize in cross-platform development using React Native and Flutter, as well as native iOS (Swift) and Android (Kotlin) development."
            },
            {
              question: "Do you provide app maintenance?",
              answer: "Yes, we offer maintenance packages that include bug fixes, OS updates compatibility, feature additions, and performance monitoring."
            }
          ]}
        />
      </GridBackground>
      <Footer />
    </main>
  );
}
