import {
  profile,
  socials,
  skillGroups,
  experiences,
  education,
  navLinks,
} from "./data";

/** Canonical production origin. Update if the domain changes. */
export const SITE_URL = "https://nadun.me";

export const OG_IMAGE = "/images/og-image.jpg";

/** Flattened skill list, used for keywords + JSON-LD `knowsAbout`. */
export const allSkills = Array.from(
  new Set(skillGroups.flatMap((g) => g.skills))
);

export const keywords = [
  "Nadun Dilshan",
  "Software Engineer",
  "Associate Software Engineer",
  "Full-Stack Developer",
  "Web Developer Sri Lanka",
  "Next.js Developer",
  "React Developer",
  "Node.js Developer",
  "Go Developer",
  "MERN Stack Developer",
  ...allSkills,
];

/**
 * Schema.org JSON-LD. Includes a Person (the primary entity), the WebSite,
 * and a ProfilePage wrapper so search engines can model the page as an
 * authored profile of a single person.
 */
export function buildJsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: profile.name,
    jobTitle: profile.role,
    description: profile.tagline,
    url: SITE_URL,
    image: `${SITE_URL}${profile.avatar}`,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malabe",
      addressCountry: "LK",
    },
    sameAs: socials.map((s) => s.href),
    knowsAbout: allSkills,
    worksFor: {
      "@type": "Organization",
      name: experiences[0]?.company ?? "BotCalm (Pvt) Ltd",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education[0]?.institution,
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${profile.name} — Portfolio`,
    description: profile.tagline,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#person` },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${profile.name} — ${profile.role}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage],
  };
}

/** Section anchors used to build the sitemap. */
export const sectionAnchors = navLinks
  .map((l) => l.href)
  .filter((h) => h.startsWith("#"));
