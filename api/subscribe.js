import https from 'https';

const getEmailJsPublicKey = () =>
  process.env.EMAILJS_PUBLIC_KEY || process.env.EMAILJS_USER_ID;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');

    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    const body = req.body || {};

    console.log('Newsletter request received:', body);

    const subscriberEmail = String(
      body.subscriberEmail || body.email || ''
    ).trim();

    console.log(
      'Subscriber email received:',
      subscriberEmail
    );

    // Only check that an email was entered.
    if (!subscriberEmail) {
      return res.status(400).json({
        error: 'Please enter your email address.',
      });
    }

    // IMPORTANT:
    // Newsletter uses its own EmailJS service.
    // Contact Us continues using EMAILJS_SERVICE_ID
    // in api/contact.js.
    const serviceId =
      process.env.EMAILJS_SUBSCRIBE_SERVICE_ID;

    const templateId =
      process.env.EMAILJS_SUBSCRIBE_TEMPLATE_ID;

    const publicKey = getEmailJsPublicKey();

    console.log('NEWSLETTER CONFIG:', {
      serviceId,
      templateId,
      publicKey,
      publicKeyPresent: !!publicKey,
    });

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        'EmailJS subscription credentials are missing.'
      );

      return res.status(500).json({
        error: 'Newsletter service is not configured.',
      });
    }

    const emailJsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,

      template_params: {
        subscriberEmail,
        time: new Date().toLocaleString(),
      },
    };

    console.log(
      'Sending newsletter email for:',
      subscriberEmail
    );

    await sendEmailViaEmailJS(emailJsPayload);

    console.log(
      'Newsletter subscription email sent successfully.'
    );

    return res.status(200).json({
      ok: true,
      message: 'Successfully subscribed.',
    });
  } catch (error) {
    console.error(
      'Newsletter subscription error:',
      error
    );

    return res.status(500).json({
      error:
        error?.message ||
        'Failed to subscribe. Please try again later.',
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