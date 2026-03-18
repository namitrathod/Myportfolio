// ─── Portfolio Content ───────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit here — no need to touch any component files.

// Track signals displayed on project cards
export type ProjectTrack = 'Full-Stack' | 'Backend' | 'Frontend' | 'AI / Systems';

export interface Project {
  id: string;
  title: string;
  description: string;
  result: string;
  technologies: string[];
  track: ProjectTrack;       // What type of work this demonstrates
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ExperienceBullet {
  text: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  coursework: string[];
  awards: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    initials: string;
    role: string;
    tagline: string;
    sublines: string[];
    about: string[];
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
    resumeUrl: string;
    resumePreviewUrl?: string; // Optional
  };
  credibilityChips: string[];
  projects: Project[];
  experience: Experience[];
  skillGroups: SkillGroup[];
  education: Education;
  closingLine: string;
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Namit Rathod",
    initials: "NR",
    role: "Software Engineer",
    tagline: "",
    sublines: [
      "3+ years building enterprise SaaS — React/TypeScript UIs, FastAPI/Node.js backends, PostgreSQL and cloud infra.",
      "MS Computer Science, University of Houston. Experienced at Cognizant and ScriptChain Health.",
    ],
    about: [
      "I build complete features — from the API design to the React component to the monitoring dashboard. I'm comfortable owning the full stack, or going deep on either end.",
      "On the frontend: React, TypeScript, Angular, state management at scale, component architecture, and performance optimization. I've shipped UI for 1,000+ concurrent enterprise users.",
      "On the backend: FastAPI, Node.js, PostgreSQL, Redis, OAuth 2.0, async task pipelines with Celery. I've designed APIs, optimized slow queries, and built secure distributed systems.",
      "Recently I've been integrating AI into both layers — LLM-powered workflows, structured output pipelines, and telemetry-driven A/B testing. That's a differentiator, not my only skill.",
    ],
    email: "namitrathod07@gmail.com",
    phone: "+1-346-434-9556",
    linkedin: "https://www.linkedin.com/in/namit-rathod",
    github: "https://github.com/namitrathod",
    location: "Houston, TX (Open to Relocation · Nationwide)",
    resumeUrl: "/Namit_Rathod_Resume.pdf",
    resumePreviewUrl: "https://rxresu.me/namit.rathod07/namit-rathod",
  },

  credibilityChips: [
    "3+ yrs industry",
    "ScriptChain Health",
    "Cognizant Alumni",
    "MS CS — UH",
    "Frontend · Backend · Full-Stack",
    "Open to Relocation",
  ],

  projects: [
    // ── Featured ──────────────────────────────────────────────────────────────
    {
      id: "hiresphere",
      title: "HireSphere — Recruiter Platform",
      description:
        "Full-stack recruiter SaaS: React + Next.js dashboard with pagination, memoized rendering, and Context API state. FastAPI backend with PostgreSQL, Redis task queue (Celery), and LLM-powered resume parsing with structured output validation.",
      result: "Dashboard handles 1,000+ candidate profiles without UI lag; LLM token cost reduced 30%, page load improved 40%.",
      technologies: ["Next.js", "React", "TypeScript", "Context API", "FastAPI", "PostgreSQL", "Redis", "Celery"],
      track: "Full-Stack",
      githubUrl: "https://github.com/namitrathod",
      liveUrl: "",
      featured: true,
    },
    {
      id: "capstone-healthcare",
      title: "Healthcare Clinic Platform",
      description:
        "Modernized a legacy ASP.NET MVC system into a React/Next.js + TypeScript frontend with component-driven architecture. Redesigned RESTful API contracts in ASP.NET, separated business logic from data access, and added Azure structured logging for production observability.",
      result: "Noticeably faster UI interactions after render optimization; integration errors reduced during end-to-end testing.",
      technologies: ["React", "Next.js", "TypeScript", "ASP.NET MVC", "REST APIs", "PostgreSQL", "Azure"],
      track: "Full-Stack",
      githubUrl: "https://github.com/namitrathod",
      liveUrl: "",
      featured: true,
    },
    {
      id: "fair-kv-cache",
      title: "Fair-KV Cache — LLM Serving",
      description:
        "Backend system: per-tenant KV quota enforcement, elastic borrowing, and reclaim-on-activation for multi-tenant LLM inference. FastAPI REST service with Prometheus metrics, Docker deployment, and benchmarks across LRU, strict-quota, and FairKV eviction policies.",
      result: "Victim-tenant P95 latency stable under adversarial burst; evictions near zero across workloads.",
      technologies: ["Python", "FastAPI", "KV Cache", "LRU/LFU/ARC", "Docker", "Prometheus", "OpenAI API"],
      track: "Backend",
      githubUrl: "https://github.com/namitrathod",
      liveUrl: "",
      featured: true,
    },
    // ── Additional ────────────────────────────────────────────────────────────
    {
      id: "ai-form-assistant",
      title: "AI Form Automation Agent",
      description:
        "Python + Playwright automation agent: GPT-4o Vision detects form fields and infers input types; deterministic action execution (click, type, select, scroll). Structured validation pipelines and human-in-the-loop confirmation prevent hallucinated outputs.",
      result: "End-to-end form automation with trustworthy AI-human interaction and zero unconfirmed destructive actions.",
      technologies: ["GPT-4o Vision", "Playwright", "Python", "FastAPI", "Structured Outputs"],
      track: "AI / Systems",
      githubUrl: "https://github.com/namitrathod",
      liveUrl: "",
      featured: false,
    },
    {
      id: "meeting-minutes",
      title: "Meeting Minute Generation",
      description:
        "End-to-end pipeline: Whisper ASR → GPT-4o summarization → structured JSON/Markdown output. Implemented 4-bit NF4 quantization on Llama-3.2-3B for local inference on GPU-constrained hardware with custom prompt engineering framework.",
      result: "Manual transcription effort reduced 90%; high accuracy in action-item extraction and entity recognition.",
      technologies: ["Whisper", "GPT-4o", "Llama-3.2", "PyTorch", "NF4 Quantization"],
      track: "AI / Systems",
      githubUrl: "https://github.com/namitrathod",
      liveUrl: "",
      featured: false,
    },
    {
      id: "lms",
      title: "Learning Management System",
      description:
        "Java middleware with strict type-safe schema validation for unstructured LLM outputs. Shadow Database testing for zero-downtime schema changes. Adversarial defense prompt strategy to eliminate hallucinations on the learner dashboard.",
      result: "99.9% uptime; LLM inference cost reduced 30% via client-side context pruning.",
      technologies: ["Java", "Spring Boot", "LLM Integration", "JSON Schema", "Shadow DB Testing"],
      track: "Backend",
      githubUrl: "https://github.com/namitrathod",
      liveUrl: "",
      featured: false,
    },
  ],

  experience: [
    {
      id: "scriptchain",
      company: "ScriptChain Health",
      role: "Software Engineer Intern",
      period: "Jan 2026 – Present",
      location: "California, US (Remote)",
      bullets: [
        "Architected a Backend-For-Frontend (BFF) pattern in FastAPI to parse longitudinal FHIR medical records, reducing network JSON payloads by 80% and achieving O(1) rendering speeds on Angular dashboards.",
        "Optimized high-concurrency healthcare analytics UI in React + TypeScript — reduced rendering latency by 15% through improved component composition, memoization strategies, and state isolation.",
        "Integrated AI-driven food and exercise prediction services; exposed structured inference APIs delivering real-time recommendations to frontend dashboards.",
        "Implemented OAuth 2.0 and JWT-based authentication across distributed services; secured patient data access across clinical workflows.",
        "Designed asynchronous background workflows using Celery and Redis for heavy patient dataset queries and EHR sync, ensuring high availability under concurrent clinical usage.",
        "Instrumented services with Azure Application Insights for structured logging, A/B testing of UI layouts, and production telemetry — improving issue detection and resolution time.",
        "Integrated automated testing (Jest, React Testing Library) in a HIPAA-compliant environment; resolved 10+ critical UI defects during UAT using GitHub Copilot-assisted test generation.",
      ],
      stack: ["React", "TypeScript", "Angular", "FastAPI", "Python", "AWS (DynamoDB, SES, S3)", "Celery", "Redis", "Azure App Insights", "JWT", "OAuth 2.0", "Jest"],
    },
    {
      id: "cognizant-swe",
      company: "Cognizant",
      role: "Software Engineer",
      period: "Dec 2022 – Jul 2024",
      location: "Bengaluru, India",
      bullets: [
        "Led micro-frontend migration from a legacy monolithic UI to React + TypeScript, improving maintainability by 30% and enabling 4+ independent feature deployments per release cycle.",
        "Refactored component state boundaries in a high-traffic enterprise app (1,000+ concurrent users), reducing average page interaction latency by ~30%.",
        "Architected reusable Fluent UI design-system components across business units, reducing duplicate UI code by 25% and accelerating cross-team development velocity.",
        "Reduced average query latency by 30% by redesigning PostgreSQL schemas with advanced indexing and Redis caching for backend services handling millions of daily requests.",
        "Integrated OAuth 2.0 / JWT role access control, reducing unauthorized access incidents by 40% across financial and retail enterprise clients.",
        "Enhanced GitHub Actions CI/CD pipelines with automated validation and testing, reducing deployment-related errors by 20%.",
        "Led the Buddy Mentor program — structured weekly technical mentorship and performance feedback for 5+ interns.",
      ],
      stack: ["React", "TypeScript", "Angular", "Node.js", "Java (Spring Boot)", "PostgreSQL", "Redis", "OAuth 2.0", "JWT", "GitHub Actions", "Fluent UI"],
    },
    {
      id: "cognizant-intern",
      company: "Cognizant",
      role: "Full-Stack Engineer Intern",
      period: "Jan 2022 – Nov 2022",
      location: "Bengaluru, India",
      bullets: [
        "Built a React admin dashboard for 20+ customer support agents with Node.js API endpoints featuring pagination and search filters on PostgreSQL.",
        "Reduced user profile query execution from 3.2s to under 300ms by implementing composite indexes — fix reviewed and deployed to production.",
        "Implemented JWT + bcrypt authentication in Node.js backend; improved platform security and reduced login-related issues.",
        "Built type-safe React components, role-based UI access controls, and CI/CD pipelines with GitHub Actions — reduced bug resolution time by 25% during critical release cycles.",
      ],
      stack: ["React", "Angular", "Node.js", "PostgreSQL", "JWT", "bcrypt", "GitHub Actions", "REST APIs"],
    },
  ],

  skillGroups: [
    {
      category: "Frontend",
      skills: ["React", "Next.js (App Router)", "TypeScript", "Angular", "Redux Toolkit", "Zustand", "Context API", "RxJS", "Tailwind CSS", "Fluent UI", "Web Vitals", "A11y / WCAG"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "FastAPI", "Python", "Java (Spring Boot)", "Express.js", "REST APIs", "GraphQL", "OAuth 2.0", "JWT", "Celery", "BFF Pattern", "API Versioning"],
    },
    {
      category: "Data & Infrastructure",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "AWS (S3, DynamoDB, SES)", "Docker", "Kubernetes", "Azure", "GitHub Actions", "CI/CD", "Structured Logging"],
    },
    {
      category: "AI & LLM",
      skills: ["GPT-4o", "LangChain", "Prompt Engineering", "Structured Outputs", "RAG", "Tool Calling", "Whisper ASR", "PyTorch", "Hugging Face", "Model Quantization (NF4)"],
    },
  ],

  education: {
    institution: "University of Houston",
    degree: "Master of Science in Computer Science",
    period: "Aug 2024 – May 2026",
    location: "Houston, TX",
    coursework: ["Design & Analysis of Algorithms", "Artificial Intelligence", "Generative AI", "Database Management Systems"],
    awards: ["Best Student Event of the Year"],
  },

  closingLine: "Available for full-time roles starting May 2026. Houston, TX based — open to relocation nationwide.",
};
