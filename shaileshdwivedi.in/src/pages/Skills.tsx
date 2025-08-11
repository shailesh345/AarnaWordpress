import SEO from "../lib/seo";
import { skills } from "../data/skills";
import { ASCIIDiagram, TechStackVisualizer } from "../components/ASCIIGraphics";

export default function Skills() {
  return (
    <>
      <SEO
        title="Skills - Shailesh Dwivedi | AI/ML Engineer"
        description="Explore Shailesh Dwivedi's technical skills in AI/ML, full-stack development, and modern technologies."
      />

      <div className="min-h-screen bg-white text-black">
        <div className="phone-grid min-h-screen">
          <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-12 animate-fadeIn">
              <h1 className="old-phone-title text-3xl mb-4">
                Technical Skills
              </h1>
              <p className="phone-font text-lg max-w-2xl mx-auto">
                Years of hands-on experience with modern technologies and
                architectural patterns
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.group}
                  className="old-phone-card p-6 animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Skill Group Title */}
                  <h2 className="old-phone-title text-lg mb-4 text-center">
                    {skillGroup.group}
                  </h2>

                  {/* Skill Items */}
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="old-phone-button p-3 text-center"
                      >
                        <span className="phone-font text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Skills Architecture */}
            <div className="mt-12 grid lg:grid-cols-2 gap-8">
              {/* Tech Stack Visualization */}
              <div className="animate-slideUp">
                <TechStackVisualizer
                  stacks={[
                    {
                      name: "FRONTEND",
                      technologies: [
                        "React",
                        "TypeScript",
                        "Tailwind",
                        "Next.js",
                      ],
                    },
                    {
                      name: "BACKEND",
                      technologies: [
                        "Node.js",
                        "Python",
                        "FastAPI",
                        "PostgreSQL",
                      ],
                    },
                    {
                      name: "AI/ML",
                      technologies: [
                        "TensorFlow",
                        "PyTorch",
                        "Pandas",
                        "Scikit",
                      ],
                    },
                  ]}
                />
              </div>

              {/* Development Network */}
              <div
                className="animate-slideUp"
                style={{ animationDelay: "150ms" }}
              >
                <ASCIIDiagram type="network" title="TECHNOLOGY ECOSYSTEM" />
              </div>
            </div>

            {/* Summary Section */}
            <div className="mt-12 old-phone-card p-6">
              <h2 className="old-phone-title text-xl mb-6 text-center">
                Experience Summary
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="old-phone-button p-4">
                    <div className="old-phone-title text-2xl">5+</div>
                    <div className="phone-font text-xs">Years Experience</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="old-phone-button p-4">
                    <div className="old-phone-title text-2xl">20+</div>
                    <div className="phone-font text-xs">Technologies</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="old-phone-button p-4">
                    <div className="old-phone-title text-2xl">50+</div>
                    <div className="phone-font text-xs">Projects</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="old-phone-button p-4">
                    <div className="old-phone-title text-2xl">10+</div>
                    <div className="phone-font text-xs">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
