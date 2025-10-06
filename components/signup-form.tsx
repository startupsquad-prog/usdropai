"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Loader2, Check, Sparkles } from "lucide-react";
import Link from "next/link";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    setPasswordMatch(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
          password: password,
          fullName: formData.get("name"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(true);
        setTimeout(() => router.push("/dashboard"), 2000);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-2 border-gray-200 shadow-xl">
        <CardHeader className="text-center space-y-2 pb-6">
          <div className="flex justify-center mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1E40AF]/10 to-[#3B82F6]/10 border border-[#1E40AF]/20">
              <Sparkles className="w-4 h-4 text-[#1E40AF]" />
              <span className="text-sm font-semibold text-[#1E40AF]">
                14-day free trial
              </span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            Create your account
          </CardTitle>
          <CardDescription className="text-base">
            Start scaling your dropshipping business today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              {/* Success Message */}
              {success && (
                <div className="p-4 rounded-lg bg-green-50 border-2 border-green-200 flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-green-900">
                      Account created successfully!
                    </p>
                    <p className="text-xs text-green-700 mt-0.5">
                      Redirecting to dashboard...
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-4 rounded-lg bg-red-50 border-2 border-red-200">
                  <p className="text-sm font-semibold text-red-900">{error}</p>
                </div>
              )}

              {/* Full Name */}
              <Field>
                <FieldLabel htmlFor="name" className="font-medium">
                  Full Name
                </FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="h-11 border-gray-300 focus-visible:ring-[#1E40AF] focus-visible:ring-2"
                />
              </Field>

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email" className="font-medium">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="h-11 border-gray-300 focus-visible:ring-[#1E40AF] focus-visible:ring-2"
                />
              </Field>

              {/* Password Fields */}
              <Field>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password" className="font-medium">
                      Password
                    </FieldLabel>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      minLength={8}
                      className={cn(
                        "h-11 border-gray-300 focus-visible:ring-[#1E40AF] focus-visible:ring-2",
                        !passwordMatch && "border-red-500"
                      )}
                    />
                  </Field>
                  <Field>
                    <FieldLabel
                      htmlFor="confirm-password"
                      className="font-medium"
                    >
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      required
                      minLength={8}
                      className={cn(
                        "h-11 border-gray-300 focus-visible:ring-[#1E40AF] focus-visible:ring-2",
                        !passwordMatch && "border-red-500"
                      )}
                    />
                  </Field>
                </div>
                <FieldDescription className="text-gray-600">
                  Must be at least 8 characters long
                </FieldDescription>
              </Field>

              {/* Submit Button */}
              <Field className="pt-2">
                <Button
                  type="submit"
                  disabled={loading || success}
                  className="w-full h-12 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] hover:from-[#1E3A8A] hover:to-[#2563EB] text-white font-semibold text-base shadow-lg shadow-[#3B82F6]/30 transition-all"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Creating Account...
                    </>
                  ) : success ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Account Created!
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Start Free Trial
                    </>
                  )}
                </Button>
                <FieldDescription className="text-center text-gray-600 pt-4">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="text-[#1E40AF] font-semibold hover:underline"
                  >
                    Sign in
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center text-gray-600">
        By clicking continue, you agree to our{" "}
        <Link href="/terms" className="text-[#1E40AF] hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-[#1E40AF] hover:underline">
          Privacy Policy
        </Link>
        .
      </FieldDescription>
    </div>
  );
}

