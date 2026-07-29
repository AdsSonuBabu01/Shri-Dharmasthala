import React from 'react';
import { Layout } from '../components/Layout';
import { ROOM_OPTIONS } from '../data/rooms';
import { GLOBAL_CONFIG } from '../config/global';
import { BookingButtons } from '../components/BookingButtons';
import { 
  Users, 
  CheckCircle2, 
  MessageCircle, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  Bed, 
  Building2 
} from 'lucide-react';

export const RoomTypesPage: React.FC = () => {
  return (
    <Layout
      currentPage="room-types"
      pageTitle="Room Types & Yatri Accommodation"
      pageDescription="Explore available room options including Double Bed, Triple Bed, 4-Bed, 5-Bed, and Family Bedroom Suites near Shri Manjunatha Swamy Temple."
      breadcrumbs={[{ label: 'Room Types' }]}
    >
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Clean & Affordable Lodging
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Shri Kshetra Yatri Nivas Room Categories
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              All room categories are equipped with 24x7 solar & geyser hot water, clean linen, generator power backup, elevator access, and attached modern washrooms.
            </p>
          </div>

          {/* ROOM CARDS LIST */}
          <div className="space-y-10">
            {ROOM_OPTIONS.map((room) => (
              <div 
                key={room.id}
                className="bg-temple-cream rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                
                {/* Left: Image (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[280px] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    decoding="async"
                    width="500"
                    height="350"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full maroon-gradient-bg text-amber-200 text-xs font-extrabold border border-amber-400/40 shadow-md">
                    {room.acType}
                  </div>
                  {room.isPopular && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400 text-gray-950 text-xs font-black shadow-md flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-gray-950" />
                      <span>Popular Choice</span>
                    </div>
                  )}
                </div>

                {/* Right: Details (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/60 pb-3">
                      <div>
                        <h3 className="text-2xl font-black text-temple-maroon tracking-tight">{room.name}</h3>
                        <div className="text-xs font-semibold text-gray-600 mt-1">{room.acType}</div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                          <span>{room.availabilityStatus}</span>
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-bold text-gray-900">
                        <Users className="w-4 h-4 text-temple-maroon shrink-0" />
                        <span>Maximum Occupancy: <strong className="text-temple-maroon">{room.maxOccupancy}</strong></span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-amber-200 text-xs font-medium text-gray-700">
                        <Bed className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>Capacity Details: {room.guestCapacity}</span>
                      </div>
                    </div>

                    {/* Facilities / Amenities Grid */}
                    <div className="pt-2">
                      <div className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                        Included Amenities & Facilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {room.facilities.map((fac, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{fac}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Booking Buttons / Book Now */}
                  <div className="pt-4 border-t border-amber-200/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-xs text-gray-600">
                      <span>Instant confirmation available via WhatsApp or Online Form</span>
                    </div>
                    <BookingButtons roomName={room.name} size="md" layout="row" />
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};
