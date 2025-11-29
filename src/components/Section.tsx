"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({ id, children, className, title, subtitle }: SectionProps) {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id={id}
      ref={elementRef as React.RefObject<HTMLElement> | null}
      className={cn(
        "relative py-20 md:py-32 transition-opacity duration-700",
        hasIntersected ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16">
            {subtitle && (
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <p className="text-sm text-primary font-semibold uppercase tracking-wider">
                  {subtitle}
                </p>
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

