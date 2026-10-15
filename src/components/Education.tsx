
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container education-grid">
        <SectionHeading
          eyebrow="EDUCATION"
          title="The foundation."
          number="05"
        />

        <article className="education-card">
          <div className="education-icon">
            <GraduationCap size={25} />
          </div>

          <div className="education-info">
            <span className="education-date">
              COMPLETED · 2024
            </span>

            <h3>Master of Computer Applications</h3>

            <p>Vinoba Bhave University, Hazaribagh</p>
          </div>

          <div className="education-score">
            <strong>
              7.2<span>/10</span>
            </strong>

            <small>CGPA</small>
          </div>
        </article>
      </div>
    </section>
  );
}
