import fs from 'fs';
import path from 'path';

const keywordsBatch4 = [
  'dharmasthala temple room booking 2025',
  'dharmasthala temple accommodation 2025',
  'dharmasthala temple room booking latest',
  'dharmasthala temple room booking official',
  'dharmasthala temple room booking private',
  'dharmasthala temple room booking nearby',
  'dharmasthala temple room booking same day',
  'dharmasthala temple room booking instant',
  'dharmasthala temple room booking weekend',
  'dharmasthala temple room booking holiday',
  'dharmasthala temple room booking festival',
  'dharmasthala temple accommodation for family',
  'dharmasthala temple accommodation for couples',
  'dharmasthala temple accommodation for groups',
  'dharmasthala temple stay with parking',
  'dharmasthala temple rooms with attached bathroom',
  'dharmasthala temple rooms with hot water',
  'dharmasthala temple rooms with wifi',
  'dharmasthala temple rooms with food',
  'dharmasthala temple rooms with lift',
  'dharmasthala temple hotel near parking',
  'dharmasthala temple hotel near annadana hall',
  'dharmasthala temple hotel near bus stand',
  'dharmasthala temple guest house near temple',
  'dharmasthala temple budget accommodation',
  'dharmasthala temple affordable rooms',
  'dharmasthala temple economical stay',
  'dharmasthala temple best accommodation',
  'dharmasthala temple top hotels',
  'dharmasthala temple top guest houses',
  'dharmasthala temple top lodges',
  'dharmasthala temple room booking offers',
  'dharmasthala temple hotel offers',
  'dharmasthala temple room booking discounts',
  'dharmasthala temple accommodation deals',
  'dharmasthala temple stay packages',
  'dharmasthala temple family package',
  'dharmasthala temple pilgrimage package',
  'dharmasthala temple travel package',
  'dharmasthala temple room booking faq',
  'dharmasthala temple accommodation faq',
  'dharmasthala temple room booking customer care',
  'dharmasthala temple accommodation support',
  'dharmasthala temple booking assistance',
  'dharmasthala temple room enquiry',
  'dharmasthala temple accommodation enquiry',
  'dharmasthala temple hotel enquiry',
  'dharmasthala temple room booking helpline',
  'dharmasthala temple stay options',
  'dharmasthala temple room booking website',
  'dharmasthala temple accommodation website',
  'dharmasthala temple reservation online',
  'dharmasthala temple booking portal',
  'dharmasthala temple stay reservation',
  'dharmasthala temple accommodation reservation',
  'dharmasthala temple hotel reservation',
  'dharmasthala temple guest house reservation',
  'dharmasthala temple lodge reservation',
  'dharmasthala temple room reservation',
  'dharmasthala temple room booking confirmation',
  'dharmasthala temple stay confirmation',
  'dharmasthala temple accommodation confirmation',
  'dharmasthala temple booking confirmation',
  'dharmasthala temple room availability online',
  'dharmasthala temple hotel availability',
  'dharmasthala temple guest house availability',
  'dharmasthala temple accommodation availability',
  'dharmasthala temple room booking open today',
  'dharmasthala temple hotel open today',
  'dharmasthala temple accommodation open today',
  'dharmasthala temple room booking near me',
  'dharmasthala temple accommodation near me',
  'dharmasthala temple hotel near me',
  'dharmasthala temple guest house near me',
  'dharmasthala temple lodge near me',
  'dharmasthala temple stay near me',
  'dharmasthala temple online booking',
  'dharmasthala temple accommodation online',
  'dharmasthala temple room booking service',
  'dharmasthala temple hotel booking service',
  'dharmasthala temple stay booking service',
  'dharmasthala temple room reservation service',
  'dharmasthala temple accommodation reservation service',
  'dharmasthala temple room booking support',
  'dharmasthala temple accommodation support online',
  'dharmasthala temple stay near sri manjunatha',
  'dharmasthala temple room booking near sri manjunatha temple',
  'dharmasthala temple accommodation near sri manjunatha temple',
  'dharmasthala temple hotel near sri manjunatha temple',
  'dharmasthala temple guest house near sri manjunatha temple',
  'dharmasthala temple lodge near sri manjunatha temple',
  'dharmasthala temple trusted accommodation',
  'dharmasthala temple verified hotels',
  'dharmasthala temple verified guest house',
  'dharmasthala temple verified lodge',
  'dharmasthala temple safe accommodation',
  'dharmasthala temple clean rooms',
  'dharmasthala temple hygienic stay'
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
  if (kw.includes('family') || kw.includes('couple') || kw.includes('group')) return 'Family & Group Stay';
  if (kw.includes('trust')) return 'Trust Accommodation';
  if (kw.includes('contact') || kw.includes('care') || kw.includes('number') || kw.includes('support') || kw.includes('helpline') || kw.includes('enquiry') || kw.includes('faq')) return 'Helpline & Contact';
  if (kw.includes('offer') || kw.includes('discount') || kw.includes('deal') || kw.includes('package') || kw.includes('budget') || kw.includes('cheap') || kw.includes('affordable') || kw.includes('economical')) return 'Tariff & Budget';
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

  const metaTitle = `${tcKw} 2026 | Online Room Booking & Guide`;
  const metaDesc = `Complete guide for ${kw}. Reserve AC & Non-AC rooms near Shri Manjunatha Temple, Dharmasthala with instant WhatsApp support (+91 99034 90617).`;

  const intro = `Planning a pilgrimage to Shri Kshetra Dharmasthala requires comfortable, hassle-free lodging to ensure a memorable and peaceful spiritual journey. Finding verified options for ${kw} is essential for devotees, families, couples, and group pilgrims seeking proximity to Lord Manjunatha Swamy Temple and Annapoorna Annadana Hall. Whether you need air-conditioned family suites, economical non-AC rooms, or guest house accommodations near the KSRTC bus stand and temple entrance gates, this comprehensive 2026 guide covers instant WhatsApp booking (+91 99034 90617), tariff structures, amenities, check-in policies, and visitor guidelines. Read on to plan your stay with ease.`;

  const sec1Heading = `1. Key Benefits & Advantages of ${tcKw}`;
  const sec1Body = `Shri Kshetra Dharmasthala welcomes thousands of pilgrims every day. Securing your accommodation for ${kw} ensures peace of mind and seamless travel throughout your visit:`;
  const sec1Bullets = [
    `Proximity to Main Temple: Located conveniently within 300m to 800m of Shri Manjunatha Swamy Temple.`,
    `Hygienic & Well-Maintained Rooms: Daily housekeeping, sanitized bathrooms, and clean bed linen.`,
    `Essential Amenities: 24/7 hot water, power backup, purified drinking water, and safe parking.`,
    `Instant Confirmation via WhatsApp (+91 99034 90617): Quick verification of live availability and direct booking vouchers.`
  ];

  const sec2Heading = `2. Accommodation Options & Facilities Overview`;
  const sec2Body = `Lodging options covered under ${kw} offer choices suited for all budgets and group sizes:`;
  const sec2Bullets = [
    `Standard Non-AC Double Rooms: Economical double bed accommodations with fan, attached bath, and 24-hour hot water.`,
    `Deluxe AC Rooms: Air-conditioned double and triple bed rooms with TV, modern bath fittings, and power backup.`,
    `Family Suites & Multi-Bed Rooms: Spacious multi-bed rooms designed for families and group pilgrims.`,
    `Dormitories & Large Halls: Budget group stay options accommodating multi-member pilgrim mandalis.`
  ];

  const sec3Heading = `3. Step-by-Step Room Booking Instructions`;
  const sec3Body = `Reserving your room in Dharmasthala is transparent, simple, and secure. Follow these steps:`;
  const sec3Subsections = [
    {
      title: `WhatsApp Direct Booking (+91 99034 90617)`,
      body: `Send a text message on WhatsApp with your Check-in Date, Number of Days, Total Guests, and Room Preference (AC / Non-AC). Our desk checks real-time room availability and confirms your stay voucher instantly.`
    },
    {
      title: `Online Reservation Request Portal`,
      body: `Fill out our online room reservation form with your contact details and stay requirements for prompt confirmation.`
    }
  ];

  const sec4Heading = `4. Check-in Policies, ID Rules & Visitor Guidelines`;
  const sec4Body = `To ensure a smooth check-in experience at your guest house or lodge in Dharmasthala, please observe temple trust rules:`;
  const sec4Bullets = [
    `Mandatory Photo ID Proof: Original Aadhaar Card, Voter ID, or Driving License required for all adult guests.`,
    `Traditional Pilgrim Attire: Modest, traditional clothing is recommended inside temple and lodging premises.`,
    `Strict Alcohol & Non-Veg Prohibition: Dharmasthala is a holy town; smoking, alcohol, and non-veg food are strictly prohibited.`,
    `24-Hour Check-in Cycle: Flexible round-the-clock check-in and check-out counters across major blocks.`
  ];

  const sec5Heading = `5. Temple Timings, Free Annadana & Nearby Sightseeing`;
  const sec5Body = `Enhance your spiritual trip by visiting key landmarks around Dharmasthala:`;
  const sec5Bullets = [
    `Shri Manjunatha Swamy Temple Darshan: Morning 6:30 AM – 2:00 PM; Evening 5:00 PM – 8:30 PM.`,
    `Annapoorna Annadana Hall: Free satvik prasadam meals served daily (11:30 AM – 2:00 PM and 7:00 PM – 9:00 PM).`,
    `Bahubali Monolith (Ratnagiri Hill): 39-foot monolithic statue of Lord Bahubali offering scenic valley views.`,
    `Manjusha Museum: Vintage automobiles, antique clocks, and historical artifacts collection.`
  ];

  const faqs = [
    {
      question: `How can I reserve a room for ${kw}?`,
      answer: `You can reserve your room by sending a WhatsApp message to +91 99034 90617 or filling out our online booking request form.`
    },
    {
      question: `Are AC and Non-AC rooms available for ${kw}?`,
      answer: `Yes, clean AC and Non-AC double rooms, family suites, and group accommodations are available.`
    },
    {
      question: `Is 24-hour hot water available?`,
      answer: `Yes, all guest houses provide 24/7 solar or geyser hot water in attached bathrooms.`
    },
    {
      question: `What photo ID proof is mandatory during check-in?`,
      answer: `Original government photo IDs (Aadhaar Card, Voter ID, or Driving License) are mandatory for all adult guests.`
    },
    {
      question: `How far is the accommodation from Shri Manjunatha Temple?`,
      answer: `Accommodations are conveniently located within 300 to 800 meters from the temple main gate.`
    },
    {
      question: `Is car parking provided at the stay location?`,
      answer: `Yes, safe and spacious parking spaces are available for two-wheelers, cars, and pilgrim buses.`
    },
    {
      question: `Can I book room accommodation on the same day?`,
      answer: `Same-day booking assistance is available on WhatsApp (+91 99034 90617) based on real-time room availability.`
    },
    {
      question: `Are free meals served in Dharmasthala?`,
      answer: `Yes, free satvik prasad meals are served to all pilgrims daily at Annapoorna Annadana Chatra.`
    },
    {
      question: `Are guest houses safe for families and senior citizens?`,
      answer: `Yes, premises feature 24/7 security, ground floor access, lifts, and family-friendly environments.`
    },
    {
      question: `What are the check-in and check-out timings?`,
      answer: `Accommodations follow a flexible 24-hour check-in/check-out schedule from the time of check-in.`
    }
  ];

  return `  createBlogArticle({
    slug: ${JSON.stringify(slug)},
    keyword: ${JSON.stringify(kw)},
    title: ${JSON.stringify(`${tcKw} 2026: Online Reservation, Tariff & Stay Guide`)},
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
  const allSlugs = keywordsBatch4.map(getSlug);
  console.log('Generating code for Batch 4 keywords count:', keywordsBatch4.length);

  const chunkSize = 20;
  const filesCreated: { varName: string; fileName: string }[] = [];

  for (let i = 0; i < keywordsBatch4.length; i += chunkSize) {
    const chunk = keywordsBatch4.slice(i, i + chunkSize);
    const startIdx = i + 1;
    const endIdx = i + chunk.length;
    const varName = `BLOGS_BATCH4_${startIdx}_TO_${endIdx}`;
    const fileName = `promptsBatch4_${startIdx}to${endIdx}.ts`;
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

  // Update src/data/blogs.ts
  const blogsTsPath = path.join(process.cwd(), 'src', 'data', 'blogs.ts');
  let blogsTsContent = fs.readFileSync(blogsTsPath, 'utf-8');

  const importsStr = filesCreated
    .map(f => `import { ${f.varName} } from './blogs/${f.fileName.replace('.ts', '')}';`)
    .join('\n');

  const spreadsStr = filesCreated
    .map(f => `  ...${f.varName},`)
    .join('\n');

  if (!blogsTsContent.includes('promptsBatch4_1to20')) {
    blogsTsContent = importsStr + '\n' + blogsTsContent;
    blogsTsContent = blogsTsContent.replace(
      'const ALL_RAW_BLOGS: BlogPost[] = [',
      `const ALL_RAW_BLOGS: BlogPost[] = [\n${spreadsStr}`
    );
    fs.writeFileSync(blogsTsPath, blogsTsContent, 'utf-8');
    console.log('Updated src/data/blogs.ts successfully with Batch 4!');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
