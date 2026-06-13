import React, { useState } from 'react';
import { Eye, Heart, Calendar, X, Sparkles, User, Info, ArrowLeftRight } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

interface GalleryProps {
  onBookLook: (lookName: string) => void;
}

export default function Gallery({ onBookLook }: GalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid opening lightbox
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBookLookBtn = (item: GalleryItem) => {
    setSelectedItem(null);
    onBookLook(item.title);
  };

  return (
    <section 
      id="gallery" 
      className="py-20 sm:py-24 bg-brand-linen/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold font-bold block mb-3">Studio Masterpieces</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Nail Gallery Portfolio
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 mt-3 max-w-xl mx-auto">
            Hover over any hand-sculpted design to check details, tap to view artist suggestions, and directly pre-fill your Zen booking reservation with that specific theme.
          </p>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Inst-style Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="gallery-grid">
          {GALLERY_DATA.map((item) => {
            const isFav = !!favorites[item.id];
            return (
              <div 
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[4/5] bg-brand-linen rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-brand-lavender/50 cursor-pointer transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <img 
                  src={item.photoUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[6s] ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-0 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Mobile Tap/Always-on Overlay Indicator for Touch Devices */}
                <div className="absolute bottom-4 left-4 bg-brand-beige/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brand-accent-purple/30 shadow-md sm:hidden flex items-center space-x-1.5">
                  <Eye className="w-3.5 h-3.5 text-brand-plum animate-pulse" />
                  <span className="font-sans text-[9px] tracking-wider uppercase font-bold text-brand-plum">View Look</span>
                </div>

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 z-10 flex space-x-2">
                  <span className="bg-brand-beige/90 backdrop-blur-md text-brand-charcoal border border-brand-lavender text-[8px] sm:text-[9px] font-sans tracking-widest uppercase font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Top Favorite Toggle Button */}
                <button
                  onClick={(e) => toggleFavorite(item.id, e)}
                  aria-label="Add look to design notebook"
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-brand-beige/90 backdrop-blur-md border border-brand-lavender/60 hover:bg-white text-brand-charcoal hover:scale-105 transition-all shadow-sm cursor-pointer"
                >
                  <Heart 
                    className={`w-4 h-4 transition-colors ${
                      isFav ? 'fill-red-500 text-red-500' : 'text-brand-charcoal/60 hover:text-brand-charcoal'
                    }`} 
                  />
                </button>

                {/* Desktop hover text block */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10 text-left translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none hidden sm:block">
                  <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-brand-gold-light font-bold">
                    {item.badge}
                  </span>
                  
                  <h3 className="font-serif text-lg text-white font-semibold mt-1">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-white/80 line-clamp-2 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center space-x-2 bg-brand-beige text-brand-charcoal w-fit px-4 py-2 rounded-full text-[10px] tracking-widest uppercase font-bold pointer-events-auto cursor-pointer hover:bg-brand-linen transition-colors">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span>Book This Look</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* 3. LIGHTBOX POPUP MODAL SCREEN */}
        {selectedItem && (
          <div 
            className="fixed inset-0 bg-brand-charcoal/80 backdrop-blur-sm z-[99] flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
            id="gallery-lightbox-overlay"
          >
            <div 
              className="bg-brand-beige max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl border border-brand-lavender max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Stop click through to overlay
              id="gallery-lightbox-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Lightbox Left side: High-Res Image */}
                <div className="md:col-span-7 bg-brand-linen relative aspect-square md:aspect-auto md:h-[550px]">
                  <img 
                    src={selectedItem.photoUrl} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-brand-charcoal/80 text-brand-beige text-[9px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Actual Studio Work
                  </span>
                </div>

                {/* Lightbox Right side: Curated detail checklist */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left">
                  
                  {/* Close button */}
                  <div className="flex justify-between items-center pb-4 border-b border-brand-lavender">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                      {selectedItem.category} Design
                    </span>
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="text-brand-charcoal p-1 hover:bg-brand-linen rounded-full cursor-pointer"
                      aria-label="Close Lightbox"
                    >
                      <X className="w-5 h-5 pointer-events-none" />
                    </button>
                  </div>

                  {/* Body Info */}
                  <div className="space-y-4 py-6">
                    <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal leading-tight">
                      {selectedItem.title}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                      {selectedItem.description}
                    </p>

                    {/* Specifications List */}
                    <div className="bg-brand-linen/60 rounded-2xl p-4 space-y-2 border border-brand-lavender/40">
                      <div className="flex items-center text-xs">
                        <User className="w-3.5 h-3.5 mr-2.5 text-brand-gold" />
                        <span className="font-sans text-brand-charcoal/60 mr-2">Lead Artist:</span>
                        <span className="font-sans font-semibold text-brand-charcoal">Jessie or Hannah</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <Info className="w-3.5 h-3.5 mr-2.5 text-brand-gold" />
                        <span className="font-sans text-brand-charcoal/60 mr-2">Est. Art Adds:</span>
                        <span className="font-sans font-semibold text-brand-charcoal">30 - 45 mins</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <ArrowLeftRight className="w-3.5 h-3.5 mr-2.5 text-brand-gold" />
                        <span className="font-sans text-brand-charcoal/60 mr-2">Best Shapes:</span>
                        <span className="font-sans font-semibold text-brand-charcoal">Long Almond, Coffin, Oval</span>
                      </div>
                    </div>

                    <div className="text-[10px] italic text-brand-charcoal/60 leading-normal flex items-start space-x-1">
                      <span>🌸</span>
                      <span>To replicate this exact art, this theme will be loaded as your custom request in the checkout session below.</span>
                    </div>
                  </div>

                  {/* Direct prefill Action */}
                  <button
                    type="button"
                    onClick={() => handleBookLookBtn(selectedItem)}
                    className="w-full bg-brand-plum text-brand-beige text-xs font-sans tracking-widest uppercase font-bold py-4 rounded-full shadow-md hover:bg-brand-charcoal transition-all flex items-center justify-center space-x-2 cursor-pointer border border-brand-accent-purple/30 group"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-bounce" />
                    <span>Prefill Booking Form with this Look</span>
                  </button>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
