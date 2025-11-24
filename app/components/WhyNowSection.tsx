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
        </div>
        <div className="why-timeline">
          <div className="timeline-line" aria-hidden="true" />
          <div className="timeline-steps">
            <div className="timeline-node">
              <span>2021</span>
              <h3>Jobs shift faster than degrees.</h3>
              <p>AI roles explode while most classes still teach theory.</p>
            </div>
            <div className="timeline-node">
              <span>2025</span>
              <h3>You graduate into automation.</h3>
              <p>Teams already automate repeatable work—they only hire builders who ship.</p>
            </div>
            <div className="timeline-node">
              <span>2030</span>
              <h3>Proof beats promises.</h3>
              <p>People who deliver AI workflows run the show. Everyone else plays catch-up.</p>
            </div>
          </div>
          <p className="why-quote-inline">“AI isn’t taking jobs. People who know how to build with AI are.” — Sarath Ramesh</p>
        </div>
      </div>
    </section>
  );
}
