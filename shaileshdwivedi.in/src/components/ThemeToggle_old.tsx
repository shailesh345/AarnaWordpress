import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(localStorage.theme ? localStorage.theme === "dark" : prefers);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center w-12 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-indigo-600 dark:to-purple-700 text-black dark:text-white pixel-font text-xs font-bold tracking-wider pixel-perfect border-2 border-yellow-300 dark:border-purple-400 hover:scale-105 transition-all duration-200 shadow-lg uppercase"
      onClick={() => setDark((d) => !d)}
      style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.3)" }}
    >
      {dark ? "NITE" : "DAY"}
    </button>
  );
}
