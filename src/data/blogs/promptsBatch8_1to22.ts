import { BlogPost } from '../../types';
import { createBlogArticle } from './blogBuilder';

export const BLOGS_BATCH8_1_TO_22: BlogPost[] = [
  // 1. places to visit near dharmasthala
  createBlogArticle({
    slug: 'places-to-visit-near-dharmasthala',
    keyword: 'places to visit near dharmasthala',
    title: 'Best Places to Visit Near Dharmasthala – Sightseeing Guide',
    metaTitle: '15 Best Places to Visit Near Dharmasthala - Top Tourist Guide',
    metaDescription: 'Explore the best tourist places to visit near Dharmasthala. Discover temples, waterfalls, hill stations, heritage sites, and scenic nature spots.',
    date: '2026-07-28',
    author: 'Dharmasthala Travel Desk',
    readTime: '15 min read',
    category: 'Sightseeing',
    featuredImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    intro: 'Dharmasthala is not only a sacred pilgrimage center but also a gateway to stunning landscapes, ancient temples, lush Western Ghats waterfalls, and historical heritage sites across Dakshina Kannada. Plan your extended itinerary with this ultimate nearby sightseeing guide.',
    sections: [
      {
        id: 'top-temple-attractions',
        heading: '1. Top Spiritual & Temple Attractions Nearby',
        body: 'Combine your Dharmasthala pilgrimage with visits to famous ancient shrines located within a 1 to 2 hour drive:',
        bullets: [
          'Kukke Subramanya Temple (53 km): The revered shrine dedicated to Lord Subramanya, famous for Ashlesha Bali and Nagadosha poojas.',
          'Southadka Shree Maha Ganapathi Temple (15 km): A unique open-air Ganesha shrine surrounded by lush green countryside without a formal sanctum roof.',
          'Shri Sowthadka Vinayaka Temple: Known for bell offerings where devotees hang bronze bells upon fulfilling vows.',
          'Kateel Shree Durgaparameshwari Temple (72 km): Located on an islet in the middle of the sacred Nandini River.'
        ]
      },
      {
        id: 'nature-waterfalls-hills',
        heading: '2. Scenic Hill Stations, Nature & Waterfalls',
        body: 'Immerse yourself in Western Ghats natural beauty surrounding Belthangady and Charmadi Ghat:',
        bullets: [
          'Charmadi Ghat Viewpoints (25 km): Spectacular mountain vistas, misty hairpin bends, and cascading roadside waterfalls during monsoon.',
          'Didupe & Ermai Waterfalls (30 km): Breathtaking multi-tiered jungle waterfalls at the base of Charmadi hills, popular for trekking.',
          'Kudremukh National Park (80 km): World-renowned biodiversity hotspot with rolling tea gardens and peak trekking trails.'
        ]
      },
      {
        id: 'heritage-cultural-spots',
        heading: '3. Historical & Cultural Landmarks in Dharmasthala',
        body: 'Explore heritage attractions located right within Sri Kshetra Dharmasthala:',
        bullets: [
          'Lord Bahubali Monolithic Statue: A magnificent 39-foot single-stone statue atop Ratnagiri Hill.',
          'Manjusha Car Museum: A world-class vintage automobile museum featuring royal cars, vintage carriages, and ancient artifacts.',
          'Netravati River Bathing Ghat: Sacred riverbank where pilgrims take a holy dip before entering Lord Manjunatha shrine.'
        ]
      }
    ],
    faqs: [
      {
        question: 'What are the best places to visit near Dharmasthala within 20 km?',
        answer: 'Southadka Ganesha Temple, Bahubali Statue, Manjusha Museum, Netravati River, and Ujire town are all within 20 km of Dharmasthala.'
      },
      {
        question: 'How many days are required to explore sightseeing places around Dharmasthala?',
        answer: 'A 2-day or 3-day itinerary allows you to complete temple darshan and visit Kukke Subramanya, Charmadi Ghat, and nearby waterfalls comfortably.'
      }
    ]
  }),

  // 2. tourist places near dharmasthala
  createBlogArticle({
    slug: 'tourist-places-near-dharmasthala',
    keyword: 'tourist places near dharmasthala',
    title: 'Top Tourist Places Near Dharmasthala – Must-See Destinations',
    metaTitle: 'Top Tourist Places Near Dharmasthala - Full Sightseeing List',
    metaDescription: 'Discover the top tourist places near Dharmasthala. Complete list of nearby attractions, distance charts, route details, and travel recommendations.',
    date: '2026-07-28',
    author: 'Tourist Information Desk',
    readTime: '14 min read',
    category: 'Sightseeing',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Whether you are traveling with family, elderly parents, or a group of friends, the region around Dharmasthala offers an impressive blend of eco-tourism spots, heritage sites, and spiritual monuments.',
    sections: [
      {
        id: 'must-visit-attractions',
        heading: '1. Must-Visit Sightseeing Spots with Distance Chart',
        body: 'Plan your day trips efficiently using this distance matrix:',
        bullets: [
          'Southadka Temple: 15 km (25 mins drive via Ujire-Guruvayanakere road)',
          'Kukke Subramanya: 53 km (1 hr 15 mins via Kadaba state highway)',
          'Charmadi Ghat Viewpoint: 28 km (40 mins drive along scenic winding roads)',
          'Moodabidri Thousand Pillar Temple: 52 km (1 hr 10 mins)',
          'Karkala Gommateshwara & Chaturmukha Basadi: 64 km (1 hr 25 mins)'
        ]
      },
      {
        id: 'family-recreation-spots',
        heading: '2. Ideal Spots for Family Outings & Day Trips',
        body: 'Top places recommended for multi-generational family groups:',
        bullets: [
          'Manjusha Museum & Vintage Auto Collection: Loved by children and elders alike.',
          'Chandranatha Basadi & Ratnagiri Hill: Easy paved steps leading to peaceful panoramic views.',
          'Jamalabad Fort (Gadaikallu): A challenging historical hill fort built by Tipu Sultan, located 18 km away near Belthangady.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is public transport available to all tourist places near Dharmasthala?',
        answer: 'KSRTC buses regularly connect Dharmasthala with Ujire, Kukke Subramanya, Mangalore, and Moodabidri. Renting a private taxi is ideal for waterfalls and Charmadi ghat.'
      }
    ]
  }),

  // 3. kukke subramanya from dharmasthala
  createBlogArticle({
    slug: 'kukke-subramanya-from-dharmasthala',
    keyword: 'kukke subramanya from dharmasthala',
    title: 'Dharmasthala to Kukke Subramanya Travel Guide – Bus, Taxi & Distance',
    metaTitle: 'Dharmasthala to Kukke Subramanya Guide - Distance, Bus & Pooja',
    metaDescription: 'Complete travel guide from Dharmasthala to Kukke Subramanya. Check distance, bus timings, taxi fare, route map, pooja timings, and stay advice.',
    date: '2026-07-28',
    author: 'Pilgrimage Route Desk',
    readTime: '13 min read',
    category: 'Travel Route',
    featuredImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    intro: 'Combining Sri Kshetra Dharmasthala and Kukke Subramanya in a single pilgrimage tour is a cherished tradition for millions of devotees. Here is everything you need to know about traveling between these two holy shrines.',
    sections: [
      {
        id: 'route-distance-transport',
        heading: '1. Distance, Travel Time & Route Options',
        body: 'Essential route details for your travel:',
        bullets: [
          'Total Distance: Approximately 53 km via SH-37 (Dharmasthala – Kokkada – Gundya – Subramanya route).',
          'Travel Duration: 1 hour 15 minutes by private car/taxi; 1 hour 30 minutes by KSRTC bus.',
          'KSRTC Bus Frequency: Direct KSRTC express buses operate every 20–30 minutes from Dharmasthala bus stand.'
        ]
      },
      {
        id: 'pooja-darshan-planning',
        heading: '2. Coordinating Darshan & Pooja Timings',
        body: 'How to organize both temple visits in 1 day:',
        bullets: [
          'Morning in Dharmasthala: Complete Lord Manjunatha darshan between 6:30 AM and 9:00 AM.',
          'Travel to Kukke: Depart by 9:30 AM to reach Subramanya around 11:00 AM.',
          'Afternoon in Kukke Subramanya: Take a dip at Kumaradhara River, followed by Sarpa Samskara or Mahapooja darshan and Prasadam meals.'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is the taxi fare from Dharmasthala to Kukke Subramanya?',
        answer: 'One-way auto/cab charges range between ₹1,200 and ₹1,800 depending on vehicle size (Sedan vs Ertiga/Innova).'
      },
      {
        question: 'Which road is better for driving between Dharmasthala and Subramanya?',
        answer: 'The route via Kokkada and Gundya is well-paved and smooth, offering a comfortable drive.'
      }
    ]
  }),

  // 4. bahubali statue dharmasthala
  createBlogArticle({
    slug: 'bahubali-statue-dharmasthala',
    keyword: 'bahubali statue dharmasthala',
    title: 'Bahubali Statue in Dharmasthala – Visitor & Timings Guide',
    metaTitle: 'Bahubali Statue Dharmasthala - History, Timings & Guide',
    metaDescription: 'Complete guide to the 39-foot Bahubali Statue at Ratnagiri Hill in Dharmasthala. Timings, history, Mahamastakabhisheka festival, and visitor info.',
    date: '2026-07-28',
    author: 'Heritage & Culture Desk',
    readTime: '12 min read',
    category: 'Heritage',
    featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    intro: 'Standing majestically atop Ratnagiri Hill in Dharmasthala, the 39-foot monolithic statue of Lord Bahubali symbolizes peace, sacrifice, renunciation, and eternal bliss. It is one of Karnataka\'s grandest Jain heritage monuments.',
    sections: [
      {
        id: 'history-architecture',
        heading: '1. History & Architectural Grandeur',
        body: 'Key historical facts about the monument:',
        bullets: [
          'Carved from Single Granite Stone: Sculpted by legendary sculptor Renjala Gopala Shenoy under the leadership of Dr. D. Veerendra Heggade.',
          'Consecrated in 1982: Weight exceeds 175 tons, carved at Karkala and transported over challenging terrain to Dharmasthala.',
          'Peaceful Hilltop Setting: Reached via a short flight of paved stairs or smooth incline road with garden walkways.'
        ]
      },
      {
        id: 'visitor-timings-tips',
        heading: '2. Visiting Timings & Useful Tips',
        body: 'Guidelines for planning your visit:',
        bullets: [
          'Opening Hours: 6:00 AM to 1:00 PM and 4:00 PM to 7:00 PM daily.',
          'Best Time to Visit: Early morning or late evening to enjoy cool breezes and picturesque sunset views over the Western Ghats.',
          'Wheelchair Accessibility: Paved ramp access is available for elderly visitors.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is there an entry fee for visiting the Bahubali Statue in Dharmasthala?',
        answer: 'No, entry is completely free for all visitors and pilgrims.'
      }
    ]
  }),

  // 5. ujire tourist places
  createBlogArticle({
    slug: 'ujire-tourist-places',
    keyword: 'ujire tourist places',
    title: 'Best Places to Visit in Ujire – Travel & Sightseeing Guide',
    metaTitle: '10 Best Tourist Places in Ujire Near Dharmasthala',
    metaDescription: 'Discover the top tourist attractions in Ujire near Dharmasthala. Temples, waterfalls, Charmadi entrance, educational hubs, and nature spots.',
    date: '2026-07-28',
    author: 'Belthangady Travel Desk',
    readTime: '13 min read',
    category: 'Sightseeing',
    featuredImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    intro: 'Located just 9 km from Dharmasthala, Ujire is a vibrant commercial and educational town nestled at the junction of Charmadi Ghat and Belthangady. It serves as an ideal base for exploring nearby eco-tourism and pilgrimage spots.',
    sections: [
      {
        id: 'top-ujire-attractions',
        heading: '1. Top Tourist Attractions in and Around Ujire',
        body: 'Explore these popular destinations near Ujire town:',
        bullets: [
          'Janardhana Swamy Temple Ujire: Ancient temple dedicated to Lord Vishnu, featuring serene atmosphere and traditional architecture.',
          'Charmadi Ghat Gateway: Ujire is the starting point for driving up Charmadi Ghat\'s breathtaking mountain vistas.',
          'SDM Educational Institutions Complex: Famous centers for Ayurveda, Naturopathy, and modern higher education.',
          'Benaka Health Centre & SDM Yoga Grounds: Wellness centers promoting traditional Indian holistic healing.'
        ]
      },
      {
        id: 'stay-dining-ujire',
        heading: '2. Accommodation & Dining Advantages in Ujire',
        body: 'Why smart travelers choose Ujire for lodging:',
        bullets: [
          'Easy Accommodation Backup: Excellent private AC hotels and budget lodges when Dharmasthala rooms are full.',
          'Diverse Food Outlets: Multi-cuisine pure veg restaurants, South Indian tiffin centers, and bakery choices.',
          'Quick 15-Minute Transit: Shuttle buses and autos ply continuously to Sri Manjunatha Temple.'
        ]
      }
    ],
    faqs: [
      {
        question: 'How far is Ujire from Dharmasthala Temple?',
        answer: 'Ujire is approximately 9 km away, which takes about 12 to 15 minutes by vehicle.'
      }
    ]
  }),

  // 6. beltangady tourist places
  createBlogArticle({
    slug: 'beltangady-tourist-places',
    keyword: 'beltangady tourist places',
    title: 'Top Tourist Attractions in Beltangady – Sightseeing Guide',
    metaTitle: 'Top Tourist Places in Beltangady Near Dharmasthala',
    metaDescription: 'Explore top tourist places in Beltangady taluk. Forts, waterfalls, ancient temples, trekking trails, and natural scenic beauty.',
    date: '2026-07-28',
    author: 'Malnad Travel Desk',
    readTime: '13 min read',
    category: 'Sightseeing',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Beltangady (Belthangady) taluk encompasses Dharmasthala, Ujire, and Charmadi Ghat. Rich in tropical green cover, roaring waterfalls, and historical hill forts, it is a paradise for trekkers, pilgrims, and nature enthusiasts.',
    sections: [
      {
        id: 'forts-nature-spots',
        heading: '1. Historic Forts & Eco-Trekking Trails',
        body: 'Famous adventure and nature spots in Beltangady:',
        bullets: [
          'Jamalabad Fort (Gadaikallu): Monolithic rock fortress offering panoramic 360-degree views of the Western Ghats range.',
          'Didupe Waterfalls: Nestled inside dense jungle trails near Charmadi range.',
          'Bandaje Arbi Falls: Majestic waterfall plunging over a cliff face, accessible via a rewarding day trek.'
        ]
      },
      {
        id: 'famous-shrines-beltangady',
        heading: '2. Sacred Shrines & Cultural Spots',
        body: 'Religious and cultural places in the taluk:',
        bullets: [
          'Shree Somantheshwara Temple, Kadaaba / Belthangady.',
          'Southadka Mahaganapathi Temple: Famous open-air shrine.',
          'Dharmasthala Annapoorna Dining Complex & Heritage Museums.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need permission for trekking Jamalabad Fort in Belthangady?',
        answer: 'Yes, entry tickets and forest department check-post permits are obtained at the foot of the hill during morning hours.'
      }
    ]
  }),

  // 7. kudremukh from dharmasthala
  createBlogArticle({
    slug: 'kudremukh-from-dharmasthala',
    keyword: 'kudremukh from dharmasthala',
    title: 'Dharmasthala to Kudremukh – Complete Travel & Trekking Guide',
    metaTitle: 'Dharmasthala to Kudremukh Guide - Distance, Route & Trekking',
    metaDescription: 'Travel guide from Dharmasthala to Kudremukh. Route map, distance, tea estates, trekking permission, bus timings, and nearby stays.',
    date: '2026-07-28',
    author: 'Nature & Trek Desk',
    readTime: '14 min read',
    category: 'Travel Route',
    featuredImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    intro: 'From the sacred town of Dharmasthala, the picturesque mountain range of Kudremukh is just a short scenic road trip away. Experience rolling green hills, dense shola forests, and sparkling mountain streams.',
    sections: [
      {
        id: 'kudremukh-route-distance',
        heading: '1. Distance, Directions & Transport Options',
        body: 'Key travel metrics:',
        bullets: [
          'Distance: 80 km via Ujire – Kottigehara – Kalasa route.',
          'Travel Duration: 2.5 hours by car or scenic motorcycle ride.',
          'Scenic Highlights: Driving through Charmadi Ghat hairpin curves and lush tea plantations around Samse.'
        ]
      },
      {
        id: 'top-kudremukh-attractions',
        heading: '2. Top Sightseeing Spots in Kudremukh Region',
        body: 'Places to visit on your Kudremukh day trip:',
        bullets: [
          'Kalaseshwara Temple, Kalasa: Ancient Shiva temple overlooking the Bhadra River.',
          'Horanadu Annapoorneshwari Temple: Holy shrine nestled in picturesque greenery, 18 km from Kalasa.',
          'Elaneeru Waterfalls & Tea Estates: Serene tea garden landscapes and natural freshwater streams.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Can I visit Kudremukh peak without prior trekking permission?',
        answer: 'Kudremukh Peak trekking requires prior forest department passes issued limited per day at the Kudremukh forest office.'
      }
    ]
  }),

  // 8. mangalore to dharmasthala sightseeing
  createBlogArticle({
    slug: 'mangalore-to-dharmasthala-sightseeing',
    keyword: 'mangalore to dharmasthala sightseeing',
    title: 'Mangalore to Dharmasthala Sightseeing Guide – Route & En Route Spots',
    metaTitle: 'Mangalore to Dharmasthala Sightseeing - Route & Top Stops',
    metaDescription: 'Plan your road trip from Mangalore to Dharmasthala. Discover top en-route tourist spots, ancient temples, local food joints, and distance details.',
    date: '2026-07-28',
    author: 'Coastal Karnataka Desk',
    readTime: '13 min read',
    category: 'Sightseeing',
    featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    intro: 'The 75 km stretch connecting coastal Mangalore to Sri Kshetra Dharmasthala is packed with revered temples, heritage monuments, and delicious Coastal Karnataka culinary stops.',
    sections: [
      {
        id: 'en-route-attractions',
        heading: '1. Top En-Route Attractions Between Mangalore & Dharmasthala',
        body: 'Must-visit stops along the national/state highway:',
        bullets: [
          'Polali Rajarajeshwari Temple (Banthwal): Renowned ancient clay deity idol and annual car festival.',
          'Bantwal & Netravati River Bridge: Scenic river views and authentic Mangalorean breakfast stalls.',
          'Guruvayanakere Lake: Peaceful waterbody near Belthangady.',
          'Southadka Ganesha Temple: Short 15-minute detour before reaching Dharmasthala.'
        ]
      },
      {
        id: 'travel-logistics',
        heading: '2. Distance, Road Quality & Travel Tips',
        body: 'Logistical guidance for your drive:',
        bullets: [
          'Distance: 75 km via NH-73 (Mangalore – Bantwal – Ujire – Dharmasthala).',
          'Driving Time: 1 hour 45 minutes by car or direct KSRTC Volvo/Express buses.',
          'Food Recommendations: Try Neer Dosa, Mangalore Buns, and Goli Baje at local roadside eateries.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Are Volvo buses available from Mangalore to Dharmasthala?',
        answer: 'Yes, KSRTC operates frequent Rajahamsa and AC Volvo bus services from Mangalore KSRTC bus stand.'
      }
    ]
  }),

  // 9. nearby temples in dharmasthala
  createBlogArticle({
    slug: 'nearby-temples-in-dharmasthala',
    keyword: 'nearby temples in dharmasthala',
    title: 'Famous Temples Near Dharmasthala – Spiritual Circuit Guide',
    metaTitle: '10 Famous Temples Near Dharmasthala - Divine Circuit',
    metaDescription: 'Complete guide to famous temples near Dharmasthala. Visit Kukke Subramanya, Southadka Ganesha, Kateel, Horanadu, and Murudeshwar.',
    date: '2026-07-28',
    author: 'Vedic Circuit Desk',
    readTime: '14 min read',
    category: 'Sightseeing',
    featuredImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    intro: 'Dakshina Kannada and the surrounding Malnad region form one of South India\'s most sacred temple corridors. Discover the famous temples located within short driving distance of Dharmasthala.',
    sections: [
      {
        id: 'sacred-temple-list',
        heading: '1. The Divine Temple Circuit Around Dharmasthala',
        body: 'Revered shrines to include in your spiritual itinerary:',
        bullets: [
          'Southadka Shree Maha Ganapathi Temple (15 km): Open-air shrine surrounded by serene bell offerings.',
          'Kukke Shree Subramanya Temple (53 km): The primary pilgrimage destination for serpent deity worship.',
          'Kateel Durgaparameshwari Temple (72 km): Holy river island shrine known for Yakshagana performances.',
          'Horanadu Annapoorneshwari Temple (100 km): Serene shrine dedicated to the Goddess of Nourishment.',
          'Udupi Sri Krishna Matha (105 km): World-famous Dvaita Vedanta monastery and Lord Krishna shrine.'
        ]
      },
      {
        id: 'circuit-planning-tips',
        heading: '2. Tips for Planning a Multi-Temple Circuit',
        body: 'How to organize a seamless temple tour:',
        bullets: [
          'Dress Code Adherence: Traditional Indian attire is mandatory across all Dakshina Kannada temples.',
          'Timing Alignment: Most temples close sanctum darshan between 1:30 PM and 3:30 PM for afternoon poojas.',
          'Free Prasadam Meals: Almost all major shrines offer wholesome satvik lunch prasadam to pilgrims.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Can I cover Dharmasthala, Southadka, and Kukke Subramanya in a single day?',
        answer: 'Yes, start early morning at Dharmasthala, visit Southadka by 10 AM, and reach Kukke Subramanya by 1 PM.'
      }
    ]
  }),

  // 10. one day sightseeing dharmasthala
  createBlogArticle({
    slug: 'one-day-sightseeing-dharmasthala',
    keyword: 'one day sightseeing dharmasthala',
    title: 'One-Day Sightseeing Plan for Dharmasthala – Hourly Itinerary',
    metaTitle: 'One Day Sightseeing Plan for Dharmasthala - Perfect 24H Guide',
    metaDescription: 'Maximize your 1-day trip to Dharmasthala. Hour-by-hour itinerary covering Sri Manjunatha darshan, Bahubali statue, museum, and nearby spots.',
    date: '2026-07-28',
    author: 'Itinerary Planner Desk',
    readTime: '12 min read',
    category: 'Itinerary',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Short on time? This tested, hour-by-hour 1-day sightseeing plan ensures you experience Lord Manjunatha darshan, major local landmarks, and nearby attractions without feeling rushed.',
    sections: [
      {
        id: 'hourly-schedule',
        heading: '1. Hour-by-Hour Sightseeing Schedule',
        body: 'Follow this seamless day plan:',
        bullets: [
          '6:00 AM – 8:30 AM: Morning holy bath at Netravati River, followed by Sri Manjunatha Temple darshan.',
          '8:30 AM – 9:30 AM: Enjoy traditional breakfast at local tiffin centers or guest house dining.',
          '9:45 AM – 11:30 AM: Visit Lord Bahubali Monolithic Statue at Ratnagiri Hill and Chandranatha Basadi.',
          '11:45 AM – 1:15 PM: Explore vintage treasures at Manjusha Automobile & Artifacts Museum.',
          '1:30 PM – 2:30 PM: Sacred Mahaprasadam lunch at Annapoorna Dining Hall.',
          '3:00 PM – 5:30 PM: Excursion to Southadka Open-Air Ganesha Temple (15 km away).'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is 1 day enough to explore Dharmasthala?',
        answer: 'Yes, 1 day is sufficient to complete temple darshan, visit local museums, Bahubali statue, and one nearby shrine like Southadka.'
      }
    ]
  }),

  // 11. weekend trip near dharmasthala
  createBlogArticle({
    slug: 'weekend-trip-near-dharmasthala',
    keyword: 'weekend trip near dharmasthala',
    title: 'Best Weekend Trips Near Dharmasthala – 2-Day Getaways',
    metaTitle: 'Best Weekend Trips Near Dharmasthala - 2-Day Escapes',
    metaDescription: 'Plan perfect weekend getaways near Dharmasthala. Explore hill stations, coastal beaches, coffee plantations, and wildlife sanctuaries.',
    date: '2026-07-28',
    author: 'Weekend Escape Desk',
    readTime: '13 min read',
    category: 'Weekend Getaway',
    featuredImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    intro: 'Dharmasthala\'s strategic location between the Western Ghats mountain pass and the Arabian Sea coast makes it an ideal launchpad for memorable weekend trips.',
    sections: [
      {
        id: 'weekend-destinations',
        heading: '1. Top Weekend Getaway Destinations',
        body: 'Choose from mountain retreats or coastal escapes:',
        bullets: [
          'Chikmagalur (85 km): Coffee plantations, Mullayanagiri peak, and serene waterfalls via Charmadi Ghat.',
          'Mangalore Beaches (75 km): Tannirbhavi Beach, Panambur sunset views, and seafood delicacies.',
          'Mudigere & Sakleshpur (60 km): Offbeat homestays, misty green ridges, and spice plantation tours.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Which is the best hill station near Dharmasthala for a weekend trip?',
        answer: 'Chikmagalur and Mudigere are the closest and most popular hill stations reachable within 2 hours.'
      }
    ]
  }),

  // 12. family attractions near dharmasthala
  createBlogArticle({
    slug: 'family-attractions-near-dharmasthala',
    keyword: 'family attractions near dharmasthala',
    title: 'Family-Friendly Attractions Near Dharmasthala – Visitor Guide',
    metaTitle: 'Family-Friendly Attractions Near Dharmasthala - Kid & Senior Guide',
    metaDescription: 'Discover family-friendly attractions near Dharmasthala. Theme spots, museums, peaceful parks, river ghats, and accessible temples for all age groups.',
    date: '2026-07-28',
    author: 'Family Travel Desk',
    readTime: '12 min read',
    category: 'Family Travel',
    featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    intro: 'Traveling with children and senior citizens requires destinations with easy walking paths, clean sanitation, informative exhibits, and serene environments.',
    sections: [
      {
        id: 'top-family-attractions',
        heading: '1. Top Family Sightseeing Attractions',
        body: 'Places suitable for multi-generational families:',
        bullets: [
          'Manjusha Museum: Captivates children with vintage cars, gramophones, and historical armor.',
          'Southadka Ganesha Temple: Open lawn layout where kids can walk freely while elders offer prayers.',
          'Netravati River Park: Clean riverside lawns ideal for family relaxation.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Are wheel chairs available at Dharmasthala temple premises?',
        answer: 'Yes, wheelchair assistance and senior citizen queues are provided by temple administration.'
      }
    ]
  }),

  // 13. waterfalls near dharmasthala
  createBlogArticle({
    slug: 'waterfalls-near-dharmasthala',
    keyword: 'waterfalls near dharmasthala',
    title: 'Beautiful Waterfalls Near Dharmasthala – Monsoon & Nature Guide',
    metaTitle: '7 Beautiful Waterfalls Near Dharmasthala - Trekking & Nature',
    metaDescription: 'Explore spectacular waterfalls near Dharmasthala. Didupe, Ermai, Bandaje Arbi, Charmadi roadside falls, safety tips, and best monsoon months.',
    date: '2026-07-28',
    author: 'Eco-Tourism Desk',
    readTime: '13 min read',
    category: 'Waterfalls',
    featuredImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    intro: 'Nestled at the foothills of Charmadi and Kudremukh ranges, the area surrounding Dharmasthala comes alive during monsoon with cascading jungle waterfalls.',
    sections: [
      {
        id: 'top-waterfalls-list',
        heading: '1. Must-Visit Waterfalls Near Dharmasthala',
        body: 'Top natural cascades breakdown:',
        bullets: [
          'Didupe Waterfalls (30 km): Multi-tiered cascade dropping into a pristine freshwater pool.',
          'Ermai Waterfalls (25 km): Hidden waterfall featuring natural stone ledges behind falling water curtains.',
          'Charmadi Ghat Roadside Falls (28 km): Scenic waterfalls accessible right along the mountain highway.',
          'Bandaje Arbi Falls (35 km): Majestic cliffside waterfall requiring a 7 km trekking permit.'
        ]
      },
      {
        id: 'waterfall-safety-tips',
        heading: '2. Essential Safety Guidelines for Visitors',
        body: 'Precautionary measures for waterfall visits:',
        bullets: [
          'Beware of Slippery Rocks: Wear sturdy grip footwear while navigating wet riverbed boulders.',
          'Check Stream Flow During Heavy Rains: Avoid stepping into deep currents during active monsoon downpours.',
          'Carry Trash Back: Keep pristine eco-sensitive forest zones litter-free.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Which is the closest waterfall to Dharmasthala?',
        answer: 'Ermai and Didupe waterfalls near Belthangady are the closest major waterfalls, located ~25–30 km away.'
      }
    ]
  }),

  // 14. hill stations near dharmasthala
  createBlogArticle({
    slug: 'hill-stations-near-dharmasthala',
    keyword: 'hill stations near dharmasthala',
    title: 'Hill Stations Near Dharmasthala Worth Visiting',
    metaTitle: 'Top Hill Stations Near Dharmasthala - Scenic Escapes',
    metaDescription: 'Discover charming hill stations near Dharmasthala. Chikmagalur, Kudremukh, Sakleshpur, Agumbe, distance, weather, and best travel routes.',
    date: '2026-07-28',
    author: 'Hill Travel Desk',
    readTime: '13 min read',
    category: 'Hill Stations',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Escape into cool mountain breezes, misty valleys, and sprawling tea/coffee estates by extending your Dharmasthala trip to nearby Western Ghats hill stations.',
    sections: [
      {
        id: 'hill-station-list',
        heading: '1. Top Hill Stations Near Dharmasthala',
        body: 'Popular mountain destinations:',
        bullets: [
          'Charmadi Ghat (25 km): Instant mountain pass with dramatic drop-offs and cloud-covered peaks.',
          'Chikmagalur (85 km): The coffee capital of Karnataka, home to Mullayanagiri and Baba Budangiri.',
          'Sakleshpur (75 km): Famous for Bisle Ghat viewpoint, green railway treks, and star-shaped Manjarabad Fort.',
          'Agumbe (120 km): The "Cherrapunji of the South," renowned for fiery sunsets and rainforest research.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Which hill station is closest to Dharmasthala?',
        answer: 'Charmadi Ghat viewpoints (25 km) and Mudigere/Sakleshpur (60–75 km) are the closest mountain retreats.'
      }
    ]
  }),

  // 15. nature places near dharmasthala
  createBlogArticle({
    slug: 'nature-places-near-dharmasthala',
    keyword: 'nature places near dharmasthala',
    title: 'Best Nature Destinations Near Dharmasthala – Eco Guide',
    metaTitle: 'Best Nature Destinations Near Dharmasthala - Eco & Wildlife',
    metaDescription: 'Explore top nature places near Dharmasthala. River banks, forest reserves, botanical gardens, wildlife zones, and peaceful green spots.',
    date: '2026-07-28',
    author: 'Nature Explorer Desk',
    readTime: '12 min read',
    category: 'Nature',
    featuredImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    intro: 'Beyond temple rituals, the ecosystem surrounding Dharmasthala is blessed with evergreen forest cover, sacred groves, and clean river systems.',
    sections: [
      {
        id: 'nature-spots-list',
        heading: '1. Top Nature & Eco-Tourism Spots',
        body: 'Serene nature escapes:',
        bullets: [
          'Netravati River Basin: Lush riverbanks with peaceful bamboo groves and birdwatching.',
          'Dharmasthala Herbal & Botanical Garden: Preserving hundreds of rare Western Ghats medicinal plants.',
          'Charmadi Forest Reserve: Dense biodiversity zone home to endemic flora and fauna.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Are there nature walks organized in Dharmasthala?',
        answer: 'Visitors can stroll through the SDM Herbal Garden and along Netravati riverbanks independently.'
      }
    ]
  }),

  // 16. dharmasthala guide
  createBlogArticle({
    slug: 'dharmasthala-guide',
    keyword: 'dharmasthala guide',
    title: 'Complete Dharmasthala Guide for First-Time Visitors',
    metaTitle: 'Complete Dharmasthala Visitor Guide - Everything You Need to Know',
    metaDescription: 'Complete guide to Sri Kshetra Dharmasthala. Temple timings, dress code, room booking, free meals, local transportation, and history.',
    date: '2026-07-28',
    author: 'Pilgrim Support Desk',
    readTime: '15 min read',
    category: 'Visitor Guide',
    featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    intro: 'Sri Kshetra Dharmasthala is a world-renowned temple town where charity, faith, justice, and spiritual harmony converge under the benevolent presence of Lord Manjunatha Swamy and Heggade family lineage.',
    sections: [
      {
        id: 'four-daanas',
        heading: '1. The Core Philosophy: The Four Pillars of Charity (Daana)',
        body: 'Dharmasthala is globally unique for practicing four sacred virtues:',
        bullets: [
          'Annadaana: Serving free, nutritious meals to over 30,000 pilgrims daily at Annapoorna hall.',
          'Abhayadaana: Providing shelter, security, and dispute resolution through traditional arbitration (Heggade\'s Nyaayadaana).',
          'Aushadhadaana: Free medical care and healthcare facilities across SDM hospitals.',
          'Vidyadaana: Establishing top educational institutions across Karnataka.'
        ]
      },
      {
        id: 'temple-essentials',
        heading: '2. Temple Darshan & Practical Visitor Essentials',
        body: 'Essential rules for every pilgrim:',
        bullets: [
          'Darshan Timings: Morning (6:30 AM – 2:00 PM) and Evening (7:00 PM – 8:30 PM).',
          'Strict Dress Code: Men must remove shirts and vests before entering inner sanctum; traditional dhotis required. Women must wear sarees or salwar kameez.',
          'Free Meal Timings: Annapoorna hall serves lunch from 11:00 AM to 3:30 PM and dinner from 7:00 PM to 10:00 PM.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Who is the present Dharmadhikari of Dharmasthala?',
        answer: 'Dr. D. Veerendra Heggade is the 21st Dharmadhikari of Sri Kshetra Dharmasthala.'
      }
    ]
  }),

  // 17. dharmasthala travel guide
  createBlogArticle({
    slug: 'dharmasthala-travel-guide',
    keyword: 'dharmasthala travel guide',
    title: 'Ultimate Dharmasthala Travel Guide – How to Reach, Stay & See',
    metaTitle: 'Ultimate Dharmasthala Travel Guide - Reach, Stay & Timings',
    metaDescription: 'Ultimate travel guide to Dharmasthala. Bus routes, nearest railway station, airport connectivity, guest house booking, and travel itinerary.',
    date: '2026-07-28',
    author: 'Travel Planner Desk',
    readTime: '15 min read',
    category: 'Travel Guide',
    featuredImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    intro: 'Planning a trip to Dharmasthala requires knowing the best transport connections, staying options, and temple customs to ensure a seamless yatra.',
    sections: [
      {
        id: 'how-to-reach',
        heading: '1. How to Reach Dharmasthala by Road, Rail & Air',
        body: 'Comprehensive transit options:',
        bullets: [
          'By Bus: Excellent direct KSRTC bus service from Bangalore (300 km), Mysore (210 km), Mangalore (75 km), and Hubli.',
          'By Train: Nearest railway station is Subrahmanya Road (SBHR) at 50 km, or Mangalore Central/Junction (75 km).',
          'By Flight: Mangalore International Airport (IXE) is the closest airport, located 65 km away.'
        ]
      },
      {
        id: 'stay-and-food',
        heading: '2. Accommodation & Food Facilities',
        body: 'Where to lodge and dine during your visit:',
        bullets: [
          'SDM Trust Guest Houses: Clean, subsidized room accommodations (Netravathi, Ganga, Saket, Vaishali).',
          'Annapoorna Mass Dining: Free satvik meals prepared in ultra-modern hygienic steam kitchens.',
          'Private Hotels: Numerous private AC hotels available in Dharmasthala and nearby Ujire.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Which is the nearest railway station to Dharmasthala?',
        answer: 'Subrahmanya Road (SBHR) station at Yadakumari/Subramanya is closest (50 km), followed by Mangalore (75 km).'
      }
    ]
  }),

  // 18. dharmasthala itinerary
  createBlogArticle({
    slug: 'dharmasthala-itinerary',
    keyword: 'dharmasthala itinerary',
    title: 'Perfect Dharmasthala Itinerary for 1 & 2 Days – Trip Plans',
    metaTitle: 'Perfect Dharmasthala Itinerary - 1 Day & 2 Days Detailed Plans',
    metaDescription: 'Plan your trip with the best 1-day and 2-day Dharmasthala itineraries. Optimised schedules for temple darshan, sightseeing, meals, and nearby tours.',
    date: '2026-07-28',
    author: 'Itinerary Specialist Desk',
    readTime: '14 min read',
    category: 'Itinerary',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Choose between a focused 1-day pilgrimage plan or an extended 2-day sightseeing itinerary to get the most out of your visit to Sri Kshetra Dharmasthala.',
    sections: [
      {
        id: 'one-day-plan',
        heading: '1. Option A: Concentrated 1-Day Express Itinerary',
        body: 'Ideal for short weekend visits:',
        bullets: [
          'Morning: Netravati holy bath + Lord Manjunatha Temple darshan.',
          'Midday: Bahubali Statue & Chandranatha Basadi at Ratnagiri Hill.',
          'Lunch: Free Annapoorna Mahaprasadam.',
          'Afternoon: Manjusha Car Museum + Southadka Ganesha Temple.'
        ]
      },
      {
        id: 'two-day-plan',
        heading: '2. Option B: Relaxed 2-Day Extended Circuit',
        body: 'Ideal for families and elder pilgrims:',
        bullets: [
          'Day 1: Arrive, check in SDM Guest House, Sri Manjunatha darshan, Annapoorna meals, evening museum stroll.',
          'Day 2: Morning travel to Kukke Subramanya Temple (53 km), return via Charmadi Ghat views, evening shopping for local spatial delicacies.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Which itinerary is recommended for families with young children?',
        answer: 'The 2-day itinerary is best as it provides ample rest periods between darshan lines and sightseeing.'
      }
    ]
  }),

  // 19. first time visit dharmasthala
  createBlogArticle({
    slug: 'first-time-visit-dharmasthala',
    keyword: 'first time visit dharmasthala',
    title: 'First-Time Visitor Guide to Dharmasthala – Smart Checklist',
    metaTitle: 'First-Time Visitor Guide to Dharmasthala - Essential Tips',
    metaDescription: 'First time visiting Dharmasthala? Here is your complete guide covering temple customs, dress code, room booking, queue systems, and dos and don\'ts.',
    date: '2026-07-28',
    author: 'First-Timer Helper Desk',
    readTime: '13 min read',
    category: 'Visitor Guide',
    featuredImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    intro: 'Visiting Sri Kshetra Dharmasthala for the very first time can feel overwhelming given the large footfall and unique traditions. Use this step-by-step beginner checklist for a stress-free experience.',
    sections: [
      {
        id: 'essential-dos-donts',
        heading: '1. Critical Rules & Traditions (Dos & Don\'ts)',
        body: 'Must-know guidelines before stepping inside:',
        bullets: [
          'Do wear traditional clothing: Men must remove upper garments (shirts/t-shirts/vests) before entering the sanctum.',
          'Do deposit electronic gadgets: Mobile phones and cameras are prohibited inside the inner temple complex.',
          'Don\'t wear leather items: Leather belts and wallets should be left in your room or vehicle.',
          'Do carry cash: Local parking, small shops, and certain offerings operate on cash transactions.'
        ]
      },
      {
        id: 'step-by-step-arrival',
        heading: '2. Step-by-Step Arrival Procedure',
        body: 'What to do as soon as you arrive in Dharmasthala:',
        bullets: [
          'Step 1: Head directly to your pre-booked SDM Guest House reception or counter.',
          'Step 2: Keep Government ID proof ready for all adult guests.',
          'Step 3: Refresh and proceed to Netravati River for holy bath or temple queue complex.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Are electronic lockers available near Dharmasthala temple?',
        answer: 'Yes, secure mobile counter lockers are operated near the temple entrance for depositing phones and cameras.'
      }
    ]
  }),

  // 20. dharmasthala temple rules
  createBlogArticle({
    slug: 'dharmasthala-temple-rules',
    keyword: 'dharmasthala temple rules',
    title: 'Dharmasthala Temple Rules Every Visitor Should Know',
    metaTitle: 'Dharmasthala Temple Rules - Dress Code, Timings & Customs',
    metaDescription: 'Important Dharmasthala temple rules and regulations. Learn dress code requirements, photography bans, queue rules, entry guidelines, and pooja etiquette.',
    date: '2026-07-28',
    author: 'Temple Customs Desk',
    readTime: '12 min read',
    category: 'Temple Rules',
    featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    intro: 'Sri Manjunatha Swamy Temple maintains high spiritual purity and discipline. Understanding and respecting these rules guarantees a peaceful pilgrimage for everyone.',
    sections: [
      {
        id: 'dress-code-rules',
        heading: '1. Mandatory Dress Code Rules',
        body: 'Strict dress code enforcement at the main shrine:',
        bullets: [
          'For Men: Dhotis or trousers allowed. Men MUST remove shirts, t-shirts, vests, and socks prior to sanctum entry.',
          'For Women: Sarees, salwar kameez, or half-sarees. Shorts, skirts, jeans, and sleeveless tops are strictly forbidden.',
          'For Children: Clean traditional wear recommended.'
        ]
      },
      {
        id: 'general-temple-guidelines',
        heading: '2. Security & Behavioral Regulations',
        body: 'General conduct guidelines within temple premises:',
        bullets: [
          'No Photography inside the sanctum sanctorum or queue halls.',
          'Footwear Restrictions: Leave shoes/sandals at designated footwear deposit counters.',
          'Maintain Silence and orderly queue behavior inside temple corridors.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Are jeans allowed for men inside Dharmasthala temple?',
        answer: 'Jeans are permitted for men, provided they remove their shirt/vest before entering the inner sanctum area.'
      }
    ]
  }),

  // 21. dharmasthala check in time
  createBlogArticle({
    slug: 'dharmasthala-check-in-time',
    keyword: 'dharmasthala check in time',
    title: 'Dharmasthala Room Check-In Time Guide – Rules & Early Check-In',
    metaTitle: 'Dharmasthala Room Check-In Time Guide - Policy & Tips',
    metaDescription: 'Complete guide to Dharmasthala room check-in times. SDM trust guest house policies, 24-hour check-in rules, grace periods, and late arrival tips.',
    date: '2026-07-28',
    author: 'Accommodation Desk',
    readTime: '12 min read',
    category: 'Room Booking',
    featuredImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    intro: 'Navigating room check-in times at SDM guest houses and private hotels in Dharmasthala ensures you don\'t face delays or booking cancellations upon arrival.',
    sections: [
      {
        id: 'standard-checkin-policy',
        heading: '1. Standard SDM Guest House Check-In Policy',
        body: 'Important time slots and guidelines:',
        bullets: [
          '24-Hour Cycle System: Most SDM trust guest house reservations operate on a 24-hour cycle from your specified check-in hour.',
          'Mandatory ID Verification: Original Aadhaar Card or Passport must be shown at the reception desk.',
          'Grace Period: Online room reservations are usually held for 2 hours past scheduled arrival before auto-releasing.'
        ]
      },
      {
        id: 'early-checkin-hacks',
        heading: '2. Early Arrival & Late Night Check-In Guidance',
        body: 'What to do if arriving outside standard hours:',
        bullets: [
          'Late Night Arrivals: Receptions in major guest houses (Netravathi, Ganga) operate 24/7.',
          'Early Morning Waiting Halls: Free luggage holding centers and cloakrooms are available if your room is being cleaned.'
        ]
      }
    ],
    faqs: [
      {
        question: 'What happens if I reach Dharmasthala late at night for room check-in?',
        answer: 'SDM guest house reception counters remain open 24 hours. Inform reception in advance if your bus is delayed.'
      }
    ]
  }),

  // 22. dharmasthala check out time
  createBlogArticle({
    slug: 'dharmasthala-check-out-time',
    keyword: 'dharmasthala check out time',
    title: 'Dharmasthala Room Check-Out Time Guide – Extension Rules',
    metaTitle: 'Dharmasthala Room Check-Out Time Guide - Extension & Rules',
    metaDescription: 'Guide to Dharmasthala room check-out times. SDM trust guest house policies, extension requests, luggage storage facilities, and late charges.',
    date: '2026-07-28',
    author: 'Guest Services Desk',
    readTime: '12 min read',
    category: 'Room Booking',
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    intro: 'Properly timing your room check-out prevents overstay penalties and allows you to enjoy final temple poojas or shopping without hassle.',
    sections: [
      {
        id: 'checkout-rules-times',
        heading: '1. Check-Out Timings & Overstay Regulations',
        body: 'Key check-out policies:',
        bullets: [
          'Strict 24-Hour Limit: Occupancy is strictly calculated from the time of check-in.',
          'Extension Limits: Room extensions beyond 24 hours depend on booking demand and require prior approval from the information office.',
          'Key Return: Hand over room keys directly at reception to receive your caution deposit refund.'
        ]
      },
      {
        id: 'luggage-storage-after-checkout',
        heading: '2. Luggage Cloakrooms After Check-Out',
        body: 'Where to store luggage after vacating your room:',
        bullets: [
          'Central Luggage Cloakroom: Located near the bus stand and main temple complex for storing bags safely while taking darshan.',
          'Clean Washroom Complexes: Public bath houses are available near the bus stand for refreshing before departure.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is luggage cloakroom facility free after room check-out?',
        answer: 'A nominal fee of ₹10–₹20 per bag is charged at the central luggage cloakroom.'
      }
    ]
  })
];
