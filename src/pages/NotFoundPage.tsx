import React from 'react';
import { Layout } from '../components/Layout';
import { navigateTo } from '../utils/router';
import { Home, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <Layout
      currentPage="404"
      pageTitle="404 Page Not Found"
      pageDescription="The requested page could not be found. Please navigate back to Shri Kshetra Dharmasthala online room booking home page."
      breadcrumbs={[{ label: '404 Not Found' }]}
    >
      <section className="py-20 bg-white text-center">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="text-6xl font-black text-temple-maroon">404</div>
          <h2 className="text-2xl font-bold text-gray-900">Page Not Found</h2>
          <p className="text-xs text-gray-600">
            The page or route you requested does not exist or has moved. Return to our main room reservation portal.
          </p>
          <button
            onClick={() => navigateTo('/')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl maroon-gradient-bg text-amber-200 font-bold text-xs shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home Page</span>
          </button>
        </div>
      </section>
    </Layout>
  );
};
