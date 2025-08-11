import React, { useState, useEffect, useRef } from "react";

// Vintage Computer Interface
export const VintageComputerInterface: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemLoad, setSystemLoad] = useState(45);
  const [networkActivity, setNetworkActivity] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setSystemLoad((prev) =>
        Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 10))
      );
      setNetworkActivity(Math.random() * 100);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white border-2 border-black p-4 font-mono text-black">
      <div className="border-b border-black pb-2 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-lg">SYSTEM_TERMINAL_V2.1</span>
          <span className="text-sm">{currentTime.toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <div className="mb-2">SYSTEM STATUS:</div>
          <div className="ml-4">
            <div>CPU LOAD: {systemLoad.toFixed(1)}%</div>
            <div>MEMORY: 2048MB / 4096MB</div>
            <div>NETWORK: {networkActivity.toFixed(0)}kb/s</div>
            <div>STATUS: OPERATIONAL</div>
          </div>
        </div>

        <div>
          <div className="mb-2">ACTIVE PROCESSES:</div>
          <div className="ml-4 text-xs">
            <div>[001] PORTFOLIO.EXE</div>
            <div>[002] AI_ENGINE.SYS</div>
            <div>[003] NEURAL_NET.DLL</div>
            <div>[004] DATA_PROC.APP</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-2 border-t border-black">
        <div className="flex items-center">
          <span className="mr-2">$&gt;</span>
          <div className="flex-1 bg-black h-0.5 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// Interactive Sound Visualizer
export const SoundVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 100;

    let animationId: number;
    const bars = 32;
    const barWidth = canvas.width / bars;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bars; i++) {
        const height = isActive
          ? Math.random() * canvas.height * 0.8 + 10
          : Math.sin(Date.now() * 0.001 + i * 0.5) * 20 + 25;

        const x = i * barWidth;
        const y = canvas.height - height;

        // Gradient based on height
        const gradient = ctx.createLinearGradient(0, y, 0, canvas.height);
        gradient.addColorStop(0, "#000000");
        gradient.addColorStop(0.5, "#333333");
        gradient.addColorStop(1, "#666666");

        ctx.fillStyle = gradient;
        ctx.fillRect(x + 1, y, barWidth - 2, height);

        // Peak indicator
        if (height > canvas.height * 0.6) {
          ctx.fillStyle = "#000000";
          ctx.fillRect(x + 1, y - 2, barWidth - 2, 2);
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isActive]);

  return (
    <div className="border-2 border-black p-2 bg-white">
      <div className="flex justify-between items-center mb-2">
        <span className="text-black font-mono text-xs">AUDIO SPECTRUM</span>
        <button
          onClick={() => setIsActive(!isActive)}
          className="text-black font-mono text-xs border-2 border-black px-2 py-1 hover:bg-black hover:text-white transition-colors"
        >
          {isActive ? "STOP" : "START"}
        </button>
      </div>
      <canvas ref={canvasRef} className="w-full" />
    </div>
  );
};

// Vintage Progress Bars
export const VintageProgressBars: React.FC = () => {
  const [progress, setProgress] = useState({
    downloading: 0,
    processing: 0,
    analyzing: 0,
    optimizing: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => ({
        downloading: (prev.downloading + Math.random() * 3) % 100,
        processing: (prev.processing + Math.random() * 2) % 100,
        analyzing: (prev.analyzing + Math.random() * 1.5) % 100,
        optimizing: (prev.optimizing + Math.random() * 1) % 100,
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const ProgressBar: React.FC<{
    label: string;
    value: number;
    color?: string;
  }> = ({ label, value, color = "#00ff00" }) => (
    <div className="mb-3">
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span>{value.toFixed(1)}%</span>
      </div>
      <div className="border-2 border-black h-4 bg-white relative overflow-hidden">
        <div
          className="h-full transition-all duration-100"
          style={{
            width: `${value}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      </div>
    </div>
  );

  return (
    <div className="border-2 border-black p-4 bg-white text-black font-mono">
      <div className="text-center text-sm mb-4">SYSTEM OPERATIONS</div>
      <ProgressBar label="DOWNLOADING DATA..." value={progress.downloading} />
      <ProgressBar
        label="PROCESSING ALGORITHMS..."
        value={progress.processing}
        color="#333333"
      />
      <ProgressBar
        label="ANALYZING PATTERNS..."
        value={progress.analyzing}
        color="#666666"
      />
      <ProgressBar
        label="OPTIMIZING NEURAL NETS..."
        value={progress.optimizing}
        color="#000000"
      />
    </div>
  );
};

// Interactive Network Graph
export const InteractiveNetworkGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, x: 200, y: 100, label: "INPUT", type: "input" },
    { id: 2, x: 150, y: 150, label: "HIDDEN", type: "hidden" },
    { id: 3, x: 250, y: 150, label: "HIDDEN", type: "hidden" },
    { id: 4, x: 100, y: 200, label: "CONV", type: "conv" },
    { id: 5, x: 200, y: 200, label: "POOL", type: "pool" },
    { id: 6, x: 300, y: 200, label: "DENSE", type: "dense" },
    { id: 7, x: 200, y: 250, label: "OUTPUT", type: "output" },
  ];

  const connections = [
    { from: 1, to: 2, weight: 0.8 },
    { from: 1, to: 3, weight: 0.6 },
    { from: 2, to: 4, weight: 0.9 },
    { from: 2, to: 5, weight: 0.7 },
    { from: 3, to: 5, weight: 0.8 },
    { from: 3, to: 6, weight: 0.5 },
    { from: 4, to: 7, weight: 0.9 },
    { from: 5, to: 7, weight: 0.7 },
    { from: 6, to: 7, weight: 0.6 },
  ];

  const getNodeColor = (type: string, isSelected: boolean) => {
    const colors = {
      input: "#000000",
      hidden: "#333333",
      conv: "#666666",
      pool: "#999999",
      dense: "#AAAAAA",
      output: "#CCCCCC",
    };
    return isSelected
      ? "#FFFFFF"
      : colors[type as keyof typeof colors] || "#000000";
  };

  return (
    <div className="border-2 border-black p-2 bg-white">
      <div className="text-center text-black font-mono text-xs mb-2">
        NEURAL NETWORK
      </div>
      <svg ref={svgRef} width="400" height="300" className="w-full">
        {/* Connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          const isActive =
            selectedNode === conn.from || selectedNode === conn.to;

          return (
            <line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={isActive ? "#000000" : "rgba(0,0,0,0.3)"}
              strokeWidth={conn.weight * 3}
              opacity={isActive ? 1 : 0.6}
              className="transition-all duration-300"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill={getNodeColor(node.type, selectedNode === node.id)}
              stroke="#000000"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300"
              onClick={() =>
                setSelectedNode(selectedNode === node.id ? null : node.id)
              }
            />
            <text
              x={node.x}
              y={node.y + 25}
              textAnchor="middle"
              fill="#00ff00"
              fontSize="8"
              fontFamily="monospace"
              className="pointer-events-none"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {selectedNode && (
        <div className="mt-2 text-xs text-black font-mono">
          Selected: {nodes.find((n) => n.id === selectedNode)?.label} Layer
        </div>
      )}
    </div>
  );
};
