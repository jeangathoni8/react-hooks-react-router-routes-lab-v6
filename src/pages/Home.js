import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  // State to store the list of movies
  const [movies, setMovies] = useState([]);

  // Fetch movies data
  useEffect(() => {
    // Simulating fetching data from an API
    const fetchMovies = async () => {
      // Example data fetch simulation
      const movieData = [
        { id: 1, title: 'Movie Title 1' },
        { id: 2, title: 'Movie Title 2' },
        { id: 3, title: 'Movie Title 3' }
      ];
      setMovies(movieData);
    };

    fetchMovies();
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <header>
        <NavBar /> {/* Include the NavBar if needed */}
      </header>
      <main>
        <h1>Home Page</h1> {/* Home Page title */}
        <section>
          {/* Render movie cards */}
          {movies.map(movie => (
            <MovieCard key={movie.id} title={movie.title} id={movie.id} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
