import React from 'react'
import Header from '../components/Header'
import AvailableFlights from '../components/AvailableFlights'
import Footer from '../components/Footer'

export default function AvailablVols() {
  return (
    <div>
        <Header header="Available Flights" />
        <AvailableFlights />
        <Footer />
    </div>
  )
}
