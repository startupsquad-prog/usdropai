/**
 * UsDrop Ai Design Tokens
 * Central source of truth for all design values
 * NO inline styles should be used - everything references these tokens
 */

// ============================================
// SPACING SYSTEM (4px base grid)
// ============================================
export const spacing = {
  xs: "0.25rem",    // 4px
  sm: "0.5rem",     // 8px
  md: "1rem",       // 16px
  lg: "1.5rem",     // 24px
  xl: "2rem",       // 32px
  "2xl": "3rem",    // 48px
  "3xl": "4rem",    // 64px
  "4xl": "6rem",    // 96px
} as const;

// ============================================
// SIZING SYSTEM
// ============================================
export const sizing = {
  // Button sizes
  button: {
    sm: {
      height: "2rem",        // 32px
      paddingX: "0.75rem",   // 12px
      paddingY: "0.5rem",    // 8px
      fontSize: "0.875rem",  // 14px
    },
    md: {
      height: "2.5rem",      // 40px
      paddingX: "1rem",      // 16px
      paddingY: "0.625rem",  // 10px
      fontSize: "0.875rem",  // 14px
    },
    lg: {
      height: "3rem",        // 48px
      paddingX: "1.5rem",    // 24px
      paddingY: "0.75rem",   // 12px
      fontSize: "1rem",      // 16px
    },
  },
  // Logo blob sizes
  logo: {
    sm: "3rem",   // 48px
    md: "5rem",   // 80px
    lg: "6rem",   // 96px
  },
  // Color swatch sizes
  swatch: {
    sm: "3rem",   // 48px
    md: "4rem",   // 64px
    lg: "5rem",   // 80px
  },
} as const;

// ============================================
// BORDER RADIUS SYSTEM
// ============================================
export const radius = {
  sm: "0.5rem",    // 8px
  md: "0.75rem",   // 12px
  lg: "1rem",      // 16px
  xl: "1.25rem",   // 20px
  "2xl": "1.5rem", // 24px
  full: "9999px",  // Full round
} as const;

// ============================================
// SHADOW SYSTEM
// ============================================
export const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  glow: {
    purple: "0 0 20px rgba(139, 92, 246, 0.5)",
    blue: "0 0 20px rgba(81, 139, 245, 0.5)",
    cyan: "0 0 20px rgba(6, 182, 212, 0.5)",
  },
} as const;

// ============================================
// COLOR SYSTEM
// ============================================
export const colors = {
  brand: {
    purple: "#8B5CF6",
    blue: "#518BF5",
    cyan: "#06B6D4",
    black: "#000000",
    white: "#FFFFFF",
  },
  gradients: {
    primary: "linear-gradient(135deg, #8B5CF6 0%, #518BF5 100%)",
    full: "linear-gradient(90deg, #8B5CF6 0%, #518BF5 50%, #06B6D4 100%)",
    vertical: "linear-gradient(180deg, #8B5CF6 0%, #518BF5 50%, #06B6D4 100%)",
    purpleBlue: "linear-gradient(135deg, #8B5CF6 0%, #518BF5 100%)",
    blueCyan: "linear-gradient(135deg, #518BF5 0%, #06B6D4 100%)",
  },
} as const;

// ============================================
// TYPOGRAPHY SYSTEM
// ============================================
export const typography = {
  fontFamily: {
    sans: "var(--font-geist-sans), system-ui, sans-serif",
    mono: "var(--font-geist-mono), monospace",
  },
  fontSize: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem",    // 20px
    "2xl": "1.5rem",  // 24px
    "3xl": "1.875rem",// 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem",    // 48px
    "6xl": "3.75rem", // 60px
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
} as const;

// ============================================
// LAYOUT SYSTEM
// ============================================
export const layout = {
  container: {
    maxWidth: "1280px",
    padding: spacing.lg,
  },
  section: {
    spacing: spacing["3xl"],
    compactSpacing: spacing["2xl"],
  },
  grid: {
    gap: spacing.lg,
    compactGap: spacing.md,
  },
} as const;

// ============================================
// ANIMATION SYSTEM
// ============================================
export const animation = {
  duration: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
  },
  easing: {
    default: "ease-in-out",
    in: "ease-in",
    out: "ease-out",
  },
} as const;

// ============================================
// COMPONENT SPECIFIC TOKENS
// ============================================
export const components = {
  card: {
    padding: spacing.lg,
    compactPadding: spacing.md,
    borderRadius: radius.xl,
    borderWidth: "1px",
  },
  section: {
    titleSize: typography.fontSize["3xl"],
    spacing: spacing["2xl"],
    compactSpacing: spacing.lg,
  },
  colorSwatch: {
    size: sizing.swatch.md,
    borderRadius: radius.full,
    shadow: shadows.lg,
  },
} as const;

// ============================================
// EXPORT ALL TOKENS
// ============================================
export const designTokens = {
  spacing,
  sizing,
  radius,
  shadows,
  colors,
  typography,
  layout,
  animation,
  components,
} as const;

export type DesignTokens = typeof designTokens;

