import React, { useEffect, useState } from "react";
import "./Home.css";
import { fetchMovies, fetchVideos } from "../utils/api.js";
import { Flame, Play } from "lucide-react";
import MovieCard from "../components/MovieCard/MovieCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Searchbar from "../components/SearchBar/Searchbar.jsx"

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videos, setVideos] = useState([]);
  const [banner, setBanner] = useState([]);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchMovies(query,1);
        setMovies(data);
        if(!query){
          setBanner(data);
        }
        setHasMore(true);
        setPage(2);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [query]);


  const loadMoreMovies = async () => {
    try {
      const data = await fetchMovies(query,page);
      setMovies((prevMovies) => [...prevMovies, ...data]);
      if(!query){
        setPage((prevPage) => prevPage + 1);
      }else{
        setPage(1)
      }
      if (data.length === 0) setHasMore(false);
    } catch (error) {
      console.error("Error loading more movies:", error);
    }
  };

  const videoKey = videos.find((video) => video.type === "Trailer")?.key || videos[0]?.key;



  useEffect(() => {
    if (banner.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banner.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [banner]);


  useEffect(() => {
    if (!banner[currentIndex]) return;

    const getVideo = async () => {
      try {
        const data = await fetchVideos(banner[currentIndex].id);
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    getVideo();
  }, [currentIndex, banner]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Searchbar onSearch={setQuery}/>
      {banner.length > 0 && (
        <div className="hero">
          <img
            src={`https://image.tmdb.org/t/p/original${banner[currentIndex]?.backdrop_path}`}
            alt={banner[currentIndex]?.title || "Movie Banner"}
            className="banner-img"
          />
          <div className="banner-description">
            <p className="title">{banner[currentIndex]?.title}</p>
            <p className="description">{banner[currentIndex]?.overview}</p>
          </div>
          <div className="banner-buttons">
            <div className="button">
              <Play className="paly"/>
              {videos.length > 0 ? (
                <a href={`https://www.youtube.com/watch?v=${videoKey}`} target="_blank" rel="noopener noreferrer">
                  <p>Trailer</p>
                </a>
              ) : (
                <p>No Trailer Available</p>
              )}
            </div>
            <div className="button">
              <p>More Info</p>
            </div>
          </div>
        </div>
      )}

   
      <div className="movie-card-section">
        <h1>Trending Now <Flame className="fire" /></h1>
        <InfiniteScroll
          dataLength={movies.length}
          next={loadMoreMovies}
          hasMore={hasMore}
          loader={<p>Loading more movies...</p>}
        >
          <div className="moviecards-container">
            {movies.map((movie) => (
              <MovieCard 
                key={movie.id}
                title={movie.title}
                year={new Date(movie.release_date).getFullYear()}
                rating={movie.vote_average}
                overview={movie.overview}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                id={movie.id}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Home;
