import SEO from "../lib/seo";
import { Link } from "react-router-dom";

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
    { category: "Frontend", tech: ["React", "TypeScript", "Next.js", "Tailwind"] },
    { category: "Database", tech: ["PostgreSQL", "MongoDB", "Redis", "Pinecone"] },
    { category: "Cloud", tech: ["AWS", "GCP", "Azure", "Docker"] },
    { category: "Tools", tech: ["Git", "Jupyter", "VSCode", "Postman"] },
  ];

  return (
    <>
      <SEO
        title="About - Shailesh Dwivedi | AI/ML Engineer"
        description="Learn about Shailesh Dwivedi's journey in AI/ML engineering, skills, and passion for technology."
      />
      
      <div className="min-h-screen bg-white text-black">
        <div className="phone-grid min-h-screen">
          <div className="max-w-4xl mx-auto p-6">
            
            {/* Header */}
            <div className="text-center mb-12 animate-fadeIn">
              <h1 className="old-phone-title text-3xl mb-4">About Me</h1>
              <p className="phone-font text-lg max-w-2xl mx-auto">
                Passionate AI/ML Engineer crafting intelligent solutions for tomorrow's challenges
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* About Story */}
              <div className="old-phone-card p-6">
                <h2 className="old-phone-title text-xl mb-4">My Journey</h2>
                <div className="phone-font text-sm space-y-4">
                  <p>
                    I'm a dedicated AI/ML Engineer with a passion for building intelligent 
                    systems that solve real-world problems. My journey began with curiosity 
                    about how machines can learn and adapt.
                  </p>
                  <p>
                    Over the years, I've specialized in machine learning, deep learning, 
                    and neural networks, developing solutions that bridge the gap between 
                    cutting-edge research and practical applications.
                  </p>
                  <p>
                    I believe in the power of AI to transform industries and improve lives, 
                    which drives my commitment to continuous learning and innovation.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="old-phone-card p-6">
                <h2 className="old-phone-title text-xl mb-4">Achievements</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="old-phone-button p-4 text-center">
                    <div className="old-phone-title text-2xl">50+</div>
                    <div className="phone-font text-xs">Projects</div>
                  </div>
                  <div className="old-phone-button p-4 text-center">
                    <div className="old-phone-title text-2xl">5+</div>
                    <div className="phone-font text-xs">Years</div>
                  </div>
                  <div className="old-phone-button p-4 text-center">
                    <div className="old-phone-title text-2xl">12</div>
                    <div className="phone-font text-xs">Papers</div>
                  </div>
                  <div className="old-phone-button p-4 text-center">
                    <div className="old-phone-title text-2xl">100+</div>
                    <div className="phone-font text-xs">Models</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Skills Section */}
            <div className="mt-8 old-phone-card p-6">
              <h2 className="old-phone-title text-xl mb-6">Skills & Expertise</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="animate-slideUp" style={{animationDelay: `${index * 100}ms`}}>
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
                    <h3 className="old-phone-title text-sm mb-3">{category.category}</h3>
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
