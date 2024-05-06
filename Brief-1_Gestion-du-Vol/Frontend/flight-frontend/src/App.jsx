import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Destination from './pages/Destination';
import AvailableVols from './pages/AvailablVols'; // Make sure the spelling matches your import if necessary
import Payment from './pages/Payment';
import Extras from './pages/Extras';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './components/AuthContext'; // Ensure you import AuthProvider
import ProtectedRoute from './pages/ProtectedRoute'; // Ensure you import ProtectedRoute
import Checkout from './pages/Checkout';
import { BookingProvider } from './components/BookingContext';
import ThankYouPage from './pages/ThankYouPagge';

function App() {
  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/available-flights" element={<AvailableVols />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
            <Route path="/extras" element={<Extras />} />
            <Route path="/login" element={<ProtectedRoute inverse={true}><Login /></ProtectedRoute>} />
            <Route path="/register" element={<ProtectedRoute inverse={true}><Register /></ProtectedRoute>} />
            {/* Other routes */}
          </Routes>
        </div>
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
