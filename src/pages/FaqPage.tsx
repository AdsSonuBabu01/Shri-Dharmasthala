import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { FAQS } from '../data/faqs';
import { GLOBAL_CONFIG } from '../config/global';
import { BookingButtons } from '../components/BookingButtons';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  FileText, 
  Sparkles 
} from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('b1');

  const categories = ['All', 'Booking FAQ', 'Room FAQ', 'WhatsApp Booking FAQ', 'Online Form FAQ'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <Layout
      currentPage="faq"
      pageTitle="Frequently Asked Questions"
      pageDescription="Find answers to questions about room types, check-in timings, WhatsApp booking, online reservation form, and yatri nivas facilities."
      breadcrumbs={[{ label: 'FAQ' }]}
      faqSchemaItems={FAQS.map(f => ({ question: f.question, answer: f.answer }))}
    >
      <section className="py-16 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Help Center
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Shri Kshetra Room Reservation FAQs
            </h2>
            <p className="text-sm text-gray-600">
              Clear answers to help you plan a peaceful pilgrimage stay in Dharmasthala.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeCategory === cat
                    ? 'maroon-gradient-bg text-amber-200 border border-amber-400'
                    : 'bg-temple-cream text-gray-700 hover:bg-amber-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="rounded-2xl border border-amber-200 overflow-hidden bg-temple-cream transition"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full p-5 text-left font-bold text-sm text-gray-900 flex items-center justify-between gap-4 hover:text-temple-maroon transition"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-amber-700 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div id={`faq-answer-${faq.id}`} className="px-5 pb-5 pt-1 text-xs text-gray-700 leading-relaxed border-t border-amber-200/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Banner */}
          <div className="p-8 rounded-3xl bg-amber-50 border border-amber-200 text-center space-y-4">
            <h3 className="text-xl font-bold text-temple-maroon">Still Have Unanswered Questions?</h3>
            <p className="text-xs text-gray-600 max-w-lg mx-auto">
              Our 24x7 reservation desk is always ready to assist you directly on WhatsApp or via direct call.
            </p>
            <div className="flex flex-wrap items-center justify-center">
              <BookingButtons size="md" layout="row" />
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};
