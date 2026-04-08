# UNIIKS LLC - Project Guide

## About
UNIIKS LLC is a Home & Community-Based Disability Services provider based in St. Paul, Minnesota. Founded in 2022 by Kayode Odufuye. License: MN DHS #1112536.

## Tech Stack
- **Framework:** Next.js 16.2.2 (App Router)
- **React:** 19.2.4
- **Styling:** Tailwind CSS 4 via PostCSS
- **TypeScript:** 5
- **Path Alias:** `@/*` → `./src/*`

## Project Structure
```
uniiks-site/src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout (metadata, fonts, header/footer)
│   ├── globals.css       # Tailwind + CSS variables
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   ├── referrals/page.tsx
│   ├── careers/page.tsx
│   └── waivers/page.tsx
└── components/
    ├── Header.tsx        # Sticky nav with mobile menu
    └── Footer.tsx        # 4-column footer
```

## Brand Colors
- Primary: `#0C4A6E` (dark blue)
- Primary Light: `#0369A1`
- Secondary: `#0891B2` (teal)
- Accent: `#06B6D4` (cyan)
- Warm: `#F59E0B` (amber)

## Services (7)
1. Individualized Home Supports with Family Training
2. Adult Companion Services
3. Respite Care
4. Homemaker Services
5. Individual Community Living Support (ICLS)
6. Employment Services
7. 24-Hour Emergency Assistance

## Waivers Accepted (6)
DD, CADI, BI, CAC, EW, AC

## Contact Info
- Phone: (847) 903-6172
- Email: admin@uniikscare.com
- Address: 220 Robert St S, Ste 107, St. Paul, MN 55107
- Hours: Mon-Fri 8AM-5PM, 24/7 emergency line

## Development Commands
```bash
cd uniiks-site
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # ESLint
```

## Design Direction
Inspired by top MN assisted living/care facility websites (Ebenezer, Ecumen, Vivie, Benedictine, etc.). Key principles:
- Clean, professional healthcare aesthetic
- Blue/teal palette conveying trust and care
- 18px+ body text for accessibility
- Card-based service presentation
- Animated statistics on scroll
- Lifestyle photography language (empowerment, not clinical)
- Sticky header with phone + CTA
- Segmented user entry points
- Professional testimonial carousel
- Mobile-first responsive design
