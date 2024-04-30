import React from 'react'
import Header from '../components/Header'
import AboutPage from '../components/AboutPage'
import Footer from '../components/Footer'
import Feature from '../components/Feature'

export default function () {
  return (
    <div>
        <Header header="About" />
        <AboutPage />
        <Feature />
        <Footer />
    </div>
  )
}
