import type { Metadata } from "next";
import Hero from "@/components/hero";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/footer";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = {
  title: "AI Chatbots - Nexiler",
  description: "Integrate intelligent AI chatbots for 24/7 customer support and automated lead generation.",
};

export default function AIChatbotsPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title={<>AI <span className="text-primary">Chatbots</span></>}
        description="Intelligent bots that provide 24/7 customer support and automate lead generation for your business."
        announcementBanner={{ text: "AI Solutions", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Smart <span className="text-primary">AI Conversations</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-mono">
                Transform your customer service with AI-powered chatbots that understand context, provide instant responses, and qualify leads automatically. Our bots integrate seamlessly with your existing platforms.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/rocket.svg" alt="Rocket" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">24/7 Availability</h3>
                    <p className="text-muted-foreground font-mono">
                      Your customers get instant support anytime, anywhere - even outside business hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/chatbot.svg" alt="Chatbot" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Lead Qualification</h3>
                    <p className="text-muted-foreground font-mono">
                      Automatically qualify leads and route them to the right team members for follow-up.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/merge.svg" alt="Merge" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Platform Integration</h3>
                    <p className="text-muted-foreground font-mono">
                      Integrate with WhatsApp, Facebook Messenger, Slack, and your website seamlessly.
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
                    <span className="text-muted-foreground font-mono">Custom-trained on your data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Multi-language support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Analytics & conversation logs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Human handoff capability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">GDPR compliant & secure</span>
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
          badge="AI Chatbots FAQ"
          heading="Common Questions About AI Chatbots"
          description="Everything you need to know about our AI chatbot development and integration process."
          faqs={[
            {
              question: "How long does it take to setup an AI chatbot?",
              answer: "Most chatbot implementations take 2-4 weeks, including training on your data, integration with your platforms, and testing."
            },
            {
              question: "Can the chatbot handle complex queries?",
              answer: "Yes! Our AI chatbots use advanced NLP to understand context and can handle complex multi-turn conversations. Complex queries can be automatically routed to human agents."
            },
            {
              question: "Which platforms do you integrate with?",
              answer: "We integrate with WhatsApp, Facebook Messenger, Instagram, Slack, Discord, your website, and custom APIs. We can also build custom integrations."
            },
            {
              question: "Is the chatbot data secure?",
              answer: "Absolutely. We use end-to-end encryption, are GDPR compliant, and can deploy on-premise or in your private cloud for maximum security."
            }
          ]}
        />
      </GridBackground>
      <Footer />
    </main>
  );
}
