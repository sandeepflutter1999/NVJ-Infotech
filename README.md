# NVJ Infotech — Landing Page (React)

Full-stack digital team landing page, converted from static HTML/CSS/JS into a React + Vite project.

## Folder Structure

```
nvj-infotech/
├── index.html              # HTML shell (loads Google Fonts + mounts React)
├── package.json
├── vite.config.js
├── .gitignore
├── public/                 # static assets (add favicon, images here)
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx               # Root component
    ├── index.css             # Global reset
    └── NVJInfotechLanding.jsx     # Main page component (all sections + styles)
```

## Setup

1. Install [Node.js](https://nodejs.org) (v18+ recommended).
2. Open a terminal in this folder and install dependencies:

   ```bash
   npm install
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

   Open the URL shown in the terminal (usually `http://localhost:5173`).

4. Build for production:

   ```bash
   npm run build
   ```

   Output goes to the `dist/` folder — upload that to any static host (Vercel, Netlify, GitHub Pages, your own server, etc.)

## Notes

- All page content (team members, projects, websites, "why us" cards) lives in data arrays near the top of `NVJInfotechLanding.jsx` — edit those arrays to update content without touching the markup.
- All original CSS (gradients, animations, hover effects, mobile responsiveness) is preserved inside `NVJInfotechLanding.jsx` via an injected `<style>` tag, scoped under the `.skt-root` class.
- The WhatsApp contact form sends a pre-filled message to `+91 6283066197` via `wa.me` — update the number in `NVJInfotechLanding.jsx` (search for `916283066197`) if needed.
# NVJ-Infotech
