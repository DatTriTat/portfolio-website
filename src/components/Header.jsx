import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Monogram from "./Monogram";
import { profile } from "../data/content";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = NAV.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled || open ? " is-scrolled" : ""}`}>
      <div className="container header-row">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <Monogram className="brand-mark" />
          <span>{profile.name}</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? "is-active" : undefined}>
              {label}
            </a>
          ))}
          <a className="btn btn-small btn-outline" href={profile.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="nav-mobile" aria-label="Primary">
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Resume (PDF)
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
