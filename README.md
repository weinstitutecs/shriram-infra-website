# Shriram Infra and Tech Services LLP — Corporate Website

Angular 17+ standalone-component website for Shriram Infra and Tech Services LLP.
Scope: **Infrastructure & Civil Engineering only.** No IT, software, automation, or smart-city content.

---

## Quick Start

### Prerequisites
- Node.js 18 LTS or 20 LTS
- npm 9+
- Angular CLI 17: `npm install -g @angular/cli@17`

### Install dependencies
```bash
npm install
```

### Development server
```bash
ng serve
# → http://localhost:4200
```

### Production build
```bash
npm run build:prod
# Output → dist/shriram-infra-website/browser/
```

---

## Deployment — GitHub → Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/<your-org>/<repo>.git
   git push -u origin main
   ```

2. **Connect Vercel**
   - Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
   - Vercel auto-detects `vercel.json` — no manual settings needed.
   - Build command: `npm run build:prod`
   - Output directory: `dist/shriram-infra-website/browser`

3. **Every push to `main`** triggers a fresh Vercel deployment automatically.

### Custom Domain DNS

In your domain registrar's DNS panel, add:

| Type  | Name | Value                      |
|-------|------|----------------------------|
| CNAME | www  | cname.vercel-dns.com       |
| A     | @    | 76.76.21.21                |

Then add the domain in Vercel → Project → Settings → Domains.
Allow 24–48 hours for DNS propagation.

---

## Replacing PLACEHOLDER Content

All placeholder data is labelled with comments and text like `PLACEHOLDER` or `<!-- PLACEHOLDER -->`.
Search the project: `grep -r "PLACEHOLDER" src/`

### Contact Information
Edit `src/app/core/components/footer/footer.component.ts` and
`src/app/pages/contact/contact.component.html`:
- Replace the address lines
- Replace the phone number
- Replace the email address
- Replace the Google Maps embed URL (if adding a map)

### Company Details
Edit `src/app/pages/about/about.component.ts`:
- Set the actual founding year (currently omitted per spec)
- Update the company story paragraphs

### Meta / SEO
Edit `src/app/core/services/seo.service.ts` to update the default `og:image` URL
once a real domain is set.

---

## Adding Real Project Data

Open `src/app/pages/projects/projects.component.ts`.

Each project follows this interface:
```typescript
interface Project {
  id: number;
  title: string;
  category: Category;       // 'Roads & Highways' | 'Buildings' | 'Water & Sanitation' | 'Other'
  location: string;
  year: number;
  description: string;
  gradFrom: string;         // CSS colour for thumbnail gradient (top)
  gradTo: string;           // CSS colour for thumbnail gradient (bottom)
}
```

Replace the 6 placeholder entries with real project data.
Remove the `placeholder-badge` element from `projects.component.html` and
the disclaimer note at the bottom of the page once real data is in place.

---

## Wiring the Contact Form Backend

Open `src/app/pages/contact/contact.component.ts` and find the `onSubmit()` method.
The developer comment block explains three options:

### Option A — EmailJS (no server required)
```bash
npm install @emailjs/browser
```
```typescript
import emailjs from '@emailjs/browser';

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { ...this.form.value },
  'YOUR_PUBLIC_KEY'
).then(() => { this.submitted = true; })
  .catch(err => { console.error(err); });
```

### Option B — Formspree (no server required)
```typescript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(this.form.value)
}).then(r => { if (r.ok) this.submitted = true; });
```

### Option C — Custom REST API
```typescript
this.http.post('/api/contact', this.form.value)
  .subscribe({ next: () => { this.submitted = true; }, error: console.error });
```
(Inject `HttpClient` and add `provideHttpClient()` to `app.config.ts`.)

After wiring the backend, update the success banner in
`contact.component.html` to remove the ⚠️ "backend not connected" note.

---

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── components/header/   Sticky navy nav, mobile hamburger
│   │   ├── components/footer/   4-column footer
│   │   └── services/seo.service.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── hero-banner/     Per-page gradient hero
│   │   │   ├── cta-band/        Navy-to-forest CTA strip
│   │   │   ├── service-card/    Hover-lift service card
│   │   │   ├── industry-card/   Centered industry card
│   │   │   └── logo/            Inline SVG logo
│   │   └── directives/reveal.directive.ts  IntersectionObserver scroll reveal
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   ├── projects/
│   │   ├── industries/
│   │   ├── why-choose-us/
│   │   └── contact/
│   ├── app.routes.ts
│   ├── app.config.ts
│   └── app.component.ts
├── styles/
│   ├── _tokens.scss      Brand palette, spacing, typography vars
│   ├── _typography.scss
│   ├── _layout.scss
│   ├── _buttons.scss
│   └── _page-themes.scss Per-page CSS custom property overrides
├── index.html
└── styles.scss
```

---

## Brand Colour Rules

| Colour | Hex | Usage |
|--------|-----|-------|
| Navy | `#102A7A` | Header, headings, primary brand |
| Green | `#7ED957` | CTAs, accents, highlights |
| Cyan | `#16B8D0` | **Logo SVG only** — never CTAs/sections |
| White | `#FFFFFF` | Text on dark backgrounds |
| Bg-light | `#F4F7FA` | Alternating section backgrounds |
| Forest | `#1e4d2b` | Hero gradients |

> **Cyan rule:** `#16B8D0` must not appear outside the `<app-logo>` SVG.
> It exists only to match the registered brand mark.

---

## Tech Stack

- **Angular 17.3** — standalone components, esbuild builder
- **TypeScript** — strict mode
- **SCSS** — `@use` module system, design tokens
- **Angular SSG** — prerendering for all 6 static routes
- **Vercel** — zero-config deployment via `vercel.json`
