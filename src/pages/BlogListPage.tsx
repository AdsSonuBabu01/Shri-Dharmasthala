import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { BLOGS_DATA } from '../data/blogs';
import { navigateTo } from '../utils/router';
import { 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Search, 
  Sparkles, 
  MessageCircle, 
  FileText 
} from 'lucide-react';

import { GLOBAL_CONFIG } from '../config/global';

export const BlogListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = BLOGS_DATA.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout
      currentPage="blog"
      pageTitle="Dharmasthala Blog & Pilgrim Guides"
      pageDescription="Comprehensive pilgrimage guides, temple timings, history, route maps, room booking instructions, and travel tips for Shri Kshetra Dharmasthala."
      canonicalUrl={`${GLOBAL_CONFIG.siteUrl}/blog`}
      breadcrumbs={[{ label: 'Blog' }]}
    >
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Pilgrimage Knowledge Hub
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Dharmasthala Travel & Room Booking Articles
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Explore official guides on temple sevas, travel routes from Bangalore & Mangalore, room reservation tips, and nearby places.
            </p>

            {/* Search Input */}
            <div className="max-w-md mx-auto pt-2">
              <div className="relative">
                <label htmlFor="blog-search" className="sr-only">Search travel guides and room booking articles</label>
                <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3" />
                <input
                  id="blog-search"
                  type="text"
                  aria-label="Search articles"
                  placeholder="Search blogs e.g. room booking, timings, route..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* BLOG POSTS GRID - Text-Only Clean Reading Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post, idx) => (
              <a
                key={`${post.slug}-${idx}`}
                href={`/blog/${post.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(`/blog/${post.slug}`);
                }}
                className="group cursor-pointer bg-temple-cream rounded-3xl p-6 border border-amber-200/80 temple-card-hover flex flex-col justify-between space-y-4 text-left focus:outline-none focus:ring-2 focus:ring-amber-500 block text-inherit no-underline"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-[11px]">
                    <span className="px-3 py-1 rounded-full maroon-gradient-bg text-amber-200 font-bold border border-amber-400/40">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-temple-maroon transition leading-snug line-clamp-2 pt-1">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {post.content.intro}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-temple-maroon font-bold">
                  <span className="flex items-center gap-1 text-[11px] text-gray-500 font-normal">
                    <Calendar className="w-3.5 h-3.5 text-amber-700" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center gap-1 group-hover:underline">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};
