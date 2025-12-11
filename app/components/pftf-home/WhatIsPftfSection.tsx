"use client";

import { motion } from "framer-motion";
import { Code, Palette, BookOpen, MessageSquare, Briefcase } from "lucide-react";

const disciplines = [
    { icon: Code, label: "Technology", color: "#0fa9ff" },
    { icon: Palette, label: "Art", color: "#9340ff" },
    { icon: BookOpen, label: "Science", color: "#ff7abd" },
    { icon: MessageSquare, label: "Storytelling", color: "#00d4ff" },
    { icon: Briefcase, label: "Business", color: "#7b5eff" },
];

export function WhatIsPftfSection() {
    return (
        <section className="section what-is-pftf" id="what">
            <div className="container">
                <div className="section-heading">
                    <p className="eyebrow">What is PFTF?</p>
                    <h2>
                        A Learning Studio and Movement{" "}
                        <span className="hero-gradient">for Polymaths</span>
                    </h2>
                </div>

                <div className="what-content">
                    <motion.p
                        className="what-intro lead"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        PFTF is a learning studio and movement dedicated to nurturing polymaths — people who can connect dots across technology, art, science, storytelling, business, and beyond.
                    </motion.p>

                    <motion.div
                        className="disciplines-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="disciplines-grid">
                            {disciplines.map((discipline, index) => (
                                <motion.div
                                    key={discipline.label}
                                    className="discipline-node"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className="discipline-icon" style={{ background: `${discipline.color}15` }}>
                                        <discipline.icon style={{ color: discipline.color }} />
                                    </div>
                                    <span>{discipline.label}</span>
                                </motion.div>
                            ))}
                        </div>
                        <svg className="disciplines-connections" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#0fa9ff" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#9340ff" stopOpacity="0.3" />
                                </linearGradient>
                            </defs>
                            {/* Connection lines between disciplines */}
                            <motion.circle
                                cx="300"
                                cy="200"
                                r="150"
                                stroke="url(#connection-gradient)"
                                strokeWidth="1"
                                fill="none"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: 0.8 }}
                            />
                        </svg>
                    </motion.div>

                    <motion.div
                        className="what-experiences"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="experiences-intro">We design experiences where:</p>
                        <ul className="experiences-list">
                            <li>
                                <strong>Kids, teens and adults</strong> learn by building real things,
                            </li>
                            <li>
                                <strong>AI and modern tools</strong> are used as creative collaborators,
                            </li>
                            <li>
                                and <strong>systems thinking</strong> quietly becomes the default way you see the world.
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="what-philosophy"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <p className="philosophy-statement">
                            <strong>No degrees. No rigid silos.</strong> Just well-designed journeys that change how you learn, think and act.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
