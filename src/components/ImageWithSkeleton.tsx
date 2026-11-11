import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  theme?: 'light' | 'dark';
  iconSize?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

/**
 * ImageWithSkeleton component
 * Displays a structured skeleton placeholder with animated shimmer effect
 * while heavy imagery loads, preventing layout shifts (CLS) and providing
 * smooth visual transitions.
 */
export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  theme = 'light',
  iconSize = 'md',
  children,
  onLoad,
  onError,
  ...imgProps
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isDark = theme === 'dark';

  const iconClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }[iconSize];

  return (
    <div
      className={`relative w-full overflow-hidden ${
        isDark ? 'bg-[#0A2F0D]' : 'bg-neutral-200'
      } ${containerClassName}`}
    >
      {/* Structured Skeleton Shimmer Placeholder */}
      {!isLoaded && !hasError && (
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center p-4 transition-opacity duration-300 pointer-events-none ${
            isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'
          }`}
          aria-hidden="true"
        >
          {/* Subtle Icon Placeholder */}
          <div
            className={`rounded-full p-3 flex items-center justify-center mb-2 animate-pulse ${
              isDark
                ? 'bg-[#165C2A]/60 text-emerald-400/80 shadow-inner'
                : 'bg-neutral-300/70 text-neutral-400 shadow-inner'
            }`}
          >
            <ImageIcon className={iconClasses} />
          </div>

          {/* Shimmer Placeholder bar */}
          <div
            className={`h-2.5 w-24 rounded-full animate-pulse ${
              isDark ? 'bg-[#165C2A]/50' : 'bg-neutral-300/60'
            }`}
          />
        </div>
      )}

      {/* Fallback on error */}
      {hasError && (
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center ${
            isDark ? 'bg-[#0A2F0D] text-emerald-300/60' : 'bg-neutral-100 text-neutral-400'
          }`}
          aria-label="Imagem indisponível"
        >
          <ImageIcon className={`${iconClasses} mb-2 opacity-50`} />
          <span className="text-xs font-medium">Imagem indisponível</span>
        </div>
      )}

      {/* Real Image */}
      <img
        src={src}
        alt={alt}
        onLoad={(e) => {
          setIsLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setHasError(true);
          onError?.(e);
        }}
        className={`w-full h-full object-cover transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
        } ${className}`}
        {...imgProps}
      />

      {/* Any overlaid elements (e.g., badges, gradients, overlays) */}
      {children}
    </div>
  );
};
