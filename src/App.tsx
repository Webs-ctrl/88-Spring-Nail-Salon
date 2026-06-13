import React, { useState, useEffect } from 'react';
import { Calendar, Instagram, Facebook, Phone, Share2, Sparkles, MapPin, Check, Heart, Shield } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import InspirationCategories from './components/InspirationCategories';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import BookingSystem from './components/BookingSystem';
import Reviews from './components/Reviews';
import ContactMap from './components/ContactMap';
import Logo from './components/Logo';
import { SALON_INFO } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [bookingServicePrefill, setBookingServicePrefill] = useState<string | null>(null);
  const [bookingInspoPrefill, setBookingInspoPrefill] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Intersection Observer to update the active navbar link dynamically on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'inspiration', 'gallery', 'pricing', 'reviews', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Navigation Trigger
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Click handler from Service list to prefill calendar & scroll down
  const handleBookServiceDirectly = (serviceId: string) => {
    setBookingServicePrefill(serviceId);
    setBookingInspoPrefill(null); // Reset style tag
    showNotification("Service preselected! Fast forwarding to reservation...");
    
    // Smooth scroll down to checkout
    setTimeout(() => {
      handleScrollToSection('booking');
    }, 100);
  };

  // Click handler from Inspo Concepts or Gallery to specify booking tags
  const handleAdoptLookDirectly = (lookTitle: string) => {
    setBookingInspoPrefill(lookTitle);
    setBookingServicePrefill(null); // Reset single service id
    showNotification(`Look concept "${lookTitle}" preselected in your custom notes!`);
    
    // Smooth scroll down to checkout
    setTimeout(() => {
      handleScrollToSection('booking');
    }, 100);
  };

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-brand-beige text-brand-charcoal overflow-x-hidden antialiased font-sans">
      
      {/* 1. Global Floating Toast Alerts (Zen-themed feedback) */}
      {toastMessage && (
        <div 
          className="fixed bottom-6 right-6 z-50 bg-brand-plum text-brand-beige border border-brand-accent-purple/35 px-5 py-4 rounded-2xl shadow-xl flex items-center space-x-3 max-w-sm animate-bounce"
          id="global-toast-alert"
        >
          <Sparkles className="w-4 h-4 text-brand-gold animate-spin shrink-0" style={{ animationDuration: '6s' }} />
          <p className="font-sans text-xs font-semibold leading-relaxed text-left">{toastMessage}</p>
        </div>
      )}

      {/* 2. Global Navbar Header */}
      <Navbar onNavigate={handleScrollToSection} activeSection={activeSection} />

      {/* 3. Hero introductory landing section */}
      <div id="hero">
        <Hero onNavigate={handleScrollToSection} />
      </div>

      {/* 4. About & Our Story Section (incorporating Before & After slider) */}
      <div id="about">
        <About />
      </div>

      {/* 5. Services Menu Selection */}
      <div id="services">
        <Services onSelectServiceForBooking={handleBookServiceDirectly} />
      </div>

      {/* 6. Click-to-view Inspiration Categories */}
      <div id="inspiration">
        <InspirationCategories onSelectInspoStyle={handleAdoptLookDirectly} />
      </div>

      {/* 7. Instagram Nails Gallery Grid & Detail Lightbox */}
      <div id="gallery">
        <Gallery onBookLook={handleAdoptLookDirectly} />
      </div>

      {/* 8. Transparent Price Cards Sheet */}
      <div id="pricing">
        <Pricing onNavigateToBooking={() => handleScrollToSection('booking')} />
      </div>

      {/* 9. Interactive Booking System Calendar Assistant */}
      <div id="booking">
        <BookingSystem 
          preselectedServiceId={bookingServicePrefill}
          selectedInspoStyle={bookingInspoPrefill}
          onBookingCompleted={() => showNotification("Booking request compiled successfully! See you soon.")}
        />
      </div>

      {/* 10. Reviews & Brand Bullet highlights */}
      <div id="reviews">
        <Reviews />
      </div>

      {/* 11. Contact information Map area */}
      <div id="contact">
        <ContactMap />
      </div>

      {/* 12. Main Branded Spa Footer */}
      <footer className="bg-brand-charcoal border-t border-brand-beige/10 py-12 text-center" id="spa-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Logo centering */}
          <div className="flex flex-col items-center">
            <Logo size="md" showSmudge={true} />
            <h3 className="font-serif text-lg font-bold tracking-wide mt-4 text-white">
              88 Spring Nail & Spa
            </h3>
            <p className="font-sans text-[10px] tracking-[0.25em] text-brand-gold-light uppercase font-semibold mt-1">
              {SALON_INFO.brandQuote}
            </p>
          </div>

          {/* Socials & coordinates link list */}
          <div className="flex justify-center space-x-6 text-brand-beige/65 text-xs" id="footer-social-strip">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-brand-gold-light transition-colors flex items-center space-x-1"
              id="social-instagram"
            >
              <Instagram className="w-4 h-4 mr-1 text-brand-gold" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-brand-gold-light transition-colors flex items-center space-x-1"
              id="social-facebook"
            >
              <Facebook className="w-4 h-4 mr-1 text-brand-gold" />
              <span>Facebook</span>
            </a>
            <a 
              href={`tel:${SALON_INFO.phone}`}
              className="hover:text-brand-gold-light transition-colors flex items-center space-x-1"
              id="footer-phone"
            >
              <Phone className="w-4 h-4 mr-1 text-brand-gold" />
              <span>{SALON_INFO.phone}</span>
            </a>
          </div>

          <p className="font-sans text-xs text-brand-beige/40 max-w-md mx-auto leading-relaxed">
            Queens, NY • Walk-ins catered based on slot gaps. Our autoclave sanitation standards meet or exceed NYS Cosmetology Licensing codes.
          </p>

          <div className="border-t border-brand-beige/5 pt-6 text-[10px] text-brand-beige/30 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>© 2026 88 Spring Nail & Spa, Queens NY. All rights reserved.</span>
            <div className="flex space-x-4">
              <span className="hover:text-brand-gold-light transition-colors cursor-pointer">Hygiene Standards</span>
              <span>•</span>
              <span className="hover:text-brand-gold-light transition-colors cursor-pointer">Cancellation Guidelines</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
