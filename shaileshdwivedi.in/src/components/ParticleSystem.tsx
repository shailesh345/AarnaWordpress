import React, { useRef, useEffect, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface ParticleSystemProps {
  mouseInteraction?: boolean;
  particleCount?: number;
  colors?: string[];
  speed?: number;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  mouseInteraction = true,
  particleCount = 100,
  colors = ["#000", "#333", "#666"],
  speed = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * 200 + 100,
          maxLife: Math.random() * 200 + 100,
        });
      }
    };

    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (mouseInteraction) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse interaction
        if (mouseInteraction) {
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const force = (100 - distance) / 100;
            particle.vx += dx * force * 0.01;
            particle.vy += dy * force * 0.01;
          }
        }

        // Boundary collision
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Update life
        particle.life--;
        particle.opacity = (particle.life / particle.maxLife) * 0.5;

        // Reset particle if life ends
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.opacity = Math.random() * 0.5 + 0.1;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.current.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.save();
            ctx.globalAlpha = 0.1 * (1 - distance / 80);
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (mouseInteraction) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mouseInteraction, particleCount, colors, speed, mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

// DNA Helix Animation
export const DNAHelix: React.FC<{ height?: number }> = ({ height = 200 }) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const generateHelix = () => {
    const width = 30;
    const helixHeight = height / 10;
    let result = "";

    for (let y = 0; y < helixHeight; y++) {
      const angle1 = (y + frame * 0.1) * 0.5;
      const angle2 = angle1 + Math.PI;

      const x1 = Math.floor(Math.sin(angle1) * 10 + 15);
      const x2 = Math.floor(Math.sin(angle2) * 10 + 15);

      let line = " ".repeat(width);
      line = line.substring(0, x1) + "●" + line.substring(x1 + 1);
      line = line.substring(0, x2) + "●" + line.substring(x2 + 1);

      // Add connection every few lines
      if (y % 3 === 0) {
        const start = Math.min(x1, x2);
        const end = Math.max(x1, x2);
        for (let i = start + 1; i < end; i++) {
          line = line.substring(0, i) + "─" + line.substring(i + 1);
        }
      }

      result += line + "\n";
    }

    return result;
  };

  return (
    <div className="old-phone-terminal p-4 font-mono text-xs overflow-hidden">
      <div className="text-center mb-2 phone-font font-bold">DNA SEQUENCE</div>
      <pre className="whitespace-pre leading-tight">{generateHelix()}</pre>
    </div>
  );
};

// Binary Rain Effect
export const BinaryRain: React.FC<{ columns?: number }> = ({
  columns = 20,
}) => {
  const [drops, setDrops] = useState<number[]>([]);

  useEffect(() => {
    setDrops(Array.from({ length: columns }, () => Math.random() * 100));

    const interval = setInterval(() => {
      setDrops((prev) => prev.map((drop) => (drop > 100 ? 0 : drop + 2)));
    }, 100);

    return () => clearInterval(interval);
  }, [columns]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {drops.map((drop, index) => (
        <div
          key={index}
          className="absolute font-mono text-green-400 opacity-8"
          style={{
            left: `${(index * 100) / columns}%`,
            top: `${drop}%`,
            transform: "translateY(-50%)",
            fontSize: `${8 + Math.random() * 4}px`, // Updated to 8-12px range
          }}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="mb-1">
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Geometric Patterns
export const GeometricPattern: React.FC<{
  pattern: "grid" | "triangles" | "circles";
}> = ({ pattern }) => {
  const renderPattern = () => {
    switch (pattern) {
      case "grid":
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {Array.from({ length: 10 }, (_, i) => (
              <g key={i}>
                <line
                  x1={i * 10}
                  y1="0"
                  x2={i * 10}
                  y2="100"
                  stroke="#000"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1={i * 10}
                  x2="100"
                  y2={i * 10}
                  stroke="#000"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </g>
            ))}
          </svg>
        );

      case "triangles":
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {Array.from({ length: 6 }, (_, i) => (
              <polygon
                key={i}
                points={`${i * 15},10 ${i * 15 + 10},30 ${i * 15 - 10},30`}
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
                opacity="0.3"
              />
            ))}
          </svg>
        );

      case "circles":
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {Array.from({ length: 5 }, (_, i) => (
              <circle
                key={i}
                cx="50"
                cy="50"
                r={10 + i * 10}
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
                opacity="0.3"
              />
            ))}
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      {renderPattern()}
    </div>
  );
};
