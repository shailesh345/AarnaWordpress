import React, { useState, useEffect } from "react";

interface AnimatedASCIIProps {
  type: "wave" | "pulse" | "matrix" | "scanner" | "typing";
  width?: number;
  height?: number;
  speed?: number;
}

export const AnimatedASCII: React.FC<AnimatedASCIIProps> = ({
  type,
  width = 40,
  height = 10,
  speed = 200,
}) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => prev + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  const generateWave = () => {
    const chars = ["_", "~", "^", "*", "^", "~"];
    let result = "";
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const waveIndex = Math.floor(Math.sin((x + frame) * 0.3) * 2 + 3);
        result += chars[Math.min(waveIndex, chars.length - 1)];
      }
      result += "\n";
    }
    return result;
  };

  const generatePulse = () => {
    const center = { x: width / 2, y: height / 2 };
    const radius = (frame % 20) * 0.5;
    let result = "";

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const distance = Math.sqrt((x - center.x) ** 2 + (y - center.y) ** 2);
        const char =
          distance < radius
            ? "█"
            : distance < radius + 2
            ? "▒"
            : distance < radius + 4
            ? "░"
            : " ";
        result += char;
      }
      result += "\n";
    }
    return result;
  };

  const generateMatrix = () => {
    // AI/ML binary patterns with mathematical symbols
    const chars = ["01", "10", "11", "00", "∑", "∆", "∇", "π", "σ", "λ", "θ"];
    let result = "";
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const shouldShow = Math.random() > 0.6;
        const char = shouldShow
          ? chars[Math.floor(Math.random() * chars.length)]
          : " ";
        result += char;
      }
      result += "\n";
    }
    return result;
  };

  const generateScanner = () => {
    const scanLine = frame % height;
    let result = "";
    const aiSymbols = ["AI", "ML", "DL", "∂", "∇", "σ", "μ", "λ"];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (y === scanLine) {
          const symbol = aiSymbols[x % aiSymbols.length];
          result += symbol.length === 1 ? symbol : symbol[0];
        } else if (Math.abs(y - scanLine) === 1) {
          result += "▒";
        } else if (Math.abs(y - scanLine) === 2) {
          result += "░";
        } else {
          result += " ";
        }
      }
      result += "\n";
    }
    return result;
  };

  const generateTyping = () => {
    const aiTexts = [
      "INITIALIZING NEURAL NETWORKS...",
      "LOADING ML MODELS...",
      "PROCESSING AI ALGORITHMS...",
      "TRAINING DEEP LEARNING...",
    ];
    const text = aiTexts[Math.floor(frame / 50) % aiTexts.length];
    const currentLength = frame % (text.length + 10);
    const displayText = text.slice(0, currentLength);
    const cursor =
      currentLength < text.length ? "█" : frame % 4 < 2 ? "█" : " ";

    return `${displayText}${cursor}`;
  };

  const generateFrame = () => {
    switch (type) {
      case "wave":
        return generateWave();
      case "pulse":
        return generatePulse();
      case "matrix":
        return generateMatrix();
      case "scanner":
        return generateScanner();
      case "typing":
        return generateTyping();
      default:
        return "";
    }
  };

  return (
    <pre className="font-mono text-xs leading-tight whitespace-pre">
      {generateFrame()}
    </pre>
  );
};

// Code Rain Effect Component
export const CodeRain: React.FC<{ lines?: number }> = ({ lines = 20 }) => {
  const [drops, setDrops] = useState<
    Array<{ chars: string; position: number; speed: number }>
  >([]);

  useEffect(() => {
    const aiMLSnippets = [
      "import tensorflow",
      "model.compile()",
      "fit(X_train, y)",
      "predict(X_test)",
      "CNN(filters=32)",
      "LSTM(units=50)",
      "Dense(128)",
      "dropout(0.5)",
      "relu activation",
      "softmax output",
      "loss=categorical",
      "optimizer=adam",
      "accuracy=0.95",
      "val_loss=0.23",
      "epochs=100",
      "batch_size=32",
      "∇f(x) = gradient",
      "∂L/∂w = ∇w",
      "σ(z) = sigmoid",
      "ReLU(x) = max(0,x)",
      "tanh(x) activation",
      "feature_scaling",
      "cross_validation",
      "hyperparameters",
      "regularization",
      "overfitting",
      "underfitting",
      "bias_variance",
      "confusion_matrix",
      "precision_recall",
      "f1_score",
      "roc_auc",
      "random_forest",
      "support_vector",
      "naive_bayes",
      "k_means++",
      "pca_analysis",
      "dimensionality",
      "numpy.array()",
      "pandas.DataFrame",
      "sklearn.model",
      "torch.tensor",
      "cuda.device",
      "gpu.memory",
      "autograd.grad",
      "nn.Module",
      "F.relu",
      "∑ᵢ xᵢwᵢ + b",
      "E[X] = μ",
      "Var(X) = σ²",
      "P(A|B) = bayes",
      "∇·∇f = ∇²f",
      "∂²f/∂x² hessian",
    ];

    const initialDrops = Array.from({ length: lines }, (_, i) => ({
      chars: aiMLSnippets[Math.floor(Math.random() * aiMLSnippets.length)],
      position: Math.random() * 100,
      speed: 0.5 + Math.random() * 1.5,
    }));

    setDrops(initialDrops);

    const interval = setInterval(() => {
      setDrops((prev) =>
        prev.map((drop) => ({
          ...drop,
          position: drop.position > 100 ? -10 : drop.position + drop.speed,
          chars:
            drop.position > 100
              ? aiMLSnippets[Math.floor(Math.random() * aiMLSnippets.length)]
              : drop.chars,
        }))
      );
    }, 120);

    return () => clearInterval(interval);
  }, [lines]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {drops.map((drop, index) => (
        <div
          key={index}
          className="absolute font-mono text-black opacity-10"
          style={{
            left: `${(index * 100) / lines}%`,
            top: `${drop.position}%`,
            transform: "translateY(-50%)",
            animationDuration: `${3 + Math.random() * 2}s`,
            fontSize: `${8 + Math.random() * 4}px`, // Updated to 8-12px range
          }}
        >
          {drop.chars}
        </div>
      ))}
    </div>
  );
};

// Network Visualization
export const NetworkVisualization: React.FC = () => {
  const [connections, setConnections] = useState<
    Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      active: boolean;
    }>
  >([]);

  useEffect(() => {
    const nodes = [
      { x: 20, y: 30 },
      { x: 80, y: 20 },
      { x: 60, y: 70 },
      { x: 40, y: 80 },
      { x: 10, y: 60 },
      { x: 90, y: 50 },
    ];

    const generateConnections = () => {
      const newConnections: Array<{
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        active: boolean;
      }> = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.random() > 0.6) {
            newConnections.push({
              x1: nodes[i].x,
              y1: nodes[i].y,
              x2: nodes[j].x,
              y2: nodes[j].y,
              active: Math.random() > 0.3,
            });
          }
        }
      }
      setConnections(newConnections);
    };

    generateConnections();
    const interval = setInterval(generateConnections, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 old-phone-terminal rounded overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, index) => (
          <line
            key={index}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke={conn.active ? "#000" : "#ccc"}
            strokeWidth="1"
            className={conn.active ? "animate-pulse" : ""}
          />
        ))}

        {/* Nodes */}
        {[
          { x: 20, y: 30 },
          { x: 80, y: 20 },
          { x: 60, y: 70 },
          { x: 40, y: 80 },
          { x: 10, y: 60 },
          { x: 90, y: 50 },
        ].map((node, index) => (
          <circle
            key={index}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="#000"
            className="animate-pulse"
          />
        ))}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="phone-font text-xs text-center">
          NEURAL NETWORK ACTIVE
        </div>
      </div>
    </div>
  );
};
