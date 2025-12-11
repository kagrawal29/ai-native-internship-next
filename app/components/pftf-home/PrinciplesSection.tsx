"use client";

import { motion } from "framer-motion";
import { Network, GitBranch, Bot, Sparkles, TrendingUp } from "lucide-react";

const principles = [
    {
        number: 1,
        icon: Network,
        title: "Polymathy over narrow lanes.",
        description: "You are allowed to love multiple things. In fact, the future needs you to. We celebrate people who are coder-designer-storyteller, engineer-artist-teacher all at once.",
        color: "#0fa9ff",
    },
    {
        number: 2,
        icon: GitBranch,
        title: "Systems over fragments.",
        description: "We don't teach tools in isolation. We teach you to see systems — how people, technology, incentives and stories connect. Tools change. Systems thinking compounds.",
        color: "#9340ff",
    },
    {
        number: 3,
        icon: Bot,
        title: "AI as partner, not threat.",
        description: "We treat AI as a creative ally. Something that helps you move faster, see more options, and spend more time on the deeply human parts: sense-making, judgment, imagination.",
        color: "#00d4ff",
    },
    {
        number: 4,
        icon: Sparkles,
        title: "Play as serious work.",
        description: "We use play, experiments and prototypes as the fastest way to learn. Whether it's kids building worlds through stories or adults prototyping workflows, play is our lab.",
        color: "#ff7abd",
    },
    {
        number: 5,
        icon: TrendingUp,
        title: "Lifelong, self-directed growth.",
        description: "Our real product is not a certificate. It's a person who knows how to keep learning, across domains, for life.",
        color: "#7b5eff",
    },
];

export function PrinciplesSection() {
    return (
        <section className="section principles-section" id="principles">
            <div className="container">
                <div className="section-heading">
                    <p className="eyebrow">Our Principles</p>
                    <h2>
                        The Spine That Holds{" "}
                        <span className="hero-gradient">Everything Together</span>
                    </h2>
                </div>

                <div className="principles-grid">
                    {principles.map((principle, index) => (
                        <motion.div
                            key={principle.number}
                            className="principle-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        >
                            <div className="principle-header">
                                <div
                                    className="principle-icon-wrapper"
                                    style={{
                                        background: `${principle.color}15`,
                                        border: `1px solid ${principle.color}30`
                                    }}
                                >
                                    <principle.icon
                                        className="principle-icon"
                                        style={{ color: principle.color }}
                                    />
                                </div>
                                <span
                                    className="principle-number"
                                    style={{ color: principle.color }}
                                >
                                    {principle.number}
                                </span>
                            </div>

                            <h3 className="principle-title">{principle.title}</h3>
                            <p className="principle-description">{principle.description}</p>

                            <div
                                className="principle-accent"
                                style={{ background: `linear-gradient(90deg, ${principle.color}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="principles-footer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="principles-closing">
                        These aren&apos;t just words on a wall. They&apos;re the filters we use to design every program, every session, every interaction at PFTF.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
