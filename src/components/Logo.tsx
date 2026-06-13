import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSmudge?: boolean;
}

export default function Logo({ size = 'md', showSmudge = true }: LogoProps) {
  const sizeClasses = {
    sm: {
      container: "w-16 h-16",
      circle: "border",
      title: "text-md",
      subtitle: "text-[5px] tracking-[0.2em]",
      dots: "w-0.5 h-0.5 mx-0.5-offset",
      leafSize: "w-6 h-3"
    },
    md: {
      container: "w-32 h-32",
      circle: "border-[1.2px]",
      title: "text-[21px]",
      subtitle: "text-[7.5px] tracking-[0.25em] -mt-1",
      dots: "w-1 h-1 mx-0.5",
      leafSize: "w-14 h-6"
    },
    lg: {
      container: "w-52 h-52",
      circle: "border-[1.5px]",
      title: "text-[34px]",
      subtitle: "text-[12px] tracking-[0.3em] -mt-2",
      dots: "w-1.5 h-1.5 mx-0.75",
      leafSize: "w-24 h-10"
    }
  };

  const selected = sizeClasses[size];

  return (
    <div className={`relative flex items-center justify-center select-none ${selected.container}`} id="app-logo">
      {/* 1. Organic Soft Lavender Watercolor Smudge */}
      {showSmudge && (
        <div 
          className="absolute inset-0 rounded-full bg-brand-lavender opacity-85 mix-blend-multiply blur-xl transform scale-110"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(214,202,227,0.7) 0%, rgba(241,236,246,0.3) 70%, rgba(254,253,253,0) 100%)',
          }}
        />
      )}

      {/* 2. Delicate Thin Circular Frame */}
      <div className={`absolute inset-2 rounded-full border-brand-charcoal/45 flex flex-col items-center justify-center ${selected.circle}`}>
        
        {/* 3. Tiny Beads (Dots) at the top of the circle */}
        <div className="absolute top-[4%] flex space-x-1">
          <div className={`rounded-full bg-brand-charcoal/80 ${size === 'sm' ? 'w-0.5 h-0.5' : size === 'lg' ? 'w-1.5 h-1.5' : 'w-1 h-1'}`} />
          <div className={`rounded-full bg-brand-charcoal/80 ${size === 'sm' ? 'w-0.5 h-0.5' : size === 'lg' ? 'w-1.5 h-1.5' : 'w-1 h-1'}`} />
          <div className={`rounded-full bg-brand-charcoal/80 ${size === 'sm' ? 'w-0.5 h-0.5' : size === 'lg' ? 'w-1.5 h-1.5' : 'w-1 h-1'}`} />
          <div className={`rounded-full bg-brand-charcoal/80 ${size === 'sm' ? 'w-0.5 h-0.5' : size === 'lg' ? 'w-1.5 h-1.5' : 'w-1 h-1'}`} />
        </div>

        {/* 4. Elegant Text Elements */}
        <div className="text-center z-10 flex flex-col items-center justify-center px-4">
          <span 
            className={`font-cursive text-brand-charcoal capitalize ${selected.title}`}
            style={{ fontFamily: '"Alex Brush", cursive' }}
          >
            Spring nail salon
          </span>
          <span 
            className={`font-sans font-semibold text-brand-charcoal/70 uppercase ${selected.subtitle}`}
          >
            ART & SPA
          </span>
        </div>

        {/* 5. Custom Botanical Leaf Sprig path at the bottom of the circle */}
        <div className="absolute bottom-[3%] text-brand-charcoal/75">
          <svg 
            viewBox="0 0 100 30" 
            className={`${size === 'sm' ? 'w-10' : size === 'lg' ? 'w-32' : 'w-18'} h-auto`}
            fill="currentColor"
          >
            {/* Elegant organic hand-drawn style leaf sprig */}
            <path 
              d="M10,18 Q50,11 90,18" 
              stroke="currentColor" 
              strokeWidth="0.8" 
              fill="none" 
            />
            {/* Left side leaves */}
            <path d="M25,16 Q18,8 26,14 C27,15 28,16 25,16 Z" />
            <path d="M35,15 Q30,6 38,13 C39,14 40,15 35,15 Z" />
            <path d="M45,14 Q40,4 47,12 Q48,13 45,14 Z" />
            
            {/* Right side leaves */}
            <path d="M75,16 Q82,8 74,14 C73,15 72,16 75,16 Z" />
            <path d="M65,15 Q70,6 62,13 C61,14 60,15 65,15 Z" />
            <path d="M55,14 Q60,4 53,12 Q52,13 55,14 Z" />
            
            {/* Center leaf pointing up */}
            <path d="M50,13 Q50,2 48,10 Q50,13 50,13 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
