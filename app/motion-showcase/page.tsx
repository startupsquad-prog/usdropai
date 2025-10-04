"use client";

/**
 * Motion Showcase
 * Preview all animations and transitions across the site
 * QA tool for reviewing professional motion system
 */

import { motion } from "lib/motion/motion.config";

export default function MotionShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <h1 className="text-3xl font-bold text-white">
            Motion Showcase <span className="text-blue-400">& QA</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Professional Animation System · 0.2s-0.6s · cubic-bezier(0.4, 0, 0.2, 1)
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-7xl space-y-12">
        {/* Section 1: Entry Animations */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Entry Animations</h2>
            <p className="text-slate-400">
              Subtle, professional fade-ins. No bounce, no excess.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded space-y-4">
              <h3 className="text-white font-semibold">Fade In</h3>
              <div className="animate-fade-in bg-gradient-to-r from-blue-800 to-blue-600 p-4 rounded text-white text-center">
                0.4s · smooth
              </div>
              <code className="text-xs text-slate-400 block">
                .animate-fade-in
              </code>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded space-y-4">
              <h3 className="text-white font-semibold">Fade In Up</h3>
              <div className="animate-fade-in-up bg-gradient-to-r from-blue-800 to-blue-600 p-4 rounded text-white text-center">
                0.5s · 20px lift
              </div>
              <code className="text-xs text-slate-400 block">
                .animate-fade-in-up
              </code>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded space-y-4">
              <h3 className="text-white font-semibold">Scale In</h3>
              <div className="animate-scale-in bg-gradient-to-r from-blue-800 to-blue-600 p-4 rounded text-white text-center">
                0.4s · 0.95→1
              </div>
              <code className="text-xs text-slate-400 block">
                .animate-scale-in
              </code>
            </div>
          </div>
        </section>

        {/* Section 2: Staggered Animations */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Staggered Entries</h2>
            <p className="text-slate-400">
              Elements appear in sequence, 150ms apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`animate-slide-in-left animate-delay-${i * 100 + 100} bg-slate-800/50 border border-slate-700 p-6 rounded text-center`}
              >
                <div className="text-3xl mb-2">🔹</div>
                <div className="text-white font-semibold">Step {i + 1}</div>
                <div className="text-slate-400 text-sm mt-2">
                  Delay: {i * 0.1}s
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Hover Micro-animations */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Hover Micro-animations
            </h2>
            <p className="text-slate-400">
              Subtle, intentional. 0.2s transitions only.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Button Scale (1.02x)</h3>
              <button className="hover-scale bg-gradient-to-r from-blue-800 to-blue-600 p-4 rounded text-white w-full font-semibold">
                Hover Me
              </button>
              <code className="text-xs text-slate-400 block">
                .hover-scale
              </code>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Card Lift (-2px)</h3>
              <div className="hover-lift bg-slate-800/50 border border-slate-700 p-6 rounded text-white text-center cursor-pointer">
                Hover Me
              </div>
              <code className="text-xs text-slate-400 block">
                .hover-lift
              </code>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Icon Scale (1.1x)</h3>
              <div className="flex justify-center">
                <div className="hover-scale bg-slate-800/50 border border-slate-700 p-6 rounded cursor-pointer">
                  <div className="text-4xl">⚡</div>
                </div>
              </div>
              <code className="text-xs text-slate-400 block text-center">
                .hover-scale
              </code>
            </div>
          </div>
        </section>

        {/* Section 4: Continuous Animations */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Continuous Animations
            </h2>
            <p className="text-slate-400">
              Subtle background effects. Never distracting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded space-y-4">
              <h3 className="text-white font-semibold">Meteor Drift</h3>
              <div className="relative h-32 bg-slate-900 rounded overflow-hidden">
                <div className="animate-meteor absolute w-2 h-2 bg-blue-400 rounded-full top-0 left-full"></div>
                <div
                  className="animate-meteor absolute w-2 h-2 bg-blue-400 rounded-full top-10 left-full"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="animate-meteor absolute w-2 h-2 bg-blue-400 rounded-full top-20 left-full"
                  style={{ animationDelay: "4s" }}
                ></div>
              </div>
              <code className="text-xs text-slate-400 block">
                8s linear infinite
              </code>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded space-y-4">
              <h3 className="text-white font-semibold">Logo Scroll</h3>
              <div className="relative h-32 bg-slate-900 rounded overflow-hidden flex items-center">
                <div className="animate-logo-scroll flex gap-8 px-4">
                  <div className="text-4xl flex-shrink-0">🔵</div>
                  <div className="text-4xl flex-shrink-0">🔷</div>
                  <div className="text-4xl flex-shrink-0">💎</div>
                  <div className="text-4xl flex-shrink-0">🌐</div>
                  <div className="text-4xl flex-shrink-0">⚡</div>
                  <div className="text-4xl flex-shrink-0">🔵</div>
                  <div className="text-4xl flex-shrink-0">🔷</div>
                  <div className="text-4xl flex-shrink-0">💎</div>
                </div>
              </div>
              <code className="text-xs text-slate-400 block">
                20s linear infinite
              </code>
            </div>
          </div>
        </section>

        {/* Section 5: Real-world Examples */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Real-world Components
            </h2>
            <p className="text-slate-400">
              How animations appear in actual sections.
            </p>
          </div>

          <div className="space-y-8">
            {/* Hero Example */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8">
              <div className="text-center space-y-6 max-w-3xl mx-auto">
                <div className="animate-scale-in inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  1000+ brands building
                </div>

                <h1 className="animate-fade-in-up text-4xl md:text-5xl font-bold text-white">
                  Stop Hunting Products.{" "}
                  <span className="text-gradient-to-r from-blue-400 to-cyan-400">
                    Start Scaling.
                  </span>
                </h1>

                <p className="animate-fade-in-up animate-delay-200 text-lg text-slate-300">
                  UsDrop Ai finds, imports, and launches your winning products —
                  faster than ever.
                </p>

                <div className="animate-fade-in-up animate-delay-300 flex gap-4 justify-center flex-wrap">
                  <button className="hover-scale bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-3 rounded text-white font-semibold">
                    Start Free
                  </button>
                  <button className="hover-lift bg-slate-800/50 border border-slate-600 px-6 py-3 rounded text-white font-semibold">
                    See Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Cards Example */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🔍", title: "Discover", delay: 0 },
                { icon: "⚡", title: "Import", delay: 150 },
                { icon: "🚀", title: "Scale", delay: 300 },
              ].map((feature, i) => (
                <div
                  key={i}
                  className={`animate-fade-in-up animate-delay-${i * 100 + 100} hover-lift bg-slate-800/30 border border-slate-700 p-6 rounded cursor-pointer`}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">
                    Professional motion with intentional timing.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Motion Rules Reference */}
        <section className="space-y-6 pb-12">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Motion Rules</h2>
            <p className="text-slate-400">Professional SaaS standards.</p>
          </div>

          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  ✅ Do This
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Duration: 0.2s-0.6s (short & snappy)</li>
                  <li>• Easing: cubic-bezier(0.4, 0, 0.2, 1)</li>
                  <li>• Stagger delays: 100-150ms apart</li>
                  <li>• Hover: scale 1.02, lift -2px</li>
                  <li>• Fade-in only, no slide/bounce</li>
                  <li>• Animate once, not on every scroll</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  ❌ Don't Do This
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Excessive bounce/spring effects</li>
                  <li>• Animations longer than 0.8s</li>
                  <li>• Random slide directions per card</li>
                  <li>• Rotate/spin on hover (icons)</li>
                  <li>• Pulsing/breathing effects</li>
                  <li>• Animate-on-scroll every time</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

