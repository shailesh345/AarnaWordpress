import SEO from "../lib/seo";
import { Link } from "react-router-dom";

export default function About() {
  const aiSkills = [
    {
      name: "MACHINE_LEARNING",
      level: 95,
      frameworks: ["TENSORFLOW", "PYTORCH", "SCIKIT"],
    },
    {
      name: "DEEP_LEARNING",
      level: 90,
      frameworks: ["KERAS", "FASTAI", "HUGGINGFACE"],
    },
    {
      name: "NEURAL_NETWORKS",
      level: 88,
      frameworks: ["CNN", "RNN", "TRANSFORMER"],
    },
    {
      name: "NLP_PROCESSING",
      level: 85,
      frameworks: ["SPACY", "NLTK", "BERT"],
    },
    {
      name: "COMPUTER_VISION",
      level: 82,
      frameworks: ["OPENCV", "YOLO", "DETECTRON"],
    },
    {
      name: "AI_DEPLOYMENT",
      level: 92,
      frameworks: ["DOCKER", "KUBERNETES", "AWS"],
    },
  ];

  const techStack = [
    { category: "AI/ML", tech: ["PYTHON", "TENSORFLOW", "PYTORCH", "PANDAS"] },
    { category: "BACKEND", tech: ["NODE.JS", "FASTAPI", "DJANGO", "FLASK"] },
    {
      category: "FRONTEND",
      tech: ["REACT", "TYPESCRIPT", "NEXT.JS", "TAILWIND"],
    },
    {
      category: "DATABASE",
      tech: ["POSTGRESQL", "MONGODB", "REDIS", "PINECONE"],
    },
    { category: "CLOUD", tech: ["AWS", "GCP", "AZURE", "DOCKER"] },
    { category: "TOOLS", tech: ["GIT", "JUPYTER", "VSCODE", "POSTMAN"] },
  ];

  return (
    <>
      <SEO title="About - AI/ML Engineer" />
      <div className="min-h-screen old-phone-terminal p-4">
        {/* Phone LCD Header */}
        <div className="old-phone-card mb-6">
          <div className="old-phone-title text-center text-2xl mb-4">
            ═══ ABOUT_SHAILESH.AI ═══
          </div>
          <div className="old-phone-terminal p-4 text-center">
            <div className="phone-font text-xs dithered-text">
              █ AI/ML_ENGINEER.EXE LOADED █
            </div>
            <div className="phone-font text-xs mt-1">
              STATUS: NEURAL_NETWORKS_ACTIVE ▓▓▓
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Profile Section */}
          <div className="old-phone-card p-6">
            <h2 className="old-phone-title text-lg mb-4">
              ═══ AI_PROFILE.DAT ═══
            </h2>
            <div className="old-phone-terminal p-4 mb-4">
              <p className="phone-font text-xs leading-relaxed text-black">
                █ SPECIALIZING IN CUTTING-EDGE ARTIFICIAL INTELLIGENCE
                <br />█ AND MACHINE LEARNING SOLUTIONS FOR MODERN PROBLEMS.
                <br />█
                <br />█ EXPERTISE: NEURAL_NETWORKS, DEEP_LEARNING, NLP,
                <br />█ COMPUTER_VISION, AND INTELLIGENT_AUTOMATION.
                <br />█
                <br />█ MISSION: TRANSFORMING RAW DATA INTO INTELLIGENT
                <br />█ SYSTEMS THAT MAKE AUTONOMOUS DECISIONS AND
                <br />█ PREDICTIONS WITH HUMAN-LEVEL ACCURACY.
              </p>
            </div>

            <div className="space-y-3">
              <div className="old-phone-button bg-black text-white p-3">
                <div className="phone-font text-xs">
                  █ YEARS_OF_AI_EXPERIENCE: 8+
                </div>
              </div>
              <div className="old-phone-button bg-white text-black p-3">
                <div className="phone-font text-xs">
                  █ ML_MODELS_DEPLOYED: 50+
                </div>
              </div>
              <div className="old-phone-button bg-black text-white p-3">
                <div className="phone-font text-xs">
                  █ AI_RESEARCH_PAPERS: 12
                </div>
              </div>
            </div>
          </div>

          {/* AI Skills Matrix */}
          <div className="old-phone-card p-6">
            <h2 className="old-phone-title text-lg mb-4">
              ═══ AI_SKILLS.MATRIX ═══
            </h2>
            <div className="space-y-4">
              {aiSkills.map((skill, index) => (
                <div key={skill.name} className="old-phone-terminal p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="phone-font text-xs text-black">
                      █ {skill.name}
                    </span>
                    <span className="phone-font text-xs text-black">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-white border border-black h-3 mb-2">
                    <div
                      className="h-full bg-black dithered-bg transition-all duration-1000"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    {skill.frameworks.map((framework) => (
                      <span
                        key={framework}
                        className="phone-font text-[8px] bg-white text-black border border-black px-1"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="lg:col-span-2">
            <div className="old-phone-card p-6">
              <h2 className="old-phone-title text-lg mb-4 text-center">
                ═══ TECHNOLOGY_STACK.SYS ═══
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((category, index) => (
                  <div
                    key={category.category}
                    className="old-phone-terminal p-4"
                  >
                    <h3 className="phone-font text-xs text-black mb-3 text-center dithered-text">
                      ▓ {category.category} ▓
                    </h3>
                    <div className="space-y-2">
                      {category.tech.map((tech, techIndex) => (
                        <div
                          key={tech}
                          className="old-phone-button bg-white text-black text-center py-1"
                          style={{
                            animationDelay: `${
                              (index * 4 + techIndex) * 100
                            }ms`,
                          }}
                        >
                          <span className="phone-font text-xs">█ {tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Research & Innovation */}
          <div className="lg:col-span-2">
            <div className="old-phone-card p-6">
              <h2 className="old-phone-title text-lg mb-4 text-center">
                ═══ AI_RESEARCH.LOG ═══
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="old-phone-terminal p-4">
                  <h3 className="phone-font text-xs text-black mb-3 dithered-text">
                    █ CURRENT_RESEARCH.DIR
                  </h3>
                  <div className="space-y-2">
                    <div className="phone-font text-xs text-black">
                      ▓ GENERATIVE_AI_MODELS
                    </div>
                    <div className="phone-font text-xs text-black">
                      ▓ COMPUTER_VISION_OPTIMIZATION
                    </div>
                    <div className="phone-font text-xs text-black">
                      ▓ NEURAL_ARCHITECTURE_SEARCH
                    </div>
                    <div className="phone-font text-xs text-black">
                      ▓ FEDERATED_LEARNING_SYSTEMS
                    </div>
                  </div>
                </div>
                <div className="old-phone-terminal p-4">
                  <h3 className="phone-font text-xs text-black mb-3 dithered-text">
                    █ INNOVATION_PROJECTS.EXE
                  </h3>
                  <div className="space-y-2">
                    <div className="phone-font text-xs text-black">
                      ▓ AUTONOMOUS_AGENT_FRAMEWORK
                    </div>
                    <div className="phone-font text-xs text-black">
                      ▓ REALTIME_ML_PIPELINE
                    </div>
                    <div className="phone-font text-xs text-black">
                      ▓ MULTIMODAL_AI_INTERFACE
                    </div>
                    <div className="phone-font text-xs text-black">
                      ▓ EDGE_AI_DEPLOYMENT_SYSTEM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect CTA */}
        <div className="mt-8 text-center">
          <div className="old-phone-card p-6 max-w-2xl mx-auto">
            <h2 className="old-phone-title text-lg mb-4">
              ═══ COLLABORATE.AI ═══
            </h2>
            <div className="old-phone-terminal p-4 mb-4">
              <p className="phone-font text-xs text-black">
                █ READY TO BUILD INTELLIGENT SYSTEMS TOGETHER?
                <br />█ LET'S DISCUSS YOUR AI/ML PROJECT REQUIREMENTS.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/projects"
                className="old-phone-button bg-black text-white px-6 py-3 phone-font text-xs hover:bg-white hover:text-black transition-all duration-200"
              >
                █ VIEW_AI_PROJECTS.EXE
              </Link>
              <Link
                to="/contact"
                className="old-phone-button bg-white text-black px-6 py-3 phone-font text-xs hover:bg-black hover:text-white transition-all duration-200"
              >
                █ START_COLLABORATION.SYS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
