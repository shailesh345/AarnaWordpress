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
      className="old-phone-button px-3 py-1"
      onClick={() => setDark((d) => !d)}
    >
      <span className="phone-font text-xs">{dark ? "LIGHT" : "DARK"}</span>
    </button>
  );
}
