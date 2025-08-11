import { useMemo, useState } from "react";
import SEO from "../lib/seo";
import ProjectCard from "../components/ProjectCard";
import { featured, others } from "../data/projects";
import { ASCIIChart, ASCIIDiagram } from "../components/ASCIIGraphics";

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

  return (
    <>
      <SEO
        title="Projects - Shailesh Dwivedi | AI/ML Engineer"
        description="Explore my portfolio of AI/ML projects, full-stack applications, and innovative solutions."
      />

      <div className="min-h-screen bg-white text-black">
        <div className="phone-grid min-h-screen">
          <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-12 animate-fadeIn">
              <h1 className="old-phone-title text-3xl mb-4">My Projects</h1>
              <p className="phone-font text-lg max-w-2xl mx-auto">
                A collection of AI/ML projects and full-stack applications
                showcasing my technical skills
              </p>
            </div>

            {/* Filter Controls */}
            <div className="old-phone-card p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-black phone-font text-sm"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-2">
                  {[
                    { key: "all", label: "All" },
                    { key: "featured", label: "Featured" },
                    { key: "others", label: "Others" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setFilter(item.key)}
                      className={`old-phone-button px-4 py-2 ${
                        filter === item.key
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <span className="phone-font text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="phone-font text-sm">
                Showing {list.length} project{list.length !== 1 ? "s" : ""}
                {q && ` matching "${q}"`}
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((project, index) => (
                <div
                  key={project.title}
                  className="animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {/* No Results */}
            {list.length === 0 && (
              <div className="text-center py-12">
                <div className="old-phone-card p-8 max-w-md mx-auto">
                  <h3 className="old-phone-title text-lg mb-2">
                    No Projects Found
                  </h3>
                  <p className="phone-font text-sm mb-4">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setQ("");
                      setFilter("all");
                    }}
                    className="old-phone-button px-4 py-2"
                  >
                    <span className="phone-font text-sm">Clear Filters</span>
                  </button>
                </div>
              </div>
            )}

            {/* Project Analytics */}
            {list.length > 0 && (
              <div className="mt-12 grid lg:grid-cols-2 gap-8">
                {/* Project Statistics */}
                <div className="animate-slideUp">
                  <ASCIIChart
                    title="PROJECT BREAKDOWN"
                    data={[
                      {
                        label: "Featured",
                        value: featured.length,
                        max: allProjects.length,
                      },
                      {
                        label: "Others",
                        value: others.length,
                        max: allProjects.length,
                      },
                      {
                        label: "Displayed",
                        value: list.length,
                        max: allProjects.length,
                      },
                      {
                        label: "Total",
                        value: allProjects.length,
                        max: allProjects.length,
                      },
                    ]}
                  />
                </div>

                {/* Development Flow */}
                <div
                  className="animate-slideUp"
                  style={{ animationDelay: "150ms" }}
                >
                  <ASCIIDiagram type="flow" title="PROJECT LIFECYCLE" />
                </div>
              </div>
            )}

            {/* Tech Stack Summary */}
            {list.length > 0 && (
              <div className="mt-12 old-phone-card p-6">
                <h2 className="old-phone-title text-xl mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(list.flatMap((p) => p.tech)))
                    .sort()
                    .map((tech) => (
                      <span key={tech} className="old-phone-button px-3 py-1">
                        <span className="phone-font text-xs">{tech}</span>
                      </span>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
