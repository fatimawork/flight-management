import { createContext, useContext, useEffect, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
    const [bookingDetails, setBookingDetails] = useState(() => {
        // Retrieve stored item from local storage at initialization
        const saved = localStorage.getItem('bookingDetails');
        return saved ? JSON.parse(saved) : { from: '', destination: '', departDate: '', returnDate: '', passengers: '', totalAmount: 0, selectedFlight: null };
    });

    useEffect(() => {
        // Store booking details in local storage whenever they change
        localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    }, [bookingDetails]);

    const updateBookingDetails = (details) => {
        setBookingDetails(prevDetails => ({ ...prevDetails, ...details }));
    };

    return (
        <BookingContext.Provider value={{ bookingDetails, updateBookingDetails }}>
            {children}
        </BookingContext.Provider>
    );
};
