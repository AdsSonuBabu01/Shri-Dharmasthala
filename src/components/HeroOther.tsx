import React from 'react';
import { ChevronRight, Home, Sparkles } from 'lucide-react';
import { GLOBAL_CONFIG } from '../config/global';
import { navigateTo } from '../utils/router';
import { BookingButtons } from './BookingButtons';

interface HeroOtherProps {
  title: string;
  description: string;
  breadcrumbs?: { label: string; path?: string }[];
  bgImage?: string;
}

export const HeroOther: React.FC<HeroOtherProps> = ({
  title,
  description,
  breadcrumbs = [],
  bgImage = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=75'
}) => {
  return (
    <section className="relative bg-gray-900 text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-b-4 border-amber-400/80">
      {/* Background with Dark Maroon Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/95 to-maroon-950/90"></div>
        <div className="absolute inset-0 temple-pattern-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-200/90 flex-wrap">
            <button 
              onClick={() => navigateTo('/')}
              className="flex items-center gap-1 hover:text-white transition"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-amber-400/60" />
                {bc.path ? (
                  <button 
                    onClick={() => navigateTo(bc.path!)} 
                    className="hover:text-white transition"
                  >
                    {bc.label}
                  </button>
                ) : (
                  <span className="text-amber-300 font-bold">{bc.label}</span>
                )}
              </React.Fragment>
            ))}

            {breadcrumbs.length === 0 && (
              <>
                <ChevronRight className="w-3 h-3 text-amber-400/60" />
                <span className="text-amber-300 font-bold">{title}</span>
              </>
            )}
          </nav>

          {/* Dynamic Page Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-amber-100/90 font-medium leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {/* Booking Buttons */}
          <div className="pt-3 flex flex-col items-center">
            <BookingButtons layout="row" className="justify-center" />
            <div className="text-[11px] text-amber-200/70 mt-2 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Opens Official Booking Portal in New Tab for room reservation</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
