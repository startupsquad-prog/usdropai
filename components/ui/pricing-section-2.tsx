"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { Check } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function PricingSection() {
  const pricingRef = useRef<HTMLElement>(null);
  
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.4,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const starterFeatures = [
    "Access to AI Product Discovery",
    "Up to 25 products per month",
    "Basic analytics dashboard",
    "Community support",
    "1 store integration",
  ];

  const professionalFeatures = [
    "Unlimited AI Product Discovery",
    "Up to 250 products per month",
    "Advanced analytics & insights",
    "Priority email support",
    "Up to 3 store integrations",
    "Automated pricing optimization",
    "Trending product alerts",
  ];

  const plusFeatures = [
    "Everything in Professional",
    "Up to 1,000 products per month",
    "Dedicated account manager",
    "Up to 10 store integrations",
    "Custom branding options",
    "API access",
    "Bulk import tools",
    "Competitor analysis",
  ];

  const enterpriseFeatures = [
    "Everything in Plus",
    "Unlimited products",
    "White-label solution",
    "Unlimited store integrations",
    "Custom AI training",
    "24/7 phone support",
    "Dedicated onboarding",
    "Custom integrations",
  ];

  return (
    <section
      className="py-16 px-4 bg-white w-full relative min-h-screen"
      ref={pricingRef}
    >
      {/* Grid Background */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#1E40AF0d_1px,transparent_1px),linear-gradient(to_bottom,#1E40AF0d_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <article className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0,
              }}
            >
              Simple Pricing. Scale at Your Speed.
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-gray-600 text-lg"
          >
            Start free. Upgrade as you grow. No hidden fees.
          </TimelineContent>
        </article>

        <div className="grid md:grid-cols-4 gap-4 items-end">
          {/* Starter Plan */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-white p-0 h-full border-2 border-gray-200 hover:border-[#1E40AF] transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-left py-5 border-b bg-gradient-to-br from-gray-50 to-white border-gray-200 rounded-t-lg">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">For Beginners</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Starter</h3>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">
                    $0
                  </span>
                  <span className="text-gray-600 mb-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="py-6 px-5">
                <ul className="space-y-3 mb-6">
                  {starterFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/auth/signup">
                  <button className="w-full py-2.5 px-4 rounded-md bg-white border-2 border-[#1E40AF] text-[#1E40AF] font-semibold hover:bg-[#1E40AF] hover:text-white transition-all duration-200">
                    Start Free
                  </button>
                </Link>
              </CardContent>
            </Card>
          </TimelineContent>

          {/* Professional Plan */}
          <TimelineContent
            as="div"
            animationNum={2}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-white p-0 h-full border-2 border-gray-200 hover:border-[#3B82F6] transition-all duration-300 hover:shadow-xl">
              <CardHeader className="py-5 border-b bg-gradient-to-br from-blue-50 to-white border-gray-200 rounded-t-lg">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-[#3B82F6] uppercase tracking-wide">Best Value</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional</h3>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">$49</span>
                  <span className="text-gray-600 mb-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="py-6 px-5">
                <ul className="space-y-3 mb-6">
                  {professionalFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/auth/signup">
                  <button className="w-full py-2.5 px-4 rounded-md bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white font-semibold hover:shadow-lg hover:shadow-[#3B82F6]/50 transition-all duration-200">
                    Start Scaling
                  </button>
                </Link>
              </CardContent>
            </Card>
          </TimelineContent>

          {/* Plus Plan - Popular */}
          <TimelineContent
            as="div"
            animationNum={3}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] p-0 rounded-lg shadow-2xl relative h-full border-2 border-[#3B82F6] scale-105 md:scale-110">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                  Most Popular
                </span>
              </div>
              <CardHeader className="py-6 px-5 bg-[#1E3A8A] rounded-t-lg">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-blue-200 uppercase tracking-wide">For Growing Brands</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Plus</h3>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold text-white">$149</span>
                  <span className="text-blue-100 mb-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="py-6 px-5">
                <ul className="space-y-3 mb-6">
                  {plusFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-white">
                      <Check className="w-5 h-5 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/auth/signup">
                  <button className="w-full py-2.5 px-4 border-2 border-white rounded-md bg-white text-[#1E40AF] font-bold hover:bg-transparent hover:text-white transition-all duration-200">
                    Go Plus
                  </button>
                </Link>
              </CardContent>
            </Card>
          </TimelineContent>

          {/* Enterprise Plan */}
          <TimelineContent
            as="div"
            animationNum={4}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-white p-0 h-full border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-left py-5 border-b bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 rounded-t-lg">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">For Enterprises</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Enterprise</h3>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="py-6 px-5">
                <ul className="space-y-3 mb-6">
                  {enterpriseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/auth/signup">
                  <button className="w-full py-2.5 px-4 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-200">
                    Contact Sales
                  </button>
                </Link>
              </CardContent>
            </Card>
          </TimelineContent>
        </div>

        {/* Trust Line */}
        <TimelineContent
          as="div"
          animationNum={5}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-[#1E40AF]">✓ No credit card required</span>
            {" · "}14-day trial{" · "}Cancel anytime
          </p>
        </TimelineContent>
      </div>
    </section>
  );
}

