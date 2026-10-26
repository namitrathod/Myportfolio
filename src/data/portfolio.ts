// ─── Portfolio Content ───────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit here. No need to touch any component files.

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
    role: "Software Engineer, Applied AI",
    tagline: "",
    sublines: [
      "Building production-ready generative AI applications, agentic workflows, and reliable data pipelines.",
      "M.S. Computer Science, University of Houston-Clear Lake. Currently a Software Engineer, Applied AI at NasaFitness LLC.",
    ],
    about: [
      "I'm a Software Engineer passionate about building scalable, production-ready applications and integrating AI into real-world products. My experience spans full-stack development, backend engineering, Generative AI, and machine learning, with a focus on delivering reliable systems that solve practical problems.",
      "I specialize in developing full-stack applications using C#/.NET, React, TypeScript, JavaScript, Python, Node.js, and Express.js. My work includes modernizing legacy applications, designing RESTful APIs, optimizing database performance, building reusable frontend components, and developing cloud-native services. I've also worked on diagnosing complex production issues, improving application reliability, and streamlining deployments.",
      "In AI/LLM engineering, I've built retrieval-augmented generation (RAG) and GraphRAG pipelines, integrated LLM-powered capabilities into existing applications, and developed agentic workflows using LangChain, LangGraph, and FastAPI. My experience includes vector embeddings, semantic search, graph-based retrieval, and human-in-the-loop validation to make AI-generated outputs more reliable and contextually relevant.",
      "I've also worked on production data pipelines and machine learning workflows, integrating structured and unstructured data, preparing model-training datasets, and evaluating AI systems using PyTorch. I have hands-on experience with Azure, AWS, Docker, GitHub Actions, CI/CD, SQL Server, and PostgreSQL to build, deploy, and maintain applications in production environments.",
      "What excites me most is the intersection of software engineering and artificial intelligence, building systems that go beyond prototypes and deliver meaningful value through thoughtful architecture, performance optimization, and reliable AI integration.",
      "I'm always interested in connecting with engineers and teams working on Software Engineering, Full-Stack Development, Applied AI, LLM Engineering, and scalable backend systems.",
    ],
    email: "namitrathod07@gmail.com",
    phone: "+1-346-434-9556",
    linkedin: "https://www.linkedin.com/in/namit-rathod",
    github: "https://github.com/namitrathod",
    location: "USA · Open to relocate",
    resumeUrl: "/Namit_Rathod_Resume.pdf",
    resumePreviewUrl: "https://rxresu.me/namit.rathod07/namit-rathod",
  },

  credibilityChips: [
    "NasaFitness",
    "Cognizant",
    "MS CS, UHCL",
    "Software Engineer · Applied AI",
    "Open to relocate",
  ],

  projects: [
    {
      id: "inbox-sense",
      title: "InboxSense - AI Email Intelligence",
      description:
        "Architected a Semantic Email Intelligence platform using Next.js 14 and Gemini 2.5. Engineered a robust RAG pipeline with ChromaDB to transform raw Gmail data into a searchable knowledge base, featuring 3072-dim vector embeddings and localized storage for privacy.",
      result: "Reduced email noise by 70% via intelligent filtering; implemented a background sync engine with exponential backoff for stable indexing of thousands of emails.",
      technologies: ["Next.js 14", "Gemini 2.5", "ChromaDB", "Prisma", "Tailwind CSS", "Docker", "OAuth 2.0"],
      track: "AI / Systems",
      githubUrl: "https://github.com/namitrathod/InboxSense",
      liveUrl: "",
      featured: true,
    },
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
      title: "HireSphere - Recruiter Platform",
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
      title: "Fair-KV Cache - LLM Serving",
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
      title: "CabGo - Ride-Hailing Ecosystem",
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
      id: "nasafitness-swe",
      company: "NasaFitness LLC · Full-time",
      role: "Software Engineer, Applied AI",
      period: "Jun 2026 - Present · 5 mos",
      location: "Remote",
      bullets: [
        "Built and shipped 3+ production healthcare workflows using React, TypeScript, C#/.NET 8, and SQL Server, owning full-stack feature development, REST API integration, and backend business logic.",
        "Modernized 2 legacy ASP.NET Web Forms modules into React frontends and independently deployable .NET services, reducing deployment time by 50% and enabling more flexible production releases.",
        "Reduced average API response time by 35% across core healthcare workflows through SQL query optimization, backend refactoring, and improved data-access patterns.",
        "Integrated LLM-powered capabilities into healthcare application workflows using Python, FastAPI, RAG, and LangChain, connecting retrieval-backed AI responses with existing .NET APIs and React interfaces.",
        "Diagnosed and resolved a production memory leak affecting 6 interconnected services, using Azure Application Insights, distributed tracing, and heap profiling to identify improper asynchronous resource disposal and improve application stability.",
      ],
      stack: ["C# / .NET 8", "React", "TypeScript", "SQL Server", "ASP.NET", "Python", "FastAPI", "RAG", "LangChain", "Azure Functions", "Azure Application Insights"],
    },
    {
      id: "nasafitness-intern",
      company: "NasaFitness LLC · Internship",
      role: "Software Engineer",
      period: "Jan 2026 - Jun 2026 · 6 mos",
      location: "Houston, Texas, United States",
      bullets: [
        "Built and productionized a healthcare data pipeline integrating 3 clinical data sources (patient transcripts, questionnaires, and EHR records), automating ingestion, normalization, and validation for downstream AI processing.",
        "Engineered a GraphRAG retrieval pipeline using Python, LangChain, vector embeddings, and graph-based search to support 2 personalized AI recommendation workflows for nutrition and exercise.",
        "Developed LangGraph-based LLM workflows with 3 validation stages (retrieval verification, response post-processing, and clinician-in-the-loop review) to improve reliability of AI-generated healthcare recommendations.",
        "Prepared reusable machine-learning datasets and implemented model evaluation workflows using PyTorch, supporting experimentation and quality assessment of AI-generated outputs.",
        "Containerized and deployed Python/FastAPI services using Docker, AWS, and GitHub Actions, implementing 2 automated CI quality gates and structured logging to improve release reliability.",
      ],
      stack: ["Python", "FastAPI", "SQL", "Generative AI", "LangChain", "LangGraph", "GraphRAG", "PyTorch", "Docker", "AWS", "GitHub Actions"],
    },
    {
      id: "cognizant-pa",
      company: "Cognizant · Full-time",
      role: "Programming Analyst",
      period: "Mar 2023 - Jul 2024 · 1 yr 5 mos",
      location: "On-site",
      bullets: [
        "Built and delivered 3+ full-stack application features using React, Node.js, and Express.js, integrating responsive frontend interfaces with REST APIs to streamline business workflows.",
        "Developed and integrated 8+ REST API endpoints using Node.js, Express.js, and PostgreSQL, implementing request validation, error handling, and database operations to support reliable application functionality.",
        "Improved application response times by 25% through PostgreSQL query optimization, React component refactoring, and more efficient API data retrieval.",
        "Developed 10+ reusable React components and collaborated on feature testing, bug fixes, and code reviews across multiple Agile sprints, reducing duplicate UI implementation and improving frontend maintainability.",
      ],
      stack: ["React", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Agile"],
    },
  ],

  skillGroups: [
    {
      category: "Frontend",
      skills: ["React", "Next.js (App Router)", "TypeScript", "Angular", "Redux Toolkit", "Zustand", "Context API", "RxJS", "Tailwind CSS", "Fluent UI", "Web Vitals", "A11y / WCAG"],
    },
    {
      category: "Backend",
      skills: ["Go", "Node.js", "FastAPI", "Python", "Java (Spring Boot)", "Express.js", "Prisma", "REST APIs", "GraphQL", "OAuth 2.0", "JWT", "Celery", "BFF Pattern", "API Versioning"],
    },
    {
      category: "Data & Infrastructure",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "MySQL", "ChromaDB", "AWS (S3, DynamoDB, SES)", "Docker", "Kubernetes", "Azure", "GitHub Actions", "OpenTelemetry", "CI/CD", "Structured Logging"],
    },
    {
      category: "AI & LLM",
      skills: ["GPT-4o", "Gemini 2.5", "LangChain", "Prompt Engineering", "Structured Outputs", "RAG", "Tool Calling", "Whisper ASR", "PyTorch", "Hugging Face", "Model Quantization (NF4)"],
    },
  ],

  education: {
    institution: "University of Houston-Clear Lake",
    degree: "Master of Science in Computer Science",
    period: "Aug 2024 – May 2026",
    location: "Houston, TX",
    coursework: ["Design & Analysis of Algorithms", "Artificial Intelligence", "Generative AI", "Database Management Systems"],
    awards: ["Best Student Event of the Year"],
  },

  closingLine: "Work authorized and open to Software Engineer, Applied AI, and AI Engineer opportunities. USA, open to relocate.",
};
