'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Send the email
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: 'MUJ-CENTRAL 2.0 - New Contact Form Submission', 
      text: `MUJ-CENTRAL 2.0\n\nA user answered the contact form.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h1>MUJ-CENTRAL</h1>
        <p><strong>A user answered the contact form.</strong></p>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return { success: true, message: 'Email sent successfully' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send email' }
  }
}

