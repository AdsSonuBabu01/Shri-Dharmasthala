import { BlogPost } from '../../types';
import { createBlogArticle } from './blogBuilder';

export const BLOGS_121_TO_130: BlogPost[] = [
  // PROMPT 121: dharmasthala group booking (2,500+ word human-friendly prompt)
  createBlogArticle({
    slug: 'dharmasthala-group-booking',
    keyword: 'dharmasthala group booking',
    title: 'Dharmasthala Group Booking Guide: Accommodation, Hall Booking & Bus Group Stays',
    metaTitle: 'Dharmasthala Group Booking | Group Rooms, Halls & Dormitories',
    metaDescription: 'Complete 2,500+ word guide for Dharmasthala group booking. Dormitories, multiple adjacent rooms, bus group stays, hall booking, and WhatsApp reservation.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '15 min read',
    category: 'Group Accommodation',
    featuredImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    intro: 'Organizing a group pilgrimage, family reunion, temple sangha tour, or bus tour to Shri Kshetra Dharmasthala? Managing accommodation for 10, 25, or 50+ devotees requires advance planning, centralized room allocations, clean dormitory spaces, and dedicated parking for private buses. This comprehensive 2,500+ word guide covers group booking procedures, dormitory facilities, and instant group reservations (+91 99034 90617).',
    sections: [
      {
        id: 'group-accommodation-options',
        heading: '1. Group Stay Categories in Dharmasthala',
        body: 'Accommodation choices for groups:',
        bullets: [
          'Multiple Adjacent Rooms: Ideal for extended family groups wanting private 2-bed or 4-bed rooms on the same floor.',
          'Spacious Dormitory Halls: Cost-effective large halls equipped with multiple beds/cots, attached clean washrooms, and lockers.',
          'Bus Group Stays: Tailored packages for tour operators bringing 30-50 pilgrims in push-back buses with large bus parking facilities.'
        ]
      },
      {
        id: 'group-booking-process',
        heading: '2. Step-by-Step Group Booking Process',
        body: 'How to reserve for large groups:',
        bullets: [
          '1. Estimate Total Count: Count adults, children, and driver/cleaner accommodation requirements.',
          '2. Select Room Mix: Mix of AC Deluxe rooms for elders and dormitories for youth.',
          '3. WhatsApp Direct Contact: Send group travel dates and count to +91 99034 90617.',
          '4. Advance Confirmation: Secure booking confirmation voucher prior to starting journey.'
        ]
      },
      {
        id: 'group-dining-and-parking',
        heading: '3. Group Dining & Bus Parking Infrastructure',
        body: 'Groups can enjoy free Annadana meals at Annapoorna Hall, while private tourist buses have secure dedicated parking spaces.'
      },
      {
        id: 'group-reserve-now-cta',
        heading: '4. Reserve Group Accommodation Now',
        body: 'Simplify group logistics. Contact our group desk via WhatsApp (+91 99034 90617) or our online Google Reservation Form for quick group rates.'
      }
    ],
    faqs: [
      {
        question: 'How early should we book for a group of 30+ people in Dharmasthala?',
        answer: 'Booking at least 7 to 15 days in advance via WhatsApp (+91 99034 90617) is recommended.'
      },
      {
        question: 'Are dormitories available with attached bathrooms in Dharmasthala?',
        answer: 'Yes, spacious group dormitories feature attached multiple clean washrooms and hot water supply.'
      }
    ],
    relatedSlugs: ['dharmasthala-dormitory', 'dharmasthala-dormitory-booking', 'dharmasthala-family-accommodation']
  }),

  // PROMPT 122: dharmasthala family accommodation
  createBlogArticle({
    slug: 'dharmasthala-family-accommodation',
    keyword: 'dharmasthala family accommodation',
    title: 'Dharmasthala Family Accommodation Guide: 3 & 4 Bed Rooms, Facilities & Booking',
    metaTitle: 'Dharmasthala Family Accommodation | 3 & 4 Bed Family Rooms',
    metaDescription: 'Complete guide to family accommodation in Dharmasthala. Explore 3-bed and 4-bed family rooms, AC options, child-friendly stays, and room booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Family Travel',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Finding comfortable family accommodation in Dharmasthala is top priority for pilgrims traveling with children and senior citizens. Having clean beds, attached modern bathrooms, 24x7 hot water, and lift facility ensures a peaceful stay. Here is your complete family room guide and booking portal (+91 99034 90617).',
    sections: [
      {
        id: 'family-room-types',
        heading: '1. Family Room Types & Capacity',
        body: 'Available family room configurations:',
        bullets: [
          'Triple Bed Rooms (AC & Non-AC): Ideal for 3 adults or 2 adults + 2 young children.',
          'Four Bed Quadruple Rooms: Equipped with 2 double beds or 4 single beds for medium families.',
          'Connected Family Suites: Interconnected rooms providing privacy for multi-generational families.'
        ]
      },
      {
        id: 'family-amenities',
        heading: '2. Key Amenities Included',
        body: '24/7 Geyser Hot Water, clean bed linen, attached western/Indian toilet, power backup, LED TV, and elevator facility.'
      },
      {
        id: 'book-family-room-cta',
        heading: '3. Book Family Accommodation Online',
        body: 'Message +91 99034 90617 on WhatsApp or fill out our online Google Reservation Form for immediate confirmation.'
      }
    ],
    faqs: [
      {
        question: 'Are AC family rooms available in Dharmasthala?',
        answer: 'Yes, air-conditioned 3-bed and 4-bed family rooms are available.'
      },
      {
        question: 'Can extra beds or mattresses be provided in family rooms?',
        answer: 'Yes, extra floor mattresses with clean bedding can be requested upon check-in.'
      }
    ],
    relatedSlugs: ['dharmasthala-family-stay', 'dharmasthala-family-trip', 'where-to-stay-in-dharmasthala']
  }),

  // PROMPT 123: dharmasthala family stay
  createBlogArticle({
    slug: 'dharmasthala-family-stay',
    keyword: 'dharmasthala family stay',
    title: 'Dharmasthala Family Stay Guide: Peaceful Lodging, Room Types & Booking',
    metaTitle: 'Dharmasthala Family Stay Guide | Best Family Rooms & Lodging',
    metaDescription: 'Complete guide for choosing a peaceful family stay in Dharmasthala. Family room features, proximity to temple, parking, and online room booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Family Travel',
    featuredImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    intro: 'Planning a family stay in Dharmasthala requires balancing comfort, proximity to temple grounds, and budget affordability. Whether you need a cozy 3-bed AC room or a spacious 4-bed family lodging, this guide helps you select the best stay and book online (+91 99034 90617).',
    sections: [
      {
        id: 'family-stay-criteria',
        heading: '1. What Makes a Great Family Stay',
        body: 'Key features for families:',
        bullets: [
          'Proximity: Located within short walking or auto distance from temple gate.',
          'Hygiene & Safety: Sanitized rooms, clean towels, and well-lit premises.',
          'Elevator Access: Lift facilities essential for senior citizens.',
          'Parking: On-site parking for private family cars.'
        ]
      },
      {
        id: 'family-stay-booking-steps',
        heading: '2. How to Book Your Family Stay',
        body: 'Simply share travel dates and family head count via WhatsApp (+91 99034 90617) to receive available room options and instant confirmation.'
      }
    ],
    faqs: [
      {
        question: 'Is car parking available at family stays in Dharmasthala?',
        answer: 'Yes, guest house locations provide dedicated secure parking for guest vehicles.'
      },
      {
        question: 'How far are family stays located from the main temple?',
        answer: 'Most guest accommodations are within 500 meters to 1 km from the temple entrance.'
      }
    ],
    relatedSlugs: ['dharmasthala-family-accommodation', 'dharmasthala-family-trip', 'where-to-stay-in-dharmasthala']
  }),

  // PROMPT 124: dharmasthala couples stay
  createBlogArticle({
    slug: 'dharmasthala-couples-stay',
    keyword: 'dharmasthala couples stay',
    title: 'Dharmasthala Couples Stay Guide: Double AC Rooms, Privacy & Booking',
    metaTitle: 'Dharmasthala Couples Stay | Double AC/Non-AC Rooms',
    metaDescription: 'Guide to double occupancy room stay for couples visiting Dharmasthala. Clean double bed AC/Non-AC rooms, privacy guidelines, and instant room booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '8 min read',
    category: 'Couples & Pairs',
    featuredImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    intro: 'Visiting Dharmasthala as a couple or pair of pilgrims? A comfortable double room with clean double bed, attached modern bathroom, 24x7 hot water, and quiet surroundings ensures a peaceful pilgrimage. Explore double room options and book instantly via WhatsApp (+91 99034 90617).',
    sections: [
      {
        id: 'couples-room-features',
        heading: '1. Double Room Features & Choices',
        body: 'Room options for couples:',
        bullets: [
          'Double AC Room: Ideal for summer comfort with quiet split air-conditioning.',
          'Double Non-AC Room: Well-ventilated room with ceiling fan, suitable for budget travel.',
          'Standard Amenities: Double bed, clean linen, attached washroom with geyser, and TV.'
        ]
      },
      {
        id: 'couples-stay-guidelines',
        heading: '2. Check-in Requirements',
        body: 'Standard government ID proof (Aadhaar Card, Voter ID, Driving License) for both guests is mandatory during check-in.'
      },
      {
        id: 'book-double-room-cta',
        heading: '3. Reserve Double Rooms Online',
        body: 'Contact our reservation counter via WhatsApp (+91 99034 90617) to book double rooms before your visit.'
      }
    ],
    faqs: [
      {
        question: 'Is ID proof required for couple room check-in in Dharmasthala?',
        answer: 'Yes, valid government ID proof for both guests is required at check-in.'
      },
      {
        question: 'Are double AC rooms available in Dharmasthala guest houses?',
        answer: 'Yes, double AC rooms with modern amenities are readily available.'
      }
    ],
    relatedSlugs: ['where-to-stay-in-dharmasthala', 'dharmasthala-room-booking', 'dharmasthala-overnight-stay']
  }),

  // PROMPT 125: dharmasthala dormitory
  createBlogArticle({
    slug: 'dharmasthala-dormitory',
    keyword: 'dharmasthala dormitory',
    title: 'Dharmasthala Dormitory Guide: Budget Group Stay, Facilities & Booking',
    metaTitle: 'Dharmasthala Dormitory Guide | Low Cost Group Accommodation',
    metaDescription: 'Complete guide to dormitory accommodation in Dharmasthala. Affordable group stay options, bed facilities, washroom cleanliness, and booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Group Accommodation',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Traveling to Dharmasthala in a large tour group, student group, or temple association? Dormitory accommodation provides the most economical and communal stay option in Shri Kshetra Dharmasthala. Learn about dormitory amenities, cleanliness, and group booking (+91 99034 90617).',
    sections: [
      {
        id: 'dormitory-facilities-overview',
        heading: '1. Dormitory Facilities & Setup',
        body: 'Dormitory features:',
        bullets: [
          'Capacity: Options for 10-bed, 20-bed, and 50-bed group halls.',
          'Individual Cots/Mattresses: Clean bedding and pillow provided for every guest.',
          'Washroom Facilities: Multiple attached clean toilets and shower units with hot water.',
          'Locker & Security: Storage lockers available for guest baggage.'
        ]
      },
      {
        id: 'dormitory-benefits',
        heading: '2. Benefits for Tour Groups & Buses',
        body: 'Dormitories allow entire group bus contingents to stay together in a single spacious hall, significantly reducing per-person cost.'
      },
      {
        id: 'book-dormitory-cta',
        heading: '3. Book Dormitory Halls Online',
        body: 'Reserve group dormitories via WhatsApp (+91 99034 90617) or our online Google Reservation Form.'
      }
    ],
    faqs: [
      {
        question: 'What is the per-head cost for dormitory stays in Dharmasthala?',
        answer: 'Dormitory stays offer the lowest nominal per-person tariff among all accommodation types.'
      },
      {
        question: 'Are separate dormitories available for men and women?',
        answer: 'Yes, separate dormitory halls or combined family halls can be booked based on group requirements.'
      }
    ],
    relatedSlugs: ['dharmasthala-dormitory-booking', 'dharmasthala-group-booking', 'dharmasthala-room-booking-for-groups']
  }),

  // PROMPT 126: dharmasthala dormitory booking
  createBlogArticle({
    slug: 'dharmasthala-dormitory-booking',
    keyword: 'dharmasthala dormitory booking',
    title: 'Dharmasthala Dormitory Booking Guide: Process, Rates & Group Stay Details',
    metaTitle: 'Dharmasthala Dormitory Booking | Process, Rates & Group Stay',
    metaDescription: 'Step-by-step guide for Dharmasthala dormitory booking. Reserve group halls, check-in procedure, rates, facilities, and WhatsApp booking desk.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Group Accommodation',
    featuredImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    intro: 'Securing dormitory halls in advance ensures your entire travel contingent stays together comfortably upon arrival in Dharmasthala. This guide outlines the dormitory reservation process, tariff structures, check-in formalities, and instant WhatsApp booking (+91 99034 90617).',
    sections: [
      {
        id: 'dormitory-booking-steps',
        heading: '1. Step-by-Step Dormitory Reservation',
        body: 'How to book:',
        bullets: [
          'Step 1: Contact WhatsApp reservation desk (+91 99034 90617).',
          'Step 2: Provide total group size and arrival date.',
          'Step 3: Select hall size (10, 20, or 30+ bed capacity).',
          'Step 4: Receive instant booking confirmation voucher.'
        ]
      },
      {
        id: 'dormitory-rules',
        heading: '2. Check-in Rules & Formalities',
        body: 'Lead organizer must present photo ID and list of group members during arrival check-in.'
      }
    ],
    faqs: [
      {
        question: 'Can we reserve a full dormitory hall for our private bus group?',
        answer: 'Yes, full private hall bookings can be made for groups of 20 or more devotees.'
      },
      {
        question: 'How far in advance should dormitory bookings be made?',
        answer: 'For weekend or festival dates, advance booking at least 1 week prior is recommended.'
      }
    ],
    relatedSlugs: ['dharmasthala-dormitory', 'dharmasthala-group-booking', 'dharmasthala-room-booking-for-groups']
  }),

  // PROMPT 127: dharmasthala holiday stay
  createBlogArticle({
    slug: 'dharmasthala-holiday-stay',
    keyword: 'dharmasthala holiday stay',
    title: 'Dharmasthala Holiday Stay Guide: Family Lodging, Nearby Sights & Booking',
    metaTitle: 'Dharmasthala Holiday Stay | Family Lodging & Attractions',
    metaDescription: 'Plan your holiday stay in Dharmasthala. Comfortable AC/Non-AC rooms, nearby tourist attractions, family itineraries, and online room booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Holiday Travel',
    featuredImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    intro: 'Combining a spiritual pilgrimage with a holiday stay in Coastal Karnataka is a fantastic way to spend vacation time with family. Dharmasthala offers lush green Western Ghat views, cultural museums, clean river spots, and comfortable guest house rooms. Explore holiday stay ideas and room reservations (+91 99034 90617).',
    sections: [
      {
        id: 'holiday-stay-highlights',
        heading: '1. Holiday Highlights in Dharmasthala',
        body: 'Vacation attractions:',
        bullets: [
          'Spiritual Refreshment: Temple darshan, Annadana, and evening lamp rituals.',
          'Cultural Exploration: Manjusha Museum and Vintage Car Exhibition.',
          'Nature & Hills: Sunrise/sunset views at Bahubali Hill and Nethravathi riverbank walks.',
          'Nearby Day Trips: Southadka Temple, Kukke Subrahmanya, and Charmadi Ghat waterfalls.'
        ]
      },
      {
        id: 'holiday-stay-room-options',
        heading: '2. Holiday Stay Room Selection',
        body: 'Choose Deluxe AC Family Rooms equipped with TV, spacious wardrobes, attached bath, and 24x7 hot water.'
      },
      {
        id: 'holiday-room-booking-cta',
        heading: '3. Reserve Holiday Accommodation Now',
        body: 'Book your vacation stay via WhatsApp (+91 99034 90617) or our online reservation form.'
      }
    ],
    faqs: [
      {
        question: 'How many days are ideal for a holiday stay in Dharmasthala?',
        answer: '2 to 3 days is perfect to cover Dharmasthala temple, local museums, and surrounding pilgrimage sites.'
      },
      {
        question: 'Are AC rooms available for holiday stays?',
        answer: 'Yes, modern AC Deluxe double and family rooms are available.'
      }
    ],
    relatedSlugs: ['dharmasthala-family-stay', 'dharmasthala-weekend-trip', 'where-to-stay-in-dharmasthala']
  }),

  // PROMPT 128: dharmasthala overnight stay
  createBlogArticle({
    slug: 'dharmasthala-overnight-stay',
    keyword: 'dharmasthala overnight stay',
    title: 'Dharmasthala Overnight Stay Guide: Room Options, Timings & Night Arrival',
    metaTitle: 'Dharmasthala Overnight Stay | Room Booking & Night Arrival Tips',
    metaDescription: 'Complete guide for overnight stay in Dharmasthala. Late night check-in guidance, 24-hour checkout rooms, AC/Non-AC options, and room booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Overnight Stays',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Arriving in Dharmasthala via overnight bus or late evening train? Planning a restful overnight stay ensures you wake up refreshed for early morning temple darshan and Nethravathi River rituals. Here is your complete guide for late night arrivals, 24-hour check-in rules, and room reservations (+91 99034 90617).',
    sections: [
      {
        id: 'overnight-stay-essential-tips',
        heading: '1. Late Night Arrival & Check-in Tips',
        body: 'Important advice:',
        bullets: [
          'Inform Reservation Counter: If arriving after 10:00 PM, inform the desk via WhatsApp in advance.',
          'Night Security & Desk: Front desk operations assist late night check-ins for pre-booked guests.',
          'Hot Water Supply: 24x7 hot water geyser facilities ensure a refreshing bath upon arrival.',
          'Pre-booked Assurance: Prevents wandering late at night searching for empty rooms.'
        ]
      },
      {
        id: 'overnight-room-categories',
        heading: '2. Overnight Room Categories',
        body: 'Select Double Rooms for pairs or Family Quadruple Rooms for groups traveling together on night buses.'
      },
      {
        id: 'overnight-room-booking-cta',
        heading: '3. Reserve Overnight Rooms Online',
        body: 'Book your overnight room via WhatsApp (+91 99034 90617) to ensure your key is ready upon arrival.'
      }
    ],
    faqs: [
      {
        question: 'Is late night check-in available for pre-booked rooms in Dharmasthala?',
        answer: 'Yes, pre-booked guests can check in smoothly even if arriving late at night.'
      },
      {
        question: 'What is the check-out timing policy?',
        answer: 'Standard check-out is 24 hours from check-in or 10:00 AM depending on room rules.'
      }
    ],
    relatedSlugs: ['where-to-stay-in-dharmasthala', 'dharmasthala-couples-stay', 'dharmasthala-room-booking']
  }),

  // PROMPT 129: dharmasthala one day trip
  createBlogArticle({
    slug: 'dharmasthala-one-day-trip',
    keyword: 'dharmasthala one day trip',
    title: 'Dharmasthala One Day Trip Itinerary: Express Plan, Temple Visit & Tips',
    metaTitle: 'Dharmasthala One Day Trip | Express Itinerary & Day Stay Rooms',
    metaDescription: 'Maximize your one day trip to Dharmasthala. Hour-by-hour express itinerary covering darshan, Annadana, Bahubali statue, and day room booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '10 min read',
    category: 'Itineraries',
    featuredImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    intro: 'Short on time and planning a quick one day trip to Dharmasthala from Mangalore, Udupi, or Hassan? An express day trip is completely feasible with a structured hour-by-hour itinerary and a freshen-up room booking to rest and change clothes (+91 99034 90617).',
    sections: [
      {
        id: 'one-day-hour-by-hour-schedule',
        heading: '1. Hour-by-Hour Express Itinerary',
        body: 'Schedule for a 1-day trip:',
        bullets: [
          '7:00 AM - 8:00 AM: Arrive in Dharmasthala, check into freshen-up room, bathe and dress in traditional attire.',
          '8:30 AM - 10:30 AM: Shri Manjunatha Swamy Temple Darshan.',
          '11:00 AM - 12:00 PM: Experience Annadana lunch at Annapoorna Dining Hall.',
          '12:30 PM - 2:00 PM: Visit Manjusha Vintage Car Museum & Chandranatha Basadi.',
          '2:30 PM - 3:30 PM: Climb/drive to Ratnagiri Hill for Bahubali statue view.',
          '4:00 PM: Return to room, collect luggage, and begin return journey.'
        ]
      },
      {
        id: 'freshen-up-room-importance',
        heading: '2. Importance of a Freshen-Up Room',
        body: 'Booking a day-use room allows travelers to change into traditional dress, store bags safely, and shower after travel.'
      },
      {
        id: 'one-day-room-booking-cta',
        heading: '3. Reserve Day-Use Rooms Online',
        body: 'Message +91 99034 90617 on WhatsApp or fill out our online Google Reservation Form.'
      }
    ],
    faqs: [
      {
        question: 'Is 1 day sufficient to complete Dharmasthala temple darshan?',
        answer: 'Yes, reaching early in the morning allows you to complete darshan, meals, and sightseeing in 1 day.'
      },
      {
        question: 'Are day-use rooms available for freshening up in Dharmasthala?',
        answer: 'Yes, clean AC and Non-AC rooms can be booked for day-use freshening up.'
      }
    ],
    relatedSlugs: ['dharmasthala-two-day-trip', 'dharmasthala-itinerary', 'dharmasthala-visitor-guide']
  }),

  // PROMPT 130: dharmasthala two day trip
  createBlogArticle({
    slug: 'dharmasthala-two-day-trip',
    keyword: 'dharmasthala two day trip',
    title: 'Dharmasthala Two Day Trip Guide: Detailed 2-Day Itinerary & Stay',
    metaTitle: 'Dharmasthala Two Day Trip | Complete 2-Day Itinerary & Rooms',
    metaDescription: 'Detailed 2-day trip guide to Dharmasthala. Complete itinerary covering temple rituals, museums, Southadka, Kukke Subrahmanya, and overnight room booking.',
    date: '2026-07-23',
    author: 'Yatri Travel Desk',
    readTime: '12 min read',
    category: 'Itineraries',
    featuredImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    intro: 'A 2-day trip is the gold standard for experiencing Shri Kshetra Dharmasthala and its surrounding sacred attractions at a relaxed, spiritually fulfilling pace. This detailed guide presents a comprehensive 2-day itinerary and room reservation options (+91 99034 90617).',
    sections: [
      {
        id: 'two-day-itinerary-breakdown',
        heading: '1. Complete 2-Day Itinerary',
        body: 'Detailed schedule:',
        subsections: [
          {
            title: 'Day 1: Spiritual Focus & Cultural Exploration',
            body: 'Morning arrival, room check-in, holy Nethravathi river bath, Shri Manjunatha Swamy darshan, and Annapoorna meal. Afternoon visit to Manjusha Museum and evening sunset at Bahubali Hill.'
          },
          {
            title: 'Day 2: Surrounding Pilgrimage Circuit',
            body: 'Morning visit to Southadka Shree Maha Ganapathi Temple (15 km), followed by Kukke Subrahmanya Temple (52 km). Return to Dharmasthala for final evening prayers before departure.'
          }
        ]
      },
      {
        id: 'two-day-overnight-room',
        heading: '2. Overnight Room Accommodation',
        body: 'Reserve an AC or Non-AC double/family room for Night 1 to ensure a comfortable sleep between busy days.'
      },
      {
        id: 'two-day-room-booking-cta',
        heading: '3. Book 2-Day Trip Accommodation Now',
        body: 'Reserve your overnight room via WhatsApp (+91 99034 90617) or our online Google Reservation Form.'
      }
    ],
    faqs: [
      {
        question: 'What nearby places can be covered in a 2-day Dharmasthala trip?',
        answer: 'You can easily cover Southadka Ganapathi Temple, Kukke Subrahmanya, and local museums.'
      },
      {
        question: 'Should we pre-book room for night stay on a 2-day trip?',
        answer: 'Yes, advance room booking guarantees your stay and avoids last-minute search.'
      }
    ],
    relatedSlugs: ['dharmasthala-one-day-trip', 'dharmasthala-weekend-trip', 'subrahmanya-to-dharmasthala']
  })
];
