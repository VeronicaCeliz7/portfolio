import { useState } from "react";
import { PROYECTOS } from "../data/proyectos";
import Proyecto from "./Proyecto";

function ListaProyectos({ dark }) {
  const [filtro, setFiltro] = useState(null);

  // Obtener todas las tecnologías únicas
  const todasTechs = [...new Set(PROYECTOS.flatMap((p) => p.tecnologias))];

  // Filtrar proyectos según tecnología seleccionada
  const filtrados = filtro
    ? PROYECTOS.filter((p) => p.tecnologias.includes(filtro))
    : PROYECTOS;

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
          Proyectos
        </h2>
        <div
          style={{
            flex: 1,
            height: 1,
            background: dark ? "#21262d" : "#e5e7eb",
          }}
        />
      </div>

      {/* Botones de filtro por tecnología */}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}
      >
        <button
          onClick={() => setFiltro(null)}
          style={estiloBotonFiltro(filtro === null, dark)}
        >
          todos
        </button>
        {todasTechs.map((t) => (
          <button
            key={t}
            onClick={() => setFiltro(filtro === t ? null : t)}
            style={estiloBotonFiltro(filtro === t, dark)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
          gap: "1.1rem",
        }}
      >
        {filtrados.map((proyecto) => (
          <Proyecto key={proyecto.id} {...proyecto} dark={dark} />
        ))}
      </div>
    </section>
  );
}

// Estilo de los botones de filtro
function estiloBotonFiltro(activo, dark) {
  return {
    padding: "0.28rem 0.75rem",
    borderRadius: 7,
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.73rem",
    cursor: "pointer",
    border: `1px solid ${activo ? "#10b981" : dark ? "#21262d" : "#e5e7eb"}`,
    background: activo ? "#10b981" : "transparent",
    color: activo ? "#fff" : dark ? "#484f58" : "#9ca3af",
    transition: "all 0.15s",
  };
}

export default ListaProyectos;
