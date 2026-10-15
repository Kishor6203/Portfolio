# Kishor Kumar — React Portfolio

A responsive, dark-themed portfolio built with React, TypeScript, Vite and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── SectionHeading.tsx
│   └── Skills.tsx
├── data/
│   └── portfolio.ts
├── styles/
│   └── global.css
├── App.tsx
└── main.tsx
```

## Before publishing

1. Replace the generic LinkedIn URL in `Hero.tsx` and `Footer.tsx` with your real LinkedIn profile URL.
2. Add live/demo links for the Finance Dashboard and Hospital Portal in `src/data/portfolio.ts` if available.
3. Verify that every metric and project detail matches your real work.
4. Optional: add a downloadable PDF resume in `public/` and link it from the hero.
5. Deploy to Vercel, Netlify, or GitHub Pages after checking `npm run build`.

The finance dashboard and hospital portal are presented as portfolio case studies based on the supplied resume. Add screenshots or repository/demo links if you have them.
