import type { Metadata } from "next";
import Hero from "@/components/hero";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/footer";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = {
  title: "AI Automation - Nexiler",
  description: "Transform your business with AI automation, chatbot integration, and intelligent workflows that save time and boost productivity.",
};

export default function AIAutomationPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title="AI Automation"
        description="Transform your business with intelligent workflows that save time, reduce errors, and let your team focus on what matters most."
        announcementBanner={{ text: "AI Solutions", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        {/* Service Details */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Work <span className="text-primary">Smarter</span>, Not Harder
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-mono">
                We build custom AI solutions that automate repetitive tasks, provide instant customer support, and integrate seamlessly with your existing tools. From chatbot assistants to complex workflow automation, we help you scale without scaling your team.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/chatbot.svg" alt="Chatbot" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">AI Chatbots & Assistants</h3>
                    <p className="text-muted-foreground font-mono">
                      24/7 customer support, lead qualification, and instant answers for your visitors with custom-trained AI assistants.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                    <img src="/icons/rocket.svg" alt="Rocket" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Workflow Automation</h3>
                    <p className="text-muted-foreground font-mono">
                      Automate data entry, report generation, email responses, and cross-platform data sync with intelligent workflows. 
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/10 shrink-0">
                      <img src="/icons/integrate.svg" alt="Integrate" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Smart Integrations</h3>
                    <p className="text-muted-foreground font-mono">
                      Connect your CRM, ERP, marketing tools, and databases with custom APIs and seamless data flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card/60 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Why Automate?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Save 20+ hours per week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Reduce human errors by 90%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Scale without hiring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">24/7 automated operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground font-mono">Better customer experience</span>
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
          badge="AI Automation FAQ"
          heading="Common Questions About AI Automation"
          description="Everything you need to know about implementing AI solutions in your business."
          faqs={[
            {
              question: "How long does AI integration take?",
              answer: "Simple chatbot integrations take 2-3 weeks. Complex workflow automation typically takes 4-8 weeks depending on the number of integrations and complexity."
            },
            {
              question: "Do I need technical expertise to manage it?",
              answer: "Not at all! We build user-friendly dashboards and provide training so your team can manage the AI systems without technical knowledge."
            },
            {
              question: "Can you integrate with my existing tools?",
              answer: "Yes! We integrate with popular CRMs (HubSpot, Salesforce), marketing tools (Mailchimp, ActiveCampaign), and custom APIs."
            },
            {
              question: "What kind of ROI can I expect?",
              answer: "Most clients see 30-50% time savings in the first month, with customer response times improving from hours to seconds."
            }
          ]}
        />
      </GridBackground>
      <Footer />
    </main>
  );
}
