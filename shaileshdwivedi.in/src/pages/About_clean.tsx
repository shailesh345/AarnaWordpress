import SEO from "../lib/seo";
import { Link } from "react-router-dom";
import { ASCIIDiagram, ProgressMeter } from "../components/ASCIIGraphics";
import InteractiveTerminal from "../components/InteractiveTerminal";
import {
  CodeRain,
  NetworkVisualization,
  AnimatedASCII,
} from "../components/AdvancedASCII";
import { Typewriter, GlitchText } from "../components/AdvancedAnimations";
import {
  NeuralNetworkBackground,
  MathEquationStream,
  AlgorithmVisualization,
} from "../components/AIMLBackground";
import {
  HologramDisplay,
  InteractiveCircuitBoard,
  VintageDataStream,
} from "../components/AdvancedInteractive";
import {
  VintageTerminal,
  VintageOscilloscope,
  VintageStatusPanel,
} from "../components/VintageInteractive";
import {
  InteractiveNetworkGraph,
  VintageProgressBars,
} from "../components/VintageWidgets";

export default function About() {
  const skills = [
    { name: "Machine Learning", level: 95 },
    { name: "Deep Learning", level: 90 },
    { name: "Neural Networks", level: 88 },
    { name: "NLP Processing", level: 85 },
    { name: "Computer Vision", level: 82 },
    { name: "AI Deployment", level: 92 },
  ];

  const techStack = [
    { category: "AI/ML", tech: ["Python", "TensorFlow", "PyTorch", "Pandas"] },
    { category: "Backend", tech: ["Node.js", "FastAPI", "Django", "Flask"] },
    {
      category: "Frontend",
      tech: ["React", "TypeScript", "Next.js", "Tailwind"],
    },
    {
      category: "Database",
      tech: ["PostgreSQL", "MongoDB", "Redis", "Pinecone"],
    },
    { category: "Cloud", tech: ["AWS", "GCP", "Azure", "Docker"] },
    { category: "Tools", tech: ["Git", "Jupyter", "VSCode", "Postman"] },
  ];

  return (
    <>
      <SEO
        title="About - Shailesh Dwivedi | AI/ML Engineer"
        description="Learn about Shailesh Dwivedi's journey in AI/ML engineering, skills, and passion for technology."
      />

      <div className="min-h-screen bg-white text-black relative overflow-hidden">
        <NeuralNetworkBackground />
        <MathEquationStream />
        <AlgorithmVisualization />
        <div className="phone-grid min-h-screen relative z-10">
          <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-12 animate-fadeIn">
              <GlitchText>
                <h1 className="old-phone-title text-3xl mb-4">
                  <Typewriter text="ABOUT_ME.EXE" speed={100} />
                </h1>
              </GlitchText>
              <p className="phone-font text-lg max-w-2xl mx-auto">
                <Typewriter
                  text="Passionate AI/ML Engineer crafting intelligent solutions for tomorrow's challenges"
                  speed={30}
                  delay={2000}
                />
              </p>
            </div>

            {/* Interactive Terminal Section */}
            <div className="mb-12 animate-slide-in-left">
              <div className="text-center mb-6">
                <h2 className="old-phone-title text-xl mb-2">
                  <Typewriter
                    text="INTERACTIVE_PROFILE_TERMINAL"
                    speed={60}
                    delay={3000}
                  />
                </h2>
                <p className="phone-font text-sm text-gray-600">
                  <Typewriter
                    text="Explore my background through terminal commands"
                    speed={25}
                    delay={4000}
                  />
                </p>
              </div>
              <InteractiveTerminal
                title="Shailesh@About ~ Interactive Profile"
                welcomeMessage="Welcome to my interactive profile! Type 'help' to see available commands."
              />
            </div>

            {/* Main Content Grid - Enhanced with Animations */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* About Story - Enhanced */}
              <div className="old-phone-card p-6 crt-effect animate-slide-in-left">
                <h2 className="old-phone-title text-xl mb-4">
                  <Typewriter text="MY_JOURNEY.LOG" speed={80} delay={5000} />
                </h2>
                <div className="phone-font text-sm space-y-4">
                  <div
                    className="animate-fade-in-up"
                    style={{ animationDelay: "6s" }}
                  >
                    <AnimatedASCII type="typing" />
                  </div>
                  <p
                    className="animate-fade-in-up"
                    style={{ animationDelay: "7s" }}
                  >
                    I'm a dedicated AI/ML Engineer with a passion for building
                    intelligent systems that solve real-world problems. My
                    journey began with curiosity about how machines can learn
                    and adapt.
                  </p>
                  <p
                    className="animate-fade-in-up"
                    style={{ animationDelay: "8s" }}
                  >
                    Over the years, I've specialized in machine learning, deep
                    learning, and neural networks, developing solutions that
                    bridge the gap between cutting-edge research and practical
                    applications.
                  </p>
                  <p
                    className="animate-fade-in-up"
                    style={{ animationDelay: "9s" }}
                  >
                    I believe in the power of AI to transform industries and
                    improve lives, which drives my commitment to continuous
                    learning and innovation.
                  </p>
                </div>
              </div>

              {/* Network Visualization */}
              <div className="space-y-6">
                <div className="old-phone-card p-6 animate-slide-in-right">
                  <h2 className="old-phone-title text-xl mb-4">
                    <Typewriter
                      text="NEURAL_NETWORK_STATUS"
                      speed={80}
                      delay={5500}
                    />
                  </h2>
                  <NetworkVisualization />
                </div>

                {/* Stats */}
                <div
                  className="old-phone-card p-6 animate-slide-in-right"
                  style={{ animationDelay: "1s" }}
                >
                  <h2 className="old-phone-title text-xl mb-4">
                    <Typewriter
                      text="ACHIEVEMENTS.JSON"
                      speed={80}
                      delay={6000}
                    />
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="old-phone-button p-4 text-center hover:animate-neon-glow transition-all duration-300">
                      <div className="old-phone-title text-2xl">50+</div>
                      <div className="phone-font text-xs">Projects</div>
                    </div>
                    <div className="old-phone-button p-4 text-center hover:animate-neon-glow transition-all duration-300">
                      <div className="old-phone-title text-2xl">9+</div>
                      <div className="phone-font text-xs">Years</div>
                    </div>
                    <div className="old-phone-button p-4 text-center hover:animate-neon-glow transition-all duration-300">
                      <div className="old-phone-title text-2xl">25</div>
                      <div className="phone-font text-xs">Models</div>
                    </div>
                    <div className="old-phone-button p-4 text-center hover:animate-neon-glow transition-all duration-300">
                      <div className="old-phone-title text-2xl">100K+</div>
                      <div className="phone-font text-xs">Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Interactive Systems */}
            <div className="mt-8 bg-black p-6 border-2 border-green-400 rounded-lg">
              <div className="text-center mb-6">
                <HologramDisplay>
                  <h2 className="old-phone-title text-xl text-green-400 mb-2">
                    ADVANCED_SYSTEMS.EXE
                  </h2>
                  <p className="phone-font text-xs text-green-300">
                    Interactive demonstration of system capabilities
                  </p>
                </HologramDisplay>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <VintageTerminal
                  commands={[
                    "> SCANNING NEURAL PATHWAYS...",
                    "> ANALYZING SKILL MATRIX...",
                    "> OPTIMIZING ALGORITHMS...",
                    "> COMPILING EXPERIENCE...",
                    "> STATUS: FULLY OPERATIONAL",
                    "> AI ENGINEER ONLINE",
                  ]}
                />

                <VintageStatusPanel />

                <div className="space-y-4">
                  <VintageOscilloscope />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <InteractiveCircuitBoard />
                <InteractiveNetworkGraph />
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-8 old-phone-card p-6">
              <h2 className="old-phone-title text-xl mb-6">
                Skills & Expertise
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="animate-slideUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="phone-font text-sm">{skill.name}</span>
                      <span className="phone-font text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 border border-black h-2">
                      <div
                        className="h-full bg-black transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-8 old-phone-card p-6">
              <h2 className="old-phone-title text-xl mb-6">Technology Stack</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {techStack.map((category) => (
                  <div key={category.category}>
                    <h3 className="old-phone-title text-sm mb-3">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.tech.map((tech) => (
                        <div
                          key={tech}
                          className="old-phone-button px-3 py-1 text-center"
                        >
                          <span className="phone-font text-xs">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Skills & Timeline Section */}
            <div className="mt-12 grid lg:grid-cols-2 gap-8">
              {/* Skills Visualization */}
              <div className="animate-slideUp">
                <ProgressMeter title="AI/ML EXPERTISE" skills={skills} />
              </div>

              {/* Career Timeline */}
              <div
                className="animate-slideUp"
                style={{ animationDelay: "150ms" }}
              >
                <ASCIIDiagram type="timeline" title="CAREER PROGRESSION" />
              </div>
            </div>

            {/* Development Approach */}
            <div
              className="mt-8 animate-slideUp"
              style={{ animationDelay: "300ms" }}
            >
              <ASCIIDiagram
                type="hierarchy"
                title="TEAM LEADERSHIP STRUCTURE"
              />
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="old-phone-button px-8 py-3 inline-block"
              >
                <span className="phone-font">Let's Work Together</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
