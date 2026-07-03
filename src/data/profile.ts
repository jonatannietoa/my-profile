/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR THE CV
 * ─────────────────────────────────────────────────────────────────────────
 *  Everything the site renders comes from this file. Edit here to update
 *  the web + the printable PDF at once. No component changes needed.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  /** lucide-react icon name used in <Icon /> */
  icon: "mail" | "linkedin" | "github" | "globe" | "map";
}

export interface Role {
  title: string;
  period: string;
  /** e.g. "1 yr 2 mos" — optional supporting duration */
  duration?: string;
  location?: string;
  highlights: string[];
  /** compact tech tags shown under a role */
  stack?: string[];
}

export interface ExperienceItem {
  company: string;
  /** shown when a company groups several roles */
  companyMeta?: string;
  roles: Role[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  summary: string;
  /** short punchy lines rendered as an animated terminal intro */
  terminalLines: string[];
  contacts: ContactLink[];
  topSkills: string[];
  /** grouped skill matrix */
  skillGroups: { label: string; items: string[] }[];
  languages: { name: string; level: string }[];
  experience: ExperienceItem[];
  education: EducationItem[];
  awards: string[];
  publications: { title: string; url?: string }[];
  /** highlighted numbers for the "at a glance" strip */
  stats: { value: string; label: string }[];
}

export const profile: Profile = {
  name: "Jonatan Nieto Agis",
  headline:
    "Engineering Manager · Senior Software Engineer · Human-Driven AI Agents",
  location: "Barcelona, Catalonia, Spain",

  summary: `Agentic Senior Software Engineer with 10+ years building and leading software across the full stack — and, increasingly, building the AI systems that build software. I grew up as a backend-heavy product engineer (NestJS, Spring Boot with Java and Kotlin, Node/TypeScript, Rust) and today I spend much of my time designing multi-agent AI workflows: orchestration systems where specialized LLM agents plan, write code, run tests, and open pull requests across several repositories — always with a human in the loop for every merge.

Most recently I designed and built a multi-agent "development orchestrator": a team-lead agent decomposes a ticket, routes the work to per-layer coding agents (backend, frontend, mobile, infra), runs each one's test/lint gate, and ships reviewed, ready-to-merge PRs. I ported it onto LangGraph + LangSmith running on Anthropic's Claude models, with a model-by-role split (a stronger model for reasoning, a faster one for the token-heavy coding loop) and prompt caching that cut token cost by an order of magnitude while keeping output quality high.

What I care about as an engineer: shipping vertical slices, Tidy First (structure separate from behaviour), honest tests that are never silenced, end-to-end observability (every agent run traced and labelled), and treating AI as serious, cost-aware, safe engineering — not as a demo.`,

  terminalLines: [
    'const jonatan = await hire("Engineering Manager")',
    'jonatan.builds(["multi-agent AI", "full-stack products"])',
    "jonatan.stack // NestJS · Next.js · Vite · LangGraph · Rust(experimentation)",
    'jonatan.principle // "human in the loop for every merge"',
  ],

  contacts: [
    {
      label: "Email",
      value: "jonatannietoa@gmail.com",
      href: "mailto:jonatannietoa@gmail.com",
      icon: "mail",
    },
    {
      label: "LinkedIn",
      value: "in/jonatannietoa",
      href: "https://www.linkedin.com/in/jonatannietoa",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      value: "github.com/jonatannietoa",
      href: "https://github.com/jonatannietoa",
      icon: "github",
    },
    {
      label: "Location",
      value: "Barcelona, Spain",
      href: "https://maps.google.com/?q=Barcelona,Spain",
      icon: "map",
    },
  ],

  topSkills: [
    "Software Engineering",
    "Product Engineering",
    "GenAI Virtual Assistants",
  ],

  skillGroups: [
    {
      label: "AI / Agents",
      items: [
        "LangGraph",
        "LangSmith",
        "Anthropic / Claude API",
        "ReAct Agents",
        "Multi-Agent Orchestration",
        "Prompt Caching",
      ],
    },
    {
      label: "Backend",
      items: [
        "TypeScript / Node.js",
        "NestJS",
        "Java & Kotlin",
        "Spring Boot (Java / Kotlin)",
        "PostgreSQL & MongoDB",
        "Rust (experimentation)",
      ],
    },
    {
      label: "Frontend",
      items: ["Next.js", "React", "TypeScript"],
    },
    {
      label: "Cloud / DevOps",
      items: [
        "AWS Lambda",
        "AWS S3 / DynamoDB",
        "Serverless",
        "GitOps",
        "Kustomize",
        "ArgoCD",
      ],
    },
    {
      label: "Practices",
      items: [
        "Tidy First",
        "Vertical Slices",
        "Hexagonal Architecture",
        "CQRS",
        "DDD",
        "Event Sourcing",
      ],
    },
  ],

  languages: [
    { name: "Spanish", level: "Native or Bilingual" },
    { name: "Catalan", level: "Native or Bilingual" },
    { name: "English", level: "Professional Working" },
  ],

  experience: [
    {
      company: "Service Club ®",
      companyMeta: "8 mos",
      roles: [
        {
          title: "Engineering Manager",
          period: "Mar 2026 — Present",
          duration: "5 mos",
          location: "Barcelona",
          highlights: [
            "Leading the Perks vertical, contributing to ServiceClub's mission of transforming driver benefits, training and recruitment at scale.",
            "Leading hands-on to enhance development workflows, establish best practices, and mentor engineering teams with AI Orchestrators.",
          ],
        },
        {
          title: "Senior Software Engineer",
          period: "Dec 2025 — Mar 2026",
          duration: "4 mos",
          location: "Barcelona",
          highlights: [
            "Contributed to ServiceClub's mission of transforming driver training and recruitment at scale on the Academy and Jobs platform projects.",
            "Worked hands-on to enhance development workflows, establish best practices, and mentor engineering teams.",
            "Combined technical expertise with collaborative leadership to deliver robust, scalable solutions serving delivery companies and drivers worldwide.",
          ],
        },
      ],
    },
    {
      company: "Qualifyze",
      companyMeta: "2 yrs 7 mos",
      roles: [
        {
          title: "Software Engineering Captain",
          period: "Jun 2025 — Dec 2025",
          duration: "7 mos",
          location: "Spain",
          highlights: [
            "Led a pivotal project to establish and share a global database of Pharmaceutical Materials and Services, providing critical insights that enhanced Qualifyze's customers' audit capabilities.",
            "Leveraged AI Agents to enhance project delivery speed, reducing time-to-market for new services.",
            "Collaborated with cross-functional teams to ensure compliance and data quality of our audits.",
          ],
        },
        {
          title: "Senior Software Engineer",
          period: "Jun 2023 — Dec 2025",
          duration: "2 yrs 7 mos",
          location: "Spain",
          highlights: [
            "Spearheaded the development of key software features for a leading pharma audits company, ensuring high-quality code delivery.",
            "Mentored junior and mid developers, fostering a collaborative environment and enhancing team productivity.",
            "Led architectural decisions that balanced timely delivery with robust code quality.",
          ],
        },
      ],
    },
    {
      company: "TI MEDI",
      roles: [
        {
          title: "CTO",
          period: "Apr 2022 — May 2023",
          duration: "1 yr 2 mos",
          location: "Barcelona, Spain",
          highlights: [
            "Spearheaded the development of SPD software with seamless 3rd-party integrations, enhancing service delivery.",
            "Validated and executed the Tech Roadmap, ensuring adherence to best practices and architectural standards.",
            "Fostered a collaborative environment by simplifying complex technical concepts for stakeholders, bridging the gap between tech and business.",
          ],
        },
      ],
    },
    {
      company: "San Saru",
      roles: [
        {
          title: "CTO",
          period: "Jun 2018 — May 2022",
          duration: "4 yrs",
          location: "Barcelona Area, Spain",
          highlights: [
            "Spearheaded the development of a customer-centric ecosystem for San Saru's online store, enhancing user experience.",
            "Implemented scalable microservices using Node.js and Java on AWS Lambda, improving system performance.",
            "Integrated Shopify with a custom back-office application, streamlining operations and increasing efficiency.",
          ],
          stack: ["Node.js", "Java", "AWS Lambda", "Shopify"],
        },
      ],
    },
    {
      company: "Sage",
      companyMeta: "1 yr 2 mos",
      roles: [
        {
          title: "Sage Live Provisioning — Senior Software Engineer",
          period: "Nov 2017 — Jun 2018",
          duration: "8 mos",
          location: "Barcelona Area, Spain",
          highlights: [
            "Built provisioning services with a serverless architecture and secure token-based auth.",
          ],
          stack: [
            "Node.js",
            "Spring Boot",
            "AWS S3 / Lambda / DynamoDB",
            "Serverless",
            "JWT",
          ],
        },
        {
          title: "Sage Live — Senior Software Engineer",
          period: "May 2017 — Nov 2017",
          duration: "7 mos",
          location: "Barcelona Area, Spain",
          highlights: [
            "Salesforce platform engineering for Sage Live, aligning sales, accounting, banking, invoicing and payments with the Salesforce CRM.",
          ],
          stack: ["JavaScript", "Java", "Apex", "SOQL / SOSL", "Scrum"],
        },
      ],
    },
    {
      company: "Software Development",
      roles: [
        {
          title: "Freelance Software Developer",
          period: "Sep 2010 — Jun 2018",
          duration: "7 yrs 10 mos",
          location: "Mataró Area, Spain",
          highlights: [
            "Web development, Shopify integrations and custom Shopify apps for a range of clients.",
          ],
          stack: ["Spring Framework", "Java", "Shopify"],
        },
      ],
    },
    {
      company: "Grifols",
      roles: [
        {
          title: "R&D Software Engineer",
          period: "Apr 2016 — Apr 2017",
          duration: "1 yr 1 mo",
          location: "Barcelona Area, Spain",
          highlights: [
            "Software development of in-vitro diagnostic instrumentation.",
          ],
          stack: [
            "Java 1.8",
            "Spring Boot",
            "PostgreSQL",
            "Jenkins",
            "SonarQube",
          ],
        },
      ],
    },
    {
      company: "Telefónica",
      roles: [
        {
          title: "Analyst / Programmer Consultant",
          period: "Jul 2015 — Mar 2016",
          duration: "9 mos",
          location: "Barcelona Area, Spain",
          highlights: [
            "Backend development for telecom network management systems.",
          ],
          stack: [
            "Spring Framework",
            "MySQL / PostgreSQL",
            "RHEL",
            "CMIP / SNMP",
          ],
        },
      ],
    },
    {
      company: "Zhintek Consultoría Tecnológica SL",
      roles: [
        {
          title: "Software Developer",
          period: "Nov 2014 — Jun 2015",
          duration: "8 mos",
          location: "Masnou, Spain",
          highlights: [
            "Built backend services and data crawlers across Linux environments.",
          ],
          stack: ["Spring Framework", "Magento", "Python", "Linux"],
        },
      ],
    },
    {
      company: "Barnoba S.L.",
      roles: [
        {
          title: "Software Developer",
          period: "Sep 2013 — Nov 2014",
          duration: "1 yr 3 mos",
          location: "Mataró Area, Spain",
          highlights: [
            "PrestaShop module development and a SAGE–PrestaShop communication platform (C#).",
            "VMware Sphere control across virtual machines and network maintenance.",
          ],
          stack: ["PrestaShop", "C#", "VMware"],
        },
      ],
    },
  ],

  education: [
    {
      institution: "Universitat Politècnica de Catalunya (UPC)",
      degree: "Engineer's Degree, Computer Engineering",
      period: "2012 — 2016",
    },
    {
      institution: "Escola Pia Santa Anna, Mataró",
      degree: "Higher Grade in Applications Development, Computer Science",
      period: "2010 — 2012",
    },
  ],

  awards: ["Finisher — Titan Desert 2018", "Finisher — Titan Desert 2017"],

  publications: [
    {
      title:
        "Reducción de costes y rendimiento consistente con AWS Lambda en San Saru",
      url: "https://aws.amazon.com/es/blogs/aws-spanish/reduccion-de-costes-y-rendimiento-consistente-con-aws-lambda-en-san-saru/",
    },
  ],

  stats: [
    { value: "10+", label: "Years building software" },
    { value: "3×", label: "CTO / Eng. leadership roles" },
    { value: "10×", label: "Token cost cut on AI pipeline" },
    { value: "∞", label: "Humans in the loop" },
  ],
};
