import React from "react";

interface ASCIIChartProps {
  data: { label: string; value: number; max?: number }[];
  title?: string;
  height?: number;
}

export const ASCIIChart: React.FC<ASCIIChartProps> = ({
  data,
  title,
  height = 8,
}) => {
  const maxValue = Math.max(...data.map((d) => d.max || d.value));

  const generateBar = (value: number, maxVal: number) => {
    const percentage = (value / maxVal) * 100;
    const barLength = Math.round((percentage / 100) * 20);
    const filled = "█".repeat(barLength);
    const empty = "░".repeat(20 - barLength);
    return filled + empty;
  };

  return (
    <div className="old-phone-terminal p-4">
      {title && (
        <div className="phone-font text-sm font-bold mb-3 text-center">
          {title}
        </div>
      )}
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="phone-font text-xs">
            <div className="flex justify-between mb-1">
              <span>{item.label}</span>
              <span>
                {item.value}
                {item.max ? `/${item.max}` : "%"}
              </span>
            </div>
            <div className="font-mono">
              {generateBar(item.value, item.max || maxValue)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ASCIIDiagramProps {
  type: "network" | "hierarchy" | "flow" | "timeline";
  title?: string;
}

export const ASCIIDiagram: React.FC<ASCIIDiagramProps> = ({ type, title }) => {
  const diagrams = {
    network: `
┌─────────────┐    ┌─────────────┐
│   CLIENT    │────│    API      │
│  (React)    │    │ (Node.js)   │
└─────────────┘    └─────────────┘
       │                  │
       │                  │
┌─────────────┐    ┌─────────────┐
│    CDN      │    │  DATABASE   │
│ (Assets)    │    │ (MongoDB)   │
└─────────────┘    └─────────────┘`,

    hierarchy: `
         ┌─────────────┐
         │   SYSTEM    │
         │ ARCHITECT   │
         └─────────────┘
                │
     ┌──────────┼──────────┐
     │          │          │
┌─────────┐ ┌─────────┐ ┌─────────┐
│FRONTEND │ │BACKEND  │ │DATABASE │
│  TEAM   │ │  TEAM   │ │  TEAM   │
└─────────┘ └─────────┘ └─────────┘`,

    flow: `
[START] → [PLAN] → [CODE] → [TEST] → [DEPLOY]
   │         │        │       │         │
   ▼         ▼        ▼       ▼         ▼
ANALYZE   DESIGN   BUILD   VERIFY   RELEASE
   │         │        │       │         │
   └─────────┴────────┴───────┴─────────┘`,

    timeline: `
2020 ├─ Started as Junior Developer
     │
2021 ├─ Full Stack Engineer
     │
2022 ├─ Senior Developer
     │
2023 ├─ Tech Lead
     │
2024 ├─ System Architect
     │
NOW  ●─ AI/ML Specialist`,
  };

  return (
    <div className="old-phone-card p-4">
      {title && (
        <div className="old-phone-title text-sm mb-4 text-center">{title}</div>
      )}
      <pre className="phone-font text-xs overflow-x-auto whitespace-pre">
        {diagrams[type]}
      </pre>
    </div>
  );
};

interface TechStackVisualizerProps {
  stacks: {
    name: string;
    technologies: string[];
  }[];
}

export const TechStackVisualizer: React.FC<TechStackVisualizerProps> = ({
  stacks,
}) => {
  return (
    <div className="old-phone-card p-4">
      <div className="old-phone-title text-sm mb-4 text-center">
        TECHNOLOGY STACK
      </div>
      <div className="space-y-4">
        {stacks.map((stack, index) => (
          <div key={index}>
            <div className="phone-font text-xs font-bold mb-2">
              {stack.name}
            </div>
            <div className="old-phone-terminal p-2">
              <pre className="phone-font text-xs">
                {`┌${"─".repeat(stack.name.length + 2)}┐
│ ${stack.technologies.join(" │ ")} │
└${"─".repeat(stack.name.length + 2)}┘`}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProgressMeterProps {
  skills: { name: string; level: number }[];
  title?: string;
}

export const ProgressMeter: React.FC<ProgressMeterProps> = ({
  skills,
  title,
}) => {
  const generateMeter = (level: number) => {
    const filled = Math.round(level / 10);
    const empty = 10 - filled;
    return "█".repeat(filled) + "░".repeat(empty);
  };

  return (
    <div className="old-phone-card p-4">
      {title && (
        <div className="old-phone-title text-sm mb-4 text-center">{title}</div>
      )}
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="phone-font text-xs">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="font-mono">
              [{generateMeter(skill.level)}] {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface SystemDiagramProps {
  title?: string;
}

export const SystemDiagram: React.FC<SystemDiagramProps> = ({ title }) => {
  return (
    <div className="old-phone-card p-4">
      {title && (
        <div className="old-phone-title text-sm mb-4 text-center">{title}</div>
      )}
      <pre className="phone-font text-xs overflow-x-auto">
        {`                 ┌─────────────────┐
                 │   LOAD BALANCER │
                 └─────────┬───────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
    ┌─────────▼───┐ ┌─────▼────┐ ┌────▼─────┐
    │  SERVER 1   │ │ SERVER 2 │ │ SERVER 3 │
    │   (API)     │ │  (API)   │ │  (API)   │
    └─────────┬───┘ └─────┬────┘ └────┬─────┘
              │           │           │
              └───────────┼───────────┘
                          │
                ┌─────────▼────────┐
                │    DATABASE      │
                │   (PostgreSQL)   │
                └──────────────────┘`}
      </pre>
    </div>
  );
};
