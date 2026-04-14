import { useState } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const INFO = {
  nombre: "Verónica",
  apellido: "Celiz",
  profesion: "Analista Programador Junior & Desarrolladora Frontend",
  descripcion:
    "Analista con experiencia en el mundo IT y una pasión genuina por la tecnología que no para de crecer. Hoy doy ese paso que siempre quise: construir interfaces, escribir código y crear cosas que funcionen de verdad. Cada proyecto es una prueba de que nunca es tarde para hacer lo que te apasiona.",
  avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Veronica&backgroundColor=e8f5e9&hair=long16&skinColor=f2d3b1",
  email: "veronica.celiz1981@gmail.com",
  whatsapp: "https://wa.me/3534196048",
  github: "https://github.com/VeronicaCeliz7",
  linkedin: "#",
};

const SKILLS = [
  "React", "JavaScript", "HTML5", "CSS3",
  "Vite", "WebSockets", "Node.js", "Git", "GitHub", "REST APIs",
];

const PROYECTOS = [
  {
    id: 1,
    titulo: "Geek Universe",
    descripcion:
      "Aplicación React que consume la API pública de Jikan para mostrar información de anime y manga. Incluye búsqueda en tiempo real, cards con pósters, géneros y puntuación, y navegación por categorías.",
    tecnologias: ["React", "Vite", "Jikan API", "JavaScript", "CSS3"],
    repo: "https://github.com/VeronicaCeliz7/project-geek-jikan",
    emoji: "🎌",
    color: "#10b981",
  },
  {
    id: 2,
    titulo: "Slots de Animales",
    descripcion:
      "Tragamonedas interactivo construido con React y Vite. El jugador gira tres rodillos con animales y gana al conseguir tres iguales. Incluye animaciones, sistema de créditos y efectos visuales.",
    tecnologias: ["React", "Vite", "JavaScript", "CSS Animations"],
    repo: "https://github.com/VeronicaCeliz7/slots-de-animales",
    emoji: "🎰",
    color: "#f59e0b",
  },
  {
    id: 3,
    titulo: "Chat en Tiempo Real",
    descripcion:
      "Sala de chat con WebSockets en JavaScript puro, HTML y CSS. Muestra usuarios activos en tiempo real e indicador de escritura. Comunicación bidireccional instantánea sin frameworks.",
    tecnologias: ["JavaScript", "WebSockets", "HTML5", "CSS3", "Node.js"],
    repo: "https://github.com/VeronicaCeliz7/websocket3",
    emoji: "💬",
    color: "#6366f1",
  },
];

// ─── SUBCOMPONENTES ────────────────────────────────────────────────────────────

function SectionTitle({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
      <h2 style={{
        margin: 0,
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.6rem",
        fontWeight: 700,
        color: "var(--text-primary)",
        letterSpacing: "-0.02em",
        whiteSpace: "nowrap",
      }}>
        {children}
      </h2>
      <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
    </div>
  );
}

function Header({ dark }) {
  return (
    <header style={{
      padding: "4rem 2rem 3rem",
      display: "flex",
      alignItems: "center",
      gap: "2.5rem",
      flexWrap: "wrap",
      position: "relative",
    }}>
      {/* Decoración de fondo */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: dark
          ? "radial-gradient(ellipse at 20% 50%, rgba(16,185,129,0.06) 0%, transparent 60%)"
          : "radial-gradient(ellipse at 20% 50%, rgba(16,185,129,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* Avatar */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          overflow: "hidden",
          border: "3px solid var(--accent)",
          background: "var(--surface)",
          boxShadow: "0 0 0 6px var(--accent-soft)",
        }}>
          <img
            src={INFO.avatar}
            alt="Verónica Celiz"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{
          position: "absolute",
          bottom: 4,
          right: 4,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "#10b981",
          border: "2px solid var(--bg)",
        }} />
      </div>

      {/* Texto */}
      <div style={{ position: "relative" }}>
        <p style={{
          margin: "0 0 0.3rem",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
        }}>
          Analista · Desarrolladora
        </p>
        <h1 style={{
          margin: 0,
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 6vw, 3.2rem)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
        }}>
          {INFO.nombre}{" "}
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
            {INFO.apellido}
          </span>
        </h1>
        <p style={{
          margin: "0.5rem 0 0",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.85rem",
          color: "var(--text-muted)",
        }}>
          {INFO.profesion}
        </p>
      </div>
    </header>
  );
}

function SobreMi() {
  return (
    <section style={{ padding: "0 2rem 3rem" }}>
      <SectionTitle>Sobre mí</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "start", flexWrap: "wrap" }}>
        <p style={{
          margin: 0,
          fontSize: "1.05rem",
          lineHeight: 1.8,
          color: "var(--text-secondary)",
          maxWidth: 560,
          fontFamily: "'Lora', serif",
        }}>
          {INFO.descripcion}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: 140 }}>
          {[
            { label: "Experiencia", value: "IT & Análisis" },
            { label: "Foco", value: "Frontend" },
            { label: "Stack", value: "React · JS" },
          ].map(({ label, value }) => (
            <div key={label} style={{
              padding: "0.6rem 1rem",
              borderRadius: 10,
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}>
              <p style={{ margin: 0, fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</p>
              <p style={{ margin: "0.2rem 0 0", fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2rem" }}>
        {SKILLS.map((s) => (
          <span key={s} style={{
            padding: "0.35rem 0.9rem",
            borderRadius: 999,
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.78rem",
            background: "var(--accent-soft)",
            color: "var(--accent)",
            border: "1px solid var(--accent-border)",
            letterSpacing: "0.02em",
          }}>
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

function Proyecto({ titulo, descripcion, tecnologias, repo, emoji, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--surface)",
        border: `1px solid ${hovered ? color : "var(--border)"}`,
        borderRadius: 16,
        padding: "1.8rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "all 0.25s ease",
        boxShadow: hovered ? `0 8px 32px ${color}22` : "none",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <span style={{
            fontSize: "1.8rem",
            lineHeight: 1,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
          }}>
            {emoji}
          </span>
          <h3 style={{
            margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
          }}>
            {titulo}
          </h3>
        </div>
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            padding: "0.35rem 0.9rem",
            borderRadius: 8,
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.75rem",
            fontWeight: 600,
            background: `${color}15`,
            color: color,
            border: `1px solid ${color}40`,
            textDecoration: "none",
            transition: "background 0.15s",
            whiteSpace: "nowrap",
          }}
        >
          GitHub →
        </a>
      </div>

      <p style={{
        margin: 0,
        fontSize: "0.92rem",
        lineHeight: 1.7,
        color: "var(--text-secondary)",
        fontFamily: "'Lora', serif",
      }}>
        {descripcion}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
        {tecnologias.map((t) => (
          <span key={t} style={{
            padding: "0.22rem 0.6rem",
            borderRadius: 6,
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem",
            background: "var(--bg)",
            color: "var(--text-muted)",
            border: "1px solid var(--border)",
          }}>
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

function ListaProyectos() {
  const [filtro, setFiltro] = useState(null);

  const todasTechs = [...new Set(PROYECTOS.flatMap((p) => p.tecnologias))];
  const filtrados = filtro
    ? PROYECTOS.filter((p) => p.tecnologias.includes(filtro))
    : PROYECTOS;

  return (
    <section style={{ padding: "0 2rem 3rem" }}>
      <SectionTitle>Proyectos</SectionTitle>

      {/* Filtros */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.8rem" }}>
        <button
          onClick={() => setFiltro(null)}
          style={btnFiltro(filtro === null)}
        >
          todos
        </button>
        {todasTechs.map((t) => (
          <button
            key={t}
            onClick={() => setFiltro(filtro === t ? null : t)}
            style={btnFiltro(filtro === t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
        gap: "1.2rem",
      }}>
        {filtrados.map((p) => (
          <Proyecto key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const contactos = [
    { label: "Email", href: `mailto:${INFO.email}`, texto: "✉ Email" },
    { label: "GitHub", href: INFO.github, texto: "⌥ GitHub" },
    { label: "WhatsApp", href: INFO.whatsapp, texto: "✆ WhatsApp" },
    { label: "LinkedIn", href: INFO.linkedin, texto: "in LinkedIn" },
  ];

  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "2.5rem 2rem",
    }}>
      <SectionTitle>Contacto</SectionTitle>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.7rem",
        marginBottom: "2rem",
      }}>
        {contactos.map(({ label, href, texto }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: 10,
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.82rem",
              fontWeight: 600,
              background: "var(--surface)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--surface)";
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            {texto}
          </a>
        ))}
      </div>
      <p style={{
        margin: 0,
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.75rem",
        color: "var(--text-muted)",
      }}>
        © 2025 Verónica Celiz — hecho con React + Vite
      </p>
    </footer>
  );
}

// ─── HELPER ────────────────────────────────────────────────────────────────────
function btnFiltro(active) {
  return {
    padding: "0.3rem 0.8rem",
    borderRadius: 8,
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.75rem",
    cursor: "pointer",
    border: "1px solid",
    borderColor: active ? "var(--accent)" : "var(--border)",
    background: active ? "var(--accent)" : "transparent",
    color: active ? "#fff" : "var(--text-muted)",
    transition: "all 0.15s",
  };
}

// ─── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);

  const vars = dark
    ? {
        "--bg": "#0d1117",
        "--surface": "#161b22",
        "--border": "#21262d",
        "--text-primary": "#f0f6fc",
        "--text-secondary": "#8b949e",
        "--text-muted": "#484f58",
        "--accent": "#10b981",
        "--accent-soft": "rgba(16,185,129,0.1)",
        "--accent-border": "rgba(16,185,129,0.25)",
      }
    : {
        "--bg": "#fafaf8",
        "--surface": "#ffffff",
        "--border": "#e5e7eb",
        "--text-primary": "#111827",
        "--text-secondary": "#4b5563",
        "--text-muted": "#9ca3af",
        "--accent": "#059669",
        "--accent-soft": "rgba(5,150,105,0.08)",
        "--accent-border": "rgba(5,150,105,0.2)",
      };

  const cssVars = Object.entries(vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(";");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Lora:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background: var(--bg);
          color: var(--text-primary);
          transition: background 0.3s, color 0.3s;
          min-height: 100vh;
        }
        html { scroll-behavior: smooth; }
      `}</style>

      <div style={{ ...Object.fromEntries(Object.entries(vars)), background: "var(--bg)", minHeight: "100vh", transition: "background 0.3s" }}>

        {/* NAV */}
        <nav style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(16px)",
          background: dark ? "rgba(13,17,23,0.85)" : "rgba(250,250,248,0.88)",
          borderBottom: "1px solid var(--border)",
          padding: "0.9rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "var(--accent)",
            letterSpacing: "0.05em",
          }}>
            vc.dev
          </span>

          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {[
              { label: "Inicio", href: "#inicio" },
              { label: "Proyectos", href: "#proyectos" },
              { label: "Contacto", href: "#contacto" },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                textDecoration: "none",
              }}>
                {label}
              </a>
            ))}

            <button
              onClick={() => setDark(!dark)}
              style={{
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "0.35rem 0.8rem",
                background: "var(--surface)",
                color: "var(--text-muted)",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.78rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {dark ? "☀ Claro" : "☾ Oscuro"}
            </button>
          </div>
        </nav>

        {/* CONTENIDO */}
        <main style={{ maxWidth: 900, margin: "0 auto" }}>
          <div id="inicio">
            <Header dark={dark} />
            <SobreMi />
          </div>
          <div id="proyectos">
            <ListaProyectos />
          </div>
          <div id="contacto">
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
