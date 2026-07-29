import { BlogPost } from '../../types';

export interface BlogConfig {
  slug: string;
  keyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  featuredImage: string;
  intro: string;
  sections: {
    id: string;
    heading: string;
    body: string;
    bullets?: string[];
    image?: string;
    imageAlt?: string;
    subsections?: { title: string; body: string }[];
  }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs?: string[];
}

export function createBlogArticle(config: BlogConfig): BlogPost {
  // Ensure table of contents is derived from sections
  const tableOfContents = config.sections.map((sec, idx) => ({
    id: sec.id,
    title: `${idx + 1}. ${sec.heading.replace(/^\d+\.\s*/, '')}`
  }));

  return {
    slug: config.slug,
    title: config.title,
    metaTitle: config.metaTitle,
    metaDescription: config.metaDescription,
    date: config.date,
    author: config.author,
    readTime: config.readTime,
    category: config.category,
    featuredImage: config.featuredImage,
    tableOfContents,
    content: {
      intro: config.intro,
      sections: config.sections,
      faqs: config.faqs
    },
    relatedSlugs: config.relatedSlugs || []
  };
}
