"use client";

import { Badge } from "@/components/ui/badge";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicesFaqProps {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What kind of digital services do you provide?",
    answer:
      "We provide a comprehensive suite of digital services spanning custom Website Development, AI Automation Setups, intelligent Chatbots, Full Brand Creation, SEO Optimization, and Mobile App Development.",
  },
  {
    question: "How can AI Automation help my business?",
    answer:
      "AI Automation streamlines repetitive tasks, manages customer queries 24/7, and organizes your workflows, reducing overhead costs and freeing up your team to focus on high-value growth activities.",
  },
  {
    question: "Do you build custom websites or use templates?",
    answer:
      "We specialize in high-performance, fully custom website development crafted specifically for your brand and business goals, ensuring a unique and scalable digital presence.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Small to medium-sized websites or basic automations might take 2-4 weeks, while complex platforms or full brand rollouts can take a few months. We establish clear milestones from day one.",
  },
];

export const ServicesFaq = ({
  badge = "FAQ",
  heading = "Common Questions & Answers",
  description = "Find out all the essential details about our digital solutions and how we can scale your business.",
  faqs = defaultFaqs,
}: ServicesFaqProps) => {
  return (
    <section className="pt-8 sm:pt-12 pb-16 sm:pb-24 relative z-20 font-sans">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 text-xs font-semibold uppercase tracking-wider text-primary font-sans drop-shadow-[0_0_2px_rgba(168,85,247,0.3)]">
            {badge}
          </Badge>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground">
            {heading.split(' ').map((word, i) => 
              ['Answers', 'Questions', '&'].includes(word) ? 
                <span key={i} className="text-primary">{word} </span> : 
                <span key={i}>{word} </span>
            )}
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground/90 font-medium font-mono">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-4 sm:gap-6 bg-card/40 border border-white/5 p-6 sm:p-8 rounded-[2rem] backdrop-blur-sm transition-all hover:bg-card/60 hover:border-white/10 hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.05)]">
              <span className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-full bg-white/5 font-sans font-semibold text-lg text-foreground/60 border border-white/10 shadow-inner">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-bold text-lg sm:text-xl text-foreground/90 tracking-tight leading-tight">{faq.question}</h3>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground font-mono leading-relaxed mt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
