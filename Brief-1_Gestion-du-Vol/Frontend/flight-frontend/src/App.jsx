import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Booking from './components/Booking';
import AboutPage from './components/AboutPage';
import FeaturesDestinationsPackages from './components/FeaturesDestinationsPackages';
function App() {

  
      return (
        <div>
        <Navbar />
        <Carousel />
        <Booking />
        <AboutPage/>
        <FeaturesDestinationsPackages/>
       
    </div>
    );


}

export default App
