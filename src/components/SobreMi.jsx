import { INFO, SKILLS } from "../data/info";

function SobreMi({ dark }) {
  return (
    <section style={{ padding: "0 1.5rem 2.5rem" }}>
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
          Sobre mí
        </h2>
        <div
          style={{
            flex: 1,
            height: 1,
            background: dark ? "#21262d" : "#e5e7eb",
          }}
        />
      </div>

      {/* Grid bio + stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 150px",
          gap: "2rem",
          alignItems: "start",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.95rem",
            lineHeight: 1.8,
            color: dark ? "#8b949e" : "#4b5563",
            fontFamily: "'Lora', serif",
          }}
        >
          {INFO.descripcion}
        </p>

        {/* Cards de stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { label: "Base", value: "IT & Análisis" },
            { label: "Foco", value: "Frontend" },
            { label: "Stack", value: "React · JS" },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                padding: "0.6rem 0.9rem",
                borderRadius: 10,
                background: dark ? "#161b22" : "#ffffff",
                border: `1px solid ${dark ? "#21262d" : "#e5e7eb"}`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: dark ? "#484f58" : "#9ca3af",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  margin: "0.15rem 0 0",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: dark ? "#f0f6fc" : "#111827",
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "1.6rem" }}
      >
        {SKILLS.map((s) => (
          <span
            key={s}
            style={{
              padding: "0.3rem 0.85rem",
              borderRadius: 999,
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              background: "rgba(16,185,129,.1)",
              color: "#10b981",
              border: "1px solid rgba(16,185,129,.25)",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SobreMi;
