"use client";

import { motion } from "framer-motion";

export function WhyNowSection() {
  return (
    <section className="section why-now" id="why-now">
      <div className="container why-grid">
        <div className="why-content">
          <p className="eyebrow">Why now</p>
          <h2>
            Jobs are vanishing. AI Natives are <span className="hero-gradient">replacing them.</span>
          </h2>
          <p className="why-intro">2025 grads compete with AI-native operators. Teams hire builders who automate, ship, and speak product.</p>
        </div>
        <div className="why-timeline">
          <motion.div className="timeline-line" aria-hidden="true" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} />
          <div className="timeline-steps">
            <motion.div className="timeline-node" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <span>2021</span>
              <h3>Jobs shift faster than degrees.</h3>
              <p>AI roles explode while most classes still teach theory.</p>
            </motion.div>
            <motion.div className="timeline-node" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <span>2025</span>
              <h3>You graduate into automation.</h3>
              <p>Teams already automate repeatable work—they only hire builders who ship.</p>
            </motion.div>
            <motion.div className="timeline-node" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
              <span>2030</span>
              <h3>Proof beats promises.</h3>
              <p>People who deliver AI workflows run the show. Everyone else plays catch-up.</p>
            </motion.div>
          </div>
          <p className="why-quote-inline">“AI isn’t taking jobs. People who know how to build with AI are.” — Sarath Ramesh</p>
        </div>
      </div>
    </section>
  );
}
