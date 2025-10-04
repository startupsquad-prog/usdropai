/**
 * UsDrop Ai Brand Colors - NEW BLUE THEME
 * Professional color system with blue-focused palette
 */

export const brandColors = {
  // Primary Brand Colors - Blue Theme
  primary: {
    blue: "#318BF5",        // Primary brand blue
    lightBlue: "#5BA3F7",   // Light blue for gradients
    darkBlue: "#1E6FD9",    // Dark blue for hover states
    cyan: "#06B6D4",        // Accent cyan
    black: "#000000",       // Pure black
    white: "#FFFFFF",       // Pure white
  },

  // Extended Blue Palette
  blue: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#318BF5",     // Primary brand blue
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
    950: "#172554",
  },

  // Light Blue Palette (for gradients)
  lightBlue: {
    50: "#F0F9FF",
    100: "#E0F2FE",
    200: "#BAE6FD",
    300: "#7DD3FC",
    400: "#5BA3F7",     // Brand light blue
    500: "#38BDF8",
    600: "#0EA5E9",
    700: "#0284C7",
    800: "#0369A1",
    900: "#075985",
    950: "#0C4A6E",
  },

  // Extended Cyan Palette
  cyan: {
    50: "#ECFEFF",
    100: "#CFFAFE",
    200: "#A5F3FC",
    300: "#67E8F9",
    400: "#22D3EE",
    500: "#06B6D4",     // Brand cyan
    600: "#0891B2",
    700: "#0E7490",
    800: "#155E75",
    900: "#164E63",
    950: "#083344",
  },

  // Grayscale
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
    950: "#030712",
  },

  // Semantic Colors
  semantic: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#318BF5",    // Uses brand blue
  },

  // Gradient Definitions - Blue Theme
  gradients: {
    primary: "linear-gradient(90deg, #318BF5 0%, #5BA3F7 50%, #06B6D4 100%)",
    primaryVertical: "linear-gradient(180deg, #318BF5 0%, #5BA3F7 50%, #06B6D4 100%)",
    blue: "linear-gradient(135deg, #318BF5 0%, #5BA3F7 100%)",
    blueCyan: "linear-gradient(135deg, #5BA3F7 0%, #06B6D4 100%)",
    dark: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
    glass: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
  },
} as const;

// CSS Variable Export
export const cssVariables = {
  // Primary colors
  "--brand-blue": brandColors.primary.blue,
  "--brand-light-blue": brandColors.primary.lightBlue,
  "--brand-dark-blue": brandColors.primary.darkBlue,
  "--brand-cyan": brandColors.primary.cyan,
  "--brand-black": brandColors.primary.black,
  "--brand-white": brandColors.primary.white,

  // Semantic
  "--color-success": brandColors.semantic.success,
  "--color-warning": brandColors.semantic.warning,
  "--color-error": brandColors.semantic.error,
  "--color-info": brandColors.semantic.info,
} as const;

export type BrandColor = keyof typeof brandColors.primary;
export type BlueShade = keyof typeof brandColors.blue;
export type LightBlueShade = keyof typeof brandColors.lightBlue;
export type CyanShade = keyof typeof brandColors.cyan;
