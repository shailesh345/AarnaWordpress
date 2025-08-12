import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { skills } from "../data/skills";
import { featured } from "../data/projects";
import {
  ASCIIChart,
  ASCIIDiagram,
  TechStackVisualizer,
  ProgressMeter,
  SystemDiagram,
} from "../components/ASCIIGraphics";
import {
  Typewriter,
  CMDTerminal,
  FloatingParticles,
  TerminalProgress,
} from "../components/AdvancedAnimations";
import { CodeRain } from "../components/AdvancedASCII";
import { AIBinaryMatrix } from "../components/AIMLBackground";
import {
  VintageTerminal,
  LLMWorkflowDemo,
  InternetSpeedChecker,
} from "../components/VintageInteractive";
import { HologramDisplay } from "../components/AdvancedInteractive";
import { VintageComputerInterface } from "../components/VintageWidgets";
import { TwoColumnLayout } from "../components/AdvancedEffects";

const Home: React.FC = () => {
  const [sectionsVisible, setSectionsVisible] = useState({
    skills: false,
    projects: false,
    analytics: false,
    stats: false,
  });

  // Get featured skills (first 6)
  const featuredSkills = skills.slice(0, 3);

  // Get top featured projects (first 3)
  const topProjects = featured.slice(0, 3);

  useEffect(() => {
    const timers = [
      setTimeout(
        () => setSectionsVisible((prev) => ({ ...prev, skills: true })),
        1000
      ),
      setTimeout(
        () => setSectionsVisible((prev) => ({ ...prev, projects: true })),
        2000
      ),
      setTimeout(
        () => setSectionsVisible((prev) => ({ ...prev, analytics: true })),
        3000
      ),
      setTimeout(
        () => setSectionsVisible((prev) => ({ ...prev, stats: true })),
        4000
      ),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const projectCommands = [
    {
      command: "ls projects/",
      output: "ai-assistant/ e-commerce/ portfolio/ data-pipeline/",
      delay: 0,
    },
    {
      command: "cat project-stats.json",
      output:
        '{\n  "totalProjects": 30,\n  "inProduction": 25,\n  "technologies": ["React", "Python", "AWS"]\n}',
      delay: 1000,
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <CodeRain lines={20} />
      <Hero />

      {/* Skills Overview Section */}
      <section className="py-16 phone-grid">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="old-phone-title text-2xl mb-4">
              Technical Expertise
            </h2>
            <p className="phone-font text-sm text-gray-600 max-w-2xl mx-auto">
              Specialized in modern technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSkills.map((skillGroup, index) => (
              <div
                key={skillGroup.group}
                className="old-phone-card p-6 animate-slideUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="old-phone-title text-lg mb-4 text-center">
                  {skillGroup.group}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.slice(0, 4).map((skill) => (
                    <div
                      key={skill}
                      className="old-phone-button p-2 text-center"
                    >
                      <span className="phone-font text-xs">{skill}</span>
                    </div>
                  ))}
                  {skillGroup.items.length > 4 && (
                    <div className="text-center pt-2">
                      <span className="phone-font text-xs text-gray-500">
                        +{skillGroup.items.length - 4} more
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/skills"
              className="old-phone-button px-6 py-3 inline-block hover:bg-black hover:text-white transition-colors"
            >
              <span className="phone-font text-sm">View All Skills</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Analytics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="old-phone-title text-2xl mb-4">
              Technical Analytics
            </h2>
            <p className="phone-font text-sm text-gray-600 max-w-2xl mx-auto">
              Visual representation of skills, architecture, and development
              workflow
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills Progress Chart */}
            <div className="animate-slideUp">
              <ProgressMeter
                title="SKILL PROFICIENCY"
                skills={[
                  { name: "React/TypeScript", level: 95 },
                  { name: "Node.js/Python", level: 90 },
                  { name: "AI/ML", level: 88 },
                  { name: "System Design", level: 85 },
                  { name: "DevOps/Cloud", level: 82 },
                ]}
              />
            </div>

            {/* Project Stats Chart */}
            <div
              className="animate-slideUp"
              style={{ animationDelay: "150ms" }}
            >
              <ASCIIChart
                title="PROJECT STATISTICS"
                data={[
                  { label: "Completed", value: 45, max: 50 },
                  { label: "In Progress", value: 5, max: 50 },
                  { label: "Client Satisfaction", value: 98 },
                  { label: "On-Time Delivery", value: 94 },
                ]}
              />
            </div>

            {/* System Architecture */}
            <div
              className="animate-slideUp"
              style={{ animationDelay: "300ms" }}
            >
              <SystemDiagram title="SYSTEM ARCHITECTURE" />
            </div>

            {/* Development Flow */}
            <div
              className="animate-slideUp"
              style={{ animationDelay: "450ms" }}
            >
              <ASCIIDiagram type="flow" title="DEVELOPMENT WORKFLOW" />
            </div>
          </div>

          {/* Tech Stack Visualization */}
          <div
            className="mt-8 animate-slideUp"
            style={{ animationDelay: "600ms" }}
          >
            <TechStackVisualizer
              stacks={[
                {
                  name: "FRONTEND",
                  technologies: ["React", "TypeScript", "Tailwind", "Next.js"],
                },
                {
                  name: "BACKEND",
                  technologies: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
                },
                {
                  name: "AI/ML",
                  technologies: [
                    "TensorFlow",
                    "PyTorch",
                    "Pandas",
                    "Scikit-learn",
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="old-phone-title text-2xl mb-4">Featured Projects</h2>
            <p className="phone-font text-sm text-gray-600 max-w-2xl mx-auto">
              Selected work showcasing technical depth and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topProjects.map((project, index) => (
              <div
                key={project.title}
                className="old-phone-card p-6 animate-slideUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="old-phone-title text-lg mb-3">
                  {project.title}
                </h3>

                <div className="old-phone-terminal p-3 mb-4">
                  <p className="phone-font text-xs">{project.summary}</p>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="old-phone-button px-2 py-1">
                      <span className="phone-font text-xs">{tech}</span>
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="phone-font text-xs text-gray-500 px-2 py-1">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {project.links && (
                  <div className="flex gap-2">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="old-phone-button px-3 py-1 bg-black text-white hover:bg-gray-800 flex-1 text-center"
                      >
                        <span className="phone-font text-xs">Demo</span>
                      </a>
                    )}
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="old-phone-button px-3 py-1 flex-1 text-center"
                      >
                        <span className="phone-font text-xs">Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="old-phone-button px-6 py-3 inline-block hover:bg-black hover:text-white transition-colors"
            >
              <span className="phone-font text-sm">View All Projects</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Interactive Systems Section */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <HologramDisplay>
              <h2 className="old-phone-title text-2xl mb-4 text-black">
                INTERACTIVE SYSTEMS
              </h2>
              <p className="phone-font text-sm text-gray-700 max-w-2xl mx-auto">
                Advanced vintage-style interfaces demonstrating system
                capabilities
              </p>
            </HologramDisplay>
          </div>

          <TwoColumnLayout
            leftContent={
              <div className="space-y-6">
                {/* Internet Speed Checker */}
                <div className="space-y-4">
                  <InternetSpeedChecker />
                </div>
              </div>
            }
            rightContent={
              <div className="space-y-6">
                {/* LLM Workflow Demo */}
                <LLMWorkflowDemo />
              </div>
            }
            className="mb-8"
          />

          {/* System Interface - Full Width */}
          <div className="mt-8">
            <VintageComputerInterface />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 phone-grid">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="old-phone-title text-2xl mb-4">
              Impact & Experience
            </h2>
            <p className="phone-font text-sm text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect my journey and contributions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Delivered" },
              { number: "20+", label: "Technologies" },
              { number: "10+", label: "Team Members Led" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="old-phone-card p-6 text-center animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="old-phone-title text-3xl mb-2">
                  {stat.number}
                </div>
                <div className="phone-font text-xs text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="old-phone-card p-8">
            <h2 className="old-phone-title text-2xl mb-4">
              Ready to Collaborate?
            </h2>
            <p className="phone-font text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm passionate about building innovative solutions and leading
              technical teams. Let's discuss how we can work together on your
              next project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="old-phone-button px-8 py-3 bg-black text-white hover:bg-gray-800"
              >
                <span className="phone-font text-sm">Get In Touch</span>
              </Link>

              <Link
                to="/experience"
                className="old-phone-button px-8 py-3 hover:bg-black hover:text-white transition-colors"
              >
                <span className="phone-font text-sm">View Experience</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
