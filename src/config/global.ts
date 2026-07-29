/**
 * SHRI KSHETRA DHARMASTHALA ONLINE ROOM BOOKING
 * Global Single Source of Truth Configuration
 * Updates here update the entire website automatically.
 */

export const GLOBAL_CONFIG = {
  businessName: "SHRI KSHETRA DHARMASTHALA ONLINE ROOM BOOKING",
  shortName: "Dharmasthala Room Booking",
  tagline: "Official Pilgrimage Yatri Nivas & Room Reservation Assistance",
  
  // Contact Details
  phoneDisplay: "+91 99034 90617",
  phoneNumber: "919903490617",
  phoneTel: "tel:+919903490617",
  
  // WhatsApp Configuration
  whatsappNumber: "+91 99034 90617",
  whatsappLink: "https://wa.me/919903490617",
  
  // Instant Booking (WhatsApp) prefilled link
  instantBookingText: `Hello, I want Instant Same Day Room Booking.\n\nName:\nMobile:\nCheck-in Date:\nNumber of Guests:\nRoom Type:\nSpecial Request:\n\nPlease confirm room availability.`,
  get instantBookingLink() {
    return `https://wa.me/919903490617?text=${encodeURIComponent(this.instantBookingText)}`;
  },

  bhaktaNiwasMessage: "Hello, I would like to book a Bhakta Niwas room for today. Please share availability and booking details.",
  get bhaktaNiwasLink() {
    return `https://wa.me/919903490617?text=${encodeURIComponent(this.bhaktaNiwasMessage)}`;
  },

  // One Day Advance Booking URL (Must open in new tab)
  googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_W7Aky0QOl9LCL08sFdKBV3XJKf-hQ6YXwWjkJw7I-3BIRA/viewform",
  get advanceBookingLink() {
    return "https://docs.google.com/forms/d/e/1FAIpQLSc_W7Aky0QOl9LCL08sFdKBV3XJKf-hQ6YXwWjkJw7I-3BIRA/viewform";
  },
  
  // Location & Address
  location: "Shri Kshetra Dharmasthala",
  address: "Shri Kshetra Dharmasthala, Belthangady Taluk, Dakshina Kannada District, Karnataka - 574216, India",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.578652431415!2d75.37184221738282!3d12.946636700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4b73b5e43a9b1%3A0xb351658b4f17f4e9!2sShri%20Kshetra%20Dharmasthala%20Manjunatha%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  
  // Hours & Timings
  officeHours: "24 Hours Open (Reception & Pilgrim Yatri Nivas Assistance)",
  templeTimings: "Morning: 6:30 AM – 2:00 PM | Evening: 5:00 PM – 8:30 PM",
  annadanaTimings: "Free Meal (Annapoorna Chatra): 11:30 AM – 2:00 PM & 7:00 PM – 8:30 PM",
  
  // SEO Defaults
  siteUrl: "https://shridharamasthala.org",
  defaultMetaTitle: "Shri Kshetra Dharmasthala Online Room Booking | Temple Yatri Nivas Stay",
  defaultMetaDescription: "Book rooms online for Shri Kshetra Dharmasthala temple visit. AC & Non-AC rooms, family bedrooms, yatri nivas options with 24x7 hot water & parking near temple.",
  keywords: [
    "dharmasthala room booking",
    "dharmasthala accommodation booking",
    "dharmasthala temple room booking",
    "dharmasthala free room booking",
    "rooms in dharmasthala",
    "dharmasthala room booking online",
    "hotels in dharmasthala",
    "dharmasthala accommodation",
    "lodges in dharmasthala",
    "dharmasthala temple rooms",
    "yatri nivas dharmasthala",
    "dharmasthala guest house booking"
  ]
};
