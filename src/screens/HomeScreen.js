import React, { useEffect, useState } from 'react';
import AppBarComponent from '../util/AppBarComponent';
import EZTravelLogo from '../images/EZTravelLogo.png';
import SearchComponent from '../util/SearchComponent';

const HomeScreen = () => {
    const [locations, setLocations] = useState([
        // Default mock data
        { name: 'Sample Location 1', price: 150, rating: '★★★★☆', description: 'This is a sample description for Location 1.', image: EZTravelLogo },
        { name: 'Sample Location 2', price: 250, rating: '★★★☆☆', description: 'This is a sample description for Location 2.', image: EZTravelLogo },
        { name: 'Sample Location 3', price: 350, rating: '★★★★★', description: 'This is a sample description for Location 3.', image: EZTravelLogo },
        // Add more as needed
    ]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        // Your API call to fetch locations, replace the URL with your actual endpoint
        fetch('http://localhost:3000/getRandPlace')
            .then(response => response.json())
            .then(data => setLocations(data))
            .catch(error => console.log('Error fetching locations:', error)); // Log errors for debugging
    }, []);

    const handleClose = () => {
        setSelectedLocation(null); // Close the overlay
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
                        </div>
                    </div>
                ))}
            </div>
            {selectedLocation && (
                <div className="overlay">
                    <div className="overlay-content">
                        <img src={selectedLocation.image || EZTravelLogo} alt="Location" />
                        <h3>{selectedLocation.name}</h3>
                        <p>Price: ${selectedLocation.price}</p>
                        <p>Rating: {selectedLocation.rating}</p>
                        <p>Description: {selectedLocation.description}</p>
                        <button onClick={handleClose} className="close-btn">X</button>
                        <button className="favorite-btn">❤</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeScreen;
