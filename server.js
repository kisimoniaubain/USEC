import http from 'node:http';
import contactHandler from './api/contact.js';

const PORT = Number(process.env.PORT || 3999);

const withResHelpers = (res) => {
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };

  res.json = (body) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(body));
    return res;
  };

  return res;
};

const server = http.createServer(async (req, res) => {
  try {
    const chunks = [];

    if (
      req.method === 'POST' ||
      req.method === 'PUT' ||
      req.method === 'PATCH'
    ) {
      for await (const chunk of req) {
        chunks.push(Buffer.from(chunk));
      }
    }

    const rawBody = Buffer.concat(chunks).toString('utf8');

    try {
      req.body = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      req.body = {};
      return withResHelpers(res)
        .status(400)
        .json({ error: 'Invalid JSON request body' });
    }

    // Contact form
    if (req.method === 'POST' && req.url === '/api/contact') {
      return await contactHandler(req, withResHelpers(res));
    }

    // Newsletter subscription
    if (req.method === 'POST' && req.url === '/api/subscribe') {
      const { email } = req.body || {};

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return withResHelpers(res)
          .status(400)
          .json({ error: 'Invalid email address' });
      }

      console.log(`Newsletter subscription: ${email}`);

      return withResHelpers(res).status(200).json({
        ok: true,
        message: 'Thank you for subscribing! You\'ll receive updates about our activities.',
      });
    }

    // Health check
    if (req.method === 'GET' && req.url === '/api/health') {
      return withResHelpers(res).status(200).json({
        ok: true,
        message: 'USEC API is running',
      });
    }

    return withResHelpers(res)
      .status(404)
      .json({ error: 'API route not found' });
  } catch (error) {
    console.error('Local API error:', error);

    return withResHelpers(res).status(500).json({
      error: 'Something went wrong. Please try again or email us directly.',
    });
  }
});

server.listen(PORT, () => {
  console.log(`Local API running at http://localhost:${PORT}`);
});