import type { Metadata } from "next";
import { termsOfServiceMetadata } from "@/metadata";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { GridBackground } from "@/components/ui/grid-background";
import Link from "next/link";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = termsOfServiceMetadata;

export default function TermsOfService() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero
        title="Terms of Service"
        description="Legal agreement and terms of service for Nexiler. We build honest partnerships that drive real results for your business."
        announcementBanner={{ text: "Legal", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          <div className="prose prose-invert prose-lg max-w-none">
            
            <p className="text-muted-foreground mb-8">
              <strong>Last updated:</strong> February 10, 2026
            </p>

            <p className="text-foreground leading-relaxed mb-12 font-mono">
              Welcome to Nexiler. We're all about building honest partnerships that drive real results for your business. Whether you need a powerful web application, smart AI automation, or a strategy to scale your brand online, these terms make sure we're on the same page from day one. We've kept this simple and clear because we believe great work starts with trust.
            </p>

            <div className="bg-black/60 border border-white/10 rounded-[2rem] p-6 mb-12 backdrop-blur-md">
              <p className="text-foreground leading-relaxed font-mono">
                <strong>Summary:</strong> We build world-class web and mobile applications, automate workflows with AI, manage your social media presence, create engaging content, and optimize your SEO. Here's how it works: you approve a proposal, pay upfront to lock in your spot, and we deliver. If we promise a specific result, we stick with you until you get it. Simple as that.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">1. Acceptance and Agreement</h2>
              <p className="text-foreground leading-relaxed font-mono">
                By accessing our website, engaging in consultations, or signing a proposal/Statement of Work (SOW) with Nexiler (the "Agency"), you ("Client") agree to be bound by these Terms of Service. These terms apply to all digital services, including Web & Mobile App Development, AI Automation, Social Media Management, Content Creation, SEO, and Custom Solutions.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">2. Services and Scope</h2>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                We help businesses grow using cutting-edge technology. Our sweet spot? Building world-class applications and digital systems that save you time, attract customers, and scale your operations.
              </p>
              
              <h3 className="text-xl font-bold tracking-tight text-white mb-4">2.1 Service Offerings</h3>
              <p className="text-foreground mb-4 font-mono">Our services include:</p>
              <ul className="list-disc list-inside text-foreground space-y-2 mb-6 font-mono">
                <li>Custom Web Application Development (Next.js, React, Full-Stack)</li>
                <li>Mobile Application Development (iOS, Android, Cross-Platform)</li>
                <li>AI/ML Automation, Chatbot Integration, and Intelligent Workflows</li>
                <li>Social Media Management and Growth Strategy</li>
                <li>Content Creation (Video, Graphics, Copywriting)</li>
                <li>Advanced SEO, Performance Marketing, and Digital Strategy</li>
                <li>Brand Identity and UI/UX Design</li>
                <li>Custom Business Growth Packages and Consulting</li>
              </ul>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">2.2 What's Included</h3>
              <p className="text-foreground leading-relaxed font-mono">
                Every project gets a clear proposal that spells out exactly what we're building, when you'll get it, and what it costs. If you want to add something later that wasn't in the original plan, we'll quote it separately and update the timeline.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">3. Project Engagement and Milestones</h2>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                Here's how we work: we chat about your needs, send you a proposal, you approve and pay to get started, we build your project with regular updates, deliver the final product, and then provide support.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">3.1 Sign Off & Payment</h3>
              <p className="text-foreground leading-relaxed font-mono">
                At major milestones, you'll review the work and give us the thumbs up before we move forward. Your approval triggers the next payment and keeps things moving.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">4. Client Responsibilities and Delays</h2>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                The timely success of the project is dependent on the Client's prompt cooperation.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">4.1 What We Need From You</h3>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                Send us your content, images, brand files, and login details on time so we can keep your project moving. The faster you get us what we need, the faster we deliver.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">4.2 Stay Responsive</h3>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                Please reply to our messages and approve work within 3 business days. Quick responses keep your project on track.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">4.3 If You're Running Behind</h3>
              <p className="text-foreground leading-relaxed font-mono">
                If we don't hear back from you within 3 days, your timeline gets pushed back by the same amount. We can't hit deadlines without your input. Long delays might mean extra fees to keep your project slot reserved.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">5. Payment Terms and Late Fees</h2>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                Let's talk money. Here's how payment works:
              </p>

              <div className="overflow-x-auto mb-6 border border-white/10 rounded-[2rem] bg-black/60 backdrop-blur-md">
                <table className="w-full border-collapse font-mono text-sm leading-relaxed">
                  <thead className="bg-white/5">
                    <tr className="border-b border-white/10">
                      <th className="text-left text-white py-4 px-6 font-bold uppercase tracking-wider">Payment Type</th>
                      <th className="text-left text-white py-4 px-6 font-bold uppercase tracking-wider">Standard Term</th>
                      <th className="text-left text-white py-4 px-6 font-bold uppercase tracking-wider">Late Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                      <td className="py-4 px-6 text-foreground font-medium">One-Time Projects</td>
                      <td className="py-4 px-6 text-muted-foreground">Typically 50% upfront, 50% upon final completion/delivery.</td>
                      <td className="py-4 px-6 text-muted-foreground">2% every 2 days after 7-day grace period</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                      <td className="py-4 px-6 text-foreground font-medium">Monthly Retainers</td>
                      <td className="py-4 px-6 text-muted-foreground">Full payment due on the first day of the billing cycle.</td>
                      <td className="py-4 px-6 text-muted-foreground">2% every 2 days after 7-day grace period</td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="py-4 px-6 text-foreground font-medium">Additional Work</td>
                      <td className="py-4 px-6 text-muted-foreground">Quoted separately, payment before starting.</td>
                      <td className="py-4 px-6 text-muted-foreground">2% every 2 days after 7-day grace period</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">5.1 When Payment Is Due</h3>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                You have 7 days to pay each invoice from the day we send it. We'll mention in your proposal if your project has different terms.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">5.2 What Happens If You're Late</h3>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                Miss the 7-day window and we pause your project until you're paid up (including any late fees). Getting things going again might cost an extra $250 to restart.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">5.3 Late Fees</h3>
              <p className="text-foreground leading-relaxed font-mono">
                After the 7-day grace period, we add a 2% fee every 2 days until you pay. These fees add up fast, so it's best to pay on time.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">6. Revisions and Change Management</h2>
              
              <h3 className="text-xl font-bold tracking-tight text-white mb-4">6.1 Changes We Include</h3>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                You get a few rounds of tweaks included in your package (usually two). Just keep them focused on what we already agreed to build.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">6.2 Big Changes</h3>
              <p className="text-foreground leading-relaxed mb-4 font-mono">Want to add a whole new feature or change direction? No problem, but we'll need to quote it separately.</p>
              <ul className="list-disc list-inside text-foreground space-y-2 font-mono">
                <li>We'll send you a price and updated timeline for the new work</li>
                <li>You approve and pay before we start the extra work</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">7. Intellectual Property (IP)</h2>
              
              <h3 className="text-xl font-bold tracking-tight text-white mb-4">7.1 It's Yours When You Pay</h3>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                Once you pay in full, everything we custom-build for you belongs to you. Your website, your app, your designs, your code.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">7.2 Our Tools Stay Ours</h3>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                The frameworks, libraries, and systems we use to build your project stay with us. You can use them in your final product, but we keep the underlying tech for future projects.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">7.3 Until You Pay</h3>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                We own everything until the final invoice is paid. Simple as that.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">7.4 Can We Show Off Your Project?</h3>
              <p className="text-foreground leading-relaxed font-mono">
                We'd love to feature your project in our portfolio unless you need to keep it private. Just let us know if you need an NDA.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">8. Warranties and Guarantees</h2>
              <p className="text-foreground leading-relaxed mb-6 font-mono">We do quality work. Period.</p>
              
              <h3 className="text-xl font-bold tracking-tight text-white mb-4">8.1 Our Guarantee</h3>
              <p className="text-foreground leading-relaxed mb-4 font-mono">
                If we promise a specific result in your proposal, we'll work with you until you get it. No extra charges for support or fixes if we said we'd deliver it.
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2 mb-6 font-mono">
                <li>We'll provide free support and adjustments until you hit the goal we agreed on</li>
                <li>This doesn't cover issues on your end (like hosting problems) or things beyond our control</li>
              </ul>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">8.2 What We Don't Guarantee</h3>
              <p className="text-foreground leading-relaxed font-mono">
                We can't guarantee you'll make X dollars or see Y% growth unless we specifically wrote that into your proposal. Too many factors are outside our control.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">9. Confidentiality and Data</h2>
              <p className="text-foreground leading-relaxed font-mono">
                Your secrets are safe with us. We won't share your business info, strategies, or login details with anyone. This stays true even after our project ends.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">10. Project Cancellation and Termination</h2>
              
              <h3 className="text-xl font-bold tracking-tight text-white mb-4">10.1 If You Cancel</h3>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                <strong>Before we start:</strong> Full refund, no questions asked.<br />
                <strong>After we've started:</strong> You pay for the work we've done. We calculate this by our hourly rate or by how much of the project is complete.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">10.2 Monthly Plans</h3>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                Give us 30 days notice to cancel. You won't get a refund for the current month.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">10.3 If We Cancel</h3>
              <p className="text-foreground leading-relaxed font-mono">
                We might cancel if you break these terms (like not paying or disappearing). You'll have 7 days to fix the issue. If not, you pay for work completed and we part ways.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">11. Limitation of Liability</h2>
              <p className="text-foreground leading-relaxed font-mono">
                We're not liable for lost profits or business opportunities. The most we'd ever owe you is what you paid us for that specific project. We're also not responsible for issues with third-party tools like hosting providers or payment processors.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">12. Governing Law and Dispute Resolution</h2>
              <p className="text-foreground leading-relaxed font-mono">
                This agreement follows international business law. Got a problem? Let's talk it out first. If we can't figure it out together, we'll use mediation or arbitration.
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">13. Changes to Terms</h2>
              <p className="text-foreground leading-relaxed font-mono">
                We might update these terms occasionally. If we make big changes, we'll email you 15 days before they kick in. Keep using our services after that and you're agreeing to the new terms.
              </p>
            </section>

            {/* Section 14 */}
            <section className="mb-12">
              <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">14. Contact Information</h2>
              <p className="text-foreground leading-relaxed mb-6 font-mono">
                Questions about any of this? Just email us.
              </p>
              <p className="text-foreground font-mono">
                <a href="mailto:info@nexiler.tech" className="text-primary hover:text-primary/80 transition-colors font-bold">
                  info@nexiler.tech
                </a>
              </p>
            </section>

            {/* Global Services Section */}
            <section className="mb-12 bg-black border border-transparent rounded-[2.5rem] p-8 sm:p-12 backdrop-blur-sm relative overflow-hidden isolate">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
              <h2 className="text-3xl font-extrabold tracking-tighter text-white mb-6">Global Services - Worldwide Reach</h2>
              <p className="text-foreground leading-relaxed mb-8 font-mono">
                Nexiler operates as a global software development and digital services company. We serve clients from Pakistan, UAE, United States, United Kingdom, Canada, Australia, and beyond. These Terms of Service apply to all clients regardless of location.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 font-mono">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-foreground font-medium">International Clients Welcome</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-foreground font-medium">Multiple Payment Methods (USD, PKR, AED, GBP)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-foreground font-medium">24/7 AI Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-foreground font-medium">GDPR, CCPA, and Data Privacy Compliant</span>
                </div>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-white mb-6">Services Available Worldwide:</h3>
              <ul className="space-y-4 font-mono">
                <li className="flex items-center gap-3 p-4 rounded-[2rem] bg-black border border-transparent hover:bg-[#0a0a0a] transition-colors">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">Web Development (Next.js, React, Custom)</span>
                </li>
                <li className="flex items-center gap-3 p-4 rounded-[2rem] bg-black border border-transparent hover:bg-[#0a0a0a] transition-colors">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">Mobile App Development (iOS & Android)</span>
                </li>
                <li className="flex items-center gap-3 p-4 rounded-[2rem] bg-black border border-transparent hover:bg-[#0a0a0a] transition-colors">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">AI/ML Integration & Automation</span>
                </li>
                <li className="flex items-center gap-3 p-4 rounded-[2rem] bg-black border border-transparent hover:bg-[#0a0a0a] transition-colors">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">Global SEO & Digital Marketing</span>
                </li>
                <li className="flex items-center gap-3 p-4 rounded-[2rem] bg-black border border-transparent hover:bg-[#0a0a0a] transition-colors">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">Social Media Management (International)</span>
                </li>
                <li className="flex items-center gap-3 p-4 rounded-[2rem] bg-black border border-transparent hover:bg-[#0a0a0a] transition-colors">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">Content Creation & Translation Services</span>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* FAQs */}
        <ServicesFaq badge="Terms FAQs" heading="Frequently Asked Legal Questions" description="Common questions about our terms and policies." />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-16 sm:pb-24">
            {/* Footer CTA */}
            <div className="text-center pt-16 border-t border-white/10">
              <p className="text-foreground text-xl font-medium mb-8">
                Thanks for choosing Nexiler. Let's build something great together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors shadow-xl"
                >
                  Back to Home
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
        </div>
        <Footer />
      </GridBackground>
    </main>
  );
}
