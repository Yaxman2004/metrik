# Metrik — SaaS Analytics Landing Page

A portfolio landing page for a fake analytics SaaS product built with Next.js and Tailwind CSS.

## Setup

```bash
npx create-next-app@latest metrik-landing
# TypeScript=No, ESLint=Yes, Tailwind=Yes, src/=No, App Router=Yes, alias=No

# Copy all files from this folder into the project, then:
npm install
npm run dev
```

## What's included

- Navbar — sticky with scroll effect, mobile hamburger menu
- Hero — animated glow bg, grid pattern, fake dashboard mockup with live-looking stat cards and chart
- Features — 6-card grid with hover effects
- Testimonials — 6 fake customer quotes
- Pricing — 3 tiers with monthly/yearly toggle (-20% on yearly)
- CTA — full-width call to action with glow card
- Footer — 4-column links + branding

## Customise

- Product name: find/replace "Metrik" throughout
- Colors: brand purple is `#7C3AED` — change in tailwind.config.js and throughout components
- Pricing numbers: edit components/sections/Pricing.jsx
- Features: edit components/sections/Features.jsx
- Testimonials: edit components/sections/Testimonials.jsx

## Deploy

Push to GitHub → import to vercel.com → deploy. Done.
