import React from 'react';
import { Zap, Calendar, Phone } from 'lucide-react';
import { GLOBAL_CONFIG } from '../config/global';
import { useQuickBooking } from '../context/BookingModalContext';

export const FloatingButtons: React.FC = () => {
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

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 no-print">
      
      {/* 1. ⚡ Instant Booking */}
      <a
        href={instantWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-xl transition-all duration-200 transform hover:scale-105 border border-emerald-400/50 cursor-pointer no-underline"
        title="⚡ Instant Booking (Atkal / Same Day)"
      >
        <span className="hidden sm:inline text-xs">⚡ Instant WhatsApp Booking</span>
        <span className="sm:hidden text-xs">⚡ Instant</span>
        <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
      </a>

      {/* 2. 📅 One Day Advance Booking */}
      <a
        href={GLOBAL_CONFIG.advanceBookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 py-2.5 px-4 rounded-full maroon-gradient-bg text-amber-200 hover:text-white font-extrabold text-xs shadow-2xl transition-all duration-200 transform hover:scale-105 border-2 border-amber-400"
        title="📅 One Day Advance Booking"
      >
        <span className="hidden sm:inline text-xs">📅 One Day Advance Booking</span>
        <span className="sm:hidden text-xs">📅 1-Day Advance</span>
        <Calendar className="w-4 h-4 text-amber-300" />
      </a>

      {/* 3. ☎️ Call Now */}
      <a
        href={GLOBAL_CONFIG.phoneTel}
        className="group flex items-center gap-2 py-2 px-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-gray-950 font-black text-xs shadow-lg transition-all duration-200 transform hover:scale-105 border border-amber-300 opacity-90 hover:opacity-100"
        title="Call Helpline Now"
      >
        <span className="hidden sm:inline text-xs">☎️ Helpline ({GLOBAL_CONFIG.phoneDisplay})</span>
        <span className="sm:hidden text-xs">☎️ Helpline</span>
        <Phone className="w-3.5 h-3.5 fill-current text-gray-950" />
      </a>

    </div>
  );
};
