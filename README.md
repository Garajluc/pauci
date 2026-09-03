# Pouchy pre školy

One-page presentational website for **Pouchy pre školy** (Pouchy for schools), the
lockable phone pouch for Slovak schools. Built with [Astro](https://astro.build),
TypeScript, and [Tailwind CSS](https://tailwindcss.com). Slovak is served at `/`,
English at `/en/`.

Live at <https://pouchy-pre-skoly.sk>, hosted on GitHub Pages. DNS is managed at
Websupport (A/AAAA records to GitHub Pages, `www` CNAME to `garajluc.github.io`);
the custom domain is set in the repo's GitHub Pages settings.

## Tech stack

- **Astro** – static-site framework with zero client-side JS by default
- **TypeScript** – strict type-checking
- **Tailwind CSS** – utility-first CSS via `@astrojs/tailwind`

## Project structure

```
src/
├── components/
│   ├── PouchyWordmark.astro    # shared Pouchy wordmark (letters + smile)
│   ├── Highlight.astro
│   ├── PouchPlaceholder.astro
│   ├── schools/                # Pouchy pre školy – the published site
│   │   ├── Logo.astro          # wordmark + "pre školy" / "for schools" tag
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── sections/           # Hero, WhyNow, Quote, Solutions, HowItWorks, …
│   └── pouchy/                 # Pouchy root brand – parked, not routed
├── layouts/
│   ├── SchoolsLayout.astro     # published
│   └── PouchyLayout.astro      # parked
├── pages/
│   ├── index.astro             # SK
│   └── en/index.astro          # EN
├── i18n.ts                     # getLang + siteHref (base- and locale-aware URLs)
└── site.ts                     # shared constants (contact e-mail)
```

### Parked root brand

`src/components/pouchy/` and `src/layouts/PouchyLayout.astro` hold the former
Pouchy umbrella-brand landing page. Nothing routes to them, so they are not built
or deployed, but they compile and can be reintroduced by adding pages that use
them. Their copy still refers to the old "Pauči" sub-brand name and will need a
refresh when that happens.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) v22 or later
- npm (comes with Node.js)

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The site will be available at <http://localhost:4321>.

### Build for production

```bash
npm run build
```

Output is placed in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages.
