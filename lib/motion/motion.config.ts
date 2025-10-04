/**
 * Motion Configuration
 * Centralized animation settings for consistent, professional motion
 * Following SaaS best practices: subtle, intentional, performance-focused
 */

// ============================================
// TIMING & EASING (Global Standards)
// ============================================

export const motionTiming = {
  fast: 0.2,      // Micro-interactions (hover, focus)
  normal: 0.4,    // Standard transitions
  slow: 0.6,      // Large sections, emphasis
} as const;

export const motionEasing = {
  // Smooth, natural easing (recommended for most cases)
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Quick exit, slow entrance
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  
  // Slow exit, quick entrance
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  
  // Spring-like (use sparingly)
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

// ============================================
// ANIMATION PRESETS (Reusable)
// ============================================

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: motionTiming.normal, ease: motionEasing.smooth },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: motionTiming.normal, ease: motionEasing.smooth },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: motionTiming.normal, ease: motionEasing.smooth },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: motionTiming.normal, ease: motionEasing.smooth },
};

// ============================================
// SECTION-SPECIFIC MOTION
// ============================================

export const heroMotion = {
  headline: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: motionEasing.smooth },
  },
  subline: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2, ease: motionEasing.smooth },
  },
  badge: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: motionEasing.smooth },
  },
  mockup: {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, delay: 0.4, ease: motionEasing.smooth },
  },
};

export const productMotion = {
  mockup: {
    initial: { opacity: 0, rotateY: -15, scale: 0.9 },
    animate: { opacity: 1, rotateY: 0, scale: 1 },
    transition: { duration: 0.8, ease: motionEasing.smooth },
  },
  featureBullet: (index: number) => ({
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.4,
      delay: index * 0.15,
      ease: motionEasing.smooth,
    },
  }),
};

export const socialProofMotion = {
  card: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: motionEasing.smooth },
  },
  staggeredCard: (index: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: motionEasing.smooth,
    },
  }),
};

export const stepsMotion = {
  step: (index: number) => ({
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.5,
      delay: index * 0.15,
      ease: motionEasing.smooth,
    },
  }),
};

export const pricingMotion = {
  card: (index: number) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: motionEasing.smooth,
    },
  }),
};

export const ctaMotion = {
  heading: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: motionEasing.smooth },
  },
  button: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.2, ease: motionEasing.smooth },
  },
};

// ============================================
// HOVER INTERACTIONS (Micro-animations)
// ============================================

export const hoverEffects = {
  button: {
    scale: 1.02,
    transition: { duration: motionTiming.fast, ease: motionEasing.smooth },
  },
  card: {
    y: -2,
    transition: { duration: motionTiming.fast, ease: motionEasing.smooth },
  },
  icon: {
    scale: 1.1,
    transition: { duration: motionTiming.fast, ease: motionEasing.smooth },
  },
};

// ============================================
// VIEWPORT ANIMATION (Scroll-triggered)
// ============================================

export const viewportConfig = {
  once: true, // Animate only once (don't repeat on scroll)
  amount: 0.3, // Trigger when 30% of element is visible
  margin: '0px 0px -100px 0px', // Start animation slightly before element enters
};

// ============================================
// CONTINUOUS ANIMATIONS (Background effects)
// ============================================

export const continuousMotion = {
  // Meteors - slow, subtle drift
  meteor: {
    animate: {
      x: [0, -1000],
      opacity: [0, 1, 0],
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatDelay: 2,
      ease: 'linear',
    },
  },
  
  // Logo carousel - infinite scroll
  logoScroll: {
    animate: {
      x: [0, -1000],
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  
  // Gradient background - subtle shift
  gradientShift: {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%'],
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'linear',
    },
  },
};

// ============================================
// MOTION UTILITIES
// ============================================

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const getStaggerDelay = (index: number, baseDelay: number = 0.15): number => {
  return index * baseDelay;
};

// ============================================
// CSS MOTION CLASSES (For non-Framer usage)
// ============================================

export const cssMotionClasses = {
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down',
  scaleIn: 'animate-scale-in',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
} as const;

// Export everything for easy imports
export const motion = {
  timing: motionTiming,
  easing: motionEasing,
  hero: heroMotion,
  product: productMotion,
  socialProof: socialProofMotion,
  steps: stepsMotion,
  pricing: pricingMotion,
  cta: ctaMotion,
  hover: hoverEffects,
  viewport: viewportConfig,
  continuous: continuousMotion,
  stagger: staggerContainer,
  presets: {
    fadeIn,
    fadeInUp,
    fadeInDown,
    scaleIn,
  },
} as const;

