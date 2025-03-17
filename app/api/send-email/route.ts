import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message, phone } = await request.json();

  if (!name || !email) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
  const SMTP_SERVER_PORT = process.env.SMTP_SERVER_PORT;
  const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
  const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
  const DEBUG = process.env.DEBUG;

  const transporter = nodemailer.createTransport({
    host: SMTP_SERVER_HOST,
    port: Number(SMTP_SERVER_PORT),
    secure: true,
    auth: {
      user: SMTP_SERVER_USERNAME,
      pass: SMTP_SERVER_PASSWORD,
    },
    debug: DEBUG === "true",
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2",
    },
  });

  try {
    console.log("Starting email send attempt");
    await transporter.sendMail({
      from: SMTP_SERVER_USERNAME,
      to: SMTP_SERVER_USERNAME,
      subject: `[APP] Got new message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    await transporter.sendMail({
      from: SMTP_SERVER_USERNAME,
      to: email,
      subject: `Thank you for contacting alxhandyman.com`,
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to me. I have received your message and will process it shortly.</p>
        <p>I appreciate your patience and look forward to assisting you.</p>
        <p>Kind regards,<br>
          Email: <a href="mailto:service@alxhandyman.com">service@alxhandyman.com</a><br>
          Website: <a href="https://www.alxhandyman.com" target="_blank">www.alxhandyman.com</a>
        </p>
      `,
    });

    console.log("Email sent successfully");
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
