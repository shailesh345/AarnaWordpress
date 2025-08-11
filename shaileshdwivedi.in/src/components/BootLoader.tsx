import React, { useState, useEffect } from "react";
import { LoadingTerminal } from "./AdvancedAnimations";

interface BootLoaderProps {
  onComplete: () => void;
}

const BootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [bootStage, setBootStage] = useState(0);
  const [showMatrix, setShowMatrix] = useState(false);

  const bootSequence = [
    "INITIALIZING SYSTEM...",
    "LOADING NEURAL NETWORKS...",
    "CONNECTING TO CLOUD SERVICES...",
    "OPTIMIZING PERFORMANCE...",
    "SYSTEM READY",
  ];

  useEffect(() => {
    const stages = [
      setTimeout(() => setBootStage(1), 1000),
      setTimeout(() => setBootStage(2), 2000),
      setTimeout(() => setBootStage(3), 3000),
      setTimeout(() => setBootStage(4), 4000),
      setTimeout(() => setShowMatrix(true), 4500),
      setTimeout(() => onComplete(), 6000),
    ];

    return () => stages.forEach((timer) => clearTimeout(timer));
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono flex items-center justify-center z-50">
      {/* Matrix Effect Background */}
      {showMatrix && (
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-30 animate-matrix"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                fontSize: `${8 + Math.random() * 4}px`, // Updated to 8-12px range
              }}
            >
              {Math.random().toString(36).substring(2, 15)}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 text-center space-y-8">
        {/* Boot Logo */}
        <div className="text-6xl font-bold animate-pulse">
          <div>█▀▀▀▀█</div>
          <div>█ ▄▄▄ █</div>
          <div>█ ███ █</div>
          <div>█▄▄▄▄▄█</div>
        </div>

        {/* System Name */}
        <div className="text-2xl font-bold tracking-widest">
          PORTFOLIO OS v2.0
        </div>

        {/* Boot Messages */}
        <div className="h-32 flex flex-col justify-center">
          {bootSequence.slice(0, bootStage).map((message, index) => (
            <div
              key={index}
              className="text-sm py-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <span className="text-yellow-400">▶</span> {message}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-96 mx-auto">
          <div className="text-sm mb-2">Loading Progress</div>
          <div className="border border-green-400 h-4 relative overflow-hidden">
            <div
              className="h-full bg-green-400 transition-all duration-1000 relative"
              style={{ width: `${(bootStage / bootSequence.length) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-scan"></div>
            </div>
          </div>
          <div className="text-xs mt-1 text-right">
            {Math.round((bootStage / bootSequence.length) * 100)}%
          </div>
        </div>

        {/* Skip Button */}
        <button
          onClick={onComplete}
          className="text-xs text-gray-500 hover:text-green-400 transition-colors duration-300 mt-8"
        >
          [PRESS ANY KEY TO SKIP]
        </button>
      </div>
    </div>
  );
};

export default BootLoader;
