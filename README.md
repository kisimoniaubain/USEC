# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## EmailJS Configuration & Security

This project uses EmailJS for client-side email sending. The public key is intentionally exposed to the browser using Vite env vars with the `VITE_` prefix so the `@emailjs/browser` SDK can authenticate from the client.

- If you keep the client-side flow (`VITE_EMAILJS_PUBLIC_KEY`):
	- Monitor EmailJS dashboard > Logs for usage and errors.
	- Add usage alerts in EmailJS (if available) or periodically review logs to detect abuse.
	- Consider rate-limiting submissions on the client (simple debounce) and server-side (if you add a proxy).
	- Rotate the public key if you detect suspicious activity and update the Vercel env var.

- If you need stricter secrecy, move sending to a server-side endpoint (non-`VITE_` env var) so the key is not bundled into the client.

Vercel notes:
- Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` under Project → Settings → Environment Variables.
- Trigger a redeploy after adding/updating environment variables.

Contact/Rotation: track who has access to the Vercel project and rotate keys when team membership changes.
