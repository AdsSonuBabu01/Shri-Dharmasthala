import { GLOBAL_CONFIG } from '../config/global';
import { BLOGS_DATA } from '../data/blogs';
import { PLACES_DATA } from '../data/places';
import { ALL_PILLAR_SLUGS } from '../data/pillars';

export interface SitemapUrlEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

/**
 * Escapes special XML characters to ensure valid XML output.
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Converts a date string or timestamp into ISO 8601 format (YYYY-MM-DDTHH:mm:ss.000Z).
 */
export function formatIsoDate(dateStr?: string): string {
  if (!dateStr) return new Date().toISOString();
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return new Date().toISOString();
  return d.toISOString();
}

/**
 * Builds the complete list of unique sitemap entries based on static pages,
 * places, and dynamic blog posts following priority and changefreq rules.
 */
export function buildSitemapEntries(domain: string = GLOBAL_CONFIG.siteUrl): SitemapUrlEntry[] {
  const cleanDomain = domain.replace(/\/+$/, '');
  const entries: SitemapUrlEntry[] = [];
  const seenUrls = new Set<string>();

  const addUrl = (
    path: string, 
    lastmod: string, 
    changefreq: SitemapUrlEntry['changefreq'], 
    priority: string
  ) => {
    const formattedPath = path.startsWith('/') ? path : `/${path}`;
    const fullLoc = `${cleanDomain}${formattedPath}`;
    
    // Remove duplicate URLs
    if (seenUrls.has(fullLoc)) return;
    seenUrls.add(fullLoc);

    entries.push({
      loc: fullLoc,
      lastmod: formatIsoDate(lastmod),
      changefreq,
      priority
    });
  };

  const todayIso = new Date().toISOString();

  // 1. Homepage (Priority: 1.0, changefreq: daily)
  addUrl('/', todayIso, 'daily', '1.0');

  // 2. Primary Accommodation Hub & Pillar Pages (Priority: 1.0 for Money Page, 0.95 for Supporting Pillars)
  ALL_PILLAR_SLUGS.forEach((slug) => {
    const isHub = slug === 'dharmasthala-room-booking';
    addUrl(`/${slug}`, todayIso, 'daily', isHub ? '1.0' : '0.95');
  });

  // 2. Booking Pages (Priority: 0.9, changefreq: daily)
  addUrl('/booking', todayIso, 'daily', '0.9');

  // 3. Accommodation Pages (Priority: 0.8, changefreq: weekly)
  addUrl('/room-types', todayIso, 'weekly', '0.8');

  // 4. Temple Pages & Facilities (Priority: 0.8, changefreq: weekly)
  addUrl('/facilities', todayIso, 'weekly', '0.8');
  PLACES_DATA.forEach((place) => {
    addUrl(`/place/${place.slug}`, todayIso, 'weekly', '0.8');
  });

  // 5. Category Pages (Priority: 0.7, changefreq: weekly)
  addUrl('/blog', todayIso, 'weekly', '0.7');
  addUrl('/gallery', todayIso, 'weekly', '0.7');
  addUrl('/faq', todayIso, 'weekly', '0.7');

  // 6. Blog Pages (Priority: 0.6, changefreq: weekly)
  BLOGS_DATA.forEach((blog) => {
    // Uses the blog's actual updated date
    addUrl(`/blog/${blog.slug}`, blog.date, 'weekly', '0.6');
  });

  // 7. Contact / About Pages (Priority: 0.5, changefreq: monthly)
  addUrl('/about', todayIso, 'monthly', '0.5');
  addUrl('/contact', todayIso, 'monthly', '0.5');

  // 8. Privacy / Terms / Utility Pages (Priority: 0.3, changefreq: monthly)
  addUrl('/privacy-policy', todayIso, 'monthly', '0.3');
  addUrl('/terms-and-conditions', todayIso, 'monthly', '0.3');
  addUrl('/sitemap', todayIso, 'monthly', '0.3');
  addUrl('/robots', todayIso, 'monthly', '0.3');

  return entries;
}

/**
 * Generates valid XML according to sitemaps.org standards.
 */
export function generateSitemapXml(domain: string = GLOBAL_CONFIG.siteUrl): string {
  const entries = buildSitemapEntries(domain);

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  entries.forEach((entry) => {
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(entry.loc)}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

/**
 * Generates standard robots.txt referencing the sitemap URL.
 */
export function generateRobotsTxt(domain: string = GLOBAL_CONFIG.siteUrl): string {
  const cleanDomain = domain.replace(/\/+$/, '');
  return `User-agent: *
Allow: /

Sitemap: ${cleanDomain}/sitemap.xml
`;
}
