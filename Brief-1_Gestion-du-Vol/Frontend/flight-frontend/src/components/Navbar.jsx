import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if user is logged in on component mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        // Clear token from local storage
        localStorage.removeItem('token');
        // Update login status
        setIsLoggedIn(false);

        // Redirect to home page or any other route after logout
        navigate('/');
    };

    return (
        <div className="container-fluid position-relative nav-bar p-0">
            <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
                <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                    <a href="#" className="navbar-brand">
                        <h1 className="m-0 text-primary"><span className="text-dark">Maroc</span>Voyage</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/about" className="nav-item nav-link">About</a>
                            <a href="/destination" className="nav-item nav-link">Destination</a>
                            {isLoggedIn ? (
                                <button onClick={handleLogout} className="btn btn-danger mr-2 my-3 px-10">Logout</button>
                            ) : (
                                <>
                                    <button onClick={()=>navigate('/login')} className="btn btn-primary mr-2 my-3 px-10">Login</button>
                                    <button onClick={()=>navigate('/register')} className="btn btn-secondary  my-3 px-10">Register</button>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
