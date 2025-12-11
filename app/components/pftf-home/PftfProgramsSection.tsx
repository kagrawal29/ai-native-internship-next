"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bell, Calendar } from "lucide-react";

const programs = [
    {
        id: "ai-bootcamp",
        status: "available",
        badge: "Available Now",
        title: "AI Bootcamp",
        subtitle: "For Working Polymaths",
        description: "A 5-day immersive experience for builders, professionals and teams who want to:",
        features: [
            "Map their work as systems and workflows",
            "Use AI agents and tools to amplify their capabilities",
            "Ship a real prototype by the end of the week",
            "Leave with a new mental model for how to learn and build in the Agentic Age",
        ],
        cta: "Discover the AI Bootcamp",
        ctaLink: "/bootcamp-students",
        color: "#0fa9ff",
    },
    {
        id: "young-polymaths",
        status: "coming-soon",
        badge: "Coming Soon",
        title: "Young Polymaths Lab",
        subtitle: "For Curious Kids & Teens",
        description: "A playful lab where young humans build stories, games, tools and worlds — weaving together systems thinking, technology, movement, art and storytelling.",
        features: [
            "Project-based learning across disciplines",
            "AI as a creative collaborator",
            "Movement and embodiment practices",
            "Build confidence through making",
        ],
        cta: "Get Notified When We Launch",
        ctaLink: "#join",
        color: "#9340ff",
    },
    {
        id: "future-tracks",
        status: "in-development",
        badge: "In Development",
        title: "Future Tracks",
        subtitle: "Expanding the Polymath Ecosystem",
        description: "PFTF will keep evolving — the programs change, the core stays the same: designing experiences that grow polymaths.",
        features: [
            "Polymath Studio: Long-form journeys across disciplines",
            "Founders & Creators Track: Systems thinking for builders",
            "Educator Fellowships: Helping teachers redesign learning around polymathy & AI",
        ],
        cta: "See Our Roadmap",
        ctaLink: "#roadmap",
        color: "#7b5eff",
    },
];

export function PftfProgramsSection() {
    return (
        <section className="section programs-section pftf-programs" id="programs">
            <div className="container">
                <div className="section-heading">
                    <p className="eyebrow">Programs at PFTF</p>
                    <h2>
                        AI is the First Door,{" "}
                        <span className="hero-gradient">Not the Whole House</span>
                    </h2>
                    <p className="lead">
                        We&apos;re starting where the world is shifting fastest: AI and intelligent tools.
                        <br />
                        But every program we build serves one deeper aim — to help you think like a polymath and build like a systems designer.
                    </p>
                </div>

                <div className="programs-list">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            className={`program-card program-${program.status}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className="program-card-header">
                                <div className="program-badge-wrapper">
                                    <span
                                        className={`program-badge badge-${program.status}`}
                                        style={{ borderColor: program.color }}
                                    >
                                        {program.status === "available" && <Calendar size={14} />}
                                        {program.status === "coming-soon" && <Bell size={14} />}
                                        {program.status === "in-development" && <ArrowRight size={14} />}
                                        {program.badge}
                                    </span>
                                </div>
                                <h3 className="program-title">{program.title}</h3>
                                <p className="program-subtitle">{program.subtitle}</p>
                            </div>

                            <div className="program-card-body">
                                <p className="program-description">{program.description}</p>

                                <ul className="program-features">
                                    {program.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="feature-bullet" style={{ background: program.color }} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="program-card-footer">
                                <a
                                    href={program.ctaLink}
                                    className={`btn ${program.status === "available" ? "btn-primary" : "btn-outline"}`}
                                    {...(program.ctaLink === "#join" && {
                                        "data-tally-open": "Xx5A9j",
                                        "data-tally-layout": "modal",
                                    })}
                                >
                                    {program.cta}
                                    <ArrowRight size={16} />
                                </a>
                            </div>

                            <div
                                className="program-accent"
                                style={{ background: `linear-gradient(135deg, ${program.color}20, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="programs-footer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="programs-evolution">
                        PFTF will keep evolving — the programs change, the core stays the same: designing experiences that grow polymaths.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
