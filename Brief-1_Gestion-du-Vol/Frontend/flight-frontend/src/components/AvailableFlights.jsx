import React from 'react';

function AvailableFlights() {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Available flights</h6>
          <h1>Explore Available Flights</h1>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Flight 1</h5>
                  <p className="card-text">Departure: City 1 | Arrival: City 2</p>
                  <p className="card-text">Departure Time: 08:00 | Arrival Time: 10:00</p>
                  <p className="card-text">Price: $200</p>
                  <a href="/extras" className="btn btn-primary">Add Extras</a>
                  <a href="/payment" className="btn btn-secondary ml-2">Book Now</a>
                </div>
              </div>
            </div>
            {/* Add margin between cards */}
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Flight 2</h5>
                  <p className="card-text">Departure: City 3 | Arrival: City 4</p>
                  <p className="card-text">Departure Time: 09:00 | Arrival Time: 11:00</p>
                  <p className="card-text">Price: $250</p>
                  <a href="/extras" className="btn btn-primary">Add Extras</a>
                  <a href="#" className="btn btn-secondary ml-2">Book Now</a>
                </div>
              </div>
            </div>
            {/* Add more flight cards here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableFlights;
