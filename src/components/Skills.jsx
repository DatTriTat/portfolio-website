// components/Skills.jsx
import { Code, Database, Cloud, Terminal } from 'lucide-react';

const Skills = ({ styles, deviceType }) => {
  const skills = {
    "Programming Languages": ["Java", "JavaScript", "TypeScript", "Python", "SQL", "C#", "C/C++", "Swift"],
    "Web Technologies": ["HTML", "CSS", "XML"],
    "Frameworks & Libraries": ["Spring Boot", "Node.js", "Express.js", "Flask", "React.js", "Blazor", "ASP.NET Boilerplate", "Next.js", "Java Swing"],
    "Technologies": ["Redis", "WebSocket", "RabbitMQ", "Kafka", "Kubernetes (GKE, EKS)", "Docker", "MongoDB", "MongoDB Vector Search", "DynamoDB", "Firebase", "MSSQL", "AWS (S3, Lambda)", "OpenAI API", "LangChain", "GraphQL", "RESTful APIs", "Microservices", "Nginx"],
    "Developer Tools": ["Git", "GitHub Actions", "VS Code", "Postman", "Twilio", "Selenium"],
    "Other Skills": ["Systems Architecture", "Object-Oriented Programming", "API Design", "CI/CD", "Agile Methodologies", "Testing", "Automation Testing", "Design Patterns", "Data Analysis", "Cloud Security", "Operating Systems", "Security (JWT, RBAC, Rate Limiting)"]
  };
  
  // Split skills for 2-column layout on desktop
  const skillsArray = Object.entries(skills);
  const halfLength = Math.ceil(skillsArray.length / 2);
  const skillsFirstColumn = skillsArray.slice(0, halfLength);
  const skillsSecondColumn = skillsArray.slice(halfLength);
  
  const getIcon = (category) => {
    switch(category) {
      case "Programming Languages": return <Code size={20} color="#2563EB" />;
      case "Web Technologies": return <Terminal size={20} color="#2563EB" />;
      case "Frameworks & Libraries": return <Database size={20} color="#2563EB" />;
      case "Technologies": return <Cloud size={20} color="#2563EB" />;
      case "Developer Tools": return <Terminal size={20} color="#2563EB" />;
      case "Other Skills": return <Code size={20} color="#2563EB" />;
      default: return <Code size={20} color="#2563EB" />;
    }
  };
  
  // For mobile/tablet: show all skills in single column
  // For desktop: show in 2 columns
  const showSingleColumn = deviceType.isMobile || deviceType.isTablet;
  
  return (
    <section id="skills" style={styles.sectionAlt}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        
        {showSingleColumn ? (
          // Single column layout for mobile/tablet
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {skillsArray.map(([category, items]) => (
              <div key={category} style={styles.skillCategory}>
                <h3 style={styles.skillCategoryTitle}>
                  {getIcon(category)}
                  {category}
                </h3>
                <div style={styles.skillTags}>
                  {items.map((skill, index) => (
                    <span 
                      key={index} 
                      style={styles.skillTag}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#DBEAFE';
                        e.target.style.color = '#1E40AF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#F3F4F6';
                        e.target.style.color = '#4B5563';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Two column layout for desktop
          <div style={styles.skillsGrid}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {skillsFirstColumn.map(([category, items]) => (
                <div key={category} style={styles.skillCategory}>
                  <h3 style={styles.skillCategoryTitle}>
                    {getIcon(category)}
                    {category}
                  </h3>
                  <div style={styles.skillTags}>
                    {items.map((skill, index) => (
                      <span 
                        key={index} 
                        style={styles.skillTag}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#DBEAFE';
                          e.target.style.color = '#1E40AF';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#F3F4F6';
                          e.target.style.color = '#4B5563';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {skillsSecondColumn.map(([category, items]) => (
                <div key={category} style={styles.skillCategory}>
                  <h3 style={styles.skillCategoryTitle}>
                    {getIcon(category)}
                    {category}
                  </h3>
                  <div style={styles.skillTags}>
                    {items.map((skill, index) => (
                      <span 
                        key={index} 
                        style={styles.skillTag}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#DBEAFE';
                          e.target.style.color = '#1E40AF';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#F3F4F6';
                          e.target.style.color = '#4B5563';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;