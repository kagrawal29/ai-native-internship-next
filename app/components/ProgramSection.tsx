export function ProgramSection() {
  return (
    <section className="section" id="program">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Why this program exists</p>
          <h2>
            Degrees prove you passed. Projects
            <span className="hero-gradient"> prove you can work.</span>
          </h2>
        </div>
        <div className="tiles three-up">
          <article className="tile">
            <div className="icon-circle" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0fa9ff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L6 13h6l-2 9 7-12h-6z" />
              </svg>
            </div>
            <h3>Start Building Fast</h3>
            <p>Pick a real problem in Week 1 and start shipping. No fluff—just hands-on work.</p>
          </article>
          <article className="tile">
            <div className="icon-circle" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0fa9ff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3c3 1 5 3 6 6l-4 4-4-4c1-3 3-5 6-6z" />
                <path d="M8 13l-3 3 3 1 1 3 3-3" />
                <circle cx="13.5" cy="7.5" r="1.5" />
              </svg>
            </div>
            <h3>Ship Every Sprint</h3>
            <p>Launch something every two weeks and build momentum. Projects become proof you can deliver.</p>
          </article>
          <article className="tile">
            <div className="icon-circle" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0fa9ff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 6h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6l-4 4v-4H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
              </svg>
            </div>
            <h3>Communicate Like a Pro</h3>
            <p>Learn to break down your builds clearly so your interviews feel effortless.</p>
          </article>
        </div>
        <p className="section-cta">
          <a href="#journey">Ready to see the 12-week plan? &rarr;</a>
        </p>
      </div>
    </section>
  );
}
