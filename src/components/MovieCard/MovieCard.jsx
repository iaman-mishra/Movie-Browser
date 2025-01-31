import React from 'react';
import './MovieCard.css';
import movicard from '../../assets/movicard.jpg';
import { Link2 } from 'lucide-react';

const MovieCard = () => {
  return (
    <div className="cardbox">
      <img src={movicard} alt="Project Thumbnail" />
      <div className="cardbox-layer">
        <h4>Movie Title</h4>
        <p className='year'>YYYY</p>
        <p className='rating'>9.5/10</p>
        <p>Gener: Action , Thriller, Fantasy</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat provident ab suscipit molestias voluptas asperiores placeat blanditiis necessitatibus incidunt. Tenetur ipsa, sint aliquam nesciunt sed doloremque laudantium harum pariatur?</p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Link2 />
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
