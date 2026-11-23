import Monogram from "./Monogram";
import { profile } from "../data/content";

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-row">
      <Monogram className="footer-mark" />
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React and Three.js.
      </p>
    </div>
  </footer>
);

export default Footer;
