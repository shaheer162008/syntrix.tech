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
        <div style="max-width: 600px; margin: 0 auto; background-color: #1B1B1B; color: #ffffff; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://www.nexiler.tech/nexiler.png" alt="Nexiler Logo" style="max-width: 200px; height: auto; margin: 0 auto;" />
            <p style="color: #999999; font-size: 14px; margin-top: 10px;">New Contact Form Submission</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 12px; border: 1px solid rgba(168,85,247,0.2); margin: 20px 0;">
            <p style="color: #999999; margin-bottom: 5px;"><strong style="color: #a855f7;">Name:</strong> ${firstName} ${lastName}</p>
            <p style="color: #999999; margin-bottom: 5px;"><strong style="color: #a855f7;">Email:</strong> ${email}</p>
            <p style="color: #999999; margin-bottom: 5px;"><strong style="color: #a855f7;">Phone:</strong> ${phone || "Not provided"}</p>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
              <p style="color: #999999; margin-bottom: 10px;"><strong style="color: #a855f7;">Message:</strong></p>
              <p style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; color: #cccccc; line-height: 1.6;">${message}</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="color: #666666; font-size: 12px;">Sent from Nexiler.tech contact form</p>
          </div>
        </div>
      `,
    };

    // Confirmation email to client
    const clientMailOptions = {
      from: "no-reply@nexiler.tech",
      to: email,
      subject: "Thank you for contacting Nexiler!",
      html: `
        <div style="max-width: 600px; margin: 0 auto; background-color: #1B1B1B; color: #ffffff; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://www.nexiler.tech/nexiler.png" alt="Nexiler Logo" style="max-width: 220px; height: auto; margin: 0 auto;" />
            <p style="color: #999999; font-size: 16px; margin-top: 10px;">Intelligent Automation & Premium Web Development</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 12px; border: 1px solid rgba(168,85,247,0.2); margin: 20px 0;">
            <h2 style="color: #ffffff; margin-top: 0; font-size: 22px;">Thank You for Reaching Out!</h2>
            <p style="color: #cccccc; font-size: 15px; line-height: 1.6;">We have received your message and our team of experts is currently reviewing your requirements. We will respond within 24 hours.</p>
            
            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
              <p style="color: #999999; margin-bottom: 5px;"><strong style="color: #a855f7;">Your Submission:</strong></p>
              <p style="color: #ffffff; margin: 5px 0;">Name: ${firstName} ${lastName}</p>
              <p style="color: #ffffff; margin: 5px 0;">Email: ${email}</p>
              <p style="color: #ffffff; margin: 5px 0;">Phone: ${phone || "Not provided"}</p>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0) 100%); padding: 30px; border-radius: 12px; border-left: 4px solid #a855f7; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #a855f7; font-size: 18px;">What happens next?</h3>
            <ul style="padding-left: 20px; color: #cccccc; line-height: 1.8; margin: 10px 0;">
              <li style="margin: 8px 0;">Detailed review of your business needs</li>
              <li style="margin: 8px 0;">A direct response from our project managers</li>
              <li style="margin: 8px 0;">Scheduling a completely free consultation call</li>
              <li style="margin: 8px 0;">Proposing an AI-driven, highly optimized solution</li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="color: #ffffff; font-size: 16px; margin-bottom: 5px;">Best regards,</p>
            <p style="color: #a855f7; font-weight: bold; font-size: 18px; margin-top: 0;">The Nexiler Team</p>
            <p style="color: #999999; font-size: 12px; margin-top: 15px;">info@nexiler.tech | +92 307 2853163</p>
            <p style="color: #666666; font-size: 11px;">&copy; 2024 Nexiler. All rights reserved.</p>
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
