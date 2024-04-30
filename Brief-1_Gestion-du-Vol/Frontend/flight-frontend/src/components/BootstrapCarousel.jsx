import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function BootstrapCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src="img/carousel-1.jpg" alt="First slide"/>
                <Carousel.Caption>
                    <h3>Tours & Travel</h3>
                    <p>Let's Discover The World Together</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="img/carousel-2.jpg" alt="Second slide"/>
                <Carousel.Caption>
                    <h3>Tours & Travel</h3>
                    <p>Discover Amazing Places With Us</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BootstrapCarousel;
