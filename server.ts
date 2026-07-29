import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { BLOGS_DATA } from './src/data/blogs';
import { ALL_PILLAR_SLUGS } from './src/data/pillars';
import { PLACES_DATA } from './src/data/places';
import { generateSitemapXml, generateRobotsTxt } from './src/utils/sitemapGenerator';
import { GLOBAL_CONFIG } from './src/config/global';

async function startServer() {
  const app = express();
  const PORT = 3000;
  const isProd = process.env.NODE_ENV === 'production';

  // Helper to build pre-rendered SEO HTML for crawlers
  function injectSeoIntoHtml(rawHtml: string, reqPath: string): { html: string; status: number } {
    let decodedPath = reqPath;
    try {
      decodedPath = decodeURIComponent(reqPath);
    } catch {
      decodedPath = reqPath;
    }
    const cleanPath = decodedPath.split('?')[0].replace(/^\/+|\/+$/g, '').toLowerCase();

    let title = GLOBAL_CONFIG.defaultMetaTitle;
    let description = GLOBAL_CONFIG.defaultMetaDescription;
    let canonical = `${GLOBAL_CONFIG.siteUrl}/${cleanPath}`;
    let ogImage = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200';
    let status = 200;
    let jsonLd: any = null;

    if (cleanPath === '' || cleanPath === 'home') {
      canonical = GLOBAL_CONFIG.siteUrl;
    } else if (cleanPath === 'blog') {
      title = 'Dharmasthala Blog & Pilgrim Guides | Room Booking & Temple Tips';
      description = 'Comprehensive pilgrimage guides, temple timings, history, route maps, room booking instructions, and travel tips for Shri Kshetra Dharmasthala.';
      canonical = `${GLOBAL_CONFIG.siteUrl}/blog`;
    } else if (cleanPath.startsWith('blog/') || cleanPath.startsWith('place/') || ALL_PILLAR_SLUGS.includes(cleanPath) || BLOGS_DATA.some(b => b.slug === cleanPath)) {
      let slug = cleanPath;
      if (cleanPath.startsWith('blog/')) {
        slug = cleanPath.replace(/^blog\//, '').trim();
      } else if (cleanPath.startsWith('place/')) {
        slug = cleanPath.replace(/^place\//, '').trim();
      }

      const blogPost = BLOGS_DATA.find(b => b.slug === slug);
      if (blogPost) {
        title = blogPost.metaTitle || blogPost.title;
        description = blogPost.metaDescription || blogPost.content.intro;
        canonical = `${GLOBAL_CONFIG.siteUrl}/blog/${blogPost.slug}`;
        ogImage = blogPost.featuredImage;
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          'headline': blogPost.title,
          'image': [blogPost.featuredImage],
          'datePublished': '2026-01-15',
          'dateModified': '2026-01-15',
          'author': {
            '@type': 'Organization',
            'name': blogPost.author || 'Shri Kshetra Pilgrim Advisory Desk',
            'url': GLOBAL_CONFIG.siteUrl
          },
          'publisher': {
            '@type': 'Organization',
            'name': GLOBAL_CONFIG.businessName,
            'url': GLOBAL_CONFIG.siteUrl
          },
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': canonical
          },
          'articleSection': blogPost.category
        };
      } else if (ALL_PILLAR_SLUGS.includes(slug)) {
        title = `Dharmasthala Room Booking & Yatri Nivas Guide | ${slug}`;
        description = `Book accommodation near Shri Kshetra Dharmasthala temple online. Comprehensive tariff, check-in timings, and room options.`;
        canonical = `${GLOBAL_CONFIG.siteUrl}/${slug}`;
      } else if (cleanPath.startsWith('place/')) {
        const place = PLACES_DATA.find(p => p.slug === slug);
        if (place) {
          title = `${place.title} - Dharmasthala Sightseeing Guide`;
          description = place.description;
          canonical = `${GLOBAL_CONFIG.siteUrl}/place/${place.slug}`;
          ogImage = place.heroImage;
        } else {
          status = 404;
        }
      } else {
        status = 404;
      }
    } else if (['about', 'room-types', 'booking', 'facilities', 'gallery', 'faq', 'contact', 'privacy-policy', 'terms-and-conditions', 'sitemap', 'robots'].includes(cleanPath)) {
      status = 200;
      if (cleanPath === 'room-types') {
        title = 'Dharmasthala Room Types & Tariffs | AC & Non-AC Rooms';
        description = 'View available room options at Dharmasthala Yatri Nivas guest houses including AC double rooms, non-AC triple rooms, and family suites.';
      } else if (cleanPath === 'booking') {
        title = 'Online Room Booking Portal | Shri Kshetra Dharmasthala';
        description = 'Instant online booking for Dharmasthala temple rooms, guest houses, and yatri nivas accommodation.';
      }
    } else {
      status = 404;
      title = '404 - Page Not Found | Shri Kshetra Dharmasthala';
      description = 'The requested page or article could not be found. Return to the Dharmasthala home page or blog listing.';
    }

    let modifiedHtml = rawHtml
      .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
      .replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${description}">`)
      .replace(/<link rel="canonical" href=".*?"\s*\/?>/i, `<link rel="canonical" href="${canonical}">`);

    if (jsonLd) {
      const jsonLdScript = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
      modifiedHtml = modifiedHtml.replace('</head>', `${jsonLdScript}\n</head>`);
    }

    return { html: modifiedHtml, status };
  }

  // 1. Dynamic Sitemap
  app.get('/sitemap.xml', (_req, res) => {
    const xml = generateSitemapXml();
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(xml);
  });

  // 2. Dynamic Robots.txt
  app.get('/robots.txt', (_req, res) => {
    const txt = generateRobotsTxt();
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(txt);
  });

  // 3. Vite middleware in development vs Static serving in production
  let vite: any = null;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
  }

  // 4. Catch-all HTML renderer with route status inspection
  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    try {
      let template: string;
      if (!isProd && vite) {
        template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(path.resolve(process.cwd(), 'dist', 'index.html'), 'utf-8');
      }

      const { html, status } = injectSeoIntoHtml(template, url);
      res.status(status).setHeader('Content-Type', 'text/html; charset=utf-8').send(html);
    } catch (e: any) {
      if (vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error('Render error:', e);
      res.status(500).end(e.message);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT} (env: ${process.env.NODE_ENV || 'development'})`);
  });
}

startServer();
