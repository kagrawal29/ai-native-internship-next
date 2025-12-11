"use client";

import { motion } from "framer-motion";

export function PftfHeroSection() {
    return (
        <section className="hero pftf-hero">
            <div className="container">
                <motion.div
                    className="hero-content-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="pftf-hero-headline">
                        For People Who Refuse to Be{" "}
                        <span className="hero-gradient">Just One Thing.</span>
                    </h1>

                    <p className="pftf-hero-subheadline">
                        PFTF is a living school for systems thinkers, multi-hyphenates, and makers.
                        <br />
                        We help you weave technology, creativity, and curiosity into one coherent way of being—
                        <br />
                        so you can shape the future, not wait for it.
                    </p>

                    <div className="hero-actions pftf-hero-actions">
                        <a
                            className="btn btn-primary"
                            href="#join"
                            data-tally-open="Xx5A9j"
                            data-tally-layout="modal"
                            data-tally-emoji-text="👋"
                            data-tally-emoji-animation="wave"
                        >
                            Start Your Journey
                        </a>
                        <a className="btn btn-outline" href="#programs">
                            Explore Programs
                        </a>
                    </div>

                    <a className="hero-link" href="#experience">
                        See How PFTF Works →
                    </a>
                </motion.div>

                <motion.div
                    className="pftf-hero-visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="pftf-connection-visual">
                        <div className="connection-node node-1">
                            <span>Technology</span>
                        </div>
                        <div className="connection-node node-2">
                            <span>Creativity</span>
                        </div>
                        <div className="connection-node node-3">
                            <span>Curiosity</span>
                        </div>
                        <svg className="connection-lines" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                d="M 100 150 Q 200 50 300 150"
                                stroke="url(#gradient1)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.6 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                            <motion.path
                                d="M 100 150 Q 200 250 300 150"
                                stroke="url(#gradient1)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.6 }}
                                transition={{ duration: 1.5, delay: 0.7 }}
                            />
                            <motion.path
                                d="M 200 50 L 200 250"
                                stroke="url(#gradient1)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.6 }}
                                transition={{ duration: 1.5, delay: 0.9 }}
                            />
                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#0fa9ff" />
                                    <stop offset="100%" stopColor="#9340ff" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
