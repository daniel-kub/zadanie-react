import "./App.css";
import movies from "./data/movies.json";
import MovieCard from "./components/MovieCard";
function App() {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
          />
        </li>
      ))}
    </ul>
  );
}

export default App;
