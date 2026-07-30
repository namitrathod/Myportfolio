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
    role: "Software Engineer",
    tagline: "",
    sublines: [
      "3+ years building scalable enterprise SaaS, from high-performance frontend architectures to robust, distributed backend systems.",
      "MS Computer Science, University of Houston. Experienced at Cognizant and ScriptChain Health.",
    ],
    about: [
      "I'm an AI Engineer and full-stack software engineer with 3+ years of experience building production systems at the intersection of healthcare, agentic AI, and distributed backend infrastructure.",
      "Most recently, I built an MCP server at ScriptChain Health that connected FHIR patient records and a proprietary food and exercise database as Claude-callable tools, enabling a LangGraph-based agentic platform to generate fully personalized cardiac care plans grounded in each patient's live medical history. I also integrated NVIDIA NeMo Guardrails to enforce 100% clinical guideline compliance across all AI outputs.",
      "At Nasafitness, I engineered an Azure OpenAI GPT-4o pipeline that eliminated manual clinical documentation for 100+ patient sessions, built a context pruning algorithm that improved inference accuracy while cutting token costs by 80%, and used Semantic Kernel to guarantee deterministic JSON output for seamless EHR integration.",
      "My core stack spans Python, Java, C#, FastAPI, .NET 8, React, GraphQL, LangGraph, and cloud infrastructure on AWS and Azure. I'm deeply interested in agentic AI systems, LLM orchestration, and building AI products that work reliably in high-stakes domains like healthcare.",
      "Completed my M.S. in Computer Science at the University of Houston-Clear Lake (GPA: 3.52) and actively seeking full-time AI Engineer roles globally, open to US, Canada, UAE, Singapore, Germany, and Ireland.",
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
    "MS CS, UH",
    "Frontend · Backend · Full-Stack",
    "Open to Relocation",
  ],

  projects: [
    {
      id: "document-qa-system",
      title: "Intelligent Document Question Answering System | University of Houston",
      description:
        "Developed an AI-powered RAG application using Python, LangChain, OpenAI APIs, and FAISS to enable intelligent document search, semantic retrieval, and context-aware question answering from uploaded PDF documents. Designed scalable FastAPI REST APIs, integrated PostgreSQL for metadata management, and implemented document chunking, prompt engineering, and embedding optimization.",
      result: "Optimized retrieval performance and response accuracy while evaluating retrieval quality to improve answer relevance, reduce latency, and enhance overall user experience.",
      technologies: ["Python", "LangChain", "OpenAI API", "FAISS", "FastAPI", "PostgreSQL", "RAG"],
      track: "AI / Systems",
      githubUrl: "https://github.com/namitrathod",
      liveUrl: "",
      featured: true,
    },
    {
      id: "customer-churn-prediction",
      title: "Customer Churn Prediction System | University of Houston",
      description:
        "Built an end-to-end machine learning solution using Python, Scikit-learn, XGBoost, Pandas, and NumPy to predict customer churn through data preprocessing, feature engineering, model training, and predictive analytics, enabling proactive customer retention strategies.",
      result: "Optimized model performance through hyperparameter tuning, cross-validation, and comprehensive evaluation, improving prediction reliability and delivering actionable insights.",
      technologies: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "NumPy", "PostgreSQL"],
      track: "AI / Systems",
      githubUrl: "https://github.com/namitrathod",
      liveUrl: "",
      featured: true,
    },
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
      id: "berkshire-hathaway",
      company: "Berkshire Hathaway",
      role: "AI/ML Engineer",
      period: "Present",
      location: "Remote",
      bullets: [
        "Designed machine learning solutions to improve business decision-making by translating stakeholder requirements into production-ready predictive models supporting enterprise operational workflows.",
        "Developed scalable model training and deployment pipelines, reducing model delivery time by 35% while improving consistency across multiple production releases.",
        "Optimized inference workflows, decreasing prediction response time by 40% and enabling reliable real-time recommendations for more than 150 internal business users.",
        "Collaborated with cross-functional teams to validate model performance, resolve production issues, and ensure accurate prediction results through structured testing and continuous monitoring.",
        "Documented model development standards, evaluation procedures, and deployment guidelines to improve knowledge sharing and simplify future maintenance activities across engineering teams.",
      ],
      stack: ["Python", "PyTorch", "Scikit-Learn", "MLOps", "Model Deployment", "Inference Optimization", "CI/CD"],
    },
    {
      id: "bosch",
      company: "Bosch",
      role: "ML Engineer",
      period: "Jan 2022 - Jul 2024",
      location: "Bengaluru, India",
      bullets: [
        "Built machine learning models to enhance manufacturing process quality by analyzing operational data and supporting predictive decision-making across multiple production environments.",
        "Implemented automated data preparation workflows, reducing manual processing effort by 55% while improving the consistency and reliability of training datasets.",
        "Improved model accuracy by 18% through systematic feature engineering, validation strategies, and continuous refinement using historical production data.",
        "Integrated production-ready machine learning solutions into existing business applications, enabling seamless consumption of prediction results by operational teams.",
        "Monitored deployed models to identify performance degradation, ensuring reliable predictions through periodic retraining and continuous evaluation of business outcomes.",
        "Coordinated with product owners, data engineers, and quality teams to gather requirements, validate expected outcomes, and deliver machine learning capabilities aligned with business objectives.",
        "Delivered multiple production model releases supporting over 200 daily operational users while maintaining high reliability and minimizing deployment-related issues.",
      ],
      stack: ["Python", "Machine Learning", "Feature Engineering", "Data Pipelines", "Model Monitoring", "MLOps"],
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
    institution: "University of Houston",
    degree: "Master of Science in Computer Science",
    period: "Aug 2024 – May 2026",
    location: "Houston, TX",
    coursework: ["Design & Analysis of Algorithms", "Artificial Intelligence", "Generative AI", "Database Management Systems"],
    awards: ["Best Student Event of the Year"],
  },

  closingLine: "Available for full-time roles starting May 2026. Houston, TX based, open to relocation nationwide.",
};
