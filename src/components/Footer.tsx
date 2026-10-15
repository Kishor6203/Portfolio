
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          {/* Brand */}
          <a
            href="#home"
            className="footer-brand"
            aria-label="Kishor Kumar - Back to home"
          >
            <span className="footer-brand-mark">K</span>

            <span className="footer-brand-content">
              <span className="footer-brand-name">
                KISHOR KUMAR
                <span className="footer-brand-dot">.</span>
              </span>

              <span className="footer-brand-role">
                FRONTEND ENGINEER
              </span>
            </span>
          </a>

          {/* Tagline */}
          <div className="footer-message">
            <p className="footer-eyebrow">
              BUILDING FOR THE WEB
            </p>

            <p className="footer-tagline">
              Crafting digital experiences.
              <br />
              <span>Building with modern web technologies.</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-social-section">
            <span className="footer-social-label">
              CONNECT WITH ME
            </span>

            <div className="footer-socials">
              <a
                href="https://github.com/Kishor6203"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Visit GitHub profile"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Visit LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:kishor836566@gmail.com"
                className="footer-social-link"
                aria-label="Send an email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Kishor Kumar.
            <span> All rights reserved.</span>
          </p>

          <p className="footer-credit">
            Crafted with <span className="footer-heart">♥</span> and
            attention to detail.
          </p>

          <a
            href="#home"
            className="footer-back-top"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
