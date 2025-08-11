import { useState } from "react";
import { contactConfig } from "@/features/contact/contact.config";
import {
  mailto,
  whatsapp as wa,
  telegram as tg,
} from "@/features/contact/links";

export default function QuickActions() {
  const [open, setOpen] = useState(false);
  const email = "hello@yourdomain.com";
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div
        className={`origin-bottom-right transition-all ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "pointer-events-none opacity-0 scale-95 translate-y-2"
        }`}
      >
        <div className="mb-2 w-64 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-lg p-3">
          <h4 className="text-sm font-medium mb-2">Quick contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                className="block px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                href={mailto(email, "Project inquiry", "Hi Shailesh,")}
              >
                Email
              </a>
            </li>
            {contactConfig.whatsapp && (
              <li>
                <a
                  className="block px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                  href={wa(
                    contactConfig.whatsapp,
                    "Hi Shailesh, I have a project…"
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            )}
            {contactConfig.telegram && (
              <li>
                <a
                  className="block px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                  href={tg(contactConfig.telegram)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
            )}
            {contactConfig.calendly && (
              <li>
                <a
                  className="block px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                  href={contactConfig.calendly}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a call
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
        aria-expanded={open}
        aria-controls="quick-actions"
      >
        {open ? "Close" : "Contact"}
      </button>
    </div>
  );
}
