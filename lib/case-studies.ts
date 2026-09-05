/* -------------------------------------------------------------------------- */
/*  Case studies - long-form pages for flagship products                       */
/* -------------------------------------------------------------------------- */

export type CaseStudyLink = {
  label: string;
  href: string;
  /** Primary links render as the filled button. */
  primary?: boolean;
};

export type CaseStudyScreenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type CaseStudyFeature = {
  title: string;
  description: string;
};

export type CaseStudyChallenge = {
  challenge: string;
  solution: string;
};

export type CaseStudyComponent = {
  name: string;
  role: string;
  stack: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  /** Short product descriptor shown under the name. */
  tagline: string;
  /** One-paragraph summary used for metadata and the hero. */
  summary: string;
  /** Hero image - the first screenshot, also used for Open Graph. */
  hero: CaseStudyScreenshot;
  meta: {
    role: string;
    timeline: string;
    status: string;
    type: string;
  };
  /** Headline numbers. Keep to four. */
  stats: { value: string; label: string }[];
  problem: string[];
  solution: string[];
  architecture: {
    intro: string;
    components: CaseStudyComponent[];
    /** Ordered request/data flow - rendered as numbered steps. */
    flow: string[];
  };
  technologies: { group: string; items: string[] }[];
  screenshots: CaseStudyScreenshot[];
  features: CaseStudyFeature[];
  challenges: CaseStudyChallenge[];
  /** Optional code sample rendered in a <pre>. */
  code?: { filename: string; snippet: string };
  links: CaseStudyLink[];
};

export const caseStudies: CaseStudy[] = [
  /* ---------------------------------------------------------------------- */
  /*  Sellora                                                                */
  /* ---------------------------------------------------------------------- */
  {
    slug: "sellora",
    name: "Sellora",
    tagline: "WhatsApp AI commerce platform for Sri Lankan businesses",
    summary:
      "A multi-tenant SaaS that gives every store its own AI sales assistant on WhatsApp. It understands Sinhala, Tamil, English and Singlish over text, voice notes and photos, finds the right product, takes the order, and hands over to a human when it should.",
    hero: {
      src: "/images/case-studies/sellora-hero.webp",
      alt: "Sellora marketing site hero showing a live WhatsApp conversation being turned into a confirmed order",
      caption: "Marketing site - a live WhatsApp conversation becoming order #SL-2048",
      width: 1440,
      height: 1700,
    },
    meta: {
      role: "Product design, architecture, full-stack engineering, deployment",
      timeline: "July 2026 - present",
      status: "Live - onboarding merchants",
      type: "Multi-tenant SaaS",
    },
    stats: [
      { value: "5", label: "Deployed apps in one monorepo" },
      { value: "4", label: "Languages understood per message" },
      { value: "30+", label: "Data models scoped by tenant" },
      { value: "45+", label: "Automated test suites" },
    ],
    problem: [
      "Most small and mid-sized businesses in Sri Lanka already sell on WhatsApp. Customers message a shop after seeing a Facebook or Instagram ad, ask about a product, and expect an answer in Sinhala, Tamil, English or a mix of all three - often as a voice note or a photo of what they want.",
      "Behind the scenes that means a person typing replies all day, orders written down by hand, stock tracked in a separate spreadsheet, and sales lost every time the team is asleep, busy, or slow. Off-the-shelf chatbots reply in stiff English, invent products and prices, and cannot take a real order.",
    ],
    solution: [
      "Sellora gives each store a WhatsApp sales assistant that behaves like their best salesperson. It is grounded in that store's own catalogue and FAQs, so it can only state facts that exist there, and it answers with an honest \"I'll check with the team\" and an optional human handoff for anything else.",
      "The assistant drafts and confirms orders inside the chat, deducts stock when an order ships, records payment method and courier tracking, and attributes each order back to the ad that started the conversation. Staff can step into any chat from the tenant dashboard, which pauses the bot until they hand it back.",
      "For the platform owner there is a super-admin panel to create tenants, bind WhatsApp numbers, set per-tenant AI keys, manage plans and billing, and read an immutable audit trail of every change across the system.",
    ],
    architecture: {
      intro:
        "Sellora is a monorepo of five deployable apps that all talk to one backend API. Every record is scoped by tenant, and a single WhatsApp webhook routes each incoming message to the right store.",
      components: [
        {
          name: "Backend API",
          role: "Everything talks to this: auth, tenants, catalogue, orders, conversations, webhook, billing, audit",
          stack: "Node 20 · TypeScript · Express · MongoDB (Mongoose)",
        },
        {
          name: "Tenant platform",
          role: "Products, stock, orders, customers, conversations inbox, FAQs, broadcasts, analytics, team, billing",
          stack: "Next.js",
        },
        {
          name: "Super-admin panel",
          role: "Tenants, AI keys, WhatsApp binding, plans, billing, platform settings, audit logs",
          stack: "Next.js",
        },
        {
          name: "Storefront",
          role: "Public merchant catalogues, carts, direct checkout and WhatsApp product handoff",
          stack: "Next.js · Cloudflare Turnstile",
        },
        {
          name: "Marketing site",
          role: "Product story, pricing, FAQ, demo request - in English and Sinhala",
          stack: "Next.js (static)",
        },
      ],
      flow: [
        "Meta posts a message to the single /webhook/whatsapp endpoint. The HMAC signature is verified with the app secret, then the payload's phone_number_id selects the tenant.",
        "Voice notes are transcribed with the tenant's own AI key using Sinhala and English language hints, with fallbacks across OpenAI and Gemini models. Photos go to a vision model for product matching. Text passes straight through.",
        "The language of the message is detected - Sinhala script, Tamil script, romanised Singlish or English - and the reply mirrors it, honouring the tenant's language toggles. Unclear messages fall back to Sinhala.",
        "The sales agent runs tool-calling rounds against the tenant's catalogue, FAQs and order tools. Orders are drafted server-side and created only after one explicit customer confirmation; fake confirmations are detected and blocked.",
        "When staff mark an order as shipped, stock is deducted atomically per product and restored if the order is later cancelled or returned. Status updates go back to the customer in their own language.",
        "Every mutation is written to an immutable audit trail, usage is metered per tenant per month, and a rejected token, exhausted model or signature mismatch emails the platform owner instead of silently taking a store offline.",
      ],
    },
    technologies: [
      { group: "Frontend", items: ["Next.js", "React", "TypeScript"] },
      {
        group: "Backend",
        items: ["Node.js 20", "Express", "MongoDB", "Mongoose", "Zod", "Pino"],
      },
      {
        group: "AI & messaging",
        items: [
          "OpenAI SDK",
          "OpenRouter",
          "Gemini",
          "Meta WhatsApp Cloud API",
          "Tool calling",
        ],
      },
      {
        group: "Security",
        items: [
          "JWT + rotating refresh tokens",
          "AES-256-GCM secrets at rest",
          "WebAuthn passkeys",
          "bcrypt",
          "Helmet",
          "Rate limiting",
        ],
      },
      {
        group: "Infrastructure",
        items: ["Vercel", "GitHub Actions", "Cloudinary", "Nodemailer", "Cloudflare Turnstile"],
      },
    ],
    screenshots: [
      {
        src: "/images/case-studies/sellora-tenant-dashboard.webp",
        alt: "Sellora tenant dashboard for Zeylonia Marketplace showing revenue, orders, products and conversations",
        caption: "Tenant platform dashboard - store performance, order status and sales attribution in one workspace",
        width: 3420,
        height: 1898,
      },
      {
        src: "/images/case-studies/sellora-storefront.webp",
        alt: "Zeylonia Marketplace storefront powered by Sellora, with product search, category filters and a shopping cart",
        caption: "Hosted storefront - a branded merchant catalogue with product search, filters and cart",
        width: 3420,
        height: 1898,
      },
      {
        src: "/images/case-studies/sellora-features.webp",
        alt: "Sellora feature grid describing what the WhatsApp assistant does automatically",
        caption: "What the assistant does - voice notes, photo matching, safe order taking, stock, ad attribution",
        width: 1440,
        height: 1750,
      },
      {
        src: "/images/case-studies/sellora-demo.webp",
        alt: "Sellora demo request page with a business details form and package selection",
        caption: "Demo request flow - a personalised demo is prepared around the merchant's own catalogue",
        width: 1440,
        height: 900,
      },
    ],
    features: [
      {
        title: "Sinhala first, four languages",
        description:
          "Detects Sinhala, Tamil, English and Singlish per message and replies in kind. A greeting or one-word message is never mistaken for English.",
      },
      {
        title: "Voice notes and photos",
        description:
          "Transcribes voice notes with provider-specific fallbacks and matches customer photos to catalogue products with a vision model.",
      },
      {
        title: "Grounded answers only",
        description:
          "The bot may only state product facts that exist in the catalogue or FAQs. Anything else becomes an honest handoff, never an invented price.",
      },
      {
        title: "Orders taken in chat",
        description:
          "Name, phone and address collected once, confirmed once, and created server-side. Stock moves when the order ships.",
      },
      {
        title: "Ad attribution",
        description:
          "Chats opened from a Facebook or Instagram ad carry the ad headline, so the first reply is about that product and the order is credited to the ad.",
      },
      {
        title: "Human in the loop",
        description:
          "Staff reply from the inbox to pause the bot for that chat. The 24-hour WhatsApp window is tracked and approved templates reach customers outside it.",
      },
      {
        title: "Multi-tenant by design",
        description:
          "Every query is scoped by tenant in middleware. Per-tenant AI keys and WhatsApp tokens are encrypted at rest and never returned by any API.",
      },
      {
        title: "Plans, usage and billing",
        description:
          "Messages, AI tokens and orders are metered monthly. Plans cap products, team members and messages; suspended tenants drop to billing-only access.",
      },
      {
        title: "Hosted storefront",
        description:
          "Each merchant gets a branded catalogue with cart and direct checkout. Prices and availability are always re-resolved server-side.",
      },
    ],
    challenges: [
      {
        challenge:
          "Language detection for short, code-switched messages. \"Hi\" or a single Sinhala word written in Latin letters must not flip the conversation into English.",
        solution:
          "Built deterministic routing rules that treat Sinhala as the default, classify romanised Singlish separately, and keep the customer's script style in replies. The rules are covered by dedicated language and transliteration test suites.",
      },
      {
        challenge:
          "Stopping the model from inventing products, prices or delivery promises, which is the fastest way to lose a merchant's trust.",
        solution:
          "The agent is restricted to tool results from the tenant's catalogue and FAQs, with a system prompt that is versioned and evaluated against deterministic cases. Knowledge gaps are recorded so merchants can fill them.",
      },
      {
        challenge:
          "Taking real orders safely. Customers confirm in many ways, and a model can be tricked into a \"confirmation\" that never happened.",
        solution:
          "Orders are drafted server-side with a fresh pending state, require one explicit customer confirmation, and are idempotent. Cancellations need their own separate confirmation. Fake confirmations are detected and blocked.",
      },
      {
        challenge:
          "Voice transcription across providers. Some models support Sinhala, some do not, and OpenRouter tenants cannot transcribe at all.",
        solution:
          "Transcription is configured per tenant with language hints sent only when every enabled language is supported, and a fallback chain from dedicated transcription models to native audio understanding on the chat model.",
      },
      {
        challenge:
          "Stock that stays correct when orders ship, cancel and return concurrently across chat and the dashboard.",
        solution:
          "Inventory moves through an append-only ledger with atomic per-product operations, plus reconciliation scripts to backfill and verify balances.",
      },
      {
        challenge:
          "Shipping five apps safely without leaking secrets from fork pull requests.",
        solution:
          "Vercel auto-deploys are disabled. Path-filtered GitHub Actions run CI first, deploy previews for pull requests, deploy production on merge, and skip deployment for forks.",
      },
    ],
    links: [
      { label: "Visit sellora.nadun.me", href: "https://sellora.nadun.me", primary: true },
      { label: "Request a demo", href: "https://sellora.nadun.me/demo" },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*  Guardo                                                                 */
  /* ---------------------------------------------------------------------- */
  {
    slug: "guardo",
    name: "Guardo",
    tagline: "Production-ready authentication engine for Node.js and Next.js",
    summary:
      "An open-source npm package that wires OTP login, JWT access and refresh tokens, multi-device sessions and framework middleware together with security-first defaults. One secret is all the configuration it needs to start.",
    hero: {
      src: "/images/case-studies/guardo-home.webp",
      alt: "Guardo documentation home page showing the install command and a three-step OTP login example",
      caption: "Documentation site - install, then a full OTP login flow in three steps",
      width: 1440,
      height: 900,
    },
    meta: {
      role: "Library design, engineering, documentation, npm release pipeline",
      timeline: "2026 - present",
      status: "Published on npm · v1.4.0 · MIT",
      type: "Open-source developer library",
    },
    stats: [
      { value: "1", label: "Required config option (jwt.secret)" },
      { value: "4", label: "Middleware targets" },
      { value: "3", label: "Storage adapters" },
      { value: "5", label: "Core modules" },
    ],
    problem: [
      "Every Node.js or Next.js product needs the same authentication plumbing: send a one-time code, verify it, issue tokens, refresh them, track which devices are signed in, and protect routes. Teams either rebuild it from scratch each time or stitch together half a dozen libraries that were never designed to work together.",
      "The details are easy to get wrong. One-time codes stored in plaintext, refresh tokens that never rotate, no way to detect a stolen token, and rate limits bolted on as an afterthought. Those mistakes rarely show up in a demo and always show up in production.",
    ],
    solution: [
      "Guardo packages the whole flow behind a single createAuth() call. OTP login, JWT access and refresh tokens, multi-device sessions with per-device revocation, and middleware for Express, Fastify and Next.js ship together and already know about each other.",
      "The defaults are the secure path. Codes are hashed, compared in constant time and consumed on use. Refresh tokens rotate on every refresh, and replaying a revoked one revokes all of that user's sessions. Only the JWT secret is mandatory; everything else has a sensible default.",
      "Storage, notification channels and OAuth providers are pluggable interfaces, so the same code runs against an in-memory store in tests and Redis in production, and sends codes through console, email, SMS or any custom channel.",
    ],
    architecture: {
      intro:
        "Guardo is organised as a small set of modules exposed from one auth object, backed by two adapter interfaces and a family of framework wrappers.",
      components: [
        {
          name: "OTP module",
          role: "Generates and verifies time-limited codes with per-identifier and per-IP rate limiting",
          stack: "auth.otp",
        },
        {
          name: "Auth module",
          role: "Orchestrates login, token refresh and logout across the other modules",
          stack: "auth.auth",
        },
        {
          name: "JWT module",
          role: "Issues and verifies access and refresh token pairs with configurable TTLs and extra claims",
          stack: "auth.jwt",
        },
        {
          name: "Session module",
          role: "Tracks multi-device sessions bound to the refresh token lifetime, with per-device revocation",
          stack: "auth.session",
        },
        {
          name: "OAuth module",
          role: "Social login for Google, GitHub and pluggable providers using PKCE and single-use CSRF state",
          stack: "auth.oauth",
        },
        {
          name: "Storage adapters",
          role: "In-memory for development and tests, Redis for production, or a custom StorageAdapter",
          stack: "memory · ioredis · custom",
        },
        {
          name: "Notifiers",
          role: "Console, Nodemailer email (Ethereal in development, SMTP in production), SMS, multi-channel or custom",
          stack: "Notifier interface",
        },
        {
          name: "Middleware",
          role: "Route protection for Express, Fastify, Next.js Edge middleware and the App Router route wrapper",
          stack: "auth.middleware.*",
        },
      ],
      flow: [
        "auth.otp.send() generates a code, stores only its SHA-256 hash with an expiry, applies rate limits, and delivers it through the configured notifier.",
        "auth.auth.loginWithOtp() verifies the code in constant time, consumes it, resolves or creates the user via resolveUser and onNewUser hooks, and creates a session for that device.",
        "The JWT module signs a short-lived access token and a longer-lived refresh token tied to the session; in cookie mode both travel as httpOnly cookies.",
        "Protected routes go through the framework middleware, which verifies the access token and attaches the decoded user to the request.",
        "auth.auth.refresh() rotates the refresh token and session. A replayed, already-rotated token triggers reuse detection, revokes every session for that user and emits a typed event.",
      ],
    },
    technologies: [
      { group: "Language & runtime", items: ["TypeScript", "Node.js", "Next.js Edge runtime"] },
      { group: "Frameworks", items: ["Express", "Fastify", "Next.js Middleware", "Next.js App Router"] },
      { group: "Storage & delivery", items: ["Redis (ioredis)", "In-memory store", "Nodemailer", "SMTP", "SMS"] },
      { group: "Security", items: ["JWT", "SHA-256 OTP hashing", "Timing-safe comparison", "PKCE", "httpOnly cookies"] },
      { group: "Tooling", items: ["Jest", "GitHub Actions", "npm", "Docs site"] },
    ],
    screenshots: [
      {
        src: "/images/case-studies/guardo-security.webp",
        alt: "Guardo security notes documentation page listing hashed OTP storage, timing-safe comparison, token rotation and reuse detection",
        caption: "Security notes - what happens under the hood, plus a production hardening checklist",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/case-studies/guardo-nextjs.webp",
        alt: "Guardo Next.js middleware documentation page",
        caption: "Next.js integration - Edge middleware and App Router route wrapper",
        width: 1440,
        height: 900,
      },
    ],
    features: [
      {
        title: "OTP login",
        description:
          "Email or SMS codes with configurable length and expiry. Codes are single-use and invalidated after five failed attempts.",
      },
      {
        title: "JWT access + refresh",
        description:
          "Short-lived access tokens (15 minutes by default) and rotating refresh tokens (7 days), with extra claims when you need them.",
      },
      {
        title: "Multi-device sessions",
        description:
          "Each login creates a session with device metadata. Revoke one device or all of them; sessions expire with their refresh token.",
      },
      {
        title: "Four middleware targets",
        description:
          "Drop-in route protection for Express, Fastify, Next.js Edge middleware and Next.js App Router handlers.",
      },
      {
        title: "Pluggable storage",
        description:
          "In-memory for local development and tests, Redis for shared production state, or implement the StorageAdapter interface.",
      },
      {
        title: "Rate limiting built in",
        description:
          "Separate limits for sending and verifying, per identifier and per IP, with a RateLimitError that reports retryAfterSeconds.",
      },
      {
        title: "Typed lifecycle events",
        description:
          "Hook into login, refresh, logout and token.reuse_detected to alert, audit or integrate with your own systems.",
      },
      {
        title: "OAuth providers",
        description:
          "Google and GitHub out of the box, with a pluggable provider interface, PKCE (S256) and single-use CSRF state.",
      },
      {
        title: "Cookie mode",
        description:
          "Keep tokens out of JavaScript-readable storage by transporting them as httpOnly cookies.",
      },
    ],
    challenges: [
      {
        challenge:
          "Making the secure path the default without burying users in configuration.",
        solution:
          "Only jwt.secret is required and Guardo refuses secrets shorter than 16 characters. Hashing, timing-safe comparison, single-use codes, attempt limits and rotation are always on rather than opt-in.",
      },
      {
        challenge:
          "Detecting stolen refresh tokens without breaking legitimate clients that retry a request.",
        solution:
          "Every refresh rotates the token and the session. Replaying an already-rotated token is treated as reuse: all sessions for that user are revoked and a typed event lets the app alert on it.",
      },
      {
        challenge:
          "Running the same code in Node servers and in the Next.js Edge runtime, which has a different set of available APIs.",
        solution:
          "Framework-specific wrappers isolate runtime differences, so the core modules stay portable and a Next.js Edge middleware sits alongside Express and Fastify adapters.",
      },
      {
        challenge:
          "Keeping rate limits and sessions consistent across multiple server instances.",
        solution:
          "State lives behind a StorageAdapter. The Redis store shares sessions and rate limits across instances, while the in-memory store keeps tests fast and dependency-free.",
      },
      {
        challenge:
          "Shipping releases developers can trust.",
        solution:
          "A Jest test suite, TypeScript types for every public surface, a changelog, and a GitHub Actions release workflow that publishes tagged versions to npm.",
      },
    ],
    code: {
      filename: "auth.ts",
      snippet: `import { createAuth } from "guardo";

const auth = createAuth({
  jwt: { secret: process.env.JWT_SECRET! },
});

// 1. Send a one-time code
await auth.otp.send({ identifier: "user@example.com" });

// 2. Verify it and log in
const { user, accessToken, refreshToken, sessionId } =
  await auth.auth.loginWithOtp({
    identifier: "user@example.com",
    otp: "123456",
    meta: { device: "chrome-mac", ip: req.ip },
  });

// 3. Protect routes
app.get("/me", auth.middleware.express(), (req, res) => {
  res.json(req.user);
});`,
    },
    links: [
      { label: "Read the docs", href: "https://guardo.nadun.me", primary: true },
      { label: "View on npm", href: "https://www.npmjs.com/package/guardo" },
      { label: "Source on GitHub", href: "https://github.com/nadun-dilshan/guardo" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
