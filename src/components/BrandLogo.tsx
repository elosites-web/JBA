import React from 'react';
import { siteConfig } from '../config/siteConfig';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  height?: number | string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  height = 56,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={siteConfig.brand.logoUrl}
        alt={siteConfig.brand.fullName}
        className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
        loading="eager"
        width="260"
        height="75"
      />
    </div>
  );
};
