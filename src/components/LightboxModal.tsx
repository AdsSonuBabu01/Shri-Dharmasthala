import React from 'react';
import { X, Building2, MapPin } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col border-2 border-amber-300 shadow-2xl">
        
        {/* Header Bar */}
        <div className="p-4 maroon-gradient-bg text-amber-200 flex items-center justify-between border-b border-amber-400/40">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase">
              {item.category}
            </span>
            <h3 className="text-base font-bold text-white truncate max-w-md">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close image preview"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="flex-grow overflow-hidden bg-black flex items-center justify-center min-h-[300px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            decoding="async"
            className="max-h-[65vh] w-auto object-contain mx-auto"
          />
        </div>

        {/* Caption Bar */}
        <div className="p-4 bg-temple-cream text-gray-800 text-xs border-t border-amber-200">
          <p className="font-semibold text-gray-900 leading-relaxed">{item.description}</p>
        </div>

      </div>
    </div>
  );
};
