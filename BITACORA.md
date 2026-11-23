# Bitácora de Copilot

## 3 de noviembre de 2026

- Se creó la estructura inicial del proyecto.
- Se añadió `COPILOT.md` con las instrucciones de diseño y desarrollo.
- Se incorporó una base documental para guiar el trabajo del agente de Copilot.

## 5 de noviembre de 2026

- Se realizó el boceto inicial de la landing page.
- Se agregaron componentes para inicio, navegación, proyectos, habilidades y contacto.
- Se creó el primer boceto completo con navegación entre secciones.
- Se añadieron estilos globales, temas visuales y páginas para proyectos,
  habilidades y contacto.
- Se incorporaron componentes reutilizables como navegación, tarjetas de proyecto
  y formulario de contacto.
- Se creó una integración inicial para obtener datos de GitHub.

## 8 de noviembre de 2026

- Se ajustó `COPILOT.md` y las instrucciones de desarrollo del proyecto.

## 19 de noviembre de 2026

- Se realizó una refactorización completa del proyecto según el diseño de Figma.
- Se migró la estructura anterior a Next.js con:
  - rutas y API en `app/`;
  - componentes y vistas en `src/app/`;
  - estilos globales en `src/index.css`.
- Se implementaron las rutas de inicio, sobre mí, habilidades, proyectos,
  contacto y página no encontrada.
- Se añadieron navegación global, pie de página, datos reutilizables y soporte
  bilingüe español-inglés.
- Se configuraron Next.js, Tailwind CSS, metadatos y recursos públicos.

## 22 de noviembre de 2026

### 1. Formulario de contacto

- Se reemplazó el envío simulado por una solicitud real a `POST /api/contact`.
- Se añadió validación para nombre, correo, asunto y mensaje.
- Se incorporó Nodemailer para enviar los mensajes por SMTP.

### 2. Configuración SMTP

- Se creó la API `app/api/contact/route.js`.
- Se documentaron las variables `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`,
  `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `SMTP_FROM_NAME` y `CONTACT_TO`.
- Se añadió protección para evitar exponer datos sensibles.

### 3. Documentación

- Se creó `README.md` con:
  - descripción general del proyecto;
  - tecnologías utilizadas;
  - instalación y ejecución;
  - configuración SMTP;
  - estructura y despliegue;
  - datos de personalización y autor.

### 4. Corrección responsive de “Sobre mí”

- Se corrigió la superposición móvil entre el `home console` y el bloque decorativo `01`.
- Se ajustó la altura del encabezado y del hero en celulares.
- Se redujo y reposicionó el número decorativo `01`.
- Se añadió control de capas y separación entre el hero y las secciones siguientes.

### 5. Dependencias y validación

- Se instaló el paquete `nodemailer`.
- Se ejecutó `npm run build`.
- La compilación de Next.js finalizó correctamente.
- Se verificó la generación de las rutas principales y `/api/contact`.

## Archivos principales modificados

- `app/api/contact/route.js`
- `src/app/views.jsx`
- `src/index.css`
- `package.json`
- `package-lock.json`
- `README.md`
