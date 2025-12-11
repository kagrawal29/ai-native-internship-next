"use client";

import { motion } from "framer-motion";
import { Code, Briefcase, Sparkles, GraduationCap } from "lucide-react";

const personas = [
    {
        icon: Code,
        title: "The Builder Who Feels Stuck",
        description: "You feel stuck in one role but know you're more than your job title.",
        color: "#0fa9ff",
    },
    {
        icon: Briefcase,
        title: "The Professional Ready for AI",
        description: "You want to use AI seriously, not just for party tricks.",
        color: "#9340ff",
    },
    {
        icon: Sparkles,
        title: "The Curious Misfit",
        description: "You love code and design and stories and refuse to choose just one.",
        color: "#ff7abd",
    },
    {
        icon: GraduationCap,
        title: "The Educator or Parent",
        description: "You see that kids need spaces to explore multiple selves, not just chase marks.",
        color: "#7b5eff",
    },
];

export function TargetAudienceSection() {
    return (
        <section className="section target-audience-section" id="who">
            <div className="container">
                <div className="section-heading">
                    <p className="eyebrow">Who PFTF is For</p>
                    <h2>
                        If You've Ever Thought{" "}
                        <span className="hero-gradient">"I Don't Fit in One Box"</span>
                    </h2>
                    <p className="lead">
                        PFTF is an invitation to stop choosing — and start weaving.
                    </p>
                </div>

                <div className="personas-grid">
                    {personas.map((persona, index) => (
                        <motion.div
                            key={persona.title}
                            className="persona-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        >
                            <div
                                className="persona-icon-wrapper"
                                style={{
                                    background: `${persona.color}15`,
                                    border: `1px solid ${persona.color}30`
                                }}
                            >
                                <persona.icon
                                    className="persona-icon"
                                    style={{ color: persona.color }}
                                />
                            </div>
                            <h3 className="persona-title">{persona.title}</h3>
                            <p className="persona-description">{persona.description}</p>
                            <div
                                className="persona-accent"
                                style={{ background: `linear-gradient(90deg, ${persona.color}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="audience-invitation"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="invitation-card">
                        <p className="invitation-text">
                            If you've ever thought <strong>"I don't fit in one box"</strong>,
                            <br />
                            PFTF is an invitation to stop choosing — and start weaving.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
