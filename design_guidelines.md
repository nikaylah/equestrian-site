# Design Guidelines: Wanderlust Travel Experiences

## Design Philosophy
**Warm & Minimal** - A calm, welcoming travel experience website that feels personal and inviting, not corporate. The design emphasizes warmth, authenticity, and trust.

---

## Color System

### Primary Colors
- **Navy (Primary)**: Deep, sophisticated navy for trust and professionalism
  - Default: `hsl(215 50% 20%)` - Deep navy
  - Light: `hsl(215 45% 35%)` - For dark mode accents
  - Dark: `hsl(215 55% 15%)` - Deepest navy

### Accent Colors  
- **Sage Green (Accent)**: Soft, earthy green for natural warmth
  - Default: `hsl(145 25% 75%)` - Soft sage
  - Light: `hsl(145 20% 85%)` - Very light sage
  - Dark: `hsl(145 30% 55%)` - Richer sage

### Background Colors
- **Cream (Background)**: Warm, inviting cream tones
  - Default: `hsl(40 40% 97%)` - Warm cream
  - Dark: `hsl(40 35% 92%)` - Slightly darker cream for cards

### Usage
- Primary navy for: buttons, links, icons, nav accents
- Sage green for: accent badges, highlights, success states
- Cream for: page backgrounds, card backgrounds

---

## Typography

### Font Families
- **Headings**: Playfair Display (serif) - Elegant, warm, editorial feel
- **Body**: Inter (sans-serif) - Clean, readable, modern

### Tailwind Classes
- Headings: `font-serif`
- Body text: `font-sans` (default)

### Hierarchy
| Element | Size | Weight | Font |
|---------|------|--------|------|
| Hero Headlines | text-4xl md:text-5xl lg:text-6xl | font-bold | font-serif |
| Section Titles | text-3xl md:text-4xl | font-semibold | font-serif |
| Card Titles | text-lg md:text-xl | font-semibold | font-sans |
| Body Large | text-lg md:text-xl | font-normal | font-sans |
| Body | text-base | font-normal | font-sans |
| Small/Meta | text-sm | font-medium | font-sans |

---

## Component Styling

### Cards
- Background: `bg-card` (warm white/cream)
- Border: Soft, subtle - `border` with `border-card-border`
- Corners: Rounded - `rounded-xl`
- Shadows: Minimal, soft shadows
- Overflow: `overflow-visible` to allow hover effects

### Buttons
- Primary: Deep navy background with cream text
- Secondary: Subtle cream/gray background
- Ghost: Transparent with navy text on hover
- All use existing Shadcn button component with built-in hover states

### Borders
- Color: Soft, low-contrast borders using `border-border`
- Radius: Generous rounding (`rounded-md`, `rounded-lg`, `rounded-xl`)
- Width: 1px default, subtle and understated

### Icons
- Source: Lucide React
- Size: `h-5 w-5` for inline, `h-6 w-6` for feature icons
- Color: Match text color or use `text-primary`

---

## Layout Principles

### Spacing
- Use Tailwind spacing scale: 2, 4, 6, 8, 12, 16, 20, 24
- Section padding: `py-20 md:py-32`
- Content padding: `px-6`
- Container: `max-w-7xl mx-auto`

### Grid Patterns
- Experience cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Feature sections: `grid-cols-1 lg:grid-cols-2 gap-12`
- Always stack to single column on mobile

---

## Dark Mode

Dark mode uses deep navy tones instead of pure black for warmth:
- Background: `hsl(220 25% 10%)` - Deep blue-navy
- Card: `hsl(220 22% 12%)` - Slightly lighter
- Text: Warm cream tones for readability

---

## Interaction Design

- Minimal, subtle animations
- Card hover: Gentle elevation using built-in `hover-elevate`
- No jarring or flashy effects
- Smooth transitions: `transition-colors`, `transition-transform`

---

## Page Structure

### Hero Sections
- Full-width image with dark gradient overlay
- Centered or left-aligned text
- Light text over dark overlay (works in both modes)
- Height: 40-60vh depending on page

### Content Sections
- Alternating backgrounds (`bg-background` / `bg-card`)
- Generous vertical padding
- Clear visual hierarchy with serif headings

### Footer
- 4-column grid on desktop
- Contact info, quick links, navigation
- Subtle border top separator
