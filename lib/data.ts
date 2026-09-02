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
  avatar: "/images/nadun-dilshan.webp",
  aboutImage: "/images/nadun-dilshan-software-engineer.webp",
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
      "Developed and maintained scalable backend microservices using Go, PostgreSQL, Kafka, GraphQL, and Docker for enterprise iGaming and compliance platforms.",
      "Built full-stack features using Go, Node.js, Next.js, React, and TypeScript, delivering secure and high-performance customer-facing applications.",
      "Implemented KYC, AML, and compliance workflows by integrating Shufti Pro identity verification and customer risk management systems.",
      "Integrated multiple payment providers including Plaid, LinkMoney, NowPayments, and ACH banking services to support secure deposit and withdrawal flows.",
      "Designed event-driven architectures with Kafka, implementing audit logging, asynchronous processing, webhook handling, and distributed event consumers.",
      "Developed multi-tenant services with role-based authorization, secure APIs, and scalable data models for enterprise SaaS platforms.",
      "Improved system reliability through automated testing, bug fixing, performance optimization, and production issue investigation.",
      "Collaborated in Agile Scrum teams, participating in sprint planning, code reviews, architecture discussions, and cross-functional feature delivery.",
    ],
  },
  {
    role: "Intern Software Engineer",
    company: "BotCalm (Pvt) Ltd",
    period: "Feb 2025 - Aug 2025",
    points: [
      "Developed and maintained full-stack web applications using Node.js, Express.js, Next.js, React, MongoDB, and PostgreSQL.",
      "Built REST APIs and responsive frontend interfaces for iGaming platforms and internal business applications.",
      "Implemented reusable UI components, optimized backend queries, and resolved production issues to improve application performance.",
      "Worked with Git, Postman, Docker, and modern development workflows in a collaborative Agile environment.",
      "Participated in sprint planning, daily stand-ups, testing, and code reviews while delivering new features and bug fixes.",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Self-Employed",
    period: "Jun 2022 - Present",
    points: [
      "Designed and developed custom full-stack web applications using Next.js, React, Node.js, Express.js, MongoDB, and PostgreSQL.",
      "Built business management systems, booking platforms, and client portals tailored to real-world business requirements.",
      "Integrated secure online payment gateways including PayHere for seamless online transactions.",
      "Designed secure authentication systems using JWT, role-based access control, and API-driven architectures.",
      "Managed complete software development lifecycle from requirement gathering and UI design to deployment and maintenance.",
      "Collaborated directly with clients remotely and on-site, providing technical consultation, progress updates, and ongoing support.",
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
  /** Descriptive alt text - used for accessibility and Google Images SEO. */
  imageAlt: string;
  tags: string[];
  link: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Sellora - WhatsApp AI Commerce",
    description:
      "Multi-tenant SaaS that turns WhatsApp conversations into sales with multilingual AI product discovery, order taking, stock control, and merchant storefronts.",
    image: "/images/sellora-whatsapp-ai-commerce.webp",
    imageAlt:
      "Sellora WhatsApp AI commerce platform for Sri Lankan businesses - product overview",
    tags: ["Next.js", "TypeScript", "AI", "WhatsApp"],
    link: "https://sellora.nadun.me",
    linkLabel: "Live Demo",
  },
  {
    title: "Guardo - Authentication SDK",
    description:
    "A production-ready authentication SDK for Node.js & Next.js apps, with secure auth, encryption, and token handling packaged for easy integration.",
    image: "/images/guardo-authentication-sdk.webp",
    imageAlt:
    "Guardo authentication SDK for Node.js and Next.js by Nadun Dilshan - landing page screenshot",
    tags: ["Node.js", "Next.js", "SDK", "Security"],
    link: "https://guardo.nadun.me",
    linkLabel: "Live Demo",
  },
  {
    title: "Leave Management System",
    description:
    "Leave management solution for the Ministry of Fisheries, Sri Lanka - role-based access, approval workflows, and PHPMailer email notifications.",
    image: "/images/leave-management-system.webp",
    imageAlt:
    "Leave management system built for the Ministry of Fisheries Sri Lanka - dashboard screenshot",
    tags: ["PHP", "SQL", "PHPMailer"],
    link: "https://github.com/nadun-dilshan/Leave-Management-System",
  },
  {
    title: "Learning Management System",
    description:
    "Full-stack LMS built with the MERN stack, Tailwind CSS, and Material UI featuring authentication, role identification, and rich dashboards.",
    image: "/images/learning-management-system.webp",
    imageAlt:
    "MERN stack learning management system with dashboards - web app screenshot",
    tags: ["MERN", "Tailwind CSS", "Material UI"],
    link: "https://github.com/nadun-dilshan/LMS-System.git",
  },
  {
    title: "Zeylonia Marketplace",
    description:
    "Full-stack e-commerce marketplace for buying and selling, built with Next.js & TypeScript on the frontend and a Node.js / Express backend.",
    image: "/images/zeylonia-marketplace.webp",
    imageAlt:
    "Zeylonia online marketplace built with Next.js and TypeScript - homepage screenshot",
    tags: ["Next.js", "TypeScript", "Express"],
    link: "https://zeylonia.netlify.app/",
    linkLabel: "Live Demo",
  },
  {
    title: "DOODLZ - Web3 Token Site",
    description:
      "A playful, illustration-led Web3 concept with an original character system, collection explorer, rarity views, and an interactive demo mint experience.",
    image: "/images/doodlz-web3-token-site.png",
    imageAlt:
      "DOODLZ colorful Web3 token website with original illustrated characters",
    tags: ["Next.js", "TypeScript", "Web3", "Motion"],
    link: "https://demo.doodlz.nadun.me",
    linkLabel: "Live Demo",
  },
  {
    title: "Event Management System",
    description:
      "Web-based event management platform built with Java Servlets and SQL, featuring user authorization, role identification, and dashboards.",
    image: "/images/event-management-system.webp",
    imageAlt:
      "Event management platform built with Java Servlets - event listing screenshot",
    tags: ["Java Servlet", "SQL", "JSP"],
    link: "https://github.com/nadun-dilshan/Online-Event-Management-System.git",
  },
  {
    title: "Job Portal - Android App",
    description:
      "Native Android job portal with seeker & employer registration, job applications, and employee search built with Kotlin in Android Studio.",
    image: "/images/job-portal-android-app.webp",
    imageAlt:
      "Android job portal app built with Kotlin - mobile app screens",
    tags: ["Kotlin", "Android", "Mobile"],
    link: "https://github.com/nadun-dilshan/Quick-Job-Android-App-MAD",
  },
  {
    title: "Fuel Station Management",
    description:
      "Real-time fuel station management system with inventory tracking, sales analytics, and automated reporting built on the MERN stack.",
    image: "/images/fuel-station-management.webp",
    imageAlt:
      "Fuel station management system with sales analytics - dashboard screenshot",
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
