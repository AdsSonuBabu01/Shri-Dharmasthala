import React from 'react';
import { Layout } from '../components/Layout';
import { getPillarData, PILLARS_DATA } from '../data/pillars';
import { navigateTo } from '../utils/router';
import { BookingButtons } from '../components/BookingButtons';
import { ROOM_OPTIONS } from '../data/rooms';
import { PLACES_DATA } from '../data/places';
import { 
  Calendar, 
  User, 
  Clock, 
  List, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  ShieldCheck, 
  HelpCircle, 
  Home,
  Building,
  Bed,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface PillarPageProps {
  slug: string;
}

export const PillarPage: React.FC<PillarPageProps> = ({ slug }) => {
  const pillar = getPillarData(slug) || PILLARS_DATA['dharmasthala-room-booking'];

  const handleTocClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isMainHub = pillar.isMainHub || pillar.slug === 'dharmasthala-room-booking';

  return (
    <Layout
      currentPage="pillar-detail"
      pageTitle={pillar.metaTitle}
      pageDescription={pillar.metaDescription}
      keywords={[pillar.primaryKeyword, 'dharmasthala room booking', 'dharmasthala accommodation', 'yatri nivas dharmasthala']}
      canonicalUrl={pillar.canonicalUrl}
      ogImage={pillar.heroImage}
      breadcrumbs={[
        { label: 'Accommodation', path: '/dharmasthala-room-booking' },
        { label: pillar.category, path: '/dharmasthala-room-booking' },
        { label: pillar.title }
      ]}
      faqSchemaItems={pillar.faqs}
      articleData={{
        headline: pillar.title,
        image: pillar.heroImage,
        datePublished: '2026-01-15',
        authorName: 'Shri Kshetra Pilgrim Advisory Desk',
        category: pillar.category
      }}
    >
      <div className="bg-white py-12 text-left">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Breadcrumb Visual Trail */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
            <button onClick={() => navigateTo('/')} className="hover:text-temple-maroon flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-amber-600" />
              <span>Home</span>
            </button>
            <span>/</span>
            <button onClick={() => navigateTo('/dharmasthala-room-booking')} className="hover:text-temple-maroon font-semibold text-gray-700">
              Accommodation Hub
            </button>
            {!isMainHub && (
              <>
                <span>/</span>
                <span className="text-amber-800 font-bold line-clamp-1">{pillar.primaryKeyword}</span>
              </>
            )}
          </nav>

          {/* Header Banner */}
          <header className="space-y-4 pb-6 border-b border-amber-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full maroon-gradient-bg text-amber-200 text-xs font-bold shadow-xs">
                {pillar.category}
              </span>
              {isMainHub && (
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                  ★ Primary Master Hub
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-medium">
                Primary Keyword: {pillar.primaryKeyword}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              {pillar.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-600 pt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>Last Updated: {pillar.lastUpdated}</span>
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4 text-amber-700" />
                <span>Author: Shri Kshetra Pilgrim Advisory Desk</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>{pillar.readTime}</span>
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-amber-200 max-h-[420px]">
            <img 
              src={pillar.heroImage} 
              alt={pillar.title} 
              width="1200"
              height="420"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">Shri Kshetra Accommodation Network</p>
                <p className="text-sm font-bold sm:text-base">{pillar.primaryKeyword.toUpperCase()}</p>
              </div>
            </div>
          </div>

          {/* Main Hub Backlink Banner (for Supporting Pillars) */}
          {!isMainHub && (
            <div className="p-6 rounded-2xl maroon-gradient-bg text-white shadow-md border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-300 text-xs font-bold uppercase tracking-wide">
                  <Building className="w-4 h-4 text-amber-300" />
                  <span>Main Authority Master Hub</span>
                </div>
                <h3 className="text-lg font-bold text-white">Dharmasthala Room Booking Master Guide</h3>
                <p className="text-xs text-amber-100 max-w-xl">
                  Looking for the complete master accommodation hub covering all guest houses, tariffs, and booking steps?
                </p>
              </div>
              <button
                onClick={() => navigateTo('/dharmasthala-room-booking')}
                className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold text-xs shadow-sm transition flex items-center gap-1.5"
              >
                <span>Visit Primary Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Key Takeaways Box */}
          {pillar.keyTakeaways && pillar.keyTakeaways.length > 0 && (
            <div className="p-6 rounded-2xl bg-amber-50/90 border border-amber-300 space-y-3">
              <div className="flex items-center gap-2 text-sm font-extrabold text-temple-maroon">
                <ShieldCheck className="w-5 h-5 text-amber-700" />
                <span>Key Takeaways & Pilgrim Summary</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-800">
                {pillar.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-amber-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Table of Contents */}
          {pillar.tableOfContents && pillar.tableOfContents.length > 0 && (
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <List className="w-4 h-4 text-amber-700" />
                <span>On This Page (Table of Contents)</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {pillar.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <button
                      onClick={() => handleTocClick(toc.id)}
                      className="hover:text-temple-maroon hover:underline text-left transition flex items-center gap-1.5"
                    >
                      <span className="text-amber-700 font-bold">•</span>
                      <span>{toc.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Content Sections */}
          <div className="prose prose-amber max-w-none space-y-10 text-gray-800 text-sm leading-relaxed">
            
            {/* Intro paragraph */}
            <p className="text-base text-gray-800 font-medium leading-relaxed bg-amber-50/40 p-5 rounded-2xl border-l-4 border-temple-maroon">
              {pillar.intro}
            </p>

            {/* Render Each Section */}
            {pillar.sections.map((sec) => (
              <section id={sec.id} key={sec.id} className="space-y-4 pt-4 border-t border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2 text-temple-maroon">
                  <span>{sec.heading}</span>
                </h2>

                <p className="text-gray-700 leading-relaxed">{sec.body}</p>

                {/* Subsections */}
                {sec.subsections && sec.subsections.length > 0 && (
                  <div className="space-y-3 my-3">
                    {sec.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="bg-amber-50/40 p-4 rounded-xl border border-amber-200/60 text-left space-y-1">
                        <h3 className="font-bold text-sm text-amber-900">{sub.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{sub.body}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullets */}
                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="space-y-2 bg-gray-50/80 p-4 rounded-xl border border-gray-200/80 my-3">
                    {sec.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Table */}
                {sec.table && (
                  <div className="overflow-x-auto my-4 rounded-2xl border border-amber-200 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm text-gray-800 bg-white">
                      <thead className="bg-amber-100 text-temple-maroon font-bold border-b border-amber-200">
                        <tr>
                          {sec.table.headers.map((h, i) => (
                            <th key={i} className="px-4 py-3 font-bold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100">
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-amber-50/30' : 'bg-white'}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-3">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* Supporting Pillars Grid (Main Hub or Supporting Pages) */}
            {pillar.supportingPillarsLinks && pillar.supportingPillarsLinks.length > 0 && (
              <section id="supporting-pillars-network" className="pt-6 space-y-4">
                <div className="flex items-center gap-2 text-lg font-bold text-temple-maroon">
                  <Compass className="w-5 h-5 text-amber-600" />
                  <h2>{isMainHub ? 'Dedicated Accommodation Pillar Pages' : 'Related Accommodation Pillar Guides'}</h2>
                </div>
                <p className="text-xs text-gray-600">
                  {isMainHub 
                    ? 'Explore dedicated pillar guides covering specific booking modes, temple guest houses, room types, and proximity options:'
                    : 'Access additional specialized accommodation guides across the Dharmasthala pilgrim network:'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {pillar.supportingPillarsLinks.map((link, idx) => (
                    <div 
                      key={idx}
                      onClick={() => navigateTo(link.path)}
                      className="group cursor-pointer bg-amber-50/70 rounded-2xl p-4 border border-amber-200 hover:bg-amber-100/80 transition space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-bold text-temple-maroon group-hover:text-amber-800">
                          <span>{link.title}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-amber-700" />
                        </div>
                        <p className="text-xs text-gray-600 pt-1 line-clamp-2">{link.description}</p>
                      </div>
                      <div className="text-[11px] font-bold text-amber-800 flex items-center gap-1 pt-2">
                        <span>Read Pillar Guide</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Quick Action Booking Buttons */}
            <div className="p-8 rounded-3xl bg-amber-50 border-2 border-amber-300 shadow-md text-center space-y-4 my-8">
              <h3 className="text-xl font-extrabold text-gray-900">Need Instant Room Booking Assistance?</h3>
              <p className="text-xs sm:text-sm text-gray-700 max-w-xl mx-auto">
                Connect directly with our pilgrim accommodation desk via WhatsApp or submit our quick online reservation form for instant guidance.
              </p>
              <div className="max-w-md mx-auto pt-2">
                <BookingButtons fullWidth variant="amber" />
              </div>
            </div>

            {/* FAQ Accordion Section */}
            {pillar.faqs && pillar.faqs.length > 0 && (
              <section id="pillar-faqs" className="pt-6 space-y-4">
                <div className="flex items-center gap-2 text-lg font-bold text-temple-maroon">
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                  <h2>Frequently Asked Questions ({pillar.primaryKeyword})</h2>
                </div>

                <div className="space-y-3">
                  {pillar.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2 text-left">
                      <h3 className="font-bold text-sm text-gray-900 flex items-center gap-2">
                        <span className="text-amber-700 font-extrabold">Q:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-5">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* People Also Ask Section */}
            {pillar.paaQuestions && pillar.paaQuestions.length > 0 && (
              <section id="paa-questions" className="pt-6 space-y-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-lg font-bold text-temple-maroon">
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                  <h2>People Also Ask (PAA Questions & Answers)</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pillar.paaQuestions.map((paa, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5 text-left">
                      <h3 className="font-bold text-xs text-amber-900 flex items-start gap-1.5">
                        <span className="text-amber-700 font-extrabold shrink-0">•</span>
                        <span>{paa.question}</span>
                      </h3>
                      <p className="text-xs text-gray-700 leading-relaxed pl-3">
                        {paa.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Rooms Spotlight */}
            <section className="pt-6 space-y-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-lg font-bold text-temple-maroon">
                  <Bed className="w-5 h-5 text-amber-600" />
                  <h2>Available Room Types in Dharmasthala</h2>
                </div>
                <button onClick={() => navigateTo('/room-types')} className="text-xs font-bold text-temple-maroon hover:underline">
                  View All Rooms →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ROOM_OPTIONS.slice(0, 3).map((room) => (
                  <div key={room.id} className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200/80 space-y-2 text-left">
                    <img src={room.image} alt={room.name} width="300" height="130" loading="lazy" decoding="async" className="w-full h-32 object-cover rounded-xl" />
                    <h4 className="text-xs font-bold text-gray-900 line-clamp-1">{room.name}</h4>
                    <p className="text-[11px] text-gray-600">{room.guestCapacity} • {room.acType}</p>
                    <button 
                      onClick={() => navigateTo('/booking')}
                      className="w-full py-1.5 rounded-lg bg-temple-maroon text-amber-200 text-xs font-bold hover:bg-amber-900 transition mt-1"
                    >
                      Book Room
                    </button>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
};
