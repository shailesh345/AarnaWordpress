import React from "react";

interface RetroCardProps {
  children: React.ReactNode;
  className?: string;
  glitchText?: string;
  pulse?: boolean;
  scanline?: boolean;
}

const RetroCard: React.FC<RetroCardProps> = ({
  children,
  className = "",
  glitchText,
  pulse = false,
  scanline = false,
}) => {
  return (
    <div
      className={`retro-card pixel-perfect ${pulse ? "retro-pulse" : ""} ${
        scanline ? "terminal-scanline" : ""
      } ${className}`}
    >
      {glitchText && (
        <div className="glitch pixel-font" data-text={glitchText}>
          {glitchText}
        </div>
      )}
      {children}
    </div>
  );
};

export default RetroCard;
