import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { to: "/", label: "HOME", code: "[001]" },
  { to: "/about", label: "ABOUT", code: "[010]" },
  { to: "/skills", label: "SKILLS", code: "[011]" },
  { to: "/experience", label: "EXP", code: "[100]" },
  { to: "/projects", label: "WORK", code: "[101]" },
  { to: "/contact", label: "CONTACT", code: "[110]" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 old-phone-terminal border-b-4 border-white shadow-2xl">
      {/* Phone LCD top indicator */}
      <div className="h-2 bg-white dithered-bg flex items-center justify-center">
        <div className="flex gap-1">
          <span className="text-black text-xs phone-font">█ SIGNAL ▓▓▓░░</span>
          <span className="text-black text-xs phone-font ml-auto">
            BATTERY ██░░
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Phone LCD Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 old-phone-button transition-all duration-200"
          >
            <div className="relative">
              {/* Phone LCD avatar container */}
              <div className="w-12 h-12 old-phone-button dithered-bg border-2 border-black relative overflow-hidden">
                <div className="absolute inset-1 bg-black flex items-center justify-center">
                  <span className="text-white old-phone-title text-sm">█▓</span>
                </div>
              </div>
              {/* Phone glow effect */}
              <div className="absolute -inset-1 bg-white opacity-0 group-hover:opacity-30 transition-opacity phone-scanline"></div>
            </div>

            <div className="hidden sm:block">
              <div className="old-phone-title text-lg text-black group-hover:text-white transition-colors">
                SHAILESH.EXE
              </div>
              <div className="text-xs text-black phone-font">
                █ AI/ML_DEV.SYS
              </div>
            </div>
          </Link>

          {/* Phone LCD Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 phone-font text-xs font-bold transition-all duration-200 old-phone-button border-2 ${
                    isActive
                      ? "bg-black text-white border-white dithered-text"
                      : "bg-white text-black border-black hover:bg-black hover:text-white"
                  }`
                }
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-[8px] opacity-60">{item.code}</span>
                  <span>{item.label}</span>
                </div>
              </NavLink>
            ))}
          </nav>

          {/* Right Side Phone Actions */}
          <div className="flex items-center gap-2">
            {/* Phone LCD CTA Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-black text-white phone-font text-xs font-bold old-phone-button border-2 border-white transition-all duration-200 hover:bg-white hover:text-black dithered-text"
            >
              <span className="mr-1">▶</span>
              CONNECT.SYS
            </Link>

            {/* Phone Theme Toggle */}
            <ThemeToggle />

            {/* Phone Mobile Menu */}
            <button className="lg:hidden p-2 old-phone-button bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200">
              <div className="w-4 h-4 relative">
                {/* Phone LCD hamburger menu */}
                <div className="absolute top-0 w-full h-1 bg-current"></div>
                <div className="absolute top-1.5 w-full h-1 bg-current"></div>
                <div className="absolute top-3 w-full h-1 bg-current"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Phone LCD Mobile Navigation */}
        <nav className="lg:hidden mt-3 pt-3 border-t-2 border-dashed border-black">
          <div className="grid grid-cols-2 gap-1">
            {nav.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-2 py-2 phone-font text-xs font-bold text-center transition-all duration-200 old-phone-button border-2 ${
                    isActive
                      ? "bg-black text-white border-white"
                      : "bg-white text-black border-black hover:bg-black hover:text-white"
                  }`
                }
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div>
                  <div className="text-[8px] opacity-60">{item.code}</div>
                  <div>{item.label}</div>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="mt-2">
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-2 bg-black text-white phone-font text-xs font-bold old-phone-button border-2 border-white transition-all duration-200 hover:bg-white hover:text-black"
            >
              <span className="mr-1">▶</span>
              CONNECT.SYS
            </Link>
          </div>
        </nav>
      </div>

      {/* Bottom phone LCD border with system info */}
      <div className="h-2 bg-white border-t border-black flex items-center justify-between px-4">
        <span className="text-black text-[8px] phone-font">
          STATUS: ONLINE █
        </span>
        <span className="text-black text-[8px] phone-font">
          ML.EXE RUNNING ▓
        </span>
        <span className="text-black text-[8px] phone-font">AI: ACTIVE ███</span>
      </div>
    </header>
  );
}
