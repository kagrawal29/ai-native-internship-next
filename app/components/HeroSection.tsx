export function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-card">
          <div className="hero-content">
            <p className="eyebrow">AI Native Internship • 2025 Founding Cohort</p>
            <h1>
              <span className="hero-gradient">Stand out</span> in Placements
              <br /> Build AI Projects
            </h1>
            <p className="lead">
              Build AI workflows, products, and agents for actual business use cases <br /> Show the work weekly on LinkedIn/GitHub, and
              walk into interviews with proof you can ship.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#apply">
                Apply to join the founding cohort
              </a>
              <a className="btn btn-ghost" href="#journey">
                See the journey in detail
              </a>
            </div>
            <a className="hero-link" href="#contact">
              Need more info? Talk to us.
            </a>
            <p className="hero-urgency">20 seats only • Reserve your spot</p>
          </div>
          <div className="hero-metrics">
            <div className="metric-card">
              <span className="metric-label">12 weeks</span>
              <p>4-6 shipped launches, bi-weekly themes &amp; demo days</p>
            </div>
            <div className="metric-card">
              <span className="metric-label">Proof of building</span>
              <p>Published tools, live demos, git repos &amp; LinkedIn posts</p>
            </div>
            <div className="metric-card">
              <span className="metric-label">Mentor &amp; partner referrals</span>
              <p>Feedback + intros once your demos land</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
