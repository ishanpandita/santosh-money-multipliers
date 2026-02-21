import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        sender: {
          name: "Santosh Money Multiplier",
          email: "team.santoshmoneymultiplier@gmail.com", // must be verified in Brevo
        },
        to: [
          {
            email: "team.santoshmoneymultiplier@gmail.com",
            name: "Admin",
          },
        ],
        subject: "Enquiry Received",
        htmlContent: `
          <h2>New Enquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    });

    // Send confirmation email to customer
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        sender: {
          name: "Santosh Money Multiplier",
          email: "team.santoshmoneymultiplier@gmail.com",
        },
        to: [
          {
            email: email,
            name: name,
          },
        ],
        subject: "We will get back to you soon",
        htmlContent: `
          <p>Dear ${name},</p>
          <p>Thank you for contacting us. We have received your enquiry and will get back to you shortly.</p>
          <br/>
          <p>Regards,<br/>Santosh Money Multiplier</p>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
