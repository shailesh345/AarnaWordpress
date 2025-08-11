import React, { useEffect, useRef } from "react";

const AIBinaryBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // AI/ML/Programming terms with binary representations
  const aiTerms = [
    "AI",
    "ML",
    "DL",
    "NN",
    "CNN",
    "RNN",
    "LSTM",
    "GAN",
    "GPT",
    "BERT",
    "TF",
    "PYTORCH",
    "NUMPY",
    "PANDAS",
    "SKLEARN",
    "OPENCV",
    "NLP",
    "CV",
    "REACT",
    "JS",
    "TS",
    "NODE",
    "PYTHON",
    "JAVA",
    "C++",
    "GO",
    "RUST",
    "SQL",
    "NOSQL",
    "REDIS",
    "MONGO",
    "POSTGRES",
    "DOCKER",
    "K8S",
    "AWS",
  ];

  const binaryPatterns = [
    "01001001",
    "11010011",
    "10101010",
    "01110100",
    "11001100",
    "00110011",
    "10011001",
    "01100110",
    "11110000",
    "00001111",
    "10101111",
    "01010000",
    "01010101",
    "10100101",
    "11111000",
    "00000111",
    "11001010",
    "00110101",
  ];

  const matrixSymbols = [
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
    "●",
    "○",
    "┌",
    "┐",
    "└",
    "┘",
    "├",
    "┤",
    "┬",
    "┴",
    "┼",
    "│",
    "─",
    "━",
    "╔",
    "╗",
    "╚",
    "╝",
    "╠",
    "╣",
    "╦",
    "╩",
    "╬",
    "║",
    "═",
  ];

  const codePatterns = [
    "def neural_net():",
    "import tensorflow",
    "model.compile()",
    "fit(X, y)",
    "const model = tf",
    "async function",
    "await predict()",
    "useState()",
    "SELECT * FROM",
    "UPDATE users SET",
    "docker run -p",
    "kubectl apply",
    "git commit -m",
    "npm install",
    "pip install",
    "cargo build",
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating AI terms
    const createFloatingTerm = () => {
      if (!containerRef.current) return;

      const element = document.createElement("div");
      element.className = "ai-floating-term";

      const rand = Math.random();
      if (rand < 0.3) {
        element.textContent =
          aiTerms[Math.floor(Math.random() * aiTerms.length)];
        element.classList.add("ai-term");
      } else if (rand < 0.6) {
        element.textContent =
          codePatterns[Math.floor(Math.random() * codePatterns.length)];
        element.classList.add("code-term");
      } else {
        element.textContent =
          matrixSymbols[Math.floor(Math.random() * matrixSymbols.length)];
        element.classList.add("matrix-term");
      }

      element.style.left = Math.random() * 100 + "%";
      element.style.animationDelay = Math.random() * 3 + "s";
      element.style.animationDuration = 8 + Math.random() * 6 + "s";

      containerRef.current.appendChild(element);

      setTimeout(() => {
        if (element.parentNode) {
          element.remove();
        }
      }, 15000);
    };

    // Create binary rain
    const createBinaryRain = () => {
      if (!containerRef.current) return;

      const binary = document.createElement("div");
      binary.className = "binary-rain-drop";
      binary.textContent =
        binaryPatterns[Math.floor(Math.random() * binaryPatterns.length)];
      binary.style.left = Math.random() * 100 + "%";
      binary.style.animationDelay = Math.random() * 2 + "s";
      binary.style.animationDuration = 4 + Math.random() * 4 + "s";

      containerRef.current.appendChild(binary);

      setTimeout(() => {
        if (binary.parentNode) {
          binary.remove();
        }
      }, 8000);
    };

    // Create neural network connections
    const createNeuralConnection = () => {
      if (!containerRef.current) return;

      const connection = document.createElement("div");
      connection.className = "neural-connection";
      connection.style.left = Math.random() * 100 + "%";
      connection.style.top = Math.random() * 100 + "%";
      connection.style.animationDelay = Math.random() * 5 + "s";

      containerRef.current.appendChild(connection);

      setTimeout(() => {
        if (connection.parentNode) {
          connection.remove();
        }
      }, 12000);
    };

    // Create data packets
    const createDataPacket = () => {
      if (!containerRef.current) return;

      const packet = document.createElement("div");
      packet.className = "data-packet";
      packet.textContent = `[${Math.floor(Math.random() * 9999)
        .toString()
        .padStart(4, "0")}]`;
      packet.style.left = Math.random() * 100 + "%";
      packet.style.animationDuration = 6 + Math.random() * 4 + "s";

      containerRef.current.appendChild(packet);

      setTimeout(() => {
        if (packet.parentNode) {
          packet.remove();
        }
      }, 10000);
    };

    // Start animations
    const termInterval = setInterval(createFloatingTerm, 800);
    const binaryInterval = setInterval(createBinaryRain, 300);
    const neuralInterval = setInterval(createNeuralConnection, 2000);
    const packetInterval = setInterval(createDataPacket, 1500);

    // Initial burst
    for (let i = 0; i < 12; i++) {
      setTimeout(createFloatingTerm, i * 200);
      setTimeout(createBinaryRain, i * 100);
      setTimeout(createNeuralConnection, i * 600);
      setTimeout(createDataPacket, i * 400);
    }

    return () => {
      clearInterval(termInterval);
      clearInterval(binaryInterval);
      clearInterval(neuralInterval);
      clearInterval(packetInterval);
    };
  }, []);

  return (
    <div className="ai-binary-background">
      {/* Pixelated Grid Overlay */}
      <div className="mono-pixel-grid" />

      {/* Neural Network Static Graphics */}
      <svg className="neural-static neural-top-left" viewBox="0 0 300 200">
        <rect x="20" y="20" width="15" height="15" fill="#000" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="120" y="30" width="15" height="15" fill="#000" opacity="0.5">
          <animate
            attributeName="opacity"
            values="0.5;0.9;0.5"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="220" y="25" width="15" height="15" fill="#000" opacity="0.6">
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="70" y="120" width="15" height="15" fill="#000" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8;1;0.8"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="170" y="130" width="15" height="15" fill="#000" opacity="0.6">
          <animate
            attributeName="opacity"
            values="0.6;0.9;0.6"
            dur="4.5s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Connections */}
        <line
          x1="27"
          y1="27"
          x2="127"
          y2="37"
          stroke="#000"
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
          x1="127"
          y1="37"
          x2="227"
          y2="32"
          stroke="#000"
          strokeWidth="2"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.7;0.3"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="77"
          y1="127"
          x2="177"
          y2="137"
          stroke="#000"
          strokeWidth="2"
          opacity="0.5"
        >
          <animate
            attributeName="opacity"
            values="0.5;0.9;0.5"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="27"
          y1="27"
          x2="77"
          y2="127"
          stroke="#000"
          strokeWidth="2"
          opacity="0.4"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="127"
          y1="37"
          x2="177"
          y2="137"
          stroke="#000"
          strokeWidth="2"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.7;0.3"
            dur="4.5s"
            repeatCount="indefinite"
          />
        </line>
      </svg>

      <svg className="neural-static neural-bottom-right" viewBox="0 0 250 180">
        <rect x="30" y="40" width="12" height="12" fill="#000" opacity="0.6">
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="130" y="50" width="12" height="12" fill="#000" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.7;0.9;0.7"
            dur="3.2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="80" y="120" width="12" height="12" fill="#000" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8;1;0.8"
            dur="2.2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="180" y="110" width="12" height="12" fill="#000" opacity="0.5">
          <animate
            attributeName="opacity"
            values="0.5;0.8;0.5"
            dur="3.8s"
            repeatCount="indefinite"
          />
        </rect>

        <line
          x1="36"
          y1="46"
          x2="136"
          y2="56"
          stroke="#000"
          strokeWidth="2"
          opacity="0.4"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.7;0.4"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="86"
          y1="126"
          x2="186"
          y2="116"
          stroke="#000"
          strokeWidth="2"
          opacity="0.5"
        >
          <animate
            attributeName="opacity"
            values="0.5;0.8;0.5"
            dur="3.2s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="36"
          y1="46"
          x2="86"
          y2="126"
          stroke="#000"
          strokeWidth="2"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </line>
      </svg>

      {/* Dynamic Content Container */}
      <div ref={containerRef} className="ai-content-container" />

      {/* Scanline Effect */}
      <div className="mono-scanline" />
    </div>
  );
};

export default AIBinaryBackground;
