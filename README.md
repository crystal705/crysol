# Crysol Academy Website

A modern, minimal cybersecurity training institute website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: Formspree (free tier)
- **Deployment**: Vercel compatible

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Formspree Setup

1. Go to [Formspree](https://formspree.io/) and create a free account
2. Create a new form
3. Copy your form ID
4. Replace `YOUR_FORM_ID` in `app/register/page.tsx` with your actual Formspree form ID

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings

## Color Palette

- Background: `#000016`
- Deep Navy: `#000057`
- Navy Blue: `#000080`
- Strong Blue: `#0000A8`
- Primary CTA: `#0000FF`

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## License

© 2025 Crysol Academy. All rights reserved.

