import type { Metadata } from "next";
import Hero from "@/components/hero";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/footer";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = {
  title: "Motion Graphics - Nexiler",
  description: "Engaging video editing and dynamic animations that tell your brand story and captivate your audience.",
};

export default function MotionGraphicsPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title={<>Motion <span className="text-primary">Graphics</span></>}
        description="Captivate your audience with engaging video content and dynamic animations that tell your brand story."
        announcementBanner={{ text: "Video & Animation", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Stories in <span className="text-primary">Motion</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-mono">
                Bring your brand to life with stunning motion graphics and video content. From explainer videos to social media animations, we create visuals that stop the scroll and drive engagement.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/film.svg" alt="Film" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Explainer Videos</h3>
                    <p className="text-muted-foreground font-mono">
                      Clear, engaging videos that explain your product or service in seconds.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/image.svg" alt="Gallery" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Social Media Animations</h3>
                    <p className="text-muted-foreground font-mono">
                      Scroll-stopping animations optimized for Instagram, TikTok, LinkedIn, and Facebook.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/video.svg" alt="Video" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Video Editing</h3>
                    <p className="text-muted-foreground font-mono">
                      Professional video editing with color grading, sound design, and motion tracking.
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
                    <span className="text-muted-foreground font-mono">Adobe After Effects & Premiere Pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Brand-consistent visuals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Multiple aspect ratios (9:16, 16:9, 1:1)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Scriptwriting & storyboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Fast turnaround times</span>
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
          badge="Motion Graphics FAQ"
          heading="Common Questions About Motion Graphics"
          description="Everything you need to know about our video editing and animation services."
          faqs={[
            {
              question: "How long does a typical video project take?",
              answer: "Explainer videos take 2-4 weeks, social media animations take 1-2 weeks, and complex motion graphics projects take 4-6 weeks depending on length and complexity."
            },
            {
              question: "What formats do you deliver?",
              answer: "We deliver in all required formats: MP4, MOV, GIF, and platform-specific formats for Instagram, TikTok, YouTube, etc. We also provide source files."
            },
            {
              question: "Can you match our brand guidelines?",
              answer: "Absolutely! We work with your brand colors, fonts, and style guide to ensure all motion graphics are perfectly on-brand."
            },
            {
              question: "Do you provide scriptwriting services?",
              answer: "Yes, our team includes professional scriptwriters who can create engaging scripts, storyboards, and voiceover scripts for your videos."
            }
          ]}
        />
      </GridBackground>
      <Footer />
    </main>
  );
}
