"use client";

import { motion } from "framer-motion";

const weeks = [
  {
    week: "Week 0",
    title: "Research, Plan & Prepare",
    build: "Research a real business problem, plan your first automation, ship a working prototype",
    learn: "How to scope projects, pick the right tools, and demo your work",
    outcome: "Your first public LinkedIn post with a working demo link",
    color: "blue",
    tools: ["Research", "Planning", "Prototyping"],
  },
  {
    week: "Weeks 1–2",
    title: "LLM Workflow Builder",
    build: "End-to-end automation that pulls data from 3+ sources and delivers insights",
    learn: "Prompt engineering, API integrations, error handling in production",
    outcome: "Live tool + walkthrough video recruiters can test",
    color: "purple",
    tools: ["n8n", "OpenAI", "APIs"],
  },
  {
    week: "Weeks 3–4",
    title: "Conversational AI Agent",
    build: "Text-based agent that handles real user queries with context memory",
    learn: "Agent architecture, edge case handling, user experience design",
    outcome: "Deployed chatbot with usage analytics",
    color: "pink",
    tools: ["LangChain", "Vector DB", "React"],
  },
  {
    week: "Weeks 5–6",
    title: "Voice AI Interface",
    build: "Voice-in, voice-out AI agent for a specific use case",
    learn: "Speech recognition, natural conversation flow, latency optimization",
    outcome: "Recorded demo of a real conversation with your agent",
    color: "blue",
    tools: ["ElevenLabs", "Deepgram", "Retell"],
  },
  {
    week: "Weeks 7–8",
    title: "AI-Powered Web Experience",
    build: "Full website for a small business with AI-generated content",
    learn: "Web design, copywriting, SEO, deployment pipelines",
    outcome: "Live website + case study of your design process",
    color: "purple",
    tools: ["Next.js", "Tailwind", "Framer"],
  },
  {
    week: "Weeks 9–10",
    title: "Choose Your Track",
    build: "Option A: Micro SaaS Product | Option B: AI Video Generation",
    learn: "Product launch, user feedback, or advanced media generation",
    outcome: "Product launch post + early user feedback",
    color: "pink",
    tools: ["Stripe", "Auth", "Runway"],
  },
  {
    week: "Weeks 11–12",
    title: "Team Capstone",
    build: "Production-grade product with your squad, like real teams ship",
    learn: "Collaboration, code review, project management, stakeholder demos",
    outcome: "The story you tell in every interview",
    color: "blue",
    tools: ["Git", "Team Work", "Production"],
  },
];

export function JourneySection() {
  return (
    <section className="section journey-section" id="journey">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">12 weeks to job-ready</p>
          <h2>
            Ship weekly. Demo publicly. <br />
            <span className="hero-gradient">Build proof recruiters can&apos;t ignore.</span>
          </h2>
          <p className="lead">
            Fully online. Squad of 4 builders. Dedicated mentor. Two team calls weekly + office hours whenever you&apos;re stuck.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line-vertical" />

          <div className="timeline-weeks">
            {weeks.map((week, index) => (
              <motion.div
                key={index}
                className={`week-card-wrapper color-${week.color}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-dot" />
                <div className="week-card">
                  <div className="week-header">
                    <span className="week-badge">{week.week}</span>
                    <h3>{week.title}</h3>
                  </div>

                  <div className="week-content">
                    <div className="week-item">
                      <span className="item-label">Build:</span>
                      <p>{week.build}</p>
                    </div>
                    <div className="week-item">
                      <span className="item-label">Learn:</span>
                      <p>{week.learn}</p>
                    </div>
                    <div className="week-item highlight">
                      <span className="item-label">Outcome:</span>
                      <p>{week.outcome}</p>
                    </div>
                  </div>

                  <div className="week-tools">
                    {week.tools.map((tool, i) => (
                      <span key={i} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="section-cta">
          By Week 12, you&apos;ll have 6 projects recruiters can test, not just read about.
          <br />
          <a href="#outcomes" className="mt-4 inline-block">See what past builders shipped →</a>
        </p>
      </div>
    </section>
  );
}
