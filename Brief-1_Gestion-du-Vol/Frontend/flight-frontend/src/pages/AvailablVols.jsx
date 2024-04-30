import React from 'react'
import Header from '../components/Header'
import AvailableFlights from '../components/AvailableFlights'

export default function AvailablVols() {
  return (
    <div>
        <Header header="Available Flights" />
        <AvailableFlights />
    </div>
  )
}
