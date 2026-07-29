import fs from 'fs';
import path from 'path';

const keywordsBatch2 = [
  'best accommodation dharmasthala',
  'safe stay in dharmasthala',
  'clean rooms in dharmasthala',
  'hygienic hotels dharmasthala',
  'dharmasthala rooms with wifi',
  'dharmasthala hotels with food',
  'dharmasthala accommodation with parking',
  'dharmasthala rooms near bus station',
  'dharmasthala hotel booking online',
  'dharmasthala online guest house booking',
  'book guest house dharmasthala',
  'reserve hotel dharmasthala',
  'reserve room dharmasthala',
  'dharmasthala accommodation availability',
  'dharmasthala room availability today',
  'dharmasthala hotel availability',
  'dharmasthala temple accommodation online',
  'best room booking in dharmasthala',
  'dharmasthala travel accommodation',
  'dharmasthala booking service',
  'dharmasthala stay near temple',
  'dharmasthala family accommodation',
  'dharmasthala couple friendly hotel',
  'dharmasthala group accommodation',
  'dharmasthala room booking for pilgrims',
  'dharmasthala room booking for tourists',
  'dharmasthala hotel booking near bus stand',
  'dharmasthala hotel booking near temple',
  'dharmasthala room booking with parking',
  'dharmasthala room booking with food',
  'dharmasthala room booking with wifi',
  'dharmasthala guest house near bus stand',
  'dharmasthala budget accommodation',
  'dharmasthala luxury accommodation',
  'dharmasthala economy rooms',
  'dharmasthala affordable hotels',
  'dharmasthala best stay',
  'dharmasthala temple stay booking',
  'dharmasthala accommodation for family',
  'dharmasthala accommodation for couples',
  'dharmasthala accommodation for groups',
  'dharmasthala room booking offers',
  'dharmasthala room booking discounts',
  'dharmasthala room booking deals',
  'dharmasthala room booking packages',
  'dharmasthala hotel offers',
  'dharmasthala hotel discounts',
  'dharmasthala room booking during festival',
  'dharmasthala room booking on weekends',
  'dharmasthala room booking on holidays',
  'dharmasthala accommodation with breakfast',
  'dharmasthala hotel with restaurant',
  'dharmasthala hotel with parking',
  'dharmasthala hotel with family rooms',
  'dharmasthala hotel with ac rooms',
  'dharmasthala hotel with non ac rooms',
  'dharmasthala lodge with parking',
  'dharmasthala lodge with attached bathroom',
  'dharmasthala guest house with parking',
  'dharmasthala temple accommodation booking',
  'dharmasthala room booking near temple trust',
  'dharmasthala online room reservation',
  'dharmasthala room booking confirmation',
  'dharmasthala accommodation confirmation',
  'dharmasthala hotel reservation online',
  'dharmasthala lodge reservation',
  'dharmasthala guest house reservation',
  'dharmasthala room booking support',
  'dharmasthala room booking help',
  'dharmasthala room booking customer care',
  'dharmasthala accommodation contact',
  'dharmasthala room booking phone number',
  'dharmasthala hotel contact number',
  'dharmasthala guest house contact',
  'dharmasthala booking assistance',
  'dharmasthala stay options',
  'dharmasthala accommodation options',
  'dharmasthala room booking nearby',
  'stay in dharmasthala near temple',
  'best place to stay in dharmasthala',
  'top hotels in dharmasthala',
  'top lodges in dharmasthala',
  'top guest houses in dharmasthala',
  'best room booking website for dharmasthala',
  'book dharmasthala temple rooms',
  'reserve dharmasthala accommodation',
  'reserve dharmasthala guest house',
  'reserve dharmasthala lodge',
  'dharmasthala accommodation near bus stand',
  'dharmasthala rooms near temple entrance',
  'dharmasthala room booking for one day',
  'dharmasthala room booking for two days',
  'dharmasthala room booking for overnight stay',
  'dharmasthala room booking for weekend trip',
  'dharmasthala room booking for pilgrimage',
  'dharmasthala room booking for vacation',
  'dharmasthala room booking with instant confirmation',
  'dharmasthala room booking without advance payment',
  'dharmasthala room booking with free cancellation',
  'dharmasthala hotel booking with parking',
  'dharmasthala hotel booking with breakfast'
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
  if (kw.includes('contact') || kw.includes('care') || kw.includes('number') || kw.includes('support') || kw.includes('help')) return 'Helpline & Contact';
  if (kw.includes('offer') || kw.includes('discount') || kw.includes('deal') || kw.includes('package') || kw.includes('budget') || kw.includes('cheap') || kw.includes('affordable') || kw.includes('economy')) return 'Tariff & Budget';
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

  const metaTitle = `${tcKw} 2026 | Online Room Reservation & Helpline`;
  const metaDesc = `Comprehensive guide for ${kw}. Reserve AC & Non-AC rooms near Shri Manjunatha Temple, Dharmasthala with instant WhatsApp booking (+91 99034 90617).`;

  const intro = `Planning your visit to the sacred pilgrimage destination of Shri Kshetra Dharmasthala requires reliable lodging arrangements to ensure a smooth, comfortable, and spiritually uplifting stay. Finding top-rated solutions for ${kw} is essential for pilgrims, families, couples, and tour groups visiting Lord Manjunatha Swamy Temple. Whether you require comfortable air-conditioned family suites, economical non-AC rooms, or guest house lodging near the main bus station and temple entrances, this detailed 2026 guide covers instant WhatsApp booking (+91 99034 90617), tariff details, amenities, check-in policies, and visitor guidelines. Read on for complete details on securing your stay effortlessly.`;

  const sec1Heading = `1. Overview & Key Benefits of ${tcKw}`;
  const sec1Body = `Shri Kshetra Dharmasthala attracts millions of devotees every year seeking divine blessings and peaceful reflection. Securing your reservation for ${kw} guarantees a hassle-free experience during your yatra:`;
  const sec1Bullets = [
    `Convenient Proximity: Located within walking distance (300m - 800m) to Shri Manjunatha Temple and Annapoorna Annadana Hall.`,
    `Clean & Hygienic Premises: Daily room sanitization, fresh linen, and well-maintained attached bathrooms.`,
    `Essential Amenities: 24/7 hot water supply, filtered drinking water, backup generators, and spacious vehicle parking.`,
    `Instant Confirmation: Fast, no-hassle room reservation assistance via WhatsApp (+91 99034 90617).`
  ];

  const sec2Heading = `2. Accommodation Options & Facilities Overview`;
  const sec2Body = `Dharmasthala lodging options catered under ${kw} feature a range of rooms suited for different travel needs and group sizes:`;
  const sec2Bullets = [
    `Standard Non-AC Rooms: Clean double bed accommodations with fans, attached bathrooms, and continuous hot water supply.`,
    `Deluxe AC Rooms: Air-conditioned double and triple bed rooms with television and enhanced comfort features.`,
    `Family Suites & Quad Rooms: Spacious multi-bed rooms designed for families and small groups travelling together.`,
    `Dormitories & Large Halls: Budget-friendly group accommodation for pilgrim mandalis and large family gatherings.`
  ];

  const sec3Heading = `3. How to Book ${tcKw} Step-by-Step`;
  const sec3Body = `Reserving your room in Dharmasthala is simple, fast, and transparent. Follow these straightforward booking channels:`;
  const sec3Subsections = [
    {
      title: `WhatsApp Direct Helpdesk (+91 99034 90617)`,
      body: `Send a text message on WhatsApp with your arrival date, number of nights, total guests, and preferred room type (AC/Non-AC). Our team verifies live room availability and issues your room confirmation instantly.`
    },
    {
      title: `Online Room Booking Portal`,
      body: `Complete the online reservation form on our web portal to submit your stay request. Receive immediate email or SMS status updates.`
    }
  ];

  const sec4Heading = `4. Visitor Guidelines, ID Rules & Temple Policies`;
  const sec4Body = `When checking into your reserved accommodation in Dharmasthala, please ensure compliance with temple trust regulations:`;
  const sec4Bullets = [
    `Mandatory Photo ID Proof: Original Aadhaar Card, Voter ID, or Driving License required for all adult guests during check-in.`,
    `Devotee & Family Dress Code: Traditional Indian attire is recommended when moving through temple and guest house premises.`,
    `Alcohol & Non-Veg Prohibition: Strictly sacred town; smoking, alcohol, and non-vegetarian items are completely prohibited.`,
    `24-Hour Check-in Cycle: Flexible 24-hour check-in/out policy based on your arrival time.`
  ];

  const sec5Heading = `5. Temple Timings, Annadana & Nearby Places to Visit`;
  const sec5Body = `Maximize your spiritual yatra by visiting key landmarks in and around Dharmasthala:`;
  const sec5Bullets = [
    `Shri Manjunatha Swamy Temple: Morning Darshan from 6:30 AM to 2:00 PM; Evening Darshan from 5:00 PM to 8:30 PM.`,
    `Annapoorna Chatra: Free satvik meal served daily from 11:30 AM to 2:00 PM and 7:00 PM to 9:00 PM.`,
    `Bahubali Statue (Ratnagiri Hill): 39-foot monolithic statue offering serene views of the Netravathi river valley.`,
    `Manjusha Museum: Vintage vehicle collection and historical artifacts located near the temple complex.`
  ];

  const faqs = [
    {
      question: `How can I reserve a room for ${kw}?`,
      answer: `You can reserve your stay by messaging our dedicated WhatsApp helpdesk (+91 99034 90617) or filling out the online booking request form.`
    },
    {
      question: `Are AC rooms available for ${kw}?`,
      answer: `Yes, both AC and Non-AC rooms with double beds and family options are available for booking.`
    },
    {
      question: `Is hot water available in the guest houses?`,
      answer: `Yes, 24/7 hot water facility via solar and geysers is provided in all room categories.`
    },
    {
      question: `What ID proof is required during check-in?`,
      answer: `Original government-issued photo ID cards such as Aadhaar, Voter ID, or Driving License are mandatory for adult guests.`
    },
    {
      question: `What is the check-in and check-out time?`,
      answer: `Most accommodations in Dharmasthala operate on a 24-hour flexible check-in and check-out schedule.`
    },
    {
      question: `Is car parking provided at the stay premises?`,
      answer: `Yes, spacious and safe vehicle parking facilities are available for cars, two-wheelers, and buses.`
    },
    {
      question: `Can I book room accommodation on the same day?`,
      answer: `Same-day room booking assistance is available on WhatsApp (+91 99034 90617), depending on real-time availability.`
    },
    {
      question: `How far is the accommodation from Shri Manjunatha Temple?`,
      answer: `Accommodations are conveniently situated between 300 meters and 800 meters from the temple main entrance.`
    },
    {
      question: `Are free meals provided at the temple?`,
      answer: `Yes, free satvik prasad meals are served to all pilgrims daily at Annapoorna Annadana Chatra.`
    },
    {
      question: `Are rooms safe for families and senior citizens?`,
      answer: `Yes, premises feature 24/7 security, ground floor access, lifts, and family-friendly environments.`
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
  const allSlugs = keywordsBatch2.map(getSlug);
  console.log('Generating code for Batch 2 keywords count:', keywordsBatch2.length);

  const chunkSize = 15;
  const filesCreated: { varName: string; fileName: string }[] = [];

  for (let i = 0; i < keywordsBatch2.length; i += chunkSize) {
    const chunk = keywordsBatch2.slice(i, i + chunkSize);
    const startIdx = i + 1;
    const endIdx = i + chunk.length;
    const varName = `BLOGS_BATCH2_${startIdx}_TO_${endIdx}`;
    const fileName = `promptsBatch2_${startIdx}to${endIdx}.ts`;
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

  if (!blogsTsContent.includes('promptsBatch2_1to15')) {
    blogsTsContent = importsStr + '\n' + blogsTsContent;
    blogsTsContent = blogsTsContent.replace(
      'const ALL_RAW_BLOGS: BlogPost[] = [',
      `const ALL_RAW_BLOGS: BlogPost[] = [\n${spreadsStr}`
    );
    fs.writeFileSync(blogsTsPath, blogsTsContent, 'utf-8');
    console.log('Updated src/data/blogs.ts successfully with Batch 2!');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
