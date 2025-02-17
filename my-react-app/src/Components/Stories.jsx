import React from "react";
import "./stories.css";
import { FaLock, FaConciergeBell, FaKey, FaHotel } from "react-icons/fa";

const Stories = () => {
  return (
    <div className="container">
        <div className="main">
            <div className="header">
                <div className="user-info">
                    <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="avatar"
                    />
          <div>
            <h3>Joana Barros</h3>
            <p>Hotel Guest</p>
          </div>
        </div>
        <FaLock className="icon" />
      </div>

      {/* Recommendation Section */}
      <div className="recommendation">
        <div className="recommendation-card">
          <p className="price-tag">From $30/person</p>
          <h4>Enjoy some me time</h4>
          <p>Relax with our massages and treatments.</p>
        </div>
      </div> 
    </div>

      {/* Popular Experiences */}
      <div className="section">
        <h4>Popular experiences</h4>
        <div className="experiences">
          <div className="experience-card">
            <p>🚴‍♂️ Bike Riding</p>
            <p>Varied tour options</p>
          </div>
          <div className="experience-card">
            <p>🍽️ Dinner at the Table</p>
            <p>From $30/person</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="section">
        <h4>All services</h4>
        <div className="service">
          <FaHotel className="icon" />
          <p>Facilities</p>
        </div>
        <div className="service">
          <FaKey className="icon" />
          <p>Virtual Key</p>
        </div>
        <div className="service">
          <FaLock className="icon" />
          <p>My Room</p>
        </div>
        <div className="service">
          <FaConciergeBell className="icon" />
          <p>Order Room Service</p>
        </div>
      </div>

      {/* Points Section */}
      <div className="points">
        <p>06 points</p>
        <p>Accumulate points with your stay. They will turn into special offers for you.</p>
      </div>
    </div>
  );
};

export default Stories;
