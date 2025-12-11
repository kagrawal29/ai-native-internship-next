"use client";

import { motion } from "framer-motion";

const experienceSteps = [
    {
        step: "Start",
        description: "You start with a question or a hunch, not a syllabus.",
    },
    {
        step: "Map",
        description: "You map the system around it — people, tools, constraints, leverage points.",
    },
    {
        step: "Explore",
        description: "You use AI to explore options, compress research, generate wild ideas.",
    },
    {
        step: "Build",
        description: "You prototype fast, break things, rebuild.",
    },
    {
        step: "Share",
        description: "You share with others who are also crossing boundaries, not guarding them.",
    },
];

export function ExperienceSection() {
    return (
        <section className="section experience-section" id="experience">
            <div className="container">
                <div className="section-heading">
                    <p className="eyebrow">The Experience</p>
                    <h2>
                        How It Feels to Learn{" "}
                        <span className="hero-gradient">with PFTF</span>
                    </h2>
                </div>

                <div className="experience-content">
                    <motion.div
                        className="experience-intro"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="experience-statement">
                            It doesn't feel like sitting in a classroom.
                            <br />
                            <strong>It feels like walking into a studio where everyone is in motion.</strong>
                        </p>
                    </motion.div>

                    <div className="experience-flow">
                        {experienceSteps.map((item, index) => (
                            <motion.div
                                key={item.step}
                                className="experience-step"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="step-marker">
                                    <span className="step-number">{index + 1}</span>
                                    <div className="step-label">{item.step}</div>
                                </div>
                                <div className="step-content">
                                    <p>{item.description}</p>
                                </div>
                                {index < experienceSteps.length - 1 && (
                                    <div className="step-connector" />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="experience-days"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="days-grid">
                            <div className="day-card">
                                <h4>Some days look like</h4>
                                <p>Deep focus with your laptop and a notebook.</p>
                            </div>
                            <div className="day-card">
                                <h4>Some days look like</h4>
                                <p>Whiteboards, sticky notes, and movement.</p>
                            </div>
                            <div className="day-card">
                                <h4>Every day</h4>
                                <p>You leave seeing the world a little more like a system you can shape, not just survive.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="experience-embodiment"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <p className="embodiment-note">
                            Learning that moves through the body as well, not just the mind.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
