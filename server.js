import http from 'node:http';
import handler from './api/contact.js';

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

    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
      for await (const chunk of req) {
        chunks.push(Buffer.from(chunk));
      }
    }

    const rawBody = Buffer.concat(chunks).toString('utf8');
    req.body = rawBody ? JSON.parse(rawBody) : {};

    await handler(req, withResHelpers(res));
  } catch (error) {
    console.error('Local API error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Something went wrong. Please try again or email us directly.' }));
  }
});

server.listen(PORT, () => {
  console.log(`Local API running at http://localhost:${PORT}`);
});
