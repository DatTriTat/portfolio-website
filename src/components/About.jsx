import { Mail, MapPin, Phone, GraduationCap } from "lucide-react";

const About = ({ styles, deviceType }) => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>About Me</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: deviceType.isMobile ? "24px" : "32px",
            alignItems: "stretch",
          }}
        >
          {/* Column 1: Education + Quick Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", height: "100%" }}>
            <div style={{ ...styles.card, backgroundColor: "#FFFFFF" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <GraduationCap size={24} color={styles.colors.accent} />
                <h3 style={{ fontSize: deviceType.isMobile ? "18px" : "20px", fontWeight: "600" }}>
                  Education
                </h3>
              </div>
              <div style={{ marginBottom: "16px" }}>
                <p style={{ fontWeight: "600", marginBottom: "4px", fontSize: deviceType.isMobile ? "14px" : "16px" }}>
                  Master of Science in Software Engineering
                </p>
                <p style={{ color: "#6B7280", marginBottom: "4px", fontSize: deviceType.isMobile ? "14px" : "16px" }}>
                  San Jose State University
                </p>
                <p style={{ fontSize: deviceType.isMobile ? "12px" : "14px", color: "#9CA3AF" }}>
                  Jan 2025 – Expected Jun 2027
                </p>
              </div>
              <div>
                <p style={{ fontWeight: "600", marginBottom: "4px", fontSize: deviceType.isMobile ? "14px" : "16px" }}>
                  Bachelor of Science in Software Engineering
                </p>
                <p style={{ color: "#6B7280", marginBottom: "4px", fontSize: deviceType.isMobile ? "14px" : "16px" }}>
                  San Jose State University
                </p>
                <p style={{ fontSize: deviceType.isMobile ? "12px" : "14px", color: "#9CA3AF" }}>
                  Aug 2021 – Dec 2024
                </p>
              </div>
            </div>

            <div style={{ ...styles.card, backgroundColor: "#FFFFFF" }}>
              <h3 style={{ fontSize: deviceType.isMobile ? "18px" : "20px", fontWeight: "600", marginBottom: "16px" }}>
                Quick Info
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Phone size={20} color={styles.colors.accent} />
                  <span style={{ fontSize: deviceType.isMobile ? "14px" : "16px" }}>408-805-1757</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Mail size={20} color={styles.colors.accent} />
                  <span style={{ fontSize: deviceType.isMobile ? "14px" : "16px", wordBreak: "break-word" }}>tatdattri0306@gmail.com</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <MapPin size={20} color={styles.colors.accent} />
                  <span style={{ fontSize: deviceType.isMobile ? "14px" : "16px" }}>San Jose, CA</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
