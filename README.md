# Giovani — Speaker & Coach Portfolio

Personal portfolio website for Giovani, a professional speaker and executive coach. Built with Next.js 15, fully internationalized in English, Spanish, and Portuguese.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + custom CSS animations |
| i18n | [next-intl](https://next-intl-docs.vercel.app/) v3 |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/) |
| Build | Turbopack (dev) |
| Runtime | Node.js 20+ |

---

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout — html, body, fonts, global CSS
│   ├── globals.css             # Global styles, animations, utility classes
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale layout — NextIntlClientProvider wrapper
│   │   └── page.tsx            # Main page — composes all sections
│   └── components/
│       ├── Header.tsx          # Fixed navbar with scroll-aware background, mobile menu
│       ├── Hero.tsx            # Full-screen dark hero with CTA buttons
│       ├── About.tsx           # Bio section with photo and stats
│       ├── Services.tsx        # 4 service cards with icons
│       ├── Testimonials.tsx    # 3 testimonial quote cards
│       ├── Contact.tsx         # WhatsApp + Instagram CTAs
│       ├── Footer.tsx          # Copyright bar
│       └── LanguageSwitcher.tsx # Hover dropdown with flag icons
├── i18n/
│   ├── routing.ts              # Locale config and navigation wrappers
│   └── request.ts              # Server-side locale resolution
├── messages/
│   ├── en.json                 # English translations
│   ├── es.json                 # Spanish translations
│   └── pt.json                 # Portuguese translations
├── middleware.ts               # next-intl routing middleware
└── public/
    └── images/
        └── giovani.jpg         # Profile photo
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The middleware automatically redirects `/` to `/en`.

### Build for production

```bash
npm run build
npm start
```

---

## Internationalization

The site supports three languages accessible via the language switcher in the header:

| Code | Language | URL |
|---|---|---|
| `en` | English | `/en` |
| `es` | Español | `/es` |
| `pt` | Português | `/pt` |

All text content lives in `messages/<locale>.json`. To add or edit translations, update those files — no code changes needed.

### Adding a new language

1. Add the locale code to `i18n/routing.ts` → `locales` array
2. Add the same code to the `Locale` type in `i18n/request.ts` and `app/[locale]/layout.tsx`
3. Create `messages/<code>.json` with all translation keys
4. Add the language entry to the `languages` array in `app/components/LanguageSwitcher.tsx`

---

## Customizing Content

All visible content is translation-driven. Edit `messages/en.json` (and the other locale files) to update:

- `Hero` — role, tagline, subtitle, CTA button labels
- `About` — bio paragraphs and stat cards
- `Services` — service card titles and descriptions
- `Testimonials` — quote text and author attribution
- `Contact` — section title, subtitle, button labels
- `Footer` — copyright text

### Updating contact links

Edit `app/components/Contact.tsx` and replace:

```tsx
href="https://wa.me/5500000000000"   // ← WhatsApp number
href="https://www.instagram.com/giovani"  // ← Instagram handle
```

### Replacing images

Drop new images into `public/images/` and update the `src` props in:

- `app/components/Hero.tsx` → `/images/giovani.jpg`
- `app/components/About.tsx` → `/images/giovani.jpg`

---

## Design Tokens

The color palette is defined as CSS variables in `globals.css`:

| Variable | Value | Usage |
|---|---|---|
| `--gold` | `#b8962e` | Accents, borders, icons, CTAs |
| `--gold-light` | `#d4af5a` | Hover states |
| `--dark` | `#0a0a0a` | Hero, Services, Contact backgrounds |
| `--charcoal` | `#1a1a1a` | Text on dark backgrounds |
| `--cream` | `#f5f0e8` | Testimonials background |
| `--off-white` | `#fafaf8` | Default page background |

Fonts: **Playfair Display** (headings, `font-heading`) + **Inter** (body, `font-sans`).

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
