export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home">
          <div className="brand-mark">AI</div>
          <div>
            <p className="brand-name">AI Native Internship</p>
            <span className="brand-tagline hero-gradient">
              Build Real AI • Launch Your Career
            </span>
          </div>
        </a>
        <nav className="nav-links">
          <a href="#program">Program</a>
          <a href="#journey">Journey</a>
          <a href="#team">Founders</a>
          <a href="#apply">Apply</a>
        </nav>
        <a className="btn btn-outline" href="#apply">
          Apply Now
        </a>
      </div>
    </header>
  );
}
