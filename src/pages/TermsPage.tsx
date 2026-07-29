import React from 'react';
import { Layout } from '../components/Layout';
import { GLOBAL_CONFIG } from '../config/global';

export const TermsPage: React.FC = () => {
  return (
    <Layout
      currentPage="terms-and-conditions"
      pageTitle="Terms & Conditions"
      pageDescription="Terms and conditions for pilgrim accommodation assistance, room check-in rules, photo ID verification, and Yatri Nivas guidelines."
      breadcrumbs={[{ label: 'Terms & Conditions' }]}
    >
      <section className="py-16 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-gray-700 leading-relaxed">
          
          <h2 className="text-2xl font-black text-temple-maroon">Terms & Conditions</h2>
          <p>
            Welcome to <span className="font-bold text-gray-900">{GLOBAL_CONFIG.businessName}</span>. By using our room booking assistance portal, you agree to comply with the following guidelines and temple lodging regulations.
          </p>

          <h3 className="text-lg font-bold text-gray-900 pt-2">1. ID Proof Requirement</h3>
          <p>
            Original Government-issued photo ID cards (Aadhaar Card, Voter ID, Driving License, or Passport) for all adult guests are mandatory during reception check-in.
          </p>

          <h3 className="text-lg font-bold text-gray-900 pt-2">2. Guest Eligibility & Decorum</h3>
          <p>
            Rooms are allocated exclusively for families, registered pilgrim groups, solo yatris, and married couples. Unmarried couples are strictly prohibited in accordance with temple Yatri Nivas rules.
          </p>

          <h3 className="text-lg font-bold text-gray-900 pt-2">3. Check-In & Check-Out Timings</h3>
          <p>
            Check-in assistance operates 24 hours daily. Standard occupancy duration is calculated on a 24-hour flexi or 12:00 PM cycle depending on room block availability.
          </p>

          <h3 className="text-lg font-bold text-gray-900 pt-2">4. Code of Conduct in Sacred Kshetra</h3>
          <p>
            Devotees must maintain decorum. Consuming non-vegetarian food, alcohol, smoking, or loud disturbances within the Yatri Nivas premises is strictly forbidden.
          </p>

        </div>
      </section>
    </Layout>
  );
};
