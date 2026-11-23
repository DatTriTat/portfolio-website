import { experience } from "../data/content";

const Experience = () => (
  <section id="experience" className="section section-raised">
    <div className="container">
      <h2 className="section-title">Experience</h2>

      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className={`timeline-item${job.current ? " is-current" : ""}`}>
            <p className="timeline-date">
              <time>{job.start}</time> – <time>{job.end}</time>
            </p>
            <div className="timeline-body">
              <h3 className="job-company">{job.company}</h3>
              <p className="job-role">{job.role}</p>
              <ul className="highlights">
                {job.highlights.map((h) => (
                  <li key={h}>
                    {h}
                  </li>
                ))}
              </ul>
              <p className="stack">
                <span className="visually-hidden">Technologies: </span>
                {job.stack.join(", ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
