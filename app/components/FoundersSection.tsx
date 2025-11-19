export function FoundersSection() {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Leadership</p>
          <h2>Meet the founders behind the mission.</h2>
          <p>
            We’ve built startups, turned entire teams into AI-natives, launched workflows people rely on every day, and seen how badly the
            industry needs builders who can actually ship with AI. This program gets our full attention—and we’d hire from it ourselves.
          </p>
        </div>
        <div className="founders">
          <article className="founder-card">
            <div className="avatar" aria-hidden="true">
              SR
            </div>
            <h3>Sarath Ramesh</h3>
            <p className="role">Founder, Falconlogix</p>
            <p>
              B2B sales and data expert using AI to build cold email engines, data pipelines, and automation workflows for enterprise
              teams.
            </p>
          </article>
          <article className="founder-card">
            <div className="avatar" aria-hidden="true">
              KS
            </div>
            <h3>Kartik Sahu</h3>
            <p className="role">GenAI Engineer, IIT Bombay</p>
            <p>Senior developer who ships real products with AI coding tools and blends engineering rigor with rapid iteration.</p>
          </article>
          <article className="founder-card">
            <div className="avatar" aria-hidden="true">
              KA
            </div>
            <h3>Kshitiz Agarwal</h3>
            <p className="role">Co-founder &amp; CTO, Qubit Capital</p>
            <p>Turned IIT Bombay grads into AI-native operators and scaled a venture team by weaving AI into every process.</p>
          </article>
        </div>
        <div className="quote-card center">
          <p>“We built this program to hire from it ourselves.” — Sarath Ramesh</p>
        </div>
        <p className="section-cta">
          <a href="mailto:hello@ainative.io">Want to talk to the team? hello@ainative.io</a>
        </p>
      </div>
    </section>
  );
}
