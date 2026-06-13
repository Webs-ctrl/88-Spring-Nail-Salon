import React, { useState } from 'react';
import { Sparkles, CheckCircle, Palette, Brush, ArrowRight } from 'lucide-react';
import { INSPIRED_CATEGORIES_DATA } from '../data';
import { InspirationCategory } from '../types';

interface InspirationProps {
  onSelectInspoStyle: (styleName: string) => void;
}

export default function InspirationCategories({ onSelectInspoStyle }: InspirationProps) {
  const [selectedCatId, setSelectedCatId] = useState<string>('cat-pastel'); // Default to pastel flora matching logo

  const activeCategory = INSPIRED_CATEGORIES_DATA.find(c => c.id === selectedCatId) || INSPIRED_CATEGORIES_DATA[0];

  return (
    <section 
      id="inspiration" 
      className="py-20 sm:py-24 bg-brand-beige relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold font-bold block mb-3">Instant Visual Style Guides</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Nail Inspiration Categories
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 mt-3 max-w-xl mx-auto">
            Not sure what look fits your mood? Tap our cohesive concept boards designed by Senior Nail Art Director Jessie to discover bespoke styles.
          </p>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* 1. Category Nav Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10" id="inspo-tab-cards">
          {INSPIRED_CATEGORIES_DATA.map((cat) => {
            const isActive = cat.id === selectedCatId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                className={`text-left p-6 sm:p-8 rounded-3xl transition-all duration-300 border cursor-pointer relative overflow-hidden group ${
                  isActive 
                    ? 'bg-brand-linen/90 border-brand-accent-purple shadow-md' 
                    : 'bg-white border-brand-lavender/50 hover:bg-brand-linen/30 hover:border-brand-lavender hover:shadow-sm'
                }`}
              >
                {/* Visual marker inside active state */}
                {isActive && (
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold" />
                )}

                <span className="font-serif text-xs text-brand-gold uppercase tracking-[0.2em] font-semibold">
                  Mood Concept
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal mt-1.5 font-bold">
                  {cat.name}
                </h3>
                <p className="font-sans text-xs text-brand-charcoal/65 mt-2 line-clamp-2">
                  {cat.tagline}
                </p>

                <div className="mt-4 flex items-center text-[10px] sm:text-xs text-brand-plum font-semibold uppercase tracking-widest">
                  <span>{isActive ? 'Curated View Active' : 'Click to View'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ml-1.5 transform transition-transform group-hover:translate-x-1 ${isActive ? 'text-brand-gold' : 'text-brand-charcoal/40'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Interactive Mood Board Display Card */}
        <div 
          className="bg-white rounded-3xl border border-brand-lavender overflow-hidden shadow-lg p-6 sm:p-10 lg:p-12 transition-all duration-500"
          id="inspo-active-moodboard"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* LEFT BOARD SIDE: Vibe description, swatches & tips */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-6">
              
              <div>
                {/* Branded watercolor accent dot */}
                <div className="flex items-center space-x-2 bg-brand-lavender/50 w-fit px-3 py-1 rounded-full border border-brand-lavender mb-4">
                  <Palette className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="text-[9px] uppercase tracking-widest font-bold text-brand-plum">
                    {activeCategory.name} Board
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal tracking-wide">
                  {activeCategory.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm italic text-brand-gold-dark mt-1 font-semibold tracking-wide">
                  “{activeCategory.tagline}”
                </p>

                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed mt-4">
                  {activeCategory.description}
                </p>
              </div>

              {/* Color Swatches Node Grid */}
              <div className="border-t border-brand-lavender/40 pt-6">
                <span className="font-sans text-[10px] uppercase tracking-widest text-brand-charcoal/60 font-bold block mb-3">
                  Recommended Polish Swatches
                </span>
                
                <div className="flex flex-wrap gap-4" id="inspo-swatch-beads">
                  {activeCategory.colors.map((col, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-brand-linen/30 border border-brand-lavender/50 px-3 py-1.5 rounded-full pr-4">
                      {/* Swatch circle */}
                      <span 
                        className="w-4 h-4 rounded-full border border-brand-charcoal/20 shadow-inner flex shrink-0" 
                        style={{ backgroundColor: col.hex }}
                      />
                      <span className="font-sans text-xs text-brand-charcoal/80 font-medium">
                        {col.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Artist Style Tips Bullets */}
              <div className="border-t border-brand-lavender/40 pt-6">
                <span className="font-sans text-[10px] uppercase tracking-widest text-brand-charcoal/60 font-bold block mb-3">
                  Jessie’s Professional Style Tips
                </span>
                <ul className="space-y-2.5">
                  {activeCategory.styleTips.map((tip, i) => (
                    <li key={i} className="flex items-start text-xs text-brand-charcoal/75 font-sans leading-relaxed">
                      <span className="p-1 bg-brand-gold/10 text-brand-gold rounded-full mr-2.5 shrink-0 mt-0.5">
                        <Brush className="w-3 h-3" />
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking tag link */}
              <div className="pt-4 border-t border-brand-lavender/40">
                <button
                  type="button"
                  onClick={() => onSelectInspoStyle(activeCategory.name)}
                  className="bg-brand-plum text-brand-beige text-xs font-sans tracking-widest uppercase font-bold py-4 px-6 rounded-full shadow-md hover:bg-brand-charcoal transition-colors duration-300 flex items-center space-x-2 cursor-pointer border border-brand-accent-purple/35 hover:scale-[1.02] transform transition-transform"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-bounce" />
                  <span>Adopt {activeCategory.name} & See Booking</span>
                </button>
              </div>

            </div>

            {/* RIGHT BOARD SIDE: Real nail preview images representing screenshots */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                {activeCategory.sampleImages.map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-md border border-brand-linen group/img">
                    <img 
                      src={img} 
                      alt={`${activeCategory.name} Sample Design`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="font-sans text-[10px] text-white uppercase tracking-widest font-bold">
                        Studio Sample {idx + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-linen/40 rounded-2xl p-4 border border-brand-lavender mt-4 text-center">
                <p className="font-sans text-[10px] text-brand-charcoal/50 leading-normal">
                  All images showcase real, unedited hand work from our regular studio operations. We never use generic, deceptive AI-generated nail art placeholders.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
