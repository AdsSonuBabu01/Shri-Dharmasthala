import React, { useState, useEffect } from 'react';
import { X, User, Phone, Calendar, Users, Wind, Bed, Home as HomeIcon, MessageSquare, AlertCircle } from 'lucide-react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { GLOBAL_CONFIG } from '../config/global';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomType?: string;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomType,
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);
  const [guestsCount, setGuestsCount] = useState('2 Guests');
  const [acPreference, setAcPreference] = useState('AC Room');
  const [roomType, setRoomType] = useState(initialRoomType || 'Double Bed Room');
  const [roomsCount, setRoomsCount] = useState('1 Room');
  const [specialRequest, setSpecialRequest] = useState('');

  const [errors, setErrors] = useState<{ fullName?: string; mobileNumber?: string; checkInDate?: string; checkOutDate?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  // Sync initialRoomType when passed
  useEffect(() => {
    if (initialRoomType) {
      setRoomType(initialRoomType);
    }
  }, [initialRoomType]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: { fullName?: string; mobileNumber?: string; checkInDate?: string; checkOutDate?: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters)';
    }

    const cleanMobile = mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!checkInDate) {
      newErrors.checkInDate = 'Please select a check-in date';
    }

    if (!checkOutDate) {
      newErrors.checkOutDate = 'Please select a check-out date';
    } else if (checkInDate && checkOutDate < checkInDate) {
      newErrors.checkOutDate = 'Check-out date cannot be earlier than check-in date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    // Format WhatsApp message
    const formattedMessage = `Hello, I want Instant Same Day Room Booking.

Full Name: ${fullName.trim()}
Mobile Number: ${mobileNumber.trim()}
Check-in Date: ${checkInDate}
Check-out Date: ${checkOutDate}
Number of Guests: ${guestsCount}
AC / Non-AC Preference: ${acPreference}
Room Type: ${roomType}
Number of Rooms: ${roomsCount}
Special Request: ${specialRequest.trim() || 'None'}

Please confirm room availability and booking details.`;

    // Attempt to save inquiry in Firestore (non-blocking if offline/guest)
    try {
      await addDoc(collection(db, 'bookingInquiries'), {
        userId: 'guest_quick_modal',
        guestName: fullName.trim(),
        phone: mobileNumber.trim(),
        checkInDate,
        checkOutDate,
        roomType: `${roomType} (${acPreference}) - ${roomsCount}`,
        guestCount: parseInt(guestsCount) || 2,
        status: 'pending',
        specialRequest: specialRequest.trim(),
        createdAt: new Date().toISOString(),
      });
    } catch (err) {
      console.log('Saved booking locally for WhatsApp redirect');
    }

    // Open WhatsApp URL
    const whatsappUrl = `https://wa.me/919903490617?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitting(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border-2 border-amber-300 text-gray-900 overflow-hidden transform transition-all duration-300 scale-100 max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Banner */}
        <div className="absolute top-0 left-0 right-0 h-2 maroon-gradient-bg"></div>

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-temple-maroon tracking-tight flex items-center gap-2">
              <span>🏨</span>
              <span>Quick Booking Form</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Fill in your stay details to continue via WhatsApp
            </p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-full bg-amber-50 text-gray-600 hover:text-gray-900 hover:bg-amber-100 transition focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Form Content - Scrollable */}
        <form onSubmit={handleSubmit} className="overflow-y-auto space-y-3.5 pr-1 text-left flex-1">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-temple-maroon" />
              <span>Full Name *</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Kumar"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) setErrors({ ...errors, fullName: undefined });
              }}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition ${
                errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:ring-2 focus:ring-amber-500'
              }`}
            />
            {errors.fullName && (
              <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-temple-maroon" />
              <span>Mobile Number *</span>
            </label>
            <input
              type="tel"
              required
              placeholder="10-digit mobile number"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
                if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: undefined });
              }}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition ${
                errors.mobileNumber ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:ring-2 focus:ring-amber-500'
              }`}
            />
            {errors.mobileNumber && (
              <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.mobileNumber}</span>
              </p>
            )}
          </div>

          {/* Check-in & Check-out Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-temple-maroon" />
                <span>Check-in Date *</span>
              </label>
              <input
                type="date"
                required
                min={today}
                value={checkInDate}
                onChange={(e) => {
                  setCheckInDate(e.target.value);
                  if (errors.checkInDate) setErrors({ ...errors, checkInDate: undefined });
                }}
                className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm bg-white outline-none transition ${
                  errors.checkInDate ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:ring-2 focus:ring-amber-500'
                }`}
              />
              {errors.checkInDate && (
                <p className="text-[11px] text-red-600 font-semibold mt-1">{errors.checkInDate}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-temple-maroon" />
                <span>Check-out Date *</span>
              </label>
              <input
                type="date"
                required
                min={checkInDate || today}
                value={checkOutDate}
                onChange={(e) => {
                  setCheckOutDate(e.target.value);
                  if (errors.checkOutDate) setErrors({ ...errors, checkOutDate: undefined });
                }}
                className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm bg-white outline-none transition ${
                  errors.checkOutDate ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:ring-2 focus:ring-amber-500'
                }`}
              />
              {errors.checkOutDate && (
                <p className="text-[11px] text-red-600 font-semibold mt-1">{errors.checkOutDate}</p>
              )}
            </div>
          </div>

          {/* Number of Guests & AC/Non-AC Preference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-temple-maroon" />
                <span>Number of Guests</span>
              </label>
              <select
                value={guestsCount}
                onChange={(e) => setGuestsCount(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests">4 Guests</option>
                <option value="5 Guests">5 Guests</option>
                <option value="6 Guests">6 Guests</option>
                <option value="7 Guests">7 Guests</option>
                <option value="8 Guests">8 Guests</option>
                <option value="10+ Guests">10+ Guests</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                <Wind className="w-3.5 h-3.5 text-temple-maroon" />
                <span>AC / Non-AC Preference</span>
              </label>
              <select
                value={acPreference}
                onChange={(e) => setAcPreference(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="AC Room">AC Room</option>
                <option value="Non-AC Room">Non-AC Room</option>
                <option value="Any Available">Any Available</option>
              </select>
            </div>
          </div>

          {/* Room Type & Number of Rooms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-temple-maroon" />
                <span>Room Type</span>
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="Double Bed Room">Double Bed Room</option>
                <option value="Triple Bed Room">Triple Bed Room</option>
                <option value="4 Bed Room">4 Bed Room</option>
                <option value="5 Bed Room">5 Bed Room</option>
                <option value="Family Bedroom (6+ Guests)">Family Bedroom (6+ Guests)</option>
                <option value="Netravathi Guest House">Netravathi Guest House</option>
                <option value="Saketha Yatri Block">Saketha Yatri Block</option>
                <option value="Any Available Room">Any Available Room</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                <HomeIcon className="w-3.5 h-3.5 text-temple-maroon" />
                <span>Number of Rooms</span>
              </label>
              <select
                value={roomsCount}
                onChange={(e) => setRoomsCount(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="1 Room">1 Room</option>
                <option value="2 Rooms">2 Rooms</option>
                <option value="3 Rooms">3 Rooms</option>
                <option value="4 Rooms">4 Rooms</option>
                <option value="5 Rooms">5 Rooms</option>
                <option value="5+ Rooms">5+ Rooms</option>
              </select>
            </div>
          </div>

          {/* Special Request */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5 text-temple-maroon" />
              <span>Special Request (Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Ground floor preferred, late night arrival"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Submit Button: Continue to WhatsApp */}
          <div className="pt-2 shrink-0">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl hover:shadow-emerald-600/20 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <MessageSquare className="w-5 h-5 text-amber-300 fill-amber-300 shrink-0" />
              <span>{submitting ? 'Redirecting...' : 'Continue to WhatsApp'}</span>
            </button>
            <p className="text-[11px] text-gray-500 text-center mt-2">
              Opens WhatsApp with your pre-filled room booking request to +91 99034 90617
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
