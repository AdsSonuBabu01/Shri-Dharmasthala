import React from 'react';
import { Layout } from '../components/Layout';
import { ROOM_OPTIONS } from '../data/rooms';
import { FACILITIES } from '../data/facilities';
import { FAQS } from '../data/faqs';
import { PLACES_DATA } from '../data/places';
import { BLOGS_DATA } from '../data/blogs';
import { GLOBAL_CONFIG } from '../config/global';
import { navigateTo } from '../utils/router';
import { BookingButtons } from '../components/BookingButtons';
import { BhaktaNiwasBooking } from '../components/BhaktaNiwasBooking';
import templeHeroImg from '../assets/images/temple_hero.jpg';
import { 
  Building2, 
  CheckCircle2, 
  Users, 
  Wind, 
  Flame, 
  ArrowRight, 
  Star, 
  MessageCircle, 
  FileText, 
  Car, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  MapPin,
  HelpCircle
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <Layout 
      currentPage="home"
      pageTitle="Shri Kshetra Dharmasthala Online Room Booking & Accommodation Portal"
      pageDescription="Book Yatri Nivas rooms online for Shri Kshetra Dharmasthala temple visit. Clean AC & Non-AC rooms, family bedrooms, 24x7 hot water, parking & 3-min walk to temple."
      keywords={[
        "dharmasthala room booking",
        "dharmasthala accommodation booking",
        "dharmasthala temple room booking",
        "dharmasthala free room booking",
        "rooms in dharmasthala",
        "dharmasthala room booking online",
        "hotels in dharmasthala",
        "dharmasthala accommodation",
        "lodges in dharmasthala",
        "dharmasthala temple rooms"
      ]}
      faqSchemaItems={FAQS.map(f => ({ question: f.question, answer: f.answer }))}
    >
      
      {/* 1. ABOUT DHARMASTHALA PREVIEW SECTION */}
      <section className="py-16 bg-white border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Sacred Pilgrimage Town</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                Welcome to <span className="text-temple-maroon">Shri Kshetra Dharmasthala</span>
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Situated along the picturesque banks of the Netravathi River in Dakshina Kannada district, Shri Kshetra Dharmasthala is an ancient 800-year-old pilgrimage town blessed by Lord Manjunatha Swamy (Shiva).
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Millions of yatris visit every year to experience divine peace, partake in free Annapoorna meals (Annadana), and seek blessings. Our room booking service provides clean, convenient, and comfortable Yatri Nivas stay options close to the temple premises.
              </p>

              {/* 4 Pillars of Dharma */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200">
                  <div className="text-xs font-bold text-temple-maroon uppercase">🍚 Annadana</div>
                  <div className="text-xs text-gray-600 mt-0.5">Free Meals to Thousands Daily</div>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200">
                  <div className="text-xs font-bold text-temple-maroon uppercase">🛡️ Abhayadana</div>
                  <div className="text-xs text-gray-600 mt-0.5">Protection & Free Justice</div>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200">
                  <div className="text-xs font-bold text-temple-maroon uppercase">🩺 Aushadhadana</div>
                  <div className="text-xs text-gray-600 mt-0.5">Free Medical Assistance</div>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200">
                  <div className="text-xs font-bold text-temple-maroon uppercase">📚 Vidyadana</div>
                  <div className="text-xs text-gray-600 mt-0.5">Education for All</div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => navigateTo('/about')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-temple-maroon text-amber-200 font-bold text-sm hover:bg-amber-900 transition shadow-md"
                >
                  <span>Learn More About Temple History</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300">
                <img
                  src={templeHeroImg}
                  alt="Shri Kshetra Dharmasthala Temple Courtyard"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                  className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-950 via-gray-900/80 to-transparent text-white">
                  <div className="text-xs font-bold text-amber-300 uppercase">Presiding Deity</div>
                  <div className="text-xl font-extrabold">Shri Manjunatha Swamy Temple</div>
                  <div className="text-xs text-amber-100/80 mt-1">Darshan Timings: 6:30 AM – 2:00 PM | 5:00 PM – 8:30 PM</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 1.5 BHAKTA NIWAS BOOKING OPTIONS */}
      <section className="py-16 bg-amber-50/60 border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BhaktaNiwasBooking
            title="Shri Kshetra Dharmasthala Bhakta Niwas Booking"
            subtitle="Reserve your Yatri Nivas stay instantly via WhatsApp or pre-plan with our advance reservation form."
          />
        </div>
      </section>

      {/* 2. WHY CHOOSE US (TRUST FACTORS) */}
      <section className="py-14 bg-temple-cream border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Pilgrim Convenience
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Why Book Rooms Through Our Assistance Portal?
            </h2>
            <p className="text-sm text-gray-600">
              We make pilgrim room reservations simple, fast, and stress-free for families visiting Dharmasthala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-amber-200/80 shadow-xs hover:shadow-md transition text-left space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-temple-maroon flex items-center justify-center font-bold">
                🛕
              </div>
              <h3 className="text-base font-bold text-gray-900">3-Min Walk to Temple</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Yatri Nivas & room blocks situated right in the heart of the temple complex near darshan queues.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-amber-200/80 shadow-xs hover:shadow-md transition text-left space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-temple-maroon flex items-center justify-center">
                <Flame className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-base font-bold text-gray-900">24x7 Solar Hot Water</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Continuous solar & geyser hot water in all washrooms for early morning holy bath before darshan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-amber-200/80 shadow-xs hover:shadow-md transition text-left space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-temple-maroon flex items-center justify-center font-bold">
                🚗
              </div>
              <h3 className="text-base font-bold text-gray-900">Spacious Parking</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dedicated parking lots for cars, tempo travelers, and pilgrim buses with CCTV security.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-amber-200/80 shadow-xs hover:shadow-md transition text-left space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-temple-maroon flex items-center justify-center font-bold">
                📲
              </div>
              <h3 className="text-base font-bold text-gray-900">Instant WhatsApp Booking</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Send your travel dates to +91 99034 90617 for fast room availability and reservation help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ROOM TYPES */}
      <section className="py-16 bg-white border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
                Yatri Accommodations
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
                Featured Room Types & Stay Options
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Choose from comfortable double rooms, triple bedrooms, and large family suites.
              </p>
            </div>
            <button
              onClick={() => navigateTo('/room-types')}
              className="inline-flex items-center gap-2 text-temple-maroon font-bold text-sm hover:underline"
            >
              <span>View All Room Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOM_OPTIONS.slice(0, 3).map((room) => (
              <div 
                key={room.id}
                className="bg-temple-cream rounded-2xl overflow-hidden border border-amber-200/80 temple-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="200"
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-temple-maroon text-amber-200 text-xs font-extrabold shadow-md">
                      {room.acType}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{room.name}</h3>
                      </div>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                        {room.availabilityStatus}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 line-clamp-2">{room.description}</p>

                    <div className="text-xs font-semibold text-gray-800 flex items-center gap-1.5 pt-1">
                      <Users className="w-4 h-4 text-temple-maroon shrink-0" />
                      <span>Occupancy: <strong>{room.maxOccupancy}</strong> ({room.guestCapacity})</span>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-amber-200/60">
                      <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">Amenities:</div>
                      {room.facilities.slice(0, 3).map((fac, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{fac}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <BookingButtons roomName={room.name} size="sm" layout="col" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FACILITIES PREVIEW */}
      <section className="py-16 bg-temple-cream border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Facilities & Amenities
            </h2>
            <p className="text-sm text-gray-600">
              Thoughtfully curated services ensuring senior citizens, families, and group yatris have a safe and comfortable stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.slice(0, 6).map((fac) => (
              <div 
                key={fac.id}
                className="bg-white p-6 rounded-xl border border-gray-200 text-left space-y-2"
              >
                <h3 className="text-base font-bold text-gray-900">{fac.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{fac.description}</p>
              </div>
            ))}
          </div>

          <div className="text-left mt-8">
            <button
              onClick={() => navigateTo('/facilities')}
              className="px-6 py-2.5 rounded-lg maroon-gradient-bg text-amber-200 font-bold text-sm hover:text-white transition"
            >
              View All Facilities
            </button>
          </div>
        </div>
      </section>

      {/* 5. NEARBY ATTRACTIONS / PLACE PAGES SECTION */}
      <section className="py-16 bg-white border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Pilgrimage Sightseeing
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Famous Attractions in Shri Kshetra Dharmasthala
            </h2>
            <p className="text-sm text-gray-600">
              Explore key holy landmarks during your stay at Dharmasthala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLACES_DATA.map((place) => (
              <div
                key={place.slug}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${place.title}`}
                onClick={() => navigateTo(`/place/${place.slug}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateTo(`/place/${place.slug}`);
                  }
                }}
                className="group cursor-pointer bg-temple-cream rounded-2xl overflow-hidden border border-amber-200/80 temple-card-hover flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={place.heroImage}
                      alt={place.title}
                      loading="lazy"
                      decoding="async"
                      width="350"
                      height="180"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-gray-900/80 text-amber-300 text-[11px] font-bold">
                      {place.distance}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-temple-maroon transition line-clamp-1">
                      {place.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {place.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="text-xs font-bold text-temple-maroon flex items-center justify-between border-t border-amber-200/60 pt-2">
                    <span>View Place Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PILGRIM REVIEWS */}
      <section className="py-16 bg-temple-cream border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Pilgrim Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Devotee Experiences & Reviews
            </h2>
            <p className="text-sm text-gray-600">
              Read what Yatris from Bangalore, Mysore, and Mangalore say about our room booking assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Suresh & Family',
                location: 'Bangalore',
                comment: 'Booked a 4-bed family AC room via WhatsApp for our elderly parents. Room was spotless, hot water was available early morning at 5 AM, and temple was just a 3-minute walk.',
                rating: 5
              },
              {
                name: 'Dr. Ananya Hegde',
                location: 'Mangalore',
                comment: 'Filled the online room request form and got direct assistance within minutes. Very helpful response regarding parking and Annapoorna chatra meal timings.',
                rating: 5
              },
              {
                name: 'Kiran Kumar & Group',
                location: 'Mysore',
                comment: 'We stayed in the Family Bedroom suite with 8 relatives. Clean western washrooms, elevator for elders, and full power backup during evening rain.',
                rating: 5
              }
            ].map((rev, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-amber-200/80 shadow-xs space-y-3 text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-700 leading-relaxed italic">"{rev.comment}"</p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900">{rev.name}</span>
                  <span className="text-[11px] text-gray-500">{rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 FEATURED PILGRIM GUIDES & BLOG */}
      <section className="py-16 bg-temple-cream border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-200/80 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Travel & Pilgrim Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Essential Dharmasthala Travel & Room Booking Articles
            </h2>
            <p className="text-sm text-gray-600">
              Detailed guides on temple timings, room booking rules, route maps, guest house tariffs, and local sightseeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLOGS_DATA.slice(0, 4).map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(`/blog/${post.slug}`);
                }}
                className="bg-white rounded-2xl border border-amber-200/80 overflow-hidden shadow-xs hover:shadow-md transition group cursor-pointer flex flex-col block text-inherit no-underline"
              >
                <div className="h-44 overflow-hidden relative bg-amber-100">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md maroon-gradient-bg text-amber-200 text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3 text-left">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-gray-500">{post.date}</span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-temple-maroon line-clamp-2 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <div className="pt-2 flex items-center text-xs font-bold text-temple-maroon gap-1">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => navigateTo('/blog')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-temple-maroon text-amber-200 font-bold text-sm hover:bg-amber-900 transition shadow-md"
            >
              <span>Explore All {BLOGS_DATA.length}+ Travel Guides & Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 bg-white border-b border-amber-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Frequently Asked Room Booking Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq) => (
              <div key={faq.id} className="p-5 rounded-2xl bg-temple-cream border border-amber-200/80 text-left space-y-2">
                <h3 className="text-sm font-bold text-temple-maroon flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => navigateTo('/faq')}
              className="inline-flex items-center gap-2 text-temple-maroon font-bold text-sm hover:underline"
            >
              <span>View All Booking & Room FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. GOOGLE MAP EMBED */}
      <section className="py-14 bg-temple-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Location & Map
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              How to Reach Shri Kshetra Dharmasthala
            </h2>
            <p className="text-sm text-gray-600">
              Situated in Belthangady taluk, Dakshina Kannada. Well-connected by KSRTC buses from Bangalore & Mangalore.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-amber-300 h-96 relative">
            <iframe
              title="Shri Kshetra Dharmasthala Map Location"
              src={GLOBAL_CONFIG.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
            ></iframe>
          </div>
        </div>
      </section>

    </Layout>
  );
};
