# TweakCN Quick Start - 5 Minute Guide

## ⚡ What You Need to Know

Your project uses **TweakCN** — a global CSS theme system for Shadcn UI. This means:

✅ **All Shadcn components inherit your theme automatically**  
✅ **Change colors once, apply everywhere**  
✅ **No per-component styling needed**  
✅ **US Drop brand colors pre-configured**

## 🎨 Your Theme Colors (Pre-configured)

| CSS Variable | Light Mode | Usage |
|--------------|------------|-------|
| `--primary` | US Drop Red (#E7000A) | Primary buttons, links, focus |
| `--secondary` | Light Gray | Secondary buttons |
| `--accent` | US Drop Red | Accents, highlights |
| `--destructive` | Error Red | Delete, errors |
| `--background` | White | Page background |
| `--foreground` | Black | Text color |

## 🚀 How to Use

### 1. Use Shadcn Components (They Auto-Style!)

```tsx
import { Button } from "@/components/ui/button";

// Automatically uses US Drop Red!
<Button>Click Me</Button>

// Different variants, all auto-themed
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
```

### 2. Use CSS Variables via Tailwind

```tsx
// Use theme colors
<div className="bg-primary text-primary-foreground">
  Themed box
</div>

// Direct brand colors
<div className="bg-usdrop-red text-usdrop-white">
  Direct brand color
</div>
```

### 3. Use Custom Utility Classes

```tsx
// Gradient text utility (pre-built)
<h1 className="text-gradient-usdrop">US Drop Gradient</h1>

// Primary button style (pre-built)
<Button className="button-primary">Styled Button</Button>
```

## 🛠️ Customizing Your Theme

### Quick Edit (Recommended)

1. Open `app/globals.css`
2. Find the `:root` section
3. Change CSS variables:

```css
:root {
  /* Change primary to blue */
  --primary: 220 70% 50%;  /* Was red, now blue */
  
  /* Adjust border radius */
  --radius: 1rem;  /* More rounded */
  
  /* Change borders */
  --border: 0 0% 85%;  /* Darker borders */
}
```

4. Save → **All components update instantly!**

### Visual Editor

1. Visit https://tweakcn.com/editor/theme
2. Customize visually
3. Export CSS
4. Paste into `app/globals.css`

## 📦 Adding New Components

```bash
# Add any Shadcn component
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add dialog
```

**They automatically inherit your theme!** No extra styling needed.

## 🌙 Dark Mode

Dark mode is already configured! Just toggle the `dark` class:

```tsx
<html className="dark">
  {/* All components switch to dark theme */}
</html>
```

## 🎯 CSS Variable Format (HSL)

Variables use HSL format **without** `hsl()` wrapper:

```css
/* ❌ Wrong */
--primary: hsl(0, 97%, 45%);

/* ✅ Correct */
--primary: 0 97% 45%;
```

### Convert Hex to HSL

- **#E7000A** → `0 97% 45%` (US Drop Red)
- **#000000** → `0 0% 0%` (Black)
- **#FFFFFF** → `0 0% 100%` (White)

Use: https://hslpicker.com

## ✨ Pre-built Features

### Custom Utilities

```tsx
// Gradient text
<h1 className="text-gradient-usdrop">Title</h1>

// Primary button
<Button className="button-primary">Action</Button>
```

### Focus States

All inputs automatically have US Drop Red focus rings:

```tsx
<input />  {/* Auto-styled focus ring */}
```

### Smooth Transitions

All theme changes animate smoothly (pre-configured).

### Custom Scrollbars

Scrollbars styled with US Drop Red on hover (Chrome/Edge).

## 📝 Common Tasks

### Change Primary Color

```css
:root {
  --primary: 220 70% 50%;  /* Blue */
  --ring: 220 70% 50%;     /* Match focus ring */
}
```

### Adjust Roundness

```css
:root {
  --radius: 0.25rem;  /* Sharp corners */
  --radius: 1rem;     /* Very rounded */
}
```

### Darker Borders

```css
:root {
  --border: 0 0% 80%;  /* Darker */
}
```

## 🎓 Full Documentation

- **TWEAKCN_GUIDE.md** - Complete guide
- **README.md** - Project documentation
- **SETUP.md** - Setup instructions

## 🎉 That's It!

Your theme is ready to use. Visit http://localhost:3000 to see all variants in action!

**Key Takeaway**: Style once in `globals.css`, apply everywhere automatically. 🚀

