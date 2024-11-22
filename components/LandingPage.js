import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div 
      className="landing-page" 
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})` }}
    >
      <h1 className="company-name">GreenThumbs</h1>
      <p className="company-description">
        Welcome to GreenThumbs, your one-stop shop for beautiful and vibrant houseplants. 
        Enhance your space with greenery today!
      </p>
      <button className="get-started" onClick={() => window.location.href = '/products'}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
