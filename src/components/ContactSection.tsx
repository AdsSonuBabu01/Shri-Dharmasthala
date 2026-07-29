import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { GLOBAL_CONFIG } from '../config/global';

export const ContactSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-amber-50/60 to-white py-14 lg:py-18 border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
            24x7 Pilgrim Assistance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Contact Shri Kshetra Room Reservation Desk
          </h2>
          <p className="text-sm text-gray-600">
            Have questions about room availability, check-in rules, or temple darshan timings? Get in touch with us immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone Card */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-md transition text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-temple-maroon flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Direct Phone Call</div>
              <a 
                href={GLOBAL_CONFIG.phoneTel}
                className="text-lg font-black text-temple-maroon hover:underline block mt-0.5"
              >
                {GLOBAL_CONFIG.phoneDisplay}
              </a>
            </div>
            <p className="text-xs text-gray-500">24 Hours available for Yatri room enquiry & support.</p>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-xs hover:shadow-md transition text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">WhatsApp Helpline</div>
              <a 
                href={GLOBAL_CONFIG.instantBookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-black text-emerald-700 hover:underline block mt-0.5"
              >
                {GLOBAL_CONFIG.whatsappNumber}
              </a>
            </div>
            <p className="text-xs text-gray-500">Send room requirements & receive instant availability details.</p>
          </div>

          {/* Office Hours */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-md transition text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-temple-maroon flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Reception Hours</div>
              <div className="text-base font-extrabold text-gray-900 mt-0.5">
                24 Hours Open
              </div>
            </div>
            <p className="text-xs text-gray-500">Check-in desk functions 24/7 for late night & early morning yatris.</p>
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-md transition text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-temple-maroon flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Temple Location</div>
              <div className="text-xs font-bold text-gray-900 mt-0.5 line-clamp-2">
                Shri Kshetra Dharmasthala, Belthangady, Karnataka
              </div>
            </div>
            <a 
              href="https://maps.google.com/?q=Shri+Kshetra+Dharmasthala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-temple-maroon font-bold flex items-center gap-1 hover:underline"
            >
              <span>Open Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
