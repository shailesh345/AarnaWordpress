import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/skills", label: "SKILLS" },
  { to: "/experience", label: "EXPERIENCE" },
  { to: "/projects", label: "PROJECTS" },
  { to: "/contact", label: "CONTACT" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
      {/* Simple status bar */}
      <div className="h-1 bg-black"></div>

      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Clean logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center phone-font text-sm border-2 border-black">
              SD
            </div>
            <div className="hidden sm:block">
              <div className="old-phone-title text-lg text-black">
                SHAILESH.AI
              </div>
              <div className="phone-font text-xs text-gray-600">
                AI/ML ENGINEER
              </div>
            </div>
          </Link>

          {/* Clean navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 phone-font text-sm transition-colors border-2 ${
                    isActive
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black hover:bg-gray-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Clean actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:block bg-black text-white px-4 py-2 phone-font text-sm border-2 border-black hover:bg-gray-800 transition-colors"
            >
              CONTACT
            </Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile navigation */}
        <nav className="lg:hidden mt-4 pt-4 border-t border-gray-300">
          <div className="grid grid-cols-3 gap-2">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 phone-font text-xs text-center transition-colors border ${
                    isActive
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black hover:bg-gray-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
