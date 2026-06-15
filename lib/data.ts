import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";
import {
  BiCodeAlt,
  BiServer,
  BiMobileAlt,
  BiData,
  BiPalette,
  BiRocket,
} from "react-icons/bi";

/* -------------------------------------------------------------------------- */
/*  Personal information                                                       */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Nadun Dilshan",
  role: "Associate Software Engineer",
  location: "Malabe, Sri Lanka",
  email: "hello@nadun.me",
  phone: "+94 76 522 0104",
  phoneRaw: "94765220104",
  website: "https://nadun.me",
  cv: "/Nadun_Dilshan_CV.pdf",
  avatar: "/images/nadun.jpg",
  aboutImage: "/images/nadun_1.jpg",
  tagline:
    "Software Engineering graduate with 1.3+ years of industry experience designing, developing, and maintaining modern, scalable web applications.",
  heroDescription:
    "I build full-stack products with Next.js, React, Node.js, Go, and PostgreSQL - with a strong focus on scalable architecture, clean code, and user-centric solutions.",
  about: [
    "I'm a Software Engineering graduate with 1.3+ years of professional experience building full-stack web applications. I work across the stack with Next.js, React, Node.js, Express, Go, MongoDB, and PostgreSQL.",
    "Currently an Associate Software Engineer at BotCalm (Pvt) Ltd, I've worked on scalable iGaming and compliance platform features - integrating payment gateways, identity verification, and event-driven email pipelines. I thrive in Agile teams and care deeply about clean, maintainable code.",
  ],
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const socials: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/KTDNadun", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/nadun._", icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nadun-dilshan/", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/nadun-dilshan", icon: FaGithub },
];

export const heroRoles = [
  "Associate Software Engineer",
  "Full-Stack Developer",
  "Next.js & React Developer",
  "Go & Node.js Engineer",
  "Problem Solver",
];

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*  Work experience                                                            */
/* -------------------------------------------------------------------------- */

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "BotCalm (Pvt) Ltd",
    period: "Aug 2025 - Present",
    points: [
      "Worked on full-stack development using Go, Node.js, Next.js, and React to build scalable iGaming and compliance platform features.",
      "Integrated multiple payment gateways including Plaid, LinkMoney, and NowPayments to support diverse deposit and withdrawal flows.",
      "Implemented transactional and marketing email pipelines using Klaviyo for automated and event-driven user communications.",
      "Worked with compliance software and identity verification systems using Shufti Pro for secure onboarding and regulatory requirements.",
      "Collaborated in Agile teams - sprint planning, daily stand-ups, and code reviews to deliver high-quality features efficiently.",
    ],
  },
  {
    role: "Intern Software Engineer",
    company: "BotCalm (Pvt) Ltd",
    period: "Feb 2025 - Aug 2025",
    points: [
      "Built and maintained full-stack web applications using Node.js and Next.js with MongoDB and PostgreSQL.",
      "Developed features for an iGaming application, delivering performant and scalable backend services and responsive frontends.",
      "Worked in an Agile environment to ensure timely delivery of bug fixes and feature enhancements.",
      "Actively participated in daily stand-ups, sprint planning, and retrospectives to improve team collaboration.",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Self-Employed",
    period: "Jun 2022 - Present",
    points: [
      "Developed and delivered full-stack web applications for clients using Next.js and Node.js based on real-world business requirements.",
      "Integrated secure online payment processing using PayHere for seamless transactions.",
      "Collaborated with clients remotely and on-site to gather requirements, provide updates, and deliver tailored solutions.",
      "Managed project timelines effectively to ensure on-time delivery of features and complete systems.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                     */
/* -------------------------------------------------------------------------- */

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Go", "TypeScript", "JavaScript", "SQL", "PHP", "Kotlin", "Java"],
  },
  {
    title: "Web Development",
    skills: ["Node.js", "Express.js", "React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Material UI", "Laravel"],
  },
  {
    title: "Tools & Databases",
    skills: ["MongoDB", "PostgreSQL", "GitHub", "Postman", "VS Code", "Android Studio", "Figma", "Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Decision Making", "Problem-Solving", "Time Management"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */

export type Service = {
  icon: IconType;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: BiCodeAlt,
    title: "Front-End Development",
    description:
      "Responsive, accessible, and fast interfaces built with React, Next.js, Tailwind CSS, and Material UI.",
  },
  {
    icon: BiServer,
    title: "Back-End Development",
    description:
      "Robust server-side applications and secure APIs using Go, Node.js, Express, and Laravel.",
  },
  {
    icon: BiData,
    title: "Database Engineering",
    description:
      "Designing and optimizing relational and NoSQL databases with PostgreSQL and MongoDB for scale.",
  },
  {
    icon: BiRocket,
    title: "Payments & Integrations",
    description:
      "Integrating payment gateways (Plaid, NowPayments, PayHere) and third-party services like Klaviyo & Shufti Pro.",
  },
  {
    icon: BiMobileAlt,
    title: "Mobile Development",
    description:
      "Native Android applications built with Kotlin and Android Studio for intuitive on-the-go experiences.",
  },
  {
    icon: BiPalette,
    title: "UI/UX Design",
    description:
      "Clean, user-centered designs prototyped in Figma that balance aesthetics with usability.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Guardo - Authentication SDK",
    description:
      "A production-ready authentication SDK for Node.js & Next.js apps, with secure auth, encryption, and token handling packaged for easy integration.",
    image: "/images/guardo.webp",
    tags: ["Node.js", "Next.js", "SDK", "Security"],
    link: "https://guardo.nadun.me",
    linkLabel: "Live Demo",
  },
  {
    title: "Leave Management System",
    description:
      "Leave management solution for the Ministry of Fisheries, Sri Lanka - role-based access, approval workflows, and PHPMailer email notifications.",
    image: "/images/p6.png",
    tags: ["PHP", "SQL", "PHPMailer"],
    link: "https://github.com/nadun-dilshan/Leave-Management-System",
  },
  {
    title: "Learning Management System",
    description:
      "Full-stack LMS built with the MERN stack, Tailwind CSS, and Material UI featuring authentication, role identification, and rich dashboards.",
    image: "/images/p1.png",
    tags: ["MERN", "Tailwind CSS", "Material UI"],
    link: "https://github.com/nadun-dilshan/LMS-System.git",
  },
  {
    title: "E-Commerce Platform",
    description:
      "MERN e-commerce app with JWT auth, product management, search, favorites, cart, purchases, store ratings, and availability checks.",
    image: "/images/p7.png",
    tags: ["MERN", "JWT", "Material UI"],
    link: "https://github.com/nadun-dilshan/dry-food-mart.git",
  },
  {
    title: "Zeylonia Marketplace",
    description:
      "Full-stack e-commerce marketplace for buying and selling, built with Next.js & TypeScript on the frontend and a Node.js / Express backend.",
    image: "/images/p10.png",
    tags: ["Next.js", "TypeScript", "Express"],
    link: "https://zeylonia.netlify.app/",
    linkLabel: "Live Demo",
  },
  {
    title: "Event Management System",
    description:
      "Web-based event management platform built with Java Servlets and SQL, featuring user authorization, role identification, and dashboards.",
    image: "/images/p3.png",
    tags: ["Java Servlet", "SQL", "JSP"],
    link: "https://github.com/nadun-dilshan/Online-Event-Management-System.git",
  },
  {
    title: "Job Portal - Android App",
    description:
      "Native Android job portal with seeker & employer registration, job applications, and employee search built with Kotlin in Android Studio.",
    image: "/images/p5.png",
    tags: ["Kotlin", "Android", "Mobile"],
    link: "https://github.com/nadun-dilshan/Quick-Job-Android-App-MAD",
  },
  {
    title: "Fuel Station Management",
    description:
      "Real-time fuel station management system with inventory tracking, sales analytics, and automated reporting built on the MERN stack.",
    image: "/images/p4.png",
    tags: ["MERN", "Analytics", "Inventory"],
    link: "https://github.com/nadun-dilshan/Fuel-Station-Management-System-ITP-Project.git",
  },
];

/* -------------------------------------------------------------------------- */
/*  Education & certifications                                                 */
/* -------------------------------------------------------------------------- */

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "BSc (Hons) in Information Technology - Specializing in Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2021 - 2026",
  },
];

export const certifications: string[] = [
  "SLIIT XTREME Hackathon 2.0 (2023) - 2nd Place",
  "Certificate in Python - University of Moratuwa, Sri Lanka",
  "Certificate in English - Cambridge College, Kandy",
];

/* -------------------------------------------------------------------------- */
/*  Contact channels                                                           */
/* -------------------------------------------------------------------------- */

export type ContactChannel = {
  label: string;
  icon: IconType;
  href: string;
};

export const contactChannels: ContactChannel[] = [
  { label: "WhatsApp", icon: FaWhatsapp, href: `https://wa.me/${profile.phoneRaw}` },
  { label: "Email", icon: FaEnvelope, href: `mailto:${profile.email}` },
  { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/KTDNadun" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/nadun-dilshan/" },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/nadun-dilshan" },
];

// Web3Forms access key (public, client-side submission key)
export const WEB3FORMS_ACCESS_KEY = "25bc1d08-e0aa-42af-84f5-84fc6803cd1a";
