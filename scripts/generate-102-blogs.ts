import fs from 'fs';
import path from 'path';

const keywords = [
  'dharmasthala room booking',
  'dharmasthala room booking online',
  'dharmasthala temple room booking',
  'dharmasthala accommodation',
  'dharmasthala hotel booking',
  'rooms in dharmasthala',
  'dharmasthala guest house',
  'dharmasthala lodge booking',
  'dharmasthala temple accommodation',
  'book room in dharmasthala',
  'dharmasthala room availability',
  'dharmasthala room price',
  'dharmasthala room tariff',
  'dharmasthala hotel rooms',
  'hotels near dharmasthala temple',
  'budget rooms in dharmasthala',
  'cheap hotels in dharmasthala',
  'best hotels in dharmasthala',
  'family rooms in dharmasthala',
  'ac rooms in dharmasthala',
  'non ac rooms in dharmasthala',
  'deluxe rooms in dharmasthala',
  'luxury hotels in dharmasthala',
  'guest house near dharmasthala temple',
  'dharmasthala stay',
  'dharmasthala lodging',
  'dharmasthala accommodation online',
  'sri manjunatha temple rooms',
  'sri manjunatha temple accommodation',
  'dharmasthala room booking contact number',
  'dharmasthala room booking whatsapp',
  'dharmasthala booking',
  'room booking near dharmasthala temple',
  'online room booking dharmasthala',
  'dharmasthala temple guest house',
  'dharmasthala temple hotel',
  'dharmasthala pilgrims accommodation',
  'dharmasthala stay booking',
  'dharmasthala online stay',
  'room reservation dharmasthala',
  'hotel reservation dharmasthala',
  'dharmasthala lodge near temple',
  'affordable rooms dharmasthala',
  'premium rooms dharmasthala',
  'dharmasthala accommodation booking',
  'dharmasthala room reservation',
  'temple room booking dharmasthala',
  'book hotel in dharmasthala',
  'best guest house in dharmasthala',
  'dharmasthala room booking today',
  'same day room booking dharmasthala',
  'instant room booking dharmasthala',
  'last minute room booking dharmasthala',
  'dharmasthala room booking for family',
  'dharmasthala room booking for couples',
  'dharmasthala room booking for groups',
  'dharmasthala accommodation near temple',
  'hotels with parking in dharmasthala',
  'dharmasthala guest house booking',
  'dharmasthala lodge rooms',
  'sri kshetra dharmasthala accommodation',
  'sri kshetra dharmasthala room booking',
  'dharmasthala online hotel booking',
  'dharmasthala travel stay',
  'dharmasthala temple stay',
  'room booking in sri kshetra dharmasthala',
  'hotel near sri manjunatha temple',
  'dharmasthala accommodation for pilgrims',
  'room booking near manjunatha temple',
  'dharmasthala hotel deals',
  'dharmasthala room offers',
  'dharmasthala room booking guide',
  'dharmasthala booking guide',
  'how to book room in dharmasthala',
  'dharmasthala online booking guide',
  'dharmasthala accommodation guide',
  'dharmasthala hotel guide',
  'room booking process dharmasthala',
  'dharmasthala accommodation tips',
  'dharmasthala booking tips',
  'dharmasthala hotel near bus stand',
  'dharmasthala hotel near temple',
  'dharmasthala rooms with attached bathroom',
  'dharmasthala rooms for senior citizens',
  'dharmasthala rooms for families',
  'dharmasthala rooms for devotees',
  'dharmasthala guest house list',
  'dharmasthala hotel list',
  'dharmasthala lodge list',
  'dharmasthala temple room list',
  'room booking website dharmasthala',
  'dharmasthala accommodation website',
  'official dharmasthala room booking',
  'private room booking dharmasthala',
  'dharmasthala trust rooms',
  'dharmasthala trust accommodation',
  'temple trust room booking',
  'dharmasthala trust guest house',
  'dharmasthala online reservation',
  'dharmasthala accommodation reservation',
  'dharmasthala room booking app',
  'dharmasthala booking portal'
];

function titleCase(str: string): string {
  return str
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function getSlug(kw: string): string {
  return kw
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function getCategory(kw: string): string {
  if (kw.includes('guest house')) return 'Guest House Guide';
  if (kw.includes('hotel')) return 'Hotel & Lodging';
  if (kw.includes('family') || kw.includes('senior') || kw.includes('group')) return 'Family & Group Stay';
  if (kw.includes('trust')) return 'Trust Accommodation';
  if (kw.includes('guide') || kw.includes('tips') || kw.includes('how to')) return 'Booking Guide';
  if (kw.includes('price') || kw.includes('tariff') || kw.includes('cheap') || kw.includes('budget') || kw.includes('offers')) return 'Tariff & Budget';
  return 'Room Booking';
}

function generateArticleCode(kw: string, index: number, allSlugs: string[]): string {
  const slug = getSlug(kw);
  const tcKw = titleCase(kw);
  const category = getCategory(kw);
  const otherSlugs = allSlugs.filter(s => s !== slug);
  const related = [
    otherSlugs[(index * 3) % otherSlugs.length],
    otherSlugs[(index * 3 + 1) % otherSlugs.length],
    otherSlugs[(index * 3 + 2) % otherSlugs.length]
  ].filter(Boolean);

  const metaTitle = `${tcKw} 2026 | Online Room Booking & Tariff`;
  const metaDesc = `Complete guide for ${kw}. Book AC & Non-AC rooms near Shri Manjunatha Temple, Dharmasthala. Check availability via WhatsApp (+91 99034 90617).`;

  const intro = `Planning your sacred pilgrimage to Shri Kshetra Dharmasthala requires reliable lodging to ensure a spiritual and peaceful journey. Finding the ideal option for ${kw} is essential for devotees, families, and solo travellers seeking comfortable stay near Lord Manjunatha Swamy Temple. Whether you require single AC rooms, spacious family suites, or budget non-AC lodging, this comprehensive guide covers step-by-step reservation procedures, tariff structures, guest house amenities, distance from temple, and visitor guidelines. Read on to discover how to book your room effortlessly using our dedicated WhatsApp assistance (+91 99034 90617) or online reservation portal.`;

  const sec1Heading = `1. Importance of ${tcKw} for Devotees`;
  const sec1Body = `Shri Dharmasthala receives thousands of pilgrims daily who travel from across Karnataka and neighboring states to seek the blessings of Lord Manjunatha Swamy and Annappa Swamy. Having a confirmed reservation for ${kw} guarantees a stress-free arrival, especially during peak weekend rushes, Shivarathri, Lakshadeepotsava, and school holidays.`;
  const sec1Bullets = [
    `Proximity to Temple: Staying close to Shri Manjunatha Temple allows easy access for early morning Nitya Abhisheka and evening Darshan.`,
    `Hygienic Environment: Well-maintained guest houses with daily housekeeping and sanitized bathroom facilities.`,
    `Safe for Families & Seniors: Secure premises equipped with 24/7 security, hot water, and wheelchair-accessible lifts.`,
    `Instant Availability Verification: Real-time room availability assistance via WhatsApp (+91 99034 90617).`
  ];

  const sec2Heading = `2. Room Categories, Amenities & Tariff Structure`;
  const sec2Body = `Dharmasthala offers a wide variety of accommodation choices tailored to different group sizes and budgets. Below is an overview of room types commonly reserved under ${kw}:`;
  const sec2Bullets = [
    `Standard Non-AC Rooms: Clean double bed rooms with attached bathroom, fan, and 24-hour hot water facility. Nominal tariff suitable for budget travellers.`,
    `Deluxe AC Rooms: Air-conditioned double and triple bed rooms with television, comfortable mattresses, and modern bath fittings.`,
    `Family Suites (3 to 5 Beds): Spacious lodging designed for medium-sized families travelling together.`,
    `Large Family Halls / Dormitories: Economical group stay options capable of accommodating 8 to 15 pilgrims with multiple bath facilities.`
  ];

  const sec3Heading = `3. Step-by-Step Guide to Book ${tcKw}`;
  const sec3Body = `Booking your accommodation in Dharmasthala is quick and transparent. Follow these straightforward steps to reserve your stay:`;
  const sec3Subsections = [
    {
      title: `Option 1: Instant WhatsApp Booking (+91 99034 90617)`,
      body: `Send a text message on WhatsApp specifying your Check-in Date, Number of Days, Total Guests, and preferred Room Category (AC / Non-AC). Our helpdesk immediately checks real-time room availability and confirms your stay voucher.`
    },
    {
      title: `Option 2: Online Reservation Request Form`,
      body: `Fill out the Room Reserve Form on our portal with your contact details and stay requirements. Our reservation desk processes your request and provides confirmation updates promptly.`
    }
  ];

  const sec4Heading = `4. Check-in Rules, ID Requirements & Guidelines`;
  const sec4Body = `To ensure a smooth check-in experience at your booked guest house or lodge in Dharmasthala, please adhere to the following temple trust policies:`;
  const sec4Bullets = [
    `Mandatory Government Photo ID: All adult guests must present original Aadhaar Card, Voter ID, or Driving License upon arrival.`,
    `Family & Pilgrim Policy: Rooms are allocated strictly to family groups, pilgrims, and legitimate travellers. Unmarried couples are not permitted.`,
    `24-Hour Check-in / Check-out: Flexible round-the-clock check-in and check-out counters across major guest house blocks.`,
    `Strict Alcohol & Smoking Prohibition: Dharmasthala is a sacred temple town; alcohol consumption, smoking, and non-vegetarian food are strictly prohibited.`
  ];

  const sec5Heading = `5. Temple Timings, Annadana & Nearby Attractions`;
  const sec5Body = `While staying in Dharmasthala, pilgrims can take advantage of various sacred and cultural experiences in the temple town:`;
  const sec5Bullets = [
    `Shri Manjunatha Temple Darshan Timings: Morning 6:30 AM – 2:00 PM, Evening 5:00 PM – 8:30 PM.`,
    `Annapoorna Chatra Free Meal: Free satvik lunch (11:30 AM – 2:00 PM) and dinner (7:00 PM – 9:00 PM) served to all devotees daily.`,
    `Bahubali Statue (Ratnagiri Hill): 39-foot monolithic statue of Bhagwan Bahubali located 1 km from temple.`,
    `Manjusha Car Museum & Heritage Collection: Vintage automobile and artifact collection located within 800m.`
  ];

  const faqs = [
    {
      question: `How can I reserve a room for ${kw}?`,
      answer: `You can reserve your room instantly by sending a WhatsApp message to +91 99034 90617 or by filling out our online reservation form.`
    },
    {
      question: `Are AC rooms available under ${kw}?`,
      answer: `Yes, both AC and Non-AC rooms with double beds, family options, and modern amenities are available.`
    },
    {
      question: `Is 24-hour hot water available in the rooms?`,
      answer: `Yes, all guest houses and rooms provide 24/7 solar or geyser hot water facility.`
    },
    {
      question: `What are the check-in and check-out timings in Dharmasthala?`,
      answer: `Most guest houses operate on a 24-hour check-in and check-out cycle from the time of entry.`
    },
    {
      question: `What ID proof is mandatory during check-in?`,
      answer: `Original Government-issued photo IDs (Aadhaar Card, Voter ID, Driving License, or Passport) are mandatory for all adult guests.`
    },
    {
      question: `Are rooms available for single travellers or solo pilgrims?`,
      answer: `Yes, single pilgrims and solo travellers can book standard non-AC or single rooms subject to valid ID verification.`
    },
    {
      question: `How far are the guest houses from Shri Manjunatha Temple?`,
      answer: `Most guest houses and Yatri Nivas blocks are located within 300 to 800 meters (5 to 10 minutes walk) from the temple entrance.`
    },
    {
      question: `Is car parking available at the accommodation?`,
      answer: `Yes, spacious and secure open/covered parking space is available for two-wheelers, cars, and pilgrim buses.`
    },
    {
      question: `Can I book room accommodation on the same day of arrival?`,
      answer: `Same-day booking assistance is available via WhatsApp (+91 99034 90617), though advance booking is recommended for weekends.`
    },
    {
      question: `Are meals included with the room booking?`,
      answer: `While meals are not included inside room tariffs, free Satvik prasadam meals are served daily at Annapoorna Annadana Hall.`
    }
  ];

  return `  createBlogArticle({
    slug: ${JSON.stringify(slug)},
    keyword: ${JSON.stringify(kw)},
    title: ${JSON.stringify(`${tcKw} 2026: Complete Online Booking, Tariff & Stay Guide`)},
    metaTitle: ${JSON.stringify(metaTitle)},
    metaDescription: ${JSON.stringify(metaDesc)},
    date: '2026-07-24',
    author: 'Yatri Guest House Desk',
    readTime: '10 min read',
    category: ${JSON.stringify(category)},
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: ${JSON.stringify(intro)},
    sections: [
      {
        id: ${JSON.stringify(`${slug}-sec1`)},
        heading: ${JSON.stringify(sec1Heading)},
        body: ${JSON.stringify(sec1Body)},
        bullets: ${JSON.stringify(sec1Bullets)}
      },
      {
        id: ${JSON.stringify(`${slug}-sec2`)},
        heading: ${JSON.stringify(sec2Heading)},
        body: ${JSON.stringify(sec2Body)},
        bullets: ${JSON.stringify(sec2Bullets)}
      },
      {
        id: ${JSON.stringify(`${slug}-sec3`)},
        heading: ${JSON.stringify(sec3Heading)},
        body: ${JSON.stringify(sec3Body)},
        subsections: ${JSON.stringify(sec3Subsections)}
      },
      {
        id: ${JSON.stringify(`${slug}-sec4`)},
        heading: ${JSON.stringify(sec4Heading)},
        body: ${JSON.stringify(sec4Body)},
        bullets: ${JSON.stringify(sec4Bullets)}
      },
      {
        id: ${JSON.stringify(`${slug}-sec5`)},
        heading: ${JSON.stringify(sec5Heading)},
        body: ${JSON.stringify(sec5Body)},
        bullets: ${JSON.stringify(sec5Bullets)}
      }
    ],
    faqs: ${JSON.stringify(faqs, null, 6)},
    relatedSlugs: ${JSON.stringify(related)}
  })`;
}

async function main() {
  const allSlugs = keywords.map(getSlug);
  console.log('Generating code for keywords count:', keywords.length);

  // Group keywords into chunks of 15 keywords per file
  const chunkSize = 15;
  const filesCreated: { varName: string; fileName: string }[] = [];

  for (let i = 0; i < keywords.length; i += chunkSize) {
    const chunk = keywords.slice(i, i + chunkSize);
    const startIdx = i + 1;
    const endIdx = i + chunk.length;
    const varName = `BLOGS_KEYWORD_${startIdx}_TO_${endIdx}`;
    const fileName = `promptsKw${startIdx}to${endIdx}.ts`;
    const filePath = path.join(process.cwd(), 'src', 'data', 'blogs', fileName);

    const articlesCode = chunk
      .map((kw, idx) => generateArticleCode(kw, i + idx, allSlugs))
      .join(',\n\n');

    const fileContent = `import { BlogPost } from '../../types';
import { createBlogArticle } from './blogBuilder';

export const ${varName}: BlogPost[] = [
${articlesCode}
];
`;

    fs.writeFileSync(filePath, fileContent, 'utf-8');
    filesCreated.push({ varName, fileName });
    console.log(`Created file ${fileName} with ${chunk.length} articles.`);
  }

  // Now update src/data/blogs.ts to import and export all these generated sets!
  const blogsTsPath = path.join(process.cwd(), 'src', 'data', 'blogs.ts');
  let blogsTsContent = fs.readFileSync(blogsTsPath, 'utf-8');

  // Build imports
  const importsStr = filesCreated
    .map(f => `import { ${f.varName} } from './blogs/${f.fileName.replace('.ts', '')}';`)
    .join('\n');

  const spreadsStr = filesCreated
    .map(f => `  ...${f.varName},`)
    .join('\n');

  // Insert before export const BLOGS_DATA
  if (!blogsTsContent.includes('promptsKw1to15')) {
    blogsTsContent = importsStr + '\n' + blogsTsContent;
    blogsTsContent = blogsTsContent.replace(
      'export const BLOGS_DATA: BlogPost[] = [',
      `export const BLOGS_DATA: BlogPost[] = [\n${spreadsStr}`
    );
    fs.writeFileSync(blogsTsPath, blogsTsContent, 'utf-8');
    console.log('Updated src/data/blogs.ts successfully!');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
