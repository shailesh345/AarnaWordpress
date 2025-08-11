import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 right-4 z-40 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-3 py-2 shadow-md hover:shadow-lg"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
