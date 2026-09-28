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

    console.log('Donation notification received:', body);

    const donorName = String(body.donorName || '').trim();
    const donorEmail = String(body.donorEmail || '').trim();
    const donationAmount = String(body.donationAmount || '').trim();
    const transactionReference = String(
      body.transactionReference || ''
    ).trim();
    const donorMessage = String(body.donorMessage || '').trim();

    if (!donorName) {
      return res.status(400).json({
        error: 'Please enter your full name.',
      });
    }

    if (!donorEmail) {
      return res.status(400).json({
        error: 'Please enter your email address.',
      });
    }

    if (!donationAmount) {
      return res.status(400).json({
        error: 'Please enter the donation amount.',
      });
    }

    if (!transactionReference) {
      return res.status(400).json({
        error: 'Please enter the transaction reference.',
      });
    }

    const serviceId =
      process.env.EMAILJS_SERVICE_ID;

    const templateId =
      process.env.EMAILJS_TEMPLATE_ID;

    const publicKey = getEmailJsPublicKey();
    const privateKey = getEmailJsPrivateKey();

    console.log('DONATION EMAILJS CONFIG:', {
      serviceId,
      templateId,
      publicKey,
      privateKeyPresent: !!privateKey,
    });

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      console.error(
        'EmailJS donation credentials or private key are missing.'
      );

      return res.status(500).json({
        error: 'Donation email service is not properly configured.',
      });
    }

    const emailJsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,

      template_params: {
        to_email: 'useccbo@gmail.com',

        donor_name: donorName,
        donor_email: donorEmail,
        donation_amount: donationAmount,
        transaction_reference: transactionReference,
        donor_message: donorMessage || 'No additional message.',

        time: new Date().toLocaleString(),
      },
    };

    console.log(
      'Sending donation notification for:',
      donorEmail
    );

    await sendEmailViaEmailJS(emailJsPayload);

    console.log(
      'Donation notification sent successfully.'
    );

    return res.status(200).json({
      ok: true,
      message: 'Donation notification sent successfully.',
    });
  } catch (error) {
    console.error(
      'Donation notification error:',
      error
    );

    return res.status(500).json({
      error:
        error?.message ||
        'Failed to send donation notification. Please try again later.',
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