import React from 'react';
import './MovieCard.css';
import { Link2 } from 'lucide-react';
import {fetchVideos} from '../../utils/api.js';
import { useState,useEffect } from 'react';

const MovieCard = ({title,year,rating,overview,image,id}) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchVideos(id);
        setVideos(data); 
      } catch (error) {
        console.error(error);
      }
    };
    getVideos();
  }, [id]);

  const videoKey = videos.find((video) => video.type === "Trailer")?.key || videos[0]?.key;

  return (
    <div className="movie-card">
      <div className="cardbox">
        <img src={image} alt="Project Thumbnail" />
        <div className="cardbox-layer">
          <h3>{title}</h3>
          <p className='year'>{year}</p>
          <p className='rating'>{rating}/10</p>
          <p className='overview'>{overview}</p>
          <a href={`https://www.youtube.com/watch?v=${videoKey}`} target="_blank" rel="noopener noreferrer">
            <Link2 />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard; 
