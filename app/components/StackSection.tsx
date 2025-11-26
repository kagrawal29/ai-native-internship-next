"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "AI Models & APIs",
    tools: ["OpenAI", "Anthropic", "Groq", "Gemini"],
  },
  {
    name: "Automation & Workflows",
    tools: ["n8n", "LangChain", "LlamaIndex"],
  },
  {
    name: "Voice & Media",
    tools: ["ElevenLabs", "Retell AI", "Runway", "Pika"],
  },
  {
    name: "Development & Deployment",
    tools: ["Cursor", "Next.js", "Supabase", "Vercel"],
  },
  {
    name: "Design & Content",
    tools: ["Figma", "Canva", "Framer"],
  },
];

export function StackSection() {
  return (
    <section className="section stack-section" id="stack">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Production-ready stack</p>
          <h2>
            Build with the same tools <br />
            <span className="hero-gradient">top companies trust.</span>
          </h2>
          <p className="lead">
            Every tool is taught when you need it. Start with ChatGPT? Perfect. We&apos;ll guide you through the rest as you build.
          </p>
        </div>

        <div className="stack-grid">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="stack-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="category-title">{category.name}</h3>
              <div className="tools-list">
                {category.tools.map((tool, i) => (
                  <div key={i} className="tool-card">
                    <span className="tool-name">{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="reassurance-panel">
          <p>
            &quot;Never used these before? Neither have most students. We teach each tool exactly when you need it for your project.&quot;
          </p>
          <div className="quote-author">
            <div className="author-avatar">KS</div>
            <span>Kartik Sahu, GenAI Engineer, IIT Bombay</span>
          </div>
        </div>

        <p className="section-cta">
          <a href="curriculum.md">Download the full stack & curriculum →</a>
        </p>
      </div>
    </section>
  );
}
