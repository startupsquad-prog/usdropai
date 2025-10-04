/**
 * UsDrop Ai Component Styles
 * Pre-defined styles for all components
 * Referenced in globals.css
 */

import { designTokens } from "./design-tokens";

const { spacing, sizing, radius, shadows, typography, components } = designTokens;

// ============================================
// BUTTON STYLES
// ============================================
export const buttonStyles = {
  // Base button
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: typography.fontWeight.semibold,
    transition: `all ${designTokens.animation.duration.normal} ${designTokens.animation.easing.default}`,
    cursor: "pointer",
    border: "none",
    outline: "none",
  },
  
  // Size variants
  sizes: {
    sm: {
      height: sizing.button.sm.height,
      paddingLeft: sizing.button.sm.paddingX,
      paddingRight: sizing.button.sm.paddingX,
      fontSize: sizing.button.sm.fontSize,
      borderRadius: radius.md,
    },
    md: {
      height: sizing.button.md.height,
      paddingLeft: sizing.button.md.paddingX,
      paddingRight: sizing.button.md.paddingX,
      fontSize: sizing.button.md.fontSize,
      borderRadius: radius.lg,
    },
    lg: {
      height: sizing.button.lg.height,
      paddingLeft: sizing.button.lg.paddingX,
      paddingRight: sizing.button.lg.paddingX,
      fontSize: sizing.button.lg.fontSize,
      borderRadius: radius.xl,
    },
  },
} as const;

// ============================================
// CARD STYLES
// ============================================
export const cardStyles = {
  base: {
    borderRadius: components.card.borderRadius,
    borderWidth: components.card.borderWidth,
    padding: components.card.padding,
    backgroundColor: "hsl(var(--card))",
    borderColor: "hsl(var(--border))",
    boxShadow: shadows.lg,
  },
  compact: {
    padding: components.card.compactPadding,
  },
} as const;

// ============================================
// SECTION STYLES
// ============================================
export const sectionStyles = {
  base: {
    marginBottom: components.section.spacing,
  },
  compact: {
    marginBottom: components.section.compactSpacing,
  },
  title: {
    fontSize: components.section.titleSize,
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.lg,
  },
  compactTitle: {
    fontSize: typography.fontSize["2xl"],
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.md,
  },
} as const;

// ============================================
// LOGO STYLES
// ============================================
export const logoStyles = {
  blob: {
    sm: {
      width: sizing.logo.sm,
      height: sizing.logo.sm,
      borderRadius: radius.xl,
    },
    md: {
      width: sizing.logo.md,
      height: sizing.logo.md,
      borderRadius: radius["2xl"],
    },
    lg: {
      width: sizing.logo.lg,
      height: sizing.logo.lg,
      borderRadius: radius["2xl"],
    },
  },
  text: {
    main: {
      fontSize: typography.fontSize["5xl"],
      fontWeight: typography.fontWeight.bold,
      lineHeight: typography.lineHeight.tight,
    },
    sub: {
      fontSize: typography.fontSize["4xl"],
      fontWeight: typography.fontWeight.bold,
    },
  },
} as const;

// ============================================
// SWATCH STYLES
// ============================================
export const swatchStyles = {
  base: {
    width: components.colorSwatch.size,
    height: components.colorSwatch.size,
    borderRadius: components.colorSwatch.borderRadius,
    boxShadow: components.colorSwatch.shadow,
  },
} as const;

// ============================================
// GLASS CARD STYLES
// ============================================
export const glassCardStyles = {
  light: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: radius.xl,
    padding: spacing.lg,
  },
  dark: {
    background: "rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: radius.xl,
    padding: spacing.lg,
  },
} as const;

// Export all styles
export const componentStyles = {
  button: buttonStyles,
  card: cardStyles,
  section: sectionStyles,
  logo: logoStyles,
  swatch: swatchStyles,
  glassCard: glassCardStyles,
} as const;

