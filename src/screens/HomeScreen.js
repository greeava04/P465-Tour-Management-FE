import React, { useEffect, useState, image } from 'react'
import AppBarComponent from '../util/AppBarComponent'
import EZTravelLogo from '../images/EZTravelLogo.png'
const HomeScreen = () => {
  const [locations, setLocations] = useState([]);
  const [userSelectedLocationsetUserSelectedLocation] = useState();

  // useEffect(
  //   () => {
  //     fetch('http://localhost:3000/getRandPlace')
  //     .then(response => response.json())
  //     .then(data => setLocations(data))
  //   }, []
  // )



    return (
        <div class="container">
            <AppBarComponent />
            <div class="sidebar">
              <div class ="filters"></div>
              <div class = "search"></div>
            </div>
            <div class="grid-container">
              <div class="grid-item">
                <img src={EZTravelLogo} alt="Location Image" />
                <h3>Location Name</h3>
                <p>Price: $XX</p>
                <p>Rating: ★★★★☆</p>
              </div>
              <div class="grid-item">
                <img src={EZTravelLogo} alt="Location Image" />
                <h3>Location Name</h3>
                <p>Price: $XX</p>
                <p>Rating: ★★★★☆</p>
              </div>
              <div class="grid-item">
                <img src={EZTravelLogo} alt="Location Image" />
                <h3>Location Name</h3>
                <p>Price: $XX</p>
                <p>Rating: ★★★★☆</p>
              </div>
              <div class="grid-item">
                <img src={EZTravelLogo} alt="Location Image" />
                <h3>Location Name</h3>
                <p>Price: $XX</p>
                <p>Rating: ★★★★☆</p>
              </div>
            </div>
        </div>
    )
}

export default HomeScreen
