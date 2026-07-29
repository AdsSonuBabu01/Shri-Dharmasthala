import React from 'react';
import { Layout } from '../components/Layout';
import { FACILITIES } from '../data/facilities';

export const FacilitiesPage: React.FC = () => {
  return (
    <Layout
      currentPage="facilities"
      pageTitle="Yatri Facilities & Amenities"
      pageDescription="Discover facilities at Shri Kshetra Dharmasthala Yatri Nivas including 24x7 hot water, lifts, safe parking, Annadana dining, and power backup."
      breadcrumbs={[{ label: 'Facilities' }]}
    >
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-left space-y-2 border-b border-gray-200 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Facilities & Amenities
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
              Thoughtfully provided amenities at Shri Kshetra Dharmasthala Yatri Nivas guest houses to ensure a safe, peaceful, and comfortable stay for all pilgrims and families.
            </p>
          </div>

          {/* CLEAN TEXT LIST */}
          <div className="divide-y divide-gray-200">
            {FACILITIES.map((fac) => (
              <div 
                key={fac.id}
                className="py-6 first:pt-0 last:pb-0 text-left space-y-1.5"
              >
                <h2 className="text-lg font-bold text-gray-900">
                  {fac.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed max-w-4xl">
                  {fac.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

