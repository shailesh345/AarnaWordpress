import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Typewriter,
  CMDTerminal,
  FloatingParticles,
  GlitchText,
  ScanningLine,
} from "./AdvancedAnimations";
import {
  AIBinaryMatrix,
  MathEquationStream,
  NeuralNetworkBackground,
  AlgorithmVisualization,
} from "./AIMLBackground";

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 500);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  const terminalCommands = [
    {
      command: "whoami",
      output: "shailesh@portfolio:~$ AI/ML Engineer & Full Stack Architect",
      delay: 0,
    },
    {
      command: "cat experience.txt",
      output:
        "9+ years of professional development\n50+ ML models deployed in production\n30+ projects delivered successfully",
      delay: 1000,
    },
    {
      command: "ls skills/",
      output: "python/ react/ tensorflow/ aws/ docker/ kubernetes/",
      delay: 1500,
    },
    {
      command: 'echo "Welcome to my portfolio"',
      output: "System ready. Explore my work below.",
      delay: 2000,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden crt-effect">
      <AIBinaryMatrix intensity={30} />
      <MathEquationStream />
      <AlgorithmVisualization />
      <ScanningLine />
      {/* Grid background pattern with AI/ML styling */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 20px)
          `,
          }}
        />
      </div>{" "}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Terminal */}
          <div className="order-2 lg:order-1">
            {showTerminal && (
              <div className="animate-slide-in-left">
                <CMDTerminal
                  commands={terminalCommands}
                  title="Shailesh@Portfolio ~ Terminal"
                  onComplete={() => setShowContent(true)}
                />
              </div>
            )}
          </div>

          {/* Right side - Main Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            {/* System Status */}
            <div className="animate-fade-in-up">
              <div className="old-phone-card p-4 inline-block animate-neon-glow">
                <div className="phone-font text-sm text-black flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <Typewriter
                    text="SYSTEM_ONLINE • AI_ML_ENGINEER • FULL_STACK"
                    speed={30}
                    delay={500}
                  />
                </div>
              </div>
            </div>

            {/* Main Title with Glitch Effect */}
            <div
              className="space-y-4 animate-slide-in-right"
              style={{ animationDelay: "1s" }}
            >
              <GlitchText className="old-phone-title text-4xl md:text-6xl lg:text-7xl text-black">
                <Typewriter text="SHAILESH DWIVEDI" speed={100} delay={1500} />
              </GlitchText>

              <div className="old-phone-title text-lg md:text-xl text-gray-600">
                <Typewriter
                  text="AI/ML ENGINEER & FULLSTACK ARCHITECT"
                  speed={50}
                  delay={3000}
                />
              </div>
            </div>

            {/* Stats Display */}
            {showContent && (
              <div
                className="old-phone-terminal p-6 animate-fade-in-up"
                style={{ animationDelay: "4s" }}
              >
                <div className="phone-font text-sm text-black space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">9+</div>
                      <div className="text-xs">YEARS EXP</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-xs">ML MODELS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">30+</div>
                      <div className="text-xs">PROJECTS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-xs">ENGINEERS</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {showContent && (
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up"
                style={{ animationDelay: "5s" }}
              >
                <Link
                  to="/projects"
                  className="old-phone-button px-6 py-3 transition-all duration-300 hover:animate-neon-glow"
                >
                  <span className="phone-font text-sm font-bold">
                    VIEW_PROJECTS
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="old-phone-button px-6 py-3 transition-all duration-300 hover:animate-neon-glow"
                >
                  <span className="phone-font text-sm font-bold">
                    CONTACT_ME
                  </span>
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="old-phone-button px-6 py-3 transition-all duration-300 hover:animate-neon-glow"
                >
                  <span className="phone-font text-sm font-bold">
                    DOWNLOAD_CV
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack Display */}
        {showContent && (
          <div
            className="mt-16 animate-fade-in-up"
            style={{ animationDelay: "6s" }}
          >
            <div className="old-phone-terminal p-6 max-w-4xl mx-auto">
              <div className="phone-font text-sm text-black text-center">
                <div className="mb-4 font-bold text-lg">CORE_TECHNOLOGIES</div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-xs">
                  <div className="p-2 border border-gray-300 rounded">
                    PYTHON
                  </div>
                  <div className="p-2 border border-gray-300 rounded">
                    REACT
                  </div>
                  <div className="p-2 border border-gray-300 rounded">
                    NODE.JS
                  </div>
                  <div className="p-2 border border-gray-300 rounded">
                    TENSORFLOW
                  </div>
                  <div className="p-2 border border-gray-300 rounded">AWS</div>
                  <div className="p-2 border border-gray-300 rounded">
                    DOCKER
                  </div>
                  <div className="p-2 border border-gray-300 rounded">
                    KUBERNETES
                  </div>
                  <div className="p-2 border border-gray-300 rounded">
                    MONGODB
                  </div>
                  <div className="p-2 border border-gray-300 rounded">
                    POSTGRESQL
                  </div>
                  <div className="p-2 border border-gray-300 rounded">
                    REDIS
                  </div>
                  <div className="p-2 border border-gray-300 rounded">
                    NGINX
                  </div>
                  <div className="p-2 border border-gray-300 rounded">GIT</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
