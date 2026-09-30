import { useState, useEffect } from "react";

/* ─── Brand tokens ─── */
const C = {
  bg:        "#f4f1eb",
  bgAlt:     "#eceae3",
  bgDeep:    "#e8e5dc",
  surface:   "#ffffff",
  ink:       "#1c1b17",
  inkMid:    "#5a5244",
  inkLight:  "#8a7f6e",
  gold:      "#b8912a",
  goldMid:   "#c9a43f",
  goldLight: "#d4b060",
  rule:      "#d8d3c6",
  ruleLight: "#e8e5dc",
};

/* ─── Data ─── */
const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso",   href: "#proceso"   },
  { label: "Nosotros",  href: "#nosotros"  },
  { label: "Contacto",  href: "#contacto"  },
];

const SERVICES = [
  {
    number: "01",
    title: "Consultoría estratégica",
    tags: ["Diagnóstico", "Planificación", "Indicadores"],
    description:
      "Acompañamos a personas y organizaciones en la definición de rumbo, diagnóstico de situación y diseño de planes de acción concretos y medibles. Traducimos la complejidad en decisiones claras.",
  },
  {
    number: "02",
    title: "Desarrollo organizacional",
    tags: ["Estructura", "Cultura", "Equipos"],
    description:
      "Fortalecemos estructuras, procesos y culturas internas para que los equipos operen con mayor claridad, eficiencia y cohesión. Trabajamos tanto con la conducción como con los equipos.",
  },
  {
    number: "03",
    title: "Gestión del cambio",
    tags: ["Transición", "Implementación", "Comunicación"],
    description:
      "Facilitamos transiciones complejas con metodologías probadas, reduciendo resistencias y asegurando resultados sostenibles. Acompañamos desde el diseño hasta el cierre.",
  },
  {
    number: "04",
    title: "Capacitación ejecutiva",
    tags: ["Liderazgo", "Habilidades", "Talleres"],
    description:
      "Diseñamos programas a medida para líderes y equipos directivos que buscan expandir capacidades y generar impacto real. Formato presencial, remoto o híbrido.",
  },
];

const DIFFERENTIALS = [
  {
    label: "Enfoque integral",
    text: "No trabajamos por área aislada. Cada intervención considera la organización como sistema.",
  },
  {
    label: "Acompañamiento real",
    text: "Estamos presentes en la implementación, no solo en el diagnóstico.",
  },
  {
    label: "Sin moldes genéricos",
    text: "Cada propuesta se construye desde la situación específica de quien consulta.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Escucha y diagnóstico",
    text: "Comenzamos entendiendo el contexto real: conversaciones con actores clave, relevamiento de información existente y análisis de la situación actual.",
  },
  {
    step: "2",
    title: "Propuesta a medida",
    text: "Con el diagnóstico en mano, diseñamos una propuesta de intervención específica: objetivos, metodología, plazos y métricas de evaluación.",
  },
  {
    step: "3",
    title: "Implementación conjunta",
    text: "Trabajamos codo a codo con los equipos. No dejamos informes en un cajón: acompañamos la ejecución y ajustamos sobre la marcha.",
  },
  {
    step: "4",
    title: "Cierre y seguimiento",
    text: "Al finalizar, revisamos los resultados contra los objetivos planteados y definimos si hay pasos siguientes. La relación no termina con el proyecto.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Acento nos ayudó a ver con claridad lo que teníamos en frente y a tomar decisiones que veníamos postergando. El acompañamiento fue real, no solo consultor.",
    name: "Gerente General",
    org: "Empresa familiar del sector industrial, Buenos Aires",
  },
  {
    quote: "La intervención en desarrollo organizacional transformó la forma en que trabajan nuestros equipos. Resultados concretos, sin rodeos.",
    name: "Directora de Recursos Humanos",
    org: "Organización sin fines de lucro, CABA",
  },
  {
    quote: "Precisión, criterio y mucha capacidad de escucha. Exactamente lo que necesitábamos en un momento de cambio complejo.",
    name: "Socio fundador",
    org: "Estudio profesional de servicios, Córdoba",
  },
];

/* ─── Logo mark ─── */
function AcentoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size * 0.65} height={size} viewBox="0 0 42 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#d4b060" />
          <stop offset="55%"  stopColor="#b8912a" />
          <stop offset="100%" stopColor="#8a6b1a" />
        </linearGradient>
      </defs>
      <polygon points="10,0 42,0 32,64 0,64" fill="url(#goldGrad)" />
    </svg>
  );
}

/* ─── Rule ─── */
function Rule({ style: s }: { style?: React.CSSProperties }) {
  return <div aria-hidden="true" style={{ height: 1, background: `linear-gradient(to right, ${C.gold}, transparent)`, ...s }} />;
}

/* ─── Tag pill ─── */
function Tag({ label }: { label: string }) {
  return (
    <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gold, border: `1px solid ${C.gold}44`, padding: "3px 8px" }}>
      {label}
    </span>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: scrolled ? "rgba(244,241,235,0.96)" : "rgba(244,241,235,0)", borderBottom: `1px solid ${scrolled ? C.rule : "transparent"}`, backdropFilter: scrolled ? "blur(14px)" : "none", transition: "background 0.3s, border-color 0.3s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }} aria-label="Acento Consultora Integral">
          <AcentoMark size={20} />
          <div>
            <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: C.ink, lineHeight: 1 }}>ACENTO</div>
            <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 7, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, lineHeight: 1, marginTop: 2 }}>CONSULTORA INTEGRAL</div>
          </div>
        </a>

        <nav aria-label="Navegación principal" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: 28 }} className="hidden-mobile">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: C.inkMid, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.ink)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.inkMid)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="hidden-mobile" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: C.surface, background: C.gold, padding: "9px 20px", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = C.goldMid)}
            onMouseLeave={e => (e.currentTarget.style.background = C.gold)}>
            Contactar
          </a>
          <button aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)} className="show-mobile" style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
            {[{ transform: open ? "translateY(6.5px) rotate(45deg)" : "none" }, { opacity: open ? 0 : 1 }, { transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none" }].map((s, i) => (
              <span key={i} style={{ display: "block", width: 22, height: 1.5, background: C.ink, transition: "transform 0.25s, opacity 0.25s", ...s }} />
            ))}
          </button>
        </nav>
      </div>

      {open && (
        <div style={{ background: C.bg, borderTop: `1px solid ${C.rule}`, padding: "16px 24px 24px" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_LINKS.map(l => (
              <li key={l.href} style={{ borderBottom: `1px solid ${C.ruleLight}` }}>
                <a href={l.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "12px 0", fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: C.ink, textDecoration: "none" }}>{l.label}</a>
              </li>
            ))}
            <li style={{ paddingTop: 16 }}>
              <a href="#contacto" onClick={() => setOpen(false)} style={{ display: "block", textAlign: "center", padding: "12px 20px", fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: C.surface, background: C.gold, textDecoration: "none" }}>Contactar</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section id="inicio" aria-label="Inicio" className="hero-section" style={{ minHeight: "100vh", display: "grid", gridTemplateRows: "1fr auto", paddingTop: 64, position: "relative", overflow: "hidden", background: C.bg }}>
      <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", borderLeft: `1px solid ${C.ruleLight}`, pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "20%", right: "25%", width: 1, height: "50%", background: `linear-gradient(to bottom, transparent, ${C.gold}33, transparent)`, pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "10%", right: "5%", opacity: 0.05, pointerEvents: "none" }}>
        <AcentoMark size={380} />
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 0", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid hero-content-pad">
        {/* Left */}
        <div>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: C.gold, marginBottom: 24 }}>Consultora Integral · Buenos Aires</p>
          <h1 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 600, lineHeight: 1.07, color: C.ink, marginBottom: 28, maxWidth: "14ch" }}>
            Claridad para{" "}
            <em style={{ fontStyle: "italic", color: C.gold }}>decidir</em>{" "}
            y avanzar.
          </h1>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: C.inkMid, marginBottom: 12, maxWidth: "42ch" }}>
            Ayudamos a personas y organizaciones a tomar mejores decisiones, fortalecer sus equipos y ejecutar con precisión.
          </p>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 13, fontStyle: "italic", color: C.gold, marginBottom: 32 }}>
            "Ponemos el acento donde importa."
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a href="#contacto" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: C.surface, background: C.gold, padding: "13px 30px", textDecoration: "none", transition: "background 0.2s", display: "inline-block" }}
              onMouseEnter={e => (e.currentTarget.style.background = C.goldMid)}
              onMouseLeave={e => (e.currentTarget.style.background = C.gold)}>
              Hablemos
            </a>
            <a href="#servicios" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: C.inkLight, textDecoration: "none", paddingBottom: 2, borderBottom: `1px solid ${C.rule}`, transition: "color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = C.ink; e.currentTarget.style.borderColor = C.inkMid; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.inkLight; e.currentTarget.style.borderColor = C.rule; }}>
              Ver servicios →
            </a>
          </div>
        </div>

        {/* Right — differentials inline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, borderLeft: `1px solid ${C.rule}`, paddingLeft: 48 }} className="hero-right">
          {DIFFERENTIALS.map((d, i) => (
            <div key={d.label} style={{ padding: "24px 0", borderBottom: i < DIFFERENTIALS.length - 1 ? `1px solid ${C.ruleLight}` : "none" }}>
              <div style={{ width: 18, height: 1, background: C.gold, marginBottom: 10 }} />
              <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 16, fontWeight: 600, color: C.ink, lineHeight: 1.3, marginBottom: 6 }}>{d.label}</h3>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: C.inkLight }}>{d.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ maxWidth: 1200, margin: "56px auto 0", padding: "0 24px", width: "100%" }}>
        <div className="stats-grid" style={{ borderTop: `1px solid ${C.rule}`, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, background: C.rule }}>
          {[
            { value: "+10", label: "Años de experiencia" },
            { value: "60+", label: "Organizaciones acompañadas" },
            { value: "3",   label: "Industrias de especialización" },
          ].map(stat => (
            <div key={stat.value} className="stat-cell" style={{ background: C.bg, padding: "28px 32px" }}>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 600, color: C.gold, lineHeight: 1, marginBottom: 4 }}>{stat.value}</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12, fontWeight: 400, color: C.inkLight, letterSpacing: "0.04em" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-heading" className="section-pad" style={{ background: C.bgAlt, padding: "80px 0", borderTop: `1px solid ${C.rule}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 64, alignItems: "start" }} className="services-grid">
          {/* Sticky label col */}
          <div className="services-sticky" style={{ position: "sticky", top: 80 }}>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: 16 }}>Servicios</p>
            <h2 id="servicios-heading" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 600, lineHeight: 1.2, color: C.ink, marginBottom: 20 }}>
              Lo que hacemos,{" "}<em style={{ fontStyle: "italic", color: C.gold }}>cómo</em>{" "}lo hacemos.
            </h2>
            <Rule style={{ marginBottom: 20 }} />
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: C.inkLight }}>
              Cada servicio se adapta al contexto y tamaño de la organización. No hay paquetes estándar.
            </p>
          </div>

          {/* Services list */}
          <div>
            {SERVICES.map((s, i) => (
              <div key={s.number}
                style={{ borderTop: `1px solid ${C.rule}`, borderBottom: i === SERVICES.length - 1 ? `1px solid ${C.rule}` : "none", padding: "28px 12px", display: "grid", gridTemplateColumns: "40px 1fr", gap: 24, alignItems: "start", transition: "background 0.2s, padding-left 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = C.bgDeep; e.currentTarget.style.paddingLeft = "20px"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.paddingLeft = "12px"; }}>
                <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 500, color: C.gold, letterSpacing: "0.1em", paddingTop: 4 }}>{s.number}</span>
                <div>
                  <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 20, fontWeight: 600, color: C.ink, lineHeight: 1.25, marginBottom: 8 }}>{s.title}</h3>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                    {s.tags.map(t => <Tag key={t} label={t} />)}
                  </div>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: C.inkLight, maxWidth: "56ch" }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Process ─── */
function Process() {
  return (
    <section id="proceso" aria-labelledby="proceso-heading" className="section-pad" style={{ background: C.bg, padding: "80px 0", borderTop: `1px solid ${C.rule}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
          <div>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: 14 }}>Proceso</p>
            <h2 id="proceso-heading" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 600, lineHeight: 1.2, color: C.ink }}>
              Cómo trabajamos.
            </h2>
          </div>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, fontWeight: 300, color: C.inkLight, maxWidth: "38ch", lineHeight: 1.7, textAlign: "right" }} className="process-desc">
            Un proceso estructurado que se adapta a cada situación. Claridad en cada etapa.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: C.rule }} className="process-grid">
          {PROCESS.map((p, i) => (
            <div key={p.step} style={{ background: C.bg, padding: "36px 28px", position: "relative" }}>
              <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 48, fontWeight: 600, color: `${C.gold}22`, lineHeight: 1, marginBottom: 16, userSelect: "none" }}>{p.step}</div>
              <div style={{ width: 20, height: 1, background: C.gold, marginBottom: 14 }} />
              <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 16, fontWeight: 600, color: C.ink, lineHeight: 1.3, marginBottom: 10 }}>{p.title}</h3>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, fontWeight: 300, lineHeight: 1.72, color: C.inkLight }}>{p.text}</p>
              {i < PROCESS.length - 1 && (
                <div aria-hidden="true" style={{ position: "absolute", top: "50%", right: -10, width: 18, height: 1, background: C.gold, zIndex: 1 }} className="hidden-mobile" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section aria-label="Testimonios" className="section-pad" style={{ background: C.bgAlt, padding: "72px 0", borderTop: `1px solid ${C.rule}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: 36 }}>
          Lo que dicen
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: C.rule }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: C.bgAlt, padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24 }}>
              <div>
                <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 28, color: `${C.gold}55`, lineHeight: 1, marginBottom: 12 }}>&ldquo;</div>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 15, fontStyle: "italic", lineHeight: 1.72, color: C.inkMid }}>
                  {t.quote}
                </p>
              </div>
              <div style={{ borderTop: `1px solid ${C.rule}`, paddingTop: 16 }}>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12, fontWeight: 500, color: C.ink, marginBottom: 3 }}>{t.name}</p>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 300, color: C.inkLight }}>{t.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-heading" className="section-pad" style={{ background: C.bg, padding: "80px 0", borderTop: `1px solid ${C.rule}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "start" }}>
        <div>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: 16 }}>Nosotros</p>
          <h2 id="nosotros-heading" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 600, lineHeight: 1.22, color: C.ink, marginBottom: 24 }}>
            Una consultora que trabaja cerca, con criterio propio.
          </h2>
          <Rule style={{ marginBottom: 24 }} />
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: C.inkMid, marginBottom: 16 }}>
            Acento nace del convencimiento de que el asesoramiento de calidad no debería ser exclusivo de grandes corporaciones. Trabajamos con organizaciones de distinto tamaño que enfrentan decisiones complejas y necesitan un interlocutor confiable.
          </p>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: C.inkMid, marginBottom: 16 }}>
            Nuestro equipo combina formación sólida con experiencia en campo. No vendemos recetas: construimos respuestas desde la situación concreta de cada cliente.
          </p>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: C.inkMid }}>
            Operamos con estructura de consultora boutique: equipos reducidos, alta dedicación y relación directa con quien lidera el proceso.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: `1px solid ${C.rule}` }}>
          {[
            { label: "Formación",      text: "Nuestro equipo cuenta con formación en administración, psicología organizacional y gestión estratégica." },
            { label: "Experiencia",    text: "Más de una década acompañando empresas familiares, pymes, organizaciones sociales y organismos públicos." },
            { label: "Metodología",    text: "Combinamos herramientas de diagnóstico cuantitativo con procesos de facilitación y escucha activa." },
            { label: "Confidencialidad", text: "Trabajamos bajo estrictos acuerdos de confidencialidad. La discreción es parte del servicio." },
          ].map((item, i) => (
            <div key={item.label} style={{ padding: "20px 24px", borderBottom: i < 3 ? `1px solid ${C.ruleLight}` : "none" }}>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: C.gold, marginBottom: 6 }}>{item.label}</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: C.inkMid }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-heading" className="section-pad" style={{ background: C.bgAlt, padding: "80px 0", borderTop: `1px solid ${C.rule}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "start" }}>
        <div>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: 16 }}>Contacto</p>
          <h2 id="contacto-heading" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 600, lineHeight: 1.12, color: C.ink, marginBottom: 20 }}>
            El primer paso es una conversación.
          </h2>
          <Rule style={{ marginBottom: 20 }} />
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, fontWeight: 300, lineHeight: 1.78, color: C.inkMid, marginBottom: 8 }}>
            Sin formularios interminables. Nos escribís, coordinamos un primer encuentro y evaluamos juntos si hay un proyecto posible.
          </p>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, fontWeight: 300, color: C.inkLight }}>
            Buenos Aires, Argentina. Atención presencial y remota.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", flexDirection: "column", gap: 8, padding: "32px 36px", background: C.gold, textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = C.goldMid)}
            onMouseLeave={e => (e.currentTarget.style.background = C.gold)}>
            <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.72)" }}>WhatsApp</span>
            <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 17, fontWeight: 600, color: C.surface, lineHeight: 1.2 }}>Escribinos ahora →</span>
          </a>
          <a href="mailto:contacto@acentoconsultora.com.ar"
            style={{ display: "flex", flexDirection: "column", gap: 8, padding: "32px 36px", background: C.bg, border: `1px solid ${C.rule}`, textDecoration: "none", transition: "border-color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = C.gold)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = C.rule)}>
            <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: C.inkLight }}>Email</span>
            <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 14, fontWeight: 500, color: C.ink, lineHeight: 1.35, wordBreak: "break-all" }}>contacto@acentoconsultora.com.ar</span>
          </a>
          <div style={{ padding: "20px 36px", background: C.bg, border: `1px solid ${C.ruleLight}` }}>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkLight, marginBottom: 4 }}>Horario de atención</p>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, fontWeight: 300, color: C.inkMid }}>Lunes a viernes, 9 a 18 h (GMT−3)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" style={{ background: C.bgDeep, borderTop: `1px solid ${C.rule}`, padding: "40px 0 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 40, marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <AcentoMark size={16} />
            <div>
              <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C.ink }}>ACENTO</div>
              <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, color: C.inkLight }}>Consultora Integral · Buenos Aires</div>
            </div>
          </div>
          <nav aria-label="Pie de página">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 24, flexWrap: "wrap" }}>
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: C.inkLight, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.ink)}
                    onMouseLeave={e => (e.currentTarget.style.color = C.inkLight)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div style={{ borderTop: `1px solid ${C.ruleLight}`, paddingTop: 18, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, color: C.rule }}>© {year} Acento Consultora Integral. Todos los derechos reservados.</p>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, color: C.rule }}>Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Root ─── */
export default function App() {
  return (
    <>
      <style>{`
        /* ── Tablet / Mobile: ≤ 860px ── */
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 24px 0 !important;
          }
          .hero-right {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid #d8d3c6;
            padding-top: 24px;
          }
          .hero-section {
            min-height: auto !important;
            padding-bottom: 0 !important;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-sticky {
            position: static !important;
            margin-bottom: 28px;
          }
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .process-desc { text-align: left !important; }
          .section-pad {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
        }

        /* ── Mobile: ≤ 600px ── */
        @media (max-width: 600px) {
          .hidden-mobile { display: none !important; }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .process-grid {
            grid-template-columns: 1fr !important;
          }
          .section-pad {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .stat-cell {
            border-right: none !important;
            border-bottom: 1px solid #e8e5dc;
          }
        }

        /* ── Desktop only ── */
        @media (min-width: 601px) {
          .show-mobile { display: none !important; }
        }

        /* ── Stat cell borders (desktop: vertical separators) ── */
        @media (min-width: 601px) {
          .stat-cell + .stat-cell {
            border-left: 1px solid #e8e5dc;
          }
        }

        @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
