import React from 'react'
import Header from '../components/Header'
import DestinationsPackages from '../components/FeaturesDestinationsPackages'
import Footer from '../components/Footer'

export default function Destination() {
  return (
    <div>
        <Header header="Destination" />
        <DestinationsPackages />
        <Footer />
    </div>
  )
}
