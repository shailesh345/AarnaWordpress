export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Rao",
    role: "Product Manager",
    company: "Aarna",
    quote:
      "Shailesh consistently translates complex requirements into simple, scalable solutions. He elevates teams with his calm leadership and strong engineering instincts.",
  },
  {
    name: "Vikram Mehta",
    role: "CTO",
    company: "Tech Co",
    quote:
      "Dependable and quality‑driven. Our defect rate dropped notably after he introduced TDD and code review practices.",
  },
  {
    name: "Priya Sharma",
    role: "Lead Designer",
    company: "Studio X",
    quote:
      "Great collaborator. Shailesh balances UX and performance thoughtfully, making the final product delightful and fast.",
  },
  {
    name: "Arjun Singh",
    role: "Engineering Manager",
    company: "Aarna",
    quote:
      "He owns outcomes end‑to‑end, from architecture to delivery. A multiplier for any engineering org.",
  },
];
