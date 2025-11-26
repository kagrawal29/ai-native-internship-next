"use client";

import { motion } from "framer-motion";
import { Code, Users, Megaphone, UserCircle, FileText, Network } from "lucide-react";

const outcomes = [
  {
    icon: Code,
    metric: "5–6 projects",
    title: "Live URLs, not just repos",
    why: "Recruiters can click and test your work in 30 seconds",
  },
  {
    icon: Users,
    metric: "Team Capstone",
    title: "Built like real teams ship",
    why: "The story you tell when they ask \"Tell me about a time you collaborated\"",
  },
  {
    icon: Megaphone,
    metric: "12+ posts",
    title: "Weekly progress updates",
    why: "Your profile shows you're a builder before the interview even starts",
  },
  {
    icon: UserCircle,
    metric: "Optimized profile",
    title: "LinkedIn that tells your story",
    why: "Recruiters find you, not the other way around",
  },
  {
    icon: FileText,
    metric: "6 walkthroughs",
    title: "Notes on how you built it",
    why: "You speak confidently because you actually built it",
  },
  {
    icon: Network,
    metric: "40+ connections",
    title: "Mentors & partner teams",
    why: "Referrals happen when people know your work",
  },
];

export function OutcomesSection() {
  return (
    <section className="section outcomes-section" id="outcomes">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Proof of work</p>
          <h2>
            Your portfolio builds itself <br />
            <span className="hero-gradient">while you learn.</span>
          </h2>
          <p className="lead">
            Every week adds something real to show recruiters. No fluff, no theory—just shipped work.
          </p>
        </div>

        <div className="outcomes-grid">
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              className="outcome-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="outcome-icon-wrapper">
                <item.icon className="outcome-icon" />
              </div>
              <h3 className="outcome-metric">{item.metric}</h3>
              <p className="outcome-title">{item.title}</p>
              <p className="outcome-why">{item.why}</p>
            </motion.div>
          ))}
        </div>

        <div className="section-cta">
          <p className="mb-4 text-lg text-white">
            So when someone asks &quot;What have you built?&quot; you share a link, not a promise.
          </p>
        </div>
      </div>
    </section>
  );
}
