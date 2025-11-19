"use client";

import { motion } from "framer-motion";

export function ProgramSection() {
  return (
    <section className="section program-section" id="program">
      <div className="container program-stack">
        <div className="program-header">
          <p className="eyebrow">Why this program exists</p>
          <h2>
            Degrees prove you passed. <br></br> Projects <span className="hero-gradient"> prove you can work.</span>
          </h2>
          <p className="program-intro-text">Most students know the theory but can’t show real work. AI Native fixes that.</p>
        </div>
        <div className="program-compare">
          <motion.article
            className="program-card before-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <div className="program-card-header">
              <span className="program-flag">Before</span>
              <h3>Degree-Only Path</h3>
            </div>
            <ul>
              <li>You learn concepts but never build anything real.</li>
              <li>Your resume looks like everyone else’s.</li>
              <li>You have no stories to speak about in interviews.</li>
            </ul>
          </motion.article>
          <motion.article
            className="program-card after-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="program-card-header">
              <span className="program-flag">After</span>
              <h3>AI-Native Proof-of-Work</h3>
            </div>
            <ul>
              <li>You build AI workflows and agents from Week 1.</li>
              <li>Your work lives online — portfolio, build log, proof.</li>
              <li>You speak confidently because you’ve actually built things.</li>
            </ul>
          </motion.article>
        </div>
        <p className="program-closing">By the end, your work speaks for you.</p>
        <p className="section-cta">
          <a href="#journey">Ready to see the 12-week plan? →</a>
        </p>
      </div>
    </section>
  );
}
