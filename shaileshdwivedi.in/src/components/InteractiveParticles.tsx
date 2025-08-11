import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  type: "dot" | "plus" | "cross";
}

const InteractiveParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        type: ["dot", "plus", "cross"][Math.floor(Math.random() * 3)] as
          | "dot"
          | "plus"
          | "cross",
      });
    }
    setParticles(initialParticles);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Animation loop
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Boundary collision
          if (newX < 0 || newX > window.innerWidth) particle.speedX *= -1;
          if (newY < 0 || newY > window.innerHeight) particle.speedY *= -1;

          // Mouse interaction
          const dx = mousePos.x - newX;
          const dy = mousePos.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const force = (100 - distance) / 100;
            newX -= (dx / distance) * force * 2;
            newY -= (dy / distance) * force * 2;
          }

          return {
            ...particle,
            x: Math.max(0, Math.min(window.innerWidth, newX)),
            y: Math.max(0, Math.min(window.innerHeight, newY)),
          };
        })
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animationId = setInterval(animateParticles, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(animationId);
    };
  }, [mousePos.x, mousePos.y]);

  const renderParticle = (particle: Particle) => {
    const baseStyle = {
      position: "fixed" as const,
      left: particle.x,
      top: particle.y,
      width: particle.size,
      height: particle.size,
      opacity: particle.opacity,
      pointerEvents: "none" as const,
      zIndex: -1,
      transition: "all 0.1s ease",
    };

    switch (particle.type) {
      case "dot":
        return (
          <div
            key={particle.id}
            style={{
              ...baseStyle,
              background: "linear-gradient(45deg, #00ffff, #ff00ff)",
              borderRadius: "50%",
              boxShadow: "0 0 4px currentColor",
            }}
          />
        );
      case "plus":
        return (
          <div
            key={particle.id}
            style={{
              ...baseStyle,
              color: "#00ff00",
              fontSize: particle.size,
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            +
          </div>
        );
      case "cross":
        return (
          <div
            key={particle.id}
            style={{
              ...baseStyle,
              color: "#ffff00",
              fontSize: particle.size,
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            ×
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map(renderParticle)}
    </div>
  );
};

export default InteractiveParticles;
