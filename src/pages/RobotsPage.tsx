import React from 'react';
import { Layout } from '../components/Layout';
import { generateRobotsTxt } from '../utils/sitemapGenerator';

export const RobotsPage: React.FC = () => {
  const robotsTxt = generateRobotsTxt();

  return (
    <Layout
      currentPage="robots"
      pageTitle="Robots.txt Configuration"
      pageDescription="Robots.txt file instructions for web crawlers and search engines accessing Shri Kshetra Dharmasthala room booking portal."
      breadcrumbs={[{ label: 'Robots.txt' }]}
    >
      <section className="py-16 bg-white text-left">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-gray-900">Robots.txt Rules</h2>
            <a 
              href="/robots.txt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition"
            >
              View Raw /robots.txt
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-gray-950 text-emerald-400 font-mono text-xs overflow-x-auto space-y-2 border border-gray-800">
            <pre className="whitespace-pre">{robotsTxt}</pre>
          </div>
        </div>
      </section>
    </Layout>
  );
};

