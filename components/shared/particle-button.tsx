"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  life: number;
}

interface ParticleButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export function ParticleButton({ children, className, variant, size }: ParticleButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const particleIdRef = useRef(0);
  const animationRef = useRef<number>();

  const colors = ["#8B5CF6", "#518BF5", "#06B6D4", "#A78BFA", "#60A5FA"];

  useEffect(() => {
    if (!isHovered) {
      setParticles([]);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const createParticle = () => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const x = mousePos.x - rect.left;
      const y = mousePos.y - rect.top;

      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 2 + 1;

      const particle: Particle = {
        id: particleIdRef.current++,
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 1,
      };

      setParticles((prev) => [...prev, particle].slice(-30));
    };

    const animate = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0)
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    const interval = setInterval(createParticle, 50);
    animate();

    return () => {
      clearInterval(interval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div className="relative inline-block">
      {/* Gradient glow background */}
      {isHovered && (
        <div
          className="absolute inset-0 -z-10 animate-pulse"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.4), rgba(81, 139, 245, 0.3), transparent 70%)`,
            filter: "blur(20px)",
            transform: "scale(1.5)",
          }}
        />
      )}

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.life,
              transform: `translate(-50%, -50%)`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
          />
        ))}
      </div>

      {/* Button */}
      <Button
        ref={buttonRef}
        variant={variant}
        size={size}
        className={cn("relative transition-all duration-300", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
      </Button>
    </div>
  );
}

