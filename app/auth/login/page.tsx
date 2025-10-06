"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Loader2, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E40AF0d_1px,transparent_1px),linear-gradient(to_bottom,#1E40AF0d_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="border-2 border-gray-100 bg-white shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Header */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-10 w-10 rounded-md bg-gradient-to-br from-[#1E40AF] to-[#3B82F6]"></div>
                  <span className="text-2xl font-bold">
                    UsDrop <span className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">Ai</span>
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
                <p className="text-gray-600 text-sm">
                  Sign in to your account to continue
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 rounded-md bg-red-50 border border-red-200">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="email" className="text-gray-900 font-medium">
                    Email Address
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="h-10 border-gray-300 focus-visible:ring-[#1E40AF]"
                  />
                </Field>

                <Field>
                  <div className="flex items-center justify-between mb-2">
                    <FieldLabel htmlFor="password" className="text-gray-900 font-medium">
                      Password
                    </FieldLabel>
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm text-[#1E40AF] hover:underline"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="h-10 border-gray-300 focus-visible:ring-[#1E40AF]"
                  />
                </Field>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] hover:from-[#1E3A8A] hover:to-[#2563EB] text-white font-semibold text-base shadow-lg shadow-[#3B82F6]/30"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Signing In...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Sign In
                  </>
                )}
              </Button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-[#1E40AF] font-semibold hover:underline">
                  Start free trial
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

