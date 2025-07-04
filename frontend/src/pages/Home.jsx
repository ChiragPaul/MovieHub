import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const Movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "1998" },
    { id: 3, title: "jurassic Park", release_date: "1980" },
    { id: 4, title: "Jack Ryan ", release_date: "2000" },
  ];
  const handleSearch = () => {
    alert(searchQuery);
  };
  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          {" "}
          Search
        </button>
      </form>
      {Movies.map((movie) => (
        //   movie.title.toLowerCase().startsWith(searchQuery) &&      using API FOR SEARCHING MOVIES
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Home;
