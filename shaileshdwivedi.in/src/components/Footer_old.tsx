export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/shailesh345",
      icon: "█▓",
      label: "GITHUB.NET",
      code: "[GIT]",
    },
    {
      href: "https://linkedin.com/in/shailesh345",
      icon: "■□",
      label: "LINKEDIN.SYS",
      code: "[LNK]",
    },
    {
      href: "https://twitter.com/shailesh345",
      icon: "▓░",
      label: "TWITTER.COM",
      code: "[TWI]",
    },
    {
      href: "mailto:hello@shaileshdwivedi.com",
      icon: "▪▫",
      label: "EMAIL.MSG",
      code: "[EML]",
    },
  ];

  const quickLinks = [
    { to: "/projects", label: "WORK.EXE", code: "F1" },
    { to: "/experience", label: "EXP.LOG", code: "F2" },
    { to: "/skills", label: "SKILL.LIB", code: "F3" },
    { to: "/contact", label: "CONNECT.SYS", code: "F4" },
  ];

  return (
    <footer className="relative mt-16 overflow-hidden old-phone-terminal">
      {/* Phone LCD floating elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 dithered-bg opacity-30" />
      <div className="absolute top-10 right-1/4 w-24 h-24 dithered-bg opacity-20" />

      <div className="relative bg-white border-t-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Phone LCD Brand Section */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="w-12 h-12 old-phone-button bg-black text-white flex items-center justify-center phone-font text-lg border-2 border-black">
                  █▓
                </div>
                <span className="old-phone-title text-xl text-black">
                  SHAILESH.DWIVEDI
                </span>
              </div>
              <div className="old-phone-card p-4 mb-6">
                <p className="text-black phone-font leading-relaxed text-xs">
                  █ AI/ML_ENGINEER.EXE DEVELOPING{" "}
                  <span className="dithered-text">[INTELLIGENT_SYSTEMS]</span>{" "}
                  <br />█ WITH{" "}
                  <span className="text-black font-bold">[NEURAL_NETS]</span>,{" "}
                  <span className="text-black font-bold">[DEEP_LEARNING]</span>,
                  AND <br />█{" "}
                  <span className="text-black font-bold">
                    [CUTTING_EDGE_AI]
                  </span>
                </p>
              </div>
              <div className="flex justify-center lg:justify-start gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 old-phone-button bg-white text-black flex flex-col items-center justify-center phone-font text-xs border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                    aria-label={social.label}
                  >
                    <span className="text-[8px]">{social.code}</span>
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Phone LCD Quick Links */}
            <div className="text-center lg:text-left">
              <h3 className="old-phone-title text-lg text-black mb-6">
                ═══ NAVIGATION.DIR ═══
              </h3>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={link.to}
                    href={link.to}
                    className="block text-black phone-font text-xs hover:bg-black hover:text-white p-2 old-phone-button transition-all duration-200"
                    style={{ animationDelay: `${index * 75}ms` }}
                  >
                    <span className="mr-2">{link.code}</span>█ {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Phone LCD Contact CTA */}
            <div className="text-center lg:text-left">
              <h3 className="old-phone-title text-lg text-black mb-6">
                ═══ CONNECT.SYS ═══
              </h3>
              <div className="old-phone-card p-4 mb-6">
                <p className="text-black phone-font text-xs">
                  █ LET'S BUILD NEXT-GEN{" "}
                  <span className="dithered-text">[AI_SOLUTIONS]</span>{" "}
                  TOGETHER.
                </p>
              </div>
              <div className="space-y-2">
                <a
                  className="block bg-black text-white phone-font text-xs px-4 py-3 old-phone-button border-2 border-black hover:bg-white hover:text-black transition-all duration-200"
                  href="/shailesh.vcf"
                  download
                >
                  █ DOWNLOAD_VCARD.VCF
                </a>
                <a
                  className="block bg-white text-black phone-font text-xs px-4 py-3 old-phone-button border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
                  href="/qr-contact.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  █ QR_CONTACT.PNG
                </a>
              </div>
            </div>
          </div>

          {/* Phone LCD CTA Section */}
          <div className="text-center mb-8">
            <div className="old-phone-card p-8 max-w-4xl mx-auto">
              <h3 className="old-phone-title text-2xl text-black mb-4">
                BUILD NEXT-GEN <span className="dithered-text">AI_SYSTEMS</span>{" "}
                TOGETHER
              </h3>
              <div className="old-phone-terminal p-4 mb-6">
                <p className="text-black phone-font text-sm leading-relaxed">
                  █ READY TO IMPLEMENT{" "}
                  <span className="font-bold">[MACHINE_LEARNING]</span>
                  <br />
                  █ AND AI SOLUTIONS? LET'S CREATE
                  <br />█ INTELLIGENT{" "}
                  <span className="font-bold">[SYSTEMS]</span>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/contact"
                  className="bg-black text-white phone-font text-xs px-6 py-3 old-phone-button border-2 border-black hover:bg-white hover:text-black transition-all duration-200"
                >
                  █ START_AI_PROJECT.EXE
                </a>
                <a
                  href="mailto:hello@shaileshdwivedi.com"
                  className="bg-white text-black phone-font text-xs px-6 py-3 old-phone-button border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  █ SEND_MESSAGE.MSG
                </a>
              </div>
            </div>
          </div>

          {/* Phone LCD Copyright */}
          <div className="pt-6 border-t-2 border-dashed border-black text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="phone-font text-black text-xs">
                © {currentYear} SHAILESH_DWIVEDI.AI • ALL_RIGHTS_RESERVED.TXT
              </p>
              <p className="phone-font text-black text-xs">
                BUILT_WITH <span className="dithered-text">█</span> AI_PASSION
                AND ML_PRECISION <span className="dithered-text">▓</span> USING
                REACT.JS & TAILWIND.CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
