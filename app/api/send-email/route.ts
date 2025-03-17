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

  let adminEmailSent = false;
  let customerEmailSent = false;

  // Send notification to admin
  try {
    console.log("Starting notification email to admin");
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
    console.log("Admin notification sent successfully");
    adminEmailSent = true;
  } catch (error) {
    console.error("Error sending admin notification:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error
            ? error.message
            : "Failed to send admin notification",
        step: "admin_notification",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Send confirmation to customer
  try {
    console.log("=== Starting Customer Email Process ===");
    console.log("Email Configuration:", {
      from: `"ALX Handyman" <${SMTP_SERVER_USERNAME}>`,
      to: email,
      host: SMTP_SERVER_HOST,
      port: SMTP_SERVER_PORT,
      secure: true,
      debug: DEBUG === "true",
    });

    const mailOptions = {
      from: `"ALX Handyman" <${SMTP_SERVER_USERNAME}>`,
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
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        Importance: "high",
      },
    };

    console.log("Attempting to send email with options:", mailOptions);

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully! Response:", {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected,
    });

    customerEmailSent = true;
  } catch (error) {
    console.error("=== Email Send Error ===");
    console.error("Error sending customer confirmation:", error);
    if (error instanceof Error) {
      console.error("Detailed error information:", {
        name: error.name,
        message: error.message,
        stack: error.stack,
        cause: error.cause,
      });
    }
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error
            ? error.message
            : "Failed to send customer confirmation",
        step: "customer_confirmation",
        adminEmailSent,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(
    JSON.stringify({
      message: "Emails sent successfully!",
      adminEmailSent,
      customerEmailSent,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
