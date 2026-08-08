import nodemailer from 'nodemailer'

const RECIPIENT_EMAIL = 'useccbo@gmail.com'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body || {}
  const normalizedEmail = typeof email === 'string' ? email.trim() : ''

  if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return res.status(400).json({ error: 'A valid email is required' })
  }

  const smtpUser = process.env.GMAIL_USER
  const smtpPass = process.env.GMAIL_APP_PASSWORD

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({ error: 'Email service is not configured' })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: `USEC Website <${smtpUser}>`,
      to: RECIPIENT_EMAIL,
      subject: 'New USEC Newsletter Subscription',
      text: `A new user subscribed to Stay informed.\n\nSubscriber email: ${normalizedEmail}`,
      html: `<p>A new user subscribed to <strong>Stay informed</strong>.</p><p><strong>Subscriber email:</strong> ${normalizedEmail}</p>`,
      replyTo: normalizedEmail,
    })

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ error: 'Failed to send subscription email' })
  }
}
