import React, { useState, useEffect, useRef, useCallback } from "react";

// Advanced Hologram Effect
export const HologramDisplay: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [glitchIntensity, setGlitchIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchIntensity(Math.random() > 0.95 ? Math.random() * 5 : 0);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="relative z-10 transition-all duration-100"
        style={{
          transform: `translateX(${glitchIntensity}px)`,
          filter: `hue-rotate(${glitchIntensity * 10}deg)`,
        }}
      >
        {children}
      </div>

      {/* Hologram scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent animate-pulse" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"
          style={{ animation: "scan 3s linear infinite" }}
        />
      </div>

      {/* Edge glow */}
      <div className="absolute inset-0 border-2 border-black/30 shadow-lg shadow-black/20 pointer-events-none" />
    </div>
  );
};

// Interactive Circuit Board
export const InteractiveCircuitBoard: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeNodes, setActiveNodes] = useState<Set<number>>(new Set());
  const [pulses, setPulses] = useState<
    Array<{ id: number; x1: number; y1: number; x2: number; y2: number }>
  >([]);

  const nodes = [
    { id: 1, x: 50, y: 50, type: "cpu" },
    { id: 2, x: 150, y: 50, type: "memory" },
    { id: 3, x: 250, y: 50, type: "gpu" },
    { id: 4, x: 50, y: 150, type: "io" },
    { id: 5, x: 150, y: 150, type: "network" },
    { id: 6, x: 250, y: 150, type: "storage" },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 1, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 6 },
    { from: 2, to: 5 },
  ];

  const handleNodeClick = useCallback((nodeId: number) => {
    setActiveNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });

    // Create pulse effect
    const sourceNode = nodes.find((n) => n.id === nodeId);
    if (sourceNode) {
      connections
        .filter((conn) => conn.from === nodeId || conn.to === nodeId)
        .forEach((conn) => {
          const targetNode = nodes.find(
            (n) => n.id === (conn.from === nodeId ? conn.to : conn.from)
          );
          if (targetNode) {
            setPulses((prev) => [
              ...prev,
              {
                id: Date.now() + Math.random(),
                x1: sourceNode.x,
                y1: sourceNode.y,
                x2: targetNode.x,
                y2: targetNode.y,
              },
            ]);
          }
        });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPulses((prev) => prev.slice(1));
    }, 1000);

    return () => clearTimeout(timer);
  }, [pulses]);

  return (
    <div className="border-2 border-black p-4 bg-white">
      <div className="text-center text-black font-mono text-xs mb-2">
        CIRCUIT DIAGNOSTICS
      </div>
      <svg ref={svgRef} width="300" height="200" className="w-full">
        {/* Background grid */}
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          const isActive =
            activeNodes.has(conn.from) || activeNodes.has(conn.to);

          return (
            <line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={isActive ? "#000000" : "rgba(0,0,0,0.3)"}
              strokeWidth={isActive ? "2" : "1"}
              className="transition-all duration-300"
            />
          );
        })}

        {/* Pulse animations */}
        {pulses.map((pulse) => (
          <circle key={pulse.id} r="3" fill="#000000" className="animate-ping">
            <animateMotion
              dur="1s"
              path={`M ${pulse.x1},${pulse.y1} L ${pulse.x2},${pulse.y2}`}
            />
          </circle>
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill={activeNodes.has(node.id) ? "#000000" : "rgba(0,0,0,0.3)"}
              stroke="#000000"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:fill-gray-500"
              onClick={() => handleNodeClick(node.id)}
            />
            <text
              x={node.x}
              y={node.y + 20}
              textAnchor="middle"
              fill="#00ff00"
              fontSize="8"
              fontFamily="monospace"
              className="pointer-events-none"
            >
              {node.type.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

// Vintage Data Stream
export const VintageDataStream: React.FC = () => {
  const [streams, setStreams] = useState<
    Array<{ id: number; data: string[]; position: number }>
  >([]);

  const generateRandomData = () => {
    const types = ["INT", "STR", "FLT", "BOL", "ARR", "OBJ"];
    const values = ["0x4F2A", "NULL", "3.14", "TRUE", "[...]", "{...}"];
    return `${types[Math.floor(Math.random() * types.length)]}: ${
      values[Math.floor(Math.random() * values.length)]
    }`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStreams((prev) => {
        const updated = prev
          .map((stream) => ({
            ...stream,
            position: stream.position + 1,
          }))
          .filter((stream) => stream.position < 20);

        // Add new stream occasionally
        if (Math.random() < 0.3) {
          updated.push({
            id: Date.now(),
            data: Array.from({ length: 10 }, () => generateRandomData()),
            position: 0,
          });
        }

        return updated;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-2 border-black p-2 bg-white h-40 overflow-hidden">
      <div className="text-center text-black font-mono text-xs mb-2">
        DATA STREAM
      </div>
      <div className="relative h-full font-mono text-xs">
        {streams.map((stream) => (
          <div
            key={stream.id}
            className="absolute text-black whitespace-nowrap"
            style={{
              top: `${stream.position * 16}px`,
              left: `${Math.sin(stream.position * 0.1) * 20 + 10}px`,
              opacity: Math.max(0, 1 - stream.position / 15),
            }}
          >
            {stream.data[Math.floor(stream.position / 2) % stream.data.length]}
          </div>
        ))}
      </div>
    </div>
  );
};

// 3D Rotating Cube
export const Rotating3DCube: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x + (isHovered ? 2 : 1),
        y: prev.y + (isHovered ? 1.5 : 0.5),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  const faces = [
    {
      name: "FRONT",
      color: "rgba(0,0,0,0.1)",
      transform: "translateZ(50px)",
    },
    {
      name: "BACK",
      color: "rgba(0,0,0,0.1)",
      transform: "translateZ(-50px) rotateY(180deg)",
    },
    {
      name: "RIGHT",
      color: "rgba(0,0,0,0.15)",
      transform: "rotateY(90deg) translateZ(50px)",
    },
    {
      name: "LEFT",
      color: "rgba(0,0,0,0.15)",
      transform: "rotateY(-90deg) translateZ(50px)",
    },
    {
      name: "TOP",
      color: "rgba(0,0,0,0.2)",
      transform: "rotateX(90deg) translateZ(50px)",
    },
    {
      name: "BOTTOM",
      color: "rgba(0,0,0,0.2)",
      transform: "rotateX(-90deg) translateZ(50px)",
    },
  ];

  return (
    <div className="flex justify-center items-center h-40 perspective-1000">
      <div
        className="relative w-24 h-24 transform-style-3d cursor-pointer"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {faces.map((face, index) => (
          <div
            key={index}
            className="absolute w-24 h-24 border-2 border-black flex items-center justify-center font-mono text-xs text-black"
            style={{
              backgroundColor: face.color,
              transform: face.transform,
              backfaceVisibility: "hidden",
            }}
          >
            {face.name}
          </div>
        ))}
      </div>
    </div>
  );
};
