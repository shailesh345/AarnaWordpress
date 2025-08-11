import type { Project } from "../data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <article className="old-phone-card p-6 hover:transform hover:translate-y-1 transition-all duration-200">
      
      {/* Project Title */}
      <h3 className="old-phone-title text-lg mb-3">
        {project.title}
      </h3>

      {/* Project Description */}
      <div className="old-phone-terminal p-4 mb-4">
        <p className="phone-font text-sm">
          {project.summary}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="old-phone-button px-2 py-1"
          >
            <span className="phone-font text-xs">{tech}</span>
          </span>
        ))}
      </div>

      {/* Project Links */}
      {(project.links?.demo || project.links?.code) && (
        <div className="flex gap-3 pt-2">
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="old-phone-button px-4 py-2 bg-black text-white hover:bg-gray-800"
            >
              <span className="phone-font text-sm">Live Demo</span>
            </a>
          )}
          {project.links?.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noreferrer"
              className="old-phone-button px-4 py-2"
            >
              <span className="phone-font text-sm">View Code</span>
            </a>
          )}
        </div>
      )}

    </article>
  );
}
