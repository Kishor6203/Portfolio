
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const strengths = [
  "Reusable component architecture",
  "Frontend performance optimization",
  "API integration & error handling",
  "Production debugging",
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title="Turning complex ideas into simple experiences."
          number="01"
        />

        <div className="about-content">
          <p className="about-lead">
            I'm a Frontend Engineer with{" "}
            <strong>3.5 years of experience</strong> creating
            production-grade web applications that are scalable,
            maintainable and easy to use.
          </p>

          <p className="body-copy">
            My work sits at the intersection of thoughtful UI
            engineering and practical problem-solving. I enjoy
            building modular React applications, shaping reusable
            design patterns, integrating APIs and finding
            opportunities to make interfaces faster and more reliable.
          </p>

          <div className="strength-grid">
            {strengths.map((item) => (
              <div className="strength-item" key={item}>
                <CheckCircle2 size={17} />
                {item}
              </div>
            ))}
          </div>

          <a className="text-link" href="#experience">
            More about my experience
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="container metrics-row">
        <div className="metric">
          <strong>
            3.5<span>+</span>
          </strong>
          <span>Years of experience</span>
        </div>

        <div className="metric">
          <strong>
            25<span>+</span>
          </strong>
          <span>REST API endpoints</span>
        </div>

        <div className="metric">
          <strong>
            30<span>%</span>
          </strong>
          <span>Less feature development effort</span>
        </div>

        <div className="metric">
          <strong>
            20-25<span>%</span>
          </strong>
          <span>Performance improvement</span>
        </div>
      </div>
    </section>
  );
}
