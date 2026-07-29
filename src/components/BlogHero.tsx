import React from 'react';
import { MessageCircle, Phone, Building2, ChevronRight, Home, ShieldCheck } from 'lucide-react';
import { navigateTo } from '../utils/router';
import { GUEST_HOUSES_LIST, openWhatsAppBooking, getGuestHouseWhatsAppUrl } from '../utils/whatsapp';

export interface BlogHeroProps {
  postTitle: string;
  category?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export const GUEST_HOUSES = GUEST_HOUSES_LIST;

export const BlogHero: React.FC<BlogHeroProps> = ({
  postTitle,
  category,
  breadcrumbs = []
}) => {
  return (
    <section className="relative bg-gradient-to-b from-[#2a1708] via-[#1a0f05] to-[#2a1708] text-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b-4 border-amber-500/80 shadow-2xl">
      {/* Background Decorative Gradient & Gold Luxury Patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 temple-pattern-overlay"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-200/90 flex-wrap">
          <button 
            onClick={() => navigateTo('/')}
            className="flex items-center gap-1 hover:text-amber-100 transition"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>

          {breadcrumbs.length > 0 ? (
            breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-amber-400/60" />
                {bc.path ? (
                  <button 
                    onClick={() => navigateTo(bc.path!)} 
                    className="hover:text-amber-100 transition"
                  >
                    {bc.label}
                  </button>
                ) : (
                  <span className="text-amber-300 font-bold">{bc.label}</span>
                )}
              </React.Fragment>
            ))
          ) : (
            <>
              <ChevronRight className="w-3 h-3 text-amber-400/60" />
              <button onClick={() => navigateTo('/blog')} className="hover:text-amber-100 transition">
                Blog
              </button>
              {category && (
                <>
                  <ChevronRight className="w-3 h-3 text-amber-400/60" />
                  <span className="text-amber-300 font-bold">{category}</span>
                </>
              )}
            </>
          )}
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-inner backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>TRUST GUEST HOUSE BOOKING — DHARMASTHALA</span>
        </div>

        {/* Main Heading H1 (SEO Friendly Dynamic Blog Title) */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-amber-100 tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-md">
          {postTitle}
        </h1>

        {/* Description Box - Modern Hotel Booking Style */}
        <div className="bg-amber-950/40 border border-amber-500/30 backdrop-blur-md rounded-2xl p-5 sm:p-7 max-w-3xl mx-auto space-y-4 text-amber-100/90 text-sm sm:text-base leading-relaxed text-center shadow-xl">
          <p className="font-medium text-amber-100">
            Book your stay at the Dharmasthala Trust Guest Houses. We assist visitors with booking rooms in the following Trust Guest Houses:
          </p>

          {/* List of Trust Guest Houses */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 py-2 text-xs font-semibold text-amber-200">
            {GUEST_HOUSES.map((house) => (
              <a 
                key={house}
                href={getGuestHouseWhatsAppUrl(house)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openWhatsAppBooking(house, e)}
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-amber-900/40 hover:bg-amber-800/70 border border-amber-500/30 hover:border-amber-400 text-amber-200 hover:text-white justify-center text-center transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="line-clamp-1">{house}</span>
              </a>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-amber-200/80 font-medium pt-1">
            Contact us on WhatsApp or Call to check room availability and reserve your stay quickly and easily.
          </p>
        </div>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 max-w-md mx-auto">
          {/* Primary Button (Green WhatsApp) */}
          <a
            href="https://wa.me/919903490617"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp to Book</span>
          </a>

          {/* Secondary Button (Call) */}
          <a
            href="tel:+919903490617"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/50 font-bold text-sm sm:text-base shadow-md backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>Call 99034 90617</span>
          </a>
        </div>

      </div>
    </section>
  );
};
