import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Booking from './components/Booking';
import AboutPage from './components/AboutPage';
import FeaturesDestinationsPackages from './components/FeaturesDestinationsPackages';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Destination from './pages/Destination';
import AvailableVols from './pages/AvailablVols';
import Payment from './pages/Payment';
import Extras from './pages/Extras';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/available-flights" element={<AvailableVols />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Other routes */}
      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
