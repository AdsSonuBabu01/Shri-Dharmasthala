import React from 'react';
import { 
  Building2, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ExternalLink, 
  ChevronRight,
  Compass
} from 'lucide-react';
import { GLOBAL_CONFIG } from '../config/global';
import { navigateTo } from '../utils/router';
import { BookingButtons } from './BookingButtons';
import { PILLARS_DATA } from '../data/pillars';

export const Footer: React.FC = () => {
  const handleNav = (path: string) => {
    navigateTo(path);
  };

  // Get live indexable pillar pages
  const validPillarPages = Object.values(PILLARS_DATA).filter(
    (p) => p && p.slug && p.title
  );

  return (
    <footer className="bg-gray-950 text-gray-300 border-t-4 border-amber-400">
      
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-950 to-amber-900 p-1 sm:p-1.5 border border-amber-500/40 shadow-lg flex items-center justify-center shrink-0">
                <img 
                  src="/favicon.svg" 
                  alt="Shri Kshetra Dharmasthala Logo" 
                  className="w-full h-full object-contain filter drop-shadow-xs" 
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="text-[11px] sm:text-xs font-extrabold text-amber-400 tracking-wider uppercase font-serif flex items-center gap-1">
                  <span>🛕</span>
                  <span>SHRI KSHETRA DHARMASTHALA</span>
                </span>
                <span className="text-xs sm:text-sm font-black text-white tracking-tight leading-snug mt-0.5">
                  ONLINE ROOM BOOKING
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Official pilgrim accommodation assistance portal providing room reservation guidance for Yatri Nivas, double rooms, family bedrooms, and guest house stays near Shri Manjunatha Swamy Temple in Dharmasthala.
            </p>

            <div className="space-y-2 text-xs text-gray-300 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Call Helpline: </span>
                <a href={GLOBAL_CONFIG.phoneTel} className="text-amber-300 font-bold hover:underline">
                  {GLOBAL_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: </span>
                <a href={GLOBAL_CONFIG.instantBookingLink} target="_blank" rel="noopener noreferrer" className="text-emerald-300 font-bold hover:underline">
                  {GLOBAL_CONFIG.whatsappNumber}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{GLOBAL_CONFIG.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <BookingButtons size="sm" layout="col" />
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 pb-2 border-b border-gray-800">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home Page', path: '/' },
                { label: 'About Dharmasthala', path: '/about' },
                { label: 'Room Types & Categories', path: '/room-types' },
                { label: 'Online Room Booking', path: '/booking' },
                { label: 'Facilities & Yatri Nivas', path: '/facilities' },
                { label: 'Photo Gallery', path: '/gallery' },
                { label: 'Blog & Pilgrim Guides', path: '/blog' },
                { label: 'Frequently Asked Questions', path: '/faq' },
                { label: 'Contact Us', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.path);
                    }}
                    className="flex items-center gap-1.5 hover:text-amber-300 transition text-gray-300"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-500" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Places (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 pb-2 border-b border-gray-800">
              Legal & Information
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); handleNav('/privacy-policy'); }} className="hover:text-amber-300 transition text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" onClick={(e) => { e.preventDefault(); handleNav('/terms-and-conditions'); }} className="hover:text-amber-300 transition text-gray-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/sitemap" onClick={(e) => { e.preventDefault(); handleNav('/sitemap'); }} className="hover:text-amber-300 transition text-gray-300">
                  XML Sitemap
                </a>
              </li>
              <li>
                <a href="/robots" onClick={(e) => { e.preventDefault(); handleNav('/robots'); }} className="hover:text-amber-300 transition text-gray-300">
                  Robots.txt
                </a>
              </li>
              <li className="pt-2 text-[11px] text-amber-400 font-bold uppercase tracking-wider">
                Popular Attractions
              </li>
              <li>
                <a href="/place/annapoorna-chatra" onClick={(e) => { e.preventDefault(); handleNav('/place/annapoorna-chatra'); }} className="hover:text-amber-300 transition text-gray-300">
                  Annapoorna Chatra
                </a>
              </li>
              <li>
                <a href="/place/bahubali-statue-ratnagiri" onClick={(e) => { e.preventDefault(); handleNav('/place/bahubali-statue-ratnagiri'); }} className="hover:text-amber-300 transition text-gray-300">
                  Bahubali Statue
                </a>
              </li>
              <li>
                <a href="/place/manjusha-car-museum" onClick={(e) => { e.preventDefault(); handleNav('/place/manjusha-car-museum'); }} className="hover:text-amber-300 transition text-gray-300">
                  Manjusha Museum
                </a>
              </li>
              <li>
                <a href="/place/southadka-ganapathi-temple" onClick={(e) => { e.preventDefault(); handleNav('/place/southadka-ganapathi-temple'); }} className="hover:text-amber-300 transition text-gray-300">
                  Southadka Temple
                </a>
              </li>
              <li className="pt-2 text-[11px] text-amber-400 font-bold uppercase tracking-wider">
                Popular Pilgrim Guides
              </li>
              <li>
                <a href="/blog/bangalore-to-dharmasthala" onClick={(e) => { e.preventDefault(); handleNav('/blog/bangalore-to-dharmasthala'); }} className="hover:text-amber-300 transition text-gray-300">
                  Bangalore to Dharmasthala Route
                </a>
              </li>
              <li>
                <a href="/blog/accommodation-guide" onClick={(e) => { e.preventDefault(); handleNav('/blog/accommodation-guide'); }} className="hover:text-amber-300 transition text-gray-300">
                  Yatri Nivas Stay Guide
                </a>
              </li>
              <li>
                <a href="/blog/dharmasthala-temple-history" onClick={(e) => { e.preventDefault(); handleNav('/blog/dharmasthala-temple-history'); }} className="hover:text-amber-300 transition text-gray-300">
                  Temple History & Legacy
                </a>
              </li>
              <li>
                <a href="/blog/dharmasthala-temple-darshan-timings-pooja-sevas" onClick={(e) => { e.preventDefault(); handleNav('/blog/dharmasthala-temple-darshan-timings-pooja-sevas'); }} className="hover:text-amber-300 transition text-gray-300">
                  Darshan Timings & Seva Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Map Embed (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 pb-2 border-b border-gray-800 flex items-center justify-between">
              <span>Google Map Location</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </h3>
            <div className="rounded-xl overflow-hidden border border-gray-800 shadow-lg h-44 bg-gray-900 relative">
              <iframe
                title="Shri Kshetra Dharmasthala Google Map"
                src={GLOBAL_CONFIG.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
            <p className="text-[11px] text-gray-400 text-center">
              Located near Dharmasthala Bus Stand & Main Temple Complex
            </p>
          </div>

        </div>

        {/* Dedicated Pillar Pages Section */}
        <section aria-labelledby="footer-pillar-pages-heading" className="pt-8 border-t border-gray-800 space-y-4">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400 shrink-0" />
            <h3 id="footer-pillar-pages-heading" className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Pillar Pages
            </h3>
          </div>
          
          <p className="text-xs text-gray-400">
            Explore our primary accommodation pillar guides and topic authority hubs for Shri Kshetra Dharmasthala:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {validPillarPages.map((pillar) => {
              const displayTitle = pillar.title.split('|')[0].trim();
              const fullPath = `/${pillar.slug}`;
              return (
                <a
                  key={pillar.slug}
                  href={fullPath}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(fullPath);
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-900/70 hover:bg-gray-900 border border-gray-800 hover:border-amber-400/40 transition group text-xs text-gray-300 hover:text-amber-300"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="line-clamp-1 font-medium">{displayTitle}</span>
                </a>
              );
            })}
          </div>
        </section>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-gray-900 border-t border-gray-800 py-4 px-4 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} <span className="text-amber-300 font-semibold">{GLOBAL_CONFIG.businessName}</span>. All Rights Reserved.
          </div>
          <div className="text-[11px] text-gray-500">
            Devotional Yatri Room Reservation Guidance Portal | Belthangady, Dakshina Kannada, Karnataka
          </div>
        </div>
      </div>

    </footer>
  );
};
