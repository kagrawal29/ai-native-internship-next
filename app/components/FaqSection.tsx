"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqCategories = [
  {
    icon: "📚",
    title: "About the Program",
    faqs: [
      {
        q: "Is what you're teaching really needed by companies hiring now?",
        a: "Yes. Companies want builders who can automate repetitive tasks, solve complex problems with AI, and ship consistently. That's exactly what you practice here. Check our curriculum—it's based on real job descriptions from 2024-25 hiring cycles.",
      },
      {
        q: "Will I learn programming languages like Python or Java?",
        a: "We focus on building AI systems, not memorizing syntax. You'll touch code when it helps, but most tools are low-code/no-code. If you've never coded, we guide you through the parts you need. If you have coded, you'll level up fast.",
      },
      {
        q: "I don't know how to code and don't want an IT job. Does this still help?",
        a: "Absolutely. Every function—marketing, sales, operations, HR—needs people who can automate workflows and build with AI tools. You'll learn those skills even if you're not aiming for a developer title.",
      },
    ],
  },
  {
    icon: "💼",
    title: "Job Outcomes & Placements",
    faqs: [
      {
        q: "Is there placement assurance or help after the program?",
        a: "No guarantees, but we review your work weekly, help you package it for interviews, and give you the skillset, confidence, and profile to stand out. We also introduce top performers to our partner network.",
      },
      {
        q: "How soon will I get a job after this program?",
        a: "Most builders start interviewing right after Demo Day (Week 12). Realistic timeline: 1-3 months post-program, depending on your effort, interview prep, and market timing.",
      },
      {
        q: "Can you show examples of AI-native job roles?",
        a: "Think: AI Product Specialist, Automation Engineer, Workflow Designer, Agent Operator, AI Implementation Consultant. We share live job postings inside the cohort so you can target the right roles.",
      },
      {
        q: "How many students have been placed after learning from you?",
        a: "This is our founding cohort, so you'll be the first group. What you get is the exact format we've used inside our own companies to transform 70+ working professionals into AI Natives.",
      },
    ],
  },
  {
    icon: "💰",
    title: "Pricing, Scholarships & Logistics",
    faqs: [
      {
        q: "How much does the program cost?",
        a: "Founding cohort price: ₹19,999 (regular ₹29,999). Includes 12 weeks of mentorship, API credits (~₹5k value), portfolio review, and interview prep. Payment plans available.",
      },
      {
        q: "Are scholarships available?",
        a: "Yes. We reserve 5 seats for underrepresented builders (women in tech, first-gen students, Tier 2/3 colleges). Scholarships cover 50-100% of fees based on need. Apply separately.",
      },
      {
        q: "What if I can't attend live sessions?",
        a: "All sessions are recorded. But live attendance is strongly encouraged—real-time feedback is where the magic happens. If you miss a call, catch up async and join office hours.",
      },
    ],
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "For Parents",
    faqs: [
      {
        q: "Can my parents talk to someone before I apply?",
        a: "Of course. Email hello@ainative.io and we'll set up a call to walk them through the program and outcomes.",
      },
      {
        q: "Why choose this over other IT training institutes?",
        a: "They teach theory and give certificates. We make you ship, share work publicly, and talk through it like a teammate. Recruiters care about proof, not certificates. Ask to see our students' LinkedIn posts—that's the difference.",
      },
      {
        q: "Are there reviews from existing students?",
        a: "This is Cohort 01, so no student reviews yet. But you can check LinkedIn posts from the 70+ professionals we've trained into AI Natives at our companies. We'll share Cohort 01 build logs in real-time.",
      },
    ],
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>
            Questions we hear from <br />
            <span className="hero-gradient">students and parents.</span>
          </h2>
        </div>

        <div className="faq-categories">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="faq-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="faq-list-accordion">
                {category.faqs.map((faq, faqIndex) => {
                  const isOpen = openIndex === `${catIndex}-${faqIndex}`;
                  return (
                    <div key={faqIndex} className={`faq-item ${isOpen ? "open" : ""}`}>
                      <button className="faq-question" onClick={() => toggleFaq(catIndex, faqIndex)}>
                        <span>{faq.q}</span>
                        <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            className="faq-answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p>{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <p>Still have questions?</p>
          <div className="faq-cta-buttons">
            <a href="mailto:hello@ainative.io" className="btn btn-ghost">
              Schedule a call with the team
            </a>
            <a href="mailto:hello@ainative.io" className="text-primary">
              Email us: hello@ainative.io
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
