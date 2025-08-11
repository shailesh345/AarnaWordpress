import SEO from "@/lib/seo";
import Section from "@/components/Section";
import ContactForm from "@/components/forms/ContactForm";
import { contactConfig } from "@/features/contact/contact.config";
import {
  mailto,
  whatsapp as wa,
  telegram as tg,
} from "@/features/contact/links";

export default function Contact() {
  const email = "hello@yourdomain.com";
  return (
    <>
      <SEO title="Contact" />
      <main className="pt-20 bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
        <Section
          title="LETS_CONNECT.EXE"
          description="READY_TO_CREATE.BAT SOMETHING EXTRAORDINARY_TOGETHER.SYS? CHOOSE_YOUR_PREFERRED_WAY.CONF TO REACH_OUT.LOG"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black pixel-font mb-6">
              <span className="text-cyan-400">LET'S</span>{" "}
              <span className="text-pink-400">CONNECT</span>
            </h1>
            <div className="bg-black border-4 border-green-400 pixel-perfect p-6 max-w-4xl mx-auto text-left">
              <div className="text-green-400 pixel-font text-lg mb-4">
                C:\PORTFOLIO\CONTACT&gt; INITIALIZE_CONNECTION.EXE
              </div>
              <div className="text-green-300 pixel-font text-lg leading-relaxed">
                ► READY TO CREATE SOMETHING{" "}
                <span className="text-cyan-400 animate-pulse">
                  [EXTRAORDINARY]
                </span>{" "}
                TOGETHER?
                <br />► CHOOSE YOUR{" "}
                <span className="text-yellow-400">[PREFERRED_WAY]</span> TO
                REACH_OUT.MSG
              </div>
              <div className="text-green-400 pixel-font text-lg mt-4 animate-pulse">
                C:\PORTFOLIO\CONTACT&gt; _
              </div>
            </div>
            <div className="mt-8">
              <div className="inline-flex items-center px-6 py-3 pixel-perfect bg-gradient-to-r from-green-400 to-cyan-400 text-black pixel-font font-bold border-2 border-white">
                ⚡ RESPONSE_TIME:{" "}
                <span className="text-purple-900 mx-1">24-48_HOURS.LOG</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-8">
              {/* Retro Quick Contact */}
              <div className="bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 pixel-perfect mr-4" />
                  <h3 className="text-2xl font-bold text-cyan-400 pixel-font">
                    ═══ QUICK_CONTACT.SYS ═══
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <a
                      className="flex items-center gap-4 p-4 pixel-perfect bg-black border-2 border-green-400 hover:border-yellow-400 transition-colors duration-300 group"
                      href={mailto(
                        email,
                        "Premium Project Inquiry",
                        "Hi Shailesh,"
                      )}
                    >
                      <div className="w-12 h-12 pixel-perfect bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-black font-bold border-2 border-white">
                        @
                      </div>
                      <div>
                        <div className="pixel-font font-bold text-cyan-400">
                          EMAIL.COM
                        </div>
                        <div className="pixel-font text-green-300 text-sm">
                          ► FOR DETAILED PROJECT_DISCUSSIONS.TXT
                        </div>
                      </div>
                    </a>
                  </li>
                  {contactConfig.whatsapp && (
                    <li>
                      <a
                        className="flex items-center gap-4 p-4 pixel-perfect bg-black border-2 border-green-400 hover:border-yellow-400 transition-colors duration-300 group"
                        href={wa(
                          contactConfig.whatsapp,
                          "Hi Shailesh, I have a premium project opportunity…"
                        )}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="w-12 h-12 pixel-perfect bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-black font-bold border-2 border-white">
                          WA
                        </div>
                        <div>
                          <div className="pixel-font font-bold text-cyan-400">
                            WHATSAPP.APP
                          </div>
                          <div className="pixel-font text-green-300 text-sm">
                            ► QUICK_QUESTIONS.MSG & INSTANT_CHAT.LOG
                          </div>
                        </div>
                      </a>
                    </li>
                  )}
                  {contactConfig.telegram && (
                    <li>
                      <a
                        className="flex items-center gap-4 p-4 pixel-perfect bg-black border-2 border-green-400 hover:border-yellow-400 transition-colors duration-300 group"
                        href={tg(contactConfig.telegram)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="w-12 h-12 pixel-perfect bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-black font-bold border-2 border-white">
                          TG
                        </div>
                        <div>
                          <div className="pixel-font font-bold text-cyan-400">
                            TELEGRAM.EXE
                          </div>
                          <div className="pixel-font text-green-300 text-sm">
                            ► SECURE_MESSAGING.CRYPT
                          </div>
                        </div>
                      </a>
                    </li>
                  )}
                  {contactConfig.calendly && (
                    <li>
                      <a
                        className="flex items-center gap-4 p-4 pixel-perfect bg-black border-2 border-green-400 hover:border-yellow-400 transition-colors duration-300 group"
                        href={contactConfig.calendly}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="w-12 h-12 pixel-perfect bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-black font-bold border-2 border-white">
                          📅
                        </div>
                        <div>
                          <div className="pixel-font font-bold text-cyan-400">
                            SCHEDULE_PREMIUM_CALL.BAT
                          </div>
                          <div className="pixel-font text-green-300 text-sm">
                            ► BOOK_STRATEGIC_CONSULTATION.CAL
                          </div>
                        </div>
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              {/* Retro Digital Assets */}
              <div className="bg-gradient-to-br from-purple-800 to-blue-800 pixel-perfect border-4 border-cyan-400 p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 pixel-perfect mr-4" />
                  <h3 className="text-2xl font-bold text-cyan-400 pixel-font">
                    ═══ DIGITAL_ASSETS.DIR ═══
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-black pixel-font font-bold px-6 py-4 pixel-perfect border-4 border-white text-center hover:scale-105 transition-transform duration-200"
                    href="/shailesh.vcf"
                    download
                  >
                    ► DOWNLOAD_VCARD.VCF
                  </a>
                  <a
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white pixel-font font-bold px-6 py-4 pixel-perfect border-4 border-cyan-400 text-center hover:scale-105 transition-transform duration-200"
                    href="/qr-contact.png"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ► QR_CODE.PNG
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Section>
      </main>
    </>
  );
}
