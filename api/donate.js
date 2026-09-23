import nodemailer from 'nodemailer'

const DEFAULT_DONATION_RECIPIENT = process.env.DONATION_EMAIL_TO || process.env.GMAIL_USER || 'useccbo@gmail.com'

const getEquityBankDetails = () => ({
  bankName: 'Equity Bank',
  accountName: process.env.EQUITY_BANK_ACCOUNT_NAME || 'United Safe Environment Creators',
  accountNumber: process.env.EQUITY_BANK_ACCOUNT_NUMBER || 'Set EQUITY_BANK_ACCOUNT_NUMBER in Vercel env',
  branch: process.env.EQUITY_BANK_BRANCH || 'Set EQUITY_BANK_BRANCH in Vercel env',
  swift: process.env.EQUITY_BANK_SWIFT || 'Set EQUITY_BANK_SWIFT in Vercel env',
  currency: process.env.EQUITY_BANK_CURRENCY || 'USD',
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')

    return res.status(405).json({
      error: 'Method not allowed',
    })
  }

  const {
    amount,
    frequency,
    firstName,
    lastName,
    email,
    paymentMethod,
  } = req.body || {}

  const donorFirstName = typeof firstName === 'string' ? firstName.trim() : ''
  const donorLastName = typeof lastName === 'string' ? lastName.trim() : ''
  const donorEmail = typeof email === 'string' ? email.trim() : ''
  const donationAmount = Number(amount)
  const donationFrequency = typeof frequency === 'string' ? frequency.trim() : 'once'

  if (!donorFirstName || !donorLastName) {
    return res.status(400).json({
      error: 'Please enter your full name.',
    })
  }

  if (!donorEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorEmail)) {
    return res.status(400).json({
      error: 'Please enter a valid email address.',
    })
  }

  if (!Number.isFinite(donationAmount) || donationAmount <= 0) {
    return res.status(400).json({
      error: 'Please select or enter a valid donation amount.',
    })
  }

  if (paymentMethod !== 'equity-bank') {
    return res.status(400).json({
      error: 'Please select Equity Bank as the payment method.',
    })
  }

  const smtpUser = process.env.GMAIL_USER
  const smtpPass = process.env.GMAIL_APP_PASSWORD
  const hasDummyGmailPassword = typeof smtpPass === 'string' && /YOUR_16_CHAR_APP_PASSWORD|replace-with|example|dummy/i.test(smtpPass)
  const emailDeliveryEnabled = Boolean(smtpUser && smtpPass && !hasDummyGmailPassword)

  const equityBankDetails = getEquityBankDetails()
  const reference = `USEC-${donationFrequency.toUpperCase()}-${Date.now()}`

  try {
    if (emailDeliveryEnabled) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      const emailText = `
New USEC Donation Request

Donor: ${donorFirstName} ${donorLastName}
Email: ${donorEmail}
Amount: ${donationAmount.toFixed(2)} ${equityBankDetails.currency}
Frequency: ${donationFrequency}
Payment Method: Equity Bank Transfer
Reference: ${reference}

Bank Details:
Bank: ${equityBankDetails.bankName}
Account Name: ${equityBankDetails.accountName}
Account Number: ${equityBankDetails.accountNumber}
Branch: ${equityBankDetails.branch}
SWIFT: ${equityBankDetails.swift}
    `.trim()

      await transporter.sendMail({
        from: `USEC Donations <${smtpUser}>`,
        to: DEFAULT_DONATION_RECIPIENT,
        replyTo: donorEmail,
        subject: `New USEC donation request - ${reference}`,
        text: emailText,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; color: #0f172a;">
            <h2 style="margin-bottom: 16px; color: #0f172a;">New USEC donation request</h2>
            <p><strong>Donor:</strong> ${donorFirstName} ${donorLastName}</p>
            <p><strong>Email:</strong> ${donorEmail}</p>
            <p><strong>Amount:</strong> ${donationAmount.toFixed(2)} ${equityBankDetails.currency}</p>
            <p><strong>Frequency:</strong> ${donationFrequency}</p>
            <p><strong>Payment Method:</strong> Equity Bank Transfer</p>
            <p><strong>Reference:</strong> ${reference}</p>

            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e2e8f0;" />

            <h3 style="margin: 0 0 12px; color: #0f172a;">Equity Bank transfer details</h3>
            <p><strong>Bank:</strong> ${equityBankDetails.bankName}</p>
            <p><strong>Account Name:</strong> ${equityBankDetails.accountName}</p>
            <p><strong>Account Number:</strong> ${equityBankDetails.accountNumber}</p>
            <p><strong>Branch:</strong> ${equityBankDetails.branch}</p>
            <p><strong>SWIFT:</strong> ${equityBankDetails.swift}</p>
          </div>
        `,
      })
    } else {
      console.warn(`Donation request accepted in local test mode. Email not sent because GMAIL_USER/GMAIL_APP_PASSWORD are not configured. Reference: ${reference}`)
    }

    return res.status(200).json({
      ok: true,
      message: 'Your payment instructions are ready. Please transfer the amount to the Equity Bank account below and use the reference number shown in the transfer message.',
      paymentMethod: 'equity-bank',
      emailSent: emailDeliveryEnabled,
      instructions: {
        bankName: equityBankDetails.bankName,
        accountName: equityBankDetails.accountName,
        accountNumber: equityBankDetails.accountNumber,
        branch: equityBankDetails.branch,
        swift: equityBankDetails.swift,
        currency: equityBankDetails.currency,
        amount: donationAmount.toFixed(2),
        reference,
      },
    })
  } catch (error) {
    console.error('Donation email error:', error)

    return res.status(500).json({
      error: 'Failed to process the donation request. Please try again or contact USEC directly.',
    })
  }
}
