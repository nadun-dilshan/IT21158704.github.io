# Nadun Dilshan — Portfolio

Personal portfolio of **Nadun Dilshan**, Associate Software Engineer. Built with the modern Next.js App Router stack.

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for scroll & entrance animations
- **react-icons**

## Features

- ⚡ Single-page portfolio with smooth scroll & scroll-spy navigation
- 🌗 Dark / light theme toggle (persisted in `localStorage`, no flash on load)
- 🖱️ Custom trailing cursor (desktop) + floating particle background
- 📱 Fully responsive with an animated mobile menu
- 📨 Working contact form via [Web3Forms](https://web3forms.com/)
- 🔍 SEO-ready: Open Graph, Twitter cards, and JSON-LD `Person` schema
- ♿ Respects `prefers-reduced-motion`

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Project Structure

```
app/
  layout.tsx        # fonts, metadata, JSON-LD, theme bootstrap
  page.tsx          # composes all sections
  globals.css       # theme tokens + Tailwind v4
components/
  ThemeProvider.tsx # dark/light context
  Navbar.tsx, CustomCursor.tsx, Particles.tsx, Preloader.tsx
  Reveal.tsx, TypedText.tsx, SectionHeading.tsx
  sections/         # Hero, About, Experience, Skills, Services, Projects, Contact, Footer
lib/
  data.ts           # all content (profile, experience, skills, projects, …)
public/
  images/, Nadun_Dilshan_CV.pdf
legacy/             # the previous static HTML/CSS/JS site (archived for reference)
```

All content lives in [`lib/data.ts`](lib/data.ts) — edit there to update the site.
