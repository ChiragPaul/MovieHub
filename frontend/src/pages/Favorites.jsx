import "../css/Home.css";
import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites">
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>
          Start by adding movies to your favorites and they will appear here.
        </p>
      </div>
    </div>
  );
}

export default Favorites;
