"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Topbar Navigation */}
      <nav className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <div className="topbar-container">
          {/* Logo */}
          <Link href="/" className="topbar-logo">
            <div className="topbar-logo-blob"></div>
            <span>
              UsDrop <span className="text-gradient-blue">Ai</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="topbar-nav">
            <a className="topbar-link">Features</a>
            <a className="topbar-link">Pricing</a>
            <a className="topbar-link">Resources</a>
            <a className="topbar-link">About</a>
          </div>

          {/* Auth Actions */}
          <div className="topbar-actions">
            <button className="btn-ghost">Login</button>
            <button className="btn-cta">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Elements */}
        <div className="hero-background"></div>
        <div className="hero-grid"></div>
        
        {/* Meteors */}
        <div className="meteors-container">
          <div className="meteor"></div>
          <div className="meteor"></div>
          <div className="meteor"></div>
          <div className="meteor"></div>
          <div className="meteor"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-container">
          <div className="hero-content">
            {/* Badge */}
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>1000+ brands are already building with UsDrop Ai</span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              Stop Hunting Products.
              <br />
              <span className="hero-gradient-text">Start Scaling.</span>
            </h1>

            {/* Subline */}
            <p className="hero-subline">
              UsDrop Ai finds, imports, and launches your winning products —
              faster than ever. Scale your dropshipping empire with
              AI-powered automation.
            </p>

            {/* Meta */}
            <p className="hero-meta">
              <span className="hero-meta-highlight">⚡ Free to start</span> · No
              credit card required · 14-day trial
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <button className="btn-hero-primary">
                <span>Start Free</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="btn-hero-secondary">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66667 5.83333L13.3333 10L6.66667 14.1667V5.83333Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>See How It Works</span>
              </button>
            </div>

            {/* Dashboard Mockup */}
            <div className="hero-mockup">
              <div className="hero-mockup-glow"></div>
              <div className="hero-mockup-container">
                <div className="hero-mockup-image">
                  <span>🎨 Dashboard Preview</span>
                  <span className="hero-mockup-subtitle">(Coming Soon)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Product Showcase */}
      <section className="product-showcase-section">
        <div className="product-showcase-container">
          <div className="product-showcase-grid">
            {/* Left - Dashboard Mockup */}
            <div className="product-mockup-container">
              <div className="product-mockup-glow-left"></div>
              <div className="product-mockup-wrapper">
                <div className="product-mockup-glass">
                  <div className="product-mockup-screen">
                    <div className="product-mockup-placeholder">
                      <span>📊</span>
                      <span>Dashboard Interface</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="product-content">
              <h2 className="product-section-heading">
                Your Entire Dropshipping Business.{" "}
                <span className="hero-gradient-text">In One Dashboard.</span>
              </h2>

              <p className="product-subtext">
                Stop juggling spreadsheets, suppliers, and guesswork. USDrop Ai
                centralizes everything: products, imports, store launches, and
                scaling insights.
              </p>

              {/* Feature List */}
              <div className="product-features-list">
                <div className="product-feature-item">
                  <div className="product-feature-icon">🔍</div>
                  <div className="product-feature-content">
                    <h3 className="product-feature-title">
                      Find Winning Products
                    </h3>
                    <p className="product-feature-description">
                      AI-powered product research that finds trending items
                      before your competitors.
                    </p>
                  </div>
                </div>

                <div className="product-feature-item">
                  <div className="product-feature-icon">⚡</div>
                  <div className="product-feature-content">
                    <h3 className="product-feature-title">One-Click Import</h3>
                    <p className="product-feature-description">
                      Push products to Shopify instantly with automated pricing
                      and descriptions.
                    </p>
                  </div>
                </div>

                <div className="product-feature-item">
                  <div className="product-feature-icon">📊</div>
                  <div className="product-feature-content">
                    <h3 className="product-feature-title">Smart Dashboard</h3>
                    <p className="product-feature-description">
                      Track performance, profit margins, and trends in
                      real-time analytics.
                    </p>
                  </div>
                </div>

                <div className="product-feature-item">
                  <div className="product-feature-icon">🌍</div>
                  <div className="product-feature-content">
                    <h3 className="product-feature-title">Global Scaling</h3>
                    <p className="product-feature-description">
                      Go from India to US with ready integrations and
                      multi-currency support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary CTA */}
              <button className="product-cta-secondary">
                <span>See It in Action</span>
                <svg
                  className="product-cta-icon"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Social Proof */}
      <section className="social-proof-section">
        <div className="social-proof-container">
          {/* Header */}
          <div className="social-proof-header">
            <h2 className="social-proof-heading">
              Trusted by{" "}
              <span className="hero-gradient-text">Real Brands</span>.{" "}
              Scaling Globally.
            </h2>
            <p className="social-proof-subtext">
              From US to India, retailers and founders are using USDrop Ai to
              launch and scale their stores — faster and smarter.
            </p>
          </div>

          {/* Stats Row */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-value">1,000+</div>
              <div className="stat-label">Brands Scaling</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📦</div>
              <div className="stat-value">50K+</div>
              <div className="stat-label">Products Researched</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-value">$2M+</div>
              <div className="stat-label">Revenue Generated</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🌍</div>
              <div className="stat-value">30+</div>
              <div className="stat-label">Countries Served</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "We imported our first 20 products within minutes. Saved us
                weeks of work and the AI recommendations were spot on."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">EL</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">Emma Lopez</div>
                  <div className="testimonial-role">
                    <span>US Retailer</span>
                    <span className="testimonial-flag">🇺🇸</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Finally, a platform that understands dropshipping. The
                dashboard gives me everything I need to make smart decisions."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">RS</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">Rajesh Singh</div>
                  <div className="testimonial-role">
                    <span>Founder, Mumbai</span>
                    <span className="testimonial-flag">🇮🇳</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-quote">
                "From finding products to launching on Shopify, everything is
                automated. This is the future of dropshipping."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MC</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">Maria Chen</div>
                  <div className="testimonial-role">
                    <span>E-commerce Owner</span>
                    <span className="testimonial-flag">🇨🇦</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Strip */}
          <div className="logo-strip-wrapper">
            <div className="logo-strip-caption">
              Powering brands on Shopify, Faire, and beyond
            </div>
            <div className="logo-strip">
              <div className="logo-item">
                <div className="logo-placeholder">Shopify</div>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">Faire</div>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">WooCommerce</div>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">BigCommerce</div>
              </div>
              <div className="logo-item">
                <div className="logo-placeholder">Wix</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          {/* Header */}
          <div className="how-it-works-header">
            <h2 className="how-it-works-heading">
              Scale in{" "}
              <span className="hero-gradient-text">3 Simple Steps</span>.
            </h2>
            <p className="how-it-works-subtext">
              No messy imports. No guesswork. Just find, launch, and scale.
            </p>
          </div>

          {/* Steps */}
          <div className="steps-grid">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon-wrapper">🔍</div>
              <div className="step-content">
                <h3 className="step-title">Discover Winning Products</h3>
                <p className="step-description">
                  AI finds the products your customers actually want — trending
                  items before your competitors.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon-wrapper">⚡</div>
              <div className="step-content">
                <h3 className="step-title">One-Click Import</h3>
                <p className="step-description">
                  Push products straight to Shopify or Faire — instantly with
                  automated pricing and descriptions.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon-wrapper">🚀</div>
              <div className="step-content">
                <h3 className="step-title">Launch & Scale</h3>
                <p className="step-description">
                  Track performance, margins, and scale globally — all in one
                  dashboard with real-time analytics.
                </p>
              </div>
            </div>
          </div>

          {/* Optional CTA */}
          <div className="how-it-works-cta">
            <p className="how-it-works-cta-text">
              Ready to simplify your dropshipping?
            </p>
            <button className="btn-hero-primary">
              <span>Start Free Trial</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Pricing Plans */}
      <section className="pricing-section">
        <div className="pricing-container">
          {/* Header */}
          <div className="pricing-header">
            <h2 className="pricing-heading">
              Simple Pricing.{" "}
              <span className="hero-gradient-text">Scale at Your Speed.</span>
            </h2>
            <p className="pricing-subtext">
              Start free. Upgrade as you grow. No hidden fees.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="pricing-grid">
            {/* Starter Plan */}
            <div className="pricing-card">
              <div className="pricing-plan-icon">🔹</div>
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
                    AI Product Discovery (Limited)
                  </span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    10 Imports / month
                  </span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">Community Access</span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    Basic Analytics
                  </span>
                </div>
              </div>

              <button className="pricing-cta-free">Start Free</button>
            </div>

            {/* Growth Plan (Highlighted) */}
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
                    Unlimited AI Product Discovery
                  </span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    100 Imports / month
                  </span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    Dashboard Analytics
                  </span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">Priority Support</span>
                </div>
              </div>

              <button className="pricing-cta-highlighted">Start Scaling</button>
            </div>

            {/* Pro Plan */}
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
                    Advanced Analytics + Integrations
                  </span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    Multi-Store Management
                  </span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-feature-check">✓</div>
                  <span className="pricing-feature-text">
                    Dedicated Account Manager
                  </span>
                </div>
              </div>

              <button className="pricing-cta-pro">Go Pro</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="final-cta-section">
        {/* Background Effects */}
        <div className="final-cta-background"></div>
        <div className="final-cta-grid"></div>

        {/* Meteors */}
        <div className="final-cta-meteors">
          <div className="final-cta-meteor"></div>
          <div className="final-cta-meteor"></div>
          <div className="final-cta-meteor"></div>
        </div>

        {/* Content */}
        <div className="final-cta-container">
          <div className="final-cta-content">
            <h2 className="final-cta-heading">
              Your Dropshipping Empire{" "}
              <span className="hero-gradient-text">Starts Here</span>.
            </h2>

            <p className="final-cta-subtext">
              Thousands are scaling smarter with USDrop Ai. Don't stay behind.
            </p>

            {/* CTA Buttons */}
            <div className="final-cta-buttons">
              <button className="final-cta-primary">
                <span>Start Free Today</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="final-cta-secondary">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66667 5.83333L13.3333 10L6.66667 14.1667V5.83333Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>See Dashboard Demo</span>
              </button>
            </div>

            {/* Trust Line */}
            <p className="final-cta-trust">
              <span className="final-cta-trust-highlight">
                ✓ No credit card required
              </span>{" "}
              · 14-day trial · Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

