import { MapPin } from "lucide-react";
import { coursework, education, profile } from "../data/content";

const About = () => (
  <section id="about" className="section">
    <div className="container about-grid">
      <figure className="about-photo">
        <img src="/profile.jpg" alt="Portrait of Dat Tri Tat" width="420" height="420" loading="lazy" />
        <figcaption>
          <MapPin size={16} aria-hidden="true" />
          {profile.location}
        </figcaption>
      </figure>

      <div className="about-body">
        <h2 className="section-title">About</h2>
        <p>
          I'm a software engineer with a strong interest in backend development, cloud infrastructure, and AI
          systems. I enjoy working on the parts of software that users never see but always depend on, from APIs and
          databases to deployment and monitoring.
        </p>
        <p>
          What draws me to this work is solving hard problems that have a real impact. I like digging into why a
          system fails, finding ways to make it faster and more reliable, and seeing it hold up for the people who
          rely on it. That same motivation led me to found FedBridge, an AI career platform for federal workers that
          was featured by CBS News.
        </p>
        <p>
          Through internships at IBM, T-Mobile, and Softlogi, I've worked on observability integrations with
          OpenTelemetry, AI-assisted development workflows, API test automation with CI/CD, and backend services for
          a healthcare platform. I'm currently pursuing a master's degree in Software Engineering at San Jose State
          University.
        </p>

        <div className="education">
          <h3>Education</h3>
          <ul className="degree-list">
            {education.map((e) => (
              <li key={e.degree}>
                <span className="degree">{e.degree}</span>
                <span className="school">{e.school}</span>
                <span className="period">{e.period}</span>
              </li>
            ))}
          </ul>
          <h4>Relevant coursework</h4>
          <p className="coursework">{coursework.join(", ")}</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
