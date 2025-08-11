# Shailesh Dwivedi — Professional Portfolio (React + Tailwind, No Backend)

A creative, high‑performance portfolio designed for a senior full‑stack engineer with 9+ years of experience. This guide outlines the project structure, pages, and advanced contact features that work entirely on the client side.

> Profile focus: LinkedIn‑Certified Full‑stack Developer, 30+ projects delivered, leadership of 10 engineers, TDD advocate, expert across Node.js, PHP, Python, React/Redux, Svelte/Sapper, TypeScript, PostgreSQL/MySQL/MongoDB.

---

## Highlights

- Modern stack: React + Vite + Tailwind CSS (client‑only)
- Fast, accessible, SEO‑friendly, mobile‑first
- Content‑driven: update JSON/TS data files, no backend needed
- Advanced contact center: form validation, spam protection, email (EmailJS/Formspree), WhatsApp/Telegram deep links, book‑a‑call, vCard download, QR share, offline draft save
- Optional: animations (Framer Motion), dark mode, modular components

---

## Tech Stack

- React 18 (with React Router)
- Vite (dev/build)
- Tailwind CSS + @tailwindcss/forms + @tailwindcss/typography
- React Hook Form + Zod (form + validation)
- EmailJS (client‑side email) OR Formspree/Netlify Forms
- Framer Motion (micro‑interactions)
- React Helmet Async (SEO)

Optional utilities: `clsx`, `dayjs`, `qrcode` (build‑time), `react-hot-toast`, `lucide-react`/`@heroicons/react`.

---

## Directory Structure

```
shaileshdwivedi.in/
├─ public/
│  ├─ favicon.svg
│  ├─ site.webmanifest           # PWA manifest (optional)
│  ├─ robots.txt
│  ├─ shailesh.vcf               # vCard for one-click add-to-contacts
│  └─ qr-contact.png             # QR linking to contact page or mailto
├─ src/
│  ├─ assets/                    # Images, logos, headshots, SVGs
│  ├─ components/                # Reusable UI building blocks
│  │  ├─ Header.tsx
│  │  ├─ Footer.tsx
│  │  ├─ ThemeToggle.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Section.tsx             # Section wrapper with title/desc
│  │  ├─ Timeline.tsx            # Experience timeline
│  │  ├─ SkillBadge.tsx
│  │  ├─ ProjectCard.tsx
│  │  ├─ Stat.tsx
│  │  ├─ ContactCard.tsx
│  │  └─ forms/
│  │     ├─ ContactForm.tsx      # React Hook Form + Zod schema
│  │     └─ fields/               # Small field components
│  ├─ data/                      # Content as code (editable)
│  │  ├─ profile.ts              # Name, title, socials, summary
│  │  ├─ skills.ts               # Skill groups & levels
│  │  ├─ projects.ts             # Featured & other projects
│  │  ├─ experience.ts           # Roles, orgs, achievements
│  │  └─ testimonials.ts         # Optional social proof
│  ├─ features/
│  │  └─ contact/
│  │     ├─ contact.config.ts    # EmailJS/Formspree keys (env-driven)
│  │     ├─ spam.ts              # Honeypot + time-to-complete checks
│  │     ├─ vcard.ts             # vCard builder (if generating client-side)
│  │     └─ links.ts             # mailto/tel/wa/telegram deep links
│  ├─ hooks/
│  │  ├─ useLocalStorage.ts
│  │  ├─ useTheme.ts
│  │  └─ useOnlineStatus.ts
│  ├─ lib/
│  │  ├─ analytics.ts            # Optional privacy-friendly analytics
│  │  ├─ seo.tsx                 # Meta tags via Helmet
│  │  └─ utils.ts                # Helpers, clsx, etc.
│  ├─ pages/
│  │  ├─ Home.tsx
│  │  ├─ About.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Experience.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Articles.tsx            # Optional: dev writing/notes
│  │  ├─ Contact.tsx
│  │  └─ NotFound.tsx
│  ├─ routes/
│  │  └─ AppRoutes.tsx           # Route definitions & lazy loading
│  ├─ styles/
│  │  ├─ globals.css             # Tailwind base/components/utilities
│  │  └─ tailwind.css
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ .env.example                  # PUBLIC_ env vars for client use
├─ index.html                    # Vite entry, font preloads
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ tsconfig.json
```

Notes:

- All secrets must be public‑safe (prefixed with Vite `VITE_` or Next `NEXT_PUBLIC_`). Don’t embed private keys client‑side.
- If you prefer JSON instead of TS for `src/data`, adjust imports accordingly.

---

## Pages and Content Model

### 1) Home

- Hero with name, title, location/timezone, CTA buttons:
  - View Projects
  - Book a Call
  - Contact
- Quick stats: 9+ years, 30+ projects, led 10 engineers.
- Tech marquee: Node.js, PHP, Python, React/Redux, Svelte/Sapper, TypeScript, PostgreSQL, MySQL, MongoDB.

### 2) About

- Narrative pulled from profile summary: engineering roots, distributed systems, innovation mindset.
- Values: TDD, high code quality, SDLC leadership.
- Download CV and vCard.

### 3) Skills

- Skill groups with levels (badges/progress):
  - Frontend: React, Redux, TypeScript, Svelte, CSS/Tailwind
  - Backend: Node.js, PHP, Python
  - Databases: PostgreSQL, MySQL, MongoDB
  - Practices: TDD, API design, UX

### 4) Experience

- Timeline of roles/projects with measurable outcomes.
- Highlight: architecting scalable distributed systems, team leadership.

### 5) Projects

- Featured projects first (ProjectCard grid with tech chips, links, and tags).
- Filters by stack/type. Optional case study pages.

### 6) Articles (Optional)

- List of posts or external links (Dev.to/Medium/LinkedIn Articles).

### 7) Contact

A focused “Contact Center” with multiple pathways (see Advanced Contact below). Also include map snapshot (static), response SLA, and privacy note.

### 8) 404

- Minimal page with return CTAs.

---

## Advanced Contact Features (Client‑only)

All features below require no custom backend. Pick one primary submission method and keep others as handy alternatives.

1. Contact Form (React Hook Form + Zod)

- Fields: name, email, company (optional), project type, budget, timeline, message, consent checkbox.
- UX: live validation, keyboard friendly, a11y labels, success/failure toasts.
- Offline draft: autosave to localStorage; restore on revisit.
- Submit via:
  - EmailJS (preferred): client‑side email delivery.
  - Formspree: drop‑in form endpoint.
  - Netlify Forms: if deploying on Netlify, supports spam filters.

2. Anti‑spam

- Honeypot field (visually hidden) — bots fill it; users don’t.
- Time‑to‑complete check — ignore submissions completed too fast.
- Optional CAPTCHA (hCaptcha/Cloudflare Turnstile) — site key only.

3. Multi‑channel Contact Shortcuts

- mailto with prefilled subject/body (from form values).
- tel links for quick calls on mobile.
- WhatsApp deep link: `https://wa.me/<number>?text=<encoded>`.
- Telegram deep link: `https://t.me/<handle>`.

4. Book a Call

- Embed Calendly (or similar). Provide a prominent button on Hero + Contact pages.
- Fallback: “Add to Calendar” ICS file generator with default 15–30 min slots.

5. vCard + QR

- Include `public/shailesh.vcf` for one‑tap add‑to‑contacts (Name, title, email, phone, site, LinkedIn, GitHub).
- Provide a QR code image linking to Contact page or mailto link.

6. Privacy, Consent, and UX

- GDPR‑style consent checkbox and short privacy statement.
- No cookies by default; use a privacy‑friendly analytics tool only if needed (e.g., Plausible or Umami).

7. Edge Cases

- Offline: show banner; retain drafts until online.
- Rate limit UX: disable button for a short interval after submit.
- Accessibility: ensure proper roles, labels, focus states, and color contrast.

---

## Data Files (Editable Content)

- `src/data/profile.ts`

```ts
export const profile = {
  name: "Shailesh Dwivedi",
  title: "Full‑stack Developer | Innovator",
  summary:
    "CSE at IET; 9+ years building scalable distributed systems. Passionate about innovation.",
  location: "India",
  links: {
    email: "mailto:hello@yourdomain.com",
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourhandle/",
    twitter: "https://x.com/yourhandle",
    calendly: "https://calendly.com/yourhandle/intro-call",
  },
};
```

- `src/data/skills.ts`

```ts
export const skills = [
  {
    group: "Frontend",
    items: ["React", "Redux", "TypeScript", "Svelte", "Tailwind"],
  },
  { group: "Backend", items: ["Node.js", "PHP", "Python"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { group: "Practices", items: ["TDD", "API Design", "UX"] },
];
```

- `src/data/projects.ts`

```ts
export const featured = [
  {
    title: "Aarna Streaming Platform",
    summary: "Scalable microservices for VOD/Live with TDD.",
    tech: ["Node.js", "React", "PostgreSQL", "Docker"],
    links: { demo: "https://demo.example.com", code: "https://github.com/..." },
    tags: ["Distributed Systems", "SDLC", "Leadership"],
  },
];
```

---

## Contact Implementation Details

- Form validation: Zod schema (email format, min characters, optional fields)
- Submission options:
  - EmailJS: add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` to `.env`
  - Formspree: add `VITE_FORMSPREE_ENDPOINT`
- Spam protection: include a hidden `website` field (honeypot) and track form start timestamp.
- Draft save: `useLocalStorage` hook persists partial inputs.
- Success: show toast + reset form; Failure: offer `mailto:` fallback with prefilled message.

---

## SEO and Performance

- `lib/seo.tsx` centralizes meta tags (title, description, OG/Twitter cards)
- Preload hero image and fonts in `index.html`
- Use `react-router` lazy routes + `Suspense` for code splitting
- Tailwind JIT ensures minimal CSS; enable `content` paths in `tailwind.config.js`

---

## Getting Started (optional)

```bash
# 1) Create project
npm create vite@latest shaileshdwivedi.in -- --template react-ts
cd shaileshdwivedi.in

# 2) Tailwind setup
npm i -D tailwindcss postcss autoprefixer @tailwindcss/forms @tailwindcss/typography
npx tailwindcss init -p
# Configure tailwind.config.js `content` to scan ./index.html and ./src/**/*.{ts,tsx}

# 3) UI + forms + animations
npm i react-hook-form zod @hookform/resolvers framer-motion react-helmet-async react-hot-toast

# 4) Contact integrations (choose one)
npm i emailjs-com
# or
npm i @formspree/react

# 5) Run
npm run dev
```

Tailwind globals (example) in `src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light dark;
}
```

---

## Deployment

- Vercel (recommended): zero‑config for Vite
- Netlify: supports Netlify Forms if you choose that path
- GitHub Pages: set `base` in `vite.config.ts` if deploying under a subpath

Add `sitemap.xml` and update `robots.txt` once deployed.

---

## Accessibility Checklist

- Keyboard navigation covers all interactive elements
- Labels + descriptions for all form fields
- Focus rings visible; color contrast ≥ WCAG AA
- Prefers‑reduced‑motion respected for animations

---

## Customization Pointers

- Update `src/data/*` to change content (name, summary, skills, projects)
- Swap or theme Tailwind colors in `tailwind.config.js`
- Replace `public/shailesh.vcf` and `public/qr-contact.png`
- Configure `src/lib/seo.tsx` with your site/domain

---

## License

This template README is provided under the MIT license. You’re free to adapt and reuse.

---

## Appendix: vCard template

```
BEGIN:VCARD
VERSION:3.0
N:Dwivedi;Shailesh;;;
FN:Shailesh Dwivedi
TITLE:Full‑stack Developer | Innovator
EMAIL;TYPE=INTERNET,PREF:hello@yourdomain.com
TEL;TYPE=CELL:+91-XXXXXXXXXX
URL:https://shaileshdwivedi.in
ORG:—
END:VCARD
```

---

Requirements coverage:

- Creative portfolio structure: Done
- React + Tailwind only, no backend: Done
- Pages breakdown with content model: Done
- Advanced contact features (client‑only): Done
- README.md created with setup/deploy guidance: Done
