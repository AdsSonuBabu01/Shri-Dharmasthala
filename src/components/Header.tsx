import React, { useState } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  Zap, 
  Calendar, 
  Home, 
  Info, 
  Bed, 
  CalendarCheck, 
  Sparkles, 
  Image as ImageIcon, 
  BookOpen, 
  HelpCircle, 
  PhoneCall 
} from 'lucide-react';
import { GLOBAL_CONFIG } from '../config/global';
import { NavigationPage } from '../types';
import { navigateTo } from '../utils/router';
import { useQuickBooking } from '../context/BookingModalContext';

interface HeaderProps {
  currentPage: NavigationPage;
}

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems: { label: string; page: NavigationPage; path: string; icon: React.FC<{ className?: string }> }[] = [
    { label: 'Home', page: 'home', path: '/', icon: Home },
    { label: 'About Dharmasthala', page: 'about', path: '/about', icon: Info },
    { label: 'Room Types', page: 'room-types', path: '/room-types', icon: Bed },
    { label: 'Online Room Booking', page: 'booking', path: '/booking', icon: CalendarCheck },
    { label: 'Facilities', page: 'facilities', path: '/facilities', icon: Sparkles },
    { label: 'Gallery', page: 'gallery', path: '/gallery', icon: ImageIcon },
    { label: 'Blog', page: 'blog', path: '/blog', icon: BookOpen },
    { label: 'FAQ', page: 'faq', path: '/faq', icon: HelpCircle },
    { label: 'Contact', page: 'contact', path: '/contact', icon: PhoneCall },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigateTo(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-200/60 shadow-sm transition-all duration-200">
      {/* Top Notification Strip - Government & Official Style Trust Bar */}
      <div className="bg-[#7A0C16] text-amber-100 text-xs py-2 px-4 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-extrabold text-[11px] border border-amber-400/40 uppercase tracking-wide">
              <span>🛡️</span> OFFICIAL BOOKING OPTIONS
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="text-amber-200/90">📞 Direct Booking Assistance:</span>
            <a 
              href={GLOBAL_CONFIG.phoneTel} 
              className="font-extrabold text-amber-300 hover:text-white underline transition flex items-center gap-1"
            >
              <span>{GLOBAL_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Brand Name */}
          <button 
            onClick={() => handleNavClick('/')}
            aria-label="Shri Kshetra Dharmasthala Home"
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none shrink-0"
          >
            {/* Crisp Temple Logo Emblem (Sharp SVG) */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 p-1 border border-amber-300/80 shadow-xs group-hover:scale-105 transition-all duration-200 flex items-center justify-center shrink-0">
              <img 
                src="/favicon.svg" 
                alt="Shri Kshetra Dharmasthala Logo" 
                className="w-full h-full object-contain filter drop-shadow-xs" 
              />
            </div>

            {/* Website Name Immediately Right of Logo */}
            <div className="flex flex-col justify-center leading-none">
              <span className="text-[10px] sm:text-xs lg:text-[12px] font-extrabold text-[#8B0000] tracking-wider uppercase font-serif flex items-center gap-1 group-hover:text-[#A00000] transition-colors whitespace-nowrap">
                <span>🛕</span>
                <span>SHRI KSHETRA DHARMASTHALA</span>
              </span>
              <span className="text-xs sm:text-sm lg:text-[15px] font-black text-[#222222] tracking-tight leading-snug mt-0.5 group-hover:text-black transition-colors whitespace-nowrap">
                ONLINE ROOM BOOKING
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className={`px-2.5 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all duration-150 ${
                    isActive 
                      ? 'bg-amber-100/80 text-temple-maroon font-bold border border-amber-300/60 shadow-xs' 
                      : 'text-gray-700 hover:text-temple-maroon hover:bg-amber-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Side CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Instant Booking */}
            <a
              href={instantWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer no-underline"
              title="⚡ Instant WhatsApp Booking"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>⚡ Instant WhatsApp Booking</span>
            </a>

            {/* One Day Advance Booking */}
            <a
              href={GLOBAL_CONFIG.advanceBookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg maroon-gradient-bg text-amber-200 font-bold text-xs border border-amber-400/50 shadow-xs hover:shadow-md hover:text-white transition-all duration-150 transform hover:-translate-y-0.5"
              title="📅 One Day Advance Booking"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>📅 One Day Advance Booking</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={instantWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white shadow-xs lg:hidden cursor-pointer"
              aria-label="Instant WhatsApp Booking"
              title="⚡ Instant WhatsApp Booking"
            >
              <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-amber-50 text-temple-maroon border border-amber-200 hover:bg-amber-100 transition"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-amber-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
          <div className="space-y-1 mb-4">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition ${
                    isActive 
                      ? 'bg-amber-100 text-temple-maroon font-bold border border-amber-300' 
                      : 'text-gray-700 hover:bg-amber-50 hover:text-temple-maroon'
                  }`}
                >
                  <IconComp className="w-4 h-4 text-amber-700" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 space-y-2.5">
            <a
              href={instantWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 text-white font-bold text-sm shadow-sm cursor-pointer no-underline"
            >
              <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
              <span>⚡ Instant WhatsApp Booking</span>
            </a>

            <a
              href={GLOBAL_CONFIG.advanceBookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg maroon-gradient-bg text-amber-200 font-bold text-sm border border-amber-400/50 shadow-sm"
            >
              <Calendar className="w-5 h-5 text-amber-300" />
              <span>📅 One Day Advance Booking</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
