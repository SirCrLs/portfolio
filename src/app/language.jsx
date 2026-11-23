"use client";

import { createContext, useContext, useMemo, useState } from "react";

const translations = {
  "Saltar al contenido": "Skip to content",
  "Navegación principal": "Main navigation",
  Inicio: "Home",
  "Sobre mí": "About me",
  Habilidades: "Skills",
  Proyectos: "Projects",
  Contacto: "Contact",
  Hablemos: "Let's talk",
  "Cerrar menú": "Close menu",
  "Abrir menú": "Open menu",
  "Diseñado y desarrollado con intención.": "Designed and developed with intention.",
  "DISPONIBLE PARA NUEVOS RETOS": "AVAILABLE FOR NEW CHALLENGES",
  "Construyo software.": "I build software.",
  "Transformo datos.": "I transform data.",
  "Desarrollador de software & analista de datos enfocado en crear sistemas robustos, pipelines inteligentes y experiencias que convierten información en impacto.":
    "Software developer & data analyst focused on creating robust systems, intelligent pipelines, and experiences that turn information into impact.",
  "Explorar proyectos": "Explore projects",
  Contactarme: "Contact me",
  Proyectos: "Projects",
  completados: "completed",
  "Años creando": "Years creating",
  soluciones: "solutions",
  "Curiosidad técnica": "Technical curiosity",
  "SOBRE MÍ": "ABOUT ME",
  "Ingeniería con propósito,": "Engineering with purpose,",
  "datos con contexto.": "data with context.",
  "Combino pensamiento analítico y ejecución técnica para crear soluciones que se entienden, se mantienen y producen resultados.":
    "I combine analytical thinking and technical execution to create solutions that are understandable, maintainable, and impactful.",
  "Leer mi historia": "Read my story",
  HABILIDADES: "SKILLS",
  SELECCIÓN: "SELECTED WORK",
  "Proyectos que convierten": "Projects that turn",
  "complejidad en valor.": "complexity into value.",
  "Ver todos los proyectos": "See all projects",
  "SIGUIENTE PASO": "NEXT STEP",
  "¿Creamos algo": "Shall we create something",
  "significativo?": "meaningful?",
  "Iniciar una conversación": "Start a conversation",
  "Detrás del código hay": "Behind the code there is",
  "una forma de pensar.": "a way of thinking.",
  "Una carta de presentación sobre mi recorrido, mi manera de trabajar y lo que busco construir.":
    "An introduction to my journey, my way of working, and what I want to build.",
  "HOLA, SOY": "HELLO, I'M",
  "Me entusiasma resolver problemas en ese punto donde la ingeniería de software se encuentra con los datos.":
    "I enjoy solving problems where software engineering meets data.",
  "Mi trabajo parte de una pregunta sencilla:": "My work starts with a simple question:",
  "Desde ahí, diseño soluciones que no solo funcionan, sino que también son claras, medibles y sostenibles.":
    "From there, I design solutions that not only work, but are also clear, measurable, and sustainable.",
  "He desarrollado APIs, automatizado pipelines y creado dashboards que facilitan decisiones. En cada proyecto me importa tanto la arquitectura como la experiencia de quien utilizará el resultado.":
    "I have developed APIs, automated pipelines, and created dashboards that enable better decisions. In every project, I care about both the architecture and the experience of the person using the result.",
  "Busco colaborar con equipos que valoren la curiosidad, la comunicación honesta y el aprendizaje continuo. Me interesa construir tecnología que tenga un propósito concreto y un impacto verificable.":
    "I seek to collaborate with teams that value curiosity, honest communication, and continuous learning. I want to build technology with a clear purpose and measurable impact.",
  "¿cómo podemos convertir la complejidad en una herramienta útil?":
    "how can we turn complexity into a useful tool?",
  "Gracias por llegar hasta aquí.": "Thanks for making it this far.",
  "MI FORMA DE TRABAJAR": "HOW I WORK",
  "Entender antes de construir": "Understand before building",
  "El contexto correcto evita resolver el problema equivocado.":
    "The right context prevents solving the wrong problem.",
  "Diseñar para evolucionar": "Design to evolve",
  "Código claro y sistemas preparados para el cambio.": "Clear code and systems ready for change.",
  "Medir para aprender": "Measure to learn",
  "Los datos cierran el ciclo entre intención y resultado.":
    "Data closes the loop between intention and outcome.",
  Conversemos: "Let's talk",
  AHORA: "NOW",
  "Abierto a oportunidades": "Open to opportunities",
  ENFOQUE: "FOCUS",
  "Trabajo remoto": "Remote work",
  "Datos e Inteligencia": "Data and Intelligence",
  "Especialidad principal": "Main specialty",
  "Desarrollo de Software": "Software Development",
  "Construcción end-to-end": "End-to-end delivery",
  "Infraestructura y Despliegue": "Infrastructure and Deploy",
  "Operación confiable": "Reliable operations",
  "Herramientas para llevar una idea": "Tools to take an idea",
  "de datos a producto.": "from data to product.",
  "Mi stack no es una colección aislada de herramientas. Está organizado alrededor de las tres etapas que hacen que un producto técnico funcione de principio a fin.":
    "My stack is not an isolated collection of tools. It is organized around the three stages that make a technical product work from start to finish.",
  "SIEMPRE APRENDIENDO": "ALWAYS LEARNING",
  "La mejor herramienta sigue siendo": "The best tool is still",
  "hacer mejores preguntas.": "asking better questions.",
  "Verlo en práctica": "See it in practice",
  "problemas reales.": "real problems.",
  "CANALES DIRECTOS": "DIRECT CHANNELS",
  "Hablemos de lo que": "Let's talk about what",
  "podemos construir.": "we can build.",
  "Normalmente respondo en uno o dos días laborables. Incluye todos los detalles que creas importantes.":
    "I usually respond within one or two business days. Include any details you consider important.",
  DISPONIBILIDAD: "AVAILABILITY",
  "Proyectos & oportunidades": "Projects & opportunities",
  Orquestación: "Orchestration",
  "Pipelines ETL": "ETL Pipelines",
  "Flujos observables, confiables y preparados para crecer con el producto.":
    "Observable, reliable flows built to grow with the product.",
  "APIs & Microservicios": "APIs & Microservices",
  "Servicios mantenibles con contratos claros, pruebas y documentación.":
    "Maintainable services with clear contracts, tests, and documentation.",
  "Interfaces Web": "Web Interfaces",
  "Experiencias funcionales y accesibles conectadas a datos reales.":
    "Functional, accessible experiences connected to real data.",
  "BI & Visualización": "BI & Visualization",
  "Dashboards que convierten señales complejas en decisiones concretas.":
    "Dashboards that turn complex signals into concrete decisions.",
  "Cloud & Entrega": "Cloud & Delivery",
  "Entornos reproducibles, integración continua y despliegues seguros.":
    "Reproducible environments, continuous integration, and safe deployments.",
  "Python & SQL": "Python & SQL",
  "Procesamiento, automatización, análisis y modelado eficiente de datos.":
    "Efficient data processing, automation, analysis, and modeling.",
  "Atlas Data Pipeline": "Atlas Data Pipeline",
  "Pipeline ETL distribuido que procesa más de 2M de registros diarios con validación automática, alertas y monitoreo en tiempo real.":
    "Distributed ETL pipeline processing more than 2M records daily with automatic validation, alerts, and real-time monitoring.",
  "Nexus API Platform": "Nexus API Platform",
  "Ecosistema de microservicios de alto rendimiento para centralizar autenticación, inventario y procesamiento de órdenes.":
    "High-performance microservices ecosystem for centralized authentication, inventory, and order processing.",
  "Pulse Analytics": "Pulse Analytics",
  "Dashboard ejecutivo para visualizar indicadores comerciales y detectar tendencias con datos actualizados cada hora.":
    "Executive dashboard to visualize business indicators and identify trends with hourly updates.",
  "Signal Monitor": "Signal Monitor",
  "Plataforma web de observabilidad que unifica métricas y eventos críticos para reducir los tiempos de diagnóstico.":
    "Web observability platform that unifies metrics and critical events to reduce diagnosis time.",
  "data quality": "data quality",
  "avg. latency": "avg. latency",
  "faster insights": "faster insights",
  "resolution time": "resolution time",
  "Enviar mensaje": "Send message",
  "Mensaje preparado. Te responderé pronto.": "Message ready. I will get back to you soon.",
  "Representación visual de un flujo de datos": "Visual representation of a data flow",
  "Ready for the next challenge_": "Ready for the next challenge_",
  discover: "discover",
  iterate: "iterate",
  measure: "measure",
  Curiosidad: "Curiosity",
  técnica: "technical",
  "Español · Inglés": "Spanish · English",
  "Desde la ingesta y transformación hasta el análisis que convierte información compleja en decisiones.":
    "From ingestion and transformation to analysis that turns complex information into decisions.",
  "Servicios, APIs e interfaces que conectan la lógica de negocio con experiencias claras y funcionales.":
    "Services, APIs, and interfaces connecting business logic with clear, functional experiences.",
  "Herramientas y prácticas para que cada solución sea reproducible, observable y segura al llegar a producción.":
    "Tools and practices that make every solution reproducible, observable, and safe in production.",
  "Un catálogo de tecnologías y capacidades que utilizo para construir soluciones completas, confiables y medibles.":
    "A catalog of technologies and capabilities I use to build complete, reliable, measurable solutions.",
  DOMINIOS: "DOMAINS",
  CONECTADOS: "CONNECTED",
  "Consultar por": "Ask about",
  "Ver repositorio": "View repository",
  lenguaje: "language",
  "Reproductor de música construido con React Native.": "Music player built on React Native.",
  "Plataforma de Data Science de extremo a extremo que recopila, almacena, analiza y visualiza datos de Steam mediante la Steam Web API.":
    "An end-to-end Data Science platform that collects, stores, analyzes, and visualizes Steam data using the Steam Web API.",
  "Proyecto de machine learning para predecir resultados de partidos de fútbol.":
    "A machine learning project for football match prediction.",
  PROYECTOS: "PROJECTS",
  "Soluciones para": "Solutions built for",
  "Una selección de proyectos de ingeniería, backend y analítica, con una vista previa de su enfoque y resultados.":
    "A selection of engineering, backend, and analytics projects, with a preview of their approach and results.",
  "Una selección de mis repositorios públicos pineados en GitHub, con una vista previa de cada proyecto y sus tecnologías principales.":
    "A selection of my pinned public GitHub repositories, with a preview of each project and its main technologies.",
  "Categorías de proyectos": "Project categories",
  "Aplicación móvil de reproducción musical desarrollada con React Native y JavaScript para explorar y escuchar pistas musicales desde el teléfono.":
    "Mobile music player application built with React Native and JavaScript to browse and listen to tracks on mobile devices.",
  "Pipeline y modelos de machine learning en Python orientados al análisis de datos deportivos y la estimación de resultados en partidos de fútbol.":
    "Python machine learning pipeline and models designed for sports data analysis and football match outcome prediction.",
  Todos: "All",
  "¿Quieres conocer el proceso, la arquitectura o revisar el código?":
    "Want to learn about the process, architecture, or code?",
  "Solicitar más detalles": "Request more details",
  CONTACTO: "CONTACT",
  "El próximo gran proyecto puede": "The next great project can",
  "empezar con un mensaje.": "start with a message.",
  "¿Tienes una oportunidad, un reto técnico o una idea? Cuéntame el contexto y conversemos.":
    "Do you have an opportunity, a technical challenge, or an idea? Tell me the context and let's talk.",
  EMAIL: "EMAIL",
  "Cuéntame sobre ti": "Tell me about yourself",
  "Todos los campos son necesarios": "All fields are required",
  Nombre: "Name",
  "Tu nombre": "Your name",
  Asunto: "Subject",
  "Proyecto, oportunidad, colaboración...": "Project, opportunity, collaboration...",
  Mensaje: "Message",
  "Cuéntame un poco sobre tu idea, necesidad o propuesta...":
    "Tell me a little about your idea, need, or proposal...",
  "RUTA NO ENCONTRADA": "ROUTE NOT FOUND",
  "Esta página no está": "This page is not",
  "en el pipeline.": "in the pipeline.",
  "Volver al inicio": "Back home",
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (text) => (language === "en" ? translations[text] || text : text),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
