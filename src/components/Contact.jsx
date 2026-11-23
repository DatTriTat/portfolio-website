import { useState } from "react";
import { Check, Copy, Github, Linkedin, Phone } from "lucide-react";
import { profile } from "../data/content";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get in touch</h2>
        <p className="contact-lead">
          I'm open to software engineering roles and interesting projects. Email is the fastest way to reach me.
        </p>

        <div className="contact-email">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <button type="button" className="btn btn-small btn-outline" onClick={copyEmail}>
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>

        <ul className="contact-links">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} aria-hidden="true" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={20} aria-hidden="true" />
              GitHub
            </a>
          </li>
          <li>
            <a href={`tel:${profile.phone}`}>
              <Phone size={20} aria-hidden="true" />
              {profile.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
