import { skills } from "../data/content";
import TechSphere from "./TechSphere";

const Skills = () => (
  <section id="skills" className="section section-raised">
    <div className="container skills-grid">
      <TechSphere />
      <div>
        <h2 className="section-title">Skills</h2>
        <dl className="skill-list">
          {skills.map(({ category, items }) => (
            <div key={category} className="skill-row">
              <dt>{category}</dt>
              <dd>{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default Skills;
