// Editorial hero — the current live Ingenia page.
// "Nuestra nueva web está en CONSTRUCCIÓN. Nuestra forma de trabajar, CAMBIÓ."
// The editorial "anchor" words are DM Serif Display UPPERCASE inside SG body.

function EditorialAnchor({ children, italic = false }) {
  return (
    <span className={`anchor ${italic ? "anchor--italic" : ""}`}>{children}</span>
  );
}

function HeroStatement() {
  return (
    <div className="hero-statement">
      <h1 className="hero-lead">
        Nuestra nueva web está en <EditorialAnchor>Construcción.</EditorialAnchor><br/>
        Nuestra forma de trabajar, <EditorialAnchor>Cambió.</EditorialAnchor>
      </h1>

      <div className="hero-body">
        <p>
          Después de más de <EditorialAnchor>18 años</EditorialAnchor> ejecutando comunicación,
          entendimos algo clave: las marcas no necesitan hacer más.<br/>Necesitan decidir mejor.
        </p>
        <p>
          Hoy usamos la comunicación como palanca de negocio: para ordenar prioridades, reducir riesgo y sostener crecimiento.
        </p>
        <p>
          Acompañamos a nuestros clientes a definir foco, gobernar su marca y construir plataformas que generen valor real.
          No hacemos campañas. Diseñamos claridad para que los negocios avancen.
        </p>
      </div>

      <div className="hero-brandblock">
        <Logo layout="full" variant="gradient"/>
        <ConsultoraTagline/>
      </div>
    </div>
  );
}

Object.assign(window, { HeroStatement, EditorialAnchor });
