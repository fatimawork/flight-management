import React from 'react';
import { useBooking } from '../components/BookingContext';
import { Link } from 'react-router-dom';

function Checkout() {
    const { bookingDetails } = useBooking();
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Booking Summary</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Flight Details</h5>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6><i className="fas fa-plane-departure"></i> From: {bookingDetails.from}</h6>
                        <h6><i className="fas fa-plane-arrival"></i> To: {bookingDetails.destination}</h6>
                    </div>
                    <div className="mb-3">
                        <p className="card-text"><strong>Departure Date:</strong> {bookingDetails.departDate}</p>
                        <p className="card-text"><strong>Return Date:</strong> {bookingDetails.returnDate}</p>
                    </div>
                    <div className="mb-3">
                        <p className="card-text"><strong>Passengers:</strong> {bookingDetails.passengers}</p>
                        <p className="card-text"><strong>Total Amount:</strong> ${bookingDetails.totalAmount}</p>
                    </div>
                    <Link to="/payment" className="btn btn-primary btn-block">Proceed to Payment</Link>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
