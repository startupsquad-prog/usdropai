"use client";

import { ParticleButton } from "@/components/shared/particle-button";
import { Button } from "@/components/ui/button";

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 max-w-7xl">
          <h1 className="text-4xl font-bold">
            UsDrop Ai <span className="text-gradient-blue">Style Guide</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            NEW BLUE THEME · Sharper UI · Design System V2
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Colors Section */}
        <section className="section-compact">
          <h2 className="section-title-compact">Brand Colors</h2>
          <div className="grid-2">
            <div className="brand-card-compact">
              <h3 className="text-lg font-semibold mb-4">Primary Palette</h3>
              <div className="swatch-container">
                <div className="swatch-item">
                  <div className="color-swatch bg-brand-blue"></div>
                  <p className="color-swatch-label">#318BF5</p>
                  <p className="text-xs text-muted-foreground">Primary</p>
                </div>
                <div className="swatch-item">
                  <div className="color-swatch bg-brand-light-blue"></div>
                  <p className="color-swatch-label">#5BA3F7</p>
                  <p className="text-xs text-muted-foreground">Light</p>
                </div>
                <div className="swatch-item">
                  <div className="color-swatch bg-brand-cyan"></div>
                  <p className="color-swatch-label">#06B6D4</p>
                  <p className="text-xs text-muted-foreground">Cyan</p>
                </div>
              </div>
            </div>

            <div className="brand-card-compact">
              <h3 className="text-lg font-semibold mb-4">Gradients</h3>
              <div className="space-y-3">
                <div>
                  <div className="gradient-bar"></div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Brand Gradient (Blue → Light Blue → Cyan)
                  </p>
                </div>
                <div>
                  <div
                    className="w-full h-4 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #318BF5 0%, #5BA3F7 100%)",
                    }}
                  ></div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Blue Gradient
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="section-compact">
          <h2 className="section-title-compact">Typography</h2>
          <div className="brand-card-compact space-y-4">
            <div>
              <h1 className="text-5xl font-bold mb-2">Heading 1</h1>
              <p className="text-muted-foreground text-sm">
                48px · Font Weight 700 · Geist Sans
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
              <p className="text-muted-foreground text-sm">
                36px · Font Weight 700 · Geist Sans
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Heading 3</h3>
              <p className="text-muted-foreground text-sm">
                24px · Font Weight 600 · Geist Sans
              </p>
            </div>
            <div>
              <p className="text-lg mb-2">Body Large</p>
              <p className="text-muted-foreground text-sm">
                18px · Font Weight 400 · Geist Sans
              </p>
            </div>
            <div>
              <p className="mb-2">Body Regular</p>
              <p className="text-muted-foreground text-sm">
                16px · Font Weight 400 · Geist Sans
              </p>
            </div>
            <div>
              <p className="text-sm mb-2">Body Small</p>
              <p className="text-muted-foreground text-sm">
                14px · Font Weight 400 · Geist Sans
              </p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="section-compact">
          <h2 className="section-title-compact">Buttons (NEW SHARPER UI)</h2>
          <div className="grid-2">
            {/* Primary Buttons */}
            <div className="brand-card-compact">
              <h3 className="text-lg font-semibold mb-4">Primary Buttons</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Large (48px · 8px radius)
                  </p>
                  <ParticleButton className="btn-large">
                    Large Button
                  </ParticleButton>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Default (40px · 6px radius)
                  </p>
                  <ParticleButton className="btn-default">
                    Default Button
                  </ParticleButton>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Small (32px · 4px radius)
                  </p>
                  <ParticleButton className="btn-small">
                    Small Button
                  </ParticleButton>
                </div>
              </div>
            </div>

            {/* Button Variants */}
            <div className="brand-card-compact">
              <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Primary</p>
                  <Button>Primary Button</Button>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Secondary
                  </p>
                  <Button variant="secondary">Secondary Button</Button>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Outline</p>
                  <Button variant="outline">Outline Button</Button>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Ghost</p>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="section-compact">
          <h2 className="section-title-compact">Cards (Sharper Corners)</h2>
          <div className="grid-3">
            <div className="brand-card">
              <h3 className="text-lg font-semibold mb-2">Standard Card</h3>
              <p className="text-muted-foreground text-sm">
                6px border radius · Glass effect · Sharper design
              </p>
            </div>
            <div className="brand-card-compact">
              <h3 className="text-lg font-semibold mb-2">Compact Card</h3>
              <p className="text-muted-foreground text-sm">
                4px border radius · Reduced padding
              </p>
            </div>
            <div className="glass-card">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Glass Card
              </h3>
              <p className="text-white/90 text-sm">
                Backdrop blur · Transparent background
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Components */}
        <section className="section-compact">
          <h2 className="section-title-compact">Interactive Components</h2>
          <div className="grid-2">
            {/* Stats Card */}
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-value">$49</div>
              <div className="stat-label">Monthly Plan</div>
            </div>

            {/* Testimonial Card */}
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "This is an example testimonial with the new blue theme and
                sharper corners."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AB</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">Alex Blue</div>
                  <div className="testimonial-role">
                    <span>Designer</span>
                    <span className="testimonial-flag">🇺🇸</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step Cards */}
        <section className="section-compact">
          <h2 className="section-title-compact">Step Cards (Sharper)</h2>
          <div className="grid-3">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon-wrapper">🔍</div>
              <div className="step-content">
                <h3 className="step-title">Discover</h3>
                <p className="step-description">
                  Find winning products with AI
                </p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon-wrapper">⚡</div>
              <div className="step-content">
                <h3 className="step-title">Import</h3>
                <p className="step-description">One-click product import</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon-wrapper">🚀</div>
              <div className="step-content">
                <h3 className="step-title">Launch</h3>
                <p className="step-description">Scale your business</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-compact">
          <h2 className="section-title-compact">Pricing Cards</h2>
          <div className="grid-3">
            <div className="pricing-card">
              <div className="pricing-plan-icon">💎</div>
              <h3 className="pricing-plan-name">Starter</h3>
              <p className="pricing-plan-description">For beginners</p>
              <div className="pricing-price-wrapper">
                <div className="pricing-price-free">
                  $0<span className="pricing-period">/month</span>
                </div>
              </div>
              <div className="pricing-features">
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    10 Imports/month
                  </span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    Basic Analytics
                  </span>
                </div>
              </div>
              <button className="pricing-cta-free">Get Started</button>
            </div>

            <div className="pricing-card-highlighted">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-plan-icon">✨</div>
              <h3 className="pricing-plan-name">Growth</h3>
              <p className="pricing-plan-description">Best value</p>
              <div className="pricing-price-wrapper">
                <div className="pricing-price">
                  $49<span className="pricing-period">/month</span>
                </div>
              </div>
              <div className="pricing-features">
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    100 Imports/month
                  </span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    Priority Support
                  </span>
                </div>
              </div>
              <button className="pricing-cta-highlighted">Start Scaling</button>
            </div>

            <div className="pricing-card">
              <div className="pricing-plan-icon">🚀</div>
              <h3 className="pricing-plan-name">Pro</h3>
              <p className="pricing-plan-description">For serious brands</p>
              <div className="pricing-price-wrapper">
                <div className="pricing-price">
                  $199<span className="pricing-period">/month</span>
                </div>
              </div>
              <div className="pricing-features">
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    Unlimited Imports
                  </span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    Account Manager
                  </span>
                </div>
              </div>
              <button className="pricing-cta-pro">Go Pro</button>
            </div>
          </div>
        </section>

        {/* Text Utilities */}
        <section className="section-compact">
          <h2 className="section-title-compact">Text Utilities</h2>
          <div className="brand-card-compact space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-gradient-brand mb-2">
                Brand Gradient Text
              </h3>
              <p className="text-sm text-muted-foreground">
                .text-gradient-brand
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gradient-blue mb-2">
                Blue Gradient Text
              </h3>
              <p className="text-sm text-muted-foreground">
                .text-gradient-blue
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gradient-blue-cyan mb-2">
                Blue-Cyan Gradient Text
              </h3>
              <p className="text-sm text-muted-foreground">
                .text-gradient-blue-cyan
              </p>
            </div>
          </div>
        </section>

        {/* Border Radius Comparison */}
        <section className="section-compact pb-8">
          <h2 className="section-title-compact">
            Border Radius (NEW SHARPER)
          </h2>
          <div className="brand-card-compact">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div
                  className="h-24 bg-gradient-blue flex items-center justify-center text-white font-semibold rounded-xl"
                >
                  XL
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  8px (0.5rem)
                </p>
              </div>
              <div>
                <div
                  className="h-24 bg-gradient-blue flex items-center justify-center text-white font-semibold rounded-lg"
                >
                  LG
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  6px (0.375rem)
                </p>
              </div>
              <div>
                <div
                  className="h-24 bg-gradient-blue flex items-center justify-center text-white font-semibold rounded-md"
                >
                  MD
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  4px (0.25rem)
                </p>
              </div>
              <div>
                <div
                  className="h-24 bg-gradient-blue flex items-center justify-center text-white font-semibold rounded-sm"
                >
                  SM
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  2px (0.125rem)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

