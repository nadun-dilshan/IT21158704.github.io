import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import CaseStudy from "@/components/CaseStudy";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { profile } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const title = `${study.name} case study`;
  const url = `${SITE_URL}/projects/${study.slug}`;

  return {
    title,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} - ${profile.name}`,
      description: study.summary,
      url,
      type: "article",
      images: [
        {
          url: study.hero.src,
          width: study.hero.width,
          height: study.hero.height,
          alt: study.hero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${profile.name}`,
      description: study.summary,
      images: [study.hero.src],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const study = caseStudies[index];
  const prev = caseStudies[index - 1];
  const next = caseStudies[index + 1];

  return (
    <ThemeProvider>
      <div className="bg-glow" aria-hidden />
      <Navbar />
      <CaseStudy
        study={study}
        prev={prev ? { slug: prev.slug, name: prev.name } : undefined}
        next={next ? { slug: next.slug, name: next.name } : undefined}
      />
      <Footer />
    </ThemeProvider>
  );
}
