import { useMemo, useState } from "react";
import SEO from "../lib/seo";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { featured, others } from "../data/projects";

export default function Projects() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");

  const allProjects = [...featured, ...others];
  const list = useMemo(
    () =>
      allProjects.filter((p) => {
        const matchesSearch =
          p.title.toLowerCase().includes(q.toLowerCase()) ||
          p.tech.join(" ").toLowerCase().includes(q.toLowerCase()) ||
          (p.tags && p.tags.join(" ").toLowerCase().includes(q.toLowerCase()));

        if (filter === "all") return matchesSearch;
        if (filter === "featured") return featured.includes(p) && matchesSearch;
        if (filter === "others") return others.includes(p) && matchesSearch;

        return matchesSearch;
      }),
    [q, filter]
  );

  const techStack = Array.from(
    new Set(allProjects.flatMap((p) => p.tech))
  ).sort();

  return (
    <>
      <SEO title="Projects" />
      <main className="pt-20 bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
        <Section
          title="FEATURED_PROJECTS.EXE"
          description="SELECTED_WORK.DAT ACROSS PLATFORMS AND STACKS, SHOWCASING TECHNICAL_DEPTH.SYS AND IMPACT.LOG"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black pixel-font mb-6">
              <span className="text-cyan-400">FEATURED</span>{" "}
              <span className="text-pink-400">PROJECTS</span>
            </h1>
            <div className="bg-black border-4 border-green-400 pixel-perfect p-6 max-w-4xl mx-auto text-left">
              <div className="text-green-400 pixel-font text-lg mb-4">
                C:\PORTFOLIO\PROJECTS&gt; LIST_PORTFOLIO.EXE
              </div>
              <div className="text-green-300 pixel-font text-lg leading-relaxed">
                ► A CURATED COLLECTION OF{" "}
                <span className="text-cyan-400 animate-pulse">
                  [SCALABLE_APPLICATIONS]
                </span>{" "}
                AND
                <br />►{" "}
                <span className="text-yellow-400">
                  [INNOVATIVE_SOLUTIONS]
                </span>{" "}
                SPANNING
                <br />► MULTIPLE{" "}
                <span className="text-pink-400">[INDUSTRIES]</span> AND{" "}
                <span className="text-cyan-400">[TECHNOLOGIES]</span>
              </div>
              <div className="text-green-400 pixel-font text-lg mt-4 animate-pulse">
                C:\PORTFOLIO\PROJECTS&gt; _
              </div>
            </div>
          </div>

          {/* Retro filtering */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="bg-black border-4 border-cyan-400 pixel-perfect p-1">
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder=">>> SEARCH PROJECTS, TECHNOLOGIES, OR TAGS..."
                    className="w-full px-4 py-3 bg-black text-green-400 pixel-font placeholder-green-600 focus:outline-none text-lg"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                {["all", "featured", "others"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-6 py-3 pixel-perfect pixel-font font-bold transition-transform duration-200 hover:scale-105 ${
                      filter === f
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black border-4 border-white"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-4 border-cyan-400"
                    }`}
                  >
                    {f === "all"
                      ? "ALL_PROJECTS.DIR"
                      : f === "featured"
                      ? "FEATURED ⭐"
                      : "OTHERS.LST"}
                  </button>
                ))}
              </div>
            </div>

            {/* Retro tech filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="pixel-font font-bold text-cyan-400 mr-3">
                ⚡ QUICK_FILTERS.BAT:
              </span>
              {["React", "Node.js", "TypeScript", "Python", "PostgreSQL"].map(
                (tech) => (
                  <button
                    key={tech}
                    onClick={() => setQ(tech)}
                    className="pixel-font px-4 py-2 pixel-perfect bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-2 border-white font-bold hover:scale-110 transition-transform duration-200"
                  >
                    {tech.toUpperCase()}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Retro results summary */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 px-6 py-3 inline-flex items-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 pixel-perfect" />
              <p className="pixel-font font-bold text-cyan-400">
                SHOWCASING <span className="text-pink-400">{list.length}</span>{" "}
                OF <span className="text-yellow-400">{allProjects.length}</span>{" "}
                PROJECTS.DAT
                {q && ` MATCHING "${q.toUpperCase()}"`}
                {filter !== "all" && ` IN ${filter.toUpperCase()}.DIR`}
              </p>
            </div>
          </div>

          {/* Retro projects grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {list.map((p, index) => (
              <div
                key={p.title}
                style={{ animationDelay: `${index * 150}ms` }}
                className="hover:scale-105 transition-transform duration-300"
              >
                <ProjectCard project={p} />
              </div>
            ))}
          </div>

          {list.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-black border-4 border-red-400 pixel-perfect p-12 max-w-md mx-auto">
                <div className="text-red-400 mb-6 pixel-font text-6xl">⚠</div>
                <p className="text-red-300 pixel-font text-lg mb-4 font-bold">
                  ERROR: NO PROJECTS FOUND
                  <br />
                  MATCHING YOUR CRITERIA.
                </p>
                <button
                  onClick={() => {
                    setQ("");
                    setFilter("all");
                  }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-black pixel-font font-bold px-6 py-3 pixel-perfect border-4 border-white hover:scale-105 transition-transform duration-200"
                >
                  ► CLEAR_FILTERS.BAT
                </button>
              </div>
            </div>
          )}
        </Section>
      </main>
    </>
  );
}
