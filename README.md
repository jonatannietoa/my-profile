# Jonatan Nieto — Developer CV

A modern, developer-styled résumé built as a single-page app. Dark terminal
aesthetic, one-click **Download PDF** (print-optimized A4), and ready to deploy
on Vercel.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS v4

## Develop

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Edit your content

All CV content lives in **one file**:

```
src/data/profile.ts
```

Change your name, headline, summary, experience, skills, education, languages,
awards, publications and the "at a glance" stats there — the web page and the
PDF both update automatically. No component edits needed.

## Download as PDF

Click the floating **Download PDF** button (bottom-right) → in the browser
print dialog choose **Save as PDF**. A dedicated `@media print` stylesheet
renders a clean, light, ATS-friendly A4 layout (text stays selectable and
vector-sharp). In the dialog, disable "Headers and footers" for the cleanest
result.

## Build

```bash
npm run build      # type-checks then builds to dist/
npm run preview    # serve the production build locally
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel → **New Project** → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`,
   output dir `dist` — Vercel fills these in for you.
4. Deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production
```

`vercel.json` already sets an SPA rewrite so refreshes/deep links work.
