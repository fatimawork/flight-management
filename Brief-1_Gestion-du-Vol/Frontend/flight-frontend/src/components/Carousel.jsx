import React, { useState } from 'react';
import image1 from '../assets/img/carousel-1.jpg'
import image2 from '../assets/img/carousel-2.jpg'


function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        {
            src: image1,
            captionTitle: "Tours & Travel",
            captionText: "Let's Discover The World Together"
        },
        {
            src: image2,
            captionTitle: "Tours & Travel",
            captionText: "Discover Amazing Places With Us"
        }
    ];

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    return (
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide">
                <div className="carousel-inner">
                    {images.map((img, index) => (
                        <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                            <img className="w-100" src={img.src} alt="Slide"/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: "900px"}}>
                                    <h4 className="text-white text-uppercase mb-md-3">{img.captionTitle}</h4>
                                    <h1 className="display-3 text-white mb-md-4">{img.captionText}</h1>
                                    <a href="#" className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" role="button" onClick={goToPrev}>
                    <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" role="button" onClick={goToNext}>
                    <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Carousel;
