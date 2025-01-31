import React, { useEffect, useState } from "react";
import "./Home.css";
import { fetchMovies } from "../utils/api.js";
import { Play } from "lucide-react";

const Home = () => {
  const [movies, setMovies] = useState([]); // Store movie details
  const [loading, setLoading] = useState(true); // Loading state
  const [currentIndex, setCurrentIndex] = useState(0); // Track active banner



  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data); // Store movies in state
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);



  // Slideshow effect: Change image every 3 seconds
  useEffect(() => {
    if (movies.length === 0) return; // Prevent running if no movies
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length-1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); 
  }, [movies]);



  if (loading) {
    return <p>Loading...</p>;
  }



  return (
    <div className="hero">
      {movies.length > 0 && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original${movies[currentIndex]?.backdrop_path}`}
            alt={movies[currentIndex]?.title}
            className="banner-img"
          />
          <div className="banner-description">
            <p className="title">{movies[currentIndex]?.title}</p>
            <p className="description">{movies[currentIndex]?.overview}</p>
          </div>
          <div className="banner-buttons">
            <div className="button">
              <Play/>
              <p>Trailer</p>
            </div>
            <div className="button">
              <p>More info</p>
            </div>

          </div>

          
        </>
      )}
    </div>
  );
};

export default Home;
