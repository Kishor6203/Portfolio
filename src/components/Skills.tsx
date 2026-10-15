
import {
  Braces,
  Boxes,
  Gauge,
  Layers3,
  Wrench,
  Workflow,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

const icons = [
  Braces,
  Layers3,
  Workflow,
  Boxes,
  Gauge,
  Wrench,
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="MY TOOLKIT"
          title="Skills built for the real world."
          description="The tools and practices I use to ship reliable, performant frontend experiences."
          number="02"
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];

            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-head">
                  <span className="skill-icon">
                    <Icon size={19} />
                  </span>

                  <span className="skill-index">
                    0{index + 1}
                  </span>
                </div>

                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
