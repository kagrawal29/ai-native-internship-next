"use client";

import { motion } from "framer-motion";

const founders = [
  {
    initials: "SR",
    name: "Sarath Ramesh",
    role: "Founder, Falconlogix",
    bio: "B2B sales and data expert using AI to build cold email engines, data pipelines, and automation workflows for enterprise teams.",
    metrics: [
      { icon: "🎯", text: "Trained 70+ professionals into AI Natives" },
      { icon: "🚀", text: "Built 5+ enterprise automation systems" },
    ],
  },
  {
    initials: "KS",
    name: "Kartik Sahu",
    role: "GenAI Engineer, IIT Bombay",
    bio: "Senior developer who ships real products with AI coding tools and blends engineering rigor with rapid iteration.",
    metrics: [
      { icon: "🎯", text: "Shipped 10+ AI products in production" },
      { icon: "🚀", text: "3 years teaching AI development" },
    ],
  },
  {
    initials: "KA",
    name: "Kshitiz Agarwal",
    role: "Co-founder & CTO, Qubit Capital",
    bio: "Turned IIT Bombay grads into AI-native operators and scaled a venture team by weaving AI into every process.",
    metrics: [
      { icon: "🎯", text: "Scaled venture team with AI workflows" },
      { icon: "🚀", text: "Mentored 15+ IIT Bombay grads" },
    ],
  },
];

export function FoundersSection() {
  return (
    <section className="section founders-section" id="team">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Leadership</p>
          <h2>
            Meet the founders <br />
            <span className="hero-gradient">behind the mission.</span>
          </h2>
          <p>
            We&apos;ve built startups, turned entire teams into AI-natives, launched workflows people rely on every day, and seen how badly
            the industry needs builders who can actually ship with AI. This program gets our full attention—and we&apos;d hire from it
            ourselves.
          </p>
        </div>

        <div className="founders">
          {founders.map((founder, index) => (
            <motion.article
              key={index}
              className="founder-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="avatar" aria-hidden="true">
                {founder.initials}
              </div>
              <h3>{founder.name}</h3>
              <p className="role">{founder.role}</p>

              <div className="founder-metrics">
                {founder.metrics.map((metric, i) => (
                  <div key={i} className="metric-item">
                    <span className="metric-icon">{metric.icon}</span>
                    <span className="metric-text">{metric.text}</span>
                  </div>
                ))}
              </div>

              <p>{founder.bio}</p>
            </motion.article>
          ))}
        </div>

        <div className="quote-card center enhanced">
          <p>&quot;We built this program to hire from it ourselves. Every project, every demo, every tool—it&apos;s what we&apos;d want to see in a candidate we&apos;re interviewing.&quot;</p>
          <span className="quote-attribution">— Sarath Ramesh, Founder</span>
        </div>

        <p className="section-cta">
          <a href="mailto:contact@pftf.in">Want to talk to the team? contact@pftf.in</a>
        </p>
      </div>
    </section>
  );
}
