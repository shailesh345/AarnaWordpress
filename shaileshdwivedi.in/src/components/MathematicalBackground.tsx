import React, { useRef, useEffect } from "react";

// Mathematical Formula Rain Effect
export const FormulaRain: React.FC<{ density?: number }> = ({
  density = 40,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Mathematical formulas and AI/ML equations
    const formulas = [
      // Core ML formulas
      "f(x)=wx+b",
      "y=σ(wx+b)",
      "L=½(y-ŷ)²",
      "∇w=∂L/∂w",
      "w←w-α∇w",
      // Calculus & derivatives
      "∂f/∂x",
      "d/dx[f(x)]",
      "∫f(x)dx",
      "∇²f=∂²f/∂x²",
      // Probability & Statistics
      "P(A|B)",
      "E[X]=μ",
      "Var(X)=σ²",
      "H(X)=-ΣP(x)log P(x)",
      // Linear Algebra
      "Ax=λx",
      "A=UΣVᵀ",
      "det(A)",
      "tr(A)=Σaᵢᵢ",
      "||x||₂",
      "⟨x,y⟩",
      // Deep Learning
      "ReLU(x)=max(0,x)",
      "tanh(x)",
      "softmax(x)",
      "cross-entropy",
      "dropout(x)",
      "batch_norm",
      // Optimization
      "argmin f(x)",
      "Adam: m←β₁m+(1-β₁)g",
      "SGD: θ←θ-η∇J(θ)",
      // Information Theory
      "I(X;Y)",
      "KL(P||Q)",
      "Φ(x)=∫e^(-t²/2)dt",
      // Logic & Set Theory
      "A∩B",
      "A∪B",
      "A⊆B",
      "A⊕B",
      "∀x∈X",
      "∃x∈X",
      "x∈A",
      "x∉A",
      // Binary patterns
      "01101001",
      "11000011",
      "10101010",
      // Greek letters for parameters
      "α",
      "β",
      "γ",
      "δ",
      "ε",
      "ζ",
      "η",
      "θ",
      "ι",
      "κ",
      "λ",
      "μ",
      "ν",
      "ξ",
      "π",
      "ρ",
      "σ",
      "τ",
      "υ",
      "φ",
      "χ",
      "ψ",
      "ω",
      "Α",
      "Β",
      "Γ",
      "Δ",
      "Ε",
      "Ζ",
      "Η",
      "Θ",
      "Ι",
      "Κ",
      "Λ",
      "Μ",
      "Ν",
      "Ξ",
      "Π",
      "Ρ",
      "Σ",
      "Τ",
      "Υ",
      "Φ",
      "Χ",
      "Ψ",
      "Ω",
      // Mathematical operators
      "∑",
      "∏",
      "∫",
      "∮",
      "∇",
      "∂",
      "∆",
      "∞",
      "√",
      "∛",
      "∜",
      "≈",
      "≡",
      "≠",
      "≤",
      "≥",
      "≪",
      "≫",
      "∝",
      "∼",
      "≅",
      "≃",
      "⊂",
      "⊃",
      "⊆",
      "⊇",
      "⊈",
      "⊉",
      "⊊",
      "⊋",
      "∈",
      "∉",
      "∋",
      "∌",
      "∧",
      "∨",
      "¬",
      "⊕",
      "⊗",
      "⊙",
      "⊘",
      "⊚",
      "⊛",
      "⊜",
      "⊝",
      "→",
      "←",
      "↑",
      "↓",
      "↔",
      "↕",
      "⇒",
      "⇐",
      "⇑",
      "⇓",
      "⇔",
      "⇕",
      "±",
      "∓",
      "×",
      "÷",
      "∘",
      "∗",
      "⋆",
      "⋅",
      "⋯",
      "⋮",
      "⋰",
      "⋱",
    ];

    const fontSize = 10; // Updated to 10px (8-12px range)
    const columns = Math.floor(canvas.width / (fontSize * 0.6));
    const drops: Array<{
      pos: number;
      speed: number;
      formula: string;
      opacity: number;
      color: string;
    }> = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      const formula = formulas[Math.floor(Math.random() * formulas.length)];
      let color = "#888"; // Much lighter base color

      // Color coding based on formula type - all lighter
      if (
        formula.includes("∇") ||
        formula.includes("∂") ||
        formula.includes("∫")
      ) {
        color = "#777"; // Calculus - light gray
      } else if (
        ["α", "β", "γ", "δ", "ε", "θ", "λ", "μ", "σ", "φ", "ψ", "ω"].includes(
          formula
        )
      ) {
        color = "#999"; // Greek letters - lighter gray
      } else if (formula.includes("0") || formula.includes("1")) {
        color = "#aaa"; // Binary - light
      } else if (formula.includes("=") || formula.includes("←")) {
        color = "#666"; // Equations - medium gray
      }

      drops[i] = {
        pos: (Math.random() * canvas.height) / fontSize,
        speed: Math.random() * 0.2 + 0.05, // Much slower
        formula: formula,
        opacity: Math.random() * 0.3 + 0.1, // Much lower opacity
        color: color,
      };
    }

    let frame = 0;
    const draw = () => {
      // Create subtle fade effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.12)"; // More fade
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];

        // Create pulsing effect with lower intensity
        const pulseOpacity =
          drop.opacity * 0.4 * (0.7 + 0.3 * Math.sin(frame * 0.02 + i * 0.1));

        ctx.fillStyle = drop.color;
        ctx.globalAlpha = pulseOpacity;

        const x = i * fontSize * 0.6;
        const y = drop.pos * fontSize;

        // Add slight rotation for visual interest
        ctx.save();
        ctx.translate(x + fontSize / 2, y);
        ctx.rotate(Math.sin(frame * 0.01 + i) * 0.1);
        ctx.fillText(drop.formula, -ctx.measureText(drop.formula).width / 2, 0);
        ctx.restore();

        // Update drop position
        drop.pos += drop.speed;

        // Reset drop when it goes off screen
        if (drop.pos * fontSize > canvas.height && Math.random() > 0.99) {
          // Much less frequent
          drop.pos = -2;
          drop.formula = formulas[Math.floor(Math.random() * formulas.length)];
          drop.speed = Math.random() * 0.2 + 0.05; // Slower
          drop.opacity = Math.random() * 0.3 + 0.1; // Lower opacity

          // Update color based on new formula - all lighter
          if (
            drop.formula.includes("∇") ||
            drop.formula.includes("∂") ||
            drop.formula.includes("∫")
          ) {
            drop.color = "#777";
          } else if (
            [
              "α",
              "β",
              "γ",
              "δ",
              "ε",
              "θ",
              "λ",
              "μ",
              "σ",
              "φ",
              "ψ",
              "ω",
            ].includes(drop.formula)
          ) {
            drop.color = "#999";
          } else if (drop.formula.includes("0") || drop.formula.includes("1")) {
            drop.color = "#aaa";
          } else {
            drop.color = "#666";
          }
        }
      }

      ctx.globalAlpha = 1;
      frame++;
    };

    const interval = setInterval(draw, 180); // Slower animation

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

// Binary Stream Effect
export const BinaryStream: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binaryPatterns = [
      "01010101",
      "11001100",
      "00110011",
      "10101010",
      "11110000",
      "00001111",
      "01100110",
      "10011001",
      "11011101",
      "10111011",
      "01101110",
      "11101011",
      "0",
      "1",
      "00",
      "11",
      "010",
      "101",
      "001",
      "110",
    ];

    const streams: Array<{
      x: number;
      y: number;
      pattern: string;
      speed: number;
      opacity: number;
    }> = [];

    // Create binary streams
    for (let i = 0; i < 30; i++) {
      streams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        pattern:
          binaryPatterns[Math.floor(Math.random() * binaryPatterns.length)],
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "8px Courier New"; // Updated to 8px minimum
      ctx.fillStyle = "#000";

      streams.forEach((stream) => {
        ctx.globalAlpha = stream.opacity;

        // Draw vertical binary stream
        for (let i = 0; i < 10; i++) {
          const char = stream.pattern[i % stream.pattern.length];
          ctx.fillText(char, stream.x, stream.y + i * 15);
        }

        // Update position
        stream.y += stream.speed;

        // Reset when off screen
        if (stream.y > canvas.height + 50) {
          stream.y = -150;
          stream.x = Math.random() * canvas.width;
          stream.pattern =
            binaryPatterns[Math.floor(Math.random() * binaryPatterns.length)];
        }
      });

      ctx.globalAlpha = 1;
    };

    const interval = setInterval(draw, 50);

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
      className="fixed inset-0 pointer-events-none z-0 opacity-8"
      style={{ zIndex: -2 }}
    />
  );
};
