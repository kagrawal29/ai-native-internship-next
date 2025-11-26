"use client";

import { motion } from "framer-motion";

const scenarios = [
  {
    title: "The Anxious Finalist",
    description:
      "You're in final year, placements are starting, and your resume looks like everyone else's. You know theory but have nothing to show. You're worried companies will pick someone with \"real experience.\"",
    solution: "6 projects to demo, weekly mentor feedback, and interview prep that's based on what you actually built.",
  },
  {
    title: "The Curious Non-Coder",
    description:
      "You don't have a CS degree. Maybe you've only used ChatGPT. You're interested in AI but don't know where to start, and you're afraid \"technical\" programs will leave you behind.",
    solution: "Step-by-step guidance, low-code tools, and a squad that learns together. If you can follow instructions and ask for help, you'll ship.",
  },
  {
    title: "The Motivated Self-Learner",
    description:
      "You've done online courses, watched YouTube tutorials, maybe even started a project. But you never finished, you have no one to review your work, and you don't know if what you're building even matters.",
    solution: "Structure, deadlines, mentor code reviews, and projects designed around real business problems.",
  },
];

const requirements = {
  need: [
    "10–12 hours per week (2 calls + building time)",
    "Willingness to share your work publicly (LinkedIn, GitHub)",
    "Commitment to ship every week, even if it's messy",
    "Curiosity to ask questions when you're stuck",
  ],
  dontNeed: [
    "Coding experience (we teach as you build)",
    "Expensive tools (we provide API credits)",
    "Perfect English (demos can be in Hindi/English)",
    "Prior AI knowledge (ChatGPT familiarity is enough)",
  ],
};

export function WhoSection() {
  return (
    <section className="section who-section" id="who">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Is this for you?</p>
          <h2>
            If you&apos;re tired of theory and ready to build, <br />
            <span className="hero-gradient">you&apos;re in the right place.</span>
          </h2>
          <p className="lead">
            We&apos;ve trained final-year students with zero coding experience and working professionals switching careers. The common
            thread? They showed up, asked questions, and shipped every week.
          </p>
        </div>

        <div className="scenarios-grid">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              className="scenario-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3>{scenario.title}</h3>
              <p className="scenario-description">{scenario.description}</p>
              <div className="scenario-solution">
                <span className="solution-label">→ We give you:</span>
                <p>{scenario.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="requirements-section">
          <div className="requirements-grid">
            <div className="requirements-column">
              <h3 className="requirements-title">What You Need</h3>
              <ul className="requirements-list need">
                {requirements.need.map((item, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="requirements-column">
              <h3 className="requirements-title">What You DON&apos;T Need</h3>
              <ul className="requirements-list dont-need">
                {requirements.dontNeed.map((item, index) => (
                  <li key={index}>
                    <span className="cross-icon">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="section-cta">
          <p className="mb-2">Still unsure if you&apos;re ready?</p>
          <a href="#contact" className="btn btn-ghost">
            Schedule a 10-min call with a mentor
          </a>
          <br />
          <a href="#faq" className="mt-3 inline-block text-primary">
            Read FAQs from students like you →
          </a>
        </div>
      </div>
    </section>
  );
}
