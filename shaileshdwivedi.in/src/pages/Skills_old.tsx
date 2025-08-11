import SEO from "../lib/seo";
import Section from "../components/Section";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <>
      <SEO title="Skills" />
      <main className="pt-20 bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
        <Section
          title="TECHNICAL_EXPERTISE.EXE"
          description="NINE_YEARS.DAT OF HANDS-ON EXPERIENCE WITH RETRO_TECHNOLOGIES.SYS AND PREMIUM_PATTERNS.LIB"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black pixel-font mb-6">
              <span className="text-cyan-400">TECHNICAL</span>{" "}
              <span className="text-pink-400">EXPERTISE</span>
            </h1>
            <div className="bg-black border-4 border-green-400 pixel-perfect p-6 max-w-4xl mx-auto text-left">
              <div className="text-green-400 pixel-font text-lg mb-4">
                C:\PORTFOLIO\SKILLS&gt; LOAD_EXPERIENCE.EXE
              </div>
              <div className="text-green-300 pixel-font text-lg leading-relaxed">
                ► NINE_YEARS OF{" "}
                <span className="text-cyan-400 animate-pulse">
                  [HANDS-ON_EXPERIENCE]
                </span>
                <br />► WITH{" "}
                <span className="text-yellow-400">[MODERN_TECHNOLOGIES]</span>,
                <br />►{" "}
                <span className="text-pink-400">
                  [PREMIUM_ARCHITECTURAL_PATTERNS]
                </span>
                , AND
                <br />►{" "}
                <span className="text-cyan-400">[SCALABLE_SYSTEM_DESIGN]</span>
              </div>
              <div className="text-green-400 pixel-font text-lg mt-4 animate-pulse">
                C:\PORTFOLIO\SKILLS&gt; _
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((g, index) => (
              <div
                key={g.group}
                className="bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-8 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 pixel-perfect mr-4" />
                  <h3 className="text-2xl font-bold text-cyan-400 pixel-font uppercase">
                    {g.group.replace(/\s+/g, "_")}.LIB
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {g.items.map((s, itemIndex) => (
                    <span
                      key={s}
                      className="inline-flex items-center pixel-font font-bold px-4 py-2 pixel-perfect bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-2 border-white hover:scale-110 transition-transform duration-200"
                      style={{
                        animationDelay: `${index * 150 + itemIndex * 50}ms`,
                      }}
                    >
                      {s.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Retro Skills summary */}
          <div className="mt-20">
            <div className="bg-black border-4 border-green-400 pixel-perfect p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-green-400 pixel-font mb-4">
                  ═══ PHILOSOPHY_AND_APPROACH.SYS ═══
                </h3>
                <div className="w-32 h-2 bg-gradient-to-r from-green-400 to-cyan-400 pixel-perfect mx-auto mb-6" />
              </div>
              <div className="text-green-300 pixel-font text-lg leading-relaxed text-center max-w-4xl mx-auto">
                ► I BELIEVE IN{" "}
                <span className="text-cyan-400 animate-pulse">
                  [CHOOSING_THE_RIGHT_TOOL_FOR_THE_JOB]
                </span>
                ,
                <br />► WITH A STRONG PREFERENCE FOR{" "}
                <span className="text-yellow-400">[SIMPLICITY]</span> AND{" "}
                <span className="text-pink-400">[MAINTAINABILITY]</span>.
                <br />► MY APPROACH COMBINES
                <span className="text-cyan-400">
                  {" "}
                  [MODERN_DEVELOPMENT_PRACTICES]
                </span>{" "}
                <br />► WITH PROVEN{" "}
                <span className="text-yellow-400">
                  [ARCHITECTURAL_PATTERNS]
                </span>
                , ALWAYS KEEPING THE <br />►{" "}
                <span className="text-pink-400">[END_USER_EXPERIENCE]</span> IN
                MIND.
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-6">
                  <div className="text-4xl font-black text-yellow-400 pixel-font mb-2">
                    9+
                  </div>
                  <div className="text-cyan-400 pixel-font font-bold">
                    YEARS_EXPERIENCE.DAT
                  </div>
                </div>
                <div className="text-center bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-6">
                  <div className="text-4xl font-black text-pink-400 pixel-font mb-2">
                    30+
                  </div>
                  <div className="text-cyan-400 pixel-font font-bold">
                    PROJECTS_DELIVERED.LOG
                  </div>
                </div>
                <div className="text-center bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-6">
                  <div className="text-4xl font-black text-green-400 pixel-font mb-2">
                    10+
                  </div>
                  <div className="text-cyan-400 pixel-font font-bold">
                    ENGINEERS_MENTORED.TXT
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
