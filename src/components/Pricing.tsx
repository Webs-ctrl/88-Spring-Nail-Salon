import React from 'react';
import { BadgeDollarSign, ShieldAlert, Sparkles, ReceiptText, HelpCircle, ArrowRight } from 'lucide-react';

interface PricingProps {
  onNavigateToBooking: () => void;
}

export default function Pricing({ onNavigateToBooking }: PricingProps) {
  const manicurePricing = [
    { name: "Classic Zen Manicure", price: "$25", time: "30-35 mins", notes: "Nail shaping, gentle cuticle care, lavender oil hand rub & high-shine buffer." },
    { name: "Gel Polish Manicure", price: "$45", time: "40-45 mins", notes: "Long-wear dry gel polish utilizing chemical-reduced nourishing formula." },
    { name: "Structure Hard-Gel Overlay", price: "$65", time: "50-60 mins", notes: "Reinforces soft/brittle natural nails under high-density protective protective coat." }
  ];

  const pedicurePricing = [
    { name: "Spring Signature Pedicure", price: "$48", time: "45-50 mins", notes: "Epsom dry salt soak, sweet-sugar scrub, oil heel massage & regular lacquer." },
    { name: "Deluxe Herbal Hot-Stone Pedicure", price: "$75", time: "65-70 mins", notes: "Detox foot mask, paraffin mask cocoon wrapping & hot volcanic stone massage." },
    { name: "Gel Polish Pedicure Upgrade", price: "$65", time: "55-60 mins", notes: "Signature herbal foot care finished with instant-dry LED non-smudge Gel." }
  ];

  const extensionsPricing = [
    { name: "Gel-X Soft Gel Extension Full-Set", price: "$110", time: "80-90 mins", notes: "Premium full coverage soft-gel tips. Damage-free, light weight & custom shaped." },
    { name: "Gel Filling & Re-balance (2-3 weeks)", price: "$70", time: "60-70 mins", notes: "Nourishes the newly grown base, re-sculpts shape and edits original color." },
    { name: "Full Soft Extension Coffin/Almond Set", price: "$120", time: "90 mins", notes: "Extra length custom shaping for stylized editorial profiles." }
  ];

  const addonsPricing = [
    { name: "Minimalist Fine Line Art (per nail)", price: "$4 - $6", time: "+5 mins", notes: "Simple hand-drawn geometric points, dots, or small accent hearts." },
    { name: "All-Nails Custom Complex Setting", price: "$40+", time: "+30-40 mins", notes: "Double outlined French tips, chrome waves, retro lines or 3D charm studs." },
    { name: "Safe Gel Safe Soak-Off Removal", price: "$15", time: "15-20 mins", notes: "Gentle soaking wrap inside cuticle-oil shield. Includes standard strengthener." }
  ];

  return (
    <section 
      id="pricing" 
      className="py-20 sm:py-24 bg-brand-linen/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold font-bold block mb-3">Honest Consultations</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Transparent Care Pricing
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 mt-3 max-w-xl mx-auto">
            No surprise surcharges. We consult on exact prices before we start our work, helping you relax completely during your post-work appointments.
          </p>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Pricing Layout: Cards of clean tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16" id="pricing-tables-wrapper">
          
          {/* Card 1: Manicures (Hands) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-lavender/70 shadow-sm text-left">
            <div className="flex items-center space-x-3 pb-4 mb-6 border-b border-brand-lavender">
              <span className="p-2 bg-brand-lavender text-brand-plum rounded-full shrink-0">
                💅
              </span>
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal font-bold">
                  Manicures & Hand Care
                </h3>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-charcoal/45">Natural / Gel Care</span>
              </div>
            </div>

            <div className="space-y-6">
              {manicurePricing.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-sans font-semibold text-xs sm:text-sm text-brand-charcoal group-hover:text-brand-gold-dark transition-colors duration-300">
                      {item.name}
                    </h4>
                    <div className="flex space-x-2 items-center">
                      <span className="font-sans text-[10px] text-brand-charcoal/40 uppercase font-medium">{item.time}</span>
                      <span className="font-serif text-md sm:text-lg font-bold text-brand-charcoal">{item.price}</span>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-brand-charcoal/65 mt-1 leading-relaxed">
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Pedicures (Feet) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-lavender/70 shadow-sm text-left">
            <div className="flex items-center space-x-3 pb-4 mb-6 border-b border-brand-lavender">
              <span className="p-2 bg-brand-lavender text-brand-plum rounded-full shrink-0">
                🧖‍♀️
              </span>
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal font-bold">
                  Spring Signature Pedicures
                </h3>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-charcoal/45">Foot Relaxation & Throws</span>
              </div>
            </div>

            <div className="space-y-6">
              {pedicurePricing.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-sans font-semibold text-xs sm:text-sm text-brand-charcoal group-hover:text-brand-gold-dark transition-colors duration-300">
                      {item.name}
                    </h4>
                    <div className="flex space-x-2 items-center">
                      <span className="font-sans text-[10px] text-brand-charcoal/40 uppercase font-medium">{item.time}</span>
                      <span className="font-serif text-md sm:text-lg font-bold text-brand-charcoal">{item.price}</span>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-brand-charcoal/65 mt-1 leading-relaxed">
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Extensions & Gel-X */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-lavender/70 shadow-sm text-left">
            <div className="flex items-center space-x-3 pb-4 mb-6 border-b border-brand-lavender">
              <span className="p-2 bg-brand-lavender text-brand-plum rounded-full shrink-0">
                ✨
              </span>
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal font-bold">
                  Gel Extensions & Sculpt
                </h3>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-charcoal/45">Soft-Gel & Durability</span>
              </div>
            </div>

            <div className="space-y-6">
              {extensionsPricing.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-sans font-semibold text-xs sm:text-sm text-brand-charcoal group-hover:text-brand-gold-dark transition-colors duration-300">
                      {item.name}
                    </h4>
                    <div className="flex space-x-2 items-center">
                      <span className="font-sans text-[10px] text-brand-charcoal/40 uppercase font-medium">{item.time}</span>
                      <span className="font-serif text-md sm:text-lg font-bold text-brand-charcoal">{item.price}</span>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-brand-charcoal/65 mt-1 leading-relaxed">
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Nail Art Addons */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-lavender/70 shadow-sm text-left">
            <div className="flex items-center space-x-3 pb-4 mb-6 border-b border-brand-lavender">
              <span className="p-2 bg-brand-lavender text-brand-plum rounded-full shrink-0">
                🎨
              </span>
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal font-bold">
                  Bespoke Nail Art & Care
                </h3>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-charcoal/45">Hand Painted Details</span>
              </div>
            </div>

            <div className="space-y-6">
              {addonsPricing.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-sans font-semibold text-xs sm:text-sm text-brand-charcoal group-hover:text-brand-gold-dark transition-colors duration-300">
                      {item.name}
                    </h4>
                    <div className="flex space-x-2 items-center">
                      <span className="font-sans text-[10px] text-brand-charcoal/40 uppercase font-medium">{item.time}</span>
                      <span className="font-serif text-md sm:text-lg font-bold text-brand-charcoal">{item.price}</span>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-brand-charcoal/65 mt-1 leading-relaxed">
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Block underneath */}
        <div 
          className="bg-brand-linen/50 border border-brand-lavender rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 shadow-sm"
          id="pricing-cta-block"
        >
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="font-serif text-xl text-brand-charcoal">
              Ready to claim your zen after-work spot?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 leading-relaxed">
              Fill in your custom selected services inside our digital booking system. Tell us if you want custom line-art details or extension shape profiles.
            </p>
          </div>

          <button
            onClick={onNavigateToBooking}
            className="bg-brand-plum text-brand-beige border border-brand-accent-purple/35 text-xs font-sans tracking-widest uppercase font-bold px-8 py-4 rounded-full shadow-md hover:bg-brand-charcoal transition-colors shrink-0 cursor-pointer flex items-center space-x-2.5 group"
          >
            <span>Launch Booking Wizard</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
