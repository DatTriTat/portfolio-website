import { Calendar, Briefcase } from 'lucide-react';

const Experience = ({ styles, deviceType }) => {
  const experience = {
    company: "Softlogi",
    role: "Full-Stack Software Engineering Intern",
    period: "Jun 2025 – Sep 2025",
    tech: [".NET", "C#", "Blazor", "ASP.NET Boilerplate", "SQL", "Redis", "SQL Server"],
    highlights: [
      "Built and maintained backend features and APIs for a medical credentialing platform used by over 100 internal staff.",
      "Improved form validation and Blazor workflows to reduce common input mistakes and re-submissions on credential forms.",
      "Designed and ran dozens of white-box and black-box test cases and added automation scripts to reduce repeated manual regression work before each release.",
      "Added Redis caching for frequent read queries and wrote SQL migration scripts to sync data for 8 client databases, reducing manual data update work for the team."
    ]
  };

  return (
    <section id="experience" style={styles.sectionAlt}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Experience</h2>

        <div style={{ ...styles.card, paddingLeft: '55px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '16px',
            flexDirection: deviceType.isMobile ? 'column' : 'row',
            gap: deviceType.isMobile ? '12px' : '0'
          }}>
            <div>
              <h3 style={{
                fontSize: deviceType.isMobile ? '20px' : '24px',
                fontWeight: 'bold',
                color: '#111827'
              }}>
                {experience.company}
              </h3>
              <p style={{
                fontSize: deviceType.isMobile ? '18px' : '20px',
                color: styles.colors.accent,
                fontWeight: '500'
              }}>
                {experience.role}
              </p>
              <p style={{
                color: '#9CA3AF',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '8px',
                fontSize: deviceType.isMobile ? '14px' : '16px'
              }}>
                <Calendar size={16} />
                {experience.period}
              </p>
            </div>
            {!deviceType.isMobile && <Briefcase size={32} color={styles.colors.accent} />}
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={styles.skillTags}>
              {experience.tech.map((tech, index) => (
                <span key={index} style={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>

          <ul style={styles.bulletList}>
            {experience.highlights.map((highlight, index) => (
              <li key={index} style={styles.bulletItem}>
                <div style={styles.bullet}></div>
                <span style={{ color: '#4B5563' }}>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
