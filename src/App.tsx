import "./App.css";
import { useState } from "react";
import movies from "./data/movies.json";
import MovieCard from "./components/MovieCard";

function App() {
  const [obejrzane, setObejrzane] = useState([]);
  const [filtr, setFiltr] = useState("wszystkie");
  const [oceny, setOceny] = useState({});

  function oznaczJakoObejrzany(id) {
    setObejrzane((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  function ustawOcene(id, ocena) {
    setOceny((prev) => ({
      ...prev,
      [id]: ocena,
    }));            
  }

  function resetuj(){
    setObejrzane([]);
    setOceny({});
  }

  const wyswietlaneFilmy = movies.filter((movie) => {
    if (filtr === "obejrzane") {
      return obejrzane.includes(movie.id);
    }

    if (filtr === "nieobejrzane") {
      return !obejrzane.includes(movie.id);
    }

    return true;
  });

  return (
    <>
      <header>
        <h1>
          Obejrzane: {obejrzane.length} / {movies.length}
        </h1>
      </header>

      <nav>
        <button onClick={() => setFiltr("wszystkie")} id="wybor">Wszystkie</button>

        <button onClick={() => setFiltr("obejrzane")} id="wybor">Obejrzane</button>

        <button onClick={() => setFiltr("nieobejrzane")} id="wybor">Nieobejrzane</button>

        <button onClick={()=>resetuj()} id="wybor">Wyczyść wszystkie</button>
      </nav>
      <main>
        {wyswietlaneFilmy.length > 0 ? (
          wyswietlaneFilmy.map((movie) => (
            <MovieCard 
              key={movie.id}
              title={movie.title}
              year={movie.year}
              genre={movie.genre}
              czyObejrzane={obejrzane.includes(movie.id)}
              oznaczJakoObejrzany={() => oznaczJakoObejrzany(movie.id)}
              ocena={oceny[movie.id] || 0}
              ustawOcene={(ocena) => ustawOcene(movie.id, ocena)}
            />
          ))
        ) : (
          <h2>Brak filmów do wyświetlenia.</h2>
        )}
      </main>
    </>
  );
}

export default App;