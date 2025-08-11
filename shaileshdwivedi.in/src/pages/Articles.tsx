import SEO from "@/lib/seo";
import Section from "@/components/Section";

export default function Articles() {
  return (
    <>
      <SEO title="Articles" />
      <Section title="Articles" description="Writing, notes, and ideas.">
        <p className="text-slate-600 dark:text-slate-300">
          Coming soon. Follow on LinkedIn for updates.
        </p>
      </Section>
    </>
  );
}
