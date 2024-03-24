import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const TileComponent = ({ location, onLocationSelect, onToggleFavorite }) => {
    return (
        <div className="grid-item" onClick={() => onLocationSelect(location)}>
            <img src={location.image} alt="Location" />
            <div className="grid-text">
                <h3>{location.name}</h3>
                <p>Price: ${location.price}</p>
                <p>Rating: {location.rating}</p>
                <button onClick={(e) => { e.stopPropagation(); onToggleFavorite(location.name); }} className="grid-favorite-btn">
                    {location.isFavorited ? <FavoriteIcon style={{ color: '#F25C5C' }} /> : <FavoriteBorderIcon style={{ color: 'black' }} />}
                </button>
            </div>
        </div>
    );
};

export default TileComponent;
