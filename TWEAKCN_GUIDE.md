# TweakCN Integration Guide - US Drop Edition

## 🎨 What is TweakCN?

TweakCN is a global CSS approach for Shadcn UI that allows you to style **all components at once** using CSS variables. Instead of styling each component individually, you define a theme that automatically applies to every Shadcn component in your project.

## ✅ Already Integrated!

Your project is already configured with TweakCN-style global CSS in `app/globals.css`. All Shadcn components will automatically inherit the US Drop theme.

## 🎯 How It Works

### CSS Variables (in `app/globals.css`)

All Shadcn components use CSS variables defined in your global stylesheet:

```css
:root {
  --primary: 0 97% 45%;           /* US Drop Red - #E7000A */
  --primary-foreground: 0 0% 100%; /* White text on red */
  --background: 0 0% 100%;         /* White background */
  --foreground: 0 0% 0%;           /* Black text */
  /* ... and more */
}
```

### Automatic Application

When you use any Shadcn component, it automatically uses these variables:

```tsx
import { Button } from "@/components/ui/button";

// This button automatically uses --primary color (US Drop Red)
<Button>Click Me</Button>

// Variant="destructive" uses --destructive color
<Button variant="destructive">Delete</Button>
```

## 🎨 US Drop Theme Configuration

### Primary Colors
- **Primary**: US Drop Red (#E7000A)
- **Background**: White (#FFFFFF)  
- **Foreground**: Black (#000000)

### All CSS Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--primary` | US Drop Red | US Drop Red | Primary buttons, links |
| `--secondary` | Light Gray | Dark Gray | Secondary buttons |
| `--accent` | US Drop Red | US Drop Red | Accents, highlights |
| `--destructive` | Error Red | Error Red | Delete, error states |
| `--muted` | Light Gray | Dark Gray | Backgrounds, disabled |
| `--border` | Light Gray | Dark Gray | Borders, dividers |
| `--ring` | US Drop Red | US Drop Red | Focus rings |

## 🔧 Customizing Your Theme

### Option 1: Visual Editor (Recommended)

1. Visit [tweakcn.com/editor/theme](https://tweakcn.com/editor/theme)
2. Customize colors, spacing, and borders visually
3. Copy the generated CSS variables
4. Replace the `:root` section in `app/globals.css`

### Option 2: Manual Editing

Edit `app/globals.css` directly:

```css
:root {
  /* Change primary to a different color */
  --primary: 220 70% 50%;  /* Blue instead of red */
  
  /* Adjust border radius */
  --radius: 1rem;  /* More rounded corners */
  
  /* Customize borders */
  --border: 0 0% 85%;  /* Darker borders */
}
```

### Color Format (HSL)

CSS variables use HSL format **without** the `hsl()` wrapper:

```css
/* ❌ Wrong */
--primary: hsl(0, 97%, 45%);

/* ✅ Correct */
--primary: 0 97% 45%;
```

To convert hex to HSL:
- **#E7000A** → `0 97% 45%` (US Drop Red)
- **#000000** → `0 0% 0%` (Black)
- **#FFFFFF** → `0 0% 100%` (White)

## 🎨 Using the Theme in Components

### Method 1: Shadcn Components (Automatic)

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Automatically uses --primary (US Drop Red)
<Button>Primary Action</Button>

// Uses --secondary
<Button variant="secondary">Secondary</Button>

// Card automatically uses --card and --card-foreground
<Card>Content</Card>
```

### Method 2: Tailwind Utilities

```tsx
// Use CSS variables via Tailwind
<div className="bg-primary text-primary-foreground">
  This uses --primary color
</div>

// Direct US Drop colors
<div className="bg-usdrop-red text-usdrop-white">
  Direct brand color
</div>
```

### Method 3: Custom CSS

```css
.my-component {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
}
```

## 🌙 Dark Mode Support

Dark mode is automatically configured! Just toggle the `dark` class on the `<html>` element:

```tsx
// Add dark mode toggle
<html className={isDarkMode ? 'dark' : ''}>
```

All components will automatically switch to dark mode colors defined in `.dark` section of `globals.css`.

## 🎯 Global Component Enhancements

Your `globals.css` includes global enhancements for all components:

### Focus States
All inputs automatically have US Drop Red focus rings:
```tsx
<input /> {/* Automatically has red focus ring */}
```

### Custom Utility Classes
```tsx
// Gradient text utility
<h1 className="text-gradient-usdrop">US Drop Gradient</h1>

// Button with primary styling
<Button className="button-primary">Custom Styled</Button>
```

### Scrollbar Styling
Custom scrollbars with US Drop Red on hover (works in Chromium browsers).

## 📦 Adding New Shadcn Components

All new Shadcn components automatically inherit your theme:

```bash
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add dropdown-menu
```

No additional styling needed! They'll use your global CSS variables.

## 🔄 Updating Your Theme

### Quick Updates

1. Open `app/globals.css`
2. Modify CSS variables in `:root`
3. Save and see instant changes (hot reload)

### Example: Change Primary Color

```css
:root {
  /* Change from red to blue */
  --primary: 220 70% 50%;  /* Blue */
  --ring: 220 70% 50%;     /* Blue focus ring */
}
```

All buttons, links, and focus states now use blue!

## 🎨 Pre-made Theme Variations

### Variant 1: High Contrast
```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  --border: 0 0% 80%;      /* Darker borders */
  --radius: 0.25rem;       /* Sharper corners */
}
```

### Variant 2: Softer Look
```css
:root {
  --background: 0 0% 98%;  /* Off-white */
  --foreground: 0 0% 10%;  /* Softer black */
  --border: 0 0% 92%;      /* Subtle borders */
  --radius: 1rem;          /* More rounded */
}
```

### Variant 3: Bold US Drop
```css
:root {
  --primary: 0 97% 45%;
  --accent: 0 97% 45%;
  --ring: 0 97% 45%;
  --destructive: 0 97% 45%;  /* Everything red! */
}
```

## 🧪 Testing Your Theme

### Check All Variants
```tsx
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Dark Mode
```tsx
<html className="dark">
  {/* Test all components in dark mode */}
</html>
```

## 📚 Resources

- **TweakCN Editor**: https://tweakcn.com/editor/theme
- **Shadcn UI Docs**: https://ui.shadcn.com
- **TailwindCSS Colors**: https://tailwindcss.com/docs/customizing-colors
- **HSL Color Picker**: https://hslpicker.com

## 💡 Pro Tips

1. **Keep it consistent**: Use the same `--radius` value throughout
2. **Test dark mode**: Always check both light and dark modes
3. **Use semantic colors**: Don't style buttons as red unless they're destructive
4. **Leverage variants**: Use Button variants instead of custom classes
5. **Focus rings matter**: Keep `--ring` highly visible for accessibility

## 🎉 Benefits of TweakCN Approach

✅ **Consistent design** across all components  
✅ **Easy to maintain** - change theme in one place  
✅ **Dark mode ready** out of the box  
✅ **Type-safe** with TypeScript  
✅ **Performance** - no runtime styling  
✅ **Accessible** - built-in focus states  
✅ **Scalable** - add components without extra styling  

---

Your US Drop theme is ready to go! All Shadcn components will automatically match your brand. 🚀

