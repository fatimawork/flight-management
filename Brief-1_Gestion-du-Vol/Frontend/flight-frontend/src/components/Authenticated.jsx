import React, { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const Authenticated = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      if(location.pathname !== '/login' && location.pathname !== '/register'){
        history('/login');
      }
    } else {
      checkAuthentication();
    }
  }, []);

    const decodeToken = (token) => {   
    try {
      const decoded = JSON.parse(atob(token.split('.')));
      return decoded;
   
    } catch (error) {
      return null;
    }
    };

  const checkAuthentication = async () => {
    const token = localStorage.getItem('token');
    console.log(decodeToken(token));
    const id = decodeToken(token).id;
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('role', data.role);
        
      }
      else {
        if(location.pathname == '/payment' || location.pathname == '/admin'){
          history('/login');
        }
      }
    } catch (error) {
      
    }
  };

  return children;
};


export default Authenticated;