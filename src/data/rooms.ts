import { RoomOption } from '../types';
import singleRoomImg from '../assets/images/room_single_bed_1784995582708.jpg';
import doubleRoomImg from '../assets/images/room_double_bed_1784995598414.jpg';
import tripleRoomImg from '../assets/images/room_triple_bed_1784995611061.jpg';
import fourBedRoomImg from '../assets/images/room_four_bed_1784995623968.jpg';
import fiveBedRoomImg from '../assets/images/room_five_bed_1784995646069.jpg';
import familyRoomImg from '../assets/images/room_family_suite_1784995660360.jpg';
import dormitoryRoomImg from '../assets/images/room_dormitory_1784995676747.jpg';

export const ROOM_OPTIONS: RoomOption[] = [
  {
    id: 'single-bed-room',
    name: 'Single Bed Room',
    slug: 'single-bed-room',
    category: 'Single',
    guestCapacity: '1 Guest',
    maxOccupancy: 'Max 1 Guest (1 Bed)',
    availabilityStatus: 'Available for Booking',
    acType: 'AC & Non-AC Available',
    description: 'Clean, peaceful single occupant room with exactly 1 single bed, attached modern bathroom, fresh linen, 24x7 hot water, and lift facility.',
    image: singleRoomImg,
    facilities: [
      '1 Single Bed with Clean Sheets & Pillow',
      'Attached Washroom with Modern Fittings',
      '24 Hours Solar & Geyser Hot Water',
      'Power Backup / Generator Support',
      'Ceiling Fan & Well-Ventilated Window',
      'Lift & Senior Citizen Accessibility'
    ],
    features: [
      '3-5 Mins walk to Lord Manjunatha Swamy Temple',
      'Quiet, Peaceful Environment for Individual Pilgrims',
      'CCTV Monitored Safe Yatri Building'
    ]
  },
  {
    id: 'double-bed-room',
    name: 'Double Bed Room',
    slug: 'double-bed-room',
    category: 'Double',
    guestCapacity: '2 Guests',
    maxOccupancy: 'Max 2 Guests (2 Beds)',
    availabilityStatus: 'Available for Booking',
    acType: 'AC & Non-AC Available',
    description: 'Ideal for couples, pilgrim pairs, or two family members. Clean, ventilated room with 2 beds, attached modern bathroom, 24x7 hot water, and lift facility.',
    image: doubleRoomImg,
    facilities: [
      '2 Separate Beds / Double Bed Setup',
      'Attached Bathroom with Modern Fittings',
      '24 Hours Solar & Geyser Hot Water',
      'Power Backup / Generator Support',
      'Clean Bed Sheets & Pillows',
      'Lift & Senior Citizen Accessibility'
    ],
    features: [
      '3-5 Mins walk to Kshetra Temple',
      'Quiet, Peaceful Temple Atmosphere',
      'CCTV Monitored Safe Yatri Building'
    ],
    isPopular: true
  },
  {
    id: 'triple-bed-room',
    name: 'Triple Bed Room',
    slug: 'triple-bed-room',
    category: 'Triple',
    guestCapacity: '3 Guests',
    maxOccupancy: 'Max 3 Guests (3 Beds)',
    availabilityStatus: 'Available for Booking',
    acType: 'AC & Non-AC Available',
    description: 'Spacious triple-occupancy room with exactly 3 distinct beds. Suited for small family pilgrimages or parents with children.',
    image: tripleRoomImg,
    facilities: [
      '3 Separate Comfortable Beds',
      'Attached Clean Washroom & Western/Indian Toilet',
      '24x7 Hot & Cold Water',
      'Purified RO Drinking Water on Floor',
      'Intercom / Front Desk Call Button',
      'Daily Cleaning & Housekeeping'
    ],
    features: [
      'Family-friendly environment',
      'Spacious storage wardrobe',
      'Elevator access for elders'
    ]
  },
  {
    id: 'four-bed-room',
    name: '4 Bed Room',
    slug: 'four-bed-room',
    category: '4-Bed',
    guestCapacity: '4 Guests',
    maxOccupancy: 'Max 4 Guests (4 Beds)',
    availabilityStatus: 'Available for Booking',
    acType: 'AC & Non-AC Available',
    description: 'Comfortable 4-bed family accommodation equipped with exactly 4 single beds, ample luggage space, and 24x7 hot water.',
    image: fourBedRoomImg,
    facilities: [
      '4 Individual Comfortable Beds',
      'Spacious En-suite Bathroom',
      '24x7 Hot Water Supply',
      'Seating Area & Luggage Table',
      'Power Generator Backup',
      'Ample Vehicle Parking Nearby'
    ],
    features: [
      'Ideal for family pilgrim groups',
      'Very close to Annapoorna Chatra dining',
      'Ventilated windows with fresh air'
    ],
    isPopular: true
  },
  {
    id: 'five-bed-room',
    name: '5 Bed Room',
    slug: 'five-bed-room',
    category: '5-Bed',
    guestCapacity: '5 Guests',
    maxOccupancy: 'Max 5 Guests (5 Beds)',
    availabilityStatus: 'Available for Booking',
    acType: 'AC & Non-AC Available',
    description: 'Perfect for group devotees and joint families. Features 5 comfortable beds, clean linen, attached washrooms, and round-the-clock water.',
    image: fiveBedRoomImg,
    facilities: [
      '5 Individual Comfortable Beds',
      'Attached Washrooms & Bath',
      'Continuous 24-Hour Hot Water',
      'Broad Walking Area Inside Room',
      'Ceiling Fans & Power Sockets',
      'Luggage Racks & Hangers'
    ],
    features: [
      'Convenient for 5 pilgrims',
      '24x7 Reception helpdesk',
      'Easy access to Car Parking'
    ]
  },
  {
    id: 'family-bedroom',
    name: 'Family Suite',
    slug: 'family-bedroom',
    category: 'Family',
    guestCapacity: '6 to 12 Guests',
    maxOccupancy: 'Max 6 to 12 Guests (Multiple Beds)',
    availabilityStatus: 'Available for Booking',
    acType: 'AC & Non-AC Available',
    description: 'Large family suite accommodation crafted for big families, bhajan mandalis, and group Yatra parties with multiple beds and double washrooms.',
    image: familyRoomImg,
    facilities: [
      'Multiple Comfortable Beds & Cot Arrangements',
      'Multiple Attached Bathrooms & Toilets',
      'Large Space for Family Luggage & Seva Attire',
      'Hot Water 24 Hours',
      'Full Security & CCTV Coverage',
      'Direct Elevator Access'
    ],
    features: [
      'Spacious environment for large groups',
      'Close to Kanyanadi Bathing Ghat & Temple',
      'Group booking friendly via WhatsApp & Form'
    ],
    isPopular: true
  },
  {
    id: 'dormitory-room',
    name: 'Dormitory Hall',
    slug: 'dormitory-room',
    category: 'Dormitory',
    guestCapacity: '10 to 30 Guests',
    maxOccupancy: 'Group Dormitory Layout (Multiple Cots)',
    availabilityStatus: 'Available for Booking',
    acType: 'Non-AC',
    description: 'Spacious and clean dormitory hall featuring neatly aligned individual cots, ideal for large tour buses, pilgrimage groups, and seva teams.',
    image: dormitoryRoomImg,
    facilities: [
      'Neatly Aligned Individual Cots with Linen',
      'Multiple Common Washrooms & Bathing Cubicles',
      '24x7 Hot Water Access',
      'Luggage Locker / Safe Storage Space',
      'Ceiling Fans & Ventilation',
      'RO Filtered Drinking Water Station'
    ],
    features: [
      'Excellent for pilgrimage tour groups',
      'Walking distance to Annapoorna Chatra',
      '24-Hour Security & Caretaker on Duty'
    ]
  }
];
