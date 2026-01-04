'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animationType = 'fade-in',
  delay = 0 
}: AnimatedSectionProps) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${animationType} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}


