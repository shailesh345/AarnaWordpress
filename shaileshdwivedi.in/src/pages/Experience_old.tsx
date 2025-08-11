import SEO from "../lib/seo";
import Section from "../components/Section";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <>
      <SEO title="Experience" />
      <main className="pt-20 bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
        <Section
          title="PROFESSIONAL_JOURNEY.EXE"
          description="NINE_YEARS.DAT OF LEADERSHIP, INNOVATION, AND TECHNICAL_EXCELLENCE.SYS ACROSS DIVERSE_INDUSTRIES.DIR"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black pixel-font mb-6">
              <span className="text-cyan-400">CAREER</span>{" "}
              <span className="text-pink-400">JOURNEY</span>
            </h1>
            <div className="bg-black border-4 border-green-400 pixel-perfect p-6 max-w-4xl mx-auto text-left">
              <div className="text-green-400 pixel-font text-lg mb-4">
                C:\PORTFOLIO\EXPERIENCE&gt; LOAD_CAREER.EXE
              </div>
              <div className="text-green-300 pixel-font text-lg leading-relaxed">
                ► FROM INDIVIDUAL_CONTRIBUTOR TO{" "}
                <span className="text-cyan-400 animate-pulse">
                  [TECHNICAL_LEADER]
                </span>
                <br />► DRIVING{" "}
                <span className="text-yellow-400">[INNOVATION]</span> AND
                <br />► <span className="text-pink-400">
                  [SCALING_TEAMS]
                </span>{" "}
                ACROSS MULTIPLE_ORGANIZATIONS.INI
              </div>
              <div className="text-green-400 pixel-font text-lg mt-4 animate-pulse">
                C:\PORTFOLIO\EXPERIENCE&gt; _
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Retro Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-2 bg-gradient-to-b from-cyan-400 via-yellow-400 to-pink-400 pixel-perfect" />

            <div className="space-y-12">
              {experience.map((r, index) => (
                <div
                  key={r.title}
                  className="relative pl-16"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Retro Timeline dot */}
                  <div className="absolute left-3 top-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 pixel-perfect border-4 border-white" />

                  <div className="bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-8 hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400 pixel-font mb-2 uppercase">
                          {r.title.replace(/\s+/g, "_")}.EXE
                        </h3>
                        <p className="text-xl text-yellow-400 pixel-font font-bold">
                          {r.company.toUpperCase()}.COM
                        </p>
                      </div>
                      <span className="inline-flex items-center px-4 py-2 pixel-perfect bg-gradient-to-r from-green-400 to-cyan-400 text-black pixel-font font-bold mt-4 lg:mt-0 border-2 border-white">
                        {r.period.toUpperCase()}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-pink-400 pixel-font text-lg">
                        ═══ KEY_ACHIEVEMENTS.LOG ═══
                      </h4>
                      <ul className="space-y-3">
                        {r.highlights.map((h, hIndex) => (
                          <li
                            key={h}
                            className="flex items-start text-green-300 pixel-font"
                            style={{
                              animationDelay: `${index * 200 + hIndex * 100}ms`,
                            }}
                          >
                            <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 pixel-perfect mt-1 mr-4" />
                            <span className="leading-relaxed">
                              ► {h.toUpperCase()}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Retro Experience summary */}
          <div className="mt-20">
            <div className="bg-black border-4 border-green-400 pixel-perfect p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-green-400 pixel-font mb-4">
                  ═══ CAREER_HIGHLIGHTS.SYS ═══
                </h3>
                <div className="w-32 h-2 bg-gradient-to-r from-green-400 to-cyan-400 pixel-perfect mx-auto mb-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-6 hover:scale-110 transition-transform duration-200">
                  <div className="text-4xl font-black text-yellow-400 pixel-font mb-2">
                    9+
                  </div>
                  <div className="text-cyan-400 pixel-font font-bold">
                    YEARS_EXPERIENCE.DAT
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-6 hover:scale-110 transition-transform duration-200">
                  <div className="text-4xl font-black text-pink-400 pixel-font mb-2">
                    30+
                  </div>
                  <div className="text-cyan-400 pixel-font font-bold">
                    PROJECTS_DELIVERED.LOG
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-6 hover:scale-110 transition-transform duration-200">
                  <div className="text-4xl font-black text-green-400 pixel-font mb-2">
                    10+
                  </div>
                  <div className="text-cyan-400 pixel-font font-bold">
                    ENGINEERS_MENTORED.TXT
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-6 hover:scale-110 transition-transform duration-200">
                  <div className="text-4xl font-black text-orange-400 pixel-font mb-2">
                    5+
                  </div>
                  <div className="text-cyan-400 pixel-font font-bold">
                    INDUSTRIES_SERVED.DIR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
