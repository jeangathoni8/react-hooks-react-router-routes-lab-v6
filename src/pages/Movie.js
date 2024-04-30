import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams(); // Getting the id from URL
  const [movie, setMovie] = useState(null); // State to store the movie data

  // Fetch the movie data based on the id
  useEffect(() => {
    const fetchMovie = async () => {
      //fetch request
      const response = await fetch(`http://localhost:4000/movies${id}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]); // Depend on id to refetch when it changes

  return (
    <>
      <header>
        <NavBar /> {/* Navigation bar included */}
      </header>
      <main>
        {/* Conditional rendering in case data fetching is not complete or fails */}
        {movie ? (
          <>
            <h1>{movie.title}</h1> {/* Movie title */}
            <p>{movie.time}</p> {/* Movie time */}
            <div>
              {/* Rendering each genre in a span */}
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
          </>
        ) : (
          <p>Loading movie details...</p> // Loading or error message
        )}
      </main>
    </>
  );
}

export default Movie;
