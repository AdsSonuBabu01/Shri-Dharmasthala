import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { LightboxModal } from '../components/LightboxModal';
import { Image as ImageIcon, ZoomIn, Filter } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Double Bed', 'Triple Bed', '4 Bed Room', '5 Bed Room', 'Family Room', 'Room Interior', 'Bed Setup', 'Bathroom', 'Room Facilities'];

  const filteredItems = selectedCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <Layout
      currentPage="gallery"
      pageTitle="Shri Kshetra Dharmasthala Room Photo Gallery"
      pageDescription="Explore photo gallery of clean Yatri Nivas rooms, Double bed, Triple bed, 4-bed, 5-bed, family suites, room interiors, and attached washrooms."
      breadcrumbs={[{ label: 'Gallery' }]}
    >
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Yatri Accommodation Showcase
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Dharmasthala Yatri Room Photo Gallery
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Explore high-quality photographs of Double Bed, Triple Bed, 4 & 5 Bed rooms, Family Suites, room interiors, clean bedding, and attached washrooms. Click any image for full-screen view.
            </p>
          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="flex items-center justify-center gap-2 flex-wrap pb-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'maroon-gradient-bg text-amber-200 border border-amber-400/60 shadow-md'
                      : 'bg-temple-cream text-gray-700 hover:bg-amber-100 hover:text-temple-maroon border border-amber-200/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${item.title}`}
                onClick={() => setActiveItem(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveItem(item);
                  }
                }}
                className="group cursor-pointer bg-temple-cream rounded-2xl overflow-hidden border border-amber-200/80 temple-card-hover flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <div>
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="240"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center text-white">
                      <div className="p-3 rounded-full bg-amber-400 text-gray-950 shadow-lg">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-md bg-gray-900/80 text-amber-300 text-[11px] font-bold">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-4 space-y-1 text-left">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-temple-maroon transition line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-600 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </Layout>
  );
};
