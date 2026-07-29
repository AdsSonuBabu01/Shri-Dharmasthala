import fs from 'fs';
import path from 'path';

const keywordsBatch3 = [
  'dharmasthala hotel booking for family',
  'dharmasthala hotel booking for groups',
  'dharmasthala hotel booking for pilgrims',
  'dharmasthala guest house booking online',
  'dharmasthala lodge booking online',
  'dharmasthala temple guest house booking',
  'dharmasthala temple accommodation reservation',
  'dharmasthala accommodation near sri manjunatha temple',
  'dharmasthala room booking near temple gate',
  'dharmasthala accommodation near temple gate',
  'dharmasthala room booking near ksrtc bus stand',
  'dharmasthala lodge near ksrtc bus stand',
  'dharmasthala hotel near ksrtc bus stand',
  'best lodge in dharmasthala',
  'best guest house near dharmasthala temple',
  'best family hotel in dharmasthala',
  'best budget hotel in dharmasthala',
  'cheap guest house in dharmasthala',
  'low price rooms in dharmasthala',
  'dharmasthala room booking 24 hours',
  'dharmasthala hotel booking 24 hours',
  'dharmasthala accommodation 24 hours',
  'dharmasthala room booking open now',
  'dharmasthala hotels open today',
  'dharmasthala stay for devotees',
  'dharmasthala stay with family',
  'dharmasthala room booking near temple parking',
  'dharmasthala room booking near annadana hall',
  'dharmasthala room booking near railway booking counter',
  'dharmasthala accommodation for senior citizens',
  'dharmasthala accommodation with hot water',
  'dharmasthala accommodation with attached bathroom',
  'dharmasthala accommodation with lift',
  'dharmasthala hotel with free parking',
  'dharmasthala hotel with room service',
  'dharmasthala room booking near main temple',
  'dharmasthala online booking support',
  'dharmasthala accommodation enquiry',
  'dharmasthala hotel enquiry',
  'dharmasthala guest house enquiry',
  'dharmasthala room enquiry',
  'dharmasthala accommodation booking online',
  'dharmasthala lodge booking near temple',
  'dharmasthala temple room reservation',
  'dharmasthala accommodation reservation online',
  'dharmasthala room booking for solo travelers',
  'dharmasthala room booking for women',
  'dharmasthala room booking for men',
  'dharmasthala room booking for students',
  'dharmasthala room booking for business travelers',
  'dharmasthala room booking with flexible check in',
  'dharmasthala room booking with flexible check out',
  'dharmasthala early check in dharmasthala',
  'dharmasthala late check out rooms',
  'dharmasthala hotel near temple road',
  'dharmasthala lodge near temple road',
  'dharmasthala guest house near temple road',
  'dharmasthala hotel with family suite',
  'dharmasthala hotel with deluxe rooms',
  'dharmasthala room booking without queue',
  'dharmasthala accommodation for temple visit',
  'dharmasthala stay for darshan',
  'dharmasthala room booking for weekend pilgrimage',
  'dharmasthala room booking near temple entrance gate',
  'dharmasthala room booking near annadana',
  'dharmasthala accommodation near annadana hall',
  'dharmasthala accommodation for devotees online',
  'dharmasthala trusted room booking',
  'dharmasthala verified hotels',
  'verified guest house dharmasthala',
  'verified lodge dharmasthala',
  'dharmasthala online accommodation portal',
  'dharmasthala room booking website',
  'dharmasthala accommodation platform',
  'dharmasthala temple room availability',
  'dharmasthala hotel availability today',
  'dharmasthala guest house availability',
  'dharmasthala room booking status',
  'dharmasthala booking confirmation online',
  'dharmasthala accommodation booking confirmation',
  'dharmasthala room booking with instant support',
  'dharmasthala room booking customer support',
  'dharmasthala accommodation customer care',
  'dharmasthala stay recommendation',
  'best accommodation near dharmasthala temple',
  'top rated hotels in dharmasthala',
  'top rated guest house in dharmasthala',
  'top rated lodge in dharmasthala',
  'highest rated hotels in dharmasthala',
  'highest rated guest house dharmasthala',
  'highest rated accommodation dharmasthala',
  'best room deals dharmasthala',
  'best accommodation deals dharmasthala',
  'dharmasthala hotel packages',
  'dharmasthala room package',
  'dharmasthala family stay package',
  'dharmasthala pilgrimage stay package',
  'dharmasthala budget stay package',
  'dharmasthala deluxe stay package',
  'dharmasthala premium stay package',
  'dharmasthala room booking near bus stop',
  'dharmasthala room booking near taxi stand',
  'dharmasthala room booking near market',
  'dharmasthala stay near market',
  'dharmasthala hotel near market',
  'dharmasthala accommodation near shopping area',
  'dharmasthala room booking near restaurants',
  'dharmasthala hotel near restaurants',
  'dharmasthala accommodation near restaurants',
  'dharmasthala room booking near parking area',
  'dharmasthala room booking for temple festival',
  'dharmasthala accommodation during festival',
  'dharmasthala room booking peak season',
  'dharmasthala hotel booking peak season',
  'dharmasthala room booking off season',
  'dharmasthala budget stay near temple',
  'dharmasthala affordable guest house',
  'dharmasthala economical rooms',
  'dharmasthala online room enquiry',
  'dharmasthala accommodation enquiry online',
  'dharmasthala hotel enquiry online',
  'dharmasthala guest house enquiry online',
  'dharmasthala room booking faq',
  'dharmasthala accommodation faq',
  'dharmasthala hotel booking faq',
  'dharmasthala room booking guide 2025',
  'dharmasthala hotel guide 2025',
  'dharmasthala accommodation guide 2025',
  'dharmasthala travel guide 2025',
  'dharmasthala stay guide',
  'dharmasthala temple accommodation guide',
  'dharmasthala room booking tips 2025',
  'dharmasthala accommodation tips 2025',
  'dharmasthala hotel booking tips',
  'dharmasthala guest house booking tips',
  'dharmasthala room booking process online',
  'dharmasthala hotel reservation guide',
  'dharmasthala accommodation reservation guide',
  'dharmasthala guest house reservation guide',
  'dharmasthala room booking for first time visitors',
  'dharmasthala hotel for first time visitors',
  'dharmasthala stay for first time pilgrims',
  'dharmasthala accommodation near main road',
  'dharmasthala room booking near highway',
  'dharmasthala room booking close to temple',
  'dharmasthala hotel close to temple',
  'dharmasthala guest house close to temple',
  'dharmasthala lodge close to temple',
  'dharmasthala accommodation close to temple',
  'dharmasthala room booking for large family',
  'dharmasthala accommodation for large family',
  'dharmasthala hotel for large groups',
  'dharmasthala dormitory booking',
  'dharmasthala dormitory near temple',
  'dharmasthala shared accommodation',
  'dharmasthala private accommodation',
  'dharmasthala room booking with attached toilet',
  'dharmasthala room booking with clean bathroom',
  'dharmasthala room booking with geyser',
  'dharmasthala room booking with drinking water',
  'dharmasthala room booking with 24 hour check in',
  'dharmasthala room booking with reception',
  'dharmasthala accommodation near temple parking',
  'dharmasthala stay near sri manjunatha temple',
  'dharmasthala temple stay online booking',
  'dharmasthala temple lodging',
  'dharmasthala accommodation for temple darshan',
  'dharmasthala stay booking online',
  'dharmasthala accommodation booking today',
  'dharmasthala hotel reservation today',
  'dharmasthala temple room booking online',
  'dharmasthala temple accommodation booking',
  'dharmasthala temple stay online',
  'dharmasthala temple room availability today',
  'dharmasthala temple room tariff',
  'dharmasthala temple guest house booking online',
  'dharmasthala temple lodge booking',
  'dharmasthala temple accommodation price',
  'dharmasthala temple room booking contact',
  'dharmasthala temple room booking whatsapp',
  'dharmasthala temple rooms near main gate',
  'dharmasthala temple accommodation near bus stand',
  'dharmasthala temple family rooms',
  'dharmasthala temple deluxe rooms',
  'dharmasthala temple budget rooms',
  'dharmasthala temple non ac rooms',
  'dharmasthala temple ac rooms',
  'dharmasthala temple hotel booking',
  'dharmasthala temple lodge near entrance',
  'dharmasthala temple stay for pilgrims',
  'book dharmasthala temple accommodation',
  'reserve dharmasthala temple room',
  'dharmasthala temple accommodation online booking',
  'dharmasthala temple stay booking online',
  'dharmasthala temple room reservation online',
  'dharmasthala temple room booking guide',
  'dharmasthala temple room booking process',
  'dharmasthala temple room booking tips',
  'dharmasthala temple accommodation guide',
  'dharmasthala temple accommodation tips'
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
  if (kw.includes('family') || kw.includes('group') || kw.includes('senior') || kw.includes('solo') || kw.includes('women') || kw.includes('men') || kw.includes('student') || kw.includes('large')) return 'Family & Group Stay';
  if (kw.includes('trust')) return 'Trust Accommodation';
  if (kw.includes('contact') || kw.includes('care') || kw.includes('number') || kw.includes('support') || kw.includes('enquiry') || kw.includes('faq')) return 'Helpline & Contact';
  if (kw.includes('offer') || kw.includes('discount') || kw.includes('deal') || kw.includes('package') || kw.includes('budget') || kw.includes('cheap') || kw.includes('price') || kw.includes('tariff') || kw.includes('low price')) return 'Tariff & Budget';
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
  const metaDesc = `Essential guide for ${kw}. Secure AC & Non-AC rooms near Shri Manjunatha Temple, Dharmasthala with instant WhatsApp booking (+91 99034 90617).`;

  const intro = `Visiting Shri Kshetra Dharmasthala for temple darshan or family pilgrimage requires comfortable, well-organized lodging arrangements. Finding dependable choices for ${kw} is essential for devotees, families, solo travellers, and group pilgrims seeking proximity to Lord Manjunatha Swamy Temple and Annapoorna Annadana Hall. Whether you need deluxe air-conditioned rooms, economical non-AC family units, or guest house accommodations near the KSRTC bus stand and main temple gates, this 2026 guide provides complete booking steps, tariff details, amenities, check-in guidelines, and 24/7 WhatsApp assistance (+91 99034 90617). Read on to plan your stay seamlessly.`;

  const sec1Heading = `1. Key Highlights & Advantages of ${tcKw}`;
  const sec1Body = `Dharmasthala welcomes thousands of pilgrims every day. Securing your accommodation for ${kw} ensures peace of mind and effortless travel during your sacred yatra:`;
  const sec1Bullets = [
    `Walking Distance to Temple: Located conveniently within 300m to 800m of Shri Manjunatha Swamy Temple entrance gates.`,
    `Hygienic & Clean Rooms: Well-maintained guest rooms equipped with sanitized attached bathrooms and daily housekeeping.`,
    `Essential Facilities: 24/7 hot water supply, backup generators, filtered drinking water, and safe vehicle parking.`,
    `Instant WhatsApp Booking (+91 99034 90617): Fast room verification and instant booking confirmation desk.`
  ];

  const sec2Heading = `2. Available Room Types & Amenities Overview`;
  const sec2Body = `Accommodations provided under ${kw} cater to various group sizes and travel preferences:`;
  const sec2Bullets = [
    `Standard Non-AC Double Rooms: Economical lodging featuring double beds, attached bath, fans, and 24-hour hot water.`,
    `Deluxe AC Rooms: Air-conditioned double and triple bed accommodations equipped with television and modern fittings.`,
    `Family Suites & Quad Rooms: Spacious lodging units tailored for medium to large family groups visiting the temple town.`,
    `Dormitories & Large Halls: Budget-friendly group stay options capable of accommodating multi-member pilgrim groups.`
  ];

  const sec3Heading = `3. Step-by-Step Room Reservation Process`;
  const sec3Body = `Booking your room in Dharmasthala is transparent and simple. Follow these steps:`;
  const sec3Subsections = [
    {
      title: `WhatsApp Helpline Booking (+91 99034 90617)`,
      body: `Message our WhatsApp helpline with your arrival date, number of nights, total guest count, and room preference (AC / Non-AC). Our desk checks real-time availability and confirms your stay voucher.`
    },
    {
      title: `Online Request Form`,
      body: `Submit your accommodation details on our online portal form to receive immediate reservation updates.`
    }
  ];

  const sec4Heading = `4. Check-in Rules, Photo ID & Visitor Guidelines`;
  const sec4Body = `To ensure a smooth check-in at your stay location in Dharmasthala, please adhere to temple trust regulations:`;
  const sec4Bullets = [
    `Mandatory Photo ID Proof: Original Aadhaar Card, Voter ID, or Driving License required for all adult guests.`,
    `Traditional Pilgrim Code: Respectful, traditional Indian attire is recommended inside temple and lodging premises.`,
    `No Alcohol or Non-Veg: Dharmasthala is a sacred pilgrim town; alcohol, smoking, and non-vegetarian food are strictly prohibited.`,
    `24-Hour Check-in Schedule: Flexible 24-hour check-in/out timers operating round-the-clock.`
  ];

  const sec5Heading = `5. Temple Timings, Prasadam Meals & Local Attractions`;
  const sec5Body = `Enhance your pilgrimage by visiting prominent spiritual and cultural landmarks across Dharmasthala:`;
  const sec5Bullets = [
    `Shri Manjunatha Temple Darshan: Morning Darshan from 6:30 AM to 2:00 PM; Evening Darshan from 5:00 PM to 8:30 PM.`,
    `Annapoorna Annadana Hall: Free satvik lunch (11:30 AM – 2:00 PM) and dinner (7:00 PM – 9:00 PM) served daily to all devotees.`,
    `Bahubali Statue (Ratnagiri Hill): 39-foot monolithic statue of Bhagwan Bahubali reachable via scenic steps.`,
    `Manjusha Museum: Extensive collection of antique cars, clocks, weapons, and historical artifacts.`
  ];

  const faqs = [
    {
      question: `How do I book a room for ${kw}?`,
      answer: `You can book your stay by sending a WhatsApp message to +91 99034 90617 or by filling out our online room reservation form.`
    },
    {
      question: `Are AC and Non-AC rooms available for ${kw}?`,
      answer: `Yes, clean AC and Non-AC double rooms, family suites, and group accommodations are available.`
    },
    {
      question: `Is 24-hour hot water available?`,
      answer: `Yes, all guest houses and lodges provide 24/7 hot water via solar or electric geysers.`
    },
    {
      question: `What photo ID proof is required during check-in?`,
      answer: `All adult guests must present valid original government photo IDs (Aadhaar Card, Voter ID, or Driving License).`
    },
    {
      question: `How far is the accommodation from Shri Manjunatha Temple?`,
      answer: `Accommodations are conveniently located between 300 meters and 800 meters from the main temple entrance.`
    },
    {
      question: `Is car parking available at the lodging site?`,
      answer: `Yes, safe and spacious parking spaces are provided for cars, bikes, and pilgrim buses.`
    },
    {
      question: `Can I get same-day room booking in Dharmasthala?`,
      answer: `Same-day booking assistance is available via WhatsApp (+91 99034 90617) subject to real-time room availability.`
    },
    {
      question: `Are free prasadam meals served in Dharmasthala?`,
      answer: `Yes, delicious satvik meals are served free of charge to all visitors twice daily at Annapoorna Annadana Hall.`
    },
    {
      question: `Are accommodations safe for family and senior citizens?`,
      answer: `Yes, lodging premises feature 24/7 security, ground floor access, lifts, and family-friendly environments.`
    },
    {
      question: `What is the check-in and check-out timing?`,
      answer: `Lodgings follow a 24-hour flexible check-in and check-out cycle from the time of check-in.`
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
  const allSlugs = keywordsBatch3.map(getSlug);
  console.log('Generating code for Batch 3 keywords count:', keywordsBatch3.length);

  const chunkSize = 20;
  const filesCreated: { varName: string; fileName: string }[] = [];

  for (let i = 0; i < keywordsBatch3.length; i += chunkSize) {
    const chunk = keywordsBatch3.slice(i, i + chunkSize);
    const startIdx = i + 1;
    const endIdx = i + chunk.length;
    const varName = `BLOGS_BATCH3_${startIdx}_TO_${endIdx}`;
    const fileName = `promptsBatch3_${startIdx}to${endIdx}.ts`;
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

  if (!blogsTsContent.includes('promptsBatch3_1to20')) {
    blogsTsContent = importsStr + '\n' + blogsTsContent;
    blogsTsContent = blogsTsContent.replace(
      'const ALL_RAW_BLOGS: BlogPost[] = [',
      `const ALL_RAW_BLOGS: BlogPost[] = [\n${spreadsStr}`
    );
    fs.writeFileSync(blogsTsPath, blogsTsContent, 'utf-8');
    console.log('Updated src/data/blogs.ts successfully with Batch 3!');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
