import { Router } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Namn krävs"),
  email: z.string().email("Ogiltig e-postadress"),
  phone: z.string().optional(),
  message: z.string().min(10, "Meddelandet måste vara minst 10 tecken"),
});

const router = Router();

router.post("/", async (req, res) => {
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ errors: result.error.flatten().fieldErrors });
    return;
  }

  const { name, email, phone, message } = result.data;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Kontaktförfrågan från ${name}`,
      text: `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone || "Ej angivet"}\n\nMeddelande:\n${message}`,
      html: `
        <h2>Ny kontaktförfrågan</h2>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Ej angivet"}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    res.json({ success: true, message: "Meddelandet har skickats!" });
  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({ success: false, message: "Kunde inte skicka meddelandet. Försök igen senare." });
  }
});

export default router;
