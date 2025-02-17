import React from "react";
import "./stories.css";
import { IoIosTabletPortrait } from "react-icons/io";
import { FaBookmark, FaChevronRight } from "react-icons/fa";
import { FaLock, FaConciergeBell, FaKey, FaHotel, } from "react-icons/fa";

const Stories = () => {
  return (
    <div className="container">
        <div className="main">
        <div className="user-header">
        <div className="user-info">
          <img
            src="https://th.bing.com/th/id/OIP.b2-meX2zxLYhbURyQTcGFQHaE8?pid=ImgDet&w=191&h=127&c=7" 
            alt="User"
            className="avatar"
          />
          <div>
            <h3 className="user-name">Joana Barros</h3>
            <p className="user-role">Hotel Guest</p>
          </div>
        </div>
        <IoIosTabletPortrait  className="lock-icon" />
      </div>

      
      <div className="recommendation">
        <h4>Recommended for you</h4>
      </div>
      <div className="recommendation-card">
      <div className="rec-image-container">
        <img
          src="https://th.bing.com/th?q=Swimming+Pool+Lighting+Decor+Ideas&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
          alt="Spa Treatment"
          className="rec-image"
        />
        <FaBookmark className="bookmark-icon" />
      </div>

      <div className="rec-content">
        <span className="price-tag">From $30/person</span>
        <h4 className="rec-title">Enjoy some me time</h4>
        <p className="rec-desc">Relax with our massages and treatments.</p>
        <p className="rec-subtext">Spa facilities will close in 4 hours</p>
      </div>

      <FaChevronRight className="arrow-icon" />

      <div className="pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
    </div>

     
     <div className="popular-experiences">
        <h3 className="section-title">Popular experiences</h3>

        <div className="experiences-container">
          <div className="experience-card">
            <span className="experience-number">02</span>
            <img src="https://th.bing.com/th?q=Free+Pictures+of+Bike+Riding&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="Bike Riding" className="experience-img" />
            <div className="experience-details">
              <h4 className="experience-title">Bike Riding</h4>
              <p className="experience-desc">Varied tour options</p>
            </div>
          </div>

          <div className="experience-card">
            <span className="experience-number">03</span>
            <img src="https://th.bing.com/th/id/OIP.eCWskbjMapvq1teyS3JcJwHaF0?w=149&h=187&c=7&r=0&o=5&pid=1.7" alt="Dinner at the Table" className="experience-img" />
            <div className="experience-details">
              <h4 className="experience-title">Dinner at the Table</h4>
              <p className="experience-desc">From $30/person</p>
            </div>
          </div>
        </div>

        <div className="pagination1">
          <span className="dot active2"></span>
          <span className="dot2"></span>
          <span className="dot2"></span>
        </div>
      </div>

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

      <div className="points">
        <p>06 points</p>
        <p>Accumulate points with your stay. They will turn into special offers for you.</p>
      </div>
    </div>
  );
};

export default Stories;
