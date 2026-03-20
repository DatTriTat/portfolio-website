import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = ({ styles, deviceType }) => {
  return (
    <section id="home" style={styles.heroSection}>
      <div style={styles.heroGrid}>
        <div>
          <h1 style={styles.heroTitle}>Dat Tri Tat</h1>
          <p style={styles.heroSubtitle}>
            Full-Stack Software Engineer
          </p>
          <p style={styles.heroDescription}>
            Software engineer with experience building full-stack applications,
            cloud-native backends, and AI-powered platforms. Skilled in
            microservices, real-time systems, and deploying production-ready
            services on AWS and GCP.
          </p>

          <div style={styles.buttonGroup}>
            <a
              href="#projects"
              style={styles.primaryButton}
              onMouseEnter={(e) => (e.target.style.background = "linear-gradient(180deg, #ECEFF3 0%, #D5DAE1 100%)")}
              onMouseLeave={(e) => (e.target.style.background = "linear-gradient(180deg, #F5F7FA 0%, #E5E7EB 100%)")}
            >
              View My Projects
            </a>
            <a
              href="#contact"
              style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#C9CDD3';
                e.target.style.color = styles.colors.accentStrong;
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#E5E7EB';
                e.target.style.color = '#111827';
              }}
            >
              Get In Touch
            </a>
            <a
              href="/DatTriTat_Resume.pdf"
              style={styles.secondaryButton}
              download
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#C9CDD3';
                e.target.style.color = styles.colors.accentStrong;
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#E5E7EB';
                e.target.style.color = '#111827';
              }}
            >
              <Download
                size={16}
                style={{ marginRight: 8, position: "relative", top: "2px" }}
              />
              Download My Resume
            </a>
          </div>

          <div style={styles.socialLinks}>
            <a href="https://github.com/dattritat" style={styles.socialLink}>
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/dattritat/"
              style={styles.socialLink}
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:tatdattri0306@gmail.com" style={styles.socialLink}>
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Profile Image - Hidden on Mobile */}
        {!deviceType.isMobile && (
          <div style={styles.profileImageContainer}>
            <div style={styles.profileImageBg}></div>
            <img
              src="/profile.jpg"
              alt="Dat Tri Tat"
              style={styles.profileImage}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
