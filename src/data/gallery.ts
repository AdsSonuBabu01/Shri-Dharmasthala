import { GalleryItem } from '../types';
import singleRoomImg from '../assets/images/room_single_bed_1784995582708.jpg';
import doubleRoomImg from '../assets/images/room_double_bed_1784995598414.jpg';
import tripleRoomImg from '../assets/images/room_triple_bed_1784995611061.jpg';
import fourBedRoomImg from '../assets/images/room_four_bed_1784995623968.jpg';
import fiveBedRoomImg from '../assets/images/room_five_bed_1784995646069.jpg';
import familyRoomImg from '../assets/images/room_family_suite_1784995660360.jpg';
import dormitoryRoomImg from '../assets/images/room_dormitory_1784995676747.jpg';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-single-bed',
    title: 'Single Bed Room',
    category: 'Single Bed',
    imageUrl: singleRoomImg,
    description: 'Clean single occupant room with 1 single bed, attached modern bathroom, and 24x7 hot water.'
  },
  {
    id: 'g-double-bed',
    title: 'Double Bed Room (AC / Non-AC)',
    category: 'Double Bed',
    imageUrl: doubleRoomImg,
    description: 'Hygienic double bedroom with 2 beds, clean white linen, side tables, ceiling fan/AC, and attached washroom.'
  },
  {
    id: 'g-triple-bed',
    title: 'Triple Bed Family Room',
    category: 'Triple Bed',
    imageUrl: tripleRoomImg,
    description: 'Spacious triple bedroom suited for small family yatris, equipped with 3 comfortable cots.'
  },
  {
    id: 'g-4bed-room',
    title: '4 Bed Family Yatri Room',
    category: '4 Bed Room',
    imageUrl: fourBedRoomImg,
    description: 'Well-ventilated 4-bed family room with 4 beds, comfortable bedding, and attached bathroom.'
  },
  {
    id: 'g-5bed-room',
    title: '5 Bed Group Pilgrim Room',
    category: '5 Bed Room',
    imageUrl: fiveBedRoomImg,
    description: 'Economical 5-bed room for group yatris and joint families with attached washroom arrangements.'
  },
  {
    id: 'g-family-suite',
    title: 'Family Suite',
    category: 'Family Room',
    imageUrl: familyRoomImg,
    description: 'Expansive family suite accommodation with multiple cots, double bathrooms, and elevator accessibility.'
  },
  {
    id: 'g-dormitory-hall',
    title: 'Dormitory Hall Accommodation',
    category: 'Dormitory',
    imageUrl: dormitoryRoomImg,
    description: 'Clean and spacious pilgrim dormitory hall with neatly aligned individual cots for tour groups.'
  }
];
