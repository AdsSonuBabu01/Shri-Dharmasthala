import React, { createContext, useContext, useState } from 'react';
import { QuickBookingModal } from '../components/QuickBookingModal';

interface BookingModalContextType {
  openQuickBookingModal: (roomType?: string) => void;
  closeQuickBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType>({
  openQuickBookingModal: () => {},
  closeQuickBookingModal: () => {},
});

export const BookingModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [roomType, setRoomType] = useState<string | undefined>(undefined);

  const openQuickBookingModal = (selectedRoomType?: string) => {
    setRoomType(selectedRoomType);
    setIsOpen(true);
  };

  const closeQuickBookingModal = () => {
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider value={{ openQuickBookingModal, closeQuickBookingModal }}>
      {children}
      <QuickBookingModal
        isOpen={isOpen}
        onClose={closeQuickBookingModal}
        initialRoomType={roomType}
      />
    </BookingModalContext.Provider>
  );
};

export const useQuickBooking = () => useContext(BookingModalContext);
