"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";

export function PftfCtaSection() {
    return (
        <section className="section cta-section pftf-cta" id="join">
            <div className="container">
                <motion.div
                    className="cta-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Join <span className="hero-gradient">Polymath For The Future</span>
                    </h2>
                    <p className="cta-intro">
                        We're building a global, inter-generational community of polymaths — people who want to think deeply, learn broadly and build bravely in the Age of AI.
                    </p>
                </motion.div>

                <div className="cta-cards">
                    <motion.div
                        className="cta-card cta-primary"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="cta-card-content">
                            <h3>Join the PFTF List</h3>
                            <p>
                                Be the first to know about new cohorts, labs and fellowships.
                                <br />
                                Get updates on upcoming AI Bootcamps, Young Polymaths Labs, and new programs.
                            </p>

                            <form className="cta-form" data-tally-open="Xx5A9j" data-tally-layout="modal">
                                <button type="submit" className="btn btn-primary btn-large">
                                    Start Your Journey
                                    <ArrowRight size={20} />
                                </button>
                            </form>

                            <p className="cta-social-proof">
                                Join a growing community of polymaths shaping the future
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="cta-card cta-secondary"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="cta-card-content">
                            <div className="cta-icon-wrapper">
                                <Building2 className="cta-icon" />
                            </div>
                            <h3>Bring PFTF to Your Organisation</h3>
                            <p>
                                Partner with us to design polymath-friendly programs for your teams, schools or communities.
                            </p>

                            <a
                                href="mailto:contact@pftf.in?subject=Partnership Inquiry"
                                className="btn btn-outline btn-large"
                            >
                                Get in Touch
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="cta-footer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="cta-closing">
                        The future belongs to those who can think across boundaries.
                        <br />
                        <strong>Are you ready to become a polymath?</strong>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
