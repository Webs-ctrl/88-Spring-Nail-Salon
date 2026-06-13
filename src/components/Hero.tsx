import React from 'react';
import { Calendar, Sparkles, ChevronDown, Award } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from './Logo';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-linen pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* 1. Cinematic Background Image Layer with Luxury Soft Filter */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=100&w=1920&auto=format&fit=crop" 
          alt="Serene Spa Environment" 
          className="w-full h-full object-cover object-center opacity-30 transform scale-105"
        />
        {/* Soft, custom gradient wash mimicking local sunset/calm lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-beige/50 via-brand-beige/90 to-brand-beige" />
        
        {/* Decorative soft glowing circular ambient lights to match the watercolor vibe */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lavender rounded-full mix-blend-multiply blur-3xl opacity-65 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-linen rounded-full mix-blend-multiply blur-3xl opacity-50 animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* 2. Main Content Container (Glassmorphic Card Center-Set) */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Welcome Tag with Small Gold Accents */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-brand-beige/80 backdrop-blur-md px-4 py-2 rounded-full border border-brand-lavender mb-6 shadow-sm"
          id="hero-tagline-badge"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-spin" style={{ animationDuration: '6s' }} />
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-brand-charcoal/80">
            A Luxury-Leaning Escape in Queens, NY
          </span>
        </motion.div>

        {/* Elegant Centered Branded Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center mb-8"
        >
          <Logo size="lg" showSmudge={true} />
        </motion.div>

        {/* Main Headings */}
        <div className="space-y-4 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-brand-charcoal leading-tight tracking-tight px-2"
            id="hero-main-title"
          >
            Relax. Refresh.<br />
            <span className="font-cursive text-4xl sm:text-6xl md:text-7xl block mt-2 text-brand-gold-dark italic">
              Reimagine Your Nails.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-sans text-sm sm:text-md text-brand-charcoal/75 leading-relaxed max-w-2xl mx-auto"
            id="hero-subtext"
          >
            A modern, tranquil nail salon in Queens offering detailed hand-painted nail art, clean cuticle techniques, and a peaceful, Zen-like experience to help you fully unwind.
          </motion.p>
        </div>

        {/* 3. CTA Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 w-full px-4"
          id="hero-actions"
        >
          {/* Main Book CTA */}
          <button
            onClick={() => onNavigate('booking')}
            className="w-full sm:w-auto bg-brand-plum text-brand-beige hover:bg-brand-charcoal text-xs sm:text-sm font-sans tracking-widest uppercase px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer border border-brand-accent-purple/40 group font-semibold"
            id="hero-book-btn"
          >
            <Calendar className="w-4 h-4 text-brand-gold" />
            <span>Book Appointment</span>
          </button>

          {/* View Menu CTA */}
          <button
            onClick={() => onNavigate('services')}
            className="w-full sm:w-auto bg-brand-linen/80 backdrop-blur-md text-brand-charcoal hover:bg-brand-linen hover:text-brand-gold-dark text-xs sm:text-sm font-sans tracking-widest uppercase px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer border border-brand-charcoal/15 font-semibold"
            id="hero-services-btn"
          >
            <span>View Services Menu</span>
          </button>
        </motion.div>

        {/* Short Highlight Notes */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 sm:gap-x-12 border-t border-brand-lavender/70 pt-8 mt-12 w-full max-w-3xl justify-items-center"
          id="hero-trust-metrics"
        >
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg font-bold text-brand-gold">4.6 ★</span>
            <span className="font-sans text-[10px] tracking-wider uppercase text-brand-charcoal/60">100+ Top Reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg font-bold text-brand-gold">100%</span>
            <span className="font-sans text-[10px] tracking-wider uppercase text-brand-charcoal/60">Sterile & Clean</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
            <span className="font-serif text-lg font-bold text-brand-gold">Zen</span>
            <span className="font-sans text-[10px] tracking-wider uppercase text-brand-charcoal/60">No-Rush Philosophy</span>
          </div>
        </motion.div>

      </div>

      {/* 4. Elegant Interactive Scroll-Down Prompt */}
      <div 
        onClick={() => onNavigate('about')}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 cursor-pointer group text-brand-charcoal/45 hover:text-brand-charcoal transition-colors z-20"
        id="hero-scroll-prompt"
      >
        <span className="font-sans text-[9px] tracking-[0.25em] uppercase font-semibold">Unwind Below</span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
      </div>

      {/* Soft lavender gradient border at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-brand-beige to-transparent pointer-events-none" />
    </section>
  );
}
