import SEO from "../lib/seo";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudies() {
  return (
    <div>
      <SEO title="Case Studies" />
      <Section
        title="Case Studies"
        description="Deep dives into projects and the impact delivered."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((c) => (
            <Reveal key={c.slug}>
              <article className="rounded border border-slate-200 dark:border-slate-800 p-4 bg-white/50 dark:bg-slate-900/50">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  {c.summary}
                </p>
                <div className="mt-3 flex gap-3 text-sm">
                  <Link
                    className="text-indigo-600 hover:underline"
                    to={`/case-studies/${c.slug}`}
                  >
                    Read more
                  </Link>
                  {c.links?.demo && (
                    <a
                      className="text-slate-600 hover:underline"
                      href={c.links.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
