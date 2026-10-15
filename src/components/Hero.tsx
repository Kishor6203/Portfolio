
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="hero-intro">Hey, I'm Kishor Kumar</p>

          <h1>
            I build digital
            <br />
            <span className="gradient-text">experiences</span> that
            <br />
            work beautifully.
          </h1>

          <p className="hero-description">
            Frontend Engineer focused on building scalable, fast
            and intuitive web applications with React, TypeScript
            and modern frontend tools.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work
              <ArrowUpRight size={17} />
            </a>

            <a className="button button-secondary" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={15} />
              Bangalore, India
            </span>

            <a
              href="https://github.com/Kishor6203"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={15} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Frontend development illustration"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="profile-card">
            <div className="profile-card-top">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>

              <span className="mono">kishor.dev</span>

              <span className="online-label">● online</span>
            </div>

            <div className="code-art">
              <div>
                <span className="code-muted">01</span>{" "}
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </div>

              <div>
                <span className="code-muted">02</span> &nbsp; name:{" "}
                <span className="code-green">'Kishor Kumar'</span>,
              </div>

              <div>
                <span className="code-muted">03</span> &nbsp; role:{" "}
                <span className="code-green">'Frontend Engineer'</span>,
              </div>

              <div>
                <span className="code-muted">04</span> &nbsp; stack: [
              </div>

              <div>
                <span className="code-muted">05</span> &nbsp; &nbsp;{" "}
                <span className="code-orange">'React'</span>,{" "}
                <span className="code-orange">'TS'</span>,
              </div>

              <div>
                <span className="code-muted">06</span> &nbsp; &nbsp;{" "}
                <span className="code-orange">'Redux'</span>,{" "}
                <span className="code-orange">'APIs'</span>
              </div>

              <div>
                <span className="code-muted">07</span> &nbsp; ],
              </div>

              <div>
                <span className="code-muted">08</span> &nbsp; passion:{" "}
                <span className="code-green">'building'</span>
              </div>

              <div>
                <span className="code-muted">09</span>
                {"}"};
              </div>

              <div className="code-cursor">
                <span className="code-muted">10</span>{" "}
                <span className="code-purple">return</span>{" "}
                <span className="code-blue">impact</span>
                <span className="cursor">▍</span>
              </div>
            </div>

            <div className="profile-card-footer">
              <span className="mini-react">⚛</span>
              <span>Crafting clean interfaces</span>
              <span className="footer-spark">✳</span>
            </div>
          </div>

          <div className="floating-chip chip-react">
            <span>⚛</span>
            React.js
          </div>

          <div className="floating-chip chip-ts">
            <span>TS</span>
            TypeScript
          </div>

          <div className="floating-chip chip-performance">
            <span>↗</span>

            <div>
              <strong>20–25%</strong>
              <small>Performance gain</small>
            </div>
          </div>

          <div className="hero-scroll">
            <ArrowDown size={14} />
            SCROLL TO EXPLORE
          </div>
        </div>
      </div>

      <div className="hero-bottom-line" />
    </section>
  );
}
