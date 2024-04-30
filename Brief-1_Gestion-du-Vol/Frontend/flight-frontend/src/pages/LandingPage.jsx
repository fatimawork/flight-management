
import React from 'react'
import Booking from '../components/Booking'
import AboutPage from '../components/AboutPage'
import DestinationsPackages from '../components/FeaturesDestinationsPackages'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Feature from '../components/Feature'



export default function LandingPage() {
  return (
    <div>
        <Carousel />
        <Booking />
        <AboutPage/>
        <Feature/>
        <DestinationsPackages/>
        <Footer/>
    </div>
  )
}
