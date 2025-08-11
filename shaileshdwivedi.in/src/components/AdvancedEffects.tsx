import React, { useEffect, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

export const MouseTrailEffect: React.FC = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        timestamp: Date.now(),
      };

      setTrail((prev) => [...prev.slice(-20), newPoint]);
    };

    const updateTrail = () => {
      const now = Date.now();
      setTrail((prev) => prev.filter((point) => now - point.timestamp < 1000));
      animationFrame = requestAnimationFrame(updateTrail);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationFrame = requestAnimationFrame(updateTrail);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / 1000);
        const scale = Math.max(0.1, 1 - age / 1000);

        return (
          <div
            key={point.id}
            className="absolute w-2 h-2 bg-black rounded-full"
            style={{
              left: point.x - 4,
              top: point.y - 4,
              opacity,
              transform: `scale(${scale})`,
              boxShadow: `0 0 10px rgba(0, 0, 0, ${opacity})`,
              transition: "opacity 0.1s ease-out",
            }}
          />
        );
      })}
    </div>
  );
};

export const VintageMouseCursor: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-transform duration-100 ${
        isClicking ? "scale-75" : "scale-100"
      }`}
      style={{
        left: cursorPos.x - 8,
        top: cursorPos.y - 8,
      }}
    >
      <div className="w-4 h-4 border-2 border-black bg-white/50 transform rotate-45 animate-pulse" />
      <div className="absolute inset-0 w-4 h-4 border border-black animate-ping opacity-50" />
    </div>
  );
};

export const BackgroundParticleField: React.FC = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    // Initialize particles
    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    setParticles(initialParticles);

    let animationFrame: number;

    const animate = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            newX = Math.max(0, Math.min(window.innerWidth, newX));
            particle.vx *= -1;
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newY = Math.max(0, Math.min(window.innerHeight, newY));
            particle.vy *= -1;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-black rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px rgba(0, 0, 0, ${
              particle.opacity
            })`,
          }}
        />
      ))}
    </div>
  );
};
