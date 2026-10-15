
import { ArrowUpRight, ExternalLink } from "lucide-react";

export type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  features: string[];
  stack: string[];
  accent: string;
  link: string;
  linkLabel: string;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className={`project-card project-${project.accent}`}>
      <div className="project-art">
        <div className="project-art-top">
          <span className="project-number">
            {project.number} / SELECTED WORK
          </span>

          <span className="project-art-icon">
            <ExternalLink size={17} />
          </span>
        </div>

        {project.accent === "mint" && (
          <div className="dashboard-mock">
            <div className="mock-sidebar">
              <b>◈</b>
              <i />
              <i />
              <i />
              <i />
            </div>

            <div className="mock-main">
              <div className="mock-title">
                Portfolio overview <span>•••</span>
              </div>

              <div className="mock-balance">
                <small>Total balance</small>
                <strong>$128,430.80</strong>
                <em>↗ 12.8% this month</em>
              </div>

              <div className="mock-chart">
                <div className="chart-lines" />

                <svg
                  viewBox="0 0 300 80"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 66 C25 59 30 45 52 52 S83 25 105 39 S137 52 157 28 S193 35 212 17 S256 27 275 9 S290 15 300 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <div className="mock-bars">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        )}

        {project.accent === "blue" && (
          <div className="hospital-mock">
            <div className="hospital-top">
              <span>✚ carepoint</span>
              <span>Patient Portal</span>
            </div>

            <div className="hospital-welcome">
              Your health,
              <br />
              <b>all in one place.</b>
            </div>

            <div className="appointment-mock">
              <div className="doctor-avatar">✚</div>

              <div>
                <small>UPCOMING APPOINTMENT</small>
                <strong>Dr. Ananya Sharma</strong>
                <span>Cardiology · 10:30 AM</span>
              </div>

              <span className="appointment-check">✓</span>
            </div>

            <div className="hospital-stats">
              <span>
                <b>04</b>
                <small>Appointments</small>
              </span>

              <span>
                <b>02</b>
                <small>Prescriptions</small>
              </span>

              <span>
                <b>01</b>
                <small>Reports</small>
              </span>
            </div>
          </div>
        )}

        {project.accent === "red" && (
          <div className="streaming-mock">
            <div className="streaming-logo">N</div>

            <div className="streaming-word">
              MOVIE NIGHT
              <span>YOUR NEXT FAVORITE AWAITS</span>
            </div>

            <div className="movie-tiles">
              <i>INTERSTELLAR</i>
              <i>THE WITCHER</i>
              <i>
                STRANGER
                <br />
                THINGS
              </i>
              <i>OUR PLANET</i>
            </div>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-type">{project.type}</div>

        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <ul className="project-features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="project-stack">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {project.link ? (
          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            {project.linkLabel}
            <ArrowUpRight size={16} />
          </a>
        ) : (
          <span className="project-link project-link-muted">
            Project details available on request
          </span>
        )}
      </div>
    </article>
  );
}
