"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./language";
import { Icon } from "./ui";

const links = [
  ["Inicio", "/"],
  ["Sobre mí", "/sobre-mi"],
  ["Habilidades", "/habilidades"],
  ["Proyectos", "/proyectos"],
  ["Contacto", "/contacto"],
];

export function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        {t("Saltar al contenido")}
      </a>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <Link className="brand" href="/" aria-label="Carlos Leal Portfolio, inicio">
          <span className="brand-mark">&lt;CL/&gt;</span>
          <span className="brand-text">
            Carlos Leal<span>.</span>
          </span>
        </Link>
        <nav
          className={`nav-links ${open ? "nav-open" : ""}`}
          aria-label={t("Navegación principal")}
        >
          {links.map(([label, to], index) => (
            <Link
              key={to}
              href={to}
              className={
                pathname === to || (to !== "/" && pathname.startsWith(`${to}/`)) ? "active" : ""
              }
            >
              <span>0{index + 1}.</span>
              {t(label)}
            </Link>
          ))}
          <Link className="nav-resume" href="/contacto">
            {t("Hablemos")} <Icon name="arrow" size={16} />
          </Link>
          <button
            className="language-toggle"
            type="button"
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            <span className={language === "es" ? "language-active" : ""}>ES</span>
            <span>/</span>
            <span className={language === "en" ? "language-active" : ""}>EN</span>
          </button>
        </nav>
        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? t("Cerrar menú") : t("Abrir menú")}
        >
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </header>
      <main id="contenido">{children}</main>
      <footer>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">&lt;CL/&gt;</span>
          <span className="brand-text">
            Carlos Leal<span>.</span>
          </span>
        </Link>
        <p>{t("Diseñado y desarrollado con intención.")}</p>
        <p>© 2026 Carlos Leal Portfolio</p>
      </footer>
    </div>
  );
}
