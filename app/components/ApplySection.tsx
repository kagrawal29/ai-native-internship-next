"use client";

import { motion } from "framer-motion";

const applicationSteps = [
  {
    step: "1",
    title: "Submit Application",
    duration: "5 min",
    description: "Basic info + \"Why do you want to join?\"",
    details: ["No resume required", "Response within 48 hours"],
  },
  {
    step: "2",
    title: "Intro Call",
    duration: "15 min",
    description: "Meet a mentor",
    details: ["Discuss your goals", "See if it's a fit (both ways)"],
  },
  {
    step: "3",
    title: "Start Week 0",
    duration: "Jan 6, 2025",
    description: "Meet your squad",
    details: ["Set up tools", "Ship your first demo by Jan 10"],
  },
];

export function ApplySection() {
  return (
    <section className="section apply-section" id="apply">
      <div className="container">
        <div className="urgency-banner">
          <div className="urgency-content">
            <span className="urgency-label">Founding Cohort • Jan 2025</span>
            <h2 className="urgency-title">14 of 20 seats filled. Applications close Dec 15th.</h2>
          </div>
          <div className="urgency-bar">
            <div className="urgency-fill" style={{ width: "70%" }}></div>
          </div>
        </div>

        <div className="section-heading">
          <p className="lead">
            We&apos;re keeping the first cohort small so every builder gets close mentor time and real feedback. If you want proof you can
            show in interviews, this is where you build it.
          </p>
        </div>

        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Founding Cohort Details</h3>
          </div>
          {/* Pricing hidden for conversion optimization */}
          <div className="pricing-amount" style={{ display: "none" }}>
            <span className="price-original">₹79,000</span>
            <span className="price-current">₹49,000</span>
          </div>
          <p className="pricing-note">Limited seats available for Founding Cohort</p>

          <div className="pricing-includes">
            <h4>What&apos;s included:</h4>
            <ul>
              <li>✓ 12 weeks of mentorship</li>
              <li>✓ API credits for all tools (~₹5k value)</li>
              <li>✓ 2 team calls/week + office hours</li>
              <li>✓ Portfolio review & interview prep</li>
              <li>✓ Access to partner network</li>
            </ul>
          </div>

          <div className="scholarship-section">
            <div className="scholarship-badge">💰 Scholarships Available</div>
            <p className="scholarship-text">For women in tech, first-generation students, and Tier 2/3 college students</p>
            <a href="mailto:contact@pftf.in?subject=Scholarship Application" className="scholarship-link">
              Apply for scholarship →
            </a>
          </div>
        </div>

        <div className="application-process">
          <h3 className="process-title">Application Process</h3>
          <div className="application-stepper">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                className="step-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <div className="step-header">
                    <h4>{step.title}</h4>
                    <span className="step-duration">{step.duration}</span>
                  </div>
                  <p className="step-description">{step.description}</p>
                  <ul className="step-details">
                    {step.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="cta-buttons">
          <a className="btn btn-primary btn-large" href="#apply" data-tally-open="Xx5A9j" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-auto-close="2000">
            Apply for Founding Cohort
          </a>
          <div className="cta-secondary">
            <p>Have questions before applying?</p>
            <button className="btn-link" data-tally-open="Xx5A9j" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-auto-close="2000">
              📞 Ask for a callback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
