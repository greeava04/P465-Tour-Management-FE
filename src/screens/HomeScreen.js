import React, { useEffect, useState, image } from 'react'
import AppBarComponent from '../util/AppBarComponent'
import EZTravelLogo from '../images/EZTravelLogo.png'
const HomeScreen = () => {
  const [locations, setLocations] = useState([]);
  const [userSelectedLocationsetUserSelectedLocation] = useState();

  //We need to map each location to a grid item, rn it's hard coded, this is just to get us ready
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
      {/* We should make components for filter and searc like appbarcomponent */}
              <div class ="filters"></div>
              <div class = "search"></div>
            </div>
      {/* We will need to make this dynamic, taking from the locations array to only have a map that it populates */}
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
