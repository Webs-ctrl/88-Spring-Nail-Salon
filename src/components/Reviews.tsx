import React, { useState } from 'react';
import { Star, MessageSquare, Quote, Heart, Brush, Leaf, Shield, Check } from 'lucide-react';
import { REVIEWS_DATA } from '../data';

export default function Reviews() {
  const [likes, setLikes] = useState<Record<string, number>>({});

  const handleLike = (id: string) => {
    setLikes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const featureBullets = [
    {
      title: "Consistently clean, sterile atmosphere",
      desc: "Autoclave medical sealed steel files, sterile tubs, and beautiful organic lavender aromatherapy on arrival."
    },
    {
      title: "Massage chairs & post-work comfort",
      desc: "Sit back in high-end roller massage beds and cozy heated throws designed to let you de-compress after a long day of work."
    },
    {
      title: "Meticulous detailing & zero-rush art",
      desc: "Our nail technicians spend ample time sculpting, pre-cleaning cuticles, and hand-painting fine lines to keep polish durable."
    },
    {
      title: "Safe, chemical-reduced extension prep",
      desc: "We prioritize natural nail beds, employing soft-gel soak-offs rather than aggressive heavy electric drills that strip layers."
    },
    {
      title: "Transparent pricing & friendly artists",
      desc: "Upfront pricing consultations are conducted before we touch your hands—completely avoiding surprise add-on chemical surcharges."
    }
  ];

  return (
    <section 
      id="reviews" 
      className="py-20 sm:py-24 bg-brand-beige relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold font-bold block mb-3">Client Happiness Stories</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Why Customers Love Our Sanctuary
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 mt-3 max-w-xl mx-auto">
            We are deeply grateful for our Queens neighborhood regular clients. See why they consistently recommend 88 Spring for patient cuticle work and gorgeous nail art.
          </p>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* 1. Core Feature Highlights (Why Choose Us) - Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Left panel: Bullet Highlights */}
          <div className="lg:col-span-5 bg-white border border-brand-lavender/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-sm">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-brand-gold font-semibold block mb-2">Our Commitments</span>
              <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal font-bold tracking-tight mb-6">
                The 88 Spring Difference
              </h3>
              
              <div className="space-y-6" id="reviews-bullets">
                {featureBullets.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-3.5 group">
                    <span className="flex items-center justify-center bg-brand-lavender text-brand-plum w-6 h-6 rounded-full shrink-0 mt-0.5 border border-brand-accent-purple/20 group-hover:bg-brand-plum group-hover:text-brand-beige transition-colors duration-300">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <h4 className="font-sans text-xs sm:text-sm font-semibold text-brand-charcoal">
                        {feat.title}
                      </h4>
                      <p className="font-sans text-xs text-brand-charcoal/65 mt-0.5 leading-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-brand-lavender/40 pt-6 mt-8 flex items-center justify-between text-xs text-brand-charcoal/50">
              <span>✓ Medical-Grade Autoclave Sterility</span>
              <span>✓ Certified Artists Only</span>
            </div>
          </div>

          {/* Right panel: Masonry Real Customer Review Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" id="reviews-real-cards">
            {REVIEWS_DATA.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white border border-brand-lavender/60 p-6 rounded-3xl flex flex-col justify-between text-left hover:shadow-md transition-all duration-300 relative group"
              >
                <div>
                  {/* Stars and time */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-0.75">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <span className="font-sans text-[10px] text-brand-charcoal/45 uppercase tracking-wider">
                      {rev.relativeTime}
                    </span>
                  </div>

                  {/* Body Text */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-brand-lavender/50 absolute -top-4 -left-3 pointer-events-none" />
                    <p className="font-sans text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed pl-1.5 z-10 relative">
                      {rev.text}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6" id="review-pill-tags">
                    {rev.tags.map((tag, idx) => (
                      <span key={idx} className="bg-brand-linen/60 text-brand-plum text-[8px] sm:text-[9px] font-sans tracking-wide px-2.5 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author footer */}
                <div className="border-t border-brand-lavender/40 pt-4 mt-auto flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm text-brand-charcoal font-semibold">
                      {rev.author}
                    </h4>
                    <span className="font-sans text-[10px] text-brand-charcoal/50">
                      {rev.role}
                    </span>
                  </div>

                  {/* Interactive Helpful Like Button */}
                  <button
                    onClick={() => handleLike(rev.id)}
                    className="flex items-center space-x-1.5 text-[10px] text-brand-charcoal/40 hover:text-brand-plum bg-brand-linen/45 hover:bg-brand-lavender px-2.5 py-1.5 rounded-full transition-colors cursor-pointer select-none"
                    aria-label={`Like review from ${rev.author}`}
                  >
                    <Heart className={`w-3 h-3 ${likes[rev.id] ? 'fill-brand-plum text-brand-plum animate-bounce' : ''}`} />
                    <span>Helpful ({likes[rev.id] || 2})</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
