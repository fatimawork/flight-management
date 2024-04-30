import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Booking from './components/Booking';
function App() {
  const [count, setCount] = useState(0)

  
      return (
        <div>
        <Navbar />
        <Carousel />
        <Booking />
       
    </div>
    );


}

export default App
