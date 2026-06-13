import React, { useState } from 'react';
import { Sparkles, Clock, CircleDot, CheckCircle2, ChevronRight, Calendar } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

type TabType = 'all' | 'manicure' | 'pedicure' | 'extension' | 'art' | 'repair';

export default function Services({ onSelectServiceForBooking }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'manicure', label: 'Manicures' },
    { id: 'pedicure', label: 'Pedicures' },
    { id: 'extension', label: 'Gel-X Extensions' },
    { id: 'art', label: 'Nail Art' },
    { id: 'repair', label: 'Repairs & Soak-offs' }
  ];

  const filteredServices = activeTab === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeTab);

  const handleBookService = (service: ServiceItem) => {
    onSelectServiceForBooking(service.id);
  };

  return (
    <section 
      id="services" 
      className="py-20 sm:py-24 bg-brand-linen/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold font-bold block mb-3">Our Serene Offerings</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Curated Services Menu
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 mt-3 max-w-xl mx-auto">
            Enjoy full-coverage care, healthy non-toxic formulations, and unmatched artistic detail. We prioritize nail health and post-work tranquility.
          </p>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16" id="services-tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-sans text-[11px] sm:text-xs tracking-widest uppercase px-5 py-3 rounded-full transition-all duration-300 border cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-plum text-brand-beige border-brand-plum shadow-md'
                  : 'bg-white text-brand-charcoal/80 border-brand-lavender hover:border-brand-charcoal hover:bg-brand-linen'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="services-grid">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border border-brand-lavender hover:shadow-xl hover:border-brand-accent-purple/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                service.popular ? 'ring-1 ring-brand-gold-light shadow-sm' : ''
              }`}
            >
              {/* Popular Tag Highlight */}
              {service.popular && (
                <div className="absolute top-0 right-0 bg-brand-gold text-brand-beige text-[8px] font-sans tracking-[0.2em] uppercase font-bold px-4 py-1.5 rounded-bl-2xl">
                  Popular
                </div>
              )}

              {/* Title, Category & Estimated Duration */}
              <div>
                <div className="flex items-center space-x-1.5 mb-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                    {service.category === 'extension' ? 'Extension' : service.category}
                  </span>
                  <span className="text-brand-charcoal/30 text-xs">•</span>
                  <div className="flex items-center text-brand-charcoal/50 text-[10px]">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{service.durationMin} mins</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal tracking-wide mb-3 group-hover:text-brand-gold-dark transition-colors">
                  {service.name}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullets feature list */}
                {service.features && (
                  <ul className="space-y-2 mb-6 border-t border-brand-lavender/40 pt-4 text-left">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start text-[11px] sm:text-xs text-brand-charcoal/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Price starting and Booking Action */}
              <div className="border-t border-brand-lavender/55 pt-4 mt-4 flex items-center justify-between">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-brand-charcoal/45 block">
                    Starting Near
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal">
                    ${service.priceStart}
                    <span className="font-sans text-xs text-brand-charcoal/60 font-normal"> *</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleBookService(service)}
                  className="bg-brand-lavender hover:bg-brand-plum hover:text-brand-beige text-brand-plum text-[10px] font-sans tracking-widest uppercase py-3 px-5 rounded-full transition-all duration-300 flex items-center space-x-1.5 font-bold cursor-pointer border border-brand-accent-purple/20 group"
                >
                  <span>Book Now</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing disclaimer note */}
        <div className="text-center mt-12" id="services-disclaimer shadow-sm">
          <p className="font-sans text-[11px] text-brand-charcoal/50 max-w-lg mx-auto">
            * Note: Service prices are flexible and dependent on custom nail art detail complexity, gem inclusions, or structural transformations. Walk-ins accommodated based on schedule slots.
          </p>
        </div>

      </div>
    </section>
  );
}
