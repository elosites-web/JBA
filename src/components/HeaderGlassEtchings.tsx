import React from 'react';

/**
 * Botanical Leaf Etchings for the Frosted Glass Header
 * 
 * Recreates the visual effect of wind-swept leaves and fine botanical
 * branches artistically etched / sandblasted into architectural glass.
 * Uses translucent, low-opacity strokes derived from the JBA palette:
 * - Etched glass silver/white
 * - Subtle lime/emerald foliage highlights (#77D100 / #2B921D)
 * - Whisper of crystal pool water (#4FD0FF)
 */
export const HeaderGlassEtchings: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0"
    >
      {/* Subtle glass reflection gradient overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-60"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at 20% 0%, rgba(119, 209, 0, 0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 70% at 85% 100%, rgba(79, 208, 255, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Panoramic SVG with etched botanical line-art */}
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle etch glow filter simulating frosted glass incision */}
          <filter id="glassEtchGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Gradients matching JBA brand palette */}
          <linearGradient id="etchBreeze1" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.02" />
            <stop offset="35%" stopColor="#77D100" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#4FD0FF" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="etchBreeze2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#77D100" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#E2E8F0" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="etchLeafLime" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.30" />
            <stop offset="50%" stopColor="#77D100" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#2B921D" stopOpacity="0.12" />
          </linearGradient>

          <linearGradient id="etchLeafSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.12" />
          </linearGradient>

          <linearGradient id="etchWaterWhisper" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FD0FF" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#0A84C9" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* ========================================================
            STREAM 1: Left-to-Center Breeze Current & Drifting Leaves
            (Positioned harmoniously to the right of the brand logo)
           ======================================================== */}
        <g filter="url(#glassEtchGlow)" className="opacity-90">
          {/* Main sweeping wind current line */}
          <path
            d="M 120 58 C 210 52, 280 26, 360 32 C 430 37, 490 62, 570 54 C 640 46, 700 24, 780 28"
            stroke="url(#etchBreeze1)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="400 4"
          />

          {/* Secondary wind filament with tiny air ripples */}
          <path
            d="M 140 68 C 230 63, 295 40, 380 43 C 450 46, 510 68, 590 62"
            stroke="url(#etchBreeze2)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />

          {/* Leaf 1 (Left - gracefully tilted with breeze) */}
          <g transform="translate(240, 36) rotate(-18)">
            {/* Outer contour */}
            <path
              d="M 0 0 C 12 -8, 24 -6, 32 0 C 24 8, 12 8, 0 0 Z"
              stroke="url(#etchLeafLime)"
              strokeWidth="1.1"
              fill="rgba(119, 209, 0, 0.04)"
            />
            {/* Central spine vein */}
            <path d="M 0 0 C 14 -1, 22 0, 32 0" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.75" />
            {/* Lateral veins */}
            <path d="M 9 -1.5 L 13 -4.5 M 16 -1 L 21 -4 M 23 -0.5 L 27 -2.5" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="0.6" />
            <path d="M 10 1.5 L 14 4.5 M 17 1 L 22 4" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="0.6" />
          </g>

          {/* Leaf 2 (Smaller companion leaflet tumbling in wind) */}
          <g transform="translate(310, 24) rotate(22)">
            <path
              d="M 0 0 C 8 -5, 16 -4, 22 0 C 16 5, 8 5, 0 0 Z"
              stroke="url(#etchLeafSilver)"
              strokeWidth="0.9"
              fill="rgba(255, 255, 255, 0.03)"
            />
            <path d="M 0 0 C 9 0, 16 0, 22 0" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.6" />
          </g>

          {/* Leaf 3 (Gliding along center breeze) */}
          <g transform="translate(470, 52) rotate(-8)">
            <path
              d="M 0 0 C 10 -7, 22 -5, 28 0 C 20 6, 10 6, 0 0 Z"
              stroke="url(#etchLeafLime)"
              strokeWidth="1"
              fill="rgba(119, 209, 0, 0.03)"
            />
            <path d="M 0 0 L 28 0" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.7" />
            <path d="M 8 -1.5 L 12 -4 M 15 -1 L 19 -3.5" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="0.5" />
            <path d="M 9 1.5 L 13 4 M 16 1 L 20 3.5" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="0.5" />
          </g>

          {/* Tiny drifting dew / pollen droplets */}
          <circle cx="210" cy="54" r="1" fill="#77D100" fillOpacity="0.25" />
          <circle cx="285" cy="30" r="1.2" fill="#FFFFFF" fillOpacity="0.30" />
          <circle cx="395" cy="40" r="0.8" fill="#4FD0FF" fillOpacity="0.25" />
          <circle cx="530" cy="60" r="1.1" fill="#FFFFFF" fillOpacity="0.25" />
        </g>

        {/* ========================================================
            STREAM 2: Center-Right to Far Right Wind Swirl & Branch
            (Flows organically around navigation and WhatsApp CTA)
           ======================================================== */}
        <g filter="url(#glassEtchGlow)" className="opacity-90">
          {/* Long sweeping upper wind wave */}
          <path
            d="M 820 45 C 910 28, 990 60, 1070 42 C 1140 26, 1220 56, 1310 35 C 1370 21, 1410 32, 1440 28"
            stroke="url(#etchBreeze1)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />

          {/* Complementary lower wind trail with aquatic pool curve */}
          <path
            d="M 860 62 C 940 54, 1010 68, 1090 56 C 1170 42, 1250 66, 1340 50 C 1390 42, 1425 48, 1440 45"
            stroke="url(#etchWaterWhisper)"
            strokeWidth="0.85"
            strokeLinecap="round"
          />

          {/* Stylized arched branch with multiple leaflets (Right zone) */}
          <g transform="translate(1120, 26)">
            {/* Main stem curve */}
            <path
              d="M 0 28 C 30 18, 65 14, 105 18 C 140 21, 175 16, 210 6"
              stroke="rgba(255, 255, 255, 0.22)"
              strokeWidth="0.95"
              strokeLinecap="round"
            />

            {/* Branch Leaf 1 (Top left) */}
            <path
              d="M 28 20 C 35 14, 43 15, 48 20 C 43 23, 35 23, 28 20 Z"
              stroke="url(#etchLeafLime)"
              strokeWidth="0.85"
              fill="rgba(119, 209, 0, 0.04)"
            />
            {/* Branch Leaf 2 (Bottom center) */}
            <path
              d="M 68 18 C 76 25, 85 24, 91 19 C 85 16, 76 15, 68 18 Z"
              stroke="url(#etchLeafSilver)"
              strokeWidth="0.85"
              fill="rgba(255, 255, 255, 0.03)"
            />
            {/* Branch Leaf 3 (Top right) */}
            <path
              d="M 108 17 C 118 10, 128 11, 134 18 C 128 21, 118 21, 108 17 Z"
              stroke="url(#etchLeafLime)"
              strokeWidth="0.9"
              fill="rgba(119, 209, 0, 0.04)"
            />
            {/* Branch Leaf 4 (Terminal delicate leaflet) */}
            <path
              d="M 152 18 C 164 12, 175 13, 182 17 C 174 21, 163 21, 152 18 Z"
              stroke="url(#etchLeafSilver)"
              strokeWidth="0.8"
            />
          </g>

          {/* Individual free-floating wind leaf near CTA */}
          <g transform="translate(1250, 48) rotate(-26)">
            <path
              d="M 0 0 C 11 -7, 21 -6, 28 0 C 20 7, 10 6, 0 0 Z"
              stroke="url(#etchLeafLime)"
              strokeWidth="1.05"
              fill="rgba(119, 209, 0, 0.04)"
            />
            <path d="M 0 0 L 28 0" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.65" />
            <path d="M 8 -1.5 L 12 -4 M 15 -1 L 19 -3.5" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="0.5" />
          </g>

          {/* Individual slender willow-style leaf floating upward */}
          <g transform="translate(980, 56) rotate(32)">
            <path
              d="M 0 0 C 10 -4, 22 -3, 30 0 C 22 4, 10 4, 0 0 Z"
              stroke="url(#etchLeafSilver)"
              strokeWidth="0.95"
              fill="rgba(255, 255, 255, 0.03)"
            />
            <path d="M 0 0 L 30 0" stroke="rgba(255, 255, 255, 0.22)" strokeWidth="0.6" />
          </g>

          {/* Tiny drifting wind particles */}
          <circle cx="890" cy="50" r="1.1" fill="#77D100" fillOpacity="0.25" />
          <circle cx="1030" cy="38" r="0.9" fill="#FFFFFF" fillOpacity="0.28" />
          <circle cx="1200" cy="52" r="1.3" fill="#4FD0FF" fillOpacity="0.25" />
          <circle cx="1370" cy="32" r="1" fill="#FFFFFF" fillOpacity="0.30" />
        </g>
      </svg>
    </div>
  );
};
