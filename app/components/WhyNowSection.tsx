export function WhyNowSection() {
  return (
    <section className="section why-now" id="why-now">
      <div className="container why-grid">
        <div className="why-content">
          <p className="eyebrow">Why now</p>
          <h2>
            Jobs are vanishing. AI Natives are <span className="hero-gradient">replacing them.</span>
          </h2>
          <p className="why-intro">2025 grads compete with AI-native operators. Teams hire builders who automate, ship, and speak product.</p>
          <div className="why-stat-row">
            <div>
              <p className="stat-number">400M+</p>
              <p className="stat-label">Jobs automated by 2030 (McKinsey)</p>
            </div>
            <div>
              <p className="stat-number">2×</p>
              <p className="stat-label">AI job postings since 2021 (LinkedIn)</p>
            </div>
          </div>
          <p className="why-intro-sub">Data already shows the curve.</p>
          <p className="why-question">Do you wait and watch—or build what replaces what’s fading?</p>
        </div>
        <div className="why-panel">
          <div className="timeline-strip">
            <div>
              <span>2021</span>
              <p>AI roles spike; most grads still memorize theory.</p>
            </div>
            <div>
              <span>2025</span>
              <p>You graduate into teams already automating everything repeatable.</p>
            </div>
            <div>
              <span>2030</span>
              <p>Builders who ship with AI run the show.</p>
            </div>
          </div>
          <p className="why-quote-inline">“AI isn’t taking jobs. People who know how to build with AI are.” — Sarath Ramesh</p>
        </div>
      </div>
    </section>
  );
}
