import React, { useState, useEffect, useRef } from "react";

// Vintage Terminal Command
export const VintageTerminal: React.FC<{ commands?: string[] }> = ({
  commands = [],
}) => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const defaultCommands = [
    "> INITIALIZING SYSTEM...",
    "> LOADING AI MODULES...",
    "> NEURAL NETWORKS ACTIVE",
    "> MACHINE LEARNING READY",
    "> SYSTEM OPERATIONAL",
    "> WELCOME TO PORTFOLIO_V2.1",
  ];

  const commandList = commands.length > 0 ? commands : defaultCommands;

  useEffect(() => {
    if (currentCommand >= commandList.length) return;

    const command = commandList[currentCommand];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= command.length) {
        setDisplayText(command.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentCommand((prev) => prev + 1);
          setDisplayText("");
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentCommand, commandList]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="font-mono text-xs bg-white text-black p-4 border-2 border-black h-32 overflow-hidden">
      <div className="h-full overflow-y-auto">
        {commandList.slice(0, currentCommand).map((cmd, index) => (
          <div key={index} className="mb-1">
            {cmd}
          </div>
        ))}
        <div className="flex">
          <span>{displayText}</span>
          {showCursor && (
            <span className="ml-1 bg-white text-black border border-black">
              _
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// Vintage Oscilloscope Effect
export const VintageOscilloscope: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frequency, setFrequency] = useState(1);
  const [amplitude, setAmplitude] = useState(50);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 150;

    let animationId: number;
    let time = 0;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Waveform
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin((x * frequency * Math.PI * 2) / canvas.width + time) *
            amplitude +
          Math.sin(
            (x * frequency * 3 * Math.PI * 2) / canvas.width + time * 1.5
          ) *
            (amplitude * 0.3);

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      time += 0.05;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [frequency, amplitude]);

  return (
    <div className="border-2 border-black p-2 bg-white">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
      />
      <div className="flex gap-4 mt-2 text-xs text-black">
        <label className="flex items-center gap-2">
          FREQ:
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="w-16"
          />
          {frequency.toFixed(1)}
        </label>
        <label className="flex items-center gap-2">
          AMP:
          <input
            type="range"
            min="10"
            max="70"
            step="5"
            value={amplitude}
            onChange={(e) => setAmplitude(Number(e.target.value))}
            className="w-16"
          />
          {amplitude}
        </label>
      </div>
    </div>
  );
};

// Vintage Radar Screen
export const VintageRadar: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [targets, setTargets] = useState<
    Array<{ x: number; y: number; age: number }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 200;
    canvas.height = 200;

    let animationId: number;
    let sweepAngle = 0;

    const draw = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 90;

      // Clear canvas
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Radar circles
      ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
      ctx.lineWidth = 1;
      for (let r = 20; r <= radius; r += 20) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(centerX - radius, centerY);
      ctx.lineTo(centerX + radius, centerY);
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY + radius);
      ctx.stroke();

      // Sweep line
      const sweepX = centerX + Math.cos(sweepAngle) * radius;
      const sweepY = centerY + Math.sin(sweepAngle) * radius;

      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(sweepX, sweepY);
      ctx.stroke();

      // Sweep gradient
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, sweepAngle - Math.PI / 6, sweepAngle);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();

      // Targets
      targets.forEach((target) => {
        ctx.fillStyle = `rgba(0, 0, 0, ${Math.max(0, 1 - target.age / 100)})`;
        ctx.beginPath();
        ctx.arc(target.x, target.y, 3, 0, Math.PI * 2);
        ctx.fill();
        target.age++;
      });

      // Remove old targets
      setTargets((prev) => prev.filter((target) => target.age < 100));

      // Add new targets randomly
      if (Math.random() < 0.02) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * radius * 0.8;
        setTargets((prev) => [
          ...prev,
          {
            x: centerX + Math.cos(angle) * distance,
            y: centerY + Math.sin(angle) * distance,
            age: 0,
          },
        ]);
      }

      sweepAngle += 0.05;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [targets]);

  return (
    <div className="border-2 border-black p-2 bg-white">
      <div className="text-center text-xs text-black mb-2">RADAR SCAN</div>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
};

// Vintage Status Panel
export const VintageStatusPanel: React.FC = () => {
  const [stats, setStats] = useState({
    cpu: 45,
    memory: 67,
    network: 23,
    disk: 89,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        cpu: Math.max(0, Math.min(100, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(
          0,
          Math.min(100, prev.memory + (Math.random() - 0.5) * 5)
        ),
        network: Math.max(
          0,
          Math.min(100, prev.network + (Math.random() - 0.5) * 15)
        ),
        disk: Math.max(0, Math.min(100, prev.disk + (Math.random() - 0.5) * 2)),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const StatusBar: React.FC<{ label: string; value: number }> = ({
    label,
    value,
  }) => (
    <div className="mb-2">
      <div className="flex justify-between text-xs mb-1">
        <span>{label}:</span>
        <span>{Math.round(value)}%</span>
      </div>
      <div className="border-2 border-black h-2 bg-white">
        <div
          className="h-full bg-black transition-all duration-1000"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="border-2 border-black p-3 bg-white text-black font-mono text-xs">
      <div className="text-center mb-3">SYSTEM STATUS</div>
      <StatusBar label="CPU" value={stats.cpu} />
      <StatusBar label="MEM" value={stats.memory} />
      <StatusBar label="NET" value={stats.network} />
      <StatusBar label="DSK" value={stats.disk} />
      <div className="text-center mt-3 text-xs opacity-70">
        {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};
