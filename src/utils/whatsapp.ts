import React from 'react';

export const WHATSAPP_PHONE_NUMBER = '919903490617';

export const GUEST_HOUSES_LIST = [
  'Netravathi Guest House',
  'Rajathadri Guest House',
  'Sannidhi Guest House',
  'Sahyadri Guest House',
  'Saketha Guest House',
  'Vaishali Guest House',
  'Gayathri Guest House',
  'Sharavathi Guest House',
  'Gangothri Guest House',
  'Manjunatha Guest House',
] as const;

export type GuestHouseName = typeof GUEST_HOUSES_LIST[number] | string;

/**
 * Generates the direct WhatsApp booking URL for a specific Guest House.
 * Format: Hello, I want to book a room in [Guest House Name]. Please share today's room availability, tariff, and booking details.
 */
export function getGuestHouseWhatsAppUrl(guestHouseName: GuestHouseName): string {
  const message = `Hello, I want to book a room in ${guestHouseName}. Please share today's room availability, room options, and booking details.`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Reusable JavaScript function to open WhatsApp instantly for a specific Guest House without page reload.
 */
export function openWhatsAppBooking(guestHouseName: GuestHouseName, event?: React.SyntheticEvent): void {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const url = getGuestHouseWhatsAppUrl(guestHouseName);
  window.open(url, '_blank', 'noopener,noreferrer');
}
