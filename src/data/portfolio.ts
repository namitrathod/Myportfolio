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
    role: "AI/ML Engineer",
    tagline: "",
    sublines: [
      "Building production-ready generative AI applications, agentic workflows, and reliable data pipelines.",
      "M.S. Computer Science, University of Houston-Clear Lake. Experience across NasaFitness, ScriptChain Health, and Cognizant.",
    ],
    about: [
      "I'm an AI/ML Engineer focused on building production-ready generative AI applications, agentic workflows, and dependable data pipelines. At NasaFitness, I develop AI-powered healthcare workflows with Python, FastAPI, LLMs, RAG, and structured patient data.",
      "My work spans context-assembly pipelines, reliable API integrations, validation and guardrails, and monitored services that generate personalized clinical content. Previously at ScriptChain Health, I built healthcare data pipelines and GraphRAG workflows that transformed transcripts, questionnaire responses, and EHR data into validated patient context.",
      "At Cognizant, supporting Caterpillar's financial systems, I developed PySpark ETL pipelines, Kafka-based event processing, and database optimizations for high-volume transaction data. I also fine-tuned a language model with QLoRA and PEFT on more than 4,000 synthetic clinical notes, improving ICD-10 accuracy from 48% to 94% while preventing invalid code generation through validation and structured-output controls.",
      "My core areas include Generative AI, LLMs, RAG and GraphRAG, agentic and human-in-the-loop systems, Python, PyTorch, TensorFlow, FastAPI, PySpark, Kafka, Airflow, AWS, Azure, Docker, Kubernetes, and CI/CD.",
      "I recently completed my M.S. in Computer Science at the University of Houston-Clear Lake and am interested in AI/ML Engineer, Data Engineer, and Software Engineer opportunities. I'm based in the Greater Seattle Area, authorized to work, and open to relocation.",
    ],
    email: "namitrathod07@gmail.com",
    phone: "+1-346-434-9556",
    linkedin: "https://www.linkedin.com/in/namit-rathod",
    github: "https://github.com/namitrathod",
    location: "Greater Seattle Area (Open to Relocation)",
    resumeUrl: "/Namit_Rathod_Resume.pdf",
    resumePreviewUrl: "https://rxresu.me/namit.rathod07/namit-rathod",
  },

  credibilityChips: [
    "4+ yrs experience",
    "NasaFitness",
    "ScriptChain Health",
    "Cognizant Alumni",
    "MS CS, UHCL",
    "AI/ML · Data Engineering",
    "Open to Relocation",
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
      id: "nasafitness-aiml",
      company: "NasaFitness LLC",
      role: "AI/ML Engineer",
      period: "Aug 2026 - Present",
      location: "United States",
      bullets: [
        "Develop AI-powered healthcare workflows that turn structured patient data into personalized clinical content.",
        "Build context-assembly and RAG pipelines with validation, guardrails, and structured outputs for dependable LLM behavior.",
        "Integrate and monitor production APIs and services supporting clinical AI workflows.",
      ],
      stack: ["Python", "FastAPI", "LLMs", "RAG", "Structured Data", "Guardrails", "API Integration", "Monitoring"],
    },
    {
      id: "nasafitness-intern",
      company: "NasaFitness LLC",
      role: "Software Engineer Intern",
      period: "Jun 2026 - Aug 2026 · 3 mos",
      location: "Houston, TX",
      bullets: [
        "Contributed to healthcare software and data workflows that support patient-facing clinical services.",
        "Developed backend integrations and structured-data processing with an emphasis on reliability and validation.",
      ],
      stack: ["Python", "FastAPI", "REST APIs", "Healthcare Data", "Data Validation"],
    },
    {
      id: "scriptchain",
      company: "ScriptChain Health",
      role: "AI Engineer",
      period: "Jan 2026 - Jun 2026 · 6 mos",
      location: "India",
      bullets: [
        "Built healthcare data pipelines that transformed transcripts, questionnaire responses, and EHR data into validated patient context.",
        "Developed GraphRAG workflows for grounding clinical AI outputs in connected patient information.",
        "Fine-tuned a language model with QLoRA and PEFT on 4,000+ synthetic clinical notes, improving ICD-10 accuracy from 48% to 94%.",
        "Prevented invalid ICD-10 code generation with validation layers and structured-output controls.",
      ],
      stack: ["Python", "PyTorch", "Hugging Face", "GraphRAG", "QLoRA", "PEFT", "EHR Data", "ICD-10", "Structured Outputs"],
    },
    {
      id: "caterpillar-cognizant",
      company: "Caterpillar Inc. (Cognizant)",
      role: "Data Engineer",
      period: "Mar 2023 - Jul 2024 · 1 yr 5 mos",
      location: "India",
      bullets: [
        "Developed PySpark ETL pipelines for high-volume financial transaction data.",
        "Built Kafka-based event-processing workflows for reliable, scalable data movement.",
        "Optimized databases and data-processing paths supporting Caterpillar's financial systems.",
      ],
      stack: ["PySpark", "Apache Spark", "Kafka", "ETL", "SQL", "Data Pipelines", "Financial Systems"],
    },
    {
      id: "cognizant-intern",
      company: "Cognizant",
      role: "Data Engineer Intern",
      period: "Jan 2022 - Dec 2022 · 1 yr",
      location: "India",
      bullets: [
        "Supported the development and maintenance of data engineering workflows and ETL processes.",
        "Worked with structured datasets, SQL, and pipeline validation to improve the reliability of downstream data.",
      ],
      stack: ["Python", "SQL", "ETL", "Data Engineering", "Data Validation"],
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

  closingLine: "Work authorized and open to AI/ML Engineer, Data Engineer, and Software Engineer opportunities. Greater Seattle Area, open to relocation.",
};
