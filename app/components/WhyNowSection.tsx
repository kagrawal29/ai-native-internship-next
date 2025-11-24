export function WhyNowSection() {
  return (
    <section className="section why-now" id="why-now">
      <div className="container why-grid">
        <div className="why-content">
          <p className="eyebrow">Why now</p>
          <h2>
            Jobs are vanishing. AI Natives <span className="hero-gradient">are replacing them.</span>
          </h2>
          <p className="why-intro">
            2025 grads compete with AI-native operators. Repetitive roles disappear while teams hire builders who can automate, ship, and speak product.
          </p>
          <div className="why-stats">
            <article>
              <p className="stat-number">400M+</p>
              <p className="stat-label">Jobs automated by 2030 (McKinsey)</p>
            </article>
            <article>
              <p className="stat-number">2×</p>
              <p className="stat-label">Growth in AI job postings since 2021 (LinkedIn)</p>
            </article>
          </div>
          <p className="why-question">So do you wait and watch? Or build the work that replaces what’s fading?</p>
        </div>
        <div className="why-panel">
          <div className="trend-timeline">
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
              <p>Builders who ship with AI run the show. Everyone else is catching up.</p>
            </div>
          </div>
          <div className="why-quote">
            <p>“AI isn’t taking jobs. People who know how to build with AI are.”</p>
            <span>— Sarath Ramesh</span>
          </div>
        </div>
      </div>
    </section>
  );
}
