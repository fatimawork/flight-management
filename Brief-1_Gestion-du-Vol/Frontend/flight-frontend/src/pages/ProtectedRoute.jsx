import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthContext'; // Import your useAuth hook from the context

const ProtectedRoute = ({ children, inverse = false }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (inverse && isAuthenticated) {
        // Redirect authenticated users away from login/register
        return <Navigate to="/" state={{ from: location }} replace />;
    } else if (!inverse && !isAuthenticated) {
        // Redirect unauthenticated users away from protected routes
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;