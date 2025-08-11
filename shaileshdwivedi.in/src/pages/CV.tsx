import SEO from "../lib/seo";
import Section from "../components/Section";

export default function CV() {
  const cvUrl = "/cv/Shailesh-Dwivedi-CV.pdf";
  return (
    <div>
      <SEO title="CV" />
      <Section
        title="Curriculum Vitae"
        description="Download a printable PDF or view inline."
      >
        <div className="flex items-center gap-3">
          <a
            className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500"
            href={cvUrl}
            download
          >
            Download PDF
          </a>
          <a
            className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
        </div>
        <div className="mt-6 aspect-[1/1.414] w-full max-w-3xl border border-slate-200 dark:border-slate-800">
          <iframe title="CV" src={cvUrl} className="w-full h-full" />
        </div>
      </Section>
    </div>
  );
}
