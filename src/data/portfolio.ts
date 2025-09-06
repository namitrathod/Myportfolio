export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    email: string;
    location: string;
    about: string;
    avatar: string;
  };
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  socialLinks: SocialLink[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Namit Rathod",
    title: "Full Stack Developer & Graduate Student",
    email: "namitrathod07@gmail.com",
    location: "Houston, TX",
    about: "I'm a passionate full-stack developer and MS Computer Science student at University of Houston Clear Lake. With experience at Cognizant as a Programmer Analyst, I specialize in building scalable web applications using React, Node.js, and modern technologies. I'm currently working as a Graduate Assistant in the XR Lab, contributing to immersive application development and enhancing student engagement through innovative solutions.",
    avatar: "/linkdinimagecurrent.png"
  },
  skills: [
    { name: "React.js", level: 90, category: "frontend" },
    { name: "Angular", level: 85, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Django", level: 80, category: "backend" },
    { name: "Spring Boot", level: 75, category: "backend" },
    { name: "PostgreSQL", level: 85, category: "database" },
    { name: "MongoDB", level: 80, category: "database" },
    { name: "AWS", level: 70, category: "devops" },
    { name: "Docker", level: 75, category: "devops" },
    { name: "Git", level: 90, category: "other" },
  ],
  projects: [
    {
      id: "project-1",
      title: "Hiresphere - Applicant Screening System",
      description: "Developed a full-stack hiring platform that reduced application processing time by 35%. Implemented secure role-based authentication and built comprehensive RESTful APIs with CRUD operations.",
      technologies: ["React", "Django", "PostgreSQL", "JWT", "RESTful APIs"],
      image: "/projects/hiresphere.jpg",
      githubUrl: "https://github.com/namitrathod/hiresphere",
      liveUrl: "https://hiresphere-demo.com"
    },
    {
      id: "project-2",
      title: "CabGo - Cab Booking Application",
      description: "Enhanced user experience with real-time map integration via Google Maps API. Secured user and payment data with JWT authentication and Stripe API integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "Stripe"],
      image: "/projects/cabgo.jpg",
      githubUrl: "https://github.com/namitrathod/cabgo",
      liveUrl: "https://cabgo-demo.com"
    },
    {
      id: "project-3",
      title: "XR Lab Applications",
      description: "Contributing to XR Lab development by building immersive applications and supporting initiatives that enhance student engagement through innovative extended reality solutions.",
      technologies: ["Unity", "XR Development", "C#", "3D Modeling", "VR/AR"],
      image: "/projects/xr-lab.jpg",
      githubUrl: "https://github.com/namitrathod/xr-lab",
      liveUrl: "https://xr-lab-demo.com"
    }
  ],
  experience: [
    {
      id: "exp-1",
      company: "University of Houston",
      position: "Graduate Assistant - XR Lab",
      duration: "2024 - Present",
      description: "Contributing to XR Lab development by building immersive applications and supporting initiatives that enhance student engagement. Working on cutting-edge extended reality technologies and educational applications.",
      technologies: ["Unity", "XR Development", "C#", "3D Modeling", "VR/AR", "Educational Technology"]
    },
    {
      id: "exp-2",
      company: "Cognizant",
      position: "Programmer Analyst",
      duration: "March 2023 - July 2024",
      description: "Improved UI responsiveness by 20% using JavaScript, HTML, and CSS. Reduced bug resolution time by 25% through collaboration and Agile methodologies. Cut API response times by 15% by optimizing RESTful APIs and third-party services.",
      technologies: ["JavaScript", "HTML", "CSS", "RESTful APIs", "Agile", "CI/CD", "Git"]
    },
    {
      id: "exp-3",
      company: "Cognizant",
      position: "Full-Stack Developer Intern",
      duration: "January 2022 - November 2022",
      description: "Strengthened platform security and reduced login issues by 40% using JWT authentication and bcrypt. Improved front-end responsiveness and reduced page load time by 25% with Angular and Node.js backend API optimization.",
      technologies: ["Angular", "Node.js", "JWT", "bcrypt", "RESTful APIs", "Agile", "SDLC"]
    },
    {
      id: "exp-4",
      company: "The Spark Foundation",
      position: "Data Science and Business Analytics Intern",
      duration: "January 2022 - November 2022",
      description: "Increased model accuracy by 18% through hyperparameter tuning and k-fold cross-validation. Visualized key performance indicators using Matplotlib and Seaborn for data-driven decision making.",
      technologies: ["Python", "Machine Learning", "Matplotlib", "Seaborn", "Data Analysis", "Statistics"]
    }
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/namitrathod",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/namit-rathod",
      icon: "linkedin"
    },
    {
      name: "Email",
      url: "mailto:namitrathod07@gmail.com",
      icon: "mail"
    }
  ]
};
