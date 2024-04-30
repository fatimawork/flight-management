import React, { useState } from 'react';

function Booking() {
    const [from, setFrom] = useState('');
    const [destination, setDestination] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [passengers, setPassengers] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically handle the submission to a server
        console.log({ from, destination, departDate, returnDate, passengers });
    };

    return (
        <div className="container-fluid booking mt-5 pb-5">
            <form onSubmit={handleSubmit}>
                <div className="container pb-5">
                    <div className="bg-light shadow" style={{ padding: '30px' }}>
                        <div className="row align-items-center" style={{ minHeight: '60px' }}>
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <select className="custom-select px-4" style={{ height: '47px' }} value={from} onChange={e => setFrom(e.target.value)}>
                                            <option value="">From</option>
                                            <option value="city1">City 1</option>
                                            <option value="city2">City 2</option>
                                            <option value="city3">City 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <select className="custom-select px-4" style={{ height: '47px' }} value={destination} onChange={e => setDestination(e.target.value)}>
                                            <option value="">Destination</option>
                                            <option value="destination1">Destination 1</option>
                                            <option value="destination2">Destination 2</option>
                                            <option value="destination3">Destination 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <input type="date" className="form-control p-4" style={{ height: '47px' }} placeholder="Depart Date" value={departDate} onChange={e => setDepartDate(e.target.value)} />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <input type="date" className="form-control p-4" style={{ height: '47px' }} placeholder="Return Date" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" style={{ height: '47px' }} placeholder="Number of Passengers" value={passengers} onChange={e => setPassengers(e.target.value)} />
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-primary btn-block" style={{ height: '47px', marginTop: '-2px' }}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Booking;
