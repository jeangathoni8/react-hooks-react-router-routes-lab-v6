import { Link } from 'react-router-dom';

function MovieCard({ title, id }) {
  return (
    <article>
        <h2>{title}</h2>
        {/* Link to the movie detail page */}
        <Link to={`/movie/${id}`}>View Details</Link>
    </article>
  );
};

export default MovieCard;
