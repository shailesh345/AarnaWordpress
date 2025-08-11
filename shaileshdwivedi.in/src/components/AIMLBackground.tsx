import React, { useRef, useEffect, useState } from "react";

// AI/ML Binary Matrix Background
export const AIBinaryMatrix: React.FC<{ intensity?: number }> = ({
  intensity = 50,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // AI/ML and Mathematical terms
    const terms = [
      // Binary patterns
      "01010101",
      "11001100",
      "00110011",
      "10101010",
      // Mathematical symbols
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
      "β",
      "γ",
      "δ",
      "ε",
      "ζ",
      "η",
      "κ",
      // AI/ML terms
      "CNN",
      "RNN",
      "GAN",
      "LSTM",
      "GPU",
      "API",
      "ML",
      "AI",
      "DL",
      "NLP",
      "CV",
      "RL",
      "BERT",
      "GPT",
      "VAE",
      "SVM",
      "KNN",
      "PCA",
      "ICA",
      "LDA",
      "SGD",
      "ADAM",
      // Logic and set theory
      "⊕",
      "⊗",
      "⊙",
      "≈",
      "≡",
      "∈",
      "∉",
      "∀",
      "∃",
      "⇒",
      "⇔",
      "∧",
      "∨",
      "¬",
      // Functions and calculus
      "f(x)",
      "g(x)",
      "h(x)",
      "∫",
      "∮",
      "∏",
      "√",
      "±",
      "≠",
      "≤",
      "≥",
      "∝",
      "∼",
      // Probability and statistics
      "P(A)",
      "E[X]",
      "Var",
      "Cov",
      "χ²",
      "ρ",
      "φ",
      "Φ",
      "Ψ",
      "ω",
      "Ω",
      // Linear algebra
      "det",
      "tr",
      "rank",
      "||x||",
      "⟨x,y⟩",
      "⊗",
      "⊕",
      "dim",
      "span",
    ];

    const fontSize = 9; // Updated to 9px (8-12px range)
    const columns = Math.floor(canvas.width / fontSize);
    const drops: Array<{
      pos: number;
      speed: number;
      term: string;
      opacity: number;
    }> = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        pos: (Math.random() * canvas.height) / fontSize,
        speed: Math.random() * 0.3 + 0.1, // Slower initial speed
        term: terms[Math.floor(Math.random() * terms.length)],
        opacity: Math.random() * 0.4 + 0.1, // Lower initial opacity
      };
    }

    let frame = 0;
    const draw = () => {
      // Create fade effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];

        // Set color based on term type with lighter colors
        let color = "#666"; // Much lighter base color
        if (drop.term.includes("0") || drop.term.includes("1")) {
          color = "#888"; // Binary in light gray
        } else if (
          ["∑", "∆", "∇", "∂", "∞", "π", "σ", "μ", "λ", "θ"].includes(drop.term)
        ) {
          color = "#777"; // Math symbols in lighter gray
        } else if (
          ["CNN", "RNN", "GAN", "LSTM", "AI", "ML"].includes(drop.term)
        ) {
          color = "#666"; // AI terms in lighter color
        }

        ctx.fillStyle = color;
        ctx.globalAlpha =
          drop.opacity * 0.3 * (0.5 + 0.5 * Math.sin(frame * 0.01 + i)); // Much lower opacity

        const x = i * fontSize;
        const y = drop.pos * fontSize;
        ctx.fillText(drop.term, x, y);

        // Update drop position
        drop.pos += drop.speed;

        // Reset drop when it goes off screen
        if (drop.pos * fontSize > canvas.height && Math.random() > 0.985) {
          // Less frequent resets
          drop.pos = 0;
          drop.term = terms[Math.floor(Math.random() * terms.length)];
          drop.speed = Math.random() * 0.3 + 0.1; // Slower movement
          drop.opacity = Math.random() * 0.4 + 0.1; // Lower opacity range
        }
      }

      ctx.globalAlpha = 1;
      frame++;
    };

    const interval = setInterval(draw, 150); // Slower animation

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-15"
      style={{ zIndex: -1 }}
    />
  );
};

// Mathematical Equation Stream
export const MathEquationStream: React.FC = () => {
  const [equations, setEquations] = useState<
    Array<{
      id: number;
      equation: string;
      x: number;
      y: number;
      speed: number;
      opacity: number;
    }>
  >([]);

  const mathEquations = [
    "f(x) = ax² + bx + c",
    "E = mc²",
    "F = ma",
    "∇·E = ρ/ε₀",
    "H(X) = -∑P(x)log₂P(x)",
    "L = ½mv² - V(r)",
    "P(A|B) = P(B|A)P(A)/P(B)",
    "σ(z) = 1/(1+e⁻ᶻ)",
    "∂L/∂w = 0",
    "J(θ) = ½∑(hθ(x⁽ⁱ⁾) - y⁽ⁱ⁾)²",
    "argmax P(y|x)",
    "KL(P||Q) = ∑P(x)log(P(x)/Q(x))",
    "∇f(x) = [∂f/∂x₁, ∂f/∂x₂, ...]",
    "A = UΣVᵀ",
    "det(A - λI) = 0",
  ];

  useEffect(() => {
    const createEquation = () => {
      return {
        id: Math.random(),
        equation:
          mathEquations[Math.floor(Math.random() * mathEquations.length)],
        x: Math.random() * window.innerWidth,
        y: -50,
        speed: Math.random() * 0.5 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
      };
    };

    // Initialize equations
    const initialEquations = Array.from({ length: 8 }, createEquation);
    setEquations(initialEquations);

    const interval = setInterval(() => {
      setEquations((prev) => {
        const updated = prev
          .map((eq) => ({
            ...eq,
            y: eq.y + eq.speed,
          }))
          .filter((eq) => eq.y < window.innerHeight + 100);

        // Add new equation occasionally
        if (Math.random() > 0.95 && updated.length < 12) {
          updated.push(createEquation());
        }

        return updated;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {equations.map((eq) => (
        <div
          key={eq.id}
          className="absolute font-mono text-sm text-black whitespace-nowrap"
          style={{
            left: eq.x,
            top: eq.y,
            opacity: eq.opacity,
            transform: "translateX(-50%)",
            fontSize: `${8 + Math.random() * 4}px`, // Updated to 8-12px range
          }}
        >
          {eq.equation}
        </div>
      ))}
    </div>
  );
};

// Neural Network Visualization
export const NeuralNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define neural network structure
    const layers = [8, 12, 8, 4]; // neurons per layer
    const neurons: Array<{ x: number; y: number; activation: number }> = [];
    const connections: Array<{ from: number; to: number; weight: number }> = [];

    // Create neurons
    let neuronIndex = 0;
    for (let layer = 0; layer < layers.length; layer++) {
      const layerX =
        (layer / (layers.length - 1)) * canvas.width * 0.8 + canvas.width * 0.1;
      const neuronsInLayer = layers[layer];

      for (let neuron = 0; neuron < neuronsInLayer; neuron++) {
        const neuronY =
          (neuron / (neuronsInLayer - 1)) * canvas.height * 0.6 +
          canvas.height * 0.2;
        neurons.push({
          x: layerX,
          y: neuronY,
          activation: Math.random(),
        });

        // Create connections to next layer
        if (layer < layers.length - 1) {
          const nextLayerStart = neuronIndex + neuronsInLayer;
          const nextLayerSize = layers[layer + 1];

          for (let nextNeuron = 0; nextNeuron < nextLayerSize; nextNeuron++) {
            connections.push({
              from: neuronIndex + neuron,
              to: nextLayerStart + nextNeuron,
              weight: Math.random() * 2 - 1,
            });
          }
        }
      }
      neuronIndex += neuronsInLayer;
    }

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      connections.forEach((conn) => {
        const fromNeuron = neurons[conn.from];
        const toNeuron = neurons[conn.to];

        const opacity = Math.abs(conn.weight) * 0.3;
        const pulseOpacity =
          opacity * (0.5 + 0.5 * Math.sin(frame * 0.02 + conn.from * 0.1));

        ctx.strokeStyle = `rgba(0, 0, 0, ${pulseOpacity})`;
        ctx.lineWidth = Math.abs(conn.weight) * 2;
        ctx.beginPath();
        ctx.moveTo(fromNeuron.x, fromNeuron.y);
        ctx.lineTo(toNeuron.x, toNeuron.y);
        ctx.stroke();
      });

      // Draw neurons
      neurons.forEach((neuron, index) => {
        neuron.activation = 0.3 + 0.7 * Math.sin(frame * 0.03 + index * 0.2);

        ctx.fillStyle = `rgba(0, 0, 0, ${neuron.activation * 0.8})`;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, 4 + neuron.activation * 3, 0, Math.PI * 2);
        ctx.fill();

        // Add activation labels
        if (Math.random() > 0.97) {
          ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
          ctx.font = "8px Courier New"; // Updated to 8px minimum
          ctx.fillText(
            neuron.activation.toFixed(2),
            neuron.x + 8,
            neuron.y + 3
          );
        }
      });

      frame++;
    };

    const interval = setInterval(draw, 100);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-10"
      style={{ zIndex: -1 }}
    />
  );
};

// AI Algorithm Visualization
export const AlgorithmVisualization: React.FC = () => {
  const [algorithms, setAlgorithms] = useState<
    Array<{
      name: string;
      steps: string[];
      currentStep: number;
      x: number;
      y: number;
    }>
  >([]);

  const aiAlgorithms = [
    {
      name: "Gradient Descent",
      steps: ["∇f(x)", "x ← x - α∇f(x)", "convergence?", "minimize J(θ)"],
    },
    {
      name: "Backpropagation",
      steps: ["forward pass", "∂L/∂w", "backward pass", "update weights"],
    },
    {
      name: "K-Means",
      steps: [
        "initialize centroids",
        "assign clusters",
        "update centroids",
        "repeat",
      ],
    },
    {
      name: "Decision Tree",
      steps: ["entropy(S)", "information gain", "split node", "leaf node"],
    },
  ];

  useEffect(() => {
    const initialAlgorithms = aiAlgorithms.map((algo, index) => ({
      ...algo,
      currentStep: 0,
      x: Math.random() * (window.innerWidth - 200),
      y: Math.random() * (window.innerHeight - 150),
    }));

    setAlgorithms(initialAlgorithms);

    const interval = setInterval(() => {
      setAlgorithms((prev) =>
        prev.map((algo) => ({
          ...algo,
          currentStep: (algo.currentStep + 1) % algo.steps.length,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {algorithms.map((algo, index) => (
        <div
          key={index}
          className="absolute font-mono text-black opacity-15"
          style={{
            left: algo.x,
            top: algo.y,
            transform: "translate(-50%, -50%)",
            fontSize: `${8 + Math.random() * 4}px`, // Updated to 8-12px range
          }}
        >
          <div className="font-bold mb-1">{algo.name}</div>
          {algo.steps.map((step, stepIndex) => (
            <div
              key={stepIndex}
              className={`transition-opacity duration-500 ${
                stepIndex === algo.currentStep ? "opacity-100" : "opacity-15"
              }`}
            >
              {stepIndex === algo.currentStep ? "▶ " : "  "}
              {step}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
