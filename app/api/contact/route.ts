import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Get SMTP credentials from environment variables with fallbacks
    const smtpPassword = process.env.SMTP_APP_PASSWORD || ""
    const recipientEmail = process.env.RECIPIENT_EMAIL || ""
    const senderEmail = process.env.SENDER_EMAIL || ""

    console.log("Environment check:", {
      hasSmtpPassword: !!process.env.SMTP_APP_PASSWORD,
      hasRecipientEmail: !!process.env.RECIPIENT_EMAIL,
      hasSenderEmail: !!process.env.SENDER_EMAIL,
    })

    if (!smtpPassword) {
      console.error("SMTP_APP_PASSWORD is not available")
      return NextResponse.json(
        {
          error:
            "Email service is temporarily unavailable. Please try again later or contact directly at chitrangana.singha@gmail.com",
        },
        { status: 503 },
      )
    }

    // Create transporter with better error handling
    let transporter
    try {
      transporter = nodemailer.createTransporter({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use TLS
        auth: {
          user: senderEmail,
          pass: smtpPassword,
        },
        // Add timeout and connection options
        connectionTimeout: 10000, // 10 seconds
        greetingTimeout: 5000, // 5 seconds
        socketTimeout: 10000, // 10 seconds
      })
    } catch (error) {
      console.error("Failed to create transporter:", error)
      return NextResponse.json(
        {
          error: "Email service configuration error. Please contact directly at chitrangana.singha@gmail.com",
        },
        { status: 500 },
      )
    }

    // Verify transporter configuration with timeout
    try {
      await Promise.race([
        transporter.verify(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Verification timeout")), 10000)),
      ])
    } catch (error) {
      console.error("SMTP verification failed:", error)
      return NextResponse.json(
        {
          error: "Email service is currently unavailable. Please contact directly at chitrangana.singha@gmail.com",
        },
        { status: 503 },
      )
    }

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact Form" <${senderEmail}>`,
      to: recipientEmail,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f766e; border-bottom: 2px solid #0f766e; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #334155; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0fdfa; border-left: 4px solid #14b8a6; border-radius: 4px;">
            <p style="margin: 0; color: #0f766e; font-size: 14px;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          
          <p style="color: #64748b; font-size: 12px; text-align: center;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        Reply to: ${email}
      `,
      replyTo: email,
    }

    // Send email with timeout
    try {
      await Promise.race([
        transporter.sendMail(mailOptions),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Send timeout")), 15000)),
      ])

      return NextResponse.json(
        {
          message: "Message sent successfully! I'll get back to you soon.",
        },
        { status: 200 },
      )
    } catch (error) {
      console.error("Failed to send email:", error)
      return NextResponse.json(
        {
          error: "Failed to send message. Please try again or contact directly at chitrangana.singha@gmail.com",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Unexpected error in contact API:", error)
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please contact directly at chitrangana.singha@gmail.com",
      },
      { status: 500 },
    )
  }
}
