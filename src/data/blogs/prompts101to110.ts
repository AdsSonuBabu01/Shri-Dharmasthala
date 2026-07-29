import { BlogPost } from '../../types';
import { createBlogArticle } from './blogBuilder';

export const BLOGS_101_TO_110: BlogPost[] = [
  // PROMPT 101: mysore to dharmasthala
  createBlogArticle({
    slug: 'mysore-to-dharmasthala',
    keyword: 'mysore to dharmasthala',
    title: 'Mysore to Dharmasthala Travel Guide: Distance, Routes, Bus, Train & Room Booking',
    metaTitle: 'Mysore to Dharmasthala Travel Guide | Distance, Bus & Room Booking',
    metaDescription: 'Complete travel guide from Mysore to Dharmasthala covering 240 km distance, KSRTC buses, train routes via Subramanya Road, taxi fare, and room booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '12 min read',
    category: 'Travel Routes',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Planning a pilgrimage or trip from Mysore to Dharmasthala? The distance between Mysore and Dharmasthala is approximately 240 km via scenic Western Ghat routes through Hassan and Mudigere or Madikeri. Whether traveling by KSRTC bus, private car, or train via Subramanya Road, this guide provides complete travel options, route comparisons, local advice, and instant room reservation options via WhatsApp (+91 99034 90617).',
    sections: [
      {
        id: 'distance-and-route',
        heading: '1. Mysore to Dharmasthala Distance & Travel Time',
        body: 'Key travel distance and timing overview:',
        bullets: [
          'Total Road Distance: Approx. 235 - 245 km depending on chosen route.',
          'Driving Time: 5 to 6 hours by car or taxi.',
          'Bus Duration: 6 to 7 hours on KSRTC Airavat / Express services.',
          'Best Route 1 (Via Hassan): Mysore -> Holenarasipura -> Hassan -> Sakleshpur -> Shiradi Ghat -> Dharmasthala (NH 75).',
          'Best Route 2 (Via Madikeri): Mysore -> Hunsur -> Kushalnagar -> Madikeri -> Sampaje -> Sulia -> Kukke Subramanya -> Dharmasthala.'
        ]
      },
      {
        id: 'transport-modes',
        heading: '2. Bus, Train & Taxi Options',
        body: 'Transportation choices from Mysore:',
        bullets: [
          'KSRTC Bus Service: Frequent Rajahamsa, KSRTC Express, and Sleepers operate daily from Mysore Suburb Bus Stand to Dharmasthala Bus Station.',
          'Train Routes: Take a train from Mysore Junction to Subramanya Road (SBHR) station, then take a 1-hour auto or local bus to Dharmasthala.',
          'Private Taxi / Cab: Outstation cabs charge approx. ₹4,500 - ₹6,000 for a one-way transfer, offering convenience for families with elderly devotees.'
        ]
      },
      {
        id: 'accommodation-room-booking',
        heading: '3. Where to Stay & Room Reservation in Dharmasthala',
        body: 'Upon reaching Dharmasthala after a 6-hour journey, comfortable, clean AC or Non-AC rooms with attached modern bathrooms and 24x7 hot water are essential.',
        bullets: [
          'Double AC / Non-AC Rooms for couples and small pairs.',
          '3-Bed Family Rooms & 4-Bed Deluxe Rooms for family groups.',
          'Spacious Dormitories for large pilgrim bus groups.',
          'Instant WhatsApp Reservation: Message +91 99034 90617 to secure your room before arriving.'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is the distance from Mysore to Dharmasthala?',
        answer: 'The road distance from Mysore to Dharmasthala is approximately 240 km via the Hassan or Madikeri route.'
      },
      {
        question: 'Are direct buses available from Mysore to Dharmasthala?',
        answer: 'Yes, KSRTC operates direct Express, Rajahamsa, and Airavat AC buses throughout the day and night from Mysore Suburb Bus Stand.'
      }
    ],
    relatedSlugs: ['dharmasthala-to-mysore', 'how-to-reach-dharmasthala', 'dharmasthala-room-booking']
  }),

  // PROMPT 102: udupi to dharmasthala
  createBlogArticle({
    slug: 'udupi-to-dharmasthala',
    keyword: 'udupi to dharmasthala',
    title: 'Udupi to Dharmasthala Travel Guide: Distance, Bus Routes & Room Booking',
    metaTitle: 'Udupi to Dharmasthala Travel Guide | Distance, Bus & Accommodation',
    metaDescription: 'Detailed travel guide from Udupi to Dharmasthala covering 105 km distance, bus timing via Karkala or Belthangady, taxi routes, and room booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Travel Routes',
    featuredImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    intro: 'Traveling from Udupi Sri Krishna Temple to Lord Manjunatha Temple in Dharmasthala is one of Coastal Karnataka’s most revered pilgrimage circuits. Covering roughly 105 km through picturesque Western Ghat foothills, this travel guide details bus schedules, driving routes via Karkala or Bajagoli, and hassle-free room booking in Dharmasthala.',
    sections: [
      {
        id: 'udupi-distance-routes',
        heading: '1. Distance & Primary Driving Routes',
        body: 'Route breakdown from Udupi:',
        bullets: [
          'Distance: Approx. 102 - 108 km.',
          'Driving Duration: 2.5 to 3 hours by private car.',
          'Route 1 (Via Karkala & Guruvayanakere): Udupi -> Karkala -> Bajagoli -> Belthangady -> Ujjire -> Dharmasthala.',
          'Route 2 (Via Mangalore bypass): Udupi -> Padubidri -> Mulki -> Moodabidri -> Guruvayanakere -> Dharmasthala.'
        ]
      },
      {
        id: 'bus-transportation-udupi',
        heading: '2. Bus Options from Udupi',
        body: 'Both KSRTC buses and private express buses operate frequently from Udupi City Bus Stand and Service Bus Stand directly to Dharmasthala via Karkala.',
        bullets: [
          'KSRTC Express: Departure every 30 to 45 minutes.',
          'Private Express Coaches: Frequent connections via Karkala and Belthangady.',
          'First Bus: Around 5:00 AM; Last Bus: Around 9:30 PM.'
        ]
      },
      {
        id: 'stay-room-booking-udupi-pilgrims',
        heading: '3. Booking Accommodation in Dharmasthala',
        body: 'Book clean AC/Non-AC rooms with double beds or 3/4 bed family suites online via WhatsApp (+91 99034 90617) or our online Google Reservation Form.'
      }
    ],
    faqs: [
      {
        question: 'How far is Dharmasthala from Udupi?',
        answer: 'Dharmasthala is approximately 105 km away from Udupi, taking around 2.5 to 3 hours by road.'
      },
      {
        question: 'Which is the best road route from Udupi to Dharmasthala?',
        answer: 'The route via Karkala, Bajagoli, and Belthangady is the shortest and most smooth road route.'
      }
    ],
    relatedSlugs: ['dharmasthala-to-udupi', 'places-to-visit-near-dharmasthala', 'dharmasthala-family-stay']
  }),

  // PROMPT 103: hassan to dharmasthala
  createBlogArticle({
    slug: 'hassan-to-dharmasthala',
    keyword: 'hassan to dharmasthala',
    title: 'Hassan to Dharmasthala Travel Guide: Distance, Ghat Route & Room Booking',
    metaTitle: 'Hassan to Dharmasthala Guide | Distance, Shiradi Ghat & Stay',
    metaDescription: 'Travel guide from Hassan to Dharmasthala covering 110 km distance, Shiradi Ghat / Charmadi Ghat road updates, bus frequency, and room booking tips.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Travel Routes',
    featuredImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    intro: 'Hassan serves as the key gateway town connecting Bangalore and South Karnataka with Shri Kshetra Dharmasthala. Located just 110 km away across the scenic Western Ghats, traveling from Hassan to Dharmasthala is smooth and convenient. Here is everything you need to know about road conditions, ghat pass options, bus timings, and room reservations (+91 99034 90617).',
    sections: [
      {
        id: 'hassan-distance-ghat-routes',
        heading: '1. Distance & Ghat Route Options',
        body: 'Distance & travel times:',
        bullets: [
          'Distance: Approx. 110 km.',
          'Driving Time: 2.5 to 3 hours.',
          'Shiradi Ghat Route (NH 75): Hassan -> Sakleshpur -> Gundya -> Periyashanti -> Dharmasthala. (Fastest highway route).',
          'Charmadi Ghat Route: Hassan -> Belur -> Mudigere -> Charmadi Ghat -> Ujjire -> Dharmasthala. (Most scenic mountain route).'
        ]
      },
      {
        id: 'hassan-buses-and-trains',
        heading: '2. Bus & Train Options',
        body: 'KSRTC buses leave Hassan KSRTC Central Bus Stand every 15-20 minutes heading towards Mangalore/Dharmasthala. Train passengers can travel from Hassan Junction to Gundya/Subramanya Road.'
      },
      {
        id: 'hassan-stay-booking',
        heading: '3. Securing Accommodation in Dharmasthala',
        body: 'Pre-book your guest house or hotel room before starting your drive from Hassan. Message +91 99034 90617 on WhatsApp for instant confirmation.'
      }
    ],
    faqs: [
      {
        question: 'What is the distance from Hassan to Dharmasthala?',
        answer: 'The distance is roughly 110 km, requiring about 2.5 to 3 hours of driving.'
      },
      {
        question: 'Which ghat road is better from Hassan to Dharmasthala?',
        answer: 'Shiradi Ghat (NH 75 via Sakleshpur) is generally preferred for smooth national highway travel, while Charmadi Ghat offers breathtaking landscape views.'
      }
    ],
    relatedSlugs: ['how-to-reach-dharmasthala', 'dharmasthala-to-bangalore', 'dharmasthala-accommodation-guide']
  }),

  // PROMPT 104: belthangady to dharmasthala
  createBlogArticle({
    slug: 'belthangady-to-dharmasthala',
    keyword: 'belthangady to dharmasthala',
    title: 'Belthangady to Dharmasthala Visitor Guide: Local Travel & Accommodation',
    metaTitle: 'Belthangady to Dharmasthala Travel | Distance, Auto, Bus & Stay',
    metaDescription: 'Complete local guide for Belthangady to Dharmasthala travel (16 km). Transport options, auto fares, local sightseeing, and room booking options.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '8 min read',
    category: 'Travel Routes',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Belthangady is the taluk headquarters under which Shri Kshetra Dharmasthala falls. Located just 16 km apart, traveling between Belthangady and Dharmasthala takes less than 25 minutes. This guide provides local transit details, auto/taxi information, nearby attractions, and accommodation options in Dharmasthala.',
    sections: [
      {
        id: 'belthangady-distance-transit',
        heading: '1. Distance & Local Transport Options',
        body: 'Key transit details:',
        bullets: [
          'Distance: 16 km via State Highway 37 / Ujjire road.',
          'Travel Time: 20 to 25 minutes.',
          'Local Buses: Government and private local shuttles run every 5 to 10 minutes from Belthangady bus stand.',
          'Auto Rickshaw / Taxi: Easily available at Belthangady stand for convenient quick travel.'
        ]
      },
      {
        id: 'belthangady-attractions',
        heading: '2. Nearby Attractions Around Belthangady & Ujjire',
        body: 'Visitors can explore Jamalabad Fort (Gadaikallu), Sri Ananthashayana Temple in Karkala, and Badamayya Waterfalls while traveling through Belthangady Taluk.'
      },
      {
        id: 'belthangady-stay-booking',
        heading: '3. Booking Rooms in Dharmasthala',
        body: 'Planning an extended stay? Pre-book comfortable rooms in Dharmasthala via WhatsApp (+91 99034 90617) or our online reservation form.'
      }
    ],
    faqs: [
      {
        question: 'How far is Dharmasthala from Belthangady?',
        answer: 'Dharmasthala is only 16 km away from Belthangady town center.'
      },
      {
        question: 'Are frequent buses available from Belthangady to Dharmasthala?',
        answer: 'Yes, buses run continuously every few minutes between Belthangady, Ujjire, and Dharmasthala.'
      }
    ],
    relatedSlugs: ['dharmasthala-local-attractions', 'places-to-visit-near-dharmasthala', 'dharmasthala-room-booking']
  }),

  // PROMPT 105: subrahmanya to dharmasthala
  createBlogArticle({
    slug: 'subrahmanya-to-dharmasthala',
    keyword: 'subrahmanya to dharmasthala',
    title: 'Subrahmanya to Dharmasthala Pilgrimage Guide: Route, Distance & Room Booking',
    metaTitle: 'Subrahmanya to Dharmasthala Route | Distance, Bus & Stay',
    metaDescription: 'Pilgrimage travel guide from Kukke Subrahmanya to Dharmasthala covering 52 km distance, bus schedules, taxi options, and room booking details.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Travel Routes',
    featuredImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    intro: 'Visiting Kukke Subrahmanya Temple and Shri Kshetra Dharmasthala together is a highly popular twin-temple pilgrimage circuit in Karnataka. Located just 52 km apart along scenic countryside roads, here is your essential guide covering distance, travel routes, KSRTC bus frequency, and room reservations (+91 99034 90617).',
    sections: [
      {
        id: 'subrahmanya-distance-route',
        heading: '1. Distance & Travel Route',
        body: 'Distance & driving specs:',
        bullets: [
          'Distance: Approx. 50 - 54 km.',
          'Driving Time: 1 hour 15 minutes to 1 hour 30 minutes.',
          'Route: Kukke Subrahmanya -> Kadaba -> Periyashanti (NH 75 crossing) -> Kokkada -> Dharmasthala.'
        ]
      },
      {
        id: 'subrahmanya-bus-options',
        heading: '2. Bus & Taxi Services',
        body: 'Direct KSRTC buses operate frequently between Kukke Subrahmanya bus stand and Dharmasthala bus stand every 30 minutes. Private cabs are also widely available at Kukke temple courtyard.'
      },
      {
        id: 'subrahmanya-room-booking',
        heading: '3. Booking Rooms in Dharmasthala',
        body: 'After Sarpa Samskara or Ashlesha Bali rituals in Kukke, relax in air-conditioned comfort in Dharmasthala. Reserve your stay in advance via WhatsApp (+91 99034 90617).'
      }
    ],
    faqs: [
      {
        question: 'What is the distance between Kukke Subrahmanya and Dharmasthala?',
        answer: 'The distance is about 52 km, taking around 1.5 hours by road.'
      },
      {
        question: 'Are direct buses available from Kukke Subrahmanya to Dharmasthala?',
        answer: 'Yes, KSRTC operates regular direct buses throughout the day.'
      }
    ],
    relatedSlugs: ['dharmasthala-pilgrimage-package', 'places-to-visit-near-dharmasthala', 'dharmasthala-room-booking']
  }),

  // PROMPT 106: dharmasthala to mangalore
  createBlogArticle({
    slug: 'dharmasthala-to-mangalore',
    keyword: 'dharmasthala to mangalore',
    title: 'Dharmasthala to Mangalore Travel Guide: Distance, Routes, Buses & Cabs',
    metaTitle: 'Dharmasthala to Mangalore Guide | Distance, Bus Timings & Taxi',
    metaDescription: 'Detailed guide for traveling from Dharmasthala to Mangalore (75 km). Distance, KSRTC bus frequency, road route via Bantwal, airport transfers, and stay.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Travel Routes',
    featuredImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    intro: 'Mangalore (Mangaluru) is the major coastal hub, railway terminus, and airport entry point for pilgrims coming to Dharmasthala. Situated 75 km away, traveling from Dharmasthala to Mangalore is simple and swift. This article covers routes, bus options, Mangalore Airport connections, and room booking in Dharmasthala (+91 99034 90617).',
    sections: [
      {
        id: 'mangalore-distance-route',
        heading: '1. Distance & Highway Route',
        body: 'Key transit figures:',
        bullets: [
          'Distance: Approx. 75 km.',
          'Travel Duration: 1.5 to 2 hours by car or taxi.',
          'Route: Dharmasthala -> Guruvayanakere -> Belthangady -> Bantwal (BC Road) -> Mangalore City (NH 73 / NH 66).'
        ]
      },
      {
        id: 'mangalore-bus-and-train',
        heading: '2. Bus & Airport Connection Details',
        body: 'KSRTC Non-AC Express and Volvo buses run every 15 minutes between Dharmasthala Bus Stand and Mangalore KSRTC Bejai Bus Stand. For Mangalore International Airport (IXE), taxi fare is around ₹2,000 - ₹2,500.'
      },
      {
        id: 'mangalore-stay-reservation',
        heading: '3. Room Booking Before Heading to Mangalore',
        body: 'Planning to stay in Dharmasthala overnight before taking a flight or train from Mangalore? Pre-book double or family rooms via WhatsApp (+91 99034 90617).'
      }
    ],
    faqs: [
      {
        question: 'How far is Mangalore from Dharmasthala?',
        answer: 'The distance is 75 km, taking about 1.5 to 2 hours by road.'
      },
      {
        question: 'Which is the nearest railway station to Dharmasthala?',
        answer: 'Mangalore Central (MAQ) and Mangalore Junction (MAJN) are major railway stations, while Bantwal and Subramanya Road are closer regional stations.'
      }
    ],
    relatedSlugs: ['how-to-reach-dharmasthala', 'udupi-to-dharmasthala', 'dharmasthala-room-booking']
  }),

  // PROMPT 107: dharmasthala to bangalore
  createBlogArticle({
    slug: 'dharmasthala-to-bangalore',
    keyword: 'dharmasthala to bangalore',
    title: 'Dharmasthala to Bangalore Travel Guide: Distance, Bus, Train & Ghat Routes',
    metaTitle: 'Dharmasthala to Bangalore Travel Guide | Distance, Bus & Routes',
    metaDescription: 'Complete travel guide from Dharmasthala to Bangalore (300 km). Shiradi Ghat & Charmadi Ghat routes, KSRTC sleeper buses, train options, and room booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '12 min read',
    category: 'Travel Routes',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Bangalore (Bengaluru) is the primary origin point for hundreds of thousands of pilgrims visiting Shri Kshetra Dharmasthala annually. Located roughly 300 km apart across the Western Ghats, this guide covers Shiradi Ghat highway conditions, KSRTC night sleeper buses, train connections, and advance room reservations via WhatsApp (+91 99034 90617).',
    sections: [
      {
        id: 'bangalore-distance-routes',
        heading: '1. Distance & Highway Routes',
        body: 'Route breakdown:',
        bullets: [
          'Distance: Approx. 300 - 310 km.',
          'Driving Time: 6 to 7 hours.',
          'Shiradi Ghat Route (NH 75): Bangalore -> Nelamangala -> Kunigal -> Channarayapatna -> Hassan -> Sakleshpur -> Gundya -> Dharmasthala.',
          'Charmadi Ghat Route: Bangalore -> Hassan -> Belur -> Mudigere -> Charmadi Ghat -> Ujjire -> Dharmasthala.'
        ]
      },
      {
        id: 'bangalore-bus-train-transport',
        heading: '2. KSRTC Buses & Train Details',
        body: 'Over 50 daily KSRTC buses (Airavat Club Class, Non-AC Sleeper, Rajahamsa, Express) run between Bangalore (Majestic / Satellite Bus Stand) and Dharmasthala. Night trains run from KSR Bengaluru (SBC) to Subramanya Road (SBHR).'
      },
      {
        id: 'bangalore-stay-reservation',
        heading: '3. Booking Accommodation Before Departing Bangalore',
        body: 'Secure your room before embarking on your 6-hour journey from Bangalore. Contact our reservation desk via WhatsApp (+91 99034 90617).'
      }
    ],
    faqs: [
      {
        question: 'What is the distance from Dharmasthala to Bangalore?',
        answer: 'The distance is approximately 300 km via NH 75.'
      },
      {
        question: 'Are overnight sleeper buses available from Bangalore to Dharmasthala?',
        answer: 'Yes, KSRTC and private operators run numerous AC and Non-AC sleeper buses every evening.'
      }
    ],
    relatedSlugs: ['hassan-to-dharmasthala', 'how-to-reach-dharmasthala', 'dharmasthala-room-booking']
  }),

  // PROMPT 108: dharmasthala to mysore
  createBlogArticle({
    slug: 'dharmasthala-to-mysore',
    keyword: 'dharmasthala to mysore',
    title: 'Dharmasthala to Mysore Travel Guide: Distance, Bus Timings & Room Booking',
    metaTitle: 'Dharmasthala to Mysore Guide | Distance, Bus Routes & Stay',
    metaDescription: 'Complete travel guide from Dharmasthala to Mysore (240 km). Distance, KSRTC bus options, Madikeri/Hassan routes, local tips, and room booking details.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Travel Routes',
    featuredImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    intro: 'Heading from Dharmasthala to the cultural city of Mysore? Covering a distance of 240 km across scenic Western Ghat roads, this guide outlines route choices via Madikeri or Hassan, bus services, driving tips, and accommodation options in Dharmasthala (+91 99034 90617).',
    sections: [
      {
        id: 'dharmasthala-mysore-distance',
        heading: '1. Distance & Driving Duration',
        body: 'Travel metrics:',
        bullets: [
          'Distance: Approx. 240 km.',
          'Driving Time: 5.5 to 6 hours.',
          'Popular Route via Coorg: Dharmasthala -> Kukke Subrahmanya -> Sulia -> Madikeri -> Kushalnagar -> Hunsur -> Mysore.',
          'Highway Route via Hassan: Dharmasthala -> Shiradi Ghat -> Sakleshpur -> Hassan -> Holenarasipura -> Mysore.'
        ]
      },
      {
        id: 'dharmasthala-mysore-buses',
        heading: '2. KSRTC Bus Options',
        body: 'Regular KSRTC Rajahamsa and Express buses leave Dharmasthala Bus Stand directly for Mysore Suburb Bus Stand at regular intervals throughout the day.'
      },
      {
        id: 'dharmasthala-mysore-room-booking',
        heading: '3. Pre-booking Rooms in Dharmasthala',
        body: 'Message +91 99034 90617 on WhatsApp to book AC/Non-AC family rooms in Dharmasthala prior to starting your trip.'
      }
    ],
    faqs: [
      {
        question: 'How far is Mysore from Dharmasthala?',
        answer: 'It is approximately 240 km away, taking around 5.5 to 6 hours by road.'
      },
      {
        question: 'Which route from Dharmasthala to Mysore is best for sightseeing?',
        answer: 'The route via Madikeri (Coorg) offers breathtaking hill country scenery and tea plantation viewpoints.'
      }
    ],
    relatedSlugs: ['mysore-to-dharmasthala', 'how-to-reach-dharmasthala', 'dharmasthala-family-stay']
  }),

  // PROMPT 109: dharmasthala to udupi
  createBlogArticle({
    slug: 'dharmasthala-to-udupi',
    keyword: 'dharmasthala to udupi',
    title: 'Dharmasthala to Udupi Travel Guide: Distance, Bus Routes & Temple Circuit',
    metaTitle: 'Dharmasthala to Udupi Route Guide | Distance, Bus & Stay',
    metaDescription: 'Detailed travel guide from Dharmasthala to Udupi (105 km). Bus timings, driving via Karkala, Krishna Temple connection, and room booking options.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Travel Routes',
    featuredImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    intro: 'After seeking blessings from Lord Manjunatha in Dharmasthala, many devotees travel north to visit Udupi Sri Krishna Temple and Malpe Beach. Covering 105 km, this guide provides road routes via Karkala, bus schedules, sightseeing advice, and room booking in Dharmasthala (+91 99034 90617).',
    sections: [
      {
        id: 'dharmasthala-udupi-distance',
        heading: '1. Distance & Road Route Breakdown',
        body: 'Route specs:',
        bullets: [
          'Distance: Approx. 105 km.',
          'Driving Duration: 2.5 hours.',
          'Route: Dharmasthala -> Ujjire -> Belthangady -> Guruvayanakere -> Bajagoli -> Karkala -> Udupi.'
        ]
      },
      {
        id: 'dharmasthala-udupi-bus-options',
        heading: '2. Bus Options & Transit',
        body: 'KSRTC Express and coastal private buses run frequently from Dharmasthala Bus Stand to Udupi Bus Stand via Karkala.'
      },
      {
        id: 'dharmasthala-udupi-room-booking',
        heading: '3. Booking Rooms in Dharmasthala',
        body: 'Reserve clean AC or Non-AC double/family rooms in Dharmasthala via WhatsApp (+91 99034 90617) or our online reservation form.'
      }
    ],
    faqs: [
      {
        question: 'How far is Udupi from Dharmasthala?',
        answer: 'Udupi is approximately 105 km from Dharmasthala, taking around 2.5 hours by road.'
      },
      {
        question: 'Are direct buses available between Dharmasthala and Udupi?',
        answer: 'Yes, both KSRTC and private buses operate direct services throughout the day.'
      }
    ],
    relatedSlugs: ['udupi-to-dharmasthala', 'places-to-visit-near-dharmasthala', 'dharmasthala-room-booking']
  }),

  // PROMPT 110: dharmasthala history
  createBlogArticle({
    slug: 'dharmasthala-history',
    keyword: 'dharmasthala history',
    title: 'Dharmasthala History: 800-Year Heritage, Origin Legends & Religious Harmony',
    metaTitle: 'Dharmasthala History | 800-Year Divine Heritage & Origins',
    metaDescription: 'Explore the 800-year history of Dharmasthala. Learn about the Heggade lineage, Lord Manjunatha Swamy installation, Annadana tradition, and visitor stay booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '15 min read',
    category: 'History & Culture',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Shri Kshetra Dharmasthala boasts an extraordinary 800-year heritage of faith, charity, and religious harmony in Coastal Karnataka. Known as the abode of righteousness (Dharma), the history of Dharmasthala is deeply tied to the Jain chieftain Birmanna Perlade, the installation of Shiva Linga from Kadri, and the noble Heggade family lineage. This guide details history, traditions, and room booking via WhatsApp (+91 99034 90617).',
    sections: [
      {
        id: 'origin-legend',
        heading: '1. The Origin Legend: Kuduma to Dharmasthala',
        body: 'Origin storyline:',
        bullets: [
          '800 Years Ago: Birmanna Perlade and Ammu Ballalthi lived in the village then known as Kuduma.',
          'Divine Angels (Daivas): Four Guardian Angels (Kalarahu, Kalarkai, Kumaraswamy, Kanyakumari) appeared in human form testing hospitality.',
          'Installation of Deities: On divine instructions, shrine structures were built for the Daivas, and Annappa Swamy brought the holy Shiva Linga from Kadri near Mangalore.',
          'Renaming to Dharmasthala: Renowned saint Shri Vadiraja Swami of Udupi named the village "Dharmasthala" (Abode of Charity and Virtue).'
        ]
      },
      {
        id: 'heggade-lineage-and-pillars',
        heading: '2. The Four Pillars of Dharmasthala (Chaturdana)',
        body: 'Dharmasthala is globally celebrated for four noble virtues:',
        bullets: [
          'Annadana: Free wholesome satvik meals served daily to thousands at Annapoorna dining hall.',
          'Abhayadana: Justice and dispute resolution offered freely by the Dharmadhikari without court litigations.',
          'Aushadhadana: Free medical treatment, hospitals, and healthcare initiatives.',
          'Vidyadana: Quality education provided through numerous schools and colleges.'
        ]
      },
      {
        id: 'history-room-booking',
        heading: '3. Experience the Heritage & Book Rooms Nearby',
        body: 'Experience the 800-year sacred legacy firsthand. Reserve AC or Non-AC rooms in Dharmasthala via WhatsApp (+91 99034 90617) or our online reservation form.'
      }
    ],
    faqs: [
      {
        question: 'How old is the history of Dharmasthala?',
        answer: 'Dharmasthala has a documented spiritual heritage spanning over 800 years.'
      },
      {
        question: 'Who renamed Kuduma to Dharmasthala?',
        answer: 'Shri Vadiraja Swami of Udupi officially renamed the place "Dharmasthala" due to its unparalleled charity.'
      }
    ],
    relatedSlugs: ['shri-kshetra-dharmasthala-history', 'dharmasthala-temple-history', 'dharmasthala-manjunatha-history']
  })
];
