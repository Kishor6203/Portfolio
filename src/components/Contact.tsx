
import {
  ArrowUpRight,
  Copy,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import SectionHeading from "./SectionHeading";

export default function Contact() {
  const email = "kishor836566@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Email address copied!");
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-orb orb-a" />
          <div className="contact-orb orb-b" />

          <div className="contact-content">
            <SectionHeading
              eyebrow="WHAT'S NEXT?"
              title="Let's build something great."
              description="Have a role, project or idea in mind? I'd love to hear about it."
              number="06"
            />

            <a
              className="button button-primary contact-main-button"
              href={`mailto:${email}?subject=${encodeURIComponent(
                "Let's connect"
              )}`}
            >
              Start a conversation
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-details">
            <button
              className="contact-detail email-copy"
              onClick={copyEmail}
            >
              <span className="contact-detail-icon">
                <Mail size={18} />
              </span>

              <span>
                <small>EMAIL ME</small>
                <strong>{email}</strong>
              </span>

              <Copy className="copy-icon" size={15} />
            </button>

            <a
              className="contact-detail"
              href="tel:+916203836566"
            >
              <span className="contact-detail-icon">
                <Phone size={18} />
              </span>

              <span>
                <small>CALL ME</small>
                <strong>+91 62038 36566</strong>
              </span>

              <ArrowUpRight className="copy-icon" size={15} />
            </a>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MapPin size={18} />
              </span>

              <span>
                <small>BASED IN</small>
                <strong>Bangalore, India</strong>
              </span>
            </div>

            <a
              className="contact-detail"
              href="https://github.com/Kishor6203"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-detail-icon">
                <Github size={18} />
              </span>

              <span>
                <small>CODE & PROJECTS</small>
                <strong>GitHub profile</strong>
              </span>

              <ArrowUpRight className="copy-icon" size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
