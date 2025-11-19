export function WhyNowSection() {
  return (
    <section className="section split">
      <div className="container split-grid">
        <div>
          <p className="eyebrow">Why now</p>
          <h2>Jobs are vanishing. AI Natives are replacing them.</h2>
          <p>
            Across every industry, repetitive and process-driven jobs are disappearing faster than teams can retrain. McKinsey estimates
            over 400 million roles could be automated by 2030, and LinkedIn data shows AI job postings have more than doubled since 2021.
            The shift isn’t coming—it’s here. Will you watch it or build what comes next?
          </p>
          <div className="quote-card">
            <p>“AI isn’t taking jobs. People who know how to build with AI are.”</p>
          </div>
        </div>
        <div className="photo-card" aria-hidden="true">
          <div className="photo-overlay">
            <p>Strategy Session</p>
            <span>Product + Research + Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
