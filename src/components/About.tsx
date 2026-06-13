import React, { useState } from 'react';
import { Heart, Sparkles, Coffee, ShieldCheck, HelpCircle } from 'lucide-react';

export default function About() {
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100

  return (
    <section 
      id="about" 
      className="py-20 sm:py-24 bg-brand-beige relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & subtitle */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold font-bold block mb-3">Our Core Philosophy</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Where Precision Meets Peace of Mind
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Text Description */}
          <div className="lg:col-span-7 space-y-6 text-left" id="about-story-text">
            
            <h3 className="font-serif text-2xl text-brand-charcoal tracking-wide leading-snug">
              A gentle sanctuary designed for Queens professionals to slow down, relax, and heal.
            </h3>

            <p className="font-sans text-sm sm:text-md text-brand-charcoal/70 leading-relaxed">
              At <strong>88 Spring Nail & Spa</strong>, we believe nail care shouldn't feel like a fast-paced assembly line. Founded in Queens, NY, our salon is a dedicated escape where clients can leave their worries at the door, sit back in luxury massage chairs, and receive the uncompromised attention they deserve.
            </p>

            <p className="font-sans text-sm sm:text-md text-brand-charcoal/70 leading-relaxed">
              Our highly skilled artists are chosen not just for their master line-work and gel techniques, but for their patience, gentle touch, and accommodation. We pride ourselves on <strong>honest, transparent recommendations</strong> and clear upfront pricing—no hidden chemical upgrade surcharges or surprise fees.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="about-value-points">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-brand-lavender text-brand-plum rounded-full mt-0.5">
                  <Coffee className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs text-brand-charcoal uppercase tracking-wider">After-Work Relaxation</h4>
                  <p className="font-sans text-xs text-brand-charcoal/65 mt-0.5">Comfortable ambient lighting, soothing botanical scents, and fully calming audio.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-brand-lavender text-brand-plum rounded-full mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xs text-brand-charcoal uppercase tracking-wider">Hospital-Grade Sterility</h4>
                  <p className="font-sans text-xs text-brand-charcoal/65 mt-0.5">Individually sealed single-use files and medical Autoclave-sanitized steel tools.</p>
                </div>
              </div>
            </div>

            {/* Quote Testimonial highlighting real themes from the reviews */}
            <div 
              className="bg-brand-linen/70 border-l-[3px] border-brand-gold p-6 rounded-r-2xl mt-8 relative group hover:border-brand-plum transition-colors duration-300 shadow-sm"
              id="about-quote-testimonial"
            >
              <span className="font-serif text-brand-gold/25 text-5xl absolute -top-2 left-3 pointer-events-none">“</span>
              <p className="font-serif text-sm sm:text-base italic text-brand-charcoal/85 pl-4 z-10 relative">
                The salon is so calm and my nails always come out perfect. They are so gentle with cuticle care, and they spend an ample amount of time on detailed art. I look forward to every appointment.
              </p>
              <div className="mt-3 pl-4 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-brand-charcoal/60">
                  Vanessa R. • Queens Resident & Client
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Before & After transformation slider */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center mt-6 lg:mt-0" id="about-transformation-slider">
            
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-xl border border-brand-lavender bg-white p-4 relative">
              
              {/* Box Header Description */}
              <div className="flex justify-between items-center mb-3 px-2">
                <span className="font-sans text-[10px] uppercase tracking-widest text-brand-charcoal/60 font-semibold flex items-center">
                  <Sparkles className="w-3 h-3 text-brand-gold mr-1" />
                  Nail Transformation
                </span>
                <span className="font-sans text-[9px] bg-brand-lavender/70 text-brand-plum px-2.5 py-1 rounded-full font-bold">
                  Interactive Slider
                </span>
              </div>

              {/* Slider Box */}
              <div className="relative aspect-square w-full select-none rounded-2xl overflow-hidden border border-brand-linen shadow-inner group">
                
                {/* 1. BOTTOM LAYER: The Plain / Bare "Before" Nail */}
                <img 
                  src="https://images.unsplash.com/photo-1610992015732-2449b76344cc?q=80&w=450&auto=format&fit=crop" 
                  alt="Plain / Bare Natural Nails" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                
                {/* Before Label overlay */}
                <div className="absolute top-4 left-4 bg-brand-charcoal/70 text-white text-[9px] font-sans tracking-widest uppercase px-2 py-1 rounded-md z-20 font-medium">
                  Before: Healthy Bare Nail
                </div>

                {/* 2. TOP LAYER: The Sculpted Cherry Blossom Art "After" (Clipped based on slider position) */}
                <div 
                  className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10"
                  style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=450&auto=format&fit=crop" 
                    alt="After: Elegant Custom Cherry Blossom Gel Nails" 
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: '100%', height: '100%' }}
                  />
                  
                  {/* After Label overlay */}
                  <div className="absolute top-4 right-4 bg-brand-plum text-brand-beige text-[9px] font-sans tracking-widest uppercase px-2 py-1 rounded-md z-20 font-bold">
                    After: Custom Cherry Gel
                  </div>
                </div>

                {/* Vertical Divider line */}
                <div 
                  className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-md pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Central Elegant Handle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-brand-accent-purple shadow-lg flex items-center justify-center pointer-events-none">
                    <div className="flex space-x-0.75 text-brand-plum">
                      <span className="text-[9px] font-bold">◀</span>
                      <span className="text-[9px] font-bold">▶</span>
                    </div>
                  </div>
                </div>

                {/* TRANSPARENT RANGE INPUT FOR TOUCH/DRAG EFFICIENCY */}
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-35"
                  aria-label="Drag to view before and after nail work"
                />

              </div>

              {/* Box Footer prompts */}
              <div className="mt-3 text-center px-1">
                <p className="font-sans text-[11px] text-brand-charcoal/60 leading-relaxed">
                  Drag the slider handle to reveal the meticulous, healthy cuticle detailing and hand-crafted gel art done by our artists.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Decorative floral vector or branch background indicator */}
      <div className="absolute -bottom-16 -left-16 w-48 h-48 opacity-10 text-brand-plum pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M10,80 Q50,60 90,80 Q60,40 10,80" />
        </svg>
      </div>
    </section>
  );
}
