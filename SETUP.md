# Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your resume:**
   - Place your resume PDF file in the `public/` directory as `resume.pdf`
   - Or update the resume link in `components/Header.tsx` and `components/Hero.tsx`

3. **Update personal information:**
   - Edit `components/About.tsx` - Update the about section text
   - Edit `components/Experience.tsx` - Update experience entries
   - Edit `components/Contact.tsx` - Update contact email
   - Edit `components/Footer.tsx` - Update social media links
   - Edit `app/layout.tsx` - Update SEO metadata

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Customization Checklist

- [ ] Replace `public/resume.pdf` with your actual resume
- [ ] Update email address in `components/Contact.tsx`
- [ ] Update social media links in `components/Footer.tsx`
- [ ] Update LinkedIn URL in `components/Footer.tsx`
- [ ] Update GitHub URL in `components/Footer.tsx` and `components/Projects.tsx`
- [ ] Update personal information in `components/About.tsx`
- [ ] Update experience entries in `components/Experience.tsx`
- [ ] Update education details in `components/Experience.tsx`
- [ ] Update project details in `components/Projects.tsx`
- [ ] Update technologies/skills in `components/Technologies.tsx`
- [ ] Update SEO metadata in `app/layout.tsx`
- [ ] Update site URL in `app/layout.tsx` (OpenGraph)

## Features Implemented

✅ Next.js 15 with App Router
✅ TypeScript
✅ Tailwind CSS v3.4+ with custom animations
✅ shadcn/ui components
✅ Framer Motion 12 animations
✅ Lenis smooth scroll
✅ React Three Fiber 3D particles
✅ Custom magnetic cursor (desktop only)
✅ Glassmorphism effects
✅ Neon accent colors (purple/blue/cyan)
✅ Grainy gradient backgrounds
✅ Split-screen hero layout
✅ 3D card flip animations
✅ Horizontal scroll projects carousel
✅ Interactive technologies section with progress bars
✅ Animated skill rings
✅ Floating label contact form
✅ Confetti on form submit
✅ Custom 404 page
✅ Fully responsive design
✅ SEO optimized
✅ Dark mode by default

## Performance Tips

- Images are optimized using Next.js Image component
- 3D effects are lightweight and performant
- Animations use GPU acceleration
- Code splitting is automatic with Next.js
- All components are optimized for Lighthouse scores

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Custom cursor only appears on desktop devices
- 3D effects require WebGL support
- Smooth scroll works best on modern browsers
- Some animations may be reduced on low-end devices automatically

