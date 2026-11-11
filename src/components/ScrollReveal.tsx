import React, { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
}) => {
  const delayClass =
    delay === 100
      ? 'reveal-delay-100'
      : delay === 200
      ? 'reveal-delay-200'
      : delay === 300
      ? 'reveal-delay-300'
      : delay === 400
      ? 'reveal-delay-400'
      : '';

  return (
    <Component className={`reveal-on-scroll ${delayClass} ${className}`}>
      {children}
    </Component>
  );
};
