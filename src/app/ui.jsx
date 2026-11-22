export function Icon({ name, size = 20 }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    braces: (
      <>
        <path d="M8 3H7a2 2 0 0 0-2 2v5l-2 2 2 2v5a2 2 0 0 0 2 2h1" />
        <path d="M16 3h1a2 2 0 0 1 2 2v5l2 2-2 2v5a2 2 0 0 1-2 2h-1" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M22 19H2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    code: (
      <>
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    external: (
      <>
        <path d="M15 4h5v5" />
        <path d="m10 14 10-10" />
        <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      </>
    ),
    github: (
      <path d="M15 22v-3.9c.04-1-.35-1.96-1-2.6 3.28-.36 6.72-1.61 6.72-7.25A5.67 5.67 0 0 0 19.22 4.3 5.3 5.3 0 0 0 19.08.4S17.9.02 15 1.9a13.38 13.38 0 0 0-7 0C5.1.02 3.92.4 3.92.4a5.3 5.3 0 0 0-.14 3.9 5.67 5.67 0 0 0-1.5 3.95c0 5.63 3.44 6.88 6.72 7.25-.64.63-1.03 1.58-1 2.58V22" />
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    server: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3Z" />
        <path d="m5 15-.7 2.3L2 18l2.3.7L5 21l.7-2.3L8 18l-2.3-.7L5 15Z" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

export function PageIntro({ number, label, title, accent, description }) {
  return (
    <header className="page-intro">
      <div className="page-intro-grid" />
      <div className="page-intro-inner">
        <p className="section-kicker">
          {number} — {label}
        </p>
        <h1>
          {title}
          <br />
          <em>{accent}</em>
        </h1>
        <p className="page-intro-lead">{description}</p>
      </div>
      <span className="page-number">{number}</span>
    </header>
  );
}

export const skills = [
  {
    icon: "database",
    group: "Data Engineering",
    title: "Python & SQL",
    text: "Procesamiento, automatización, análisis y modelado eficiente de datos.",
    tags: ["Python", "Pandas", "SQL", "PySpark"],
  },
  {
    icon: "layers",
    group: "Orquestación",
    title: "Pipelines ETL",
    text: "Flujos observables, confiables y preparados para crecer con el producto.",
    tags: ["Scala", "dbt", "Kafka", "ETL"],
  },
  {
    icon: "server",
    group: "Backend",
    title: "APIs & Microservicios",
    text: "Servicios mantenibles con contratos claros, pruebas y documentación.",
    tags: ["FastAPI", "Node.js", "Http4s", "Django"],
  },
  {
    icon: "code",
    group: "Frontend",
    title: "Interfaces Web",
    text: "Experiencias funcionales y accesibles conectadas a datos reales.",
    tags: ["React", "TypeScript", "Vite", "Next.js"],
  },
  {
    icon: "chart",
    group: "Analytics",
    title: "BI & Visualización",
    text: "Dashboards que convierten señales complejas en decisiones concretas.",
    tags: ["R", "Power BI", "Rocker/Shiny", "Excel"],
  },
  {
    icon: "braces",
    group: "DevOps",
    title: "Cloud & Entrega",
    text: "Entornos reproducibles, integración continua y despliegues seguros.",
    tags: ["Docker", "AWS", "Git", "Shell scripts"],
  },
];

export const projects = [
  {
    type: "DATA SCIENCE · DATA ENGINEERING",
    title: "Steam-Insights",
    description:
      "Plataforma de Data Science de extremo a extremo que recopila, almacena, analiza y visualiza datos de Steam mediante la Steam Web API.",
    tags: ["R", "Scala", "Python", "Machine Learning"],
    metric: "R",
    metricLabel: "lenguaje",
    icon: "chart",
    url: "https://github.com/SirCrLs/Steam-Insights",
  },
  {
    type: "REACT NATIVE · MOBILE",
    title: "SPunktify",
    description: "Reproductor de música construido con React Native.",
    tags: ["JavaScript", "React Native"],
    metric: "JS",
    metricLabel: "lenguaje",
    icon: "code",
    url: "https://github.com/SirCrLs/SPunktify",
  },
  {
    type: "MACHINE LEARNING · PYTHON",
    title: "IA-PrediccionFutbolistica",
    description: "Proyecto de machine learning para predecir resultados de partidos de fútbol.",
    tags: ["Python", "Machine Learning"],
    metric: "PY",
    metricLabel: "lenguaje",
    icon: "spark",
    url: "https://github.com/SirCrLs/IA-PrediccionFutbolistica",
  },
];
