"use client";

import { ServicesFaq } from "@/components/services/faq";

export function AboutFaq() {
  const faqs = [
    {
      question: "Are you a single freelancer or a team?",
      answer: "We are a united team. We have three partners who bring together a powerful combination of skills in intelligent automation, premium web development, and client solutions. We are not just freelancers, we are a dedicated agency focused on delivering high quality services to our clients.",
    },
    {
      question: "What is your main focus?",
      answer: "Our mission is simple: provide solutions that actually work and save you time. We are not just here to make money, we focus on lasting impact and honest advice.",
    },  
    {
      question: "Do you work with international clients?",
      answer: "Yes, our team is equipped to handle and perfectly assist clients internationally, delivering complete web, AI, and digital growth solutions globally.",
    },
  ];

  return (
    <ServicesFaq
      badge="About FAQs"
      heading="Frequently Asked Questions"
      description="More details about who we are and what we stand for."
      faqs={faqs}
    />
  );
}