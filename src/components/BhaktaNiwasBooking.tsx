import React from 'react';
import { MessageSquare, Calendar, Zap, CheckCircle2, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { GLOBAL_CONFIG } from '../config/global';

interface BhaktaNiwasBookingProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const BhaktaNiwasBooking: React.FC<BhaktaNiwasBookingProps> = ({
  title = "Bhakta Niwas Room Booking Options",
  subtitle = "Choose your preferred room reservation method below for Shri Kshetra Dharmasthala Yatri stay.",
  className = ""
}) => {
  const whatsappUrl = `https://wa.me/919903490617?text=${encodeURIComponent("Hello, I would like to book a Bhakta Niwas room for today. Please share availability and booking details.")}`;
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc_W7Aky0QOl9LCL08sFdKBV3XJKf-hQ6YXwWjkJw7I-3BIRA/viewform";

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Section Header */}
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Official Booking Options</span>
          </span>
          {title && (
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Side by Side Grid on Desktop, Stacked on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        
        {/* Booking Option 1: Same Day Instant Booking */}
        <div className="group rounded-3xl bg-gradient-to-b from-emerald-50/90 to-emerald-100/40 border-2 border-emerald-300 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] sm:text-xs font-black uppercase px-4 py-1.5 rounded-bl-2xl shadow-xs tracking-wider flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>Fastest Response</span>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                <MessageSquare className="w-7 h-7 text-amber-300" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Option 1</span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                  Same Day Instant Booking
                </h3>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              For same-day room availability and instant confirmation, contact us directly on WhatsApp.
            </p>

            <div className="space-y-2.5 pt-2 border-t border-emerald-200/80 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant same-day availability verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct WhatsApp helpline: <strong>+91 99034 90617</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24/7 Pilgrim desk assistance for AC & Non-AC rooms</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-emerald-200">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg hover:shadow-emerald-600/30 transition-all duration-200 group-hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5 text-amber-300 fill-amber-300 shrink-0" />
              <span>Instant WhatsApp Booking</span>
            </a>
          </div>
        </div>

        {/* Booking Option 2: Advance Reservation */}
        <div className="group rounded-3xl bg-gradient-to-b from-amber-50/90 to-amber-100/40 border-2 border-amber-300 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 maroon-gradient-bg text-amber-200 text-[10px] sm:text-xs font-black uppercase px-4 py-1.5 rounded-bl-2xl shadow-xs tracking-wider flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            <span>Pre-Plan Travel</span>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl maroon-gradient-bg text-amber-200 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Calendar className="w-7 h-7 text-amber-300" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-temple-maroon uppercase tracking-wider">Option 2</span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                  Advance Reservation
                </h3>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              For advance bookings, please submit the reservation form. Advance reservations should be made at least 1 day before the check-in date.
            </p>

            <div className="space-y-2.5 pt-2 border-t border-amber-200/80 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Submit dates, room preference & guest details easily</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ideal for family pilgrimages & group trips</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Opens in official secure Google Form window</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-amber-200">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl maroon-gradient-bg hover:bg-amber-900 active:bg-amber-950 text-amber-200 hover:text-white font-extrabold text-sm sm:text-base border border-amber-400/60 flex items-center justify-center gap-2.5 shadow-lg hover:shadow-amber-900/30 transition-all duration-200 group-hover:scale-[1.02]"
            >
              <Calendar className="w-5 h-5 text-amber-300 shrink-0" />
              <span>Advance Reservation Form</span>
              <ExternalLink className="w-4 h-4 text-amber-300/80 shrink-0" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
