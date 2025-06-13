import React from 'react';
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>Page not found</p>
        <a href="/" style={{ color: '#0066cc', textDecoration: 'none' }}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
