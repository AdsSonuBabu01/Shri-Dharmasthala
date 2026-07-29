import React from 'react';
import { Layout } from '../components/Layout';
import { FAQS } from '../data/faqs';
import { GLOBAL_CONFIG } from '../config/global';
import { BhaktaNiwasBooking } from '../components/BhaktaNiwasBooking';
import { PilgrimReviews } from '../components/PilgrimReviews';
import { 
  Zap,
  Calendar,
  MessageCircle, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  HelpCircle, 
  PhoneCall, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const BookingPage: React.FC = () => {
  const bookingFaqs = FAQS.filter(f => f.category === 'Booking FAQ' || f.category === 'WhatsApp Booking FAQ' || f.category === 'Advance Booking FAQ');

  return (
    <Layout
      currentPage="booking"
      pageTitle="Online Room Booking & Guidelines"
      pageDescription="Reserve your Yatri Nivas room at Shri Kshetra Dharmasthala using our official fast-track WhatsApp helpline or online reservation form."
      breadcrumbs={[{ label: 'Online Room Booking' }]}
      faqSchemaItems={bookingFaqs.map(f => ({ question: f.question, answer: f.answer }))}
    >
      
      {/* SECTION 1: TWO OFFICIAL BOOKING METHODS */}
      <section className="py-16 bg-white border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BhaktaNiwasBooking
            title="Bhakta Niwas Room Booking Options"
            subtitle="No registration or complex portal required. Select your preferred room reservation method below."
          />
        </div>
      </section>

      {/* SECTION 2: RESERVATION PROCESS */}
      <section className="py-14 bg-temple-cream border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-black text-gray-900">Simple 3-Step Room Reservation Process</h2>
            <p className="text-xs text-gray-600">How your booking is processed and confirmed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-xs text-left space-y-3">
              <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 font-black flex items-center justify-center text-base">
                1
              </div>
              <h3 className="text-base font-bold text-gray-900">Submit Details</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Send your pilgrimage dates, guest count, and room preference via WhatsApp or online reservation form.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-xs text-left space-y-3">
              <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 font-black flex items-center justify-center text-base">
                2
              </div>
              <h3 className="text-base font-bold text-gray-900">Availability Verification</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our reservation desk checks real-time Yatri Nivas room blocks and confirms room availability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-xs text-left space-y-3">
              <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 font-black flex items-center justify-center text-base">
                3
              </div>
              <h3 className="text-base font-bold text-gray-900">Check-in Assistance</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Arrive at the reception desk with your original photo ID proof and complete quick check-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BOOKING GUIDELINES & POLICIES */}
      <section className="py-16 bg-white border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-black text-gray-900">Yatri Stay Guidelines & Rules</h2>
            <p className="text-xs text-gray-600">Important rules to follow during your room stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 text-left space-y-3">
              <h3 className="text-base font-bold text-temple-maroon flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-700" />
                <span>Mandatory Identity Verification</span>
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                As per Karnataka police safety regulations, all adult guests must present original government-issued photo ID (Aadhaar Card, Voter ID, Driving License, or Passport) at reception during check-in.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 text-left space-y-3">
              <h3 className="text-base font-bold text-temple-maroon flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-700" />
                <span>Pilgrim & Family Decorum</span>
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Rooms are allocated strictly for families, registered Yatri groups, solo devotees, and married couples. Unmarried couples are strictly not entertained in accordance with temple Yatri Nivas rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PILGRIM REVIEWS & FEEDBACK */}
      <section className="py-16 bg-white border-b border-amber-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PilgrimReviews />
        </div>
      </section>

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-temple-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
              Booking FAQs
            </span>
            <h2 className="text-2xl font-black text-gray-900">
              Online Room Booking Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {bookingFaqs.map((faq) => (
              <div key={faq.id} className="p-5 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-2">
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
        </div>
      </section>

    </Layout>
  );
};
