import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useBooking} from './BookingContext';

export default function ExtrasForm() {
  // State to manage selected extra and total amount
  const [selectedExtra, setSelectedExtra] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();
  const {bookingDetails, updateBookingDetails} = useBooking();

  // Function to handle selection change
  const handleExtraChange = (event) => {
    const selectedExtraValue = event.target.value;
    setSelectedExtra(selectedExtraValue);

    // Update total amount based on selected extra
    let newTotalAmount = 0;
    switch (selectedExtraValue) {
      case "travel_insurance":
        newTotalAmount = 50;
        break;
      case "in_flight_meal":
        newTotalAmount = 20;
        break;
      case "hotel_accommodation":
        newTotalAmount = 100;
        break;
      default:
        newTotalAmount = 0;
    }
    console.log(newTotalAmount+bookingDetails.totalAmount);
    setTotalAmount(newTotalAmount+bookingDetails.totalAmount);
  };

 // Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  // Redirect to payment page with total amount as query parameter
  updateBookingDetails({totalAmount});
  navigate('/checkout');
};

  return (
    <div className="container mt-5">
      <h1>Extras Selection</h1>
      <p>Please select any additional services you would like to add to your booking:</p>
      <form onSubmit={handleSubmit}>
        <div className="card mb-3">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="extra"
                id="extra1"
                value="travel_insurance"
                checked={selectedExtra === "travel_insurance"}
                onChange={handleExtraChange}
              />
              <label className="form-check-label" htmlFor="extra1">
                Travel Insurance
              </label>
              <p className="extra-description">Coverage for medical emergencies and trip cancellations.</p>
              <p className="extra-price">$50</p>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="extra"
                id="extra2"
                value="in_flight_meal"
                checked={selectedExtra === "in_flight_meal"}
                onChange={handleExtraChange}
              />
              <label className="form-check-label" htmlFor="extra2">
                In-flight Meal
              </label>
              <p className="extra-description">Enjoy a delicious meal during your flight.</p>
              <p className="extra-price">$20</p>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="extra"
                id="extra3"
                value="hotel_accommodation"
                checked={selectedExtra === "hotel_accommodation"}
                onChange={handleExtraChange}
              />
              <label className="form-check-label" htmlFor="extra3">
                Hotel Accommodation
              </label>
              <p className="extra-description">Book a comfortable hotel room for your stay.</p>
              <p className="extra-price">$100</p>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">Proceed to Payment</button>
        <a href="/checkout" className="btn btn-secondary mt-3 ml-2">Skip to Payment</a>
      </form>
    </div>
  );
}
