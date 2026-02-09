# Crescent Frame - Horse Riding Experiences

## Overview
A responsive horse riding experiences website built with React + Vite + TypeScript + Tailwind CSS. Designed as a gentle, supportive space for women's horsemanship experiences, with a secondary section for upcoming kids/teens programs.

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── navbar.tsx       # Navigation with mobile drawer
│   │   ├── footer.tsx       # 4-column footer
│   │   ├── layout.tsx       # Main layout wrapper
│   │   ├── theme-provider.tsx # Dark/light theme support
│   │   ├── theme-toggle.tsx # Theme toggle button
│   │   └── experience-card.tsx # Reusable experience card
│   ├── pages/
│   │   ├── home.tsx         # Homepage with hero, women's experiences, kids/teens
│   │   ├── experiences.tsx  # Experience listing with filters
│   │   ├── safety.tsx       # Safety information
│   │   ├── about.tsx        # About us, team, values
│   │   ├── contact.tsx      # Contact form and info
│   │   └── not-found.tsx    # 404 page
│   ├── lib/
│   │   ├── data.ts          # Static data (experiences, testimonials, team)
│   │   ├── queryClient.ts   # React Query setup
│   │   └── utils.ts         # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── App.tsx              # Main app with routing
│   ├── index.css            # Global styles and CSS variables
│   └── main.tsx             # Entry point
server/
├── index.ts                 # Express server entry
├── routes.ts                # API routes
├── storage.ts               # In-memory storage
└── vite.ts                  # Vite dev server integration
shared/
└── schema.ts                # Shared TypeScript schemas
```

## Pages
- **Home (/)**: Hero section, For Women experiences (3 cards), For Kids & Teens coming soon (3 cards), CTA strip
- **Experiences (/experiences)**: Searchable/filterable experience grid
- **Safety (/safety)**: Safety commitment, features, certifications
- **About (/about)**: Mission, values, team members
- **Contact (/contact)**: Contact form, contact info, FAQ section

## Target Audience
- **Primary**: Women seeking gentle, supportive horse riding experiences
- **Secondary**: Kids & Teens (coming soon programs)

## Experience Types
### Women's Programs (Active)
- Women's Horsemanship Week
- Women's Beginner Riding Week
- Women's Trail Experience

### Kids & Teens Programs (Coming Soon)
- Kids Beginner Lessons (Seasonal)
- Teen Riding Basics (Seasonal)
- Summer Horsemanship

## Design System
- **Primary color**: Deep Navy (HSL 215 50% 20%)
- **Accent color**: Sage Green (HSL 145 25% 75%)
- **Background**: Warm Cream (HSL 40 40% 97%)
- **Headings font**: Playfair Display (serif) - elegant, warm
- **Body font**: Inter (sans-serif) - clean, readable
- **Responsive**: Mobile-first design with md/lg breakpoints
- **Theme**: Light/dark mode support
- **Style**: Warm and minimal, not corporate

Custom Tailwind colors available: `navy`, `sage`, `cream`

## Running the App
```bash
npm run dev
```
Starts the Vite dev server with Express backend on port 5000.

## Recent Changes
- 2026-01-11: Complete pivot to horse riding experiences website (Crescent Frame design)
- 2026-01-11: Updated Home page with hero, women's section, kids/teens section, CTA strip
- 2026-01-11: Updated data.ts with horse riding experiences
- 2026-01-11: Updated navbar to show Experiences, Safety, About, Contact only
- 2026-01-11: Updated design system with warm minimal aesthetic
- 2026-01-10: Initial build with all 5 pages, navbar, footer, theme support
