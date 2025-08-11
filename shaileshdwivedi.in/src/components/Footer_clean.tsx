export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/shailesh345",
      label: "GITHUB",
    },
    {
      href: "https://linkedin.com/in/shailesh345",
      label: "LINKEDIN",
    },
    {
      href: "https://twitter.com/shailesh345",
      label: "TWITTER",
    },
    {
      href: "mailto:hello@shaileshdwivedi.com",
      label: "EMAIL",
    },
  ];

  const quickLinks = [
    { to: "/projects", label: "PROJECTS" },
    { to: "/experience", label: "EXPERIENCE" },
    { to: "/skills", label: "SKILLS" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <footer className="bg-white border-t-2 border-black mt-16">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center phone-font text-sm border-2 border-black">
                SD
              </div>
              <span className="old-phone-title text-lg text-black">
                SHAILESH.AI
              </span>
            </div>
            <div className="old-phone-terminal p-4 mb-4">
              <p className="phone-font text-xs text-black">
                AI/ML ENGINEER SPECIALIZING IN INTELLIGENT SYSTEMS AND SCALABLE
                SOLUTIONS.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="old-phone-title text-sm text-black mb-4">
              NAVIGATION
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className="block phone-font text-xs text-black hover:bg-black hover:text-white p-2 border border-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="old-phone-title text-sm text-black mb-4">CONNECT</h3>
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block phone-font text-xs text-black hover:bg-black hover:text-white p-2 border border-black transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-black text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="phone-font text-xs text-black">
              © {currentYear} SHAILESH DWIVEDI • ALL RIGHTS RESERVED
            </p>
            <p className="phone-font text-xs text-black">
              BUILT WITH REACT & TAILWIND CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
