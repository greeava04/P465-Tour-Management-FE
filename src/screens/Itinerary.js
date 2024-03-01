import AppBarComponent from "../util/AppBarComponent";
import React, { useEffect, useState, image } from 'react'
import EZTravelLogo from '../images/EZTravelLogo.png'

function Itinerary() {
  useEffect(() => {
    const savedElement = document.querySelector('.saved .grid-item');
    const bookedElement = document.querySelector('.booked .grid-item');

    if (savedElement) {
      savedElement.style.width = '150px'; 
      savedElement.style.height = '200px'; 
    }

    if (bookedElement) {
      bookedElement.style.width = '150px'; 
      bookedElement.style.height = '200px'; 
    }
  }, []); 

  return (
    <div>
      <AppBarComponent />
      {/* Add buttons 'saved' and 'booked' at the top as a menu for itinerary */}
      {/* Multiple div components to show bookings of different types  */}
      <h1>Itinerary Page</h1>
      <h2>Saved</h2>
      <div className='saved'>
        <div className="grid-item">
          <img src={EZTravelLogo} alt="Location Image" className='location_image' />
          <div className="grid-text">
            <h3>Location Name</h3>
            <p>Price: $XX</p>
            <p>Rating: ★★★★☆</p>
          </div>
        </div>
      </div>
      <h2>Booked</h2>
      <div className='booked'>
        <div className="grid-item">
          <img src={EZTravelLogo} alt="Location Image" className='location_image' />
          <div className="grid-text">
            <h3>Location Name</h3>
            <p>Price: $XX</p>
            <p>Rating: ★★★★☆</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;
