import React, { useEffect } from 'react';
import { GLOBAL_CONFIG } from '../config/global';

export interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  breadcrumbs?: { name: string; url: string }[];
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
  ogType?: 'website' | 'article';
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  breadcrumbs,
  faqSchemaItems,
  articleData,
  ogImage,
  ogType = articleData ? 'article' : 'website'
}) => {
  const metaTitle = title ? (title.includes('Dharmasthala') ? title : `${title} | ${GLOBAL_CONFIG.shortName}`) : GLOBAL_CONFIG.defaultMetaTitle;
  const metaDesc = description || GLOBAL_CONFIG.defaultMetaDescription;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : GLOBAL_CONFIG.siteUrl);
  const featuredOgImage = ogImage || articleData?.image || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200';
  const metaKeywords = keywords && keywords.length > 0 ? keywords.join(', ') : GLOBAL_CONFIG.keywords.join(', ');

  useEffect(() => {
    // 1. Update Document Title
    document.title = metaTitle;

    // Helper to create or update meta/link tags
    const updateMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateLinkTag = (relVal: string, hrefVal: string) => {
      let element = document.querySelector(`link[rel="${relVal}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', relVal);
        document.head.appendChild(element);
      }
      element.setAttribute('href', hrefVal);
    };

    // 2. Standard Meta Tags
    updateMetaTag('meta[name="description"]', 'name', 'description', metaDesc);
    updateMetaTag('meta[name="keywords"]', 'name', 'keywords', metaKeywords);
    updateMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('meta[name="author"]', 'name', 'author', articleData?.authorName || 'Shri Kshetra Dharmasthala Yatri Desk');

    // 3. Canonical Link
    updateLinkTag('canonical', currentUrl);

    // 4. Open Graph Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', metaTitle);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDesc);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', featuredOgImage);
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', GLOBAL_CONFIG.businessName);
    updateMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');

    // 5. Twitter Card Tags
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', metaTitle);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDesc);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', featuredOgImage);

    // 6. Dynamic JSON-LD Schemas
    const schemaScriptId = 'dynamic-json-ld';
    let schemaScript = document.getElementById(schemaScriptId) as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaScriptId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const schemas: any[] = [
      // Schema 1: LodgingBusiness / Hotel Schema
      {
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        '@id': `${GLOBAL_CONFIG.siteUrl}/#lodging`,
        'name': GLOBAL_CONFIG.businessName,
        'description': GLOBAL_CONFIG.defaultMetaDescription,
        'url': GLOBAL_CONFIG.siteUrl,
        'telephone': GLOBAL_CONFIG.phoneDisplay,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Shri Kshetra Dharmasthala Temple Road',
          'addressLocality': 'Dharmasthala',
          'addressRegion': 'Karnataka',
          'postalCode': '574216',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '12.9466',
          'longitude': '75.3718'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'opens': '00:00',
            'closes': '23:59'
          }
        ],
        'amenityFeature': [
          { '@type': 'LocationFeatureSpecification', 'name': '24/7 Hot Water Bathing', 'value': true },
          { '@type': 'LocationFeatureSpecification', 'name': 'Temple Proximity (300m)', 'value': true },
          { '@type': 'LocationFeatureSpecification', 'name': 'Parking Facility', 'value': true },
          { '@type': 'LocationFeatureSpecification', 'name': 'Air Conditioning Rooms', 'value': true },
          { '@type': 'LocationFeatureSpecification', 'name': 'Power Backup Generator', 'value': true }
        ],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Dharmasthala Yatri Nivas Room Booking Options',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'HotelRoom',
                'name': 'AC Double Bedroom',
                'description': 'Air conditioned double bed room with 24x7 hot water and attached washroom'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'HotelRoom',
                'name': 'Non-AC Triple Bedroom',
                'description': 'Spacious non-AC room for 3 guests with hot water facility'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'HotelRoom',
                'name': 'Family Bedroom Suite',
                'description': 'Large family room suite accommodating 5 to 8 pilgrims'
              }
            }
          ]
        }
      },

      // Schema 2: Organization Schema
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${GLOBAL_CONFIG.siteUrl}/#organization`,
        'name': GLOBAL_CONFIG.businessName,
        'url': GLOBAL_CONFIG.siteUrl,
        'logo': `${GLOBAL_CONFIG.siteUrl}/android-chrome-192x192.png`,
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': GLOBAL_CONFIG.phoneDisplay,
          'contactType': 'customer service',
          'areaServed': 'IN',
          'availableLanguage': ['English', 'Kannada', 'Hindi']
        }
      },

      // Schema 3: WebSite with SearchAction
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${GLOBAL_CONFIG.siteUrl}/#website`,
        'url': GLOBAL_CONFIG.siteUrl,
        'name': GLOBAL_CONFIG.businessName,
        'description': GLOBAL_CONFIG.defaultMetaDescription,
        'potentialAction': {
          '@type': 'SearchAction',
          'target': `${GLOBAL_CONFIG.siteUrl}/blog?s={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    ];

    // Schema 4: BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': GLOBAL_CONFIG.siteUrl
          },
          ...breadcrumbs.map((bc, idx) => ({
            '@type': 'ListItem',
            'position': idx + 2,
            'name': bc.name,
            'item': bc.url
          }))
        ]
      });
    }

    // Schema 5: FAQPage Schema
    if (faqSchemaItems && faqSchemaItems.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqSchemaItems.map((item) => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      });
    }

    // Schema 6: Article / BlogPosting Schema
    if (articleData) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': articleData.headline,
        'image': [articleData.image],
        'datePublished': articleData.datePublished,
        'dateModified': articleData.dateModified || articleData.datePublished,
        'author': {
          '@type': 'Organization',
          'name': articleData.authorName || 'Shri Kshetra Dharmasthala Yatri Desk',
          'url': GLOBAL_CONFIG.siteUrl
        },
        'publisher': {
          '@type': 'Organization',
          'name': GLOBAL_CONFIG.businessName,
          'url': GLOBAL_CONFIG.siteUrl,
          'logo': {
            '@type': 'ImageObject',
            'url': `${GLOBAL_CONFIG.siteUrl}/android-chrome-192x192.png`
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': currentUrl
        },
        'keywords': articleData.keywords ? articleData.keywords.join(', ') : metaKeywords,
        'articleSection': articleData.category || 'Pilgrim Guide'
      });
    }

    schemaScript.textContent = JSON.stringify(schemas, null, 2);
  }, [metaTitle, metaDesc, metaKeywords, currentUrl, featuredOgImage, ogType, breadcrumbs, faqSchemaItems, articleData]);

  return null;
};

