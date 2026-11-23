import { useEffect, useMemo, useRef, useState } from "react";
import {
  siApachekafka, siBlazor, siCplusplus, siCss, siDocker, siDotnet, siExpress, siFastapi, siFlask,
  siGit, siGithubactions, siGitlab, siGo, siGooglecloud, siHtml5, siJavascript, siJira,
  siJsonwebtokens, siKubernetes, siLangchain, siMongodb, siNextdotjs, siNginx, siNodedotjs,
  siOpenjdk, siOpentelemetry, siPostgresql, siPostman, siPython, siRabbitmq, siReact, siRedis,
  siSelenium, siSpringboot, siTypescript,
} from "simple-icons";
import { useInView } from "../hooks/useInView";
import { useReducedMotion } from "../hooks/useReducedMotion";

// Brands without a simple-icons glyph render as a short wordmark instead.
const TECH = [
  { name: "Java", icon: siOpenjdk },
  { name: "TypeScript", icon: siTypescript },
  { name: "React", icon: siReact },
  { name: "AWS", mark: "AWS" },
  { name: "Kubernetes", icon: siKubernetes },
  { name: "Python", icon: siPython },
  { name: "Go", icon: siGo },
  { name: "OpenTelemetry", icon: siOpentelemetry },
  { name: "Docker", icon: siDocker },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Redis", icon: siRedis },
  { name: "MongoDB", icon: siMongodb },
  { name: "Google Cloud", icon: siGooglecloud },
  { name: "JavaScript", icon: siJavascript },
  { name: "OpenAI", mark: "OpenAI" },
  { name: "LangChain", icon: siLangchain },
  { name: "Spring Boot", icon: siSpringboot },
  { name: "C#", mark: "C#" },
  { name: ".NET", icon: siDotnet },
  { name: "Blazor", icon: siBlazor },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Express", icon: siExpress },
  { name: "FastAPI", icon: siFastapi },
  { name: "Flask", icon: siFlask },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "SQL Server", mark: "SQL" },
  { name: "Kafka", icon: siApachekafka },
  { name: "RabbitMQ", icon: siRabbitmq },
  { name: "Nginx", icon: siNginx },
  { name: "GitHub Actions", icon: siGithubactions },
  { name: "GitLab CI/CD", icon: siGitlab },
  { name: "Git", icon: siGit },
  { name: "JWT", icon: siJsonwebtokens },
  { name: "C++", icon: siCplusplus },
  { name: "HTML", icon: siHtml5 },
  { name: "CSS", icon: siCss },
  { name: "Postman", icon: siPostman },
  { name: "Selenium", icon: siSelenium },
  { name: "Jira", icon: siJira },
];

// Evenly spread points on a unit sphere (Fibonacci lattice).
const spherePoints = (n) =>
  Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = Math.PI * (3 - Math.sqrt(5)) * i;
    return [Math.cos(theta) * r, y, Math.sin(theta) * r];
  });

const TechSphere = () => {
  const stageRef = useRef(null);
  const nodeRefs = useRef([]);
  const inView = useInView(stageRef, "0px");
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(null);
  const points = useMemo(() => spherePoints(TECH.length), []);

  // Rotation state lives in a ref so animation never re-renders React.
  const motion = useRef({ rx: -0.35, ry: 0, vx: 0, vy: 0, dragging: false, lastX: 0, lastY: 0, paused: false });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const m = motion.current;
    const cruise = reducedMotion ? 0 : 0.0028;

    const render = () => {
      const radius = stage.clientWidth * 0.39;
      const cy = Math.cos(m.ry), sy = Math.sin(m.ry);
      const cx = Math.cos(m.rx), sx = Math.sin(m.rx);
      points.forEach(([x, y, z], i) => {
        const el = nodeRefs.current[i];
        if (!el) return;
        const x1 = x * cy + z * sy;
        const z1 = -x * sy + z * cy;
        const y1 = y * cx - z1 * sx;
        const z2 = y * sx + z1 * cx;
        const depth = (z2 + 1) / 2; // 0 = back, 1 = front
        el.style.transform = `translate3d(${x1 * radius}px, ${y1 * radius}px, 0) scale(${0.5 + depth * 0.6})`;
        el.style.opacity = String(0.18 + depth * 0.82);
        el.style.zIndex = String(Math.round(depth * 100));
        el.style.pointerEvents = depth > 0.45 ? "auto" : "none";
      });
    };

    render();
    if (!inView) return;

    let raf;
    const tick = () => {
      if (!m.dragging) {
        const target = m.paused ? 0 : cruise;
        m.vy += (target - m.vy) * 0.03;
        m.vx *= 0.94;
        m.ry += m.vy;
        m.rx = Math.max(-1.2, Math.min(1.2, m.rx + m.vx));
      }
      render();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => render();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [inView, points, reducedMotion]);

  const onPointerDown = (e) => {
    const m = motion.current;
    m.dragging = true;
    m.lastX = e.clientX;
    m.lastY = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    const m = motion.current;
    if (!m.dragging) return;
    const dx = e.clientX - m.lastX;
    const dy = e.clientY - m.lastY;
    m.lastX = e.clientX;
    m.lastY = e.clientY;
    m.vy = dx * 0.006;
    m.vx = -dy * 0.006;
    m.ry += m.vy;
    m.rx = Math.max(-1.2, Math.min(1.2, m.rx + m.vx));
  };
  const onPointerUp = () => {
    motion.current.dragging = false;
  };
  const onKeyDown = (e) => {
    const m = motion.current;
    const step = 0.04;
    if (e.key === "ArrowLeft") m.vy = -step;
    else if (e.key === "ArrowRight") m.vy = step;
    else if (e.key === "ArrowUp") m.vx = step;
    else if (e.key === "ArrowDown") m.vx = -step;
    else return;
    e.preventDefault();
  };

  return (
    <div className="sphere-wrap">
      <div
        ref={stageRef}
        className="sphere"
        role="img"
        aria-label="Rotating sphere of technology logos. Drag or use arrow keys to spin it."
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
        onMouseEnter={() => (motion.current.paused = true)}
        onMouseLeave={() => {
          motion.current.paused = false;
          setHovered(null);
        }}
      >
        {TECH.map((t, i) => (
          <span
            key={t.name}
            ref={(el) => (nodeRefs.current[i] = el)}
            className="sphere-node"
            onPointerEnter={() => setHovered(t.name)}
            aria-hidden="true"
          >
            {t.icon ? (
              <svg viewBox="0 0 24 24">
                <path d={t.icon.path} />
              </svg>
            ) : (
              <span className="sphere-wordmark">{t.mark}</span>
            )}
          </span>
        ))}
      </div>
      <p className="sphere-caption" aria-live="polite">
        {hovered ?? "Drag to spin"}
      </p>
    </div>
  );
};

export default TechSphere;
