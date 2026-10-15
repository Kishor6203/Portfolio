
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-heading-row">
          <SectionHeading
            eyebrow="FEATURED PROJECTS"
            title="A few things I've built."
            description="A selection of product experiences focused on clarity, reusable architecture and useful interactions."
            number="03"
          />

          <span className="project-count">
            03 CASE STUDIES <span>↘</span>
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
