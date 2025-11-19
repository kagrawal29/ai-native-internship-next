export function JourneySection() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Plan • Build • Demo • Feedback • Repeat</h2>
          <p className="lead">
            Fully online. You work in a squad of four builders with a dedicated mentor per project. Updates happen in Slack, you have two
            pre-scheduled team calls with your mentor every week, and extra office hours for questions or debugging whenever you need
            them.
          </p>
        </div>
        <div className="journey-list">
          <h3>Week 0 — Research, Plan &amp; Prepare</h3>
          <p>Meet your squad, pick the tools, and map out your first build so you’re shipping by day five.</p>
          <h3>Weeks 1–2 — LLM Workflow</h3>
          <p>Automate a real task end to end, use LLMs, pull data from multiple sources and ship your first Friday demo.</p>
          <h3>Weeks 3–4 — Text Agent</h3>
          <p>Design a conversational agent, handle edge cases, and prove it can actually help a user.</p>
          <h3>Weeks 5–6 — Voice Agent</h3>
          <p>Give your product a voice—speech in, speech out, and a scenario where a user can speak with the AI Agent.</p>
          <h3>Weeks 7–8 — Web Experience</h3>
          <p>Design, write copy, and build a website for a small business.</p>
          <h3>Weeks 9–10 — Micro-Product / AI Video Generation</h3>
          <p>Prototype, iterate, and build micro products or choose the track to build AI generated video.</p>
          <h3>Weeks 11–12 — Team Capstone + Grand Demo</h3>
          <p>
            Collaborate with your team and mentor to ship a production grade product as teams actually do in the industry - that’s the
            story you need for interviews.
          </p>
        </div>
        <p className="section-cta">
          <a href="#apply">Ready to ship with us? Apply now →</a>
        </p>
      </div>
    </section>
  );
}
