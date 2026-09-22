import https from 'https';

const RECIPIENT_EMAIL = 'useccbo@gmail.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, message, avatarUrl } = req.body || {};

  // Validate all required fields
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({
      error: 'Missing required fields: firstName, lastName, email, message',
    });
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Get EmailJS credentials from environment (non-VITE, server-only)
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error('EmailJS credentials not configured');
    return res.status(500).json({
      error: 'Email service is not configured on the server',
    });
  }

  try {
    // Call EmailJS API server-side (sends parameter-based template)
    const emailJsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        firstName,
        lastName,
        email,
        message,
        avatarUrl: avatarUrl || '',
        time: new Date().toLocaleString(),
      },
    };

    await sendEmailViaEmailJS(emailJsPayload);

    return res.status(200).json({
      ok: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Contact form email error:', error);
    return res.status(500).json({
      error: 'Failed to send email: ' + (error.message || 'Unknown error'),
    });
  }
}

/**
 * Send email via EmailJS API (server-to-server)
 * Docs: https://www.emailjs.com/docs/sdk/send/
 */
function sendEmailViaEmailJS(payload) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(payload);

    const options = {
      hostname: 'api.emailjs.com',
      port: 443,
      path: '/api/v1.0/email/send',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          resolve({ ok: true, status: res.statusCode });
        } else {
          reject(new Error(`EmailJS API returned ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}
