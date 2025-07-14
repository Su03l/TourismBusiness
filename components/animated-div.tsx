"use client"

import type React from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface AnimatedDivProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  children: React.ReactNode
}

export function AnimatedDiv({ direction = "up", delay = 0, children, className, ...props }: AnimatedDivProps) {
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
  })

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-10"
      case "down":
        return "-translate-y-10"
      case "left":
        return "-translate-x-10"
      case "right":
        return "translate-x-10"
      default:
        return "translate-y-10"
    }
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${getInitialTransform()}`,
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}
