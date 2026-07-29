import React, { useState } from 'react';
import { 
  Building2, 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  Wind, 
  Bed, 
  Home as HomeIcon, 
  MessageSquare, 
  MessageCircle, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { GLOBAL_CONFIG } from '../config/global';
import { QuickBookingFormData } from '../types';

interface HeroHomeProps {
  onFormSubmit?: (data: QuickBookingFormData) => void;
}

export const HeroHome: React.FC<HeroHomeProps> = ({ onFormSubmit }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState<QuickBookingFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    checkInDate: today,
    checkOutDate: tomorrow,
    guestsCount: '2 Guests',
    acPreference: 'AC Room',
    roomType: 'Double Bed Room',
    roomsCount: '1 Room',
    specialRequest: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobileNumber) {
      alert('Please enter your Full Name and Mobile Number.');
      return;
    }

    const message = `Hello, I want Instant Same Day Room Booking.

Name: ${formData.fullName}
Mobile: ${formData.mobileNumber}
Check-in Date: ${formData.checkInDate || ''}
Number of Guests: ${formData.guestsCount || ''}
Room Type: ${formData.roomType || ''}
Special Request: ${formData.specialRequest || ''}

Please confirm room availability.`;

    const whatsappUrl = `https://wa.me/919903490617?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

  return (
    <section className="relative min-h-[90vh] bg-gray-900 text-white overflow-hidden py-12 lg:py-16">
      {/* Background Image with Dark & Maroon Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=75"
          alt="Shri Kshetra Dharmasthala Temple Gopuram"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/90 to-maroon-950/85"></div>
        <div className="absolute inset-0 temple-pattern-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Key Values */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Yatri Room Booking Assistance</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                🛕 <span className="text-amber-300">SHRI KSHETRA DHARMASTHALA</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-amber-100 font-extrabold mt-1">
                  ONLINE ROOM BOOKING
                </span>
              </h1>
              <p className="text-base sm:text-lg text-amber-100/90 font-medium leading-relaxed max-w-2xl">
                Reserve AC & Non-AC rooms, family suites, and Yatri Nivas lodging near Lord Manjunatha Swamy Temple. Fast, transparent assistance via WhatsApp and online portal.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-100">Clean & Safe Yatri Stay</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-100">24x7 Hot Water & Lift</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-100">Close to Temple & Dining</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-100">Spacious Bus/Car Parking</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Instant Same Day Helpline
                </div>
                <div className="text-lg font-extrabold text-white">
                  +91 99034 90617
                </div>
              </div>
              <a
                href={GLOBAL_CONFIG.instantBookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-black text-xs flex items-center gap-2 shadow-lg transition"
              >
                <span>⚡ Instant Booking</span>
              </a>
            </div>

          </div>

          {/* Right Column: Quick Booking Form */}
          <div className="lg:col-span-6">
            <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-amber-300/80 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 maroon-gradient-bg"></div>

              <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-temple-maroon tracking-tight flex items-center gap-2">
                    <span>🏨</span>
                    <span>Quick Room Booking Form</span>
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Check availability & reserve rooms instantly
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-100 text-temple-maroon text-[11px] font-bold uppercase">
                  Fast Response
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="hero-fullName" className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-temple-maroon" />
                        <span>👤 Full Name *</span>
                      </label>
                      <input
                        id="hero-fullName"
                        type="text"
                        required
                        aria-label="Full Name"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="hero-mobileNumber" className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-temple-maroon" />
                        <span>📱 Mobile Number *</span>
                      </label>
                      <input
                        id="hero-mobileNumber"
                        type="tel"
                        required
                        aria-label="Mobile Number"
                        placeholder="10-digit mobile no."
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Email (Optional) */}
                  <div>
                    <label htmlFor="hero-email" className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-temple-maroon" />
                      <span>📧 Email ID (Optional)</span>
                    </label>
                    <input
                      id="hero-email"
                      type="email"
                      aria-label="Email ID"
                      placeholder="e.g. ramesh@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    />
                  </div>

                  {/* Check-In & Check-Out Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="hero-checkInDate" className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-temple-maroon" />
                        <span>📅 Check-in Date</span>
                      </label>
                      <input
                        id="hero-checkInDate"
                        type="date"
                        required
                        aria-label="Check-in Date"
                        min={today}
                        value={formData.checkInDate}
                        onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="hero-checkOutDate" className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-temple-maroon" />
                        <span>📅 Check-out Date</span>
                      </label>
                      <input
                        id="hero-checkOutDate"
                        type="date"
                        required
                        aria-label="Check-out Date"
                        min={formData.checkInDate || today}
                        value={formData.checkOutDate}
                        onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
                      />
                    </div>
                  </div>

                  {/* Guests Dropdown & AC/Non-AC */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="hero-guestsCount" className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-temple-maroon" />
                        <span>👥 Number of Guests</span>
                      </label>
                      <select
                        id="hero-guestsCount"
                        aria-label="Number of Guests"
                        value={formData.guestsCount}
                        onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="5 Guests">5 Guests</option>
                        <option value="6 Guests">6 Guests</option>
                        <option value="7 Guests">7 Guests</option>
                        <option value="8 Guests">8 Guests</option>
                        <option value="9 Guests">9 Guests</option>
                        <option value="10+ Guests">10+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="hero-acPreference" className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                        <Wind className="w-3.5 h-3.5 text-temple-maroon" />
                        <span>❄️ AC / 🌿 Non-AC Preference</span>
                      </label>
                      <select
                        id="hero-acPreference"
                        aria-label="AC / Non-AC Preference"
                        value={formData.acPreference}
                        onChange={(e) => setFormData({ ...formData, acPreference: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
                      >
                        <option value="AC Room">AC Room</option>
                        <option value="Non-AC Room">Non-AC Room</option>
                        <option value="Any Available">Any Available</option>
                      </select>
                    </div>
                  </div>

                  {/* Room Type & Number of Rooms */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="hero-roomType" className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-temple-maroon" />
                        <span>🛏 Room Type</span>
                      </label>
                      <select
                        id="hero-roomType"
                        aria-label="Room Type"
                        value={formData.roomType}
                        onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
                      >
                        <option value="Double Bed Room">Double Bed Room</option>
                        <option value="Triple Bed Room">Triple Bed Room</option>
                        <option value="4 Bed Room">4 Bed Room</option>
                        <option value="5 Bed Room">5 Bed Room</option>
                        <option value="Family Bedroom (6+ Guests)">Family Bedroom (6+ Guests)</option>
                        <option value="Any Available Room">Any Available Room</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="hero-roomsCount" className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                        <HomeIcon className="w-3.5 h-3.5 text-temple-maroon" />
                        <span>🏨 Number of Rooms</span>
                      </label>
                      <select
                        id="hero-roomsCount"
                        aria-label="Number of Rooms"
                        value={formData.roomsCount}
                        onChange={(e) => setFormData({ ...formData, roomsCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
                      >
                        <option value="1 Room">1 Room</option>
                        <option value="2 Rooms">2 Rooms</option>
                        <option value="3 Rooms">3 Rooms</option>
                        <option value="4 Rooms">4 Rooms</option>
                        <option value="5 Rooms">5 Rooms</option>
                        <option value="5+ Rooms">5+ Rooms</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Request */}
                  <div>
                    <label htmlFor="hero-specialRequest" className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-temple-maroon" />
                      <span>📝 Special Request (Optional)</span>
                    </label>
                    <input
                      id="hero-specialRequest"
                      type="text"
                      aria-label="Special Request"
                      placeholder="e.g. Ground floor preferred for elders, late night check-in"
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    />
                  </div>

                  {/* Main Instant Booking WhatsApp Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-base shadow-lg hover:shadow-xl hover:shadow-emerald-600/30 transition duration-200 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 text-amber-300 fill-amber-300 shrink-0" />
                    <span>⚡ Instant Booking</span>
                  </button>

                  {/* Below the form: Direct Quick Links */}
                  <div className="pt-3 border-t border-gray-100 space-y-2">
                    <p className="text-xs text-gray-500 text-center font-medium">Or choose a direct option below:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex flex-col items-center justify-center text-center shadow-md transition"
                      >
                        <span className="text-amber-300 font-extrabold text-xs">⚡ Instant Booking</span>
                        <span className="text-[10px] text-emerald-100/90 font-medium">(Same Day / WhatsApp)</span>
                      </button>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc_W7Aky0QOl9LCL08sFdKBV3XJKf-hQ6YXwWjkJw7I-3BIRA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-3 rounded-xl maroon-gradient-bg text-amber-200 hover:text-white font-bold text-xs flex items-center justify-center text-center border border-amber-400/50 shadow-md transition"
                      >
                        <span>📅 One Day Advance Booking</span>
                      </a>
                    </div>
                  </div>

                </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
