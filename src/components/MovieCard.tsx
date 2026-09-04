import { useState } from "react";

function MovieCard(props) {
  const [czyObejrzane, obejrzany] = useState(false);

  function dodajDoObejrzanych() {
    obejrzany(true);
  }

  return (
    <div>
      <h2>
        Tytuł: {props.title}, Rok: {props.year}, Gatunek: {props.genre}
      </h2>

      <button onClick={dodajDoObejrzanych}>
        {czyObejrzane ? "Obejrzane!" : "Dodaj do obejrzanych"}
      </button>
    </div>
  );
}

export default MovieCard;
