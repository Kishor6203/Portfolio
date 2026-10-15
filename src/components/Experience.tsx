
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

import SectionHeading from "./SectionHeading";
import { experienceHighlights } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container experience-grid">
        <SectionHeading
          eyebrow="WHERE I'VE WORKED"
          title="Building things that matter."
          description="Experience delivering production features with cross-functional teams."
          number="04"
        />

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-marker">
              <BriefcaseBusiness size={18} />
            </div>

            <div className="timeline-content">
              <div className="timeline-top">
                <span className="timeline-date">
                  MAR 2023 — PRESENT
                </span>

                <span className="current-badge">
                  <i />
                  Current role
                </span>
              </div>

              <h3>Frontend Developer</h3>

              <h4>
                LeapSurge Business Innovations Pvt. Ltd.
              </h4>

              <p className="timeline-summary">
                Building and improving production-grade React
                applications across business workflows, with a focus
                on maintainable architecture and frontend performance.
              </p>

              <ul>
                {experienceHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="experience-tags">
                <span>React.js</span>
                <span>TypeScript</span>
                <span>Redux Toolkit</span>
                <span>REST APIs</span>
                <span>Agile</span>
              </div>
            </div>
          </article>

          <div className="experience-note">
            <span className="note-spark">✳</span>

            <p>
              Good frontend engineering is more than making things
              look right — it's making them{" "}
              <strong>
                fast, predictable and easy to evolve.
              </strong>
            </p>

            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
