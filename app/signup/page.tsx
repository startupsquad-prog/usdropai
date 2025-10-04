"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";

export default function SignupPage() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Glossy Blurred Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,64,175,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl">
        <Card className="overflow-hidden border-blue-500/20 bg-slate-900/40 backdrop-blur-xl shadow-2xl">
          <CardContent className="grid p-0 md:grid-cols-2">
            {/* Form Section */}
            <form className="p-6 md:p-8 space-y-6">
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-800 to-blue-600 shadow-lg"></div>
                    <span className="text-2xl font-bold text-white">US Drop</span>
                  </div>
                  <h1 className="text-2xl font-bold text-white">Create your account</h1>
                  <p className="text-slate-400 text-sm text-balance">
                    Enter your email below to create your account
                  </p>
                </div>

                <Field>
                  <FieldLabel htmlFor="email" className="text-white">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                  />
                  <FieldDescription className="text-slate-400">
                    We&apos;ll use this to contact you. We will not share your email with anyone else.
                  </FieldDescription>
                </Field>

                <Field>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="password" className="text-white">Password</FieldLabel>
                      <Input
                        id="password"
                        type="password"
                        required
                        className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="confirm-password" className="text-white">
                        Confirm Password
                      </FieldLabel>
                      <Input
                        id="confirm-password"
                        type="password"
                        required
                        className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                      />
                    </Field>
                  </div>
                  <FieldDescription className="text-slate-400">
                    Must be at least 8 characters long.
                  </FieldDescription>
                </Field>

                <Field>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 text-white shadow-lg shadow-blue-500/50"
                  >
                    Create Account
                  </Button>
                </Field>

                <FieldSeparator className="text-slate-400">
                  Or continue with
                </FieldSeparator>

                <Field className="grid grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    type="button"
                    className="bg-slate-800/50 border-blue-500/30 text-white hover:bg-slate-800 hover:border-blue-500/50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                      <path
                        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="sr-only">Sign up with Apple</span>
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    className="bg-slate-800/50 border-blue-500/30 text-white hover:bg-slate-800 hover:border-blue-500/50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="sr-only">Sign up with Google</span>
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    className="bg-slate-800/50 border-blue-500/30 text-white hover:bg-slate-800 hover:border-blue-500/50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                      <path
                        d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="sr-only">Sign up with Meta</span>
                  </Button>
                </Field>

                <FieldDescription className="text-center text-slate-400">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                    Sign in
                  </Link>
                </FieldDescription>
              </FieldGroup>
            </form>

            {/* Illustration Section */}
            <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-slate-900/50 p-8 backdrop-blur-sm border-l border-blue-500/20">
              <div className="relative z-10 text-center space-y-6">
                {/* AI Illustration Placeholder */}
                <div className="relative w-full h-64 rounded-lg bg-gradient-to-br from-blue-800/30 to-blue-600/30 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center overflow-hidden">
                  {/* Abstract shapes */}
                  <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500/20 blur-xl"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-xl"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 text-center">
                    <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">
                    Start Scaling Today
                  </h2>
                  <p className="text-slate-300 text-sm">
                    Join 1000+ brands using AI to find winning products and scale their dropshipping business.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 text-left">
                  {[
                    "AI-powered product discovery",
                    "One-click import to stores",
                    "Real-time analytics dashboard",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms */}
        <FieldDescription className="px-6 text-center mt-6 text-slate-400">
          By clicking continue, you agree to our{" "}
          <Link href="/terms" className="text-blue-400 hover:text-blue-300">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
            Privacy Policy
          </Link>
          .
        </FieldDescription>
      </div>
    </div>
  );
}

