"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./language";
import { Icon, PageIntro, projects, skills } from "./ui";

function HeroConsole() {
  const { t } = useLanguage();
  return (
    <div
      className="hero-console home-console"
      aria-label={t("Representación visual de un flujo de datos")}
    >
      <div className="console-top">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>portfolio.ts</span>
        <span className="console-status">
          <i /> ONLINE
        </span>
      </div>
      <div className="console-code">
        <div className="line-numbers">
          01
          <br />
          02
          <br />
          03
          <br />
          04
          <br />
          05
          <br />
          06
          <br />
          07
        </div>
        <pre>
          <span className="pink">const</span> profile = {"{\n"} role:{" "}
          <span className="gold">"Software Developer"</span>,{"\n"} focus: [
          <span className="gold">"data"</span>, <span className="gold">"backend"</span>],{"\n"}{" "}
          mindset: <span className="teal">"build · measure · learn"</span>
          {"\n"}
          {"}"};{"\n\n"}
          <span className="muted">// {t("Ready for the next challenge_")}</span>
        </pre>
      </div>
      <div className="console-flow">
        <div>
          <span className="node-icon">
            <Icon name="database" size={17} />
          </span>
          <b>DATA</b>
          <small>{t("discover")}</small>
        </div>
        <i className="flow-line" />
        <div>
          <span className="node-icon">
            <Icon name="code" size={17} />
          </span>
          <b>BUILD</b>
          <small>{t("iterate")}</small>
        </div>
        <i className="flow-line" />
        <div>
          <span className="node-icon gold-node">
            <Icon name="spark" size={17} />
          </span>
          <b>IMPACT</b>
          <small>{t("measure")}</small>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      <section className="hero page-home">
        <div className="hero-grid grid-lines" />
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> {t("DISPONIBLE PARA NUEVOS RETOS")}
            </p>
            <h1>
              {t("Construyo software.")}
              <br />
              {t("Transformo datos.")}
            </h1>
            <p className="hero-lead">
              {t(
                "Desarrollador de software & analista de datos enfocado en crear sistemas robustos, pipelines inteligentes y experiencias que convierten información en impacto.",
              )}
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/proyectos">
                {t("Explorar proyectos")} <Icon name="arrow" size={18} />
              </Link>
              <Link className="button button-secondary" href="/contacto">
                {t("Contactarme")}
              </Link>
            </div>

          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="home-summary">
        <div className="summary-card summary-about">
          <p className="section-kicker">01 — {t("SOBRE MÍ")}</p>
          <h2>
            {t("Ingeniería con propósito,")}
            <br />
            <em>{t("datos con contexto.")}</em>
          </h2>
          <p>
            {t(
              "Combino pensamiento analítico y ejecución técnica para crear soluciones que se entienden, se mantienen y producen resultados.",
            )}
          </p>
          <Link className="text-link" href="/sobre-mi">
            {t("Leer mi historia")} <Icon name="arrow" size={18} />
          </Link>
        </div>
        <div className="summary-card summary-skills">
          <p className="section-kicker light">02 — {t("HABILIDADES")}</p>
          <div className="summary-skill-list">
            {skills.slice(0, 3).map((skill, index) => (
              <Link href="/habilidades" key={skill.title}>
                <span>0{index + 1}</span>
                <Icon name={skill.icon} />
                <b>{t(skill.title)}</b>
                <Icon name="arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-projects">
        <div className="home-section-head">
          <div>
            <p className="section-kicker">03 — {t("SELECCIÓN")}</p>
            <h2>
              {t("Proyectos que convierten")}
              <br />
              <em>{t("complejidad en valor.")}</em>
            </h2>
          </div>
          <Link className="text-link" href="/proyectos">
            {t("Ver todos los proyectos")} <Icon name="arrow" size={18} />
          </Link>
        </div>
        <div className="home-project-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectTile key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="home-contact-banner">
        <div>
          <p className="section-kicker light">04 — {t("SIGUIENTE PASO")}</p>
          <h2>
            {t("¿Creamos algo")}
            <br />
            <em>{t("significativo?")}</em>
          </h2>
        </div>
        <Link className="button button-gold" href="/contacto">
          {t("Iniciar una conversación")} <Icon name="arrow" size={18} />
        </Link>
      </section>
    </>
  );
}

export function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro
        number="01"
        label={t("SOBRE MÍ")}
        title={t("Detrás del código hay")}
        accent={t("una forma de pensar.")}
        description={t(
          "Una carta de presentación sobre mi recorrido, mi manera de trabajar y lo que busco construir.",
        )}
      />
      <section className="about-page page-section">
        <article className="cover-letter">
          <div className="letter-meta">
            <span>{t("HOLA, SOY")}</span>
            <strong>Carlos Leal.</strong>
            <small>
              Software Developer
              <br />
              &amp; Data Analyst
            </small>
          </div>
          <div className="letter-body">
            <p className="letter-lead">
              {t(
                "Me entusiasma resolver problemas en ese punto donde la ingeniería de software se encuentra con los datos.",
              )}
            </p>
            <p>
              {t("Mi trabajo parte de una pregunta sencilla:")}{" "}
              <strong>
                {t("¿cómo podemos convertir la complejidad en una herramienta útil?")}
              </strong>{" "}
              {t(
                "Desde ahí, diseño soluciones que no solo funcionan, sino que también son claras, medibles y sostenibles.",
              )}
            </p>
            <p>
              {t(
                "He desarrollado APIs, automatizado pipelines y creado dashboards que facilitan decisiones. En cada proyecto me importa tanto la arquitectura como la experiencia de quien utilizará el resultado.",
              )}
            </p>
            <p>
              {t(
                "Busco colaborar con equipos que valoren la curiosidad, la comunicación honesta y el aprendizaje continuo. Me interesa construir tecnología que tenga un propósito concreto y un impacto verificable.",
              )}
            </p>
            <p className="letter-signature">
              {t("Gracias por llegar hasta aquí.")}
              <br />
              <em>— Carlos Leal</em>
            </p>
          </div>
        </article>
        <aside className="principles-panel">
          <p className="section-kicker light">{t("MI FORMA DE TRABAJAR")}</p>
          {[
            [
              "01",
              t("Entender antes de construir"),
              t("El contexto correcto evita resolver el problema equivocado."),
            ],
            [
              "02",
              t("Diseñar para evolucionar"),
              t("Código claro y sistemas preparados para el cambio."),
            ],
            [
              "03",
              t("Medir para aprender"),
              t("Los datos cierran el ciclo entre intención y resultado."),
            ],
          ].map(([number, title, text]) => (
            <div className="principle" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
          <Link className="button button-gold" href="/contacto">
            {t("Conversemos")} <Icon name="arrow" size={18} />
          </Link>
        </aside>
      </section>
      <section className="journey-strip">
        <div>
          <span>{t("AHORA")}</span>
          <b>{t("Abierto a oportunidades")}</b>
        </div>
        <div>
          <span>{t("ENFOQUE")}</span>
          <b>Backend · Data · Analytics</b>
        </div>
        <div>
          <span>{t("IDIOMAS")}</span>
          <b>{t("Español · Inglés")}</b>
        </div>
        <div>
          <span>{t("UBICACIÓN")}</span>
          <b>{t("Trabajo remoto")}</b>
        </div>
      </section>
    </>
  );
}

export function SkillsPage() {
  const { t } = useLanguage();
  const skillGroups = [
    {
      number: "01",
      icon: "database",
      title: t("Datos e Inteligencia"),
      description: t(
        "Desde la ingesta y transformación hasta el análisis que convierte información compleja en decisiones.",
      ),
      focus: t("Especialidad principal"),
      items: [skills[0], skills[1], skills[4]],
    },
    {
      number: "02",
      icon: "code",
      title: t("Desarrollo de Software"),
      description: t(
        "Servicios, APIs e interfaces que conectan la lógica de negocio con experiencias claras y funcionales.",
      ),
      focus: t("Construcción end-to-end"),
      items: [skills[2], skills[3]],
    },
    {
      number: "03",
      icon: "layers",
      title: t("Infraestructura y Despliegue"),
      description: t(
        "Herramientas y prácticas para que cada solución sea reproducible, observable y segura al llegar a producción.",
      ),
      focus: t("Operación confiable"),
      items: [skills[5]],
    },
  ];

  return (
    <>
      <PageIntro
        number="02"
        label={t("HABILIDADES")}
        title={t("Herramientas para llevar una idea")}
        accent={t("a la realidad.")}
        description={t(
          "Un catálogo de tecnologías y capacidades que utilizo para construir soluciones completas, confiables y medibles.",
        )}
      />
      <section className="skills-page page-section">

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.number}>
              <header className="skill-group-header">
                <div className="skill-group-identity">
                  <span className="skill-group-number">{group.number}</span>
                  <span className="skill-group-icon">
                    <Icon name={group.icon} size={27} />
                  </span>
                  <div>
                    <p>{group.focus}</p>
                    <h2>{group.title}</h2>
                  </div>
                </div>
                <p className="skill-group-description">{group.description}</p>
              </header>
              <div className={`skill-group-items items-${group.items.length}`}>
                {group.items.map((skill) => (
                  <section className="grouped-skill-card" key={skill.title}>
                    <div className="grouped-skill-top">
                      <span>
                        <Icon name={skill.icon} size={21} />
                      </span>
                      <small>{t(skill.group)}</small>
                    </div>
                    <h3>{t(skill.title)}</h3>
                    <p>{t(skill.text)}</p>
                    <div className="catalog-tags">
                      {skill.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="learning-banner">
        <Icon name="spark" size={32} />
        <div>
          <p className="section-kicker light">{t("SIEMPRE APRENDIENDO")}</p>
          <h2>
            {t("La mejor herramienta sigue siendo")}
            <br />
            <em>{t("hacer mejores preguntas.")}</em>
          </h2>
        </div>
        <Link className="button button-gold" href="/proyectos">
          {t("Verlo en práctica")} <Icon name="arrow" size={18} />
        </Link>
      </section>
    </>
  );
}

function ProjectTile({ project, index }) {
  const { t } = useLanguage();
  return (
    <article className="project-list-card">
      <div className="project-list-visual">
        {index !== undefined && <span className="project-index">0{index + 1}</span>}
        <span className="project-big-icon">
          <Icon name={project.icon} size={50} />
        </span>
        <div className="visual-data-lines">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="metric-chip">
          <b>{project.metric}</b>
          <span>{t(project.metricLabel)}</span>
        </div>
      </div>
      <div className="project-list-content">
        <p className="project-type">{project.type}</p>
        <h3>{t(project.title)}</h3>
        <p>{t(project.description)}</p>
        <div className="project-footer">
          <div className="tag-list dark-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t("Ver repositorio")} ${t(project.title)}`}
          >
            <Icon name="external" size={19} />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro
        number="03"
        label={t("PROYECTOS")}
        title={t("Soluciones para")}
        accent={t("problemas reales.")}
        description={t(
          "Una selección de mis repositorios públicos pineados en GitHub, con una vista previa de cada proyecto y sus tecnologías principales.",
        )}
      />
      <section className="projects-page page-section">
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectTile key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
      <section className="project-note">
        <span>&lt;/&gt;</span>
        <p>{t("¿Quieres conocer el proceso, la arquitectura o revisar el código?")}</p>
        <Link className="text-link" href="/contacto">
          {t("Solicitar más detalles")} <Icon name="arrow" size={18} />
        </Link>
      </section>
    </>
  );
}

export function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setSubmitted(false);
    setError("");
    setSending(true);

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "No se pudo enviar el mensaje.");
      }

      setSubmitted(true);
      form.reset();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "No se pudo enviar el mensaje.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageIntro
        number="04"
        label={t("CONTACTO")}
        title={t("El próximo gran proyecto puede")}
        accent={t("empezar con un mensaje.")}
        description={t(
          "¿Tienes una oportunidad, un reto técnico o una idea? Cuéntame el contexto y conversemos.",
        )}
      />
      <section className="contact-page page-section">
        <aside className="contact-details">
          <p className="section-kicker light">{t("CANALES DIRECTOS")}</p>
          <h2>
            {t("Hablemos de lo que")}
            <br />
            {t("podemos construir.")}
          </h2>
          <p>
            {t(
              "Normalmente respondo en uno o dos días laborables. Incluye todos los detalles que creas importantes.",
            )}
          </p>
          <a className="contact-method" href="mailto:carlos.leal.lcc@outlook.com">
            <Icon name="mail" />
            <span>
              <small>EMAIL</small>
              <b>carlos.leal.lcc@outlook.com</b>
            </span>
          </a>
          <div className="contact-method">
            <Icon name="check" />
            <span>
              <small>{t("DISPONIBILIDAD")}</small>
              <b>{t("Proyectos & oportunidades")}</b>
            </span>
          </div>
          <div className="social-links">
            <a href="https://github.com/SirCrLs" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" />
            </a>
            <a href="https://linkedin.com/in/carlos-leal-delgado" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
          </div>
        </aside>
        <form className="contact-form contact-page-form" onSubmit={submit}>
          <div className="form-heading">
            <span>01</span>
            <div>
              <b>{t("Cuéntame sobre ti")}</b>
              <small>{t("Todos los campos son necesarios")}</small>
            </div>
          </div>
          <div className="field-row">
            <label>
              {t("Nombre")}
              <input name="name" required autoComplete="name" placeholder={t("Tu nombre")} />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="tu@email.com"
              />
            </label>
          </div>
          <label>
            {t("Asunto")}
            <input
              name="subject"
              required
              placeholder={t("Proyecto, oportunidad, colaboración...")}
            />
          </label>
          <label>
            {t("Mensaje")}
            <textarea
              name="message"
              required
              rows={6}
              placeholder={t("Cuéntame un poco sobre tu idea, necesidad o propuesta...")}
            />
          </label>
          <button className="button button-gold" type="submit" disabled={sending}>
            {sending ? t("Enviando...") : t("Enviar mensaje")} <Icon name="arrow" size={18} />
          </button>
          {submitted && (
            <p className="form-success" role="status">
              <Icon name="check" size={17} /> {t("Mensaje enviado. Te responderé pronto.")}
            </p>
          )}
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
        </form>
      </section>
    </>
  );
}

export function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <section className="not-found">
      <span>404</span>
      <p className="section-kicker">{t("RUTA NO ENCONTRADA")}</p>
      <h1>
        {t("Esta página no está")}
        <br />
        <em>{t("en el pipeline.")}</em>
      </h1>
      <Link className="button button-primary" href="/">
        {t("Volver al inicio")} <Icon name="arrow" size={18} />
      </Link>
    </section>
  );
}
