import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
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
        "Increased job matching accuracy by 40% using OpenAI and MongoDB Vector Search",
        "Reduced AI response time from 2 minutes to 30 seconds via Redis caching",
        "Secured 300+ concurrent sessions with JWT, RBAC, and auto-scaled GKE infrastructure",
      ],
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
        "Built reservation system using Redis and RabbitMQ, cutting DB load by 60%",
        "Improved backend performance through MongoDB indexing and Redis caching",
        "Handled 1K+ concurrent requests with Kubernetes auto-scaling",
        "Implemented restaurant suggestion engine for personalized recommendations",
      ],
    },
  ];

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
                <div style={styles.cardGradient}>
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
                        color: "#2563EB",
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
                  </div>
                </div>
              </div>
            ))}
          </div>

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
