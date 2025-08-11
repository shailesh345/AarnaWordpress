import type { Project } from "@/data/projects";

type Props = { project: Project };
export default function ProjectCard({ project }: Props) {
  return (
    <article className="group bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-6 transition-transform duration-300 hover:scale-105 relative overflow-hidden">
      {/* Retro scanline effect */}
      <div className="absolute inset-0 crt-effect opacity-30" />

      {/* Content */}
      <div className="relative z-10">
        <div className="h-2 w-20 pixel-perfect bg-gradient-to-r from-yellow-400 to-orange-500 mb-4 group-hover:w-32 transition-all duration-300" />

        <h3 className="pixel-font font-bold text-xl mb-3 text-cyan-400 uppercase">
          {project.title.replace(/\s+/g, "_")}.EXE
        </h3>

        <div className="bg-black border-2 border-green-400 pixel-perfect p-4 mb-4">
          <p className="text-green-300 pixel-font leading-relaxed">
            ► {project.summary.toUpperCase()}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={tech}
              className="pixel-font font-bold px-3 py-1 pixel-perfect bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-2 border-white hover:scale-110 transition-transform duration-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tech.toUpperCase()}
            </span>
          ))}
        </div>

        {(project.links?.demo || project.links?.code) && (
          <div className="flex gap-4 pt-2">
            {project.links?.demo && (
              <a
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-black pixel-font font-bold px-4 py-2 pixel-perfect border-4 border-white hover:scale-105 transition-transform duration-200 group/link"
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
              >
                <span>► LIVE_DEMO.BAT</span>
                <span className="ml-2 group-hover/link:animate-pulse">⚡</span>
              </a>
            )}
            {project.links?.code && (
              <a
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white pixel-font font-bold px-4 py-2 pixel-perfect border-4 border-cyan-400 hover:scale-105 transition-transform duration-200 group/link"
                href={project.links.code}
                target="_blank"
                rel="noreferrer"
              >
                <span>► SOURCE.SRC</span>
                <span className="ml-2 group-hover/link:animate-pulse">📁</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
