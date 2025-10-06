'use client'

import { motion } from "framer-motion"
import { RefObject, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TimelineContentProps {
  children: React.ReactNode
  as?: keyof React.JSX.IntrinsicElements
  animationNum: number
  timelineRef: RefObject<HTMLElement>
  customVariants?: {
    hidden: any
    visible: (i: number) => any
  }
  className?: string
}

export function TimelineContent({
  children,
  as: Component = "div",
  animationNum,
  timelineRef,
  customVariants,
  className,
}: TimelineContentProps) {
  const [isInView, setIsInView] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    )

    const currentElement = timelineRef.current || elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [timelineRef])

  const defaultVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  }

  const variants = customVariants || defaultVariants

  const MotionComponent = motion[Component as keyof typeof motion] as any

  return (
    <MotionComponent
      ref={elementRef}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  )
}

