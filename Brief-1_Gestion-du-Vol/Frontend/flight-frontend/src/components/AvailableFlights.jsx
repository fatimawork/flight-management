import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function AvailableFlights() {
  const location = useLocation();
  const { from, destination, departDate, passengers } = location.state;

  const [vols,setVols] = useState([])
  useEffect(()=>{
    fetchAvailableFlights()
  },[from,destination,departDate])
   async function fetchAvailableFlights() {
    console.log(JSON.stringify({
      depart: from,
          arrivee: destination,
          date_depart: departDate+"T00:00:00.000Z"
    }))
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
          date_depart: departDate+"T00:00:00.000Z"
        })
      });
      const data = await response.json();
      setVols(data)
      console.log(data); // Handle the response data
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
            {
              vols.map((vol,i)=>(
                <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Flight {i+1}</h5>
                    <p className="card-text">Departure: {vol.ville_depart} | Arrival: {vol.ville_arrivee}</p>
                    <p className="card-text">Departure Time: {vol.heure_depart} | Arrival Time: {vol.heure_arrivee}</p>
                    <p className="card-text">Price: ${vol.prix}</p>
                    <a href="/extras" className="btn btn-primary">Add Extras</a>
                    <a href="/payment" className="btn btn-secondary ml-2">Book Now</a>
                  </div>
                </div>
                </div>
              ))
            }
           
            {/* Add margin between cards */}
           
            {/* Add more flight cards here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableFlights;
