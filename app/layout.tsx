import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import { profile } from "@/lib/data";
import { SITE_URL, OG_IMAGE, keywords, buildJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const TITLE = `${profile.name} — ${profile.role}`;
const DESCRIPTION =
  "Portfolio of Nadun Dilshan, an Associate Software Engineer specializing in full-stack development with Next.js, React, Node.js, Go, and PostgreSQL. Based in Malabe, Sri Lanka.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${profile.name}`,
  },
  description: DESCRIPTION,
  applicationName: `${profile.name} Portfolio`,
  category: "technology",
  keywords,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: profile.name,
    locale: "en_US",
    type: "profile",
    firstName: "Nadun",
    lastName: "Dilshan",
    username: "nadun-dilshan",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@nadun-dilshan",
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/nadun.jpg", type: "image/jpeg" },
    ],
    apple: "/images/nadun.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#eef1f5" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
        <script
          // Prevents a theme flash before hydration.
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
