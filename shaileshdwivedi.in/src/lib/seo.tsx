import { Helmet } from "react-helmet-async";

type Props = { title?: string; description?: string };
export default function SEO({ title, description }: Props) {
  const full = title
    ? `${title} — Shailesh Dwivedi`
    : "Shailesh Dwivedi — Full‑stack Developer";
  const desc =
    description ||
    "Full‑stack engineer with 9+ years experience building scalable systems.";
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={desc} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
