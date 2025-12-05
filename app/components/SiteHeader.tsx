export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home">
          <img src="/pftf-logo.jpg" alt="PFTF Logo" className="brand-logo" />
          <div>
            <p className="brand-name">AI Native Bootcamp</p>
            <span className="brand-tagline hero-gradient">
              by PFTF
            </span>
          </div>
        </a>
        <nav className="nav-links">
          <a href="#program">Program</a>
          <a href="#journey">Journey</a>
          <a href="#team">Founders</a>
          <a href="#apply" data-tally-open="Xx5A9j" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-auto-close="2000">Apply</a>
        </nav>
        <a className="btn btn-outline" href="#apply" data-tally-open="Xx5A9j" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-auto-close="2000">
          Apply Now
        </a>
      </div>
    </header>
  );
}
