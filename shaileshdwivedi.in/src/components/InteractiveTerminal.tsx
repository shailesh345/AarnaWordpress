import React, { useState, useEffect, useRef } from "react";
import { Typewriter } from "./AdvancedAnimations";

interface InteractiveTerminalProps {
  title?: string;
  welcomeMessage?: string;
}

const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  title = "Interactive Terminal",
  welcomeMessage = "Welcome to Shailesh's Portfolio Terminal! Type 'help' for available commands.",
}) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    Array<{ command: string; output: string; timestamp: string }>
  >([]);
  const [currentPath, setCurrentPath] = useState("~/portfolio");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: `Available commands:
  about     - Learn about Shailesh
  skills    - View technical skills
  projects  - List projects
  experience- View work experience
  contact   - Get contact information
  clear     - Clear terminal
  ls        - List directory contents
  whoami    - Display current user
  date      - Show current date
  pwd       - Print working directory`,

    about: `Shailesh Dwivedi - AI/ML Engineer & Full Stack Architect

📍 Based in India
🎓 9+ years of professional experience
🚀 Specialized in AI/ML, Cloud Architecture, and Full Stack Development
🔧 Expert in Python, React, AWS, Docker, Kubernetes
📊 50+ ML models deployed in production
👥 Leading and mentoring development teams`,

    skills: `Technical Skills:

Programming Languages:
├── Python (Expert)
├── JavaScript/TypeScript (Expert)
├── Java (Advanced)
└── Go (Intermediate)

Frameworks & Libraries:
├── React/Next.js (Expert)
├── Node.js/Express (Expert)
├── Django/FastAPI (Expert)
├── TensorFlow/PyTorch (Expert)
└── Spring Boot (Advanced)

Cloud & DevOps:
├── AWS (Expert)
├── Docker/Kubernetes (Expert)
├── CI/CD Pipelines (Expert)
└── Terraform (Advanced)`,

    projects: `Featured Projects:

1. AI-Powered E-commerce Platform
   ├── Technologies: React, Python, TensorFlow, AWS
   ├── Features: Recommendation engine, Chat support
   └── Status: Production (10M+ users)

2. Real-time Data Pipeline
   ├── Technologies: Apache Kafka, Python, Docker
   ├── Features: Stream processing, Analytics
   └── Status: Production

3. Smart Portfolio Management System
   ├── Technologies: React, Node.js, ML algorithms
   ├── Features: Risk analysis, Automated trading
   └── Status: Production`,

    experience: `Professional Experience:

2020-Present: Senior AI/ML Engineer @ TechCorp
├── Lead ML team of 8+ engineers
├── Architected cloud-native solutions
├── Deployed 30+ ML models to production
└── Reduced infrastructure costs by 40%

2018-2020: Full Stack Developer @ StartupInc
├── Built scalable web applications
├── Implemented CI/CD pipelines
├── Mentored junior developers
└── Improved system performance by 60%

2015-2018: Software Developer @ DevCompany
├── Developed enterprise applications
├── Database design and optimization
└── API development and integration`,

    contact: `Contact Information:

📧 Email: shailesh.dwivedi@email.com
🔗 LinkedIn: linkedin.com/in/shailesh-dwivedi
🐙 GitHub: github.com/shailesh-dwivedi
🌐 Portfolio: shaileshdwivedi.in
📱 Phone: +91-XXXXXXXXXX

Feel free to reach out for opportunities or collaboration!`,

    ls: `drwxr-xr-x  projects/
drwxr-xr-x  skills/
drwxr-xr-x  experience/
drwxr-xr-x  certifications/
-rw-r--r--  README.md
-rw-r--r--  resume.pdf
-rw-r--r--  portfolio.json`,

    whoami: "shailesh",

    pwd: currentPath,

    date: new Date().toLocaleString(),

    clear: "CLEAR",
  };

  useEffect(() => {
    // Auto-focus input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom when new history is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (command: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const cmd = command.trim().toLowerCase();

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    let output = "";
    if (cmd === "") {
      output = "";
    } else if (commands[cmd as keyof typeof commands]) {
      output = commands[cmd as keyof typeof commands];
    } else {
      output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { command: command.trim(), output, timestamp },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      // Simple auto-completion
      const availableCommands = Object.keys(commands);
      const matches = availableCommands.filter((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  return (
    <div className="old-phone-terminal p-4 rounded-lg font-mono text-sm h-96 flex flex-col">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-3">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="phone-font text-xs font-bold">{title}</span>
        </div>
        <div className="text-xs text-gray-500">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Welcome Message */}
      <div className="mb-3 text-xs text-gray-600">
        <Typewriter text={welcomeMessage} speed={20} />
      </div>

      {/* Terminal Content */}
      <div ref={terminalRef} className="flex-1 overflow-y-auto space-y-2 mb-3">
        {history.map((entry, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center text-xs">
              <span className="text-green-600 mr-2">shailesh@portfolio:</span>
              <span className="text-blue-600 mr-2">{currentPath}</span>
              <span className="text-gray-700 mr-2">$</span>
              <span>{entry.command}</span>
              <span className="text-gray-400 text-xs ml-auto">
                {entry.timestamp}
              </span>
            </div>
            {entry.output && (
              <div className="text-xs text-gray-700 whitespace-pre-line ml-4 pl-2 border-l-2 border-gray-200">
                {entry.output}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Line */}
      <form onSubmit={handleSubmit} className="flex items-center text-xs">
        <span className="text-green-600 mr-2">shailesh@portfolio:</span>
        <span className="text-blue-600 mr-2">{currentPath}</span>
        <span className="text-gray-700 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none phone-font"
          placeholder="Type a command..."
          autoComplete="off"
        />
        <span className="animate-terminal-blink">█</span>
      </form>

      {/* Command Hints */}
      <div className="mt-2 text-xs text-gray-400">
        Tip: Press Tab for auto-completion, type 'help' for commands
      </div>
    </div>
  );
};

export default InteractiveTerminal;
