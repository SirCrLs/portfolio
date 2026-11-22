import nodemailer from "nodemailer";

const recipient = "carlos.leal.lcc@outlook.com";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Ingresa un correo electrónico válido." },
        { status: 400 },
      );
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error("Missing SMTP environment variables.");
      return Response.json(
        { error: "El correo no está configurado en el servidor." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");

    const senderName = process.env.SMTP_FROM_NAME || "Portafolio Carlos";
    const senderEmail = process.env.SMTP_FROM || "guerocarlos002@gmail.com";

    await transporter.sendMail({
      from: `"${senderName}" <${senderEmail}>`,
      to: process.env.CONTACT_TO || recipient,
      replyTo: email,
      subject: `Contacto web: ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\n\nMensaje:\n${message}`,
      html: `
        <h2>Nuevo mensaje desde el portafolio</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Asunto:</strong> ${safeSubject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return Response.json(
      { error: "No se pudo enviar el mensaje. Intenta nuevamente." },
      { status: 500 },
    );
  }
}
