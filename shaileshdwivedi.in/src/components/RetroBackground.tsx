import React, { useEffect, useState } from "react";

const RetroBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Main retro background */}
      <div className="retro-bg">
        {/* Floating computer icons */}
        <div className="floating-computers">
          {[...Array(8)].map((_, i) => (
            <div key={`computer-${i}`} className="computer-icon" />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={`tool-${i}`}
              className={`tool-icon ${i % 2 === 0 ? "wrench" : "gear"}`}
            />
          ))}
        </div>
      </div>

      {/* Code rain effect */}
      <div className="code-rain" />
    </>
  );
};

export default RetroBackground;
