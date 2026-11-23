# Portafolio de Carlos Leal

Portafolio personal desarrollado con Next.js y React. Presenta el perfil profesional,
habilidades, proyectos y canales de contacto de Carlos Leal, con soporte para español
e inglés y un formulario que envía mensajes por correo electrónico.

## Funcionalidades

- Inicio con presentación profesional y acceso a las secciones principales.
- Página "Sobre mí" con trayectoria, enfoque y forma de trabajo.
- Página "Habilidades" con tecnologías, dominios y herramientas.
- Página "Proyectos" con selección de trabajos y enlaces a repositorios.
- Página "Contacto" con datos directos y formulario de envío.
- Cambio de idioma entre español e inglés.
- API interna para procesar y enviar mensajes del formulario.
- Diseño adaptable para escritorio, tablet y dispositivos móviles.
- Ruta personalizada para páginas no encontradas.

## Tecnologías

- Next.js 15
- React 19
- JavaScript
- Tailwind CSS 4
- Nodemailer
- CSS personalizado

## Requisitos

- Node.js 18 o superior recomendado.
- npm incluido con Node.js.
- Una cuenta SMTP o proveedor de correo compatible.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/SirCrLs/portfolio.git
   cd portfolio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env.local` en la raíz del proyecto:

   ```env
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=tu_usuario_smtp
   SMTP_PASS=tu_contraseña_o_clave_de_aplicacion
   SMTP_FROM=tu_usuario_smtp
   SMTP_FROM_NAME=Portafolio Carlos
   CONTACT_TO=carlos.leal.lcc@outlook.com
   ```

4. Inicia el entorno de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre `http://localhost:3000`.

## Variables de correo

| Variable | Descripción |
| --- | --- |
| `SMTP_HOST` | Servidor SMTP del proveedor de correo. |
| `SMTP_PORT` | Puerto SMTP. Normalmente `587` para TLS o `465` para SSL. |
| `SMTP_SECURE` | Usa `true` para SSL/puerto `465`; usa `false` para STARTTLS/puerto `587`. |
| `SMTP_USER` | Usuario o cuenta utilizada para autenticarse. |
| `SMTP_PASS` | Contraseña SMTP o clave de aplicación. |
| `SMTP_FROM` | Dirección que aparece como remitente. Es opcional si el proveedor permite el valor predeterminado. |
| `SMTP_FROM_NAME` | Nombre visible del remitente. |
| `CONTACT_TO` | Destinatario del formulario. Por defecto es `carlos.leal.lcc@outlook.com`. |

No publiques contraseñas ni claves de aplicación en el repositorio. El archivo
`.env.local` está excluido por `.gitignore`.

### Ejemplo con Gmail

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu_correo@gmail.com
SMTP_PASS=tu_clave_de_aplicacion
SMTP_FROM=tu_correo@gmail.com
SMTP_FROM_NAME=Portafolio Carlos
CONTACT_TO=carlos.leal.lcc@outlook.com
```

Gmail requiere una clave de aplicación y no se recomienda usar la contraseña normal
de la cuenta.

## Formularios de contacto

El formulario se encuentra en `/contacto`. Antes de enviarlo, solicita:

- Nombre
- Correo electrónico
- Asunto
- Mensaje

El cliente envía los datos a `POST /api/contact`. La ruta valida los campos, evita
valores vacíos y mal formados, genera un correo con versión de texto y HTML, y usa
el correo que escribió el visitante como `Reply-To`.

Si falta alguna variable SMTP o ocurre un error de entrega, la API devuelve un
mensaje de error y el formulario informa al usuario sin exponer datos sensibles.

## Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilación de producción
npm run start    # Ejecutar la compilación de producción
npm run format   # Formatear archivos con oxfmt
```

## Estructura del proyecto

```text
app/
  api/contact/route.js  # Endpoint de envío del formulario
  contacto/page.jsx     # Ruta de contacto
  habilidades/page.jsx  # Ruta de habilidades
  proyectos/page.jsx    # Ruta de proyectos
  sobre-mi/page.jsx     # Ruta sobre mí
  layout.jsx            # Diseño raíz y metadatos
  page.jsx              # Página de inicio
public/
  favicon.png           # Icono del sitio
src/
  app/
    language.jsx        # Contexto y traducciones español-inglés
    site-layout.jsx    # Navegación y estructura global
    ui.jsx              # Componentes y datos reutilizables
    views.jsx           # Vistas principales de las páginas
  index.css             # Estilos globales
```

## Despliegue

Para desplegar en producción:

```bash
npm run build
npm run start
```

En plataformas como Vercel, agrega las variables SMTP descritas anteriormente en
la configuración de entorno del proyecto. `app/api/contact/route.js` se ejecuta
como una ruta dinámica del servidor y debe contar con acceso a esas variables.

## Personalización

- Las páginas se definen en `src/app/views.jsx`.
- Las traducciones se mantienen en `src/app/language.jsx`.
- La navegación y el pie global están en `src/app/site-layout.jsx`.
- Los componentes, proyectos y habilidades reutilizables están en `src/app/ui.jsx`.
- Los estilos globales están en `src/index.css`.
- Los metadatos generales se configuran en `app/layout.jsx`.

## Autor

Carlos Leal  
GitHub: https://github.com/SirCrLs  
LinkedIn: https://linkedin.com/in/carlos-leal-delgado  
Correo: carlos.leal.lcc@outlook.com

## Bitácora de Copilot

Consulta [BITACORA.md](BITACORA.md) para ver un resumen de los cambios realizados
durante el desarrollo hechos por COPILOT.
