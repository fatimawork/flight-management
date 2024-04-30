import React from 'react';
import destination1 from '../assets/img/destination-1.jpg';
import destination2 from '../assets/img/destination-2.jpg';
import destination3 from '../assets/img/destination-3.jpg';
import destination4 from '../assets/img/destination-4.jpg';
import destination5 from '../assets/img/destination-5.jpg';
import destination6 from '../assets/img/destination-6.jpg';
import package1 from '../assets/img/package-1.jpg';
import package2 from '../assets/img/package-2.jpg';
import package3 from '../assets/img/package-3.jpg';
import package4 from '../assets/img/package-4.jpg';
import package5 from '../assets/img/package-5.jpg';
import package6 from '../assets/img/package-6.jpg';


const DestinationsPackages = () => {
  return (
    <>
      

      {/* Destination Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Destination</h6>
            <h1>Explore Top Destinations</h1>
          </div>
          <div className="row">
            {/* Destination items */}
            {destinations.map(destination => (
              <div className="col-lg-4 col-md-6 mb-4" key={destination.id}>
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img className="img-fluid" src={destination.image} alt={destination.name} />
                  <a className="destination-overlay text-white text-decoration-none" href={destination.link}>
                    <h5 className="text-white">{destination.name}</h5>
                    <span>{destination.cities} Cities</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Destination End */}

      {/* Packages Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Packages</h6>
            <h1>Perfect Tour Packages</h1>
          </div>
          <div className="row">
            {/* Package items */}
            {tourPackages.map(tourPackage => (
              <div className="col-lg-4 col-md-6 mb-4" key={tourPackage.id}>
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src={tourPackage.image} alt={tourPackage.name} />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>{tourPackage.location}</small>
                      <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>{tourPackage.duration}</small>
                      <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>{tourPackage.person}</small>
                    </div>
                    <a className="h5 text-decoration-none" href={tourPackage.link}>{tourPackage.description}</a>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>{tourPackage.rating} <small>({tourPackage.reviews})</small></h6>
                        <h5 className="m-0">{tourPackage.price}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Packages End */}
    
    </>
  );
}

// Sample data for destinations
const destinations = [
  { id: 1, name: 'United States', cities: 100, image: destination1, link: '#' },
  { id: 2, name: 'United Kingdom', cities: 100, image: destination2, link: '#' },
  { id: 3, name: 'Australia', cities: 100, image: destination3, link: '#' },
  { id: 4, name: 'India', cities: 100, image: destination4, link: '#' },
  { id: 5, name: 'South Africa', cities: 100, image: destination5, link: '#' },
  { id: 6, name: 'Indonesia', cities: 100, image: destination6, link: '#' }
];

// Sample data for packages
const tourPackages = [
  { id: 1, name: 'Thailand Tour', location: 'Thailand', duration: '3 days', person: '2 Person', description: 'Discover amazing places of the world with us', rating: 4.5, reviews: 250, price: '$350', image: package1, link: '#' },
  { id: 2, name: 'Europe Tour', location: 'Europe', duration: '5 days', person: '2 Person', description: 'Explore the beauty of Europe with our exclusive tour package', rating: 4.8, reviews: 350, price: '$800', image: package2, link: '#' },
  { id: 3, name: 'Australia Adventure', location: 'Australia', duration: '7 days', person: '2 Person', description: 'Embark on an unforgettable adventure in Australia', rating: 4.7, reviews: 300, price: '$1200', image: package3, link: '#' },
  { id: 4, name: 'Japan Exploration', location: 'Japan', duration: '4 days', person: '2 Person', description: 'Discover the rich culture and tradition of Japan', rating: 4.6, reviews: 280, price: '$900', image: package4, link: '#' },
  { id: 5, name: 'South America Discovery', location: 'South America', duration: '6 days', person: '2 Person', description: 'Explore the wonders of South America with our guided tour', rating: 4.9, reviews: 400, price: '$1500', image: package5, link: '#' },
  { id: 6, name: 'Africa Safari', location: 'Africa', duration: '8 days', person: '2 Person', description: 'Embark on an exciting safari adventure in Africa', rating: 4.8, reviews: 380, price: '$2000', image: package6, link: '#' }
];

export default DestinationsPackages;
