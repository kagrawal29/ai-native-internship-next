"use client";

import { motion } from "framer-motion";

export function WhyPftfSection() {
    return (
        <section className="section why-pftf" id="why">
            <div className="container">
                <div className="section-heading">
                    <p className="eyebrow">Why We Exist</p>
                    <h2>
                        The Quiet Mismatch Between{" "}
                        <span className="hero-gradient">Education and Industry</span>
                    </h2>
                </div>

                <div className="why-pftf-content">
                    <motion.div
                        className="why-statement"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="why-intro">For decades, we&apos;ve lived with a quiet mismatch:</p>

                        <div className="mismatch-grid">
                            <div className="mismatch-card education">
                                <h3>Education</h3>
                                <p>Trains people for jobs that no longer exist.</p>
                            </div>

                            <div className="mismatch-divider">
                                <span>vs</span>
                            </div>

                            <div className="mismatch-card industry">
                                <h3>Industry</h3>
                                <p>Demands skills and thinking patterns most people were never taught.</p>
                            </div>
                        </div>

                        <p className="why-individual">
                            In the middle of this tug-of-war stands <strong>the individual</strong> — curious, overloaded, and under-equipped.
                        </p>
                    </motion.div>

                    <motion.div
                        className="why-ai-age"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            At the same time, we are entering the <strong>Age of AI</strong>. Tools that compress time, automate tasks and open new creative doors are arriving faster than institutions can respond.
                        </p>
                    </motion.div>

                    <motion.div
                        className="why-belief quote-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="belief-intro">PFTF was born from a simple belief:</p>
                        <p className="belief-statement">
                            If we design the right environments, it becomes possible for any person to grow into a polymath — to see systems, move across disciplines, and build their own path.
                        </p>
                    </motion.div>

                    <motion.div
                        className="why-mission"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <p className="mission-statement">
                            We&apos;re here to shift from <span className="highlight">top-down instruction</span>
                            <br />
                            to <span className="highlight gradient">bottom-up empowerment of the individual.</span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
