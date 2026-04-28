// Floating background blob — uses real image (Fondo_*), NOT CSS-generated gradient.
function Blob({ src = "../../assets/bg-gradient-01.jpg", style }) {
  return (
    <div className="blob" style={style}>
      <img src={src} alt=""/>
    </div>
  );
}

// Simple nav menu (for secondary screens like Método / Casos)
function SiteNav({ active = "inicio", onNav }) {
  const items = [
    { id: "inicio", label: "Inicio" },
    { id: "metodo", label: "Método" },
    { id: "casos",  label: "Casos" },
    { id: "contacto", label: "Contacto" },
  ];
  return (
    <nav className="site-nav">
      <div className="site-nav__brand">
        <img src="../../assets/logo-full-black.png" alt="Ingenia Latam"/>
      </div>
      <div className="site-nav__links">
        {items.map(i => (
          <a key={i.id}
             className={`site-nav__link ${active === i.id ? "is-active" : ""}`}
             onClick={(e)=>{e.preventDefault(); onNav && onNav(i.id);}}>
            {i.label}
          </a>
        ))}
      </div>
      <a className="site-nav__cta">Hablemos →</a>
    </nav>
  );
}

// Section header — eyebrow + editorial title
function SectionHeader({ eyebrow, title, anchor, anchorItalic = false }) {
  return (
    <div className="section-header">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">
        {title}{" "}
        <span className={`anchor ${anchorItalic ? "anchor--italic" : ""}`}>{anchor}</span>
      </h2>
    </div>
  );
}

// Case / pillar card
function PillarCard({ num, title, body }) {
  return (
    <div className="pillar-card">
      <div className="pillar-num">{num}</div>
      <h3 className="pillar-title">{title}</h3>
      <p className="pillar-body">{body}</p>
    </div>
  );
}

// Method "manifesto" contrast line — "No hacemos X. Diseñamos Y."
function ManifestoLine({ negative, positive }) {
  return (
    <p className="manifesto">
      <span className="manifesto-neg">{negative}</span>
      <span className="manifesto-pos">{positive}</span>
    </p>
  );
}

// Contact CTA section
function ContactBlock() {
  return (
    <section className="contact">
      <div className="contact-left">
        <div className="eyebrow">Hablemos.</div>
        <div className="contact-headline">
          Si tu marca necesita <span className="anchor anchor--italic">decidir mejor</span>,
          estamos a una conversación.
        </div>
      </div>
      <form className="contact-form" onSubmit={e=>e.preventDefault()}>
        <div className="field"><label>Nombre</label><input placeholder="Tu nombre"/></div>
        <div className="field"><label>Email</label><input type="email" placeholder="tu@empresa.com"/></div>
        <div className="field"><label>Proyecto</label><textarea rows="3" placeholder="Contanos brevemente…"/></div>
        <button className="btn btn--primary" type="submit">Enviar →</button>
      </form>
    </section>
  );
}

Object.assign(window, { Blob, SiteNav, SectionHeader, PillarCard, ManifestoLine, ContactBlock });
