import React, { useEffect, useState } from 'react';
import AppBarComponent from '../util/AppBarComponent';
import EZTravelLogo from '../images/EZTravelLogo.png';
import SearchComponent from '../util/SearchComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HomeScreen = () => {
  const [locations, setLocations] = useState([
    { name: 'Sample Location 1', price: 150, rating: '★★★★☆', description: 'This is a sample description for Location 1.', image: EZTravelLogo, isFavorited: false },
    { name: 'Sample Location 2', price: 250, rating: '★★★☆☆', description: 'This is a sample description for Location 2.', image: EZTravelLogo, isFavorited: false },
    { name: 'Sample Location 3', price: 350, rating: '★★★★★', description: 'This is a sample description for Location 3.', image: EZTravelLogo, isFavorited: false },
  ]);

  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/getRandPlace')
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.log('Error fetching locations:', error));
  }, []);

  const handleClose = () => {
    setSelectedLocation(null);
  };

  const toggleFavorite = (locationName) => {
    setLocations(locations.map(location =>
      location.name === locationName ? { ...location, isFavorited: !location.isFavorited } : location
    ));

    // If a location is selected and its favorite status changes, update the selectedLocation as well
    if (selectedLocation && selectedLocation.name === locationName) {
      setSelectedLocation({
        ...selectedLocation,
        isFavorited: !selectedLocation.isFavorited
      });
    }
  };


  return (
    <div className="container">
      <AppBarComponent />
      <div className="sidebar">
        <div className="filters"></div>
        <div className="search">
          <SearchComponent />
        </div>
      </div>
      <div className="grid-container">
        {locations.map((location, index) => (
          <div key={index} className="grid-item" onClick={() => setSelectedLocation(location)}>
            <img src={location.image || EZTravelLogo} alt="Location" />
            <div className="grid-text">
              <h3>{location.name}</h3>
              <p>Price: ${location.price}</p>
              <p>Rating: {location.rating}</p>
              <button onClick={(e) => { e.stopPropagation(); toggleFavorite(location.name); }} className="grid-favorite-btn">
                {location.isFavorited ? <FavoriteIcon style={{ color: '#F25C5C' }} /> : <FavoriteBorderIcon style={{ color: 'black' }}/>}
              </button>
            </div>
            
          </div>
        ))}
      </div>
      {selectedLocation && (
        <div className="modal-backdrop">
          <div className="modal">
            <img src={selectedLocation.image || EZTravelLogo} alt="Location" />
            <h3>{selectedLocation.name}</h3>
            <p>Price: ${selectedLocation.price}</p>
            <p>Rating: {selectedLocation.rating}</p>
            <p>Description: {selectedLocation.description}</p>
            <button onClick={handleClose} className="close-btn">X</button>
            <button onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedLocation.name); }} className="favorite-btn">
              {selectedLocation.isFavorited ? <FavoriteIcon style={{ color: '#F25C5C' }} /> : <FavoriteBorderIcon style={{ color: 'black' }}/>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
