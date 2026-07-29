import React from 'react';
import { NavigationPage } from '../types';
import { Header } from './Header';
import { HeroHome } from './HeroHome';
import { HeroOther } from './HeroOther';
import { BlogHero } from './BlogHero';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { FloatingButtons } from './FloatingButtons';
import { SeoHead } from './SeoHead';
import { GLOBAL_CONFIG } from '../config/global';

interface LayoutProps {
  currentPage: NavigationPage;
  pageTitle?: string;
  pageDescription?: string;
  keywords?: string[];
  canonicalUrl?: string;
  breadcrumbs?: { label: string; path?: string }[];
  bgImage?: string;
  faqSchemaItems?: { question: string; answer: string }[];
  articleData?: {
    headline: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
    category?: string;
    keywords?: string[];
  };
  ogImage?: string;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  currentPage,
  pageTitle = 'Shri Kshetra Dharmasthala Room Booking',
  pageDescription = 'Official online room booking portal & yatri nivas guide for Shri Kshetra Dharmasthala temple visit.',
  keywords,
  canonicalUrl,
  breadcrumbs,
  bgImage,
  faqSchemaItems,
  articleData,
  ogImage,
  children
}) => {
  // Rule: Home Page and Place Pages automatically use Hero Section 1.
  const isHeroOnePage = currentPage === 'home' || currentPage === 'place-detail';

  // Format breadcrumbs for Schema.org
  const formattedBreadcrumbs = breadcrumbs?.map(bc => ({
    name: bc.label,
    url: bc.path 
      ? (bc.path.startsWith('http') ? bc.path : `${GLOBAL_CONFIG.siteUrl}${bc.path.startsWith('/') ? '' : '/'}${bc.path}`) 
      : (typeof window !== 'undefined' ? window.location.href : GLOBAL_CONFIG.siteUrl)
  }));

  return (
    <div className="min-h-screen flex flex-col bg-temple-cream text-gray-900 font-sans antialiased selection:bg-amber-200 selection:text-temple-maroon">
      
      {/* Accessibility Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-gray-950 font-bold rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* Dynamic SEO Metadata */}
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        breadcrumbs={formattedBreadcrumbs}
        faqSchemaItems={faqSchemaItems}
        articleData={articleData}
        ogImage={ogImage}
      />

      {/* Sticky Header */}
      <Header currentPage={currentPage} />

      {/* Hero Section Assignment according to rules */}
      {currentPage === 'blog-detail' ? (
        <BlogHero
          postTitle={articleData?.headline || pageTitle}
          category={articleData?.category}
          breadcrumbs={breadcrumbs}
        />
      ) : isHeroOnePage ? (
        <HeroHome />
      ) : (
        <HeroOther
          title={pageTitle}
          description={pageDescription}
          breadcrumbs={breadcrumbs}
          bgImage={bgImage}
        />
      )}

      {/* Main Page Content */}
      <main id="main-content" className="flex-grow">
        {children}
      </main>

      {/* Universal Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Buttons (WhatsApp, Call, Room Reserve) */}
      <FloatingButtons />

    </div>
  );
};

