export type Role = {
  title: string;
  company: string;
  period: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Full‑stack Engineer",
    company: "Aarna",
    period: "2021 — Present",
    highlights: [
      "Led a team of 10 engineers, coaching on code quality, TDD, and reviews",
      "Architected distributed systems handling high traffic and data volume",
      "Designed robust REST APIs and database schemas for reliability and DX",
      "Reduced defect rate by implementing TDD and CI/CD gate checks",
      "Collaborated cross‑functionally to deliver on schedule and scope",
    ],
  },
  {
    title: "Full‑stack Engineer",
    company: "Tech Co",
    period: "2016 — 2021",
    highlights: [
      "Delivered 20+ projects across web/data platforms end‑to‑end",
      "Built dashboards and APIs with strong attention to UX and performance",
      "Introduced CI/CD pipelines and engineering best practices",
    ],
  },
];
