export type NavigationPage = 
  | 'home'
  | 'about'
  | 'room-types'
  | 'booking'
  | 'facilities'
  | 'gallery'
  | 'blog'
  | 'blog-detail'
  | 'pillar-detail'
  | 'faq'
  | 'contact'
  | 'place-detail'
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'sitemap'
  | 'robots'
  | '404';

export interface PillarData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  primaryKeyword: string;
  lastUpdated: string;
  heroImage: string;
  category: string;
  readTime: string;
  isMainHub?: boolean;
  intro: string;
  keyTakeaways: string[];
  tableOfContents: { id: string; title: string }[];
  sections: {
    id: string;
    heading: string;
    body: string;
    bullets?: string[];
    table?: { headers: string[]; rows: string[][] };
    subsections?: { title: string; body: string; bullets?: string[] }[];
    image?: string;
    imageAlt?: string;
  }[];
  faqs: { question: string; answer: string }[];
  paaQuestions?: { question: string; answer: string }[];
  featuredSnippets?: {
    paragraph: string;
    listTitle?: string;
    listItems?: string[];
    tableHeaders?: string[];
    tableRows?: string[][];
  };
  nlpKeywords?: string[];
  lsiKeywords?: string[];
  longTailKeywords?: string[];
  imageSeo?: {
    fileName: string;
    altText: string;
    title: string;
    caption: string;
    description: string;
  };
  seoChecklist?: string[];
  supportingPillarsLinks?: { title: string; path: string; description: string }[];
  relatedClusterLinks?: { title: string; path: string; category: string }[];
}

export interface RoomOption {
  id: string;
  name: string;
  slug: string;
  category: 'Single' | 'Double' | 'Triple' | '4-Bed' | '5-Bed' | 'Family' | 'Dormitory';
  guestCapacity: string;
  maxOccupancy: string;
  availabilityStatus: string;
  acType: 'AC & Non-AC Available' | 'Non-AC' | 'AC';
  description: string;
  image: string;
  facilities: string[];
  features: string[];
  isPopular?: boolean;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  featuredImage: string;
  tableOfContents: { id: string; title: string }[];
  content: {
    intro: string;
    sections: {
      id: string;
      heading: string;
      subsections?: { title: string; body: string }[];
      body: string;
      bullets?: string[];
      image?: string;
      imageAlt?: string;
    }[];
    faqs?: { question: string; answer: string }[];
  };
  relatedSlugs: string[];
}

export interface PlaceItem {
  slug: string;
  title: string;
  shortDesc: string;
  distance: string;
  travelTime: string;
  description: string;
  timings: string;
  entryFee: string;
  heroImage: string;
  galleryImages: string[];
  keyHighlights: string[];
  howToReach: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking FAQ' | 'Room FAQ' | 'WhatsApp Booking FAQ' | 'Advance Booking FAQ' | 'Online Form Booking FAQ';
}

export interface QuickBookingFormData {
  fullName: string;
  mobileNumber: string;
  email?: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount: string;
  acPreference: string;
  roomType: string;
  roomsCount: string;
  specialRequest?: string;
}
