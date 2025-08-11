import React, { useEffect, useRef } from "react";

const AdvancedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Old phone-style terms and symbols
  const phoneTerms = [
    "█",
    "▓",
    "▒",
    "░",
    "▀",
    "▄",
    "■",
    "□",
    "▪",
    "▫",
    "NOKIA",
    "SMS",
    "CALL",
    "MENU",
    "GAME",
    "CALC",
    "ALARM",
    "***",
    "###",
    "000",
    "+++",
    "---",
    "===",
    "|||",
    "SIGNAL",
    "BATTERY",
    "TIME",
    "DATE",
    "PHONE",
  ];

  const phoneSymbols = [
    "█ █ █",
    "▓ ▓ ▓",
    "▒ ▒ ▒",
    "░ ░ ░",
    "■ ■ ■",
    "□ □ □",
    "▪ ▪ ▪",
    "▫ ▫ ▫",
    "▀ ▀ ▀",
    "▄ ▄ ▄",
    "┌─┐",
    "└─┘",
    "┃ ┃ ┃",
    "━━━",
    "┏━┓",
    "┗━┛",
  ];

  const phoneBinary = [
    "█ ░ █ ░",
    "▓ ▒ ▓ ▒",
    "■ □ ■ □",
    "▀ ▄ ▀ ▄",
    "███░░",
    "▓▓▒▒░",
    "■■□□▫",
    "▀▀▄▄░",
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating elements
    const createFloatingElement = () => {
      if (!containerRef.current) return;

      const element = document.createElement("div");
      element.className = "floating-element";

      const rand = Math.random();
      if (rand < 0.4) {
        element.classList.add("phone-element");
        element.textContent =
          phoneTerms[Math.floor(Math.random() * phoneTerms.length)];
      } else if (rand < 0.8) {
        element.classList.add("phone-symbol");
        element.textContent =
          phoneSymbols[Math.floor(Math.random() * phoneSymbols.length)];
      } else {
        element.classList.add("phone-icon");
        element.textContent = "█ ▓ ▒ ░ ■ □ ▪ ▫".split(" ")[
          Math.floor(Math.random() * 8)
        ];
      }

      element.style.left = Math.random() * 100 + "%";
      element.style.animationDelay = Math.random() * 3 + "s";
      element.style.animationDuration = 8 + Math.random() * 6 + "s";

      containerRef.current.appendChild(element);

      setTimeout(() => {
        if (element.parentNode) {
          element.remove();
        }
      }, 14000);
    };

    // Create pixel particles
    const createPixelParticle = () => {
      if (!containerRef.current) return;

      const particle = document.createElement("div");
      particle.className = "pixel-particle";

      const colors = ["#ffffff", "#cccccc", "#888888", "#444444", "#aaaaaa"];
      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 2 + "s";
      particle.style.animationDuration = 4 + Math.random() * 4 + "s";

      containerRef.current.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove();
        }
      }, 8000);
    };

    // Create binary rain
    const createBinaryRain = () => {
      if (!containerRef.current) return;

      const binary = document.createElement("div");
      binary.className = "phone-binary";
      binary.textContent =
        phoneBinary[Math.floor(Math.random() * phoneBinary.length)];
      binary.style.left = Math.random() * 100 + "%";
      binary.style.animationDelay = Math.random() * 2 + "s";
      binary.style.animationDuration = 3 + Math.random() * 4 + "s";

      containerRef.current.appendChild(binary);

      setTimeout(() => {
        if (binary.parentNode) {
          binary.remove();
        }
      }, 7000);
    };

    // Create data streams
    const createDataStream = () => {
      if (!containerRef.current) return;

      const stream = document.createElement("div");
      stream.className = "floating-element phone-data";
      stream.textContent = `█${Math.random().toFixed(2)} ▓${Math.floor(
        Math.random() * 100
      )}% ░${Math.floor(Math.random() * 999)}`;
      stream.style.left = Math.random() * 100 + "%";
      stream.style.animationDuration = 4 + Math.random() * 3 + "s";

      containerRef.current.appendChild(stream);

      setTimeout(() => {
        if (stream.parentNode) {
          stream.remove();
        }
      }, 7000);
    };

    // Start animations
    const floatingInterval = setInterval(createFloatingElement, 600);
    const particleInterval = setInterval(createPixelParticle, 200);
    const binaryInterval = setInterval(createBinaryRain, 800);
    const dataInterval = setInterval(createDataStream, 1500);

    // Add some initial elements
    for (let i = 0; i < 8; i++) {
      setTimeout(createFloatingElement, i * 150);
      setTimeout(createPixelParticle, i * 75);
      setTimeout(createBinaryRain, i * 200);
      setTimeout(createDataStream, i * 400);
    }

    return () => {
      clearInterval(floatingInterval);
      clearInterval(particleInterval);
      clearInterval(binaryInterval);
      clearInterval(dataInterval);
    };
  }, []);

  return (
    <div className="advanced-animation-container">
      {/* Pixel Grid */}
      <div className="pixel-grid" />

      {/* Neural Network SVGs */}
      {/* Old Phone Network Graphics */}
      <svg className="phone-network phone-net-1" viewBox="0 0 200 200">
        <rect x="40" y="40" width="20" height="20" fill="#000000" opacity="0.8">
          <animate
            attributeName="width"
            values="20;30;20"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            values="20;30;20"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="140"
          y="40"
          width="20"
          height="20"
          fill="#000000"
          opacity="0.6"
        >
          <animate
            attributeName="width"
            values="20;30;20"
            dur="2s"
            begin="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            values="20;30;20"
            dur="2s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="90"
          y="140"
          width="20"
          height="20"
          fill="#000000"
          opacity="0.7"
        >
          <animate
            attributeName="width"
            values="20;30;20"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            values="20;30;20"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"
          />
        </rect>
        <line
          x1="50"
          y1="50"
          x2="150"
          y2="50"
          stroke="#000000"
          strokeWidth="3"
          opacity="0.5"
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="50"
          y1="50"
          x2="100"
          y2="150"
          stroke="#000000"
          strokeWidth="3"
          opacity="0.5"
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="2s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="150"
          y1="50"
          x2="100"
          y2="150"
          stroke="#000000"
          strokeWidth="3"
          opacity="0.5"
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"
          />
        </line>
      </svg>

      <svg className="phone-network phone-net-2" viewBox="0 0 200 200">
        <rect x="40" y="40" width="15" height="15" fill="#000000" opacity="0.6">
          <animate
            attributeName="width"
            values="15;25;15"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            values="15;25;15"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="140"
          y="90"
          width="15"
          height="15"
          fill="#000000"
          opacity="0.8"
        >
          <animate
            attributeName="width"
            values="15;25;15"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            values="15;25;15"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="40"
          y="140"
          width="15"
          height="15"
          fill="#000000"
          opacity="0.7"
        >
          <animate
            attributeName="width"
            values="15;25;15"
            dur="3s"
            begin="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            values="15;25;15"
            dur="3s"
            begin="2s"
            repeatCount="indefinite"
          />
        </rect>
        <line
          x1="50"
          y1="50"
          x2="150"
          y2="100"
          stroke="#000000"
          strokeWidth="2"
          opacity="0.4"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="50"
          y1="150"
          x2="150"
          y2="100"
          stroke="#000000"
          strokeWidth="2"
          opacity="0.4"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3s"
            begin="1.5s"
            repeatCount="indefinite"
          />
        </line>
      </svg>

      <svg className="neural-network neural-2" viewBox="0 0 200 200">
        <circle cx="50" cy="50" r="6" fill="#aaaaaa" opacity="0.6">
          <animate
            attributeName="r"
            values="6;10;6"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="150" cy="100" r="6" fill="#ffffff" opacity="0.6">
          <animate
            attributeName="r"
            values="6;10;6"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="50" cy="150" r="6" fill="#cccccc" opacity="0.6">
          <animate
            attributeName="r"
            values="6;10;6"
            dur="3s"
            begin="2s"
            repeatCount="indefinite"
          />
        </circle>
        <line
          x1="50"
          y1="50"
          x2="150"
          y2="100"
          stroke="#ffffff"
          strokeWidth="1.5"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.7;0.3"
            dur="3s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="50"
          y1="150"
          x2="150"
          y2="100"
          stroke="#ffffff"
          strokeWidth="1.5"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.7;0.3"
            dur="3s"
            begin="1.5s"
            repeatCount="indefinite"
          />
        </line>
      </svg>

      {/* Dynamic content container */}
      <div ref={containerRef} className="floating-elements-container" />
    </div>
  );
};

export default AdvancedBackground;
