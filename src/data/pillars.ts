import { PillarData } from '../types';
import { p1_dharmasthala_room_booking } from './pillars/p1_dharmasthala_room_booking';
import { p2_dharmasthala_accommodation_booking } from './pillars/p2_dharmasthala_accommodation_booking';
import { p3_dharmasthala_temple_room_booking } from './pillars/p3_dharmasthala_temple_room_booking';
import { p4_dharmasthala_free_room_booking } from './pillars/p4_dharmasthala_free_room_booking';
import { p5_rooms_in_dharmasthala } from './pillars/p5_rooms_in_dharmasthala';
import { p6_dharmasthala_room_booking_online } from './pillars/p6_dharmasthala_room_booking_online';
import { p7_hotels_in_dharmasthala } from './pillars/p7_hotels_in_dharmasthala';
import { p8_dharmasthala_accommodation } from './pillars/p8_dharmasthala_accommodation';
import { p9_lodges_in_dharmasthala } from './pillars/p9_lodges_in_dharmasthala';
import { p10_dharmasthala_temple_rooms } from './pillars/p10_dharmasthala_temple_rooms';

export const PILLARS_DATA: Record<string, PillarData> = {
  'dharmasthala-room-booking': p1_dharmasthala_room_booking,
  'dharmasthala-accommodation-booking': p2_dharmasthala_accommodation_booking,
  'dharmasthala-temple-room-booking': p3_dharmasthala_temple_room_booking,
  'dharmasthala-free-room-booking': p4_dharmasthala_free_room_booking,
  'rooms-in-dharmasthala': p5_rooms_in_dharmasthala,
  'dharmasthala-room-booking-online': p6_dharmasthala_room_booking_online,
  'hotels-in-dharmasthala': p7_hotels_in_dharmasthala,
  'dharmasthala-accommodation': p8_dharmasthala_accommodation,
  'lodges-in-dharmasthala': p9_lodges_in_dharmasthala,
  'dharmasthala-temple-rooms': p10_dharmasthala_temple_rooms
};

export const ALL_PILLAR_SLUGS = Object.keys(PILLARS_DATA);

export function getPillarData(slug: string): PillarData | undefined {
  const normalized = slug.toLowerCase().replace(/^\/|\/$/g, '');
  if (PILLARS_DATA[normalized]) {
    return PILLARS_DATA[normalized];
  }
  if (normalized === 'hotels-near-dharmasthala-temple') {
    return PILLARS_DATA['hotels-in-dharmasthala'] || PILLARS_DATA['dharmasthala-room-booking'];
  }
  return undefined;
}
