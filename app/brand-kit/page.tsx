import { ParticleButton } from "@/components/shared/particle-button";

export default function BrandKitPage() {
  return (
    <div className="brand-page">
      {/* Header */}
      <div className="brand-header">
        <div className="brand-header-container">
          <div className="logo-container-inline">
            <div className="logo-blob-sm"></div>
          </div>
          <div>
            <h1 className="brand-header-title">
              UsDrop <span className="text-gradient-blue">Ai</span>
            </h1>
            <p className="brand-header-subtitle">Professional Brand Kit</p>
          </div>
        </div>
      </div>

      <div className="brand-container">
        {/* Logo Section */}
        <section className="section-compact">
          <h2 className="section-title-compact">Logo</h2>
          <div className="grid-2">
            {/* Light Background */}
            <div className="brand-card">
              <div className="logo-container">
                <div className="logo-container-inline">
                  <div className="logo-blob"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="logo-text-main">
                    UsDrop<span className="text-gradient-blue-cyan">Ai</span>
                  </h3>
                  <p className="logo-text-sub">Ai</p>
                </div>
              </div>
            </div>

            {/* Dark Background */}
            <div className="dark-card">
              <div className="dark-card-flex">
                <div className="logo-container">
                  <div className="logo-container-inline">
                    <div className="logo-blob"></div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="logo-text-main text-white">
                      UsDrop<span className="text-gradient-blue-cyan">Ai</span>
                    </h3>
                    <p className="logo-text-sub text-white">Ai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient Section */}
        <section className="section-compact">
          <h2 className="section-title-compact">Gradient</h2>
          <div className="brand-card-compact">
            <div className="gradient-bar"></div>
            <p className="color-swatch-label mt-2">
              Blue → Light Blue → Cyan
            </p>
          </div>
        </section>

        {/* Colors and Typography - Side by Side */}
        <section className="section-compact">
          <div className="grid-2">
            {/* Colors */}
            <div>
              <h2 className="section-title-compact">Colors</h2>
              <div className="brand-card-compact">
                <div className="swatch-container">
                  <div className="swatch-item">
                    <div className="color-swatch bg-brand-blue"></div>
                    <p className="color-swatch-label">#318BF5</p>
                  </div>
                  <div className="swatch-item">
                    <div className="color-swatch bg-brand-black"></div>
                    <p className="color-swatch-label">#Black</p>
                  </div>
                  <div className="swatch-item">
                    <div className="color-swatch bg-brand-blue"></div>
                    <p className="color-swatch-label">#518BF5</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h2 className="section-title-compact">Typography</h2>
              <div className="brand-card-compact">
                <div className="typography-demo">
                  <div className="typography-aa">Aa</div>
                  <p className="typography-label">Geist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons and Glass Cards - Side by Side */}
        <section className="section-compact">
          <div className="grid-2">
            {/* Buttons */}
            <div>
              <h2 className="section-title-compact">Buttons</h2>
              <div className="brand-card-compact">
                <div className="button-group">
                  <ParticleButton className="btn-primary">
                    Primary
                  </ParticleButton>
                  <ParticleButton variant="secondary">
                    Secondary
                  </ParticleButton>
                </div>
              </div>
            </div>

            {/* Glass Cards */}
            <div>
              <h2 className="section-title-compact">Glass Cards</h2>
              <div className="glass-demo-container">
                <div className="glass-card">
                  <p className="glass-demo-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Button Size Variants */}
        <section className="section-compact">
          <h2 className="section-title-compact">Button Sizes</h2>
          <div className="brand-card-compact">
            <div className="button-group-center">
              <ParticleButton className="btn-large">Large</ParticleButton>
              <ParticleButton className="btn-default">Default</ParticleButton>
              <ParticleButton className="btn-small">Small</ParticleButton>
            </div>
          </div>
        </section>

        {/* Interactive Demo - Compact */}
        <section className="section-compact">
          <h2 className="section-title-compact">Interactive Elements</h2>
          <div className="grid-3">
            <div className="brand-card-compact">
              <div className="demo-card">
                <div className="demo-icon"></div>
                <h3 className="demo-title">Gradient</h3>
                <ParticleButton className="btn-primary demo-button-full">
                  Try It
                </ParticleButton>
              </div>
            </div>

            <div className="brand-card-compact">
              <div className="demo-card">
                <div className="demo-icon-full"></div>
                <h3 className="demo-title">Particles</h3>
                <ParticleButton className="button-gradient demo-button-full">
                  Hover Me
                </ParticleButton>
              </div>
            </div>

            <div className="brand-card-compact">
              <div className="demo-card">
                <div className="demo-icon-animated"></div>
                <h3 className="demo-title">Animated</h3>
                <ParticleButton variant="outline" className="demo-button-full">
                  Interact
                </ParticleButton>
              </div>
            </div>
          </div>
        </section>

        {/* All Button Variants - Compact */}
        <section className="section-compact">
          <h2 className="section-title-compact">All Variants</h2>
          <div className="brand-card-compact">
            <div className="variants-section">
              <p className="variants-label">With Particles</p>
              <div className="button-group-wrap">
                <ParticleButton className="btn-primary">Default</ParticleButton>
                <ParticleButton variant="secondary">Secondary</ParticleButton>
                <ParticleButton variant="outline">Outline</ParticleButton>
                <ParticleButton variant="ghost">Ghost</ParticleButton>
              </div>
            </div>

            <div className="variants-section">
              <p className="variants-label">Custom</p>
              <div className="button-group-wrap">
                <ParticleButton className="button-gradient">Full</ParticleButton>
                <ParticleButton className="bg-gradient-blue-cyan">Cyan</ParticleButton>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Classes Reference - Compact */}
        <section className="section-compact pb-8">
          <h2 className="section-title-compact">CSS Classes</h2>
          <div className="brand-card-compact">
            <div className="css-reference-grid">
              <div>
                <p className="css-reference-title">Buttons</p>
                <code className="css-reference-code">
                  <span className="css-reference-line">.btn-large</span>
                  <span className="css-reference-line">.btn-default</span>
                  <span className="css-reference-line">.btn-small</span>
                  <span className="css-reference-line">.btn-primary</span>
                </code>
              </div>

              <div>
                <p className="css-reference-title">Gradients</p>
                <code className="css-reference-code">
                  <span className="css-reference-line">.text-gradient-brand</span>
                  <span className="css-reference-line">.bg-gradient-brand</span>
                  <span className="css-reference-line">.button-gradient</span>
                </code>
              </div>

              <div>
                <p className="css-reference-title">Glass</p>
                <code className="css-reference-code">
                  <span className="css-reference-line">.glass-card</span>
                  <span className="css-reference-line">.glass-card-dark</span>
                </code>
              </div>

              <div>
                <p className="css-reference-title">Logo</p>
                <code className="css-reference-code">
                  <span className="css-reference-line">.logo-blob</span>
                  <span className="css-reference-line">.logo-text-main</span>
                </code>
              </div>

              <div>
                <p className="css-reference-title">Effects</p>
                <code className="css-reference-code">
                  <span className="css-reference-line">.glow-blue</span>
                  <span className="css-reference-line">.glow-blue</span>
                  <span className="css-reference-line">.animate-gradient</span>
                </code>
              </div>

              <div>
                <p className="css-reference-title">Layout</p>
                <code className="css-reference-code">
                  <span className="css-reference-line">.brand-card</span>
                  <span className="css-reference-line">.section-compact</span>
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
