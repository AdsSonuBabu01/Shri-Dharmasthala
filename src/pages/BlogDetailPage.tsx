import React from 'react';
import { Layout } from '../components/Layout';
import { NotFoundPage } from './NotFoundPage';
import { BLOGS_DATA } from '../data/blogs';
import { ROOM_OPTIONS } from '../data/rooms';
import { PLACES_DATA } from '../data/places';
import { GLOBAL_CONFIG } from '../config/global';
import { navigateTo } from '../utils/router';
import { BookingButtons } from '../components/BookingButtons';
import { 
  Calendar, 
  User, 
  Clock, 
  MessageCircle, 
  FileText, 
  HelpCircle, 
  ArrowLeft,
  ArrowRight, 
  CheckCircle2, 
  List, 
  Bed, 
  MapPin, 
  ShieldCheck, 
  Award,
  BookOpen,
  Home
} from 'lucide-react';

interface BlogDetailPageProps {
  slug: string;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slug }) => {
  const post = BLOGS_DATA.find(b => b.slug === slug);

  if (!post) {
    return <NotFoundPage />;
  }

  const currentIndex = BLOGS_DATA.findIndex(b => b.slug === post.slug);
  const prevPost = currentIndex > 0 ? BLOGS_DATA[currentIndex - 1] : BLOGS_DATA[BLOGS_DATA.length - 1];
  const nextPost = currentIndex < BLOGS_DATA.length - 1 ? BLOGS_DATA[currentIndex + 1] : BLOGS_DATA[0];

  const relatedPosts = BLOGS_DATA.filter(b => post.relatedSlugs?.includes(b.slug) && b.slug !== post.slug).slice(0, 3);
  const finalRelated = relatedPosts.length > 0
    ? relatedPosts
    : BLOGS_DATA.filter(b => b.slug !== post.slug).slice(0, 3);

  const featuredRooms = ROOM_OPTIONS.slice(0, 3);
  const featuredPlaces = PLACES_DATA.slice(0, 3);

  const handleTocClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const articleCanonical = `${GLOBAL_CONFIG.siteUrl}/blog/${post.slug}`;

  return (
    <Layout
      currentPage="blog-detail"
      pageTitle={post.metaTitle || post.title}
      pageDescription={post.metaDescription || post.content.intro}
      keywords={[post.title, 'dharmasthala room booking', 'dharmasthala accommodation', 'yatri nivas dharmasthala']}
      canonicalUrl={articleCanonical}
      ogImage={post.featuredImage}
      breadcrumbs={[
        { label: 'Blog', path: '/blog' },
        { label: post.category, path: '/blog' },
        { label: post.title }
      ]}
      faqSchemaItems={post.content.faqs}
      articleData={{
        headline: post.title,
        image: post.featuredImage,
        datePublished: '2026-01-15',
        authorName: post.author || 'Shri Kshetra Pilgrim Advisory Desk',
        category: post.category
      }}
    >
      <article className="py-14 bg-white text-left">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Internal Navigation Bar: Back to Blog & Home */}
          <div className="flex items-center justify-between text-xs font-bold text-gray-600 pb-2 border-b border-gray-100">
            <button
              onClick={() => navigateTo('/blog')}
              className="inline-flex items-center gap-1.5 text-temple-maroon hover:underline font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Travel Guides & Articles</span>
            </button>
            <button
              onClick={() => navigateTo('/')}
              className="inline-flex items-center gap-1 text-gray-500 hover:text-temple-maroon transition"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
          </div>

          {/* Post Header Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-600 pb-4 border-b border-amber-200">
            <button
              onClick={() => navigateTo('/blog')}
              className="px-3 py-1 rounded-full maroon-gradient-bg text-amber-200 font-bold hover:opacity-90 transition"
            >
              {post.category}
            </button>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-amber-700" />
              <span>Published: {post.date}</span>
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4 text-amber-700" />
              <span>Author: {post.author}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Table of Contents */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-temple-maroon">
                <List className="w-4 h-4 text-amber-700" />
                <span>Table of Contents</span>
              </div>
              <ul className="space-y-1.5 text-xs text-gray-800">
                {post.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <button
                      onClick={() => handleTocClick(toc.id)}
                      className="text-amber-900 font-medium hover:text-temple-maroon hover:underline text-left"
                    >
                      {toc.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Intro Paragraph */}
          <div className="text-base text-gray-800 leading-relaxed font-medium bg-temple-cream p-6 rounded-2xl border-l-4 border-temple-maroon">
            {post.content.intro}
          </div>

          {/* Article Sections */}
          <div className="space-y-10">
            {post.content.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="space-y-4 pt-2">
                <h2 className="text-2xl font-black text-temple-maroon tracking-tight border-b border-amber-200 pb-2">
                  {sec.heading}
                </h2>
                
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {sec.body}
                </p>

                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="space-y-2 text-xs text-gray-700 bg-amber-50/50 p-4 rounded-xl border border-amber-200/60">
                    {sec.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.subsections && sec.subsections.map((sub, sidx) => (
                  <div key={sidx} className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1 mt-3">
                    <h3 className="text-sm font-bold text-gray-900">{sub.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{sub.body}</p>
                  </div>
                ))}
              </section>
            ))}
          </div>

          {/* EEAT Author Verification & Editorial Trust Box */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-gray-700">
            <div className="w-12 h-12 rounded-full maroon-gradient-bg text-amber-200 flex items-center justify-center shrink-0 font-bold border border-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="font-bold text-gray-900 flex items-center gap-1.5">
                <span>Verified Yatri Advisory Article</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Reviewed and published by <strong>{post.author}</strong> on {post.date}. Content is verified according to official Shri Kshetra Dharmasthala temple Yatri Nivas guidelines and local transport schedules. Direct Helpline: <a href={GLOBAL_CONFIG.phoneTel} className="text-temple-maroon font-bold underline">{GLOBAL_CONFIG.phoneDisplay}</a>.
              </p>
            </div>
          </div>

          {/* Embedded Booking CTA Box */}
          <div className="p-8 rounded-3xl maroon-gradient-bg text-amber-100 border-2 border-amber-400 shadow-2xl space-y-5 my-10">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Planning Your Trip to Dharmasthala?
              </span>
              <h3 className="text-2xl font-black text-white">
                Reserve Your Yatri Nivas Room Today
              </h3>
              <p className="text-xs text-amber-200/90 max-w-xl mx-auto">
                Clean AC & Non-AC rooms, family bedrooms, 24x7 hot water & parking within 3 minutes walk to temple.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <BookingButtons size="lg" layout="row" />
            </div>
          </div>

          {/* SECTION: RELATED ROOM TYPES */}
          <div className="pt-8 border-t border-amber-200 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Bed className="w-5 h-5 text-temple-maroon" />
                <span>Related Yatri Room Types</span>
              </h3>
              <button onClick={() => navigateTo('/room-types')} className="text-xs font-bold text-temple-maroon hover:underline">
                View All Rooms →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {featuredRooms.map((room) => (
                <div key={room.id} className="bg-temple-cream rounded-2xl p-4 border border-amber-200 flex flex-col justify-between space-y-3">
                  <div>
                    <img src={room.image} alt={room.name} loading="lazy" decoding="async" width="300" height="130" className="w-full h-32 object-cover rounded-xl" />
                    <h4 className="text-sm font-bold text-gray-900 mt-2">{room.name}</h4>
                    <p className="text-xs text-gray-600 line-clamp-2 mt-1">{room.description}</p>
                  </div>
                  <button 
                    onClick={() => navigateTo('/room-types')} 
                    className="w-full py-2 rounded-lg maroon-gradient-bg text-amber-200 text-xs font-bold hover:text-white transition"
                  >
                    View Room Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: NEARBY ATTRACTIONS */}
          <div className="pt-8 border-t border-amber-200 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-temple-maroon" />
                <span>Explore Nearby Places</span>
              </h3>
              <button onClick={() => navigateTo('/')} className="text-xs font-bold text-temple-maroon hover:underline">
                View All Attractions →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {featuredPlaces.map((pl) => (
                <div 
                  key={pl.slug} 
                  onClick={() => navigateTo(`/place/${pl.slug}`)}
                  className="cursor-pointer group bg-temple-cream rounded-2xl p-4 border border-amber-200 hover:shadow-md transition space-y-2"
                >
                  <img src={pl.heroImage} alt={pl.title} loading="lazy" decoding="async" width="300" height="130" className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition" />
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-temple-maroon line-clamp-1">{pl.title}</h4>
                  <p className="text-[11px] text-gray-500">{pl.distance}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Section FAQ */}
          {post.content.faqs && post.content.faqs.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-temple-maroon" />
                <span>Article FAQs</span>
              </h3>
              <div className="space-y-3">
                {post.content.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs space-y-1">
                    <div className="font-bold text-temple-maroon">Q: {faq.question}</div>
                    <div className="text-gray-700 leading-relaxed">A: {faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Blogs */}
          {finalRelated.length > 0 && (
            <div className="pt-10 border-t border-amber-200 space-y-6">
              <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-temple-maroon" />
                <span>Related Pilgrim Articles</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {finalRelated.map((rel, idx) => (
                  <div
                    key={`${rel.slug}-${idx}`}
                    onClick={() => navigateTo(`/blog/${rel.slug}`)}
                    className="cursor-pointer group bg-temple-cream rounded-2xl border border-amber-200 p-5 hover:shadow-md transition text-left space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="px-2.5 py-0.5 rounded-full maroon-gradient-bg text-amber-200 text-[10px] font-bold">
                        {rel.category}
                      </span>
                      <h4 className="text-xs font-bold text-gray-900 group-hover:text-temple-maroon line-clamp-2 pt-1">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-bold text-temple-maroon flex items-center gap-1 group-hover:underline pt-2 border-t border-amber-200/60">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Previous & Next Article Navigation */}
          <div className="pt-8 border-t border-amber-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost && (
              <button
                onClick={() => navigateTo(`/blog/${prevPost.slug}`)}
                className="group p-4 rounded-2xl bg-amber-50/80 hover:bg-amber-100/80 border border-amber-200 text-left transition flex items-start gap-3"
              >
                <ArrowLeft className="w-5 h-5 text-temple-maroon shrink-0 mt-0.5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Previous Guide</span>
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-temple-maroon line-clamp-1 mt-0.5">
                    {prevPost.title}
                  </h4>
                </div>
              </button>
            )}
            {nextPost && (
              <button
                onClick={() => navigateTo(`/blog/${nextPost.slug}`)}
                className="group p-4 rounded-2xl bg-amber-50/80 hover:bg-amber-100/80 border border-amber-200 text-right transition flex items-start justify-end gap-3"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Next Guide</span>
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-temple-maroon line-clamp-1 mt-0.5">
                    {nextPost.title}
                  </h4>
                </div>
                <ArrowRight className="w-5 h-5 text-temple-maroon shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

        </div>
      </article>
    </Layout>
  );
};

