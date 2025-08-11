import SEO from "../lib/seo";
import ContactForm from "../components/forms/ContactForm";
import { contactConfig } from "../features/contact/contact.config";
import {
  mailto,
  whatsapp as wa,
  telegram as tg,
} from "../features/contact/links";

export default function Contact() {
  const email = "hello@yourdomain.com";

  return (
    <>
      <SEO
        title="Contact - Shailesh Dwivedi | AI/ML Engineer"
        description="Get in touch with Shailesh Dwivedi for AI/ML projects, collaborations, and opportunities."
      />

      <div className="min-h-screen bg-white text-black">
        <div className="phone-grid min-h-screen">
          <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-12 animate-fadeIn">
              <h1 className="old-phone-title text-3xl mb-4">Get In Touch</h1>
              <p className="phone-font text-lg max-w-2xl mx-auto">
                Ready to collaborate on AI/ML projects? Let's discuss how we can
                work together
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="old-phone-card p-6">
                <h2 className="old-phone-title text-xl mb-6">Send a Message</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <div className="old-phone-card p-6">
                  <h2 className="old-phone-title text-xl mb-4">
                    Quick Contact
                  </h2>
                  <div className="space-y-3">
                    <a
                      href={mailto(
                        email,
                        "Project Inquiry",
                        "Hello! I'd like to discuss a project with you."
                      )}
                      className="old-phone-button p-3 w-full block text-center hover:bg-black hover:text-white transition-colors"
                    >
                      <span className="phone-font text-sm">📧 Email Me</span>
                    </a>

                    <a
                      href={wa("+1234567890", "Let's discuss a project")}
                      target="_blank"
                      rel="noreferrer"
                      className="old-phone-button p-3 w-full block text-center hover:bg-black hover:text-white transition-colors"
                    >
                      <span className="phone-font text-sm">💬 WhatsApp</span>
                    </a>

                    <a
                      href={tg("yourusername")}
                      target="_blank"
                      rel="noreferrer"
                      className="old-phone-button p-3 w-full block text-center hover:bg-black hover:text-white transition-colors"
                    >
                      <span className="phone-font text-sm">📱 Telegram</span>
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="old-phone-card p-6">
                  <h2 className="old-phone-title text-lg mb-4">
                    Response Time
                  </h2>
                  <div className="old-phone-terminal p-4">
                    <p className="phone-font text-sm">
                      I typically respond within <strong>24-48 hours</strong>{" "}
                      during business days.
                    </p>
                  </div>
                </div>

                {/* What I Can Help With */}
                <div className="old-phone-card p-6">
                  <h2 className="old-phone-title text-lg mb-4">
                    How I Can Help
                  </h2>
                  <div className="space-y-2">
                    {[
                      "AI/ML Project Development",
                      "Data Science Consulting",
                      "Full-Stack Applications",
                      "Technical Architecture",
                      "Code Review & Optimization",
                      "Research Collaboration",
                    ].map((service) => (
                      <div key={service} className="old-phone-button p-2">
                        <span className="phone-font text-xs">• {service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 text-center">
              <div className="old-phone-card p-6 max-w-md mx-auto">
                <h2 className="old-phone-title text-lg mb-4">
                  Connect on Social
                </h2>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noreferrer"
                    className="old-phone-button p-3"
                  >
                    <span className="phone-font text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/yourprofile"
                    target="_blank"
                    rel="noreferrer"
                    className="old-phone-button p-3"
                  >
                    <span className="phone-font text-sm">GitHub</span>
                  </a>
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noreferrer"
                    className="old-phone-button p-3"
                  >
                    <span className="phone-font text-sm">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
