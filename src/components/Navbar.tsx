import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles, Phone } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'Our Story' },
    { id: 'services', label: 'Services' },
    { id: 'inspiration', label: 'Inspiration' },
    { id: 'gallery', label: 'Nail Gallery' },
    { id: 'pricing', label: 'Transparent Pricing' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <nav 
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-beige/90 backdrop-blur-md shadow-sm border-b border-brand-lavender py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Brand Element */}
          <button 
            onClick={() => handleLinkClick('hero')} 
            className="flex items-center space-x-3 cursor-pointer group text-left"
            id="nav-logo-btn"
          >
            <div className="transform group-hover:scale-105 transition-transform duration-300">
              <Logo size="sm" showSmudge={false} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-brand-charcoal tracking-wide">
                88 Spring
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] text-brand-gold uppercase font-semibold">
                Nail & Spa • Queens
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8" id="desktop-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 relative py-1 cursor-pointer ${
                  activeSection === link.id 
                    ? 'text-brand-gold-dark font-medium' 
                    : 'text-brand-charcoal/70 hover:text-brand-charcoal'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-gold rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Booking CTA Button */}
          <div className="hidden sm:flex items-center space-x-4" id="nav-cta-wrapper">
            <a 
              href="tel:7185550188" 
              className="text-brand-charcoal/70 hover:text-brand-charcoal flex items-center text-xs tracking-wider uppercase font-sans mr-2"
              id="call-us-link"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
              Call Salon
            </a>
            
            <button
              onClick={() => handleLinkClick('booking')}
              className="bg-brand-plum text-brand-beige hover:bg-brand-charcoal text-xs font-sans tracking-widest uppercase px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2 cursor-pointer border border-brand-accent-purple/30 group"
              id="nav-book-btn"
            >
              <Calendar className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center" id="mobile-nav-trigger">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-charcoal p-2 rounded-md hover:bg-brand-linen transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        id="mobile-nav-drawer"
        className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-brand-beige/98 backdrop-blur-lg shadow-2xl z-50 transform transition-transform duration-500 ease-in-out border-l border-brand-lavender ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-brand-lavender">
              <div className="flex items-center space-x-2">
                <Logo size="sm" showSmudge={true} />
                <div className="flex flex-col text-left">
                  <span className="font-serif text-md font-bold text-brand-charcoal">
                    88 Spring
                  </span>
                  <span className="font-sans text-[8px] tracking-[0.2em] text-brand-gold uppercase">
                    Queens, NY
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-charcoal p-2 hover:bg-brand-linen rounded-full"
                id="close-mobile-nav"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links in Drawer */}
            <div className="flex flex-col space-y-6 pt-10 text-left pl-4" id="mobile-drawer-links">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-md tracking-wider uppercase font-sans text-left transition-colors cursor-pointer ${
                    activeSection === link.id 
                      ? 'text-brand-gold font-semibold border-l-2 border-brand-gold pl-3' 
                      : 'text-brand-charcoal/80 hover:text-brand-charcoal pl-0'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Drawer Content */}
          <div className="space-y-4 border-t border-brand-lavender pt-6 pl-4" id="mobile-drawer-footer">
            <a 
              href="tel:7185550188" 
              className="flex items-center text-sm font-sans tracking-wide text-brand-charcoal"
            >
              <Phone className="w-4 h-4 mr-3 text-brand-gold" />
              <span>(718) 555-0188</span>
            </a>
            
            <button
              onClick={() => handleLinkClick('booking')}
              className="w-full bg-brand-plum text-brand-beige text-xs tracking-widest uppercase py-4 rounded-full shadow-md text-center font-sans font-medium hover:bg-brand-charcoal transition-all duration-300 flex items-center justify-center space-x-2"
              id="mobile-drawer-book-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            
            <p className="text-[10px] text-center text-brand-charcoal/40 font-sans pt-2">
              Walk-ins welcome based on artist availability.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
