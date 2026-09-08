function MovieCard(props) {
  return (
    <div id="box">
      <h2>
        Tytuł: {props.title}, Rok: {props.year}, Gatunek: {props.genre}
      </h2>

      <button onClick={props.oznaczJakoObejrzany}>
        {props.czyObejrzane ? "Obejrzane!" : "Dodaj do obejrzanych"}
      </button>

      <div>
        <h3>Wybierz ocene</h3>
        {[1, 2, 3, 4, 5].map((numer) => (
          <span
            id="ocena"
            key={numer}
            onClick={() => props.ustawOcene(numer)}
            style={{color: numer === props.ocena ? "gold" : "black"}}
          >
            {numer}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;