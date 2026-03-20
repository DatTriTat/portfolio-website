// components/Projects.jsx
import { ChevronLeft, ChevronRight, Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";

const Projects = ({ styles, deviceType }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const projects = [
    {
      title: "FedBridge",
      role: "Founder, Full-Stack Engineer",
      period: "Feb 2025 – Present",
      description:
        "AI-powered career platform featured by CBS News, supporting federal workers with job path discovery, mock interviews, and personalized upskilling.",
      tech: [
        "React.js", "Node.js", "Express.js", "WebSocket", "Redis",
        "OpenAI", "LangChain", "MongoDB", "Docker", "Kubernetes", "GCP", "AssemblyAI",
      ],
      highlights: [
        "Featured by CBS News as an AI-powered career platform supporting federal workers with job path discovery, mock interviews, and personalized upskilling.",
        "Built a full-stack app with a React frontend and a Node.js/Express backend, exposing REST APIs and WebSocket endpoints for real-time interview rooms.",
        "Integrated OpenAI and LangChain with MongoDB Vector Search, adding caching, input validation, and prompt tuning to improve AI response time by around 40% compared to the first version.",
        "Implemented a Python FastAPI agent microservice that joins interview rooms, streams audio, and uses AssemblyAI and Redis to generate and store real-time interview transcripts.",
        "Containerized services with Docker and deployed on GKE with autoscaling, Ingress, and JWT/RBAC security, keeping the platform responsive under demo traffic and separating user roles.",
      ],
      links: {
        live: "https://fedbridge.app/",
        press: "https://www.cbsnews.com/sanfrancisco/news/san-jose-university-students-fedbridge-ai-app/"
      }
    },
    {
      title: "Smart Car Cloud Services",
      role: "Full-Stack Engineer",
      period: "Sep 2025 – Dec 2025",
      description:
        "Full-stack smart car cloud application with a React (TypeScript) dashboard and a Node.js/Express API for managing vehicles and service data.",
      tech: [
        "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis",
        "AWS EC2", "Docker", "React", "TypeScript", "AWS Cognito",
      ],
      highlights: [
        "Built a full-stack smart car cloud app with a React (TypeScript) dashboard and a Node.js/Express API so users can manage vehicles and service data.",
        "Designed REST APIs for vehicle data, user accounts, and service operations using PostgreSQL and MongoDB, and used Redis to cache frequent reads to reduce repeated database queries and make responses faster and more consistent.",
        "Integrated AWS Cognito so users sign in securely and call protected API routes with JWT tokens, improving security and user access control.",
        "Containerized the backend with Docker and deployed it on AWS EC2 inside a VPC, setting up auto-scaling and security groups with private services and a public-facing frontend entry point to improve reliability and isolate internal resources.",
      ],
      links: {}
    },
    {
      title: "Market Agent",
      role: "Full-Stack Engineer",
      period: "Jan 2025 – Jun 2025",
      description:
        "Stock market AI agent with a React dashboard and FastAPI backend that answers user questions using end-of-day OHLCV data and grounded LLM prompts.",
      tech: [
        "Python", "FastAPI", "React", "Redis", "MongoDB", "OpenAI", "EODHD", "Docker", "AWS",
      ],
      highlights: [
        "Built a React dashboard and FastAPI backend for a stock market agent that answers user questions using end of day OHLCV data stored in MongoDB and grounded LLM prompts.",
        "Implemented Redis session caching with TTL to preserve multi-turn conversation history across requests.",
        "Optimized daily ingestion by using EODHD bulk last day data and MongoDB bulk upserts instead of per symbol polling to stay within API limits.",
        "Deployed the React frontend and FastAPI backend on AWS EC2, configuring environment variables and production settings.",
      ],
      links: {}
    }
  ];

  const renderLinks = (links) => {
    if (!links) return null;
    return (
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
        {links.live && (
          <a href={links.live} style={{ ...styles.secondaryButton, display: "inline-flex", alignItems: "center", gap: 8 }} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} /> Live
          </a>
        )}
        {links.repo && (
          <a href={links.repo} style={{ ...styles.secondaryButton, display: "inline-flex", alignItems: "center", gap: 8 }} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} /> GitHub
          </a>
        )}
        {links.press && (
          <a href={links.press} style={{ ...styles.secondaryButton, display: "inline-flex", alignItems: "center", gap: 8 }} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} /> Press
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>

        <div style={styles.projectCarousel}>
          <div
            style={{
              ...styles.projectSlider,
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div key={index} style={styles.projectSlide}>
                <div style={{ ...styles.cardGradient, paddingLeft: "55px" }}>
                  <div style={{ marginBottom: "24px" }}>
                    <h3
                      style={{
                        fontSize: deviceType.isMobile ? "24px" : "28px",
                        fontWeight: "bold",
                        color: "#111827",
                        marginBottom: "8px",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: deviceType.isMobile ? "16px" : "20px",
                        color: styles.colors.accent,
                        fontWeight: "500",
                        marginBottom: "8px",
                      }}
                    >
                      {project.role}
                    </p>
                    <p
                      style={{
                        color: "#9CA3AF",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: deviceType.isMobile ? "14px" : "16px",
                      }}
                    >
                      <Calendar size={16} />
                      {project.period}
                    </p>
                  </div>

                  <p
                    style={{
                      color: "#4B5563",
                      fontSize: deviceType.isMobile ? "14px" : "18px",
                      marginBottom: "24px",
                      lineHeight: "1.6",
                    }}
                  >
                    {project.description}
                  </p>

                  <div style={{ marginBottom: "24px" }}>
                    <h4
                      style={{
                        fontWeight: "600",
                        color: "#111827",
                        marginBottom: "12px",
                        fontSize: deviceType.isMobile ? "14px" : "16px",
                      }}
                    >
                      Technologies Used:
                    </h4>
                    <div style={styles.skillTags}>
                      {project.tech.map((tech, i) => (
                        <span key={i} style={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4
                      style={{
                        fontWeight: "600",
                        color: "#111827",
                        marginBottom: "12px",
                        fontSize: deviceType.isMobile ? "14px" : "16px",
                      }}
                    >
                      Key Achievements:
                    </h4>
                    <ul style={styles.bulletList}>
                      {project.highlights.map((highlight, i) => (
                        <li key={i} style={styles.bulletItem}>
                          <div style={styles.bullet}></div>
                          <span style={{ color: "#4B5563" }}>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {renderLinks(project.links)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          {currentPage > 0 && (
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              style={{
                ...styles.carouselButton,
                left: deviceType.isMobile ? -10 : 0,
              }}
            >
              <ChevronLeft size={deviceType.isMobile ? 20 : 24} color="#4B5563" />
            </button>
          )}

          {/* Right Arrow */}
          {currentPage < projects.length - 1 && (
            <button
              onClick={() =>
                setCurrentPage(Math.min(projects.length - 1, currentPage + 1))
              }
              style={{
                ...styles.carouselButton,
                right: deviceType.isMobile ? -10 : 0,
              }}
            >
              <ChevronRight size={deviceType.isMobile ? 20 : 24} color="#4B5563" />
            </button>
          )}

          {/* Dots */}
          <div style={styles.carouselDots}>
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                style={{
                  ...styles.dot,
                  ...(currentPage === index ? styles.dotActive : {}),
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
