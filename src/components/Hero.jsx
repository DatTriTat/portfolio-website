import { lazy, Suspense, useRef, useState } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Monogram from "./Monogram";
import { profile } from "../data/content";
import { useInView } from "../hooks/useInView";
import { useReducedMotion } from "../hooks/useReducedMotion";

const MonogramScene = lazy(() => import("./MonogramScene"));

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
};

const Hero = () => {
  const stageRef = useRef(null);
  const inView = useInView(stageRef);
  const reducedMotion = useReducedMotion();
  const [webgl] = useState(supportsWebGL);
  const words = profile.name.split(" ");

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-now">
            <span className="signal" aria-hidden="true" />
            {profile.now.text}
          </p>

          <h1 className="hero-name" aria-label={profile.name}>
            {words.map((word, i) => (
              <span className="hero-word" key={word + i} aria-hidden="true">
                <span style={{ "--i": i }}>{word}</span>
              </span>
            ))}
          </h1>

          <p className="hero-lead">
            Software engineer building full-stack products, cloud-native backends, and observability tooling.
            Founder of FedBridge, an AI career platform featured by CBS News.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noopener noreferrer">
              <Download size={18} aria-hidden="true" />
              Download resume
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email me
            </a>
            <div className="hero-social">
              <a className="icon-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a className="icon-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-stage" ref={stageRef}>
          {webgl ? (
            <Suspense fallback={<Monogram className="hero-mark-fallback" />}>
              <MonogramScene active={inView} reducedMotion={reducedMotion} />
            </Suspense>
          ) : (
            <Monogram className="hero-mark-fallback" title="DT monogram" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
