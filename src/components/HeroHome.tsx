import React from 'react';
import { 
  Zap, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  Flame, 
  Car, 
  Users, 
  PhoneCall, 
  BedDouble, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { GLOBAL_CONFIG } from '../config/global';

export const HeroHome: React.FC = () => {
  const instantWhatsappMessage = `🙏 Namaskara

I would like to book a room at Shri Kshetra Dharmasthala.

Booking Details:
• Check-in Date: 
• Check-out Date: 
• Number of Guests: 
• AC / Non-AC: 
• Contact Number: 

Please let me know room availability and booking process.`;

  const instantWhatsappUrl = `https://wa.me/919903490617?text=${encodeURIComponent(instantWhatsappMessage)}`;
  const advanceFormUrl = GLOBAL_CONFIG.advanceBookingLink;

  const trustFeatures = [
    {
      icon: '🏛',
      title: '3-Min Walk to Temple',
      description: 'Yatri Nivas & room blocks situated right in the complex near darshan queues.',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-400/30'
    },
    {
      icon: '♨',
      title: '24×7 Hot Water',
      description: 'Continuous solar & geyser hot water in all washrooms for early morning holy bath.',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-400/30'
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Family Rooms',
      description: 'Spacious 2-bed, 4-bed, and large group suites tailored for family pilgrimages.',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-400/30'
    },
    {
      icon: '🚗',
      title: 'Parking Available',
      description: 'Dedicated spacious parking lots for cars, tempo travelers, and pilgrim buses.',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-400/30'
    },
    {
      icon: '🛏',
      title: 'Clean & Hygienic Rooms',
      description: 'Sanitized rooms with fresh linens, elevator access, and peaceful ambiance.',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-400/30'
    },
    {
      icon: '📞',
      title: 'Dedicated Booking Assistance',
      description: '24×7 pilgrim helpline to verify room availability and guide check-in.',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-400/30'
    }
  ];

  return (
    <div className="bg-[#FDFBF7] text-gray-900">
      
      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative bg-gradient-to-b from-[#7A0C16] via-[#5C0911] to-[#40060B] text-white py-12 lg:py-16 overflow-hidden border-b-4 border-[#D4A017]">
        {/* Background Overlay & Temple Motif */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=75"
            alt="Temple Gopuram"
            loading="eager"
            className="w-full h-full object-cover object-center filter grayscale"
          />
        </div>
        <div className="absolute inset-0 temple-pattern-overlay pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-[#D4A017]/50 text-amber-300 text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
            <span>Official Pilgrim Room Booking Assistance Portal</span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="max-w-4xl mx-auto space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Shri Kshetra Dharmasthala Bhakta Nivas Booking
            </h1>
            <p className="text-sm sm:text-base text-amber-100/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Reserve your Yatri Nivas stay instantly through WhatsApp or submit an advance reservation request for upcoming travel.
            </p>
          </div>

          {/* TWO PREMIUM BOOKING CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto pt-4 text-left">
            
            {/* ------------------------------------------
                CARD 1 (PRIMARY) - INSTANT WHATSAPP BOOKING
            ------------------------------------------ */}
            <div className="group rounded-[22px] bg-gradient-to-br from-[#0E9F6E] via-emerald-700 to-emerald-900 border-2 border-emerald-400/80 p-6 sm:p-8 shadow-2xl hover:shadow-emerald-900/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              
              {/* Badge: FASTEST RESPONSE */}
              <div className="absolute top-0 right-0 bg-amber-400 text-gray-950 font-black text-[11px] uppercase px-4 py-1.5 rounded-bl-2xl shadow-md tracking-wider flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-gray-950" />
                <span>⚡ FASTEST RESPONSE</span>
              </div>

              <div className="space-y-5 pt-2">
                <div>
                  <span className="text-xs font-extrabold text-amber-300 uppercase tracking-widest block">Option 1</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                    Same Day Instant Booking
                  </h2>
                </div>

                {/* Features List */}
                <div className="space-y-3 text-xs sm:text-sm text-emerald-50/95 font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Instant room availability verification</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Direct WhatsApp assistance</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>AC & Non-AC room guidance</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>24×7 Pilgrim Support</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action - NO FORMS, NO POPUPS, DIRECT LINK */}
              <div className="pt-8 space-y-2">
                <a
                  href={instantWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[56px] py-4 px-6 rounded-2xl bg-white hover:bg-amber-50 active:scale-95 text-[#0E9F6E] font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl transition-all duration-200 transform hover:scale-[1.02] cursor-pointer no-underline"
                >
                  <span className="text-xl">📱</span>
                  <span>Instant WhatsApp Booking</span>
                </a>
                <p className="text-[11px] text-amber-200/90 text-center font-semibold pt-1">
                  ⚡ Instant response during support hours.
                </p>
              </div>

            </div>

            {/* ------------------------------------------
                CARD 2 (SECONDARY) - ADVANCE RESERVATION
            ------------------------------------------ */}
            <div className="group rounded-[22px] bg-gradient-to-br from-[#7A0C16] via-[#5C0911] to-[#40060B] border-2 border-[#D4A017]/80 p-6 sm:p-8 shadow-2xl hover:shadow-amber-950/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              
              {/* Badge: PRE-PLAN */}
              <div className="absolute top-0 right-0 bg-[#D4A017] text-gray-950 font-black text-[11px] uppercase px-4 py-1.5 rounded-bl-2xl shadow-md tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gray-950" />
                <span>PRE-PLAN TRAVEL</span>
              </div>

              <div className="space-y-5 pt-2">
                <div>
                  <span className="text-xs font-extrabold text-amber-300 uppercase tracking-widest block">Option 2</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                    Advance Reservation
                  </h2>
                </div>

                {/* Features List */}
                <div className="space-y-3 text-xs sm:text-sm text-amber-100/95 font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A017] shrink-0" />
                    <span>Submit preferred travel dates</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A017] shrink-0" />
                    <span>Room preference selection</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A017] shrink-0" />
                    <span>Family & Group bookings</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A017] shrink-0" />
                    <span>Secure reservation request</span>
                  </div>
                </div>
              </div>

              {/* Advance Reservation CTA */}
              <div className="pt-8">
                <a
                  href={advanceFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[56px] py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-gray-950 font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl transition-all duration-200 transform hover:scale-[1.02] cursor-pointer no-underline border border-amber-200"
                >
                  <span className="text-xl">📅</span>
                  <span>Advance Reservation Form</span>
                  <ExternalLink className="w-4 h-4 text-gray-950 shrink-0" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          WHY BOOK THROUGH OUR ASSISTANCE PORTAL
      ========================================== */}
      <section className="py-14 sm:py-16 bg-[#FDFBF7] border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#7A0C16] text-xs font-bold uppercase tracking-wider border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>Pilgrim Stay Benefits</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
              Why Book Through Our Assistance Portal?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We ensure seamless, hygienic, and convenient Yatri accommodation for devotees visiting Shri Kshetra Dharmasthala.
            </p>
          </div>

          {/* 6 Premium Feature Cards: 2-column mobile, 3-column desktop layout */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trustFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-[22px] bg-white p-5 sm:p-6 border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between space-y-3 text-left group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-[#D4A017]/40 text-2xl flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                    {feat.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-gray-900 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
