"use client";

import * as React from "react";

interface LoaderProps {
  size?: number;
  text?: string;
}

export const AILoader: React.FC<LoaderProps> = ({
  size = 160,
  text = "Loading",
}) => {
  const letters = text.split("");

  return (
    <div className="flex items-center justify-center py-20">
      <div
        className="relative flex items-center justify-center font-sans select-none"
        style={{ width: size, height: size }}
      >
        {/* Animated Text */}
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block text-[#1E40AF] opacity-50 animate-loaderLetter text-sm font-medium"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {letter}
          </span>
        ))}

        {/* Animated Circle */}
        <div className="absolute inset-0 rounded-full animate-loaderCircle"></div>
      </div>

      <style jsx>{`
        @keyframes loaderCircle {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 4px 8px 0 #3b82f6 inset,
              0 8px 12px 0 #1e40af inset,
              0 24px 24px 0 #1e3a8a inset,
              0 0 2px 1px rgba(59, 130, 246, 0.3),
              0 0 4px 1.5px rgba(30, 64, 175, 0.2);
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 4px 8px 0 #60a5fa inset,
              0 8px 4px 0 #2563eb inset,
              0 16px 24px 0 #1e40af inset,
              0 0 2px 1px rgba(59, 130, 246, 0.3),
              0 0 4px 1.5px rgba(30, 64, 175, 0.2);
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 4px 8px 0 #3b82f6 inset,
              0 8px 12px 0 #1e40af inset,
              0 24px 24px 0 #1e3a8a inset,
              0 0 2px 1px rgba(59, 130, 246, 0.3),
              0 0 4px 1.5px rgba(30, 64, 175, 0.2);
          }
        }

        @keyframes loaderLetter {
          0%,
          100% {
            opacity: 0.3;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateY(-2px) scale(1.1);
          }
        }

        .animate-loaderCircle {
          animation: loaderCircle 3s linear infinite;
        }

        .animate-loaderLetter {
          animation: loaderLetter 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

