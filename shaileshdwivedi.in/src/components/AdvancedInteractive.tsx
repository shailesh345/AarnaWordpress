import React, { useState, useEffect } from "react";

// Hologram Display
export const HologramDisplay: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 100);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Main display */}
      <div
        className={`transition-all duration-100 ${
          glitchActive ? "transform translate-x-1 filter blur-[1px]" : ""
        }`}
        style={{
          textShadow: glitchActive
            ? "2px 0 #ff0000, -2px 0 #00ffff"
            : "0 0 10px rgba(0,255,255,0.3)",
        }}
      >
        {children}
      </div>

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,255,255,0.1) 2px,
            rgba(0,255,255,0.1) 4px
          )`,
        }}
      />

      {/* Edge glow */}
      <div className="absolute inset-0 border-2 border-black/30 shadow-lg shadow-black/20 pointer-events-none" />
    </div>
  );
};

// 3D Rotating Cube
export const Rotating3DCube: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setRotation((prev) => ({
          x: prev.x + 1,
          y: prev.y + 0.5,
        }));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isHovered) {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / 5;
      const deltaY = (e.clientY - centerY) / 5;

      setRotation({
        x: deltaY,
        y: deltaX,
      });
    }
  };

  return (
    <div
      className="w-32 h-32 mx-auto cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className="w-full h-full preserve-3d"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          transition: isHovered ? "none" : "transform 0.1s ease-out",
        }}
      >
        {/* Cube faces */}
        {[
          { face: "front", transform: "translateZ(32px)", bg: "bg-black" },
          {
            face: "back",
            transform: "translateZ(-32px) rotateY(180deg)",
            bg: "bg-gray-800",
          },
          {
            face: "right",
            transform: "rotateY(90deg) translateZ(32px)",
            bg: "bg-gray-700",
          },
          {
            face: "left",
            transform: "rotateY(-90deg) translateZ(32px)",
            bg: "bg-gray-600",
          },
          {
            face: "top",
            transform: "rotateX(90deg) translateZ(32px)",
            bg: "bg-gray-500",
          },
          {
            face: "bottom",
            transform: "rotateX(-90deg) translateZ(32px)",
            bg: "bg-gray-400",
          },
        ].map((face) => (
          <div
            key={face.face}
            className={`absolute w-16 h-16 border border-white/30 ${face.bg} flex items-center justify-center text-white text-xs font-mono`}
            style={{
              transform: face.transform,
              transformStyle: "preserve-3d",
            }}
          >
            {face.face.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};
