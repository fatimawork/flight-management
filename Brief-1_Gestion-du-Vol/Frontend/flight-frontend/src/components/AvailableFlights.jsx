import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useBooking } from './BookingContext';
import { Button } from 'bootstrap';

function AvailableFlights() {
  const { bookingDetails,updateBookingDetails } = useBooking(); // Destructure to access booking details directly
  const { from, destination, departDate, returnDate, passengers } = bookingDetails;
  const navigate= useNavigate();
  const [vols, setVols] = useState([]);
  useEffect(() => {
    fetchAvailableFlights();
  }, [from, destination, departDate, returnDate]);

  async function fetchAvailableFlights() {
    try {
      const response = await fetch(`http://localhost:3000/api/vol/volsByArriveDest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          depart: from,
          arrivee: destination,
          date_depart: departDate + "T00:00:00.000Z",
          date_arrivee: returnDate + "T00:00:00.000Z"
        })
      });
      const data = await response.json();
      setVols(data);
    } catch (error) {
      console.error('Error fetching available flights:', error);
    }
  }
  const bookNow = (vol) => {
    // Handle booking logic here
    updateBookingDetails(
      {
        selectedFlight:vol.vol_id,
        totalAmount:vol.prix

      }
    )
    navigate('/checkout')
  }
  const addExtras = (vol) => {
    // Handle booking logic here
    updateBookingDetails(
      {
        selectedFlight:vol.vol_id,
        totalAmount:vol.prix

      }
    )
    navigate('/extras')
  }


  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Available flights</h6>
          <h1>Explore Available Flights</h1>
        </div>
        <div className="container mt-5">
          <div className="row">
            {vols.map((vol, i) => (
              <div className="col-md-6 mb-4" key={vol.vol_id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Flight {i + 1}</h5>
                    <p className="card-text">Departure: {vol.ville_depart} | Arrival: {vol.ville_arrivee}</p>
                    <p className="card-text">Departure Time: {vol.heure_depart} | Arrival Time: {vol.heure_arrivee}</p>
                    <p className="card-text">Price: ${vol.prix}</p>
                    <button onClick={()=>addExtras(vol)}  className="btn btn-primary">Add Extras</button>
                    {/* Pass flight and passengers data to extras page */}
                    <button  onClick={()=>bookNow(vol)} className="btn btn-secondary ml-2">Book Now</button>
                    {/* Pass flight and passengers data to payment page */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableFlights;
