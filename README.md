# Fushion AI - Landing Page

A modern, bilingual (NL/EN) landing page showcasing live SaaS prototypes built with Vite, React, and Tailwind CSS.

## Features

- 🌐 **Bilingual**: Dutch and English with easy language toggle
- 🚀 **Live Prototypes**: Showcase 3 working SaaS applications
- 🎨 **Modern Design**: Clean UI with Tailwind CSS and custom design system
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and builds
- 🎯 **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- 📊 **Data-Driven**: Projects loaded from JSON for easy updates

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd fushionai-showcase

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run deploy       # Deploy to GitHub Pages (requires setup)
```

## Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/', // Add this line
  // ... rest of config
})
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

### Netlify / Vercel

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Products.tsx    # Prototypes grid
│   ├── ProductCard.tsx # Individual prototype card
│   ├── Vision.tsx      # Vision section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
├── data/
│   └── projects.json   # Prototype data
├── i18n/
│   └── i18n.json      # Translations (NL/EN)
├── hooks/
│   └── useLanguage.tsx # Language context & hook
└── pages/
    └── Index.tsx       # Main page

```

## Customization

### Update Prototypes

Edit `src/data/projects.json` to add/modify prototypes:

```json
{
  "id": "unique-id",
  "name": "Project Name",
  "url": "https://demo-url.com",
  "tagline_en": "English tagline",
  "tagline_nl": "Nederlandse tagline",
  "bullets_en": ["Feature 1", "Feature 2"],
  "bullets_nl": ["Functie 1", "Functie 2"],
  "status": "live",
  "icon": "Calendar",
  "note_en": "Optional note",
  "note_nl": "Optionele notitie"
}
```

### Update Translations

Edit `src/i18n/i18n.json` to modify or add translations.

### Brand Colors

The site uses Tailwind's blue-500 as the primary brand color. To change:

1. Edit `src/index.css` CSS variables
2. Update `tailwind.config.ts` color definitions

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## Contact

- **Email**: info@fushionai.com
- **WhatsApp**: +31 (0)6 1099 1835
- **LinkedIn**: [Fushion AI](https://www.linkedin.com/company/105873625)

## License

© 2025 Fushion AI. All rights reserved.
