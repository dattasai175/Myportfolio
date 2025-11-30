# Datta Katikaneni - Portfolio Website

A production-ready, ultra-modern portfolio website built with Next.js 15, TypeScript, and cutting-edge web technologies.

## Features

- 🚀 **Next.js 15** with App Router
- 🎨 **Ultra-modern 2025 design** with glassmorphism, neon accents, and micro-interactions
- 🎭 **Framer Motion 12** for smooth animations
- 📱 **Fully responsive** and mobile-first
- 🌙 **Dark mode** by default
- ✨ **3D effects** with React Three Fiber
- 🎯 **Smooth scrolling** with Lenis
- 🎪 **Interactive elements** with magnetic buttons and custom cursor
- 📊 **Technologies section** with animated progress bars
- 🎴 **Projects carousel** with 3D card flips
- 📧 **Contact form** with confetti on submit
- 🔍 **SEO optimized** with proper metadata

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3.4+
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion 12, GSAP
- **3D Graphics:** React Three Fiber, Three.js
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # Custom 404 page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Experience timeline
│   ├── Technologies.tsx   # Skills & technologies
│   ├── Projects.tsx       # Projects carousel
│   ├── Contact.tsx        # Contact form
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer
│   ├── Cursor.tsx         # Custom cursor
│   ├── SmoothScroll.tsx   # Smooth scroll wrapper
│   └── Particles.tsx      # 3D particle background
└── lib/                   # Utility functions
```

## Customization

- Update personal information in component files
- Modify colors in `tailwind.config.ts`
- Add/remove projects in `components/Projects.tsx`
- Update technologies in `components/Technologies.tsx`
- Customize animations in component files
- Replace `public/resume.pdf` with your actual resume PDF file
- Update social media links in `components/Footer.tsx` and `components/Header.tsx`
- Update contact email in `components/Contact.tsx`

## Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Lighthouse 100/100 scores target
- Accessible (a11y) components

## License

MIT

