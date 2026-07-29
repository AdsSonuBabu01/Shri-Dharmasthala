import React, { useState, useMemo } from 'react';
import { Layout } from '../components/Layout';
import { BLOGS_DATA } from '../data/blogs';
import { PLACES_DATA } from '../data/places';
import { PILLARS_DATA } from '../data/pillars';
import { navigateTo } from '../utils/router';
import { generateSitemapXml, buildSitemapEntries } from '../utils/sitemapGenerator';
import { 
  Search, 
  MapPin, 
  Building2, 
  BookOpen, 
  Calendar, 
  Compass, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Layers
} from 'lucide-react';

export const SitemapPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Main portal pages
  const mainPages = [
    { title: 'Home Page', path: '/', desc: 'Shri Kshetra Dharmasthala Room Booking & Pilgrim Information Portal' },
    { title: 'About Dharmasthala', path: '/about', desc: 'History, Kshetra Mahatme, and Charity Traditions' },
    { title: 'Online Room Booking Portal', path: '/booking', desc: 'Direct Room Reservation & Availability Checker' },
    { title: 'Room Types & Categories', path: '/room-types', desc: 'AC, Non-AC, Deluxe, and Family Suites' },
    { title: 'Yatri Facilities & Amenities', path: '/facilities', desc: 'Annapoorna Hall, Parking, Cloakrooms, and Water' },
    { title: 'Photo & Video Gallery', path: '/gallery', desc: 'Sacred Sanctum, Rathotsava, and Temple Complex Photos' },
    { title: 'Blog & Pilgrim Guides Directory', path: '/blog', desc: 'Topical Guides, Darshan Timings, and Festival Updates' },
    { title: 'Frequently Asked Questions (FAQ)', path: '/faq', desc: 'Common Queries on Booking, Dress Code, and Timings' },
    { title: 'Contact Us & Helpline', path: '/contact', desc: 'SDM Trust Office Phone Numbers and Email' },
    { title: 'Privacy Policy', path: '/privacy-policy', desc: 'Data Protection & Reservation Security Policies' },
    { title: 'Terms & Conditions', path: '/terms-and-conditions', desc: 'Booking Rules, Cancellation, & Check-In Mandates' },
    { title: 'XML Sitemap Feed', path: '/sitemap', desc: 'Search Engine Crawling Index & Live URL Feed' },
    { title: 'Robots.txt Configuration', path: '/robots', desc: 'Search Crawler Protocol Directives' }
  ];

  // Room Booking Specific Pages
  const roomBookingPages = [
    { title: 'Dharmasthala Room Booking Guide', path: '/dharmasthala-room-booking', type: 'Pillar' },
    { title: 'Dharmasthala Accommodation Booking', path: '/dharmasthala-accommodation-booking', type: 'Pillar' },
    { title: 'Sri Manjunatha Temple Room Booking', path: '/dharmasthala-temple-room-booking', type: 'Pillar' },
    { title: 'Free Room Booking in Dharmasthala', path: '/dharmasthala-free-room-booking', type: 'Pillar' },
    { title: 'Rooms in Dharmasthala Directory', path: '/rooms-in-dharmasthala', type: 'Pillar' },
    { title: 'Dharmasthala Room Booking Online Portal', path: '/dharmasthala-room-booking-online', type: 'Pillar' },
    { title: 'Dharmasthala Accommodation Master Guide', path: '/dharmasthala-accommodation', type: 'Pillar' },
    { title: 'Temple Rooms Booking & Reservation', path: '/dharmasthala-temple-rooms', type: 'Pillar' }
  ];

  // Trust Guest Houses List (Pillars & Master Hub)
  const trustGuestHouses = [
    { name: 'Dharmasthala Trust Guest Houses Master Hub', slug: 'dharmasthala-trust-guest-houses', desc: 'Central guide & directory for all 10 Trust Bhakta Nivas blocks' },
    { name: 'Saketha Guest House Dharmasthala', slug: 'saketha-guest-house-dharmasthala', desc: 'Modern block with passenger lift, AC family suites & paved parking' },
    { name: 'Netravathi Guest House Dharmasthala', slug: 'netravathi-guest-house-dharmasthala', desc: 'Largest complex with spot registration counter & broad bus parking' },
    { name: 'Sharavathi Guest House Dharmasthala', slug: 'sharavathi-guest-house-dharmasthala', desc: 'Peaceful, budget-friendly yatri nivas in lush green surroundings' },
    { name: 'Gangothri Guest House Dharmasthala', slug: 'gangothri-guest-house-dharmasthala', desc: 'Courtyard guest house near Annapoorna Free Dining Hall' },
    { name: 'Gayathri Guest House Dharmasthala', slug: 'gayathri-guest-house-dharmasthala', desc: 'Quiet residential-style guest house for visiting families' },
    { name: 'Vaishali Guest House Dharmasthala', slug: 'vaishali-guest-house-dharmasthala', desc: 'Multi-storey block with elevators, AC suites & multi-level parking' },
    { name: 'Sannidhi Guest House Dharmasthala', slug: 'sannidhi-guest-house-dharmasthala', desc: 'Closest block to main temple gate (~250m) for early morning poojas' },
    { name: 'Rajathadri Guest House Dharmasthala', slug: 'rajathadri-guest-house-dharmasthala', desc: 'Spacious block with 24-hr check-out system & convenient transit' },
    { name: 'Sahyadri Guest House Dharmasthala', slug: 'sahyadri-guest-house-dharmasthala', desc: 'Scenic foothill guest house near KSRTC central bus stand' },
    { name: 'Manjunatha Guest House Dharmasthala', slug: 'manjunatha-guest-house-dharmasthala', desc: 'Central town guest house 3 minutes from Annapoorna Dining Hall' }
  ];

  // Additional 10 Main SEO Authority Hubs from PILLARS_DATA
  const pillarPages = useMemo(() => {
    return Object.entries(PILLARS_DATA).map(([slug, p]) => ({
      slug,
      title: p.title.split('|')[0].trim(),
      description: p.metaDescription
    }));
  }, []);

  // Filtered Blogs by specific topical themes
  const hotelBlogs = useMemo(() => {
    return BLOGS_DATA.filter(b => 
      b.title.toLowerCase().includes('hotel') || 
      b.slug.toLowerCase().includes('hotel') ||
      b.category.toLowerCase().includes('hotel')
    );
  }, []);

  const lodgeBlogs = useMemo(() => {
    return BLOGS_DATA.filter(b => 
      b.title.toLowerCase().includes('lodge') || 
      b.slug.toLowerCase().includes('lodge')
    );
  }, []);

  const guestHouseBlogs = useMemo(() => {
    return BLOGS_DATA.filter(b => 
      b.title.toLowerCase().includes('guest house') || 
      b.title.toLowerCase().includes('yatri nivas') ||
      b.category.toLowerCase().includes('guest house')
    );
  }, []);

  const templeBlogs = useMemo(() => {
    return BLOGS_DATA.filter(b => 
      b.title.toLowerCase().includes('temple') || 
      b.title.toLowerCase().includes('darshan') ||
      b.title.toLowerCase().includes('pooja') ||
      b.category.toLowerCase().includes('temple')
    );
  }, []);

  const travelBlogs = useMemo(() => {
    return BLOGS_DATA.filter(b => 
      b.title.toLowerCase().includes('reach') || 
      b.title.toLowerCase().includes('bus') ||
      b.title.toLowerCase().includes('route') ||
      b.title.toLowerCase().includes('travel') ||
      b.category.toLowerCase().includes('travel')
    );
  }, []);

  const festivalBlogs = useMemo(() => {
    return BLOGS_DATA.filter(b => 
      b.title.toLowerCase().includes('festival') || 
      b.title.toLowerCase().includes('deepotsava') ||
      b.title.toLowerCase().includes('shivaratri')
    );
  }, []);

  // Categories list
  const blogCategories = useMemo(() => {
    const cats = new Set<string>();
    BLOGS_DATA.forEach(b => { if (b.category) cats.add(b.category); });
    return Array.from(cats);
  }, []);

  // Filter functionality
  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return BLOGS_DATA;
    const q = searchQuery.toLowerCase();
    return BLOGS_DATA.filter(b => 
      b.title.toLowerCase().includes(q) || 
      b.slug.toLowerCase().includes(q) ||
      b.metaDescription?.toLowerCase().includes(q) ||
      b.category?.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredPlaces = useMemo(() => {
    if (!searchQuery.trim()) return PLACES_DATA;
    const q = searchQuery.toLowerCase();
    return PLACES_DATA.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.slug.toLowerCase().includes(q) ||
      p.shortDesc?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const xmlEntriesCount = buildSitemapEntries().length;
  const xmlPreview = generateSitemapXml();

  // Structured Schema markup
  const sitemapSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'HTML Sitemap – Complete Website Directory',
    'description': 'Complete human-friendly HTML sitemap and url index for search engines and pilgrims visiting Shri Kshetra Dharmasthala.',
    'url': 'https://shridharmasthala.org/sitemap',
    'mainEntity': {
      '@type': 'CollectionPage',
      'name': 'Dharmasthala Complete Pages Index',
      'numberOfItems': xmlEntriesCount
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Shri Kshetra Dharmasthala Pilgrim Assistance Desk',
      'url': 'https://shridharmasthala.org'
    }
  };

  return (
    <Layout
      currentPage="sitemap"
      pageTitle="HTML Sitemap – Complete Website Directory & Navigation Guide"
      pageDescription="Complete HTML sitemap directory listing all pages, room booking guides, trust guest houses, hotel articles, temple guides, and travel resources for Dharmasthala."
      breadcrumbs={[{ label: 'HTML Sitemap' }]}
    >
      <script type="application/ld+json">
        {JSON.stringify(sitemapSchema)}
      </script>

      {/* Hero Header Section */}
      <section className="bg-gradient-to-b from-amber-900 via-amber-950 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-800/60 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Official Human-Friendly Website Sitemap</span>
            </div>
            <div className="text-xs text-amber-200/80 font-mono">
              Last Updated: <span className="text-amber-300 font-bold">July 28, 2026</span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-amber-100">
              HTML Sitemap & Website Navigation Hub
            </h1>
            <p className="text-sm sm:text-base text-amber-200/90 max-w-3xl leading-relaxed">
              Explore the complete indexed directory of Shri Kshetra Dharmasthala room booking guides, official SDM Trust Guest Houses (Bhakta Nivas), accommodation articles, temple darshan rules, and nearby travel resources in one organized portal.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-800/50 text-center">
              <div className="text-2xl font-black text-amber-400">{xmlEntriesCount}</div>
              <div className="text-xs text-amber-200">Total Live Pages</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-800/50 text-center">
              <div className="text-2xl font-black text-amber-400">{BLOGS_DATA.length}</div>
              <div className="text-xs text-amber-200">Published Blog Guides</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-800/50 text-center">
              <div className="text-2xl font-black text-amber-400">10</div>
              <div className="text-xs text-amber-200">Trust Guest Houses</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-800/50 text-center">
              <div className="text-2xl font-black text-amber-400">{PLACES_DATA.length}</div>
              <div className="text-xs text-amber-200">Nearby Attractions</div>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative max-w-2xl pt-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search sitemap by keyword (e.g. Saketha, Booking, Darshan, Bus)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-gray-900 placeholder-gray-500 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 hover:text-gray-900"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Quick Jump Navigation Bar */}
      <section className="bg-amber-100/80 border-b border-amber-200 sticky top-0 z-30 backdrop-blur-sm py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto text-xs font-bold whitespace-nowrap scrollbar-none">
          <span className="text-gray-600 flex items-center gap-1 shrink-0 mr-2">
            <Layers className="w-4 h-4 text-temple-maroon" /> Quick Jump:
          </span>
          <a href="#main-pages" className="px-3 py-1.5 rounded-lg bg-white text-gray-800 hover:bg-temple-maroon hover:text-white transition border border-amber-200">🏠 Main Pages</a>
          <a href="#trust-guest-houses" className="px-3 py-1.5 rounded-lg bg-white text-gray-800 hover:bg-temple-maroon hover:text-white transition border border-amber-200">🏨 Trust Guest Houses (10)</a>
          <a href="#room-booking" className="px-3 py-1.5 rounded-lg bg-white text-gray-800 hover:bg-temple-maroon hover:text-white transition border border-amber-200">🔑 Room Booking Hubs</a>
          <a href="#pillar-hubs" className="px-3 py-1.5 rounded-lg bg-white text-gray-800 hover:bg-temple-maroon hover:text-white transition border border-amber-200">⭐ Main Pillar Pages</a>
          <a href="#temple-guides" className="px-3 py-1.5 rounded-lg bg-white text-gray-800 hover:bg-temple-maroon hover:text-white transition border border-amber-200">🛕 Temple Guides</a>
          <a href="#travel-guides" className="px-3 py-1.5 rounded-lg bg-white text-gray-800 hover:bg-temple-maroon hover:text-white transition border border-amber-200">🚗 Travel & Transport</a>
          <a href="#nearby-places" className="px-3 py-1.5 rounded-lg bg-white text-gray-800 hover:bg-temple-maroon hover:text-white transition border border-amber-200">📍 Nearby Attractions</a>
          <a href="#all-blogs" className="px-3 py-1.5 rounded-lg bg-white text-gray-800 hover:bg-temple-maroon hover:text-white transition border border-amber-200">📰 All Blog Posts ({BLOGS_DATA.length})</a>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 bg-gray-50 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* 1. Main Pages */}
          <div id="main-pages" className="space-y-4 scroll-mt-20">
            <div className="flex items-center gap-2 border-b-2 border-temple-gold pb-2">
              <span className="text-2xl">🏠</span>
              <h2 className="text-2xl font-black text-gray-900">Main Portal Pages</h2>
              <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                {mainPages.length} Pages
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainPages.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-md transition space-y-1.5">
                  <a
                    href={p.path}
                    onClick={(e) => { e.preventDefault(); navigateTo(p.path); }}
                    className="font-bold text-sm text-temple-maroon hover:underline flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{p.title}</span>
                  </a>
                  <p className="text-xs text-gray-600 line-clamp-2 pl-5">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Trust Guest Houses (10 Pillar Pages + Master Hub) */}
          <div id="trust-guest-houses" className="space-y-4 scroll-mt-20">
            <div className="flex items-center gap-2 border-b-2 border-amber-500 pb-2">
              <span className="text-2xl">🏨</span>
              <div>
                <h2 className="text-2xl font-black text-gray-900">Dharmasthala Trust Guest Houses (Pillar Pages)</h2>
                <p className="text-xs text-gray-600">Official Bhakta Nivas & Yatri Nivas managed by SDM Temple Trust</p>
              </div>
              <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500 text-white">
                {trustGuestHouses.length} Guides
              </span>
            </div>

            {/* Master Hub Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-900 to-amber-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-amber-700 shadow-md">
              <div className="space-y-1">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-900/80 px-2 py-0.5 rounded border border-amber-600">
                  ★ Master Authority Directory
                </span>
                <h3 className="text-lg font-bold text-amber-100">
                  Dharmasthala Trust Guest Houses – Complete Accommodation Guide
                </h3>
                <p className="text-xs text-amber-200/90 max-w-2xl">
                  Compare Saketha, Netravathi, Vaishali, Sannidhi, Sharavathi, Gangothri, Gayathri, Rajathadri, Sahyadri & Manjunatha guest houses.
                </p>
              </div>
              <a
                href="/blog/dharmasthala-trust-guest-houses"
                onClick={(e) => { e.preventDefault(); navigateTo('/blog/dharmasthala-trust-guest-houses'); }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-xs shrink-0 transition shadow-sm"
              >
                <span>View Master Directory Hub</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Grid of 10 Pillar Guest House Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trustGuestHouses.slice(1).map((gh, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 hover:border-amber-400 hover:bg-amber-50 hover:shadow-md transition space-y-2 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                      Guest House Pillar #{idx + 1}
                    </div>
                    <a
                      href={`/blog/${gh.slug}`}
                      onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${gh.slug}`); }}
                      className="font-extrabold text-sm text-gray-900 hover:text-temple-maroon hover:underline flex items-start gap-1.5"
                    >
                      <Building2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>{gh.name}</span>
                    </a>
                    <p className="text-xs text-gray-600 leading-relaxed">{gh.desc}</p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={`/blog/${gh.slug}`}
                      onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${gh.slug}`); }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-temple-maroon hover:text-amber-800"
                    >
                      <span>Read Complete Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Room Booking Hubs */}
          <div id="room-booking" className="space-y-4 scroll-mt-20">
            <div className="flex items-center gap-2 border-b-2 border-emerald-500 pb-2">
              <span className="text-2xl">🔑</span>
              <h2 className="text-2xl font-black text-gray-900">Room Booking & Reservation Pages</h2>
              <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900">
                {roomBookingPages.length} Hubs
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {roomBookingPages.map((rb, idx) => (
                <a
                  key={idx}
                  href={rb.path}
                  onClick={(e) => { e.preventDefault(); navigateTo(rb.path); }}
                  className="p-4 rounded-xl bg-white border border-gray-200 hover:border-emerald-400 hover:shadow-md transition space-y-1 block group"
                >
                  <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">{rb.type} Page</div>
                  <div className="font-bold text-xs text-gray-900 group-hover:text-emerald-700 group-hover:underline flex items-center gap-1">
                    <span>{rb.title}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 4. Main Pillar Pages (High Authority Hubs) */}
          <div id="pillar-hubs" className="space-y-4 scroll-mt-20">
            <div className="flex items-center gap-2 border-b-2 border-purple-500 pb-2">
              <span className="text-2xl">⭐</span>
              <h2 className="text-2xl font-black text-gray-900">Featured High-Authority Pillar Pages</h2>
              <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-900">
                {pillarPages.length} Hubs
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillarPages.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-purple-50/40 border border-purple-200 hover:border-purple-400 hover:shadow-md transition space-y-1.5">
                  <a
                    href={`/${p.slug}`}
                    onClick={(e) => { e.preventDefault(); navigateTo(`/${p.slug}`); }}
                    className="font-extrabold text-sm text-purple-950 hover:text-purple-700 hover:underline flex items-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{p.title}</span>
                  </a>
                  <p className="text-xs text-gray-600 line-clamp-2">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Hotels & Private Lodging Articles */}
          {hotelBlogs.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
                <span className="text-xl">🏨</span>
                <h3 className="text-lg font-bold text-gray-900">Hotels in Dharmasthala ({hotelBlogs.length})</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {hotelBlogs.map((b) => (
                  <a
                    key={b.slug}
                    href={`/blog/${b.slug}`}
                    onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${b.slug}`); }}
                    className="p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:underline text-xs font-bold text-gray-800 flex items-center gap-2"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="line-clamp-1">{b.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 6. Lodges in Dharmasthala */}
          {lodgeBlogs.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
                <span className="text-xl">🛌</span>
                <h3 className="text-lg font-bold text-gray-900">Lodges in Dharmasthala ({lodgeBlogs.length})</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {lodgeBlogs.map((b) => (
                  <a
                    key={b.slug}
                    href={`/blog/${b.slug}`}
                    onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${b.slug}`); }}
                    className="p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:underline text-xs font-bold text-gray-800 flex items-center gap-2"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="line-clamp-1">{b.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 7. Temple Guides & Darshan Information */}
          <div id="temple-guides" className="space-y-4 scroll-mt-20">
            <div className="flex items-center gap-2 border-b-2 border-amber-600 pb-2">
              <span className="text-2xl">🛕</span>
              <h2 className="text-2xl font-black text-gray-900">Temple Guides & Pilgrimage Resources</h2>
              <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                {templeBlogs.length} Guides
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {templeBlogs.slice(0, 15).map((b) => (
                <a
                  key={b.slug}
                  href={`/blog/${b.slug}`}
                  onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${b.slug}`); }}
                  className="p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:underline text-xs font-bold text-gray-800 flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span className="line-clamp-1">{b.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 8. Travel & Transport Guides */}
          <div id="travel-guides" className="space-y-4 scroll-mt-20">
            <div className="flex items-center gap-2 border-b-2 border-blue-500 pb-2">
              <span className="text-2xl">🚗</span>
              <h2 className="text-2xl font-black text-gray-900">Travel Guides, Bus Routes & Directions</h2>
              <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-900">
                {travelBlogs.length} Guides
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {travelBlogs.slice(0, 15).map((b) => (
                <a
                  key={b.slug}
                  href={`/blog/${b.slug}`}
                  onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${b.slug}`); }}
                  className="p-3 rounded-lg bg-white border border-gray-200 hover:border-blue-400 hover:underline text-xs font-bold text-gray-800 flex items-center gap-2"
                >
                  <Compass className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="line-clamp-1">{b.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 9. Nearby Places & Attractions */}
          <div id="nearby-places" className="space-y-4 scroll-mt-20">
            <div className="flex items-center gap-2 border-b-2 border-teal-500 pb-2">
              <span className="text-2xl">📍</span>
              <h2 className="text-2xl font-black text-gray-900">Nearby Tourist & Sacred Attractions</h2>
              <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full bg-teal-100 text-teal-900">
                {filteredPlaces.length} Places
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPlaces.map((pl) => (
                <div key={pl.slug} className="p-4 rounded-xl bg-white border border-gray-200 hover:border-teal-400 hover:shadow-md transition space-y-1.5">
                  <a
                    href={`/place/${pl.slug}`}
                    onClick={(e) => { e.preventDefault(); navigateTo(`/place/${pl.slug}`); }}
                    className="font-bold text-sm text-teal-950 hover:text-teal-700 hover:underline flex items-center gap-1.5"
                  >
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{pl.title}</span>
                  </a>
                  <p className="text-xs text-gray-600 line-clamp-2">{pl.shortDesc || pl.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 10. Complete Blog Directory (With Live Search) */}
          <div id="all-blogs" className="space-y-4 scroll-mt-20 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-gray-800 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📰</span>
                <h2 className="text-2xl font-black text-gray-900">All Published Blog Posts ({filteredBlogs.length})</h2>
              </div>
              <div className="text-xs font-bold text-gray-500">
                Showing {filteredBlogs.length} of {BLOGS_DATA.length} articles
              </div>
            </div>

            {filteredBlogs.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-gray-200 text-gray-500 space-y-2">
                <p className="font-bold">No articles found matching "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 rounded-lg bg-temple-maroon text-white text-xs font-bold"
                >
                  Clear Search Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredBlogs.map((b) => (
                  <div key={b.slug} className="p-3.5 rounded-xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-sm transition space-y-1">
                    <span className="inline-block text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {b.category || 'Guide'}
                    </span>
                    <a
                      href={`/blog/${b.slug}`}
                      onClick={(e) => { e.preventDefault(); navigateTo(`/blog/${b.slug}`); }}
                      className="font-bold text-xs text-gray-900 hover:text-temple-maroon hover:underline line-clamp-2 block"
                    >
                      {b.title}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search Engine XML Feed Card */}
          <div className="p-6 rounded-2xl bg-gray-950 text-emerald-400 font-mono text-xs overflow-x-auto space-y-3 border border-gray-800">
            <div className="flex items-center justify-between text-gray-400 border-b border-gray-800 pb-2">
              <span>// Live Search Engine Dynamic XML Sitemap Preview ({xmlEntriesCount} URLs)</span>
              <a 
                href="/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Open /sitemap.xml</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <pre className="whitespace-pre max-h-60 overflow-y-auto">{xmlPreview}</pre>
          </div>

        </div>
      </section>
    </Layout>
  );
};


