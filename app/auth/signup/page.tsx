import { SignupForm } from "@/components/signup-form";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E40AF08_1px,transparent_1px),linear-gradient(to_bottom,#1E40AF08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="flex w-full max-w-md flex-col gap-6 relative z-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-bold text-gray-900"
        >
          <div className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] text-white flex size-10 items-center justify-center rounded-md shadow-lg shadow-[#3B82F6]/30">
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-xl">
            UsDrop{" "}
            <span className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">
              Ai
            </span>
          </span>
        </Link>

        {/* Signup Form */}
        <SignupForm />
      </div>
    </div>
  );
}

