import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, User, Check, AlertCircle, ChevronRight, ChevronLeft, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { SERVICES_DATA, ARTISTS_DATA, TIME_SLOTS, SALON_INFO } from '../data';
import { ServiceItem, ArtistProfile } from '../types';

interface BookingSystemProps {
  preselectedServiceId: string | null;
  onBookingCompleted: () => void;
  selectedInspoStyle: string | null;
}

export default function BookingSystem({ 
  preselectedServiceId, 
  onBookingCompleted,
  selectedInspoStyle
}: BookingSystemProps) {
  // Booking State
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedArtist, setSelectedArtist] = useState<string>('any'); // default to any
  const [silentZen, setSilentZen] = useState<boolean>(false);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [confirmedTicket, setConfirmedTicket] = useState<any | null>(null);

  // Prefill hook for catalog interactions
  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServices(prev => {
        if (prev.includes(preselectedServiceId)) return prev;
        return [...prev, preselectedServiceId];
      });
      // Move to step 1 automatically when booking is selected
      setStep(1);
    }
  }, [preselectedServiceId]);

  // Prefill hook for inspo tags
  useEffect(() => {
    if (selectedInspoStyle) {
      setClientNotes(prev => {
        const text = `Inspired style concept: ${selectedInspoStyle}`;
        if (prev.includes(text)) return prev;
        return prev ? `${prev} | ${text}` : text;
      });
      // Add custom complex line art automatically if not already configured
      setSelectedServices(prev => {
        if (prev.includes('a-detailed')) return prev;
        return [...prev, 'a-detailed'];
      });
    }
  }, [selectedInspoStyle]);

  // Aggregate selected parameters
  const activeServices = SERVICES_DATA.filter(s => selectedServices.includes(s.id));
  const estimatedTotal = activeServices.reduce((sum, s) => sum + s.priceStart, 0);
  const estimatedDuration = activeServices.reduce((sum, s) => sum + s.durationMin, 0);

  const matchedArtist = ARTISTS_DATA.find(a => a.id === selectedArtist);

  // Generate responsive visual dates list (Next 7 days from today)
  const [openDates, setOpenDates] = useState<{ label: string; dateVal: string; dayName: string }[]>([]);
  
  useEffect(() => {
    const dates = [];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Generate dates
    for (let i = 1; i <= 8; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const dayName = daysOfWeek[d.getDay()];
      const label = `${dayName}, ${months[d.getMonth()]} ${d.getDate()}`;
      const dateVal = d.toISOString().split('T')[0];
      dates.push({ label, dateVal, dayName });
    }
    setOpenDates(dates);
    if (dates.length > 0) {
      setSelectedDate(dates[0].dateVal);
    }
  }, []);

  const handleToggleService = (id: string) => {
    setSelectedServices(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const validateStep = (nextStep: number) => {
    setFormError('');

    if (nextStep === 2) {
      if (selectedServices.length === 0) {
        setFormError('Please select at least one nail treatment service to proceed.');
        return;
      }
    }

    if (nextStep === 3) {
      if (!selectedDate) {
        setFormError('Please select a date.');
        return;
      }
      if (!selectedTime) {
        setFormError('Please select a preferred time slot.');
        return;
      }
    }

    if (nextStep === 4) {
      // Artist validation always passes (has 'any' auto-selected)
    }

    setStep(nextStep);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!clientName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!clientEmail.trim() || !clientEmail.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!clientPhone.trim() || clientPhone.length < 8) {
      setFormError('Please provide a contact phone number.');
      return;
    }

    // Success! Compile confirmation ticket
    const ticketId = `88S-${Math.floor(100000 + Math.random() * 900000)}`;
    const confirmDateLabel = openDates.find(d => d.dateVal === selectedDate)?.label || selectedDate;
    
    const ticket = {
      id: ticketId,
      name: clientName,
      phone: clientPhone,
      email: clientEmail,
      dateLabel: confirmDateLabel,
      time: selectedTime,
      artist: selectedArtist === 'any' ? 'First Available Top Artist' : matchedArtist?.name || 'Artist',
      services: activeServices.map(s => s.name),
      totalCost: estimatedTotal,
      duration: estimatedDuration,
      isSilent: silentZen,
      notes: clientNotes
    };

    setConfirmedTicket(ticket);
    setStep(5);
    onBookingCompleted();
  };

  const handleResetBooking = () => {
    setStep(1);
    setSelectedServices([]);
    setSelectedTime('');
    setSelectedArtist('any');
    setSilentZen(false);
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setClientNotes('');
    setConfirmedTicket(null);
  };

  return (
    <section 
      id="booking" 
      className="py-20 sm:py-24 bg-brand-linen relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold font-bold block mb-3">Live Reservation Assistant</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Schedule Your Unwind Session
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 mt-2">
            Walk-ins are warmly welcomed, but we recommend booking ahead to guarantee your preferred top artist and zero wait time.
          </p>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* 1. PROGRESS STEPS BAR (Hidden in Step 5 Confirmation) */}
        {step < 5 && (
          <div className="flex justify-between items-center mb-10 max-w-xl mx-auto px-4" id="booking-progress-bar">
            {[1, 2, 3, 4].map((num) => {
              const label = ["Treatments", "Schedule", "Artist", "Cozy Info"][num - 1];
              const isPassed = step > num;
              const isActive = step === num;
              return (
                <div key={num} className="flex flex-col items-center flex-1 relative">
                  {/* Connecting lines */}
                  {num < 4 && (
                    <div className={`absolute top-4 left-1/2 right-[-50%] h-[1.5px] z-0 ${
                      step > num ? 'bg-brand-gold' : 'bg-brand-lavender-dark'
                    }`} />
                  )}
                  
                  {/* Step Bubble */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 z-10 ${
                    isPassed 
                      ? 'bg-brand-gold text-brand-beige' 
                      : isActive 
                        ? 'bg-brand-plum text-brand-beige scale-110 shadow-md border-2 border-brand-accent-purple/20' 
                        : 'bg-white text-brand-charcoal/40 border border-brand-lavender'
                  }`}>
                    {isPassed ? <Check className="w-4 h-4" /> : num}
                  </div>
                  <span className={`font-sans text-[9px] uppercase tracking-wider mt-2 font-bold ${
                    isActive ? 'text-brand-plum' : 'text-brand-charcoal/45'
                  }`}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Form Error Alert box */}
        {formError && (
          <div className="bg-red-50 text-red-700 text-xs font-sans rounded-2xl p-4 mb-8 flex items-start space-x-2 border border-red-100 max-w-xl mx-auto animate-pulse">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="font-semibold">{formError}</p>
          </div>
        )}

        {/* 2. STEPS SUB-CONTAINERS CONTAINER */}
        <div className="bg-white rounded-3xl border border-brand-lavender shadow-xl p-6 sm:p-10" id="booking-wizard-card">
          
          {/* STEP 1: Treatments & Services selection checkboxes */}
          {step === 1 && (
            <div id="booking-step-1" className="text-left">
              <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal font-semibold mb-2">
                1. Select Services
              </h3>
              <p className="font-sans text-xs text-brand-charcoal/60 mb-6">
                You can select multiple treatments. We will align durations in a continuous relaxing sequence.
              </p>

              <div className="space-y-3.5 max-h-[400px] overflow-y-auto pr-2" id="booking-services-list">
                {SERVICES_DATA.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <div 
                      key={service.id}
                      onClick={() => handleToggleService(service.id)}
                      className={`p-4 rounded-2xl border transition-all duration-300 flex justify-between items-center cursor-pointer select-none ${
                        isChecked 
                          ? 'bg-brand-lavender/40 border-brand-accent-purple/65 shadow-inner' 
                          : 'bg-white border-brand-lavender/65 hover:border-brand-accent-purple hover:bg-brand-linen/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        {/* Custom checkbox */}
                        <div className={`w-5.5 h-5.5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                          isChecked 
                            ? 'bg-brand-plum border-brand-plum text-brand-beige' 
                            : 'bg-white border-brand-lavender/80'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        
                        <div>
                          <h4 className="font-sans text-xs sm:text-sm font-semibold text-brand-charcoal">
                            {service.name}
                          </h4>
                          <span className="font-sans text-[10px] text-brand-charcoal/50 flex items-center mt-0.5">
                            <Clock className="w-3 h-3 mr-1 text-brand-gold" />
                            <span>{service.durationMin} mins</span>
                            <span className="mx-2">•</span>
                            <span className="capitalize">{service.category}</span>
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-serif font-bold text-xs sm:text-sm text-brand-charcoal">
                          Starting ${service.priceStart}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Aggregation Panel footer */}
              {selectedServices.length > 0 && (
                <div className="mt-8 p-5 bg-brand-linen/40 border border-brand-lavender/60 rounded-2xl flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold block mb-1">Estimated Combined Summary</span>
                    <div className="flex flex-wrap gap-2 text-xs text-brand-charcoal/80 font-sans">
                      <span>Total Time: <strong>{estimatedDuration} mins</strong></span>
                      <span>•</span>
                      <span>Total Price Base: <strong>${estimatedTotal}</strong></span>
                    </div>
                  </div>

                  <button
                    onClick={() => validateStep(2)}
                    className="bg-brand-plum text-brand-beige hover:bg-brand-charcoal text-xs font-sans tracking-widest uppercase font-bold px-6 py-3.5 rounded-full shadow-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Choose Time Slot</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 2: Calendar & Slot picker */}
          {step === 2 && (
            <div id="booking-step-2" className="text-left">
              <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal font-semibold mb-2">
                2. Select Date & Time slot
              </h3>
              <p className="font-sans text-xs text-brand-charcoal/60 mb-6">
                Special 6:30 PM Zen slots are reserved for professionals seeking maximum unwinding with zero noise or waiting list lines.
              </p>

              {/* Date selections cards strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" id="booking-dates-strip">
                {openDates.map((dObj) => {
                  const isSel = selectedDate === dObj.dateVal;
                  const isRestrictedDay = dObj.dayName === "Sunday";
                  return (
                    <button
                      key={dObj.dateVal}
                      type="button"
                      onClick={() => setSelectedDate(dObj.dateVal)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center ${
                        isSel 
                          ? 'bg-brand-lavender border-brand-accent-purple/80 shadow-inner' 
                          : 'bg-white border-brand-lavender/65 hover:border-brand-accent-purple'
                      }`}
                    >
                      <span className="font-sans text-[9px] uppercase tracking-widest text-brand-charcoal/50 font-bold">
                        {dObj.dayName.substring(0, 3)}
                      </span>
                      <span className="font-serif text-base sm:text-lg font-bold text-brand-charcoal mt-1">
                        {dObj.label.split(',')[1].trim()}
                      </span>
                      {isRestrictedDay && (
                        <span className="text-[8px] text-brand-gold mt-1 uppercase tracking-wider font-semibold">Special Sun Hours</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Time slots grid */}
              <span className="font-sans text-[10px] uppercase tracking-widest text-brand-charcoal/60 font-bold block mb-3">
                Preferred Time (Est. slot)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" id="booking-time-grid">
                {TIME_SLOTS.map((slot) => {
                  const isSel = selectedTime === slot;
                  const isZenSlot = slot.includes('Zen');
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => {
                        setSelectedTime(slot);
                        if (isZenSlot) setSilentZen(true); // default silent session for zen slot
                      }}
                      className={`p-3.5 rounded-xl border text-xs font-sans tracking-wide transition-all duration-300 cursor-pointer ${
                        isSel 
                          ? 'bg-brand-plum text-brand-beige border-brand-plum font-semibold' 
                          : isZenSlot
                            ? 'bg-brand-lavender/40 text-brand-plum border-brand-accent-purple/40 hover:bg-brand-lavender'
                            : 'bg-white text-brand-charcoal hover:border-brand-charcoal'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>

              {/* Actions Footer */}
              <div className="mt-8 border-t border-brand-lavender pt-6 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="bg-brand-linen text-brand-charcoal hover:bg-brand-lavender text-xs font-sans tracking-widest uppercase font-bold px-5 py-3 rounded-full transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => validateStep(3)}
                  className="bg-brand-plum text-brand-beige hover:bg-brand-charcoal text-xs font-sans tracking-widest uppercase font-bold px-6 py-3.5 rounded-full shadow-md transition-colors flex items-center space-x-2 cursor-pointer"
                >
                  <span>Select Artist</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* STEP 3: Artist selection Cards */}
          {step === 3 && (
            <div id="booking-step-3" className="text-left">
              <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal font-semibold mb-2">
                3. Choose Nail Artist
              </h3>
              <p className="font-sans text-xs text-brand-charcoal/60 mb-6">
                All our artists are fully certified, extremely gentle, and hold rigorous standards. You may pre-select or choose "First Available".
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6" id="booking-artists-grid">
                
                {/* First Available Artist Card */}
                <div 
                  onClick={() => setSelectedArtist('any')}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden ${
                    selectedArtist === 'any' 
                      ? 'bg-brand-lavender/40 border-brand-accent-purple shadow-inner ring-1 ring-brand-accent-purple' 
                      : 'bg-white border-brand-lavender/70 hover:border-brand-accent-purple'
                  }`}
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="w-12 h-12 rounded-full bg-brand-linen border border-brand-lavender flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-brand-gold animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-charcoal">
                        First Available Artist
                      </h4>
                      <p className="font-sans text-[10px] text-brand-charcoal/50 mt-0.5 uppercase tracking-wider font-semibold">
                        Optimized Speed
                      </p>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-brand-charcoal/65 mt-4 leading-relaxed">
                    Choose this layout to match your visit with whichever top technician (Chloe, Jessie, or Hannah) opens first on your requested slot.
                  </p>
                  {selectedArtist === 'any' && (
                    <div className="absolute top-3 right-3 bg-brand-gold text-brand-beige p-1 rounded-full">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* Specific Artist Loop */}
                {ARTISTS_DATA.map((art) => {
                  const isSel = selectedArtist === art.id;
                  return (
                    <div 
                      key={art.id}
                      onClick={() => setSelectedArtist(art.id)}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden ${
                        isSel 
                          ? 'bg-brand-lavender/40 border-brand-accent-purple shadow-inner ring-1 ring-brand-accent-purple' 
                          : 'bg-white border-brand-lavender/70 hover:border-brand-accent-purple'
                      }`}
                    >
                      <div className="flex items-start space-x-3.5">
                        <img 
                          src={art.avatarUrl} 
                          alt={art.name} 
                          className="w-12 h-12 rounded-full object-cover border border-brand-lavender shrink-0"
                        />
                        <div>
                          <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-charcoal">
                            Artist {art.name}
                          </h4>
                          <p className="font-sans text-[10px] text-brand-gold uppercase tracking-[0.15em] font-bold">
                            {art.role.split(' ')[0]} Specialist
                          </p>
                        </div>
                      </div>

                      <p className="font-sans text-xs text-brand-charcoal/65 mt-3 leading-relaxed">
                        {art.bio}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1" id="artist-strengths">
                        {art.strengths.slice(0, 2).map((s, idx) => (
                          <span key={idx} className="bg-brand-linen/80 text-brand-plum text-[8px] font-sans px-2 py-0.5 rounded-full tracking-wide">
                            {s}
                          </span>
                        ))}
                      </div>

                      {isSel && (
                        <div className="absolute top-3 right-3 bg-brand-gold text-brand-beige p-1 rounded-full">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Actions Footer */}
              <div className="mt-8 border-t border-brand-lavender pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-brand-linen text-brand-charcoal hover:bg-brand-lavender text-xs font-sans tracking-widest uppercase font-bold px-5 py-3 rounded-full transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="bg-brand-plum text-brand-beige hover:bg-brand-charcoal text-xs font-sans tracking-widest uppercase font-bold px-6 py-3.5 rounded-full shadow-md transition-colors flex items-center space-x-2 cursor-pointer"
                >
                  <span>Complete Contact</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* STEP 4: Contact details & Silent Zen session toggle */}
          {step === 4 && (
            <form onSubmit={handleFinalSubmit} className="text-left" id="booking-step-4">
              <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal font-semibold mb-2">
                4. Contact Info & Preferences
              </h3>
              <p className="font-sans text-xs text-brand-charcoal/60 mb-6 font-medium">
                Finish drafting your post-work recovery reservation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                
                {/* Full name */}
                <div className="space-y-1.5">
                  <label htmlFor="client-name" className="font-sans text-[10px] uppercase font-bold tracking-widest text-brand-charcoal/60 block">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="client-name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Vanessa Rodriguez"
                    className="w-full bg-brand-beige border border-brand-lavender/80 rounded-xl p-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-brand-accent-purple bg-white"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="client-email" className="font-sans text-[10px] uppercase font-bold tracking-widest text-brand-charcoal/60 block">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="client-email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="e.g. vanessa@gmail.com"
                    className="w-full bg-brand-beige border border-brand-lavender/80 rounded-xl p-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-brand-accent-purple bg-white"
                  />
                </div>

                {/* Phone number */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="client-phone" className="font-sans text-[10px] uppercase font-bold tracking-widest text-brand-charcoal/60 block">
                    Contact Phone Number (For updates)
                  </label>
                  <input 
                    type="tel" 
                    id="client-phone"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="e.g. (718) 555-0188"
                    className="w-full bg-brand-beige border border-brand-lavender/80 rounded-xl p-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-brand-accent-purple bg-white"
                  />
                </div>

                {/* Special design requests */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="client-notes" className="font-sans text-[10px] uppercase font-bold tracking-widest text-brand-charcoal/60 block">
                    Special Design Requests or Inspo Codes
                  </label>
                  <textarea 
                    id="client-notes"
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    rows={2}
                    placeholder="e.g., I'd love to request silver metallic abstract waves, or I am bringing in a custom leaf photo. No hard drill prep please."
                    className="w-full bg-brand-beige border border-brand-lavender/80 rounded-xl p-3 text-xs sm:text-sm font-sans focus:outline-none focus:border-brand-accent-purple bg-white"
                  />
                </div>

              </div>

              {/* SPECIAL ZEN FEATURE CHIP: Silent Appointment Toggle */}
              <div 
                className="bg-brand-lavender/35 border border-brand-lavender rounded-2xl p-5 mb-8 flex justify-between items-center cursor-pointer select-none"
                onClick={() => setSilentZen(!silentZen)}
                id="booking-silent-toggle"
              >
                <div className="space-y-1 pr-4">
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-plum uppercase tracking-wider flex items-center">
                    <Sparkles className="w-4 h-4 text-brand-gold mr-1.5 animate-spin" style={{ animationDuration: '6s' }} />
                    Silent Zen Session Preference
                  </h4>
                  <p className="font-sans text-xs text-brand-charcoal/65 leading-relaxed">
                    Check this option to request a chat-free, quiet environment. After a brief design and nail health check, we will let you read, listen, or zone out in complete peace.
                  </p>
                </div>

                {/* Switch button */}
                <div className={`w-12 h-6.5 rounded-full p-0.5 transition-colors duration-300 shrink-0 ${
                  silentZen ? 'bg-brand-plum' : 'bg-brand-lavender-dark'
                }`}>
                  <div className={`w-5.5 h-5.5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                    silentZen ? 'translate-x-5.5' : 'translate-x-0'
                  }`} />
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-8 border-t border-brand-lavender pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-brand-linen text-brand-charcoal hover:bg-brand-lavender text-xs font-sans tracking-widest uppercase font-bold px-5 py-3 rounded-full transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="bg-brand-gold hover:bg-brand-charcoal text-brand-beige text-xs font-sans tracking-widest uppercase font-bold px-8 py-3.5 rounded-full shadow-md transition-all cursor-pointer flex items-center space-x-2 border border-brand-gold-light/40 hover:scale-[1.02]"
                >
                  <CheckCircle className="w-4 h-4 text-brand-beige" />
                  <span>Confirm Reservation</span>
                </button>
              </div>

            </form>
          )}

          {/* STEP 5: Luxurious printable Confirmation ticket */}
          {step === 5 && confirmedTicket && (
            <div id="booking-step-5" className="text-center space-y-6">
              
              {/* Animated check bubble */}
              <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 border border-green-100 flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-8 h-8 animate-bounce" />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-brand-charcoal font-bold tracking-tight">
                  Your Spot Is Confirmed, {confirmedTicket.name}!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 mt-2">
                  A verification confirmation code has been generated. Please save your ticket voucher summary below.
                </p>
              </div>

              {/* Ticket design card */}
              <div 
                className="bg-brand-beige rounded-2xl border-2 border-dashed border-brand-accent-purple/50 p-6 sm:p-8 max-w-md mx-auto text-left relative overflow-hidden shadow-md"
                id="booking-confirmation-ticket"
              >
                {/* Visual side holes matching classic tickets */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-white border border-brand-lavender pointer-events-none" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-white border border-brand-lavender pointer-events-none" />

                {/* Ticket header */}
                <div className="font-sans flex justify-between items-center pb-4 border-b border-brand-lavender/50 text-[10px] tracking-widest uppercase font-bold text-brand-gold">
                  <span>88 Spring Nail Voucher</span>
                  <span>{confirmedTicket.id}</span>
                </div>

                {/* Session specifications list */}
                <div className="space-y-4 py-6" id="booking-ticket-body">
                  
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-wider text-brand-charcoal/45 block">Confirmed Date</span>
                      <span className="font-sans font-bold text-brand-charcoal mt-0.5 block">{confirmedTicket.dateLabel}</span>
                    </div>
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-wider text-brand-charcoal/45 block">Time Slot</span>
                      <span className="font-sans font-bold text-brand-charcoal mt-0.5 block">{confirmedTicket.time}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs pt-1">
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-wider text-brand-charcoal/45 block">Dedicated Artist</span>
                      <span className="font-sans font-bold text-brand-charcoal mt-0.5 block">{confirmedTicket.artist}</span>
                    </div>
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-wider text-brand-charcoal/45 block">Silent Zen Choice</span>
                      <span className="font-sans font-bold text-brand-plum mt-0.5 block uppercase tracking-[0.05em]">{confirmedTicket.isSilent ? 'ON (Quiet Care)' : 'OFF (Ambient Chat)'}</span>
                    </div>
                  </div>

                  {/* Services detail list */}
                  <div className="pt-2">
                    <span className="font-sans text-[9px] uppercase tracking-wider text-brand-charcoal/45 block mb-1">Selected Treatments</span>
                    <ul className="space-y-1">
                      {confirmedTicket.services.map((srv: string, idx: number) => (
                        <li key={idx} className="font-sans text-xs font-semibold text-brand-charcoal list-disc list-inside">
                          {srv}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Combined pricing */}
                  <div className="pt-4 border-t border-brand-lavender/50 flex justify-between items-baseline">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-brand-charcoal/50 font-bold">Base Est. Bill</span>
                    <span className="font-serif text-lg font-bold text-brand-charcoal">${confirmedTicket.totalCost}</span>
                  </div>

                </div>

                {/* Ticket footer with address info */}
                <div className="bg-brand-linen/40 p-3 rounded-xl border border-brand-lavender/40 text-[10px] font-sans text-brand-charcoal/60 leading-relaxed flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">88 Spring Nail Salon Address:</span>
                    <p className="mt-0.5">{SALON_INFO.address} (Off Hillcrest / Fresh Meadows parking zones)</p>
                  </div>
                </div>

              </div>

              {/* Success reset triggers */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                
                <button
                  onClick={handleResetBooking}
                  className="w-full sm:w-auto bg-brand-linen hover:bg-brand-lavender text-brand-charcoal text-xs font-sans tracking-widest uppercase font-bold py-3.5 px-6 rounded-full transition-colors cursor-pointer border border-brand-lavender"
                >
                  <span>Book Another Slot</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto bg-brand-plum text-brand-beige border border-brand-accent-purple/30 shadow-md text-xs font-sans tracking-widest uppercase font-bold py-3.5 px-6 rounded-full transition-colors cursor-pointer"
                >
                  <span>Print Ticket Summary</span>
                </button>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
