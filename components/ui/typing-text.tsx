"use client";

import React, { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed = 30,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-4 bg-[#1E40AF] ml-0.5 animate-pulse" />
      )}
    </span>
  );
};

