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
      "3+ years building scalable enterprise SaaS — from high-performance frontend architectures to robust, distributed backend systems.",
      "MS Computer Science, University of Houston. Experienced at Cognizant and ScriptChain Health.",
    ],
    about: [
      "I don't just write code; I own the lifecycle of a feature. My journey started with handling scale for 1,000+ concurrent users at Cognizant, where I learned the discipline of enterprise-grade systems. At ScriptChain Health, I'm applying that discipline to the edge of AI—building secure, HIPAA-compliant patient experiences that turn complex medical data into actionable insights.",
      "On the frontend: I focus on performance as a product feature. I've spent years optimizing React and Angular UIs to ensure that even at enterprise scale, the interaction remains instantaneous. I bridge the gap between complex design systems and technical feasibility.",
      "On the backend: I build for resilience. Whether I'm engineering high-scale microservices in Spring Boot and Java, architecting decoupled .NET Core Web APIs, or building high-performance services in FastAPI and Node.js, I ensure that systems remain secure, validated, and performant under heavy production pressure.",
      "Lately, I've been integrating LLMs into production workflows—not as a novelty, but as a tool to solve unstructured data problems. I focus on structured output validation, cost reduction, and observability.",
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
      id: "settlement-engine",
      title: "High-Throughput Settlement Engine",
      description:
        "Payment systems require extreme reliability and speed. I engineered this engine using Java 21 Virtual Threads and Spring Boot 3.2 to handle high-concurrency financial transactions. It features a distributed idempotency layer with Redis, a self-healing concurrency handler with Spring Retry (@Version), and an event-driven workflow using Apache Kafka.",
      result: "Benchmarked at 1,000+ RPS with 100% success rate via Gatling; zero 'double-charge' incidents ensured by sub-millisecond Redis idempotency intercepts.",
      technologies: ["Java 21", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "OpenTelemetry", "Gatling", "Docker"],
      track: "Backend",
      githubUrl: "https://github.com/namitrathod/High-Throughput-Settlement-Engine",
      liveUrl: "",
      featured: true,
    },
    {
      id: "hiresphere",
      title: "HireSphere — Recruiter Platform",
      description:
        "Recruiting is a data problem. I built HireSphere to turn messy, unstructured PDF resumes into validated structured data using LLMs. It features a Next.js dashboard with memoized rendering and a FastAPI backend with Redis task queues for high-throughput processing.",
      result: "Dashboard handles 1,000+ candidate profiles without UI lag; LLM token cost reduced 30%, page load improved 40%.",
      technologies: ["Next.js", "React", "TypeScript", "Context API", "FastAPI", "PostgreSQL", "Redis", "Celery"],
      track: "Full-Stack",
      githubUrl: "https://github.com/namitrathod",
      liveUrl: "",
      featured: false,
    },
    {
      id: "capstone-healthcare",
      title: "Healthcare Clinic Platform (Capstone Project)",
      description:
        "Bridging legacy systems to modern standards. I modernized a legacy ASP.NET healthcare system by architecting an entirely new React frontend and a decoupled .NET Core Web API, significantly improving UI speed and reducing integration errors.",
      result: "40% faster frontend feature iterations; noticeably faster UI interactions after render optimization.",
      technologies: ["React", "Next.js", "TypeScript", ".NET Core Web API", "ASP.NET MVC", "PostgreSQL", "Azure"],
      track: "Full-Stack",
      githubUrl: "", // Removed as requested
      liveUrl: "",
      featured: true,
    },
    {
      id: "fair-kv-cache",
      title: "Fair-KV Cache — LLM Serving",
      description:
        "AI scalability is about fairness. I engineered a backend system to enforce KV quotas for multi-tenant LLM inference, ensuring that bursty workloads from one tenant don't degrade performance for others. Built with FastAPI and monitored with Prometheus.",
      result: "Victim-tenant P95 latency stable under adversarial burst; evictions near zero across workloads.",
      technologies: ["Python", "FastAPI", "KV Cache", "LRU/LFU/ARC", "Docker", "Prometheus", "OpenAI API"],
      track: "Backend",
      githubUrl: "https://github.com/namitrathod/FairKV",
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
      githubUrl: "https://github.com/namitrathod/AI-Form-Automation-Assistant",
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
      githubUrl: "https://github.com/namitrathod/LMS",
      liveUrl: "",
      featured: false,
    },
    {
      id: "email-subscription",
      title: "Modern Email Subscription Platform",
      description:
        "Engineered a production-ready subscription engine focusing on data integrity and automated user engagement. Built with Next.js and TypeScript, it features a robust backend for capturing user intent and automating transactional workflows.",
      result: "Integrated MySQL connection pooling and Nodemailer via Mailtrap, ensuring 100% email delivery verification and secure data handling in a modular App Router architecture.",
      technologies: ["Next.js", "TypeScript", "MySQL", "Node.js", "Nodemailer", "Tailwind CSS"],
      track: "Full-Stack",
      githubUrl: "https://github.com/namitrathod/email-system",
      liveUrl: "",
      featured: false,
    },
    {
      id: "cabgo",
      title: "CabGo — Ride-Hailing Ecosystem",
      description:
        "Architected a high-concurrency MERN stack application for real-time ride-hailing. The platform features low-latency, bi-directional communication between drivers and riders, optimized for mobile-first user experiences.",
      result: "Implemented real-time event streaming via Socket.io for instantaneous ride requests and live location tracking; secured multi-role workflows with JWT and optimized asset handling with Cloudinary.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary", "Zustand"],
      track: "Full-Stack",
      githubUrl: "https://github.com/namitrathod/cabgo",
      liveUrl: "",
      featured: false,
    },
    {
      id: "ai-brochure-builder",
      title: "AI Brochure Generation Engine",
      description:
        "Developed an automated intelligence pipeline that transforms raw corporate website data into professionally synthesized marketing brochures using Large Language Models.",
      result: "Engineered a robust web-scraping architecture with BeautifulSoup; leveraged OpenAI API for structured content synthesis across HTML, PDF, and Markdown formats with zero manual intervention.",
      technologies: ["Python", "OpenAI API", "BeautifulSoup4", "Requests", "Pandas", "LLM Orchestration"],
      track: "AI / Systems",
      githubUrl: "https://github.com/namitrathod/brochure_builder",
      liveUrl: "",
      featured: false,
    },
    {
      id: "distributed-job-system",
      title: "Distributed Job Processing System",
      description:
        "Designed and built a distributed job processing system in Go processing 100K+ asynchronous tasks with priority scheduling and scalable worker pools. Architected a Kafka-based task pipeline for reliable delivery and automatic load distribution; implemented retry backoff, dead-letter queues, and idempotent execution for fault tolerance.",
      result: "Reduced state lookup latency by 60% with Redis caching; deployed on Kubernetes with autoscaling policies and integrated Prometheus/Grafana for real-time observability.",
      technologies: ["Go", "Kafka", "Redis", "Kubernetes", "Prometheus", "Grafana", "Docker"],
      track: "Backend",
      githubUrl: "https://github.com/namitrathod",
      liveUrl: "",
      featured: true,
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
        "Engineered high-throughput microservices using Spring Boot and Java, optimizing PostgreSQL schemas and Redis caching for services handling millions of daily requests with sub-300ms latency.",
        "Led micro-frontend migration from a legacy monolithic UI to React + TypeScript, improving maintainability by 30% and enabling 4+ independent feature deployments per release cycle.",
        "Refactored component state boundaries in a high-traffic enterprise app (1,000+ concurrent users), reducing average page interaction latency by ~30%.",
        "Architected reusable Fluent UI design-system components across business units, reducing duplicate UI code by 25% and accelerating cross-team development velocity.",
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
      skills: ["Go", "Node.js", "FastAPI", "Python", "Java (Spring Boot)", "Express.js", "REST APIs", "GraphQL", "OAuth 2.0", "JWT", "Celery", "BFF Pattern", "API Versioning"],
    },
    {
      category: "Data & Infrastructure",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "MySQL", "AWS (S3, DynamoDB, SES)", "Docker", "Kubernetes", "Azure", "GitHub Actions", "OpenTelemetry", "CI/CD", "Structured Logging"],
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
