// components/Projects.jsx
import { ChevronLeft, ChevronRight, Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";

const Projects = ({ styles, deviceType }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const projects = [
    {
      title: "FedBridge",
      role: "Founder, System Architecture Engineer",
      period: "Feb 2025 – Present",
      description:
        "AI-powered career platform featured by CBS News, supporting federal workers with job path discovery and mock interviews",
      tech: [
        "Node.js",
        "Express.js",
        "WebSocket",
        "Redis",
        "OpenAI",
        "Langchain",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "GCP",
      ],
      highlights: [
        "Architected scalable backend with microservices and real-time collaboration via WebSocket + Redis Pub/Sub",
        "Improved resume-to-job suggestions by adding embeddings and MongoDB Vector Search.",
        "Deployed the API on GKE and set up autoscaling and traffic routing by using HPA, node pool autoscaling, and Ingress",
        "Kept APIs safe by applying JWT, role-based access, and basic rate limits.",
      ],
      links: {
        live: "https://fedbridge.app/",
        press: "https://www.cbsnews.com/sanfrancisco/news/san-jose-university-students-fedbridge-ai-app/"
      }
    },
    {
      title: "Reservation Table",
      role: "Backend Developer",
      period: "Feb 2025 – May 2025",
      description:
        "Booking platform for Bay Area restaurants with search, booking, and management features",
      tech: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "Redis",
        "RabbitMQ",
        "JWT",
        "Twilio",
        "React.js",
      ],
      highlights: [
        "Reduced database pressure by handling expiration and status changes asynchronously with Redis and RabbitMQ delay queues.",
        "Improved backend performance through MongoDB indexing and Redis caching",
        "Deployed on GKE with autoscaling and load balancing, and secured the API using JWT and role-based access controls",
        "Implemented restaurant suggestion system for personalized recommendations",
      ],
      links: {
        repo: "https://github.com/gopinathsjsu/team-project-20201-codecrafters"
      }
    },
    {
      title: "Inventix",
      role: "Fullstack Developer",
      period: "Dec 2023 – Feb 2024",
      description:
        "Inventory management system built with microservices architecture to improve scalability, security, and real-time operations across ordering and shipping.",
      tech: [
        "Java",
        "Spring Boot",
        "Spring Cloud Gateway",
        "Eureka",
        "SQL",
        "Microservices",
        "RabbitMQ",
        "Docker",
        "GKE",
        "SwiftUI"
      ],
      highlights: [
        "Designed and developed microservices-based inventory modules with Spring Boot for modularity and scalability",
        "Implemented authentication and authorization via Spring Cloud Gateway + Eureka for secure service-to-service communication",
        "Built RESTful APIs consumed by a SwiftUI app for real-time inventory and order management",
        "Integrated RabbitMQ for order tracking and shipping events to increase responsiveness and reliability",
        "Containerized all services with Docker and deployed to GKE with Load Balancer for high availability"
      ],
      links: {
        repo: "https://github.com/DatTriTat/Inventix"
      }
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
