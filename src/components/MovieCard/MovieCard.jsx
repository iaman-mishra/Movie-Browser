import React from 'react';
import './MovieCard.css';
import { Link2 } from 'lucide-react';

const MovieCard = ({title,year,rating,overview,image}) => {
  return (
    <div className="movie-card">
      <div className="cardbox">
        <img src={image} alt="Project Thumbnail" />
        <div className="cardbox-layer">
          <h3>{title}</h3>
          <p className='year'>{year}</p>
          <p className='rating'>{rating}/10</p>
          <p className='overview'>{overview}</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Link2 />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard; 
