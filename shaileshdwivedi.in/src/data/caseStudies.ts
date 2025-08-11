export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string[];
  impact: string[];
  tech: string[];
  links?: { demo?: string; code?: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "observability-suite",
    title: "SaaS Observability Suite",
    summary: "End‑to‑end metrics, tracing, and alerting with RBAC and scale.",
    problem:
      "Fragmented monitoring forced teams to juggle tools and miss cross‑service issues.",
    approach: [
      "Unified data model for metrics, logs, traces with service ownership",
      "Built ingestion pipeline with backpressure and sampling",
      "Role‑based access and tenant isolation",
      "Dashboards with SLOs and on‑call friendly alerts",
    ],
    impact: [
      "40% reduction in mean time to resolution (MTTR)",
      "Improved developer productivity and release confidence",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Kafka"],
    links: { demo: "#", code: "#" },
  },
  {
    slug: "fintech-reporting",
    title: "Fintech Reporting Engine",
    summary: "Secure data pipelines and granular permissioning.",
    problem:
      "Compliance and reporting were manual, slow, and error‑prone across systems.",
    approach: [
      "Automated ETL jobs with audit trails",
      "Granular permissions by entity and metric",
      "Versioned report templates and scheduling",
    ],
    impact: [
      "Cut reporting time by 70%",
      "Improved compliance posture and reduced errors",
    ],
    tech: ["Python", "PostgreSQL", "Redis"],
  },
];
