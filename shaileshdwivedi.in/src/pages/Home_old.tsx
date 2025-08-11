import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import RetroCard from "../components/RetroCard";
import { Code, Cpu, Database, Globe, Server, Smartphone } from "lucide-react";

const Home: React.FC = () => {
  const featuredSkills = [
    { name: "REACT.LIB", icon: Code, level: 95, category: "frontend" },
    { name: "NODE.JS", icon: Server, level: 90, category: "backend" },
    { name: "PYTHON.LIB", icon: Cpu, level: 88, category: "backend" },
    { name: "MONGODB.DB", icon: Database, level: 85, category: "database" },
    { name: "WEB3.LIB", icon: Globe, level: 80, category: "blockchain" },
    { name: "MOBILE.DEV", icon: Smartphone, level: 75, category: "mobile" },
  ];

  const recentProjects = [
    {
      id: 1,
      title: "PORTFOLIO.EXE",
      description: "Personal portfolio website with retro 80s/90s aesthetic",
      tech: ["REACT.LIB", "TAILWIND.CSS", "TYPESCRIPT.LIB"],
      status: "ACTIVE",
      year: "2024",
    },
    {
      id: 2,
      title: "CRYPTO_TRACKER.APP",
      description: "Real-time cryptocurrency tracking application",
      tech: ["REACT.LIB", "NODE.JS", "WEB3.LIB"],
      status: "COMPLETED",
      year: "2024",
    },
    {
      id: 3,
      title: "SMART_CONTRACT.SOL",
      description: "Decentralized finance smart contract platform",
      tech: ["SOLIDITY.LIB", "WEB3.LIB", "ETHEREUM.NET"],
      status: "COMPLETED",
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pixel-perfect">
      {/* Hero Section */}
      <Hero />

      {/* Featured Skills Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="CORE_SKILLS.DIR"
            subtitle="Primary technical expertise and capabilities"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <RetroCard
                  key={skill.name}
                  className="p-6 group"
                  glitchText={skill.name}
                  pulse={index % 2 === 0}
                  scanline={true}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400 group-hover:animate-pulse" />
                      <span className="text-green-400 pixel-font text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 h-2 border border-green-400 mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000 delay-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-green-400 pixel-font text-sm mt-2 uppercase">
                      {skill.category}
                    </p>
                  </div>
                </RetroCard>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Recent Projects Section */}
      <Section className="py-16 bg-gray-850">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="RECENT_PROJECTS.LST"
            subtitle="Latest completed and ongoing development projects"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {recentProjects.map((project) => (
              <RetroCard
                key={project.id}
                className="p-6 group"
                glitchText={project.title}
                pulse={project.status === "ACTIVE"}
                scanline={true}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`pixel-font text-sm px-2 py-1 border ${
                        project.status === "ACTIVE"
                          ? "text-green-400 border-green-400 animate-pulse"
                          : "text-cyan-400 border-cyan-400"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-purple-400 pixel-font text-sm">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="text-green-400 pixel-font text-xs px-2 py-1 border border-green-400 bg-gray-900 hover:bg-green-400 hover:text-gray-900 transition-colors duration-300"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-purple-600 hover:bg-purple-500 text-white pixel-font py-2 px-4 border-2 border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                    VIEW_PROJECT.EXE
                  </button>
                </div>
              </RetroCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Quick Stats Section */}
      {/* Quick Stats Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="SYSTEM_STATS.LOG"
            subtitle="Performance metrics and achievements"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "PROJECTS_COMPLETED",
                value: "50+",
                color: "text-cyan-400",
                glitch: "PROJ_COMP",
              },
              {
                label: "YEARS_EXPERIENCE",
                value: "5+",
                color: "text-green-400",
                glitch: "YEARS_EXP",
              },
              {
                label: "TECHNOLOGIES_MASTERED",
                value: "20+",
                color: "text-purple-400",
                glitch: "TECH_MAST",
              },
              {
                label: "CLIENT_SATISFACTION",
                value: "99%",
                color: "text-yellow-400",
                glitch: "CLIENT_SAT",
              },
            ].map((stat, index) => (
              <RetroCard
                key={stat.label}
                className="p-6 text-center group"
                glitchText={stat.glitch}
                pulse={index % 2 === 0}
                scanline={true}
              >
                <div
                  className={`${stat.color} pixel-font text-3xl mb-2 group-hover:animate-bounce`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 pixel-font text-sm">
                  {stat.label}
                </div>
              </RetroCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="py-16 bg-gray-850">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RetroCard
            className="p-8 relative"
            glitchText="COLLABORATE.NOW"
            pulse={true}
            scanline={true}
          >
            {/* Terminal header */}
            <div className="absolute top-0 left-0 right-0 bg-gray-700 border-b border-cyan-400 p-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <span className="text-cyan-400 pixel-font text-sm ml-4">
                  READY_TO_COLLABORATE.BAT
                </span>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-cyan-400 pixel-font text-2xl mb-4 terminal-scanline">
                {"> READY TO START YOUR PROJECT?"}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Let's build something amazing together. From web applications to
                blockchain solutions, I'm ready to turn your ideas into reality
                with cutting-edge technology and retro style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-500 text-white pixel-font py-3 px-6 border-2 border-green-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 retro-pulse">
                  HIRE_ME.EXE
                </button>
                <button className="bg-purple-600 hover:bg-purple-500 text-white pixel-font py-3 px-6 border-2 border-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
                  VIEW_PORTFOLIO.DIR
                </button>
              </div>
            </div>
          </RetroCard>
        </div>
      </Section>
    </div>
  );
};

export default Home;
