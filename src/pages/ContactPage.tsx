import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { GLOBAL_CONFIG } from '../config/global';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Room Booking Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your Name and Mobile Number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <Layout
      currentPage="contact"
      pageTitle="Contact Shri Kshetra Reservation Desk"
      pageDescription="Get in touch with Shri Kshetra Dharmasthala room booking desk for room availability, yatri nivas inquiries, and temple stay guidance."
      breadcrumbs={[{ label: 'Contact Us' }]}
    >
      <section className="py-16 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-temple-maroon text-xs font-bold uppercase tracking-wider">
                  24x7 Reach
                </span>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                  Get in Touch With Us
                </h2>
                <p className="text-xs text-gray-600">
                  We are available round-the-clock to assist your room reservation and travel queries.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                
                <div className="p-5 rounded-2xl bg-temple-cream border border-amber-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase">Phone Helpline</div>
                    <a href={GLOBAL_CONFIG.phoneTel} className="text-lg font-black text-temple-maroon hover:underline">
                      {GLOBAL_CONFIG.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-gray-500 mt-0.5">Direct line for urgent room requests.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase">WhatsApp Reservation</div>
                    <a href={GLOBAL_CONFIG.instantBookingLink} target="_blank" rel="noopener noreferrer" className="text-lg font-black text-emerald-700 hover:underline">
                      {GLOBAL_CONFIG.whatsappNumber}
                    </a>
                    <p className="text-[11px] text-gray-500 mt-0.5">Send message for instant room status.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-temple-cream border border-amber-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase">Office Hours</div>
                    <div className="text-sm font-bold text-gray-900 mt-0.5">{GLOBAL_CONFIG.officeHours}</div>
                    <p className="text-[11px] text-gray-500 mt-0.5">Reception functions 24 hours daily.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-temple-cream border border-amber-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-amber-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase">Address</div>
                    <div className="text-xs font-bold text-gray-900 mt-0.5 leading-relaxed">{GLOBAL_CONFIG.address}</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Contact Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-temple-cream p-8 rounded-3xl border-2 border-amber-300 shadow-xl space-y-6">
                
                <div>
                  <h3 className="text-2xl font-black text-temple-maroon">Send Us a Direct Message</h3>
                  <p className="text-xs text-gray-600 mt-1">Fill out your query and our desk will respond promptly.</p>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          aria-label="Your Full Name"
                          placeholder="e.g. Ramesh Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold text-gray-700 mb-1">Mobile Number *</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          aria-label="Mobile Number"
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-gray-700 mb-1">Email ID (Optional)</label>
                      <input
                        id="contact-email"
                        type="email"
                        aria-label="Email ID"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-gray-700 mb-1">Subject</label>
                      <select
                        id="contact-subject"
                        aria-label="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                      >
                        <option value="Room Booking Enquiry">Room Booking Enquiry</option>
                        <option value="Family Group Stay">Family Group Stay</option>
                        <option value="Senior Citizen Facilities">Senior Citizen Facilities</option>
                        <option value="Temple Timings & Seva">Temple Timings & Seva</option>
                        <option value="Other Query">Other Query</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-gray-700 mb-1">Your Message / Special Query</label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        aria-label="Your Message or Special Query"
                        placeholder="Enter your travel dates, room requirements, or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl maroon-gradient-bg text-amber-200 font-extrabold text-sm border border-amber-400/60 shadow-md hover:text-white transition flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Contact Message</span>
                    </button>

                  </form>
                ) : (
                  <div className="p-6 rounded-2xl bg-white border border-emerald-300 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold text-gray-900">Message Sent Successfully!</h4>
                    <p className="text-xs text-gray-600">
                      Thank you {formData.name}. Our reservation helpline team will call or message you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-temple-maroon font-bold underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>

          {/* Embedded Google Map */}
          <div className="pt-6">
            <h3 className="text-xl font-black text-gray-900 mb-4 text-center">Google Map Location</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-amber-300 h-96 relative">
              <iframe
                title="Shri Kshetra Dharmasthala Google Map Location"
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

        </div>
      </section>
    </Layout>
  );
};
