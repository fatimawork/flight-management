import React from 'react';
import about from '../assets/img/about.jpg'
import about1 from '../assets/img/about-1.jpg'
import about2 from '../assets/img/about-2.jpg' 

const AboutPage = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100" src={about} style={{ objectFit: 'cover' }} alt="About Us" />
            </div>
          </div>
          <div className="col-lg-6 pt-5 pb-lg-5">
            <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
              <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>About Us</h6>
              <h1 className="mb-3">We Provide Best Tour Packages In Your Budget</h1>
              <p>
                Welcome to MarocVoyage, your ultimate destination for seamless flight management and unforgettable travel experiences.
                At MarocVoyage, we understand that every journey is unique, and we're dedicated to crafting personalized tour packages that perfectly align with your desires and budget.
                With years of expertise in the travel industry, we have honed our skills to curate the best travel itineraries, ensuring that each moment of your trip is filled with wonder and excitement. Our team consists of passionate travel enthusiasts who are committed to providing you with unparalleled service and support from the moment you inquire about your dream getaway to the moment you return home with cherished memories.
              </p>
              <div className="row mb-4">
                <div className="col-6">
                  <img className="img-fluid" src={about1} alt="About 1" />
                </div>
                <div className="col-6">
                  <img className="img-fluid" src={about2} alt="About 2" />
                </div>
              </div>
              <a href="" className="btn btn-primary mt-1">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
