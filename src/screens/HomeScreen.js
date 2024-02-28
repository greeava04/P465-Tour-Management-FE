import React, { useEffect, useState, image } from 'react'
import AppBarComponent from '../util/AppBarComponent'
import EZTravelLogo from '../images/EZTravelLogo.png'
import SearchComponent from '../util/SearchComponent'
import Container from '@mui/material/Container';


const HomeScreen = () => {
  const [locations, setLocations] = useState();
  const [userSelectedLocation, setUserSelectedLocation] = useState();

  //We need to map each location to a grid item, rn it's hard coded, this is just to get us ready
  useEffect(
    () => {
      // fetch('http://localhost:3000/getRandPlace')
      // .then(response => response.json())
      // .then(data => setLocations(data))
      setLocations([{image : EZTravelLogo, name: "Location Name", rating: "★★★★☆", price: "20"}])
    }, []
  )



    return (
        <div class="container">
            <AppBarComponent />
            <Container maxWidth="xl">
            <div class="sidebar">
      {/* We should make components for filter and search like appbarcomponent */}
              <div class ="filters"></div>
              <div class = "search">
                <SearchComponent />
              </div>

            </div>
      {/* We will need to make this dynamic, taking from the locations array to only have a map that it populates */}
            <div class="grid-container">
              <Place place={{image : EZTravelLogo, name: "Location Name", rating: "★★★★☆", price: "20"}}></Place>
              {
                locations &&
                locations.map((place) => {
                  return <Place place={place}></Place>
                })
              }
            </div>
            </Container>
        </div>
    )
}

const Place = (props) => {
  return (
    <div class="grid-item">
      <img src={props.place.image} alt={props.place.name} />
       <div class="grid-text">
      <h3>{props.place.name}</h3>
      <p>Price: {props.place.price}</p>
      <p>Rating: {props.place.rating}</p>
      </div>
    </div>
  )
};

export default HomeScreen
