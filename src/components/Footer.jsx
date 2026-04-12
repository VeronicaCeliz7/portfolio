import { INFO } from "../data/info";

function Footer({ dark }) {
  const contactos = [
    { label: "Email", href: `mailto:${INFO.email}`, texto: "✉ Email" },
    { label: "GitHub", href: INFO.github, texto: "⌥ GitHub" },
    { label: "WhatsApp", href: INFO.whatsapp, texto: "✆ WhatsApp" },
    { label: "LinkedIn", href: INFO.linkedin, texto: "in LinkedIn" },
  ];

  return (
    <footer
      style={{
        borderTop: `1px solid ${dark ? "#21262d" : "#e5e7eb"}`,
        padding: "2rem 1.5rem",
      }}
    >
      {/* Título de sección */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.8rem",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: dark ? "#f0f6fc" : "#111827",
            whiteSpace: "nowrap",
            letterSpacing: "-0.02em",
          }}
        >
          Contacto
        </h2>
        <div
          style={{
            flex: 1,
            height: 1,
            background: dark ? "#21262d" : "#e5e7eb",
          }}
        />
      </div>

      {/* Botones de contacto */}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.8rem" }}
      >
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
              fontWeight: 500,
              background: dark ? "#161b22" : "#ffffff",
              color: dark ? "#8b949e" : "#4b5563",
              border: `1px solid ${dark ? "#21262d" : "#e5e7eb"}`,
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#10b981";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "#10b981";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = dark ? "#161b22" : "#ffffff";
              e.currentTarget.style.color = dark ? "#8b949e" : "#4b5563";
              e.currentTarget.style.borderColor = dark ? "#21262d" : "#e5e7eb";
            }}
          >
            {texto}
          </a>
        ))}
      </div>

      <p
        style={{
          margin: 0,
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.72rem",
          color: dark ? "#21262d" : "#d1d5db",
        }}
      >
        © 2025 Verónica Celiz — hecho con React + Vite
      </p>
    </footer>
  );
}

export default Footer;
