# Nadun Dilshan - Portfolio

Personal portfolio of **Nadun Dilshan**, Associate Software Engineer. Built with the modern Next.js App Router stack - fast, clean, and SEO-first.

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **react-icons**
- Zero animation libraries - scroll reveals are CSS + `IntersectionObserver`

## Features

- ⚡ Lightweight single-page portfolio - mostly server-rendered, ~116 kB first-load JS
- 🌗 Dark / light theme toggle (persisted in `localStorage`, no flash on load)
- 🖼️ Optimized WebP images with descriptive, SEO-friendly filenames
- 📱 Fully responsive with an animated mobile menu
- 📨 Working contact form via [Web3Forms](https://web3forms.com/)
- 🔍 SEO-ready: Open Graph, Twitter cards, JSON-LD `Person`/`ProfilePage` schema, and an image sitemap
- ♿ Respects `prefers-reduced-motion`, visible focus rings, labelled form fields

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
  sitemap.ts        # sitemap incl. image entries for Google Images
  icon.png, apple-icon.png, favicon.ico
components/
  ThemeProvider.tsx # dark/light context
  Navbar.tsx, Reveal.tsx, SectionHeading.tsx
  sections/         # Hero, About, Experience, Skills, Services, Projects, Contact, Footer
lib/
  data.ts           # all content (profile, experience, skills, projects, …)
  seo.ts            # canonical URL, keywords, JSON-LD builder
public/
  images/, Nadun_Dilshan_CV.pdf

legacy/             # the previous static HTML/CSS/JS site (archived for reference)
```

All content lives in [`lib/data.ts`](lib/data.ts) - edit there to update the site.
