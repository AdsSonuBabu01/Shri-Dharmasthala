import React from 'react';
import { Layout } from '../components/Layout';
import { GALLERY_ITEMS } from '../data/gallery';
import { GLOBAL_CONFIG } from '../config/global';
import { navigateTo } from '../utils/router';
import { 
  Building2, 
  Clock, 
  Shirt, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Heart,
  BookOpen
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <Layout
      currentPage="about"
      pageTitle="About Shri Kshetra Dharmasthala"
      pageDescription="Learn about the 800-year sacred history, Lord Manjunatha Swamy, dress code, temple timings, and spiritual heritage of Dharmasthala."
      breadcrumbs={[{ label: 'About Dharmasthala' }]}
    >
      
      {/* SECTION 1: TEMPLE HISTORY & ORIGIN */}
      <section className="py-16 bg-white border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
                800+ Years of Sacred Heritage
              </span>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                History of <span className="text-temple-maroon">Shri Kshetra Dharmasthala</span>
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Shri Kshetra Dharmasthala is an unparalleled holy place located on the banks of the Nethravathi river in Belthangady taluk of Dakshina Kannada district. For over eight centuries, this sacred abode has embodied religious harmony, righteousness (Dharma), and unreserved charity.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Originally known as "Kuduma", the town was renamed "Dharmasthala" (the Abode of Dharma) by Sri Vadiraja Swamy of Udupi, who consecrated the holy Shiva Linga of Lord Manjunatha brought from Kadri. Today, it remains a radiant beacon of hope and devotion for millions across the world.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <div className="text-xs font-bold text-temple-maroon uppercase flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Unique Universal Harmony</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  In Dharmasthala, Lord Manjunatha (Shiva) is worshiped by Madhwa Vaishnavite priests, while the administration is steered by the hereditary Jain Dharmadhikari, Dr. D. Veerendra Heggade — showcasing complete inter-faith unity.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-amber-300">
                <img
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=75"
                  alt="Shri Kshetra Dharmasthala Temple Gopuram"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="380"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>

          </div>

          {/* THE FOUR PILLARS OF DHARMA */}
          <div className="pt-8 border-t border-amber-200/60">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-black text-gray-900">The 4 Pillars of Charity (Chaturveda Danas)</h3>
              <p className="text-xs text-gray-600 mt-1">Dharmasthala practices four eternal forms of selfless service to humanity</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-temple-cream border border-amber-200 text-left space-y-2">
                <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 flex items-center justify-center font-bold text-base">
                  🍚
                </div>
                <h4 className="text-base font-bold text-gray-900">Annadana</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Serving free, wholesome vegetarian hot meals to tens of thousands of pilgrims daily at Annapoorna Chatra.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-temple-cream border border-amber-200 text-left space-y-2">
                <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 flex items-center justify-center font-bold text-base">
                  🛡️
                </div>
                <h4 className="text-base font-bold text-gray-900">Abhayadana</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Offering shelter, protection, and peaceful dispute resolution (Hoyulu) free of cost to those in distress.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-temple-cream border border-amber-200 text-left space-y-2">
                <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 flex items-center justify-center font-bold text-base">
                  🩺
                </div>
                <h4 className="text-base font-bold text-gray-900">Aushadhadana</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Providing modern healthcare, Ayurveda, Naturopathy, and mobile hospitals for rural medical care.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-temple-cream border border-amber-200 text-left space-y-2">
                <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 flex items-center justify-center font-bold text-base">
                  📚
                </div>
                <h4 className="text-base font-bold text-gray-900">Vidyadana</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Running schools, colleges, engineering, and vocational training institutes empowering thousands of students.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: TEMPLE TIMINGS */}
      <section className="py-14 bg-temple-cream border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Daily Schedule
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Temple Darshan & Meal Timings
            </h2>
            <p className="text-sm text-gray-600">
              Plan your day according to the sacred schedule of Shri Manjunatha Swamy Temple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Morning Darshan */}
            <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-temple-maroon flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Morning Darshan</h3>
              <div className="text-sm font-extrabold text-temple-maroon">
                6:30 AM – 2:00 PM
              </div>
              <p className="text-xs text-gray-600">
                Morning Abhisheka and Nirmalya Darshan followed by noon Maha Mangalarathi at 12:00 PM.
              </p>
            </div>

            {/* Evening Darshan */}
            <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-temple-maroon flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Evening Darshan</h3>
              <div className="text-sm font-extrabold text-temple-maroon">
                5:00 PM – 8:30 PM
              </div>
              <p className="text-xs text-gray-600">
                Night Seva and Grand Evening Mangalarathi at 8:00 PM with traditional brass lamp illumination.
              </p>
            </div>

            {/* Annapoorna Free Meals */}
            <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                🍲
              </div>
              <h3 className="text-lg font-bold text-gray-900">Annadana Prasadam</h3>
              <div className="text-xs font-extrabold text-emerald-800 space-y-1">
                <div>Lunch: 11:30 AM – 2:00 PM</div>
                <div>Dinner: 7:00 PM – 8:30 PM</div>
              </div>
              <p className="text-xs text-gray-600">
                Served at Annapoorna Chatra dining complex free for all pilgrims.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: DRESS CODE & TEMPLE RULES */}
      <section className="py-16 bg-white border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Dress Code */}
            <div className="p-8 rounded-3xl bg-temple-cream border border-amber-200 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 flex items-center justify-center">
                  <Shirt className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-gray-900">Mandatory Temple Dress Code</h3>
              </div>

              <div className="space-y-3 text-xs text-gray-700">
                <div className="p-3.5 rounded-xl bg-white border border-amber-200">
                  <span className="font-bold text-temple-maroon block mb-1">👨 Dress Code for Men:</span>
                  <span>Must wear traditional Dhoti / Veshti / Lungi with Uttariya. Shirt and vest must be removed before entering the inner sanctum. Trousers and jeans are restricted inside inner shrine.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-amber-200">
                  <span className="font-bold text-temple-maroon block mb-1">👩 Dress Code for Women:</span>
                  <span>Saree, Half Saree, or Chudidhar / Salwar Kameez with Dupatta. Modern western wear, shorts, and skirts are strictly prohibited.</span>
                </div>
              </div>
            </div>

            {/* Temple Rules & Guidelines */}
            <div className="p-8 rounded-3xl bg-temple-cream border border-amber-200 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-gray-900">Temple Guidelines & Rules</h3>
              </div>

              <div className="space-y-2.5 text-xs text-gray-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Photography and videography inside the inner sanctum are strictly prohibited.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Mobile phones must be switched off or placed on silent mode during darshan line.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Footwear must be deposited at designated free footwear counters outside the temple.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Consuming non-vegetarian food, alcohol, or smoking anywhere in the Kshetra town is strictly forbidden.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Original photo ID proof is required for room check-in at Yatri Nivas.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: GALLERY PREVIEW */}
      <section className="py-14 bg-temple-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Yatri Accommodation Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
              Yatri Nivas Room Photo Preview
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div key={item.id} className="rounded-2xl overflow-hidden shadow-md border border-amber-200 h-44 relative group">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="176"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-2 left-2 right-2 text-left text-white text-xs font-bold truncate">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={() => navigateTo('/gallery')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl maroon-gradient-bg text-amber-200 font-bold text-sm shadow-md hover:text-white transition"
            >
              <span>View Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </Layout>
  );
};
