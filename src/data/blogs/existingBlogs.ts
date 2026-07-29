import { BlogPost } from '../../types';

export const EXISTING_BLOGS: BlogPost[] = [
  {
    slug: 'dharmasthala-room-booking-guide',
    title: 'Dharmasthala Room Booking Guide: Step-by-Step Online Accommodation Guide',
    metaTitle: 'Dharmasthala Room Booking Online Guide | Yatri Nivas & Lodges Stay',
    metaDescription: 'Complete step-by-step online room booking guide for Shri Kshetra Dharmasthala. Learn how to reserve AC and Non-AC rooms via WhatsApp and Online Reservation Form.',
    date: '2026-07-20',
    author: 'Yatri Nivas Editorial Desk',
    readTime: '6 min read',
    category: 'Booking Guide',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    tableOfContents: [
      { id: 'overview', title: '1. Overview of Dharmasthala Accommodation' },
      { id: 'room-types', title: '2. Available Room Options & Facilities' },
      { id: 'whatsapp-booking', title: '3. Booking via WhatsApp Helpline' },
      { id: 'google-form-booking', title: '4. Booking via Google Reservation Form' },
      { id: 'guidelines', title: '5. Important Check-in & ID Rules' },
      { id: 'faq', title: '6. Frequently Asked Questions' }
    ],
    content: {
      intro: 'Planning a holy pilgrimage to Shri Kshetra Dharmasthala to seek the divine blessings of Lord Manjunatha Swamy? Securing clean, comfortable, and family-friendly accommodation is essential for a peaceful trip. This comprehensive guide walks you through the room categories, facilities, and the official fast-track room booking procedures.',
      sections: [
        {
          id: 'overview',
          heading: '1. Overview of Dharmasthala Accommodation',
          body: 'Shri Kshetra Dharmasthala attracts tens of thousands of pilgrims every day. To ensure every devotee finds a safe, clean place to rest, the Kshetra offers multiple Yatri Nivas complexes, guest houses, and private lodges equipped with modern amenities like 24x7 hot water, power backup, lifts, and spacious parking.',
          bullets: [
            'Proximity: Most room options are within 3 to 10 minutes walking distance from the main temple.',
            'Affordability: Nominal room charges tailored for pilgrim families and yatris.',
            'Hygiene: Strict daily cleaning and sanitized washrooms maintained across all blocks.'
          ]
        },
        {
          id: 'room-types',
          heading: '2. Available Room Options & Facilities',
          body: 'Whether you are traveling solo, as a couple, or with a large family group, there are room options suited for every group size:',
          bullets: [
            'Double Bed Room (AC & Non-AC): Ideal for 2 to 3 guests with attached western/Indian toilet.',
            'Triple Bed Room: Designed for 3 to 4 family members with extra space.',
            '4-Bed & 5-Bed Family Rooms: Perfect for medium family groups with luggage racks.',
            'Family Bedrooms (6+ Guests): Spacious halls/suites for big family yatras and groups.'
          ],
          image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
          imageAlt: 'Clean Yatri Nivas Triple Bedroom in Dharmasthala'
        },
        {
          id: 'whatsapp-booking',
          heading: '3. Booking via WhatsApp Helpline (+91 99034 90617)',
          body: 'For fast, instant room availability checks, you can contact the dedicated WhatsApp room reservation desk at +91 99034 90617.',
          subsections: [
            {
              title: 'How to request room availability on WhatsApp:',
              body: 'Simply click the "WhatsApp Booking" button on our portal or message +91 99034 90617 with your Full Name, Check-in & Check-out dates, Number of Guests, and AC / Non-AC preference. Our representative will respond with current room availability and booking instructions.'
            }
          ]
        },
        {
          id: 'google-form-booking',
          heading: '4. Booking via Google Reservation Form',
          body: 'You can also fill out our Online Online Reservation Form directly from your smartphone or computer. Click "Room Reserve Now" on any page to open the form in a new tab, fill in your pilgrimage details, and submit. Our support desk will verify room availability and contact you with confirmation.'
        },
        {
          id: 'guidelines',
          heading: '5. Important Check-in & ID Rules',
          body: 'To ensure a hassle-free check-in experience upon arrival in Dharmasthala:',
          bullets: [
            'Carry original photo ID proof (Aadhaar Card, Voter ID, Driving License) for all adult guests.',
            'Strictly obey temple decorum: Unmarried couples are not allowed; bookings are for families and pilgrims only.',
            'Standard check-in assistance is available 24 hours round-the-clock at the reception desk.'
          ]
        }
      ],
      faqs: [
        {
          question: 'Can I book a room on the same day of arrival?',
          answer: 'Same-day walk-in availability depends on rush days. On weekends and festival days, advance booking via WhatsApp or Online Reservation Form is strongly advised.'
        },
        {
          question: 'Is hot water available for morning bathing?',
          answer: 'Yes! All room blocks feature 24x7 solar and electric geyser hot water supply.'
        }
      ]
    },
    relatedSlugs: ['temple-history', 'temple-timings', 'best-time-to-visit']
  },
  {
    slug: 'temple-history',
    title: 'Temple History: The Divine Legacy of Shri Kshetra Dharmasthala',
    metaTitle: 'Shri Kshetra Dharmasthala Temple History & Divine Heritage',
    metaDescription: 'Discover the rich 800-year history of Shri Kshetra Dharmasthala, Lord Manjunatha Swamy, the Dharma Daivas, Chandranatha Basadi, and the Heggade lineage.',
    date: '2026-07-18',
    author: 'Dharmasthala Heritage Study',
    readTime: '8 min read',
    category: 'History & Culture',
    featuredImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    tableOfContents: [
      { id: 'origin', title: '1. The Origin of Kuduma (Dharmasthala)' },
      { id: 'daivas', title: '2. The Four Dharma Daivas' },
      { id: 'manjunatha', title: '3. Installation of Lord Manjunatha Swamy' },
      { id: 'heggade-lineage', title: '4. The Heggade Lineage & 4 Pillars of Dharma' }
    ],
    content: {
      intro: 'Shri Kshetra Dharmasthala is an extraordinary center of faith, harmony, and righteousness located along the banks of the Nethravathi River in Karnataka. For over 800 years, this holy shrine has shone as a unique beacon of religious tolerance where Lord Manjunatha (Shiva) is worshiped by Vaishnavite priests under the guidance of a Jain hereditary Dharmadhikari.',
      sections: [
        {
          id: 'origin',
          heading: '1. The Origin of Kuduma (Dharmasthala)',
          body: 'Centuries ago, Dharmasthala was known as "Kuduma", a small village where a pious Jain chieftain named Birmanna Pergade and his wife Ammu Ballalthi lived in their house called Nelliadi Beedu. Known for their warmth and hospitality, they welcomed all travelers who knocked on their door.'
        },
        {
          id: 'daivas',
          heading: '2. The Four Dharma Daivas',
          body: 'Pleased by Pergade\'s selfless devotion and hospitality, the four guardian angels of Dharma (Kalarahu, Kalarkai, Kumaraswamy, and Kanyakumari) appeared in his dream. They instructed him to vacate Nelliadi Beedu for the Daivas and dedicate his life to the propagation of Dharma.',
          bullets: [
            'Dharma Daivas: Kalarahu, Kalarkai, Kumaraswamy, and Kanyakumari.',
            'Nelliadi Beedu: The original abode maintained in its historic wooden architecture to this day.',
            'Name Change: The place was named "Dharmasthala" (Abode of Dharma) by Sri Vadiraja Swamy of Udupi.'
          ]
        },
        {
          id: 'manjunatha',
          heading: '3. Installation of Lord Manjunatha Swamy',
          body: 'Sri Vadiraja Swamy of Udupi visited Kuduma and consecrated the holy Shiva Linga brought from Kadri near Mangalore, naming it Sri Manjunatha Swamy. Since then, Lord Manjunatha has been the presiding deity of Dharmasthala.'
        },
        {
          id: 'heggade-lineage',
          heading: '4. The Heggade Lineage & 4 Pillars of Dharma',
          body: 'The Dharmadhikari title is held by Dr. D. Veerendra Heggade, who embodies the spirit of selfless service through four sacred Danas: Annadana (free food), Abhayadana (free justice/shelter), Aushadhadana (free healthcare), and Vidyadana (free education).'
        }
      ]
    },
    relatedSlugs: ['dharmasthala-room-booking-guide', 'temple-timings', 'best-time-to-visit']
  },
  {
    slug: 'temple-timings',
    title: 'Temple Timings, Darshan Schedule & Seva List',
    metaTitle: 'Dharmasthala Temple Timings | Darshan, Pooja & Annadana Timings',
    metaDescription: 'Updated timings for Shri Kshetra Dharmasthala Lord Manjunatha Swamy temple darshan, Maha Mangalarathi, Abhisheka sevas, and Annapoorna chatra free meals.',
    date: '2026-07-15',
    author: 'Temple Seva Counter',
    readTime: '5 min read',
    category: 'Pilgrim Guide',
    featuredImage: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80',
    tableOfContents: [
      { id: 'darshan-timings', title: '1. Daily Darshan Schedule' },
      { id: 'pooja-sevas', title: '2. Major Pooja & Abhisheka Sevas' },
      { id: 'annadana-timings', title: '3. Annapoorna Chatra Meals Timings' },
      { id: 'dress-code', title: '4. Dress Code & Etiquette' }
    ],
    content: {
      intro: 'To make the most of your spiritual visit to Shri Kshetra Dharmasthala, it is important to plan your arrival around temple darshan, mangalarathi, and meal timings.',
      sections: [
        {
          id: 'darshan-timings',
          heading: '1. Daily Darshan Schedule',
          body: 'Lord Manjunatha Swamy Temple is open for public darshan during the following time slots every day:',
          bullets: [
            'Morning Session: 6:30 AM to 2:00 PM',
            'Evening Session: 5:00 PM to 8:30 PM',
            'Maha Mangalarathi: 12:00 PM Noon & 8:00 PM Night'
          ]
        },
        {
          id: 'pooja-sevas',
          heading: '2. Major Pooja & Abhisheka Sevas',
          body: 'Devotees can perform various sacred sevas including Panchamrutha Abhisheka, Tuthi Seva, Ekadasa Rudrabhisheka, Shivapooja, and Car Seva by booking at the temple administrative office counters.'
        },
        {
          id: 'annadana-timings',
          heading: '3. Annapoorna Chatra Meals Timings',
          body: 'Free hot vegetarian lunch and dinner prasada are served to all pilgrims at the Annapoorna Chatra:',
          bullets: [
            'Free Lunch: 11:30 AM to 2:00 PM',
            'Free Dinner: 7:00 PM to 8:30 PM'
          ]
        },
        {
          id: 'dress-code',
          heading: '4. Dress Code & Etiquette',
          body: 'Men must wear Dhoti / Veshti and remove shirts/vests before entering the inner sanctum. Women should wear Sarees, Salwar Kameez, or Half Sarees. Modern western clothes like shorts, mini skirts, and sleeveless tops are strictly prohibited inside the temple.'
        }
      ]
    },
    relatedSlugs: ['dharmasthala-room-booking-guide', 'best-time-to-visit', 'bangalore-to-dharmasthala']
  },
  {
    slug: 'best-time-to-visit',
    title: 'Best Time to Visit Dharmasthala: Weather, Festivals & Lakshadeepotsava',
    metaTitle: 'Best Time to Visit Dharmasthala | Weather & Festival Season Guide',
    metaDescription: 'Find out the best months to visit Shri Kshetra Dharmasthala. Learn about winter climate, monsoon beauty, and major festivals like Lakshadeepotsava and Shivaratri.',
    date: '2026-07-10',
    author: 'Yatri Travel Desk',
    readTime: '5 min read',
    category: 'Travel Tips',
    featuredImage: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=1200&q=80',
    tableOfContents: [
      { id: 'winter', title: '1. Winter Season (October to March) - Best Time' },
      { id: 'festivals', title: '2. Major Festivals at Dharmasthala' },
      { id: 'monsoon', title: '3. Monsoon Season (June to September)' },
      { id: 'summer', title: '4. Summer Season (April to May)' }
    ],
    content: {
      intro: 'Shri Kshetra Dharmasthala experiences pleasant tropical weather influenced by the Western Ghats mountain range. Choosing the right season enhances your pilgrimage experience.',
      sections: [
        {
          id: 'winter',
          heading: '1. Winter Season (October to March) - Best Time',
          body: 'Winter is the most comfortable and ideal period to visit Dharmasthala. Temperatures range between 18°C and 28°C, making it pleasant for temple darshan, exploring Ratnagiri hill, visiting Southadka, and walking between Yatri Nivas guest houses.'
        },
        {
          id: 'festivals',
          heading: '2. Major Festivals at Dharmasthala',
          body: 'Visiting during festival time offers a breathtaking cultural spectacle:',
          bullets: [
            'Lakshadeepotsava (November/December): The grand festival of 1,00,000 lamps with illuminated chariots, Sarva Dharma and Sahitya Sammelanas.',
            'Maha Shivaratri (February/March): All-night temple poojas and devotional bhajans.',
            'Ganesha Chaturthi: Special poojas at temple and Southadka Ganapathi shrine.'
          ]
        },
        {
          id: 'monsoon',
          heading: '3. Monsoon Season (June to September)',
          body: 'Heavy rainfall transforms the surrounding Charmadi Ghats and Netravathi River into lush green cascades. Ideal for nature lovers, though carrying umbrellas and advance room reservations are recommended.'
        }
      ]
    },
    relatedSlugs: ['dharmasthala-room-booking-guide', 'temple-history', 'bangalore-to-dharmasthala']
  },
  {
    slug: 'how-to-reach-dharmasthala',
    title: 'How to Reach Dharmasthala: Bus, Train & Flight Travel Guide',
    metaTitle: 'How to Reach Dharmasthala by Bus, Train & Flight | Route Map',
    metaDescription: 'Detailed route map and transport options to reach Shri Kshetra Dharmasthala from Bangalore, Mangalore, Udupi, Mysore, and Hassan.',
    date: '2026-07-08',
    author: 'Pilgrim Transport Guide',
    readTime: '6 min read',
    category: 'Travel Guide',
    featuredImage: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
    tableOfContents: [
      { id: 'by-bus', title: '1. Reaching by Bus (KSRTC & Private)' },
      { id: 'by-train', title: '2. Nearest Railway Stations (Subrahmanya Road & Mangalore)' },
      { id: 'by-air', title: '3. Nearest Airport (Mangalore International Airport)' },
      { id: 'by-car', title: '4. Self-Drive Routes via Charmadi & Shiradi Ghats' }
    ],
    content: {
      intro: 'Dharmasthala is well-connected by road, rail, and air to all major cities in Karnataka, Kerala, and Maharashtra.',
      sections: [
        {
          id: 'by-bus',
          heading: '1. Reaching by Bus (KSRTC & Private)',
          body: 'KSRTC operates direct Airavat, Rajahamsa, and Express buses every 15 minutes from Bangalore (KBS/Satellite), Mangalore, Mysore, Udupi, Shimoga, and Hubli directly into the Dharmasthala Bus Stand located near temple lodging.'
        },
        {
          id: 'by-train',
          heading: '2. Nearest Railway Stations',
          body: 'Subrahmanya Road Railway Station (SBHR, ~48 km) and Mangalore Central / Junction (MAQ/MAJN, ~75 km) are the closest railheads. Taxis and KSRTC connecting buses run continuously from these stations.'
        },
        {
          id: 'by-air',
          heading: '3. Nearest Airport',
          body: 'Mangalore International Airport (IXE) is located 65 km away. Prepaid cabs and buses connect IXE airport directly to Dharmasthala in 1.5 hours.'
        }
      ]
    },
    relatedSlugs: ['bangalore-to-dharmasthala', 'mangalore-to-dharmasthala', 'accommodation-guide']
  },
  {
    slug: 'bangalore-to-dharmasthala',
    title: 'Bangalore to Dharmasthala Travel Route & Accommodation Guide',
    metaTitle: 'Bangalore to Dharmasthala Distance, Route Map & Yatri Nivas Stay',
    metaDescription: 'Plan your trip from Bangalore to Dharmasthala. Distance (300 km), best driving routes via Hassan/Shiradi Ghat, bus timings, and room reservation advice.',
    date: '2026-07-05',
    author: 'Bangalore Yatri Desk',
    readTime: '7 min read',
    category: 'Route Guide',
    featuredImage: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
    tableOfContents: [
      { id: 'distance', title: '1. Distance & Drive Duration' },
      { id: 'road-route', title: '2. Recommended Road Routes' },
      { id: 'bus-options', title: '3. Overnight Bus Options' },
      { id: 'room-advice', title: '4. Reserving Rooms in Advance' }
    ],
    content: {
      intro: 'The journey from Bangalore to Dharmasthala covers approximately 300 km through scenic Western Ghats landscapes, making it one of the most popular weekend pilgrimage routes in South India.',
      sections: [
        {
          id: 'distance',
          heading: '1. Distance & Drive Duration',
          body: 'Distance: ~300 km. Driving Time: 6 to 7 hours depending on traffic and ghat road stops.'
        },
        {
          id: 'road-route',
          heading: '2. Recommended Road Routes',
          body: 'Route 1 (via Hassan - Shiradi Ghat): Bangalore -> Nelamangala -> Kunigal -> Channarayapatna -> Hassan -> Sakleshpur -> Gundya -> Dharmasthala (NH 75). Smooth 4-lane highway up to Hassan.',
          bullets: [
            'Route 2 (via Belur - Charmadi Ghat): Bangalore -> Hassan -> Belur -> Mudigere -> Charmadi Ghat -> Ujire -> Dharmasthala (Breathtaking mountain valley scenery).'
          ]
        },
        {
          id: 'room-advice',
          heading: '3. Reserving Rooms in Advance',
          body: 'Since thousands of Bangalore travelers arrive early morning (5:00 AM - 7:00 AM), booking your Double/Triple/Family room ahead via WhatsApp (+91 99034 90617) or Online Reservation Form ensures your room is ready when you land.'
        }
      ]
    },
    relatedSlugs: ['how-to-reach-dharmasthala', 'dharmasthala-room-booking-guide', 'family-stay']
  },
  {
    slug: 'mangalore-to-dharmasthala',
    title: 'Mangalore to Dharmasthala Complete Pilgrim Travel Guide',
    metaTitle: 'Mangalore to Dharmasthala Travel Guide | Distance, Bus & Rooms',
    metaDescription: 'Complete travel guide from Mangalore to Dharmasthala. Distance (75 km), travel time (1.5 hours), express bus schedules, taxi charges, and lodging.',
    date: '2026-07-03',
    author: 'Coastal Yatri Desk',
    readTime: '5 min read',
    category: 'Route Guide',
    featuredImage: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=1200&q=80',
    tableOfContents: [
      { id: 'overview', title: '1. Distance & Travel Time' },
      { id: 'bus-timing', title: '2. Mangalore KSRTC Bus Frequency' },
      { id: 'cab-options', title: '3. Prepaid Taxi & Auto Options' },
      { id: 'stay-guide', title: '4. Coastal Pilgrim Room Options' }
    ],
    content: {
      intro: 'Located just 75 km away from coastal Mangalore, Dharmasthala is an easy day-trip or weekend retreat for residents and visitors landing at Mangalore airport or railway station.',
      sections: [
        {
          id: 'overview',
          heading: '1. Distance & Travel Time',
          body: 'Distance: 75 km. Travel Time: 1 hour 30 minutes via Mangalore -> Bantwal -> Guruvayanakere -> Belthangady -> Ujire -> Dharmasthala highway.'
        },
        {
          id: 'bus-timing',
          heading: '2. Mangalore KSRTC Bus Frequency',
          body: 'Buses depart KSRTC Bus Stand Bejai (Mangalore) every 10 to 15 minutes from 5:00 AM until 10:00 PM.'
        }
      ]
    },
    relatedSlugs: ['how-to-reach-dharmasthala', 'bangalore-to-dharmasthala', 'nearby-tourist-places']
  },
  {
    slug: 'accommodation-guide',
    title: 'Accommodation Guide: Yatri Nivas & Private Lodges in Dharmasthala',
    metaTitle: 'Dharmasthala Accommodation & Lodging Guide | AC & Non-AC Rooms',
    metaDescription: 'Comprehensive guide to choosing room types in Dharmasthala. Compare Double, Triple, 4-Bed, 5-Bed, and Family Suites with amenities & pricing.',
    date: '2026-06-28',
    author: 'Accommodation Advisory Desk',
    readTime: '6 min read',
    category: 'Lodging Guide',
    featuredImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    tableOfContents: [
      { id: 'choosing-room', title: '1. How to Choose the Right Room Type' },
      { id: 'amenities-list', title: '2. Standard Amenities Provided' },
      { id: 'booking-tips', title: '3. Booking Best Practices' }
    ],
    content: {
      intro: 'Choosing the right accommodation ensures your family stays comfortably and can focus on prayers and darshan.',
      sections: [
        {
          id: 'choosing-room',
          heading: '1. How to Choose the Right Room Type',
          body: 'For 2 guests: Double Bed Room (AC/Non-AC).\nFor 3 guests: Triple Bed Room.\nFor 4-5 guests: 4-Bed or 5-Bed Family Room.\nFor 6+ guests: Family Bedroom Suite with attached multiple baths.'
        },
        {
          id: 'amenities-list',
          heading: '2. Standard Amenities Provided',
          body: 'Every verified room features 24x7 hot water, ceiling fans/AC, Western/Indian clean toilets, elevator access, generator power backup, and safe parking.'
        }
      ]
    },
    relatedSlugs: ['dharmasthala-room-booking-guide', 'family-stay', 'nearby-tourist-places']
  },
  {
    slug: 'family-stay',
    title: 'Family Stay & Group Booking Options in Dharmasthala',
    metaTitle: 'Family Stay & Group Room Booking in Dharmasthala | Yatri Nivas',
    metaDescription: 'Book group and family bedrooms in Dharmasthala. Ideal for family Yatras, Bhajana Mandalis, senior citizens, and wedding pilgrim groups.',
    date: '2026-06-22',
    author: 'Group Yatra Desk',
    readTime: '5 min read',
    category: 'Family Guide',
    featuredImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    tableOfContents: [
      { id: 'family-rooms', title: '1. Large Family Bedroom Suites (6+ Guests)' },
      { id: 'elderly-facilities', title: '2. Facilities for Elderly Pilgrims & Children' },
      { id: 'group-whatsapp', title: '3. Reserving Group Rooms via WhatsApp' }
    ],
    content: {
      intro: 'Pilgrimages are most joyful when undertaken together with family and friends. Here is how large groups can stay comfortably in Dharmasthala.',
      sections: [
        {
          id: 'family-rooms',
          heading: '1. Large Family Bedroom Suites (6+ Guests)',
          body: 'Family suites offer multiple beds, spacious luggage areas, and attached twin washrooms, allowing 6 to 12 family members to stay together under one roof.'
        },
        {
          id: 'elderly-facilities',
          heading: '2. Facilities for Senior Citizens',
          body: 'Elevator lifts, wheelchair-friendly hallways, western toilets, and ground floor proximity ensure senior family members enjoy a comfortable stay.'
        }
      ]
    },
    relatedSlugs: ['dharmasthala-room-booking-guide', 'accommodation-guide', 'nearby-tourist-places']
  },
  {
    slug: 'nearby-tourist-places',
    title: 'Nearby Tourist Places: Subrahmanya, Southadka, Ujire & Moodabidri',
    metaTitle: 'Nearby Sightseeing Places near Dharmasthala | Complete Itinerary',
    metaDescription: 'Explore tourist attractions near Dharmasthala including Kukke Subrahmanya, Southadka Ganapathi, Ratnagiri Bahubali, Ujire, and Moodabidri Thousand Pillar Temple.',
    date: '2026-06-15',
    author: 'Karnataka Sightseeing Desk',
    readTime: '7 min read',
    category: 'Sightseeing',
    featuredImage: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=1200&q=80',
    tableOfContents: [
      { id: 'kukke', title: '1. Kukke Shri Subrahmanya Temple (50 km)' },
      { id: 'southadka', title: '2. Southadka Open-Air Ganapathi Temple (15 km)' },
      { id: 'ratnagiri', title: '3. Bhagwan Bahubali Statue (1 km)' },
      { id: 'moodabidri', title: '4. Moodabidri Saavira Kambada Basadi (50 km)' }
    ],
    content: {
      intro: 'A trip to Shri Kshetra Dharmasthala can be beautifully combined with visits to several world-famous temples and heritage sights across Dakshina Kannada.',
      sections: [
        {
          id: 'kukke',
          heading: '1. Kukke Shri Subrahmanya Temple (50 km)',
          body: 'Kukke Subrahmanya is renowned for Sarpa Samskara and Ashlesha Bali sevas. Located amidst Kumara Parvatha hills, it is 1 hour drive from Dharmasthala.'
        },
        {
          id: 'southadka',
          heading: '2. Southadka Open-Air Ganapathi Temple (15 km)',
          body: 'Famous for its open-air Lord Ganesha idol under a tree surrounded by thousands of brass bells.'
        },
        {
          id: 'ratnagiri',
          heading: '3. Bhagwan Bahubali Statue (1 km)',
          body: 'The 39-foot monolithic granite statue atop Ratnagiri hill offering sunset vistas.'
        },
        {
          id: 'moodabidri',
          heading: '4. Moodabidri 1000 Pillar Temple (50 km)',
          body: 'Ancient Jain Basadi constructed in 1430 AD featuring 1,000 unique carved granite pillars.'
        }
      ]
    },
    relatedSlugs: ['dharmasthala-room-booking-guide', 'best-time-to-visit', 'temple-history']
  }
];
