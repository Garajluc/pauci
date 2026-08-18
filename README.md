# Pauci

A simple one-page presentational website built with [Astro](https://astro.build), TypeScript, and [Tailwind CSS](https://tailwindcss.com).

## Tech stack

- **Astro** – static-site framework with zero client-side JS by default
- **TypeScript** – strict type-checking
- **Tailwind CSS** – utility-first CSS via `@astrojs/tailwind`

## Project structure

```
pauci/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Benefits.astro
│   │   │   ├── Solutions.astro
│   │   │   ├── HowItWorks.astro
│   │   │   └── Contact.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or later
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
