import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function AvailableFlights() {
  const location = useLocation();
  const { from, destination, departDate, returnDate, passengers } = location.state;

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
                    <Link to={{
                      pathname: "/extras",
                      state: {
                        selectedFlight: vol,
                        passengers: passengers
                      }
                    }} className="btn btn-primary">Add Extras</Link>
                    {/* Pass flight and passengers data to extras page */}
                    <Link to={{
                      pathname: "/payment",
                      state: {
                        selectedFlight: vol,
                        passengers: passengers
                      }
                    }} className="btn btn-secondary ml-2">Book Now</Link>
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
