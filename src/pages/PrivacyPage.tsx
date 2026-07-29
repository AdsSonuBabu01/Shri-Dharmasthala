import React from 'react';
import { Layout } from '../components/Layout';
import { GLOBAL_CONFIG } from '../config/global';

export const PrivacyPage: React.FC = () => {
  return (
    <Layout
      currentPage="privacy-policy"
      pageTitle="Privacy Policy"
      pageDescription="Privacy policy statement regarding pilgrim data privacy, contact submissions, and room reservation assistance at Shri Kshetra Dharmasthala."
      breadcrumbs={[{ label: 'Privacy Policy' }]}
    >
      <section className="py-16 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-gray-700 leading-relaxed">
          
          <h2 className="text-2xl font-black text-temple-maroon">Pilgrim Privacy Policy</h2>
          <p>
            At <span className="font-bold text-gray-900">{GLOBAL_CONFIG.businessName}</span>, we respect your personal privacy and are committed to protecting the information you share when requesting room reservation assistance or sending inquiries.
          </p>

          <h3 className="text-lg font-bold text-gray-900 pt-2">1. Information Collection & Usage</h3>
          <p>
            When you submit a room enquiry using our online forms or WhatsApp helpline (+91 99034 90617), we collect basic details such as your Name, Mobile Number, Check-in/Check-out dates, and Guest count solely for the purpose of checking room availability and coordinating your Yatri stay.
          </p>

          <h3 className="text-lg font-bold text-gray-900 pt-2">2. Data Security & Non-Disclosure</h3>
          <p>
            We do not sell, rent, trade, or share your personal contact details with third-party advertisers or marketing agencies. Information submitted is kept confidential and accessed only by authorized room reservation assistance desk representatives.
          </p>

          <h3 className="text-lg font-bold text-gray-900 pt-2">3. Online Reservation Forms & External Links</h3>
          <p>
            Our portal provides direct links to official online reservation forms and WhatsApp chat. Any information provided through those platforms is processed under their standard secure communication protocols.
          </p>

          <h3 className="text-lg font-bold text-gray-900 pt-2">4. Contact Information</h3>
          <p>
            If you have any questions regarding our privacy practices or wish to modify your submitted information, feel free to contact us at <a href={GLOBAL_CONFIG.phoneTel} className="font-bold text-temple-maroon hover:underline">{GLOBAL_CONFIG.phoneDisplay}</a>.
          </p>

        </div>
      </section>
    </Layout>
  );
};
