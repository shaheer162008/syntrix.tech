import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nexiler.official@gmail.com", // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
      },
    });

    // Email to company (info@nexiler.tech)
    const companyMailOptions = {
      from: "no-reply@nexiler.tech",
      to: "info@nexiler.tech",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Sent from Nexiler.tech contact form</p>
        </div>
      `,
    };

    // Confirmation email to client
    const clientMailOptions = {
      from: "no-reply@nexiler.tech",
      to: email,
      subject: "Thank you for contacting Nexiler!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #000; margin-bottom: 10px;">Thank You for Reaching Out!</h1>
            <p style="color: #666; font-size: 16px;">We've received your message and will respond within 24 hours.</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 25px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">Your Submission Details:</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Your Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>

          <div style="background: #000; color: white; padding: 25px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: white;">What happens next?</h3>
            <ol style="padding-left: 20px;">
              <li style="margin: 10px 0;">We'll review your requirements carefully</li>
              <li style="margin: 10px 0;">Our team will contact you within 24 hours</li>
              <li style="margin: 10px 0;">We'll schedule a free consultation call</li>
              <li style="margin: 10px 0;">We'll provide the best solution for your business</li>
            </ol>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666;">Best regards,<br/><strong>The Nexiler Team</strong></p>
            <p style="color: #999; font-size: 12px;">info@nexiler.tech | +92 307 2853163</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
