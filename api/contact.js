import https from 'https';

const getEmailJsPublicKey = () =>
  process.env.EMAILJS_PUBLIC_KEY || process.env.EMAILJS_USER_ID;

const getEmailJsPrivateKey = () =>
  process.env.EMAILJS_PRIVATE_KEY || process.env.EMAILJS_SECRET_KEY;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');

    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    const body = req.body || {};

    console.log('Contact form received:', body);

    // Accept the exact field names from the Contact Us form
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const message = String(body.message || '').trim();

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Missing contact form fields:', {
        name: !!name,
        email: !!email,
        message: !!message,
        receivedBody: body,
      });

      return res.status(400).json({
        error: 'Missing required fields: name, email, message',
      });
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format',
      });
    }

    // EmailJS configuration
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = getEmailJsPublicKey();
    const privateKey = getEmailJsPrivateKey();

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      console.error('EmailJS credentials not configured:', {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey,
        privateKey: !!privateKey,
      });

      return res.status(500).json({
        error: 'Email service is not configured on the server',
      });
    }

    const emailJsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,

      template_params: {
        name,
        email,
        message,
        time: new Date().toLocaleString(),
      },
    };

    console.log('Sending Contact Us email through EmailJS...');

    await sendEmailViaEmailJS(emailJsPayload);

    console.log('Contact Us email sent successfully');

    return res.status(200).json({
      ok: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Contact form email error:', error);

    return res.status(500).json({
      error:
        `Failed to send email: ${
          error?.message || 'Unknown error'
        }`,
    });
  }
}

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
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const request = https.request(
      options,
      (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          console.log('EmailJS response:', {
            status: response.statusCode,
            body: data,
          });

          if (
            response.statusCode >= 200 &&
            response.statusCode < 300
          ) {
            resolve({
              ok: true,
              status: response.statusCode,
            });
          } else {
            reject(
              new Error(
                `EmailJS API returned ${response.statusCode}: ${data}`
              )
            );
          }
        });
      }
    );

    request.on('error', (error) => {
      reject(error);
    });

    request.write(postData);
    request.end();
  });
}