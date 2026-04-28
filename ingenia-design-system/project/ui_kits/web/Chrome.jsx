// Social / top-left icon cluster used across the site header
function SocialCluster() {
  return (
    <div className="social-cluster">
      <a className="social-btn" aria-label="LinkedIn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.22 8h4.54v14H.22V8zm7.58 0h4.36v1.9h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.54v-6.22c0-1.48-.03-3.39-2.07-3.39-2.07 0-2.39 1.62-2.39 3.29V22H7.8V8z"/></svg>
      </a>
      <a className="social-btn" aria-label="Instagram">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
      </a>
    </div>
  );
}

// Country eyebrow — PERÚ / ECUADOR / CHILE
function CountryLockup({ countries = ["PERÚ", "ECUADOR", "CHILE"] }) {
  return (
    <div className="country-lockup">
      {countries.map((c, i) => (
        <React.Fragment key={c}>
          <span>{c}</span>
          {i < countries.length - 1 && <span className="sep">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

// Consultora tagline with asterisks — reused across pages
function ConsultoraTagline({ stacked = false }) {
  return (
    <div className={`consultora ${stacked ? "stacked" : ""}`}>
      <div className="consultora-text">CONSULTORA DE NEGOCIO,<br/>MARCA Y CRECIMIENTO</div>
      <div className="consultora-stars">* * *</div>
    </div>
  );
}

function Logo({ variant = "gradient", layout = "full" }) {
  const src =
    variant === "gradient"
      ? layout === "stacked" ? "../../assets/logo-stacked-gradient.png" : "../../assets/logo-full-gradient.png"
      : layout === "stacked" ? "../../assets/logo-stacked-black.png" : "../../assets/logo-full-black.png";
  return <img className={`logo logo--${layout}`} src={src} alt="Ingenia Latam"/>;
}

// Top nav strip — social left, countries right
function TopBar() {
  return (
    <header className="topbar">
      <SocialCluster/>
      <CountryLockup/>
    </header>
  );
}

// Bottom ticker — INGENIA / 2026 repeating
function Ticker() {
  const items = Array.from({length: 7});
  return (
    <div className="ticker">
      {items.map((_, i) => (
        <span key={i} className="ticker-item">
          <span>INGENIA</span><span className="sep">/</span><span>2026</span><span className="sep">/</span>
        </span>
      ))}
    </div>
  );
}

Object.assign(window, { SocialCluster, CountryLockup, ConsultoraTagline, Logo, TopBar, Ticker });
