## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## EmailJS Configuration & Security

This project sends contact emails through a server-side Vercel API route, so the EmailJS key is kept off the browser.

- Add these values in Vercel under Project → Settings → Environment Variables:
  - `EMAILJS_SERVICE_ID`
  - `EMAILJS_TEMPLATE_ID`
  - `EMAILJS_PUBLIC_KEY`
- Use the EmailJS Public Key value from your EmailJS account, not the private key.
- Trigger a redeploy after adding or changing any environment variables.

Why this matters:
- The EmailJS API expects the public key in the `user_id` field.
- Using a private key or an incorrect value will return the "Public Key is invalid" error you saw.