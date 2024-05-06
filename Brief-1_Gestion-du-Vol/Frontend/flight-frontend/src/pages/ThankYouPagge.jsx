import React from 'react';
import { useBooking } from '../components/BookingContext'; // Ensure this import path matches your setup
import { useNavigate } from 'react-router-dom';

function ThankYouPage() {
  const { bookingDetails } = useBooking();
  const navigate = useNavigate();


  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Thank You for Your Booking!</h1>
        <p className="lead">Please check your email for further instructions and booking details.</p>
        <div className="card mt-4 mx-auto" style={{ maxWidth: '600px' }}>
          <div className="card-body">
            <h5 className="card-title">Flight Information</h5>
            <p className="card-text"><strong>Flight Number:</strong> {bookingDetails?.vol_id}</p>
            <p className="card-text"><strong>From:</strong> {bookingDetails?.from}</p>
            <p className="card-text"><strong>To:</strong> {bookingDetails?.destination}</p>
            <p className="card-text"><strong>Departure Time:</strong> {bookingDetails?.departDate}</p>
            <p className="card-text"><strong>Arrival Time:</strong> {bookingDetails?.returnDate}</p>
            <p className="card-text"><strong>Price:</strong> ${bookingDetails?.totalAmount}</p>
          </div>
        </div>
        <button className="btn btn-primary mt-4" onClick={() =>{navigate('/')} }>Return to home page </button>

      </div>
    </div>
  );
}

export default ThankYouPage;
