import React, { useState, useEffect, lazy, Suspense } from 'react';
import { parseCurrentRoute, listenToRouteChanges } from './utils/router';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const RoomTypesPage = lazy(() => import('./pages/RoomTypesPage').then(m => ({ default: m.RoomTypesPage })));
const BookingPage = lazy(() => import('./pages/BookingPage').then(m => ({ default: m.BookingPage })));
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage').then(m => ({ default: m.FacilitiesPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const BlogListPage = lazy(() => import('./pages/BlogListPage').then(m => ({ default: m.BlogListPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));
const PillarPage = lazy(() => import('./pages/PillarPage').then(m => ({ default: m.PillarPage })));
const PlaceDetailPage = lazy(() => import('./pages/PlaceDetailPage').then(m => ({ default: m.PlaceDetailPage })));
const FaqPage = lazy(() => import('./pages/FaqPage').then(m => ({ default: m.FaqPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then(m => ({ default: m.SitemapPage })));
const RobotsPage = lazy(() => import('./pages/RobotsPage').then(m => ({ default: m.RobotsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

export function App() {
  const [routeInfo, setRouteInfo] = useState(() => parseCurrentRoute());

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    const unsubscribe = listenToRouteChanges(() => {
      setRouteInfo(parseCurrentRoute());
      window.scrollTo(0, 0);
    });

    return unsubscribe;
  }, [routeInfo.page, routeInfo.slug]);

  const renderContent = () => {
    switch (routeInfo.page) {
      case 'home':
        return <HomePage />;

      case 'about':
        return <AboutPage />;

      case 'room-types':
        return <RoomTypesPage />;

      case 'booking':
        return <BookingPage />;

      case 'facilities':
        return <FacilitiesPage />;

      case 'gallery':
        return <GalleryPage />;

      case 'blog':
        return <BlogListPage />;

      case 'blog-detail':
        return <BlogDetailPage slug={routeInfo.slug || ''} />;

      case 'pillar-detail':
        return <PillarPage slug={routeInfo.slug || 'dharmasthala-room-booking'} />;

      case 'place-detail':
        return <PlaceDetailPage slug={routeInfo.slug || 'bahubali-statue'} />;

      case 'faq':
        return <FaqPage />;

      case 'contact':
        return <ContactPage />;

      case 'privacy-policy':
        return <PrivacyPage />;

      case 'terms-and-conditions':
        return <TermsPage />;

      case 'sitemap':
        return <SitemapPage />;

      case 'robots':
        return <RobotsPage />;

      default:
        return <NotFoundPage />;
    }
  };

  return (
    <Suspense fallback={<div className="min-h-screen bg-amber-50" />}>
      {renderContent()}
    </Suspense>
  );
}

export default App;
