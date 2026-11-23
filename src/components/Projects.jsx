import { ExternalLink, Newspaper } from "lucide-react";
import { featuredProject as fp, projects } from "../data/content";

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2 className="section-title">Projects</h2>

      <article className="feature">
        <div className="feature-head">
          <a className="press-badge" href={fp.press.url} target="_blank" rel="noopener noreferrer">
            <Newspaper size={16} aria-hidden="true" />
            Featured by {fp.press.outlet}
          </a>
          <h3 className="feature-title">{fp.title}</h3>
          <p className="project-meta">
            {fp.role}
            <br />
            {fp.period}
          </p>
          <p className="feature-desc">{fp.description}</p>
          <div className="feature-links">
            <a className="btn btn-primary" href={fp.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} aria-hidden="true" />
              Visit fedbridge.app
            </a>
            <a className="btn btn-ghost" href={fp.press.url} target="_blank" rel="noopener noreferrer">
              Read the {fp.press.outlet} story
            </a>
          </div>
        </div>

        <div className="feature-body">
          <ul className="highlights">
            {fp.highlights.map((h) => (
              <li key={h}>
                {h}
              </li>
            ))}
          </ul>
          <p className="stack">
            <span className="visually-hidden">Technologies: </span>
            {fp.stack.join(", ")}
          </p>
        </div>
      </article>

      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.title} className="project">
            <h3 className="project-title">{p.title}</h3>
            <p className="project-meta">
              {p.role}, {p.period}
            </p>
            <p>{p.description}</p>
            <details className="project-details">
              <summary>What I built</summary>
              <ul className="highlights">
                {p.highlights.map((h) => (
                  <li key={h}>
                    {h}
                  </li>
                ))}
              </ul>
            </details>
            <p className="stack">
              <span className="visually-hidden">Technologies: </span>
              {p.stack.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
