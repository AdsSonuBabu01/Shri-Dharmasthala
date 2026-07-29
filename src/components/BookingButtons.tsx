import React from 'react';
import { Zap, Calendar } from 'lucide-react';
import { GLOBAL_CONFIG } from '../config/global';

interface BookingButtonsProps {
  layout?: 'row' | 'col' | 'auto';
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
  roomName?: string;
  className?: string;
  fullWidth?: boolean;
}

export const BookingButtons: React.FC<BookingButtonsProps> = ({
  layout = 'auto',
  size = 'md',
  showSubtext = true,
  roomName,
  className = '',
  fullWidth = false,
}) => {
  const instantLink = roomName
    ? `https://wa.me/919903490617?text=${encodeURIComponent(
        `Hello, I want Instant Same Day Room Booking.\n\nName:\nMobile:\nCheck-in Date:\nNumber of Guests:\nRoom Type: ${roomName}\nSpecial Request:\n\nPlease confirm room availability.`
      )}`
    : GLOBAL_CONFIG.instantBookingLink;

  const advanceLink = GLOBAL_CONFIG.advanceBookingLink;

  const layoutClasses = 
    layout === 'row' ? 'flex flex-row flex-wrap gap-2.5 items-center' :
    layout === 'col' ? 'flex flex-col gap-2.5 w-full' :
    'flex flex-col sm:flex-row flex-wrap gap-2.5 items-stretch sm:items-center w-full';

  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className={`${layoutClasses} ${className}`}>
      {/* 1. Instant Booking (WhatsApp) */}
      <a
        href={instantLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
          isSm ? 'px-3 py-2 text-xs' : isLg ? 'px-6 py-4 text-base' : 'px-4 py-3 text-sm'
        } ${fullWidth || layout === 'col' ? 'w-full' : 'flex-1 sm:flex-initial'}`}
      >
        <Zap className={`${isSm ? 'w-3.5 h-3.5' : isLg ? 'w-5 h-5' : 'w-4 h-4'} text-amber-300 fill-amber-300 shrink-0`} />
        <div className="text-center sm:text-left leading-tight">
          <div className="font-extrabold flex items-center justify-center sm:justify-start gap-1">
            <span>⚡ Instant Booking</span>
          </div>
          {showSubtext && (
            <div className={`font-medium text-emerald-100/90 ${isSm ? 'text-[10px]' : 'text-xs'}`}>
              (Atkal Booking / Same Day Booking)
            </div>
          )}
        </div>
      </a>

      {/* 2. One Day Advance Booking */}
      <a
        href={advanceLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-center gap-2 rounded-xl maroon-gradient-bg text-amber-200 hover:text-white font-bold border border-amber-400/60 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
          isSm ? 'px-3 py-2 text-xs' : isLg ? 'px-6 py-4 text-base' : 'px-4 py-3 text-sm'
        } ${fullWidth || layout === 'col' ? 'w-full' : 'flex-1 sm:flex-initial'}`}
      >
        <Calendar className={`${isSm ? 'w-3.5 h-3.5' : isLg ? 'w-5 h-5' : 'w-4 h-4'} text-amber-300 shrink-0`} />
        <span className="font-extrabold whitespace-nowrap">📅 One Day Advance Booking</span>
      </a>
    </div>
  );
};
