import React from 'react';

export default function ExtrasForm() {
  return (
    <div className="container mt-5">
      <h1>Extras Selection</h1>
      <p>Please select any additional services you would like to add to your booking:</p>
      <form action="payment.html">
        <div className="card mb-3">
          <div className="card-body">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="extra" id="extra1" value="travel_insurance" />
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
              <input className="form-check-input" type="radio" name="extra" id="extra2" value="in_flight_meal" />
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
              <input className="form-check-input" type="radio" name="extra" id="extra3" value="hotel_accommodation" />
              <label className="form-check-label" htmlFor="extra3">
                Hotel Accommodation
              </label>
              <p className="extra-description">Book a comfortable hotel room for your stay.</p>
              <p className="extra-price">$100</p>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">Proceed to Payment</button>
        <a href="payment.html" className="btn btn-secondary mt-3 ml-2">Skip to Payment</a>
      </form>
    </div>
  );
}
