# UsDrop Ai - Professional Brand Kit

## 🎨 Complete Design System Documentation

This document outlines the complete brand identity and design system for UsDrop Ai.

---

## Logo

### Primary Logo
- **Name**: UsDrop Ai
- **Style**: Gradient blob + Text combination
- **Blob**: Purple → Blue → Cyan gradient with rounded corners
- **Typography**: Geist font, Bold weight
- **Ai Accent**: Blue-Cyan gradient

### Logo Variations
1. **Full Color** - Primary use on light backgrounds
2. **Dark Version** - For dark backgrounds
3. **Monochrome** - Black or white for limited color use

### Clear Space
Maintain a minimum clear space equal to the height of the "A" in "Ai" around the logo.

---

## Color System

### Primary Brand Colors

| Color | Hex | RGB | HSL | Usage |
|-------|-----|-----|-----|-------|
| **Brand Purple** | `#6366F1` | `99, 102, 241` | `243° 75% 59%` | Primary actions, links, focus states |
| **Brand Blue** | `#318BF8` | `49, 139, 248` | `208° 93% 56%` | Accent color, highlights |
| **Brand Cyan** | `#06B6D4` | `6, 182, 212` | `189° 94% 43%` | Secondary accent, success states |
| **Black** | `#000000` | `0, 0, 0` | `0° 0% 0%` | Text, secondary buttons |
| **White** | `#FFFFFF` | `255, 255, 255` | `0° 0% 100%` | Backgrounds, text on dark |

### Extended Purple Palette

```
Purple 50:  #F5F3FF  Ultra light backgrounds
Purple 100: #EDE9FE  Light backgrounds
Purple 200: #DDD6FE  Borders, dividers
Purple 300: #C4B5FD  Disabled states
Purple 400: #A78BFA  Hover states
Purple 500: #8B5CF6  Active states
Purple 600: #7C3AED  Primary (darker)
Purple 700: #6D28D9  Text on light
Purple 800: #5B21B6  Dark mode primary
Purple 900: #4C1D95  Dark text
Purple 950: #2E1065  Very dark backgrounds
```

### Semantic Colors

| Purpose | Color | Hex |
|---------|-------|-----|
| **Success** | Green | `#10B981` |
| **Warning** | Orange | `#F59E0B` |
| **Error** | Red | `#EF4444` |
| **Info** | Blue | `#318BF8` |

---

## Gradients

### Primary Gradient (Horizontal)
```css
linear-gradient(90deg, #6366F1 0%, #318BF8 50%, #06B6D4 100%)
```
**Usage**: Hero sections, CTAs, branding elements

### Purple to Blue
```css
linear-gradient(135deg, #6366F1 0%, #318BF8 100%)
```
**Usage**: Buttons, cards, highlights

### Blue to Cyan
```css
linear-gradient(135deg, #318BF8 0%, #06B6D4 100%)
```
**Usage**: Secondary elements, accents

### Vertical Gradient
```css
linear-gradient(180deg, #6366F1 0%, #318BF8 50%, #06B6D4 100%)
```
**Usage**: Backgrounds, sidebars

---

## Typography

### Font Family
- **Primary**: Geist Sans
- **Monospace**: Geist Mono
- **Fallback**: `system-ui, sans-serif`

### Type Scale

| Name | Size | Line Height | Weight | Usage |
|------|------|-------------|--------|-------|
| **Display Large** | 96px | 1 | 800 | Hero headlines |
| **Display Medium** | 60px | 1 | 700 | Section headers |
| **Display Small** | 48px | 1 | 700 | Page titles |
| **Heading 1** | 36px | 40px | 700 | Main headings |
| **Heading 2** | 30px | 36px | 700 | Section headings |
| **Heading 3** | 24px | 32px | 600 | Subsection headings |
| **Heading 4** | 20px | 28px | 600 | Card titles |
| **Heading 5** | 18px | 28px | 600 | Small headings |
| **Heading 6** | 16px | 24px | 600 | Labels |
| **Body Large** | 18px | 28px | 400 | Introductory text |
| **Body Base** | 16px | 24px | 400 | Body text |
| **Body Small** | 14px | 20px | 400 | Secondary text |
| **Label Large** | 16px | 24px | 500 | Form labels |
| **Label Medium** | 14px | 20px | 500 | Button text |
| **Label Small** | 12px | 16px | 500 | Captions |

### Font Weights
- **Thin**: 100
- **Light**: 300
- **Normal**: 400 (Body text)
- **Medium**: 500 (Labels, buttons)
- **Semibold**: 600 (Headings)
- **Bold**: 700 (Important headings)
- **Extrabold**: 800 (Display text)

---

## Buttons

### Variants

1. **Primary** (Default)
   - Background: Brand Purple
   - Text: White
   - Hover: 90% opacity

2. **Secondary**
   - Background: Black
   - Text: White
   - Hover: 80% opacity

3. **Gradient** (Custom)
   - Background: Purple → Blue → Cyan gradient
   - Text: White
   - Hover: 90% opacity

4. **Outline**
   - Border: Current color
   - Background: Transparent
   - Hover: Light background

5. **Ghost**
   - Background: Transparent
   - Hover: Light background

6. **Destructive**
   - Background: Red
   - Text: White

### Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| **Large** | 48px | 24px × 32px | 16px |
| **Default** | 40px | 16px × 24px | 14px |
| **Small** | 32px | 12px × 16px | 13px |
| **Icon** | 40px | 12px | - |

---

## Cards

### Standard Card
- Background: Card background
- Border: 1px light gray
- Border Radius: 12px
- Padding: 24px
- Shadow: Subtle

### Glass Card (Glassmorphism)
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```
**Usage**: Overlay elements, modern UI sections

### Gradient Border Card
- Card with gradient border effect
- Background: Card background
- Border: Animated gradient
- **Usage**: Featured content, premium features

---

## Effects & Animations

### Glow Effects
```css
/* Purple Glow */
box-shadow: 0 0 20px hsla(243, 75%, 59%, 0.5);

/* Blue Glow */
box-shadow: 0 0 20px hsla(208, 93%, 56%, 0.5);

/* Cyan Glow */
box-shadow: 0 0 20px hsla(189, 94%, 43%, 0.5);
```

### Animated Gradient
```css
background-size: 200% 200%;
animation: gradient 8s ease infinite;

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### Transitions
- **Duration**: 200ms
- **Timing**: ease-in-out
- **Properties**: color, background-color, border-color, opacity

---

## Spacing System

Based on 4px grid:

| Token | Size | Usage |
|-------|------|-------|
| `xs` | 4px | Tight spacing |
| `sm` | 8px | Small gaps |
| `md` | 16px | Default spacing |
| `lg` | 24px | Section spacing |
| `xl` | 32px | Large sections |
| `2xl` | 48px | Major sections |
| `3xl` | 64px | Hero spacing |

---

## Border Radius

| Size | Value | Usage |
|------|-------|-------|
| **Small** | 8px | Buttons, inputs |
| **Medium** | 10px | Cards, containers |
| **Large** | 12px | Panels, dialogs |
| **XL** | 16px | Hero sections |
| **2XL** | 24px | Feature cards |
| **Full** | 9999px | Pills, avatars |

---

## Shadows

### Elevation Levels

```css
/* Level 1 - Subtle */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Level 2 - Card */
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
            0 1px 2px 0 rgba(0, 0, 0, 0.06);

/* Level 3 - Elevated */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Level 4 - Floating */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* Level 5 - Modal */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

---

## CSS Custom Classes

### Gradient Text
```css
.text-gradient-brand          /* Full gradient */
.text-gradient-purple-blue    /* Purple to Blue */
.text-gradient-blue-cyan      /* Blue to Cyan */
```

### Gradient Backgrounds
```css
.bg-gradient-brand            /* Horizontal gradient */
.bg-gradient-brand-vertical   /* Vertical gradient */
.bg-gradient-purple-blue      /* Purple-Blue diagonal */
.bg-gradient-blue-cyan        /* Blue-Cyan diagonal */
```

### Glass Morphism
```css
.glass-card                   /* Light glass effect */
.glass-card-dark              /* Dark glass effect */
```

### Custom Buttons
```css
.button-primary               /* Gradient button */
.button-gradient              /* Full brand gradient */
```

### Effects
```css
.glow-purple                  /* Purple glow shadow */
.glow-blue                    /* Blue glow shadow */
.glow-cyan                    /* Cyan glow shadow */
.animate-gradient             /* Animated gradient */
```

---

## Dark Mode

### Color Adaptations

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | White | `#1C2333` |
| Foreground | Near Black | Off White |
| Card | White | `#242B3D` |
| Border | Light Gray | Dark Gray |
| Primary | Purple | Purple (same) |
| Secondary | Black | Dark Gray |

### Implementation
Toggle `.dark` class on `<html>` element to switch modes.

---

## Accessibility

### Color Contrast
- **AA Compliance**: All text meets WCAG 2.1 Level AA
- **AAA for body text**: 7:1 contrast ratio
- **Focus indicators**: Visible 2px purple ring

### Focus States
```css
/* All interactive elements */
ring-2 ring-primary ring-offset-2
```

---

## Usage Guidelines

### Do's ✅
- Use gradient for hero sections and major CTAs
- Maintain consistent spacing using the 4px grid
- Use glassmorphism sparingly for special sections
- Ensure proper color contrast for accessibility
- Use brand colors for primary actions
- Apply animations smoothly (200ms duration)

### Don'ts ❌
- Don't use more than 2 gradients on one screen
- Don't mix glass effects with solid backgrounds
- Don't use brand colors for errors (use semantic red)
- Don't override primary button styles unnecessarily
- Don't use black text on brand purple (low contrast)
- Don't animate elements longer than 500ms

---

## File Structure

```
lib/design-system/
├── brand-colors.ts     # Color definitions & exports
└── typography.ts       # Typography system & presets

app/
├── globals.css         # TweakCN theme + custom classes
└── brand-kit/          # Brand kit showcase page
    └── page.tsx

tailwind.config.ts      # Tailwind configuration
```

---

## Implementation

### Using Brand Colors in Code

```tsx
// Tailwind classes
<div className="bg-brand-purple text-white">Purple background</div>
<div className="bg-brand-blue text-white">Blue background</div>

// Gradient utilities
<h1 className="text-gradient-brand">Gradient Text</h1>
<div className="bg-gradient-brand">Gradient Background</div>

// Glass effect
<div className="glass-card p-8">Glass morphism card</div>

// Custom buttons
<Button className="button-gradient">Full Gradient Button</Button>
```

### Using CSS Variables

```css
/* Direct use */
background: hsl(var(--brand-purple));
color: hsl(var(--brand-blue));

/* With opacity */
background: hsl(var(--brand-purple) / 0.5);
```

---

## Brand Kit Resources

- **Design System**: `/app/brand-kit` - Live showcase
- **Color System**: `/lib/design-system/brand-colors.ts`
- **Typography**: `/lib/design-system/typography.ts`
- **Global Styles**: `/app/globals.css`

---

## Version History

- **v1.0** - Initial brand kit with UsDrop Ai identity
  - Purple → Blue → Cyan gradient system
  - Glassmorphism UI components
  - TweakCN global theming
  - Complete design tokens
  - Dark mode support

---

**For questions or brand usage approval, contact the design team.**

🎨 **UsDrop Ai** - Professional AI Solutions

