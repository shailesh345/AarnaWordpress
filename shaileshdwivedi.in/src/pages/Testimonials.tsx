import SEO from "../lib/seo";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <div>
      <SEO title="Testimonials" />
      <Section
        title="What people say"
        description="A few words from collaborators and leaders I've worked with."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <figure className="rounded border border-slate-200 dark:border-slate-800 p-4 bg-white/50 dark:bg-slate-900/50">
                <blockquote className="text-slate-700 dark:text-slate-300">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                  — {t.name}, {t.role} · {t.company}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
