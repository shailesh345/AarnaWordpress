import SEO from "../lib/seo";
import { experience } from "../data/experience";
import { ASCIIDiagram, ASCIIChart } from "../components/ASCIIGraphics";

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience - Shailesh Dwivedi | AI/ML Engineer"
        description="Professional experience and career journey of Shailesh Dwivedi in AI/ML and software development."
      />

      <div className="min-h-screen bg-white text-black">
        <div className="phone-grid min-h-screen">
          <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-12 animate-fadeIn">
              <h1 className="old-phone-title text-3xl mb-4">
                Professional Experience
              </h1>
              <p className="phone-font text-lg max-w-2xl mx-auto">
                Career journey from individual contributor to technical leader
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={`${job.company}-${job.title}`}
                  className="old-phone-card p-6 animate-slideUp"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Job Header */}
                  <div className="mb-4">
                    <h2 className="old-phone-title text-xl mb-2">
                      {job.title}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="phone-font text-lg font-medium">
                        {job.company}
                      </span>
                      <span className="phone-font text-sm">{job.period}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <h3 className="old-phone-title text-sm mb-3">
                      Key Highlights:
                    </h3>
                    <div className="space-y-2">
                      {job.highlights.map((highlight, idx) => (
                        <div key={idx} className="old-phone-button p-2">
                          <span className="phone-font text-xs">
                            • {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Career Progression Visuals */}
            <div className="mt-12 grid lg:grid-cols-2 gap-8">
              {/* Career Timeline */}
              <div className="animate-slideUp">
                <ASCIIDiagram type="timeline" title="CAREER GROWTH" />
              </div>

              {/* Leadership Structure */}
              <div
                className="animate-slideUp"
                style={{ animationDelay: "150ms" }}
              >
                <ASCIIDiagram type="hierarchy" title="LEADERSHIP APPROACH" />
              </div>
            </div>

            {/* Impact Metrics */}
            <div
              className="mt-8 animate-slideUp"
              style={{ animationDelay: "300ms" }}
            >
              <ASCIIChart
                title="CAREER IMPACT METRICS"
                data={[
                  { label: "Team Size Growth", value: 12, max: 15 },
                  { label: "Project Success Rate", value: 94 },
                  { label: "Client Satisfaction", value: 98 },
                  { label: "Technology Adoption", value: 15, max: 20 },
                ]}
              />
            </div>

            {/* Career Summary */}
            <div className="mt-12 old-phone-card p-6">
              <h2 className="old-phone-title text-xl mb-6 text-center">
                Career Highlights
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
                    <div className="old-phone-title text-2xl">10+</div>
                    <div className="phone-font text-xs">Companies</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="old-phone-button p-4">
                    <div className="old-phone-title text-2xl">50+</div>
                    <div className="phone-font text-xs">Projects Led</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="old-phone-button p-4">
                    <div className="old-phone-title text-2xl">100+</div>
                    <div className="phone-font text-xs">Team Members</div>
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
