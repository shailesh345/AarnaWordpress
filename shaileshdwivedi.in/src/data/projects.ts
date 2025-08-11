export type Project = {
  title: string;
  summary: string;
  tech: string[];
  links?: { demo?: string; code?: string };
  tags?: string[];
};

export const featured: Project[] = [
  {
    title: "Aarna Streaming Platform",
    summary: "Scalable microservices for VOD/Live with TDD.",
    tech: ["Node.js", "React", "PostgreSQL", "Docker"],
    links: { demo: "#", code: "#" },
    tags: ["Distributed Systems", "SDLC", "Leadership"],
  },
  {
    title: "SaaS Observability Suite",
    summary:
      "End‑to‑end metrics, tracing, and alerting with role‑based access.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    links: { demo: "#", code: "#" },
    tags: ["SaaS", "Observability", "RBAC"],
  },
  {
    title: "Fintech Reporting Engine",
    summary: "Secure data pipelines and reporting with granular permissions.",
    tech: ["Python", "PostgreSQL", "Redis"],
    tags: ["Data", "Security", "ETL"],
  },
];

export const others: Project[] = [
  {
    title: "Realtime Analytics Dashboard",
    summary: "WebSocket driven charts and insights with caching layers.",
    tech: ["React", "TypeScript", "Redis"],
  },
  {
    title: "API Gateway & Auth Layer",
    summary: "Centralized auth, rate limits, and monitoring for microservices.",
    tech: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "E‑commerce Integrations Hub",
    summary: "Unified connectors for payments, inventory, and shipping.",
    tech: ["PHP", "MySQL", "RabbitMQ"],
  },
];
