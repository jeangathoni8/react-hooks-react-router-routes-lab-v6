import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

function Actors() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch('http://localhost:4000/actors');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setActors(data);
      } catch (error) {
        console.error("Failed to fetch actors:", error);
      }
    };
  
    fetchActors();
  }, []);
  

  return (
    <>
      <header>
        <NavBar /> {/* Include the NavBar for consistent navigation */}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
