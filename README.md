# Various Apps - Studio Website

A modern, artistic multi-project showcase website for Various Apps studio. Built with Next.js 16, TypeScript, and TailwindCSS.

## Features

- **Artistic, Editorial Design**: Bold typography, asymmetric layouts, and subtle motion
- **Mobile-First Responsive**: Looks great on all devices
- **Static Generation**: Fast performance with pre-rendered pages
- **Content-Driven**: Easy to add/update apps from a single data file
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards

## Project Structure

```
various-apps/
├── public/
│   └── apps/                    # App assets (logos, screenshots)
│       ├── viona/
│       ├── viona-partner/
│       ├── qr-sessions/
│       └── posture-pal/
├── src/
│   ├── app/
│   │   ├── apps/
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Dynamic app showcase pages
│   │   ├── globals.css          # Global styles & design tokens
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Homepage
│   ├── components/
│   │   └── sections/            # Page section components
│   │       ├── Hero.tsx
│   │       ├── AppsGrid.tsx
│   │       ├── FeaturedApp.tsx
│   │       ├── StudioSection.tsx
│   │       ├── ContactSection.tsx
│   │       └── AppShowcase.tsx  # Individual app page template
│   ├── content/
│   │   └── apps.ts              # App data (single source of truth)
│   └── lib/
│       └── utils.ts             # Utility functions
└── package.json
```

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Adding a New App

1. **Add app data** in `src/content/apps.ts`:

```typescript
{
  slug: 'my-new-app',           // URL-friendly identifier
  name: 'My New App',           // Display name
  tagline: 'Short tagline',     // One-line description
  description: 'Longer description for the app...',
  longDescription: `Optional multi-paragraph description...`,
  logo: '/apps/my-new-app/logo.png',
  icon: '/apps/my-new-app/icon.png',
  screenshots: [
    '/apps/my-new-app/screenshot-1.png',
    '/apps/my-new-app/screenshot-2.png',
  ],
  features: [
    {
      title: 'Feature Name',
      description: 'What this feature does',
    },
    // Add more features...
  ],
  links: [
    { type: 'playstore', url: 'https://play.google.com/...' },
    { type: 'appstore', url: 'https://apps.apple.com/...' },
    { type: 'website', url: 'https://...', label: 'Visit Website' },
  ],
  status: 'active',              // 'active' | 'beta' | 'coming-soon'
  platforms: ['ios', 'android'], // 'ios' | 'android' | 'web'
  primaryColor: '#8B5CF6',       // Main brand color (hex)
  secondaryColor: '#7C3AED',     // Secondary color (hex)
  gradient: 'from-purple-500 to-pink-500', // Tailwind gradient classes
  stats: {
    users: '10K+',
    rating: '4.8',
    downloads: '50K+',
  },
  testimonial: {
    quote: 'User testimonial quote...',
    author: 'User Name',
    role: 'Role/Company',
  },
}
```

2. **Add app assets** to `public/apps/my-new-app/`:
   - `logo.png` - Full logo (512x512 recommended)
   - `icon.png` - App icon (256x256 recommended)
   - `screenshot-1.png`, `screenshot-2.png`, etc. - App screenshots

3. **That's it!** The app will automatically appear on the homepage and have its own dedicated page at `/apps/my-new-app`.

## Adding App Assets

### From Real Projects

Copy assets from your real app projects:

```bash
# Example: Copy Viona assets
cp "C:/Users/emmry/barber-shop-frontend/assets/images/logo.png" "public/apps/viona/"
cp "C:/Users/emmry/barber-shop-frontend/assets/3.png" "public/apps/viona/icon.png"

# Example: Copy PosturePal assets
cp "C:/Users/emmry/posture-app/my-posture-app/assets/icon.png" "public/apps/posture-pal/"
cp "C:/Users/emmry/posture-app/my-posture-app/assets/mascot.png" "public/apps/posture-pal/"
```

### Asset Recommendations

- **Logo**: 512x512px PNG with transparency
- **Icon**: 256x256px or 512x512px PNG
- **Screenshots**: 1080x2340px (phone aspect ratio) or 1920x1080px (landscape)
- **OG Image**: 1200x630px for social sharing

## Customization

### Design Tokens

Edit `src/app/globals.css` to customize:

```css
:root {
  --accent-purple: #8B5CF6;  /* Primary accent */
  --accent-pink: #EC4899;    /* Secondary accent */
  --accent-cyan: #06B6D4;    /* Tertiary accent */
}
```

### App Gradients

Use Tailwind gradient classes in the `gradient` property:

- `from-purple-500 to-pink-500` - Purple to pink
- `from-teal-500 to-cyan-500` - Teal to cyan
- `from-orange-400 to-amber-500` - Orange to amber

### Typography

The site uses [Geist](https://vercel.com/font) font family. To change:

1. Import your font in `src/app/layout.tsx`
2. Update the `--font-sans` CSS variable

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Static Export

```bash
npm run build
# Output in .next/ folder
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Animation**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Mono

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, app gallery, studio info, contact |
| `/apps/viona` | Viona app showcase page |
| `/apps/viona-partner` | Viona Partner app showcase page |
| `/apps/qr-sessions` | QR Sessions app showcase page |
| `/apps/posture-pal` | PosturePal app showcase page |

## Current Apps

### Viona
Booking platform for users to find and book services from local providers.
- **Platforms**: iOS, Android
- **Gradient**: Teal to Cyan

### Viona Partner
Business management app for service providers.
- **Platforms**: iOS, Android
- **Gradient**: Teal to Emerald

### QR Sessions
Session and attendance management with QR codes.
- **Platforms**: iOS, Android, Web
- **Gradient**: Purple to Violet

### PosturePal
AI-powered posture monitoring with friendly giraffe mascot.
- **Platforms**: iOS, Android
- **Gradient**: Orange to Amber

## License

Private - Various Apps Studio
