/**
 * UsDrop Ai Typography System
 * Based on Geist font family
 */

export const typography = {
  // Font Families
  fonts: {
    sans: "var(--font-geist-sans), system-ui, sans-serif",
    mono: "var(--font-geist-mono), monospace",
  },

  // Font Sizes (with line heights)
  sizes: {
    xs: { size: "0.75rem", lineHeight: "1rem" },       // 12px
    sm: { size: "0.875rem", lineHeight: "1.25rem" },   // 14px
    base: { size: "1rem", lineHeight: "1.5rem" },      // 16px
    lg: { size: "1.125rem", lineHeight: "1.75rem" },   // 18px
    xl: { size: "1.25rem", lineHeight: "1.75rem" },    // 20px
    "2xl": { size: "1.5rem", lineHeight: "2rem" },     // 24px
    "3xl": { size: "1.875rem", lineHeight: "2.25rem" }, // 30px
    "4xl": { size: "2.25rem", lineHeight: "2.5rem" },  // 36px
    "5xl": { size: "3rem", lineHeight: "1" },          // 48px
    "6xl": { size: "3.75rem", lineHeight: "1" },       // 60px
    "7xl": { size: "4.5rem", lineHeight: "1" },        // 72px
    "8xl": { size: "6rem", lineHeight: "1" },          // 96px
    "9xl": { size: "8rem", lineHeight: "1" },          // 128px
  },

  // Font Weights
  weights: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  // Letter Spacing
  tracking: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

// Typography Presets
export const typographyPresets = {
  // Display Text
  "display-large": {
    fontSize: typography.sizes["8xl"].size,
    lineHeight: typography.sizes["8xl"].lineHeight,
    fontWeight: typography.weights.extrabold,
    letterSpacing: typography.tracking.tighter,
  },
  "display-medium": {
    fontSize: typography.sizes["6xl"].size,
    lineHeight: typography.sizes["6xl"].lineHeight,
    fontWeight: typography.weights.bold,
    letterSpacing: typography.tracking.tight,
  },
  "display-small": {
    fontSize: typography.sizes["5xl"].size,
    lineHeight: typography.sizes["5xl"].lineHeight,
    fontWeight: typography.weights.bold,
    letterSpacing: typography.tracking.tight,
  },

  // Headings
  "heading-1": {
    fontSize: typography.sizes["4xl"].size,
    lineHeight: typography.sizes["4xl"].lineHeight,
    fontWeight: typography.weights.bold,
  },
  "heading-2": {
    fontSize: typography.sizes["3xl"].size,
    lineHeight: typography.sizes["3xl"].lineHeight,
    fontWeight: typography.weights.bold,
  },
  "heading-3": {
    fontSize: typography.sizes["2xl"].size,
    lineHeight: typography.sizes["2xl"].lineHeight,
    fontWeight: typography.weights.semibold,
  },
  "heading-4": {
    fontSize: typography.sizes.xl.size,
    lineHeight: typography.sizes.xl.lineHeight,
    fontWeight: typography.weights.semibold,
  },
  "heading-5": {
    fontSize: typography.sizes.lg.size,
    lineHeight: typography.sizes.lg.lineHeight,
    fontWeight: typography.weights.semibold,
  },
  "heading-6": {
    fontSize: typography.sizes.base.size,
    lineHeight: typography.sizes.base.lineHeight,
    fontWeight: typography.weights.semibold,
  },

  // Body Text
  "body-large": {
    fontSize: typography.sizes.lg.size,
    lineHeight: typography.sizes.lg.lineHeight,
    fontWeight: typography.weights.normal,
  },
  "body-base": {
    fontSize: typography.sizes.base.size,
    lineHeight: typography.sizes.base.lineHeight,
    fontWeight: typography.weights.normal,
  },
  "body-small": {
    fontSize: typography.sizes.sm.size,
    lineHeight: typography.sizes.sm.lineHeight,
    fontWeight: typography.weights.normal,
  },

  // Labels
  "label-large": {
    fontSize: typography.sizes.base.size,
    lineHeight: typography.sizes.base.lineHeight,
    fontWeight: typography.weights.medium,
  },
  "label-medium": {
    fontSize: typography.sizes.sm.size,
    lineHeight: typography.sizes.sm.lineHeight,
    fontWeight: typography.weights.medium,
  },
  "label-small": {
    fontSize: typography.sizes.xs.size,
    lineHeight: typography.sizes.xs.lineHeight,
    fontWeight: typography.weights.medium,
  },

  // Code
  "code-base": {
    fontFamily: typography.fonts.mono,
    fontSize: typography.sizes.sm.size,
    lineHeight: typography.sizes.sm.lineHeight,
    fontWeight: typography.weights.normal,
  },
} as const;

export type TypographyPreset = keyof typeof typographyPresets;

