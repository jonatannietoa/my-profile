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
  /** what I'm after in the next role, rendered under About */
  lookingFor: { title: string; items: string[] };
}

export const profile: Profile = {
  name: "Jonatan Nieto Agis",
  headline: "Senior Software Engineer · Pragmatic AI Systems",
  location: "Barcelona, Catalonia, Spain",

  summary: `Hands-on senior engineer, 10+ years across the full stack, these days leading a product vertical without stepping away from the code. Pragmatism first: I pick the smallest thing that solves the problem and can still be maintained by whoever inherits it — vertical slices, boring tech where boring works, structure kept separate from behaviour, tests that are never silenced. Backend is home (NestJS, Spring Boot with Java and Kotlin, Node/TypeScript, Python), and for the last couple of years I've been pointing that same discipline at AI systems.

Concretely, what I build with agents: a multi-agent development orchestrator on LangGraph + LangSmith — a team-lead agent scopes a ticket, one coding agent per repo writes code and tests, a PR only opens if that repo's gate is green, and a human merges every single time. Internal assistants built on RAG — semantic search over company documentation, natural language to SQL against the warehouse — delivered where people already work, in Slack and Teams. Ingestion pipelines where the LLM answers the one question it is actually good at and deterministic rules make the decision. And tools and plugins for agent harnesses (LangChain/LangGraph, DeepSeek Harness), with the domain in configuration and the agent loop kept generic.

The opinion underneath all of it: agents are software. Clean boundaries, ports and adapters, one responsibility per node, prompts versioned like code, cost and latency as first-class metrics, every run traced. A prompt is not a substitute for a design. Most of what makes an agent trustworthy is ordinary engineering — the model is a component, not the architecture.

Where I'm still growing: my agent work has been internal — orchestration, developer workflow, BI, back-office — solving my own company's problems, with colleagues as the users. I haven't yet owned an AI capability that ships in the product to end customers, and that is precisely the next step I'm looking for.`,

  terminalLines: [
    'const jonatan = await hire("Senior Software Engineer")',
    'jonatan.principle // "pragmatism first — smallest thing that solves it"',
    'jonatan.builds(["agents on LangGraph", "RAG assistants", "full-stack products"])',
    'jonatan.leads(aVertical) // and still opens pull requests',
    'jonatan.rule // "the model is a component, not the architecture"',
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
        "LangGraph / LangChain",
        "LangSmith (tracing & evals)",
        "Anthropic / Claude API",
        "RAG (pgvector, ChromaDB)",
        "NL → SQL over the warehouse",
        "Agent tools & plugins (MCP, DeepSeek Harness)",
        "ReAct Agents",
        "Multi-Agent Orchestration",
        "Prompt caching & cost control",
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
        "Human-in-the-loop by design",
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
    { value: "3×", label: "Teams led, hands still on the code" },
    { value: "10×", label: "Token cost cut on AI pipeline" },
    { value: "0", label: "Agent PRs merged without a human" },
  ],

  lookingFor: {
    title: "What I'm looking for",
    items: [
      "Pragmatic teams — small slices, real feedback, no ceremony for its own sake.",
      "Products where AI is part of what the customer buys, not a side experiment.",
      "Owning an AI capability end to end: evals, cost, latency, failure modes, the unglamorous parts.",
      "Room to keep the architecture clean while the field keeps moving underneath it.",
    ],
  },
};
