import SEO from "../lib/seo";
import Section from "../components/Section";
import { useParams, Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <Section title="Not found">
        <p className="text-slate-600 dark:text-slate-300">
          No case study found.
        </p>
        <div className="mt-4">
          <Link className="text-indigo-600 underline" to="/case-studies">
            Back to Case Studies
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <div>
      <SEO title={cs.title} description={cs.summary} />
      <Section title={cs.title} description={cs.summary}>
        <div className="prose dark:prose-invert max-w-none">
          <h3>Problem</h3>
          <p>{cs.problem}</p>
          <h3>Approach</h3>
          <ul>
            {cs.approach.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <h3>Impact</h3>
          <ul>
            {cs.impact.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <h3>Tech</h3>
          <p>{cs.tech.join(", ")}</p>
        </div>
      </Section>
    </div>
  );
}
