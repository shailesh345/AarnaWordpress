import React, { useState, useEffect, useRef } from "react";

// AI/ML Binary Rain Background Animation
export const MatrixRain: React.FC<{ density?: number }> = ({
  density = 50,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // AI/ML terms and mathematical symbols
    const aiTerms = [
      "01",
      "10",
      "11",
      "00", // Binary
      "∑",
      "∆",
      "∇",
      "∂",
      "∞",
      "π",
      "σ",
      "μ",
      "λ",
      "θ",
      "α",
      "β", // Math symbols
      "CNN",
      "RNN",
      "GAN",
      "LSTM",
      "GPU",
      "API",
      "ML",
      "AI",
      "DL", // AI terms
      "⊕",
      "⊗",
      "⊙",
      "≈",
      "≡",
      "∈",
      "∀",
      "∃",
      "⇒",
      "⇔", // Logic symbols
      "f(x)",
      "y=mx",
      "e^x",
      "log",
      "sin",
      "cos",
      "tan", // Functions
    ];

    const fontSize = 10; // Updated to 10px (8-12px range)
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = (Math.random() * canvas.height) / fontSize;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#000";
      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = aiTerms[Math.floor(Math.random() * aiTerms.length)];
        const opacity = Math.random() * 0.3 + 0.1; // Reduced opacity range
        ctx.globalAlpha = opacity;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += Math.random() * 0.5 + 0.3;
      }
      ctx.globalAlpha = 1;
    };

    const interval = setInterval(draw, 150);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-10"
      style={{ zIndex: -1 }}
    />
  );
};

// AI/ML Floating Symbols Background
export const FloatingParticles: React.FC = () => {
  const symbols = [
    "01",
    "10",
    "11",
    "00", // Binary
    "∑",
    "∆",
    "∇",
    "∂",
    "∞",
    "π",
    "σ",
    "μ",
    "λ",
    "θ", // Math
    "CNN",
    "AI",
    "ML",
    "DL",
    "GPU",
    "API", // Tech
    "⊕",
    "⊗",
    "≈",
    "≡",
    "∈",
    "∀",
    "∃",
    "⇒", // Logic
    "f(x)",
    "∫",
    "∮",
    "∏",
    "√",
    "±",
    "≠",
    "≤",
    "≥", // Functions
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-black opacity-5 animate-float font-mono text-xs"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            fontSize: `${8 + Math.random() * 4}px`, // Updated to 8-12px range
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </div>
      ))}
    </div>
  );
};

// Typewriter Effect Component
interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  showCursor?: boolean;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  delay = 0,
  onComplete,
  showCursor = true,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursorState, setShowCursorState] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (onComplete) {
        onComplete();
      }
    }, delay + speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, onComplete]);

  useEffect(() => {
    if (showCursor) {
      const cursorTimer = setInterval(() => {
        setShowCursorState((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    }
  }, [showCursor]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span
          className={`${
            showCursorState ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        >
          |
        </span>
      )}
    </span>
  );
};

// CMD Terminal Component
interface CMDTerminalProps {
  commands: Array<{
    command: string;
    output: string;
    delay?: number;
  }>;
  title?: string;
  onComplete?: () => void;
}

export const CMDTerminal: React.FC<CMDTerminalProps> = ({
  commands,
  title = "Terminal",
  onComplete,
}) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [executedCommands, setExecutedCommands] = useState<
    Array<{
      command: string;
      output: string;
      completed: boolean;
    }>
  >([]);

  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      const currentCommand = commands[currentCommandIndex];
      const timer = setTimeout(() => {
        setExecutedCommands((prev) => [
          ...prev,
          { ...currentCommand, completed: false },
        ]);
      }, currentCommand.delay || 1000);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentCommandIndex, commands, onComplete]);

  const handleCommandComplete = () => {
    setExecutedCommands((prev) =>
      prev.map((cmd, index) =>
        index === prev.length - 1 ? { ...cmd, completed: true } : cmd
      )
    );
    setCurrentCommandIndex((prev) => prev + 1);
  };

  return (
    <div className="old-phone-terminal p-4 rounded-lg font-mono text-sm">
      <div className="flex items-center mb-3 border-b border-gray-300 pb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center phone-font text-xs font-bold">
          {title}
        </div>
      </div>

      <div className="space-y-2">
        {executedCommands.map((cmd, index) => (
          <div key={index}>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">$</span>
              <Typewriter
                text={cmd.command}
                speed={30}
                onComplete={
                  index === executedCommands.length - 1
                    ? handleCommandComplete
                    : undefined
                }
                className="phone-font"
              />
            </div>
            {cmd.completed && (
              <div className="ml-4 mt-1 text-gray-700 whitespace-pre-line">
                <Typewriter
                  text={cmd.output}
                  speed={20}
                  className="phone-font"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Loading Terminal Effect
export const LoadingTerminal: React.FC<{ onComplete?: () => void }> = ({
  onComplete,
}) => {
  const bootSequence = [
    { command: "system.boot()", output: "Initializing system...", delay: 0 },
    {
      command: "load.portfolio()",
      output: "Loading portfolio data...",
      delay: 1000,
    },
    {
      command: "render.interface()",
      output: "Rendering user interface...",
      delay: 1500,
    },
    {
      command: "start.experience()",
      output: "Welcome to Shailesh's Portfolio!",
      delay: 2000,
    },
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="max-w-md w-full">
        <CMDTerminal
          commands={bootSequence}
          title="Portfolio OS v2.0"
          onComplete={onComplete}
        />
      </div>
    </div>
  );
};

// Glitch Effect Component
export const GlitchText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative z-10">{children}</div>
      <div
        className="absolute inset-0 animate-glitch-1"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
      >
        {children}
      </div>
      <div
        className="absolute inset-0 animate-glitch-2"
        style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
      >
        {children}
      </div>
    </div>
  );
};

// Scanning Line Effect
export const ScanningLine: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div className="absolute w-full h-0.5 bg-green-400 opacity-30 animate-scan"></div>
    </div>
  );
};

// Progress Bar with Terminal Style
interface TerminalProgressProps {
  progress: number;
  label: string;
  className?: string;
}

export const TerminalProgress: React.FC<TerminalProgressProps> = ({
  progress,
  label,
  className = "",
}) => {
  const barLength = 30;
  const filled = Math.round((progress / 100) * barLength);
  const progressBar = "█".repeat(filled) + "░".repeat(barLength - filled);

  return (
    <div className={`phone-font text-sm ${className}`}>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="font-mono">[{progressBar}]</div>
    </div>
  );
};
