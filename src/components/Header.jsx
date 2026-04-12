import { INFO } from "../data/info";

function Header({ dark }) {
  return (
    <header
      style={{
        padding: "3.5rem 1.5rem 2.5rem",
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        flexWrap: "wrap",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decoración fondo */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background:
            "radial-gradient(ellipse at 15% 50%, rgba(16,185,129,.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Avatar */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #10b981",
            background: dark ? "#161b22" : "#ffffff",
            boxShadow: "0 0 0 6px rgba(16,185,129,.1)",
          }}
        >
          <img
            src={INFO.avatar}
            alt={`${INFO.nombre} ${INFO.apellido}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* Punto verde online */}
        <div
          style={{
            position: "absolute",
            bottom: 4,
            right: 4,
            width: 17,
            height: 17,
            borderRadius: "50%",
            background: "#10b981",
            border: `2.5px solid ${dark ? "#0d1117" : "#fafaf8"}`,
          }}
        />
      </div>

      {/* Texto */}
      <div style={{ position: "relative" }}>
        <p
          style={{
            margin: "0 0 0.3rem",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#10b981",
          }}
        >
          Analista · Desarrolladora
        </p>
        <h1
          style={{
            margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: dark ? "#f0f6fc" : "#111827",
          }}
        >
          {INFO.nombre}{" "}
          <span style={{ color: "#10b981", fontStyle: "italic" }}>
            {INFO.apellido}
          </span>
        </h1>
        <p
          style={{
            margin: "0.4rem 0 0",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.82rem",
            color: dark ? "#484f58" : "#9ca3af",
          }}
        >
          {INFO.profesion}
        </p>
      </div>
    </header>
  );
}

export default Header;
