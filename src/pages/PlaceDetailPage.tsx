import React from 'react';
import { Layout } from '../components/Layout';
import { PLACES_DATA } from '../data/places';
import { GLOBAL_CONFIG } from '../config/global';
import { navigateTo } from '../utils/router';
import { BookingButtons } from '../components/BookingButtons';
import { 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  FileText, 
  Sparkles, 
  Car, 
  Calendar 
} from 'lucide-react';

interface PlaceDetailPageProps {
  slug: string;
}

export const PlaceDetailPage: React.FC<PlaceDetailPageProps> = ({ slug }) => {
  const place = PLACES_DATA.find(p => p.slug === slug) || PLACES_DATA[0];

  const relatedPlaces = PLACES_DATA.filter(p => p.slug !== place.slug);

  return (
    // Rule: Future Place Pages automatically use Hero Section 1.
    <Layout
      currentPage="place-detail"
      pageTitle={place.title}
      pageDescription={place.shortDesc}
      breadcrumbs={[
        { label: 'Attractions', path: '/' },
        { label: place.title }
      ]}
    >
      <section className="py-14 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Quick Header Summary Badge */}
          <div className="p-6 rounded-3xl bg-amber-50 border-2 border-amber-300 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-200 text-temple-maroon text-xs font-bold uppercase tracking-wider">
                Shri Kshetra Attraction
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">{place.title}</h1>
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-600 mt-1">
                <span className="flex items-center gap-1 text-temple-maroon">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Distance: {place.distance}</span>
                </span>
                <span className="flex items-center gap-1 text-gray-700">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Travel: {place.travelTime}</span>
                </span>
                <span className="flex items-center gap-1 text-emerald-800">
                  <span>Entry: {place.entryFee}</span>
                </span>
              </div>
            </div>

            <div>
              <BookingButtons size="sm" layout="row" />
            </div>
          </div>

          {/* Detailed Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-8 space-y-6">
              
              <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-amber-300 h-80">
                <img
                  src={place.heroImage}
                  alt={place.title}
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="320"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-sm text-gray-800 leading-relaxed">
                <h2 className="text-2xl font-black text-temple-maroon">About {place.title}</h2>
                <p>{place.description}</p>
              </div>

              {/* Highlights */}
              <div className="p-6 rounded-2xl bg-temple-cream border border-amber-200 space-y-3">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Key Highlights & Features</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                  {place.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Reach */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200 space-y-2">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Car className="w-4 h-4 text-temple-maroon" />
                  <span>How to Reach from Dharmasthala Bus Stand</span>
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {place.howToReach}
                </p>
              </div>

            </div>

            {/* Sidebar Info & Booking CTA (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-6 rounded-3xl maroon-gradient-bg text-amber-100 border border-amber-400 space-y-4">
                <h3 className="text-lg font-bold text-white">Visiting Guidelines</h3>
                
                <div className="space-y-2 text-xs text-amber-200/90 border-b border-amber-400/40 pb-3">
                  <div className="font-semibold text-white">Timings:</div>
                  <div>{place.timings}</div>
                </div>

                <div className="space-y-2 text-xs text-amber-200/90 border-b border-amber-400/40 pb-3">
                  <div className="font-semibold text-white">Entry Fee:</div>
                  <div>{place.entryFee}</div>
                </div>

                <div className="pt-2">
                  <BookingButtons size="sm" layout="col" />
                </div>
              </div>

              {/* Related Places List */}
              <div className="p-6 rounded-3xl bg-temple-cream border border-amber-200 space-y-4">
                <h3 className="text-sm font-bold text-gray-900">Other Nearby Attractions</h3>
                <div className="space-y-3">
                  {relatedPlaces.map((rel) => (
                    <div
                      key={rel.slug}
                      onClick={() => navigateTo(`/place/${rel.slug}`)}
                      className="cursor-pointer group flex items-center gap-3 p-2 rounded-xl hover:bg-amber-100/80 transition"
                    >
                      <img
                        src={rel.heroImage}
                        alt={rel.title}
                        loading="lazy"
                        decoding="async"
                        width="48"
                        height="48"
                        className="w-12 h-12 rounded-lg object-cover shrink-0"
                      />
                      <div className="text-xs">
                        <div className="font-bold text-gray-900 group-hover:text-temple-maroon line-clamp-1">{rel.title}</div>
                        <div className="text-[11px] text-gray-500">{rel.distance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
};
