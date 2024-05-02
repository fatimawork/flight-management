import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [passengers, setPassengers] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/available-flights',{
      state:{from,destination,departDate,passengers}
    });
  };

  return (
    <div className="container-fluid booking mt-5 pb-5">
      <form onSubmit={handleSubmit}>
        <div className="container pb-5">
          <div className="bg-light shadow p-4">
            <div className="row align-items-center">
              <div className="col-md-0">
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <select className="custom-select" style={{ height: '55px', fontSize: '16px' }} value={from} onChange={e => setFrom(e.target.value)}>
                      <option value="">From</option>
                      <option value="TANTAN">TANTAN</option>
                      <option value="city2">City 2</option>
                      <option value="city3">City 3</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <select className="custom-select" style={{ height: '55px', fontSize: '16px' }} value={destination} onChange={e => setDestination(e.target.value)}>
                      <option value="">Destination</option>
                      <option value="PARIS">PARIS</option>
                      <option value="destination2">Destination 2</option>
                      <option value="destination3">Destination 3</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <input type="date" className="form-control" style={{ height: '55px', fontSize: '16px' }} placeholder="Depart Date" value={departDate} onChange={e => setDepartDate(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <input type="number" className="form-control" style={{ height: '55px', fontSize: '16px' }} placeholder="Number of Passengers" value={passengers} onChange={e => setPassengers(e.target.value)} />
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary btn-block" style={{ height: '55px', fontSize: '16px' }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Booking;
