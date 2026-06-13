import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Compass, Train } from 'lucide-react';
import { SALON_INFO } from '../data';

export default function ContactMap() {
  return (
    <section 
      id="contact" 
      className="py-20 sm:py-24 bg-brand-charcoal text-brand-beige relative overflow-hidden"
    >
      {/* Background glow layers */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-brand-accent-purple rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-12 right-1/4 w-80 h-80 bg-brand-gold rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Contact text, hours list & taglines (5 cols) */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold-light font-bold block mb-3">Queens New York Sanctuary</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
                Plan Your Sanctuary Escape
              </h2>
              <p className="font-sans text-xs sm:text-sm text-brand-beige/70 mt-3 max-w-sm leading-relaxed">
                We are located in a peaceful, leafy residential stretch of Queens, NY, offering convenient parking and easy local transit access.
              </p>
            </div>

            {/* Direct listings */}
            <div className="space-y-4" id="contact-details-list">
              <div className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-brand-gold-light shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-semibold text-[11px] sm:text-xs text-brand-gold-light uppercase tracking-wider">Salon Location</h4>
                  <p className="font-sans text-xs sm:text-sm text-brand-beige/85 mt-0.5">{SALON_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Phone className="w-5 h-5 text-brand-gold-light shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-semibold text-[11px] sm:text-xs text-brand-gold-light uppercase tracking-wider">Call or Text Updates</h4>
                  <a href={`tel:${SALON_INFO.phone}`} className="font-sans text-xs sm:text-sm text-white hover:text-brand-gold-light transition-colors mt-0.5 block font-bold">
                    {SALON_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Mail className="w-5 h-5 text-brand-gold-light shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-semibold text-[11px] sm:text-xs text-brand-gold-light uppercase tracking-wider">Support Inbox</h4>
                  <a href={`mailto:${SALON_INFO.email}`} className="font-sans text-xs sm:text-sm text-brand-beige/85 hover:text-brand-gold-light transition-colors mt-0.5 block">
                    {SALON_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Structured Operating Hours list from PDF */}
            <div className="bg-brand-charcoal border border-brand-beige/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-2 border-b border-brand-beige/10 pb-3">
                <Clock className="w-4 h-4 text-brand-gold-light" />
                <span className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-white">Weekly Salon Schedule</span>
              </div>

              <div className="grid grid-cols-2 gap-y-3.5 gap-x-6 text-xs" id="contact-hours-table">
                {SALON_INFO.hours.map((h, i) => (
                  <React.Fragment key={i}>
                    <span className={`font-sans font-semibold ${h.day === "Sunday" ? "text-brand-gold-light font-bold" : "text-brand-beige/70"}`}>
                      {h.day}
                    </span>
                    <span className="font-sans text-right text-white">
                      {h.time}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Elegant programmatically generated Vector Road Map (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center" id="contact-vector-map-wrapper">
            
            <div className="w-full bg-brand-charcoal/50 border border-brand-beige/10 rounded-3xl p-5 shadow-xl relative overflow-hidden flex flex-col justify-between">
              
              <div className="flex justify-between items-center mb-4 px-1 text-xs">
                <span className="font-sans tracking-widest text-brand-beige/50 uppercase font-semibold flex items-center">
                  <Compass className="w-4 h-4 mr-1.5 text-brand-gold-light" />
                  Local Queens Routing Map
                </span>
                <span className="text-[10px] text-brand-gold-light font-bold uppercase tracking-wider bg-brand-beige/5 px-2.5 py-1.5 rounded-full">
                  Free Client Parking
                </span>
              </div>

              {/* Vector SVG Mock Map representation of Hillcrest / Fresh Meadows, Queens NY */}
              <div className="relative aspect-[16/10] w-full bg-[#181519] rounded-2xl overflow-hidden border border-brand-beige/15 shadow-inner">
                
                {/* SVG Roads & Blocks layer */}
                <svg viewBox="0 0 400 250" className="w-full h-full text-brand-beige/15 fill-transparent">
                  
                  {/* Local green parks (SVG shapes) */}
                  <rect x="20" y="20" width="80" height="90" fill="rgba(179,146,86,0.06)" rx="10" />
                  <text x="30" y="45" className="fill-brand-beige/20 font-sans text-[7px] font-bold tracking-widest uppercase">Cunningham Park</text>

                  {/* Grid Lines representing local Streets (Queens NY) */}
                  {/* Horizontal Highways (Grand Central Pkwy, etc.) */}
                  <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
                  <text x="10" y="114" className="fill-brand-beige/40 font-sans text-[7px] uppercase tracking-wider">Grand Central Parkway</text>

                  <line x1="0" y1="190" x2="400" y2="190" stroke="rgba(255,255,255,0.08)" strokeWidth="2.5" />
                  <text x="10" y="184" className="fill-brand-beige/30 font-sans text-[6px] uppercase">Union Turnpike</text>

                  {/* Vertical avenues */}
                  <line x1="140" y1="0" x2="140" y2="250" stroke="rgba(255,255,255,0.08)" strokeWidth="2.5" />
                  <text x="144" y="15" className="fill-brand-beige/30 font-sans text-[6px] uppercase [writing-mode:vertical-lr] tracking-widest">Avenue 164</text>

                  <line x1="280" y1="0" x2="280" y2="250" stroke="rgba(255,255,255,0.08)" strokeWidth="2.5" />
                  <text x="284" y="15" className="fill-brand-beige/30 font-sans text-[6px] uppercase [writing-mode:vertical-lr] tracking-widest">Utopia Parkway</text>

                  {/* Secondary Residential Streets */}
                  <line x1="0" y1="70" x2="400" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
                  <line x1="220" y1="0" x2="220" y2="250" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />

                  {/* Subway Route Overlay */}
                  <path d="M 0,225 L 140,225 L 280,190 L 400,190" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Glowing Marker Pin coordinate for 88 Spring */}
                  <g className="cursor-pointer">
                    {/* Ring Pulse and Gold Marker */}
                    <circle cx="220" cy="120" r="14" className="stroke-brand-gold-light fill-transparent opacity-30 animate-ping" style={{ transformOrigin: '220px 120px' }} />
                    <circle cx="220" cy="120" r="10" className="fill-brand-plum stroke-brand-gold stroke-1" />
                    <circle cx="220" cy="120" r="3" className="fill-brand-gold-light" />
                    
                    {/* Tooltip Overlay */}
                    <rect x="160" y="138" width="120" height="28" fill="#51425c" rx="6" stroke="#b39256" strokeWidth="0.8" />
                    <text x="220" y="149" textAnchor="middle" className="fill-white font-sans text-[7.5px] font-bold uppercase tracking-wider">88 Spring Nail & Spa</text>
                    <text x="220" y="159" textAnchor="middle" className="fill-brand-gold-light font-sans text-[6px] uppercase tracking-wide">Queens Art Sanctuary</text>
                  </g>

                </svg>

                {/* Left side Subway transport highlight floating badge */}
                <div className="absolute bottom-3 left-3 bg-brand-charcoal/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-brand-beige/10 flex items-center space-x-1.5 shadow-md">
                  <Train className="w-3 h-3 text-brand-gold-light shrink-0" />
                  <span className="font-sans text-[8px] uppercase tracking-wider text-brand-beige/85">
                    F Train, Utopia Pkwy Transit
                  </span>
                </div>

              </div>

              {/* Map instructions review */}
              <div className="mt-3 bg-brand-beige/5 rounded-xl p-3.5 border border-brand-beige/10 flex items-start space-x-2 text-left">
                <Train className="w-4 h-4 text-brand-gold-light shrink-0 mt-0.5" />
                <p className="font-sans text-[10px] sm:text-[11px] text-brand-beige/70 leading-relaxed">
                  <strong>Parking & Transit:</strong> Easy un-metered street parking exists directly surrounding the salon block. Subway-goers can catch the <strong>F Train</strong> to 169th St / Utopia Parkway station, with Q30/Q31 buses stopping directly on Avenue 164.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
