// Single source of truth for the site's content. Mirrors DatTriTat_Resume.pdf.

export const profile = {
  name: "Dat Tri Tat",
  role: "Software Engineer",
  location: "San Jose, CA",
  email: "tatdattri0306@gmail.com",
  phone: "408-805-1757",
  github: "https://github.com/dattritat",
  linkedin: "https://www.linkedin.com/in/dattritat/",
  resume: "/DatTriTat_Resume.pdf",
  now: {
    company: "IBM",
    text: "Currently a Software Engineering Intern at IBM",
  },
};

export const education = [
  {
    degree: "M.S. Software Engineering",
    school: "San Jose State University",
    period: "Jan 2025 – Dec 2027",
  },
  {
    degree: "B.S. Software Engineering",
    school: "San Jose State University",
    period: "Aug 2021 – Dec 2024",
  },
];

export const coursework = [
  "Data Structures and Algorithms",
  "Operating Systems",
  "Distributed Systems",
  "Computer Networks",
  "Database Systems",
  "Software Engineering I/II",
  "Cloud Computing",
  "Mobile Application Development",
];

export const experience = [
  {
    company: "IBM",
    role: "Software Engineering Intern",
    start: "Sep 2026",
    end: "Present",
    current: true,
    stack: ["Java", "Go", "OpenTelemetry", "Observability", "IBM Instana", "IBM Bob", "GitHub"],
    highlights: [
      "Developed and evaluated an AI-driven, spec-driven workflow for transforming monitoring integrations between sensors and receivers, with a focus on improving output quality and consistency.",
      "Improved the transformation workflow with structured specifications, verification gates, unit tests, convergence checks, and integration testing to reduce inconsistent AI-generated implementations.",
      "Built and tested OpenTelemetry receiver and sensor transformation workflows for observability, validating generated telemetry and verifying that collected metrics could be delivered to Instana.",
      "Analyzed AI-generated code and workflow failures to identify issues with context, dependency versions, API compatibility, and implementation consistency, and evaluated improvements to increase reliability and reduce rework.",
    ],
  },
  {
    company: "T-Mobile",
    role: "Software Engineering Intern",
    start: "May 2026",
    end: "Aug 2026",
    stack: ["Python", "GitLab CI/CD", "JWT", "SQL", "AWS"],
    highlights: [
      "Developed a reusable API test automation framework for multiple applications and environments, eliminating duplicate test implementations and standardizing end-to-end API validation.",
      "Designed configurable test workflows that let QA engineers add and run new scenarios without separate automation for each application, eliminating repetitive manual setup and shortening regression test cycles.",
      "Integrated automated API tests into GitLab CI/CD pipelines and generated structured test reports to surface deployment failures earlier and speed up debugging.",
      "Performed manual API, integration, and regression testing with QA and engineering teams to validate end-to-end workflows, reproduce failures, and document framework setup and execution.",
    ],
  },
  {
    company: "Softlogi",
    role: "Full-Stack Software Engineering Intern",
    start: "Jun 2025",
    end: "Sep 2025",
    stack: [".NET", "C#", "Blazor", "ASP.NET Boilerplate", "SQL", "Redis", "SQL Server"],
    highlights: [
      "Built and maintained backend features and REST APIs for a medical credentialing platform used by 100+ internal staff.",
      "Improved form validation and Blazor workflows to reduce common input mistakes and credential-form re-submissions.",
      "Designed and executed dozens of white-box and black-box test cases and added automation scripts to reduce repeated manual regression testing before each release.",
      "Added Redis caching for frequent read queries and wrote SQL migration scripts to synchronize 8 client databases, reducing manual data-update work.",
    ],
  },
];

export const featuredProject = {
  title: "FedBridge",
  role: "Founder, Full-Stack Engineer",
  period: "Feb 2025 – Present",
  description:
    "An AI-powered career platform that helps federal workers discover new job paths, practice with mock interviews, and plan personalized upskilling.",
  press: {
    outlet: "CBS News",
    url: "https://www.cbsnews.com/sanfrancisco/news/san-jose-university-students-fedbridge-ai-app/",
  },
  live: "https://fedbridge.app/",
  stack: [
    "React.js", "Node.js", "Express.js", "WebSocket", "Redis", "OpenAI", "LangChain",
    "MongoDB", "Docker", "Kubernetes", "GCP", "AssemblyAI",
  ],
  highlights: [
    "Built a full-stack application with React and Node.js/Express, exposing REST APIs and WebSocket endpoints for real-time interview rooms.",
    "Integrated OpenAI and LangChain with MongoDB Vector Search, adding caching, input validation, and prompt tuning to improve AI response time by about 40%.",
    "Implemented a Python FastAPI agent microservice that joins interview rooms, streams audio, and uses AssemblyAI and Redis to generate and store real-time transcripts.",
    "Containerized services with Docker and deployed on GKE with autoscaling and Ingress; added JWT/RBAC security to separate user roles and protect application access.",
  ],
};

export const projects = [
  {
    title: "Smart Car Cloud Services",
    role: "Full-Stack Engineer",
    period: "Sep 2025 – Dec 2025",
    description:
      "A smart car cloud app with a React (TypeScript) dashboard and a Node.js/Express API for managing vehicles and service data.",
    stack: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "AWS EC2", "Docker", "React", "TypeScript", "AWS Cognito"],
    highlights: [
      "Designed REST APIs for vehicle data, user accounts, and service operations on PostgreSQL and MongoDB, with Redis caching frequent reads for faster, more consistent responses.",
      "Integrated AWS Cognito so users sign in securely and call protected API routes with JWT tokens.",
      "Containerized the backend with Docker and deployed it on AWS EC2 inside a VPC, with auto-scaling, security groups, and private internal services behind a public frontend entry point.",
    ],
  },
  {
    title: "Market Agent",
    role: "Full-Stack Engineer",
    period: "Jan 2025 – Jun 2025",
    description:
      "A stock market AI agent with a React dashboard and FastAPI backend that answers questions using end-of-day OHLCV data and grounded LLM prompts.",
    stack: ["Python", "FastAPI", "React", "Redis", "MongoDB", "OpenAI", "EODHD", "Docker", "AWS"],
    highlights: [
      "Answered user questions with end-of-day OHLCV data stored in MongoDB and grounded LLM prompts.",
      "Implemented Redis session caching with TTL to preserve multi-turn conversation history across requests.",
      "Optimized daily ingestion with EODHD bulk data and MongoDB bulk upserts instead of per-symbol polling to stay within API limits.",
      "Deployed the React frontend and FastAPI backend on AWS EC2 with production configuration.",
    ],
  },
];

export const skills = [
  { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python", "Go", "SQL", "C#", "C/C++"] },
  { category: "Web and frontend", items: ["React.js", "Next.js", "HTML", "CSS", "Blazor"] },
  {
    category: "Backend and APIs",
    items: ["Node.js", "Express.js", "Spring Boot", "Flask", "FastAPI", "ASP.NET Boilerplate", "REST APIs", "WebSocket", "Authentication", "JWT", "RBAC"],
  },
  {
    category: "Cloud and DevOps",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "GitHub Actions", "GitLab CI/CD", "Ingress", "Nginx", "OpenTelemetry"],
  },
  {
    category: "Data and AI",
    items: ["MongoDB", "MongoDB Vector Search", "DynamoDB", "Redis", "SQL Server", "RabbitMQ", "Kafka", "OpenAI API", "LangChain"],
  },
  { category: "Developer and QA tools", items: ["VS Code", "Git", "Jira", "Postman", "Selenium"] },
];
