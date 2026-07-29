import { NavigationPage } from '../types';
import { BLOGS_DATA } from '../data/blogs';
import { PLACES_DATA } from '../data/places';
import { ALL_PILLAR_SLUGS } from '../data/pillars';

export interface RouteState {
  page: NavigationPage;
  slug?: string;
  blogSlug?: string;
  placeSlug?: string;
}

export function parseCurrentRoute(overridePath?: string): RouteState {
  let rawPath = '/';
  let hash = '';
  
  if (overridePath !== undefined) {
    rawPath = overridePath;
  } else if (typeof window !== 'undefined') {
    rawPath = window.location.pathname.toLowerCase();
    hash = window.location.hash.replace('#', '').toLowerCase();
  }

  // Combine hash or pathname (prioritize hash if it represents a route starting with /)
  const activePath = hash && hash.startsWith('/') ? hash : rawPath;

  // Safely decode URI components (e.g. %20 or encoded characters)
  let decodedPath = activePath;
  try {
    decodedPath = decodeURIComponent(activePath);
  } catch (e) {
    decodedPath = activePath;
  }

  // Strip query string and normalize slashes
  const cleanPath = decodedPath.split('?')[0].replace(/^\/+|\/+$/g, '').trim();

  if (cleanPath === '' || cleanPath === 'home') {
    return { page: 'home' };
  }
  if (cleanPath === 'about') {
    return { page: 'about' };
  }
  if (cleanPath === 'room-types') {
    return { page: 'room-types' };
  }
  if (cleanPath === 'booking') {
    return { page: 'booking' };
  }
  if (cleanPath === 'facilities') {
    return { page: 'facilities' };
  }
  if (cleanPath === 'gallery') {
    return { page: 'gallery' };
  }
  if (cleanPath === 'blog') {
    return { page: 'blog' };
  }
  if (cleanPath === 'faq') {
    return { page: 'faq' };
  }
  if (cleanPath === 'contact') {
    return { page: 'contact' };
  }
  if (cleanPath === 'privacy-policy') {
    return { page: 'privacy-policy' };
  }
  if (cleanPath === 'terms-and-conditions') {
    return { page: 'terms-and-conditions' };
  }
  if (cleanPath === 'sitemap' || cleanPath === 'sitemap.xml') {
    return { page: 'sitemap' };
  }
  if (cleanPath === 'robots' || cleanPath === 'robots.txt') {
    return { page: 'robots' };
  }

  // Check pillar paths directly (e.g. /dharmasthala-room-booking)
  if (ALL_PILLAR_SLUGS.includes(cleanPath)) {
    return { page: 'pillar-detail', slug: cleanPath };
  }

  // Check blog paths (/blog or /blog/[slug])
  if (cleanPath.startsWith('blog/') || cleanPath === 'blog') {
    if (cleanPath === 'blog') {
      return { page: 'blog' };
    }
    const slug = cleanPath.replace(/^blog\//, '').trim();
    if (!slug) {
      return { page: 'blog' };
    }
    // 1. Verify if blog post exists in dataset
    const postExists = BLOGS_DATA.some(b => b.slug === slug);
    if (postExists) {
      return { page: 'blog-detail', slug, blogSlug: slug };
    }
    // 2. Check if it's a pillar slug
    if (ALL_PILLAR_SLUGS.includes(slug)) {
      return { page: 'pillar-detail', slug };
    }
    // Return 404 for non-existent blog slugs
    return { page: '404' };
  }

  // Check direct blog article access (e.g. /bangalore-to-dharmasthala)
  const directBlogExists = BLOGS_DATA.some(b => b.slug === cleanPath);
  if (directBlogExists) {
    return { page: 'blog-detail', slug: cleanPath, blogSlug: cleanPath };
  }

  // Check place paths (/place/[slug])
  if (cleanPath.startsWith('place/')) {
    const slug = cleanPath.replace(/^place\//, '').trim();
    if (!slug) {
      return { page: 'home' };
    }
    const placeExists = PLACES_DATA.some(p => p.slug === slug);
    if (placeExists) {
      return { page: 'place-detail', slug, placeSlug: slug };
    }
    return { page: '404' };
  }

  // Default to 404 for any unhandled routes
  return { page: '404' };
}

export function listenToRouteChanges(callback: () => void) {
  const handler = () => callback();
  window.addEventListener('hashchange', handler);
  window.addEventListener('popstate', handler);

  return () => {
    window.removeEventListener('hashchange', handler);
    window.removeEventListener('popstate', handler);
  };
}

export function navigateTo(path: string) {
  if (!path) return;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('tel:') || path.startsWith('mailto:')) {
    window.open(path, '_blank', 'noopener,noreferrer');
    return;
  }

  const targetPath = path.startsWith('/') ? path : `/${path}`;
  window.history.pushState({}, '', targetPath);
  window.dispatchEvent(new Event('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
